import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts as fallbackBlogPosts, BlogPost } from "@/data/blogs";
import Button from "@/components/common/Button";
import SubPageCTA from "@/components/common/SubPageCTA";
import { api } from "@/lib/api";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const res = await api.getBlogs();
    let posts: any[] = [];
    if (res && Array.isArray(res.data)) posts = res.data;
    else if (Array.isArray(res)) posts = res;
    
    if (posts.length > 0) {
      return posts.map((post) => ({
        slug: post.slug,
      }));
    }
  } catch (error) {
    // ignore and fallback
  }

  return fallbackBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  let post: BlogPost | undefined;
  
  try {
    const res = await api.getBlogBySlug(slug);
    if (res && res.data) post = res.data;
    else if (res && res.slug) post = res;
  } catch (error) {
    // ignore
  }

  if (!post) {
    post = fallbackBlogPosts.find((p) => p.slug === slug);
  }

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  
  return {
    title: `${post.title} — Reddy Book Blog`,
    description: post.desc,
    keywords: [post.tag, "Reddy Book Blog", "Betting Advice", "Exchange Trading"],
    alternates: {
      canonical: `https://reddybook.club/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} — Reddy Book Blog`,
      description: post.desc,
      url: `https://reddybook.club/blog/${slug}`,
      siteName: "Reddy Book Exchange",
      images: [
        {
          url: `https://reddybook.club${post.image || "/images/blog_exchange.png"}`,
        },
      ],
      type: "article",
      publishedTime: post.date,
    },
  };
}

// Custom simple markdown to HTML parser for our articles
function parseMarkdown(md: string): string {
  let html = md.trim();

  // Normalize line endings
  html = html.replace(/\r\n/g, "\n");

  // Bold text: **text**
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Math blocks: $$\text{Liability} = ...$$
  html = html.replace(/\$\$(.*?)\$\$/g, '<div class="math-block bg-white/[0.03] p-4 rounded-xl font-mono border border-gold/10 text-center my-4 text-gold">$1</div>');

  // Warnings / Alerts: > [!WARNING] \n > text
  html = html.replace(/>\s*\[!WARNING\]\s*\n>\s*(.*?)(?=\n\n|\n[^\s>])/g, (_, text) => {
    return `<div class="warning-alert bg-red-950/20 border-l-4 border-red-500 p-4 rounded-r-xl my-6">
      <div class="flex items-center gap-2 mb-1">
        <i class="bi bi-exclamation-triangle-fill text-red-500"></i>
        <strong class="text-red-500 font-heading">WARNING</strong>
      </div>
      <p class="text-muted text-[0.9rem] leading-relaxed mb-0">${text.trim()}</p>
    </div>`;
  });

  // Table replacement
  const lines = html.split("\n");
  let inTable = false;
  let tableHeaderParsed = false;
  let tableHtml = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("|") && line.endsWith("|")) {
      if (!inTable) {
        inTable = true;
        tableHtml = '<div class="overflow-x-auto my-6 border border-gold/15 rounded-xl"><table class="w-full text-[0.88rem] text-left border-collapse">';
      }

      const cells = line.split("|").slice(1, -1).map(c => c.trim());

      if (line.includes("---|") || line.includes("--- |")) {
        continue;
      }

      if (!tableHeaderParsed) {
        tableHeaderParsed = true;
        tableHtml += '<thead class="bg-gold/10 border-b border-gold/20"><tr class="text-gold font-heading font-black">';
        cells.forEach(cell => {
          tableHtml += `<th class="p-4">${cell}</th>`;
        });
        tableHtml += "</tr></thead><tbody>";
      } else {
        tableHtml += '<tr class="border-b border-white/5 hover:bg-white/[0.01] transition-colors">';
        cells.forEach(cell => {
          tableHtml += `<td class="p-4 text-dim font-medium">${cell}</td>`;
        });
        tableHtml += "</tr>";
      }

      const nextLine = lines[i + 1]?.trim();
      if (!nextLine || !nextLine.startsWith("|")) {
        tableHtml += "</tbody></table></div>";
        inTable = false;
        tableHeaderParsed = false;
        lines[i] = tableHtml;
      } else {
        lines[i] = "";
      }
    }
  }
  html = lines.join("\n");

  // Headings
  html = html.replace(/^#\s+(.*?)$/gm, '<h1 class="font-heading font-black uppercase text-2xl md:text-3.5xl text-gold mt-8 mb-4 border-b border-gold/20 pb-2">$1</h1>');
  html = html.replace(/^##\s+(.*?)$/gm, '<h2 class="font-heading font-extrabold uppercase text-xl md:text-2xl text-white mt-8 mb-4">$1</h2>');
  html = html.replace(/^###\s+(.*?)$/gm, '<h3 class="font-heading font-bold uppercase text-lg md:text-xl text-white mt-6 mb-3">$1</h3>');

  // Lists: - item
  html = html.replace(/^\-\s+(.*?)$/gm, '<li class="text-dim text-[0.92rem] mb-2 list-disc ml-5">$1</li>');

  // Paragraphs
  const paragraphs = html.split("\n\n");
  for (let i = 0; i < paragraphs.length; i++) {
    const p = paragraphs[i].trim();
    if (!p) continue;
    if (p.startsWith("<h") || p.startsWith("<div") || p.startsWith("<li") || p.startsWith("<table") || p.startsWith("<thead") || p.startsWith("<ul")) {
      continue;
    }
    paragraphs[i] = `<p class="text-muted leading-[1.8] text-[0.95rem] mb-4">${p}</p>`;
  }
  html = paragraphs.join("\n");

  // Fix lists wrapping
  html = html.replace(/((?:<li.*?>.*?<\/li>\n?)+)/g, '<ul class="my-4">$1</ul>');

  return html;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  let post: BlogPost | undefined;
  let relatedPosts: BlogPost[] = [];

  try {
    const res = await api.getBlogBySlug(slug);
    if (res && res.data) post = res.data;
    else if (res && res.slug) post = res;

    // Use a random ID or post ID for related posts, API endpoint uses /related-blogs/:id
    // Wait, the API endpoint is /related-blogs/1 in the Postman. We will pass 1 or post.id if it exists
    const relRes = await api.getRelatedBlogs((post as any)?.id || 1);
    if (relRes && Array.isArray(relRes.data)) relatedPosts = relRes.data;
    else if (Array.isArray(relRes)) relatedPosts = relRes;
  } catch (error) {
    // ignore
  }

  if (!post) {
    post = fallbackBlogPosts.find((p) => p.slug === slug);
  }

  if (!post) {
    notFound();
  }

  if (!relatedPosts || relatedPosts.length === 0) {
    relatedPosts = fallbackBlogPosts.filter((p) => p.slug !== slug).slice(0, 3);
  }

  const parsedContent = parseMarkdown(post.content || "");

  return (
    <>
      {/* Blog Article Page Hero */}
      <section className="page-hero pb-12 pt-32">
        <div className="particles-container absolute inset-0 z-0 pointer-events-none" id="heroParticles" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gold hover:text-gold-light text-sm font-semibold mb-6 transition-colors group">
            <i className="bi bi-arrow-left transition-transform group-hover:-translate-x-1"></i> Back to Articles
          </Link>
          <div className="max-w-[800px]">
            <span className="section-tag mb-4">{post.tag}</span>
            <h1 className="uppercase font-heading font-black leading-tight text-white mb-6" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)" }}>
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-xs text-dim font-semibold items-center">
              <span><i className="bi bi-calendar3 mr-1.5 text-gold"></i>{post.date}</span>
              <span className="w-1.5 h-1.5 bg-gold/30 rounded-full"></span>
              <span><i className="bi bi-clock mr-1.5 text-gold"></i>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-12 bg-white/[0.01]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 gap-y-12">

            {/* Left Content column */}
            <div className="w-full lg:w-8/12 px-4">
              <div className="glass-card p-4 md:p-8 bordergold">
                {/* Hero image placeholder */}
                <div className="rounded-xl overflow-hidden mb-8 max-h-[450px]">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>

                {/* Rendered markdown body */}
                <div
                  className="blog-content-body"
                  dangerouslySetInnerHTML={{ __html: parsedContent }}
                />
              </div>
            </div>

            {/* Right Sidebar column */}
            <div className="w-full lg:w-4/12 px-4">
              <div className="flex flex-col gap-6 top-24">

                <div className="glass-card p-4 md:p-6 rounded-2xl bg-[#08090e] border border-white/5">

                  {/* Search Section */}
                  <div className="mb-10">
                    <h4 className="text-white font-semibold text-[1.35rem] mb-4">Search</h4>
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold/50 transition-colors placeholder:text-gray-600"
                    />
                  </div>

                  {/* Categories Section */}
                  <div className="mb-10 relative">
                    <h4 className="text-white font-semibold text-[1.35rem] mb-5">Categories</h4>
                    <ul className="flex flex-col gap-4">
                      <li className="flex justify-between items-center text-[0.85rem] text-gray-300 hover:text-gold cursor-pointer transition-colors group">
                        <span className="font-medium">Cricket</span>
                        <span className="text-xs group-hover:text-gold">97</span>
                      </li>
                      <li className="flex justify-between items-center text-[0.85rem] text-gray-300 hover:text-gold cursor-pointer transition-colors group">
                        <span className="font-medium">My99exch.ai</span>
                        <span className="text-xs group-hover:text-gold">75</span>
                      </li>
                      <li className="flex justify-between items-center text-[0.85rem] text-gray-300 hover:text-gold cursor-pointer transition-colors group">
                        <span className="font-medium">Casino</span>
                        <span className="text-xs group-hover:text-gold">18</span>
                      </li>
                      <li className="flex justify-between items-center text-[0.85rem] text-gray-300 hover:text-gold cursor-pointer transition-colors group">
                        <span className="font-medium">Gambling</span>
                        <span className="text-xs group-hover:text-gold">3</span>
                      </li>
                    </ul>

                    {/* Subtle divider similar to design */}
                    <div className="absolute -bottom-5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                  </div>

                  {/* Recent Posts Section */}
                  <div>
                    <h4 className="text-white font-semibold text-[1.35rem] mb-5">Recent Posts</h4>
                    <div className="flex flex-col gap-4">
                      {relatedPosts.map((related) => (
                        <Link
                          key={related.slug}
                          href={`/blog/${related.slug}`}
                          className="group flex gap-3.5 items-center p-2 -mx-2 rounded-lg hover:bg-white/[0.02] transition-colors duration-200"
                        >
                          <img
                            src={related.image}
                            alt={related.title}
                            className="w-[72px] h-[48px] rounded-md object-cover flex-shrink-0 border border-white/5 group-hover:border-gold/30 transition-colors shadow-sm"
                          />
                          <div className="flex flex-col justify-center">
                            <h5 className="text-white font-medium text-[0.85rem] leading-tight group-hover:text-gold transition-colors duration-200 line-clamp-2 mb-1.5">
                              {related.title}
                            </h5>
                            <span className="text-[0.65rem] text-gray-500 font-medium tracking-wide">
                              {related.date}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Blogs Section */}
      <section className="py-16 bg-white/[0.02] border-t border-white/5 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-extrabold uppercase text-3xl text-white mb-8">
            Related Blogs
          </h2>
          <div className="flex flex-wrap -mx-4 gap-y-8">
            {relatedPosts.map((post, index) => (
              <div key={post.slug} className="w-full md:w-1/2 lg:w-1/4 px-4">
                <div
                  className="glass-card value-card p-4 h-full flex flex-col reveal-up group border border-white/10 hover:border-gold/40 rounded-2xl bg-[#0a0a0c] overflow-hidden relative"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  {/* Subtle Inner Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

                  {/* Blog Image Block */}
                  <div className="rounded-xl mb-5 relative overflow-hidden aspect-[4/3] border border-white/5 z-10 bg-[#100b1a] group-img">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>

                    <span className="absolute top-3 left-3 bg-gold text-black font-extrabold tracking-wider text-[0.65rem] px-3 py-1 rounded shadow-sm z-20">
                      {post.tag}
                    </span>
                  </div>

                  {/* Card Content Info */}
                  <div className="flex flex-col flex-grow text-left relative z-10">
                    <span className="text-[0.75rem] text-gray-500 font-bold mb-3 tracking-wide uppercase group-hover:text-gray-300 transition-colors duration-500">{post.date}</span>

                    <h4 className="font-bold text-white text-[1.1rem] leading-snug mb-6 group-hover:text-gold transition-colors duration-500 line-clamp-2">
                      {post.title}
                    </h4>

                    {/* Read More Button */}
                    <div className="mt-auto">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group/btn flex items-center justify-center w-full border border-white/20 text-white font-bold py-2.5 rounded-lg hover:border-gold hover:text-black transition-colors duration-500 text-[0.85rem] tracking-wide relative overflow-hidden"
                      >
                        <div className="absolute inset-0 w-full h-full bg-gold transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out z-0"></div>

                        <span className="relative z-10 flex items-center group-hover/btn:-translate-x-2 transition-transform duration-500">
                          Read More
                        </span>
                        <i className="bi bi-arrow-right absolute right-1/4 opacity-0 transform translate-x-4 group-hover/btn:opacity-100 group-hover/btn:translate-x-8 transition-all duration-500 z-10"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SubPageCTA />
    </>
  );
}

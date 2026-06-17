import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogs";
import Button from "@/components/common/Button";
import SubPageCTA from "@/components/common/SubPageCTA";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
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
          url: `https://reddybook.club${post.image}`,
        },
      ],
      type: "article",
      publishedTime: post.date,
    },
  };
}

// Custom simple markdown to HTML parser for our 4 articles
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
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Filter other posts for recommendations
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
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
              <div className="glass-card p-6 md:p-10 bordergold">
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
              <div className="flex flex-col gap-6 sticky top-24">
                
                {/* Whatsapp Actions Card */}
                <div className="glass-card p-6 bordergold text-center">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold text-2xl mx-auto mb-4 border border-gold/20">
                    <i className="bi bi-whatsapp"></i>
                  </div>
                  <h4 className="text-white font-extrabold text-lg mb-2 uppercase">Ready to Start?</h4>
                  <p className="text-dim text-[0.82rem] leading-relaxed mb-6">
                    Connect directly on WhatsApp to get your secure live Betting ID in less than 60 seconds.
                  </p>
                  <Button href="https://wa.me/919999999999" target="_blank" variant="gold" className="w-full py-3">
                    Get Live ID Instantly
                  </Button>
                </div>

                {/* Related Articles list */}
                <div className="glass-card p-6 bordergold">
                  <h4 className="text-white font-extrabold text-md mb-4 uppercase border-b border-white/5 pb-2">
                    Related Articles
                  </h4>
                  <div className="flex flex-col gap-4">
                    {relatedPosts.map((related) => (
                      <Link 
                        key={related.slug} 
                        href={`/blog/${related.slug}`} 
                        className="group flex gap-3 items-start hover:bg-white/[0.02] p-2 rounded-lg transition-colors duration-200"
                      >
                        <img 
                          src={related.image} 
                          alt={related.title} 
                          className="w-16 h-16 rounded object-cover flex-shrink-0"
                        />
                        <div>
                          <span className="text-[0.62rem] text-gold font-bold uppercase tracking-wider block mb-1">
                            {related.tag}
                          </span>
                          <h5 className="text-white font-bold text-[0.82rem] leading-snug group-hover:text-gold transition-colors duration-200 line-clamp-2">
                            {related.title}
                          </h5>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <SubPageCTA />
    </>
  );
}

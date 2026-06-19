import React from "react";
import Link from "next/link";
import { blogPosts as fallbackBlogPosts, BlogPost } from "@/data/blogs";
import { api } from "@/lib/api";

export const Grid = async () => {
  let posts: BlogPost[] = [];
  
  try {
    const res = await api.getBlogs();
    // Handle standard array or nested { data: [...] } structure
    if (res && Array.isArray(res.data)) {
      posts = res.data;
    } else if (Array.isArray(res)) {
      posts = res;
    }
  } catch (error) {
    console.error("Failed to fetch blogs from API, using fallback data");
  }

  // Fallback to static data if API fails or returns empty
  if (!posts || posts.length === 0) {
    posts = fallbackBlogPosts;
  }

  return (
    <section id="blog-grid" className="py-16 bg-white/[0.02]">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap -mx-4 gap-y-8">
          {posts.map((post, index) => (
            <div key={post.slug} className="w-full md:w-1/2 lg:w-1/4 px-4">
              <div
                className="glass-card value-card p-4 h-full flex flex-col reveal-up group border border-gold/15 hover:border-gold rounded-2xl bg-[#0a0a0c] overflow-hidden relative"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                {/* Subtle Inner Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

                {/* Blog Image Block */}
                <div className="rounded-xl mb-5 relative overflow-hidden aspect-[4/3] border border-white/5 z-10 bg-[#100b1a] group">
                  <img
                    src={post.image || "/images/blog_exchange.png"}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle overlay for better contrast */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>

                  <span className="absolute top-3 left-3 bg-gold text-black font-extrabold tracking-wider text-[0.65rem] px-3 py-1 rounded shadow-sm z-20">
                    {post.tag || "BLOG"}
                  </span>
                </div>

                {/* Card Content Info */}
                <div className="flex flex-col flex-grow text-left relative z-10">
                  <span className="text-[0.75rem] text-gray-500 font-bold mb-3 tracking-wide uppercase group-hover:text-gray-300 transition-colors duration-500">{post.date || "Recent"}</span>

                  <h4 className="font-bold text-white text-[1.1rem] leading-snug mb-6 group-hover:text-gold transition-colors duration-500 line-clamp-2">
                    {post.title}
                  </h4>

                  {/* Read More Button */}
                  <div className="mt-auto">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group/btn flex items-center justify-center w-full border border-white/20 text-white font-bold py-2.5 rounded-lg hover:border-gold hover:text-black transition-colors duration-500 text-[0.85rem] tracking-wide relative overflow-hidden"
                    >
                      {/* Left-to-Right Button Fill */}
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
  );
};

export default Grid;

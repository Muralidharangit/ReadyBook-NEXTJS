import React from "react";
import Link from "next/link";
import { blogPosts } from "@/data/blogs";

export const Grid: React.FC = () => {
  return (
    <section id="blog-grid" className="py-12 bg-white/[0.02]">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap -mx-4 gap-y-6">
          {blogPosts.map((post, index) => (
            <div key={post.slug} className="w-full lg:w-1/2 px-4">
              <div 
                className="glass-card blog-card p-6 h-full flex flex-col justify-between reveal-up group transition-all duration-300"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <div>
                  {/* Blog Image */}
                  <div className="blog-img-placeholder rounded-xl mb-4 relative overflow-hidden aspect-video bg-cover bg-center" style={{ minHeight: "220px" }}>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="blog-tag absolute top-3 left-3 z-10 bg-gold text-bg-dark font-black tracking-widest text-[0.65rem] px-3 py-1 rounded">
                      {post.tag}
                    </span>
                  </div>

                  {/* Meta data info */}
                  <div className="flex justify-between items-center mb-3 text-[0.75rem] text-faint font-semibold">
                    <span><i className="bi bi-calendar3 mr-1.5"></i>{post.date}</span>
                    <span><i className="bi bi-clock mr-1.5"></i>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h4 className="font-heading font-extrabold text-white text-[1.25rem] leading-snug mb-4 group-hover:text-gold transition-colors duration-300">
                    {post.title}
                  </h4>

                  {/* Description */}
                  <p className="text-dim text-[0.9rem] leading-relaxed mb-6">
                    {post.desc}
                  </p>
                </div>

                {/* Read More Link */}
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="gold-text inline-flex items-center gap-1.5 font-bold hover:brightness-110 transition-all w-fit"
                >
                  Read More <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Grid;

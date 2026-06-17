import React from "react";

interface SectionTitleProps {
  tag: string;
  title: React.ReactNode;
  desc?: string;
  align?: "center" | "left";
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  tag,
  title,
  desc,
  align = "center",
  className = "",
}) => {
  const alignClass = align === "left" ? "text-left" : "text-center";
  const descAlignClass = align === "left" ? "mr-auto" : "mx-auto";

  return (
    <div className={`${alignClass} mb-12 reveal-up ${className}`}>
      <span className="section-tag">{tag}</span>
      <h2 
        className="mb-4 font-heading font-extrabold uppercase leading-tight tracking-wide"
        style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
      >
        {title}
      </h2>
      {desc && (
        <p 
          className={`text-muted max-w-[580px] leading-relaxed ${descAlignClass}`}
          style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)" }}
        >
          {desc}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

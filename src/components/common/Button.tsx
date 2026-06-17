import Link from "next/link";
import React from "react";

interface ButtonProps {
  variant?: "gold" | "gold-outline" | "outline-gold";
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "gold",
  children,
  href,
  onClick,
  className = "",
  type = "button",
  target,
  rel,
}) => {
  const getBtnClass = () => {
    switch (variant) {
      case "gold-outline":
      case "outline-gold":
        return "btn-gold-outline";
      case "gold":
      default:
        return "btn-gold";
    }
  };

  const combinedClassName = `${getBtnClass()} ${className}`.trim();

  if (href) {
    if (href.startsWith("http") || href.startsWith("https") || href.startsWith("mailto") || href.startsWith("tel")) {
      return (
        <a
          href={href}
          onClick={onClick}
          className={combinedClassName}
          target={target}
          rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} className={combinedClassName} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};

export default Button;

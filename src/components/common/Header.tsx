"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "@/data/menu";
import Navbar from "./Navbar";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run initial scroll check
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Is this the home page? If so, navbar has no fixed-top initially, else it has fixed-top style
  const isHomePage = pathname === "/";
  const positionClass = isHomePage ? "absolute top-0 left-0" : "fixed top-0 left-0 fixed-top";
  const scrolledClass = isScrolled ? "scrolled" : "";
  const headerClass = `w-full z-50 transition-all duration-300 ${positionClass} ${scrolledClass}`;

  return (
    <>
      <nav id="mainNavbar" className={headerClass}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="navbar-brand">
            <img src="/images/Logo.png" alt="Reddy Book" />
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden text-gold focus:outline-none" 
            id="mobileNavToggle" 
            aria-label="Toggle navigation"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          
          <div className="hidden lg:flex items-center justify-center flex-grow" id="desktopNav">
            <ul className="flex items-center gap-1 m-0 p-0 list-none">
              {menuItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.path} className="nav-item">
                    <Link 
                      href={item.path} 
                      className={`nav-link ${isActive ? "active" : ""}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          
          <div className="hidden lg:block">
            <a 
              href="https://wa.me/919999999999" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-gold inline-flex items-center gap-2"
            >
              Sign Up Now <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile drawer menu */}
      <Navbar 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Header;

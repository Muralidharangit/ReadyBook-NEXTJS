import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "@/data/menu";

interface NavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Offcanvas Menu Overlay */}
      <div 
        className={`mobile-nav-overlay ${isOpen ? "open" : ""}`} 
        onClick={onClose}
      />

      {/* Mobile Offcanvas Menu Drawer */}
      <div className={`mobile-nav-drawer ${isOpen ? "open" : ""}`}>
        <div className="mobile-nav-drawer-header">
          <img src="/images/Logo.png" alt="Reddy Book" style={{ height: "36px" }} />
          <button 
            type="button" 
            className="mobile-nav-close-btn" 
            onClick={onClose} 
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="mobile-nav-drawer-body">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link 
                key={item.path} 
                href={item.path} 
                className={`nav-link ${isActive ? "active" : ""}`}
                onClick={onClose}
              >
                {item.label}
              </Link>
            );
          })}
          <hr className="border-t border-white/15 my-2" />
          <a 
            href="https://wa.me/919999999999" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-gold mt-2 block text-center"
            onClick={onClose}
          >
            Sign Up Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

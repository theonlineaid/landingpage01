import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-md shadow-md"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="text-3xl font-[Teachers] text-white">
          <span className="text-[#F41DA4]">A</span>ppName
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 font-medium text-gray-300 rounded-full border border-gray-700 px-4 py-2">
          <a href="#tarieven" className="hover:text-[#F41DA4] transition">
            Tarieven
          </a>
          <a href="#faqs" className="hover:text-[#F41DA4] transition">
            FAQs
          </a>
          <a href="#over-ons" className="hover:text-[#F41DA4] transition">
            Over ons
          </a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="#login"
            className="border border-[#F41DA4] text-[#F41DA4] px-4 py-1.5 rounded-full hover:bg-[#F41DA4] hover:text-white transition"
          >
            Log In
          </a>
          <a
            href="#download"
            className="bg-[#F41DA4] text-white px-4 py-1.5 rounded-full hover:bg-pink-600 transition"
          >
            Download
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4 space-y-4 text-gray-300">
          <a href="#tarieven" className="block hover:text-[#F41DA4]">
            Tarieven
          </a>
          <a href="#faqs" className="block hover:text-[#F41DA4]">
            FAQs
          </a>
          <a href="#over-ons" className="block hover:text-[#F41DA4]">
            Over ons
          </a>
          <a
            href="#login"
            className="block w-full text-center border border-[#F41DA4] text-[#F41DA4] px-4 py-2 rounded-full hover:bg-[#F41DA4] hover:text-white transition"
          >
            Log In
          </a>
          <a
            href="#download"
            className="block w-full text-center bg-[#F41DA4] text-white px-4 py-2 rounded-full hover:bg-pink-600 transition"
          >
            Download
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

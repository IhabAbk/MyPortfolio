"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const links = [
    { name: "Home", href: "hero" },
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Skills", href: "skills" },
    { name: "Contact", href: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll progress
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Active section
      const sections = links.map(link => document.getElementById(link.href));
      const scrollPos = window.scrollY + window.innerHeight / 2;
      for (const sec of sections) {
        if (sec) {
          const top = sec.offsetTop;
          const bottom = top + sec.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 bg-opacity-90 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16 relative">
        <div className="text-white font-bold text-xl hover:text-blue-400">Ihab Abou Khzam</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {links.map((link, i) => (
            <button
              key={i}
              onClick={() => handleScrollTo(link.href)}
              className={`transition-colors ${
                activeSection === link.href
                  ? "text-blue-400 font-semibold"
                  : "text-white hover:text-blue-400"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none text-2xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-blue-400"
        style={{ width: `${scrollProgress}%` }}
        transition={{ ease: "easeOut", duration: 0.1 }}
      />

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden bg-gray-900 bg-opacity-95 flex flex-col gap-4 px-4 py-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {links.map((link, i) => (
            <button
              key={i}
              onClick={() => handleScrollTo(link.href)}
              className={`text-white text-lg transition-colors ${
                activeSection === link.href
                  ? "text-blue-400 font-semibold"
                  : "hover:text-blue-400"
              }`}
            >
              {link.name}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

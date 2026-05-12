import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { CONTACT, NAVIGATION, PROJECT_INFO } from "../constants";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled ? "bg-white shadow-xl py-3" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-red flex items-center justify-center rounded-sm">
            <span className="text-brand-gold font-bold text-2xl font-serif">V</span>
          </div>
          <div className="flex flex-col">
            <span
              className={cn(
                "font-serif font-bold text-xl leading-none transition-colors",
                isScrolled ? "text-brand-red" : "text-white"
              )}
            >
              SAIGON PARK
            </span>
            <span className={cn(
               "text-[8px] tracking-[0.2em] font-medium transition-colors",
               isScrolled ? "text-brand-gold" : "text-brand-gold-light"
            )}>
              VINHOMES ELITE LIVING
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {NAVIGATION.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "text-xs uppercase tracking-widest font-semibold hover:text-brand-gold transition-colors",
                  isScrolled ? "text-gray-800" : "text-white"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href={`tel:${CONTACT.hotline}`}
            className="flex items-center gap-2 bg-brand-gold hover:bg-brand-red text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg group"
          >
            <Phone size={16} className="group-hover:animate-bounce" />
            <span className="font-bold text-sm">{CONTACT.hotline}</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-brand-gold"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
              {NAVIGATION.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-serif font-medium text-brand-dark hover:text-brand-gold border-b border-gray-50 pb-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`tel:${CONTACT.hotline}`}
                className="bg-brand-red text-white py-4 px-6 text-center rounded-sm font-bold flex items-center justify-center gap-3"
              >
                <Phone size={20} />
                {CONTACT.hotline}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Departments", href: "#departments" },
  { name: "Doctors", href: "#doctors" },
  { name: "Facilities", href: "#facilities" },
];

const CustomA = () => (
  <svg 
    viewBox="0 0 100 100" 
    className="inline-block" 
    style={{ height: "0.76em", width: "auto", margin: "0 0.02em", verticalAlign: "baseline" }} 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Outer dark green shape */}
    <path d="M 50 0 L 0 100 L 25 100 L 50 40 L 75 100 L 100 100 Z" fill="#008A56" />
    {/* Inner solid light green triangle resting at bottom center */}
    <path d="M 50 60 L 32 100 L 68 100 Z" fill="#8BC53F" />
  </svg>
);

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Smart sticky logic: hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-gray-200/50 bg-white/90 backdrop-blur-md shadow-sm ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "py-2" : "py-4"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center group z-10">
          <div className="relative w-40 h-10 md:w-56 md:h-14 shrink-0 transition-transform duration-300 hover:scale-105">
            <Image alt="Vedaant Hospital Full Logo" className="object-contain object-left" fill priority src="/vedh.png"/>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-gray-700 hover:text-[#008A56] transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+916357444108"
            className="flex items-center gap-2 text-[15px] font-semibold text-gray-700 hover:text-[#008A56] transition-colors duration-300 group"
          >
            <div className="bg-[#008A56]/10 p-2 rounded-full text-[#008A56] group-hover:bg-[#008A56] group-hover:text-white transition-colors duration-300">
              <Phone className="w-4 h-4" />
            </div>
            +91 63574 44108
          </a>
          <Link 
            href="#contact"
            className="bg-[#008A56] text-white rounded-md px-5 py-2.5 font-medium hover:bg-green-700 transition-colors shadow-sm"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Actions (Phone Quick Contact + Menu Toggle) */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:+916357444108"
            className="flex items-center justify-center w-10 h-10 bg-[#008A56] text-white rounded-full shadow-md hover:bg-green-700 hover:scale-105 active:scale-95 transition-all duration-300"
            aria-label="Call Now"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            className="p-2 text-gray-600 hover:text-[#008A56] transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg animate-in slide-in-from-top-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-4 flex flex-col gap-4">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-base font-medium text-gray-700 hover:text-[#008A56] hover:bg-[#008A56]/5 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
              <a
                href="tel:+916357444108"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-base font-semibold text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5 text-[#008A56]" />
                +91 63574 44108
              </a>
              <Link 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center bg-[#008A56] text-white rounded-md px-5 py-3 font-medium hover:bg-green-700 transition-colors shadow-sm"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function RNEXTSignature() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle escape key and focus trap setup
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle click outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="flex items-center gap-1.5 text-slate-400">
        <span>Crafted by</span>
        <button
          onClick={() => setIsOpen(true)}
          className="group relative inline-flex items-center gap-0.5 cursor-pointer text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-sm"
          aria-label="Open RNEXT info"
        >
          <span className="font-semibold relative z-10 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-cyan-500">
            RNEXT
            {/* Animated cyan underline with soft glow */}
            <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-gradient-to-r from-cyan-400 to-cyan-500 group-hover:w-full transition-all duration-300 ease-out shadow-[0_0_8px_rgba(34,211,238,0.5)]"></span>
          </span>
          <ArrowUpRight className="w-4 h-4 text-white group-hover:text-cyan-400 transform group-hover:translate-x-[4px] group-hover:-translate-y-[4px] transition-all duration-300" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-md"
              onClick={handleBackdropClick}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              ref={modalRef}
            >
              {/* Soft top gradient line for premium feel */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 opacity-80" />

              <div className="relative z-10 text-center">
                <h2 id="modal-title" className="text-3xl font-bold text-white tracking-tight mb-1">
                  RNEXT
                </h2>
                <p className="text-cyan-400 text-sm font-medium tracking-wide uppercase mb-6">
                  Boutique Digital Lab
                </p>
                
                <p className="text-slate-300 text-base leading-relaxed mb-8">
                  This website was proudly crafted by RNEXT. We create premium websites, web applications, AI solutions, and modern digital experiences.
                </p>

                <div className="flex flex-col gap-3">
                  <a 
                    href="https://rnextin.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
                  >
                    Explore RNEXT
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full inline-flex items-center justify-center py-3 px-6 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors duration-200 font-medium"
                  >
                    Continue Browsing
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

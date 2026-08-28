"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Users2, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const ABOUT_IMAGES = [
  "/ab1.webp",
  "/ab2.webp",
  "/ab3.webp",
  "/ab4.webp",
  "/ab5.webp"
];

export function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === ABOUT_IMAGES.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const goToNext = () => setCurrentIndex((prev) => (prev === ABOUT_IMAGES.length - 1 ? 0 : prev + 1));
  const goToPrev = () => setCurrentIndex((prev) => (prev === 0 ? ABOUT_IMAGES.length - 1 : prev - 1));

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Visual/Images */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-slate-100 shadow-xl border border-slate-200 group">
              
              {/* Slider Images with Cross-Fade */}
              {ABOUT_IMAGES.map((src, index) => (
                <div 
                  key={index} 
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Vedaant Hospital Facility ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                    priority={index === 0}
                  />
                </div>
              ))}

              {/* Slider Controls (Arrows) */}
              <button 
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 rounded-full shadow-md text-slate-700 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button 
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 rounded-full shadow-md text-slate-700 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Slider Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                {ABOUT_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex 
                        ? "w-8 h-2.5 bg-[#008A56] shadow-sm" 
                        : "w-2.5 h-2.5 bg-white/70 hover:bg-white"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Overlapping small card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-10 -right-10 md:-right-12 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs z-30"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Certified Care</h4>
                  <p className="text-sm text-slate-500 mt-1">
                    Adhering to the highest medical and safety standards.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pl-8 mt-12 lg:mt-0"
          >
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-secondary/30 border border-secondary/50">
              <span className="text-sm font-bold text-primary">About Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              A True Commitment to Your Health
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At <span className="font-semibold text-primary">Vedaant Hospital</span>, we believe that world-class healthcare should be accessible and compassionate. Located in Killa-Pardi, we have built a modern 48-bed multi-speciality facility designed to deliver exceptional medical outcomes.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 rounded-full p-1">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Our Vision</h4>
                  <p className="text-slate-600">To be the most trusted healthcare provider in the region by combining advanced technology with human-centric care.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 rounded-full p-1">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Our Mission</h4>
                  <p className="text-slate-600">To offer 24/7 comprehensive medical services, ensuring every patient is treated with dignity, respect, and unmatched clinical excellence.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 rounded-full p-1">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Modern Technology</h4>
                  <p className="text-slate-600">Equipped with Advanced Modular Operation Theatres, Digital X-Ray, and round-the-clock Pathology labs.</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-slate-400 overflow-hidden">
                    <Users2 className="w-5 h-5" />
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium text-slate-700">
                <span className="font-bold text-xl text-primary block">10+</span>
                Expert Specialists
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

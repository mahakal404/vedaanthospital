"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, HeartPulse, Stethoscope, Activity, ShieldPlus } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const BADGES = [
  { text: "48-Bed Multi-Speciality", icon: HeartPulse },
  { text: "Advanced Modular OT", icon: ShieldPlus },
  { text: "24/7 Emergency", icon: Activity },
  { text: "In-house Pharmacy", icon: Stethoscope },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center py-10 md:py-16 lg:py-24 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-slate-50 to-slate-50" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 z-10 relative w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white border border-primary/20 shadow-sm"
            >
              <span className="text-sm font-semibold text-primary tracking-wide">
                Established Healthcare in Gujarat
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6"
            >
              24/7 Comprehensive & Compassionate <span className="text-primary relative whitespace-nowrap">
                Healthcare
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
              </span>
              <br className="hidden md:block" /> in Killa-Pardi
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <p className="text-xl md:text-2xl font-serif italic text-slate-600 mb-2">
                "Aarogyam Parmanandasya Moolam"
              </p>
              <p className="text-slate-500 text-sm font-medium">— Sushruta (Health is the root of supreme happiness)</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link 
                href="#contact"
                className={`${buttonVariants({ size: "lg" })} h-14 px-8 text-base rounded-full shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all`}
              >
                Book an Appointment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a 
                href="tel:+916357444108"
                className={`${buttonVariants({ variant: "outline", size: "lg" })} h-14 px-8 text-base rounded-full border-2 hover:bg-slate-50 group`}
              >
                <PhoneCall className="mr-2 w-5 h-5 text-destructive group-hover:animate-pulse" />
                Emergency Help
              </a>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {BADGES.map((badge, idx) => (
                <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center mb-3 text-primary border border-slate-100">
                    <badge.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-700 leading-tight">
                    {badge.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image/Visual Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Main Visual Wrapper */}
            <div className="relative w-full max-w-md aspect-[4/5]">
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-3xl shadow-2xl overflow-hidden">
                <Image 
                  src="/hero-dr-keyur.webp" 
                  alt="Dr. Keyur - Vedaant Hospital"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center"
                  priority
                />
              </div>
              
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -right-6 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Trusted by</div>
                  <div className="font-bold text-slate-900">10,000+ Patients</div>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -left-6 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Expert Care</div>
                  <div className="font-bold text-slate-900">Top Specialists</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

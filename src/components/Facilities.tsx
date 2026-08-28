"use client";

import { motion } from "framer-motion";
import { 
  BedDouble, 
  ActivitySquare, 
  TestTube2, 
  Syringe, 
  Pill, 
  Accessibility,
  Building,
  Car
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const FACILITIES = [
  { name: "48-Bed Unit", icon: BedDouble },
  { name: "Digital X-Ray & CT Scan", icon: ActivitySquare },
  { name: "24/7 Pathology Lab", icon: TestTube2 },
  { name: "Advanced Modular OT", icon: Syringe },
  { name: "24/7 In-house Pharmacy", icon: Pill },
];

const ACCESSIBILITY = [
  { name: "Wheelchair Friendly", icon: Accessibility },
  { name: "Modern Elevators", icon: Building },
  { name: "On-site Parking", icon: Car },
];

export function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/40 via-slate-50 to-slate-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Text & Accessibility */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0}>
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm font-bold text-primary">Infrastructure</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                State-of-the-Art Medical Facilities
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Vedaant Hospital is equipped with cutting-edge medical technology to ensure precise diagnosis and effective treatment. Our infrastructure is designed for maximum patient comfort and safety.
              </p>
            </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-green-900/5 hover:border-green-100 cursor-pointer group">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 transition-colors">Accessibility & Comfort</h3>
                  <ul className="space-y-4">
                    {ACCESSIBILITY.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-4">
                        <div className="bg-green-50 p-2.5 rounded-full text-green-600">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <span className="font-semibold text-slate-700">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
          </div>

          {/* Right: Grid of Facilities */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {FACILITIES.map((facility, idx) => (
                <ScrollReveal 
                  key={idx} 
                  delay={0.3 + (idx * 0.15)} 
                  className={idx === 0 ? "sm:col-span-2 h-full" : "h-full"}
                >
                  <Card 
                    className={`rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 ease-out group cursor-pointer hover:-translate-y-1.5 hover:shadow-xl hover:shadow-green-900/5 hover:border-green-100 h-full overflow-hidden relative ${
                      idx === 0 ? "bg-gradient-to-br from-white to-green-50/30 sm:flex sm:items-center" : "bg-white"
                    }`}
                  >
                    <CardContent className={`p-6 md:p-8 flex items-center gap-6 ${idx === 0 ? 'sm:flex-row' : 'flex-col sm:items-start'}`}>
                      <div className={`shrink-0 flex items-center justify-center rounded-xl bg-gray-50 transition-colors duration-300 group-hover:bg-green-50 text-gray-500 group-hover:text-green-600 ${idx === 0 ? 'w-20 h-20' : 'w-14 h-14'}`}>
                        <facility.icon className={idx === 0 ? 'w-10 h-10' : 'w-7 h-7'} />
                      </div>
                      <div className="text-center sm:text-left">
                        <h4 className={`font-bold text-slate-900 transition-colors ${idx === 0 ? 'text-2xl' : 'text-lg mt-4 sm:mt-0'}`}>
                          {facility.name}
                        </h4>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

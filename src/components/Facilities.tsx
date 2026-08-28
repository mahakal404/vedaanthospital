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
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm font-bold text-primary">Infrastructure</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                State-of-the-Art Medical Facilities
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Vedaant Hospital is equipped with cutting-edge medical technology to ensure precise diagnosis and effective treatment. Our infrastructure is designed for maximum patient comfort and safety.
              </p>

              <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Accessibility & Comfort</h3>
                <ul className="space-y-4">
                  {ACCESSIBILITY.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <div className="bg-secondary/20 p-2.5 rounded-xl text-primary">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-slate-700">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Right: Grid of Facilities */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {FACILITIES.map((facility, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={idx === 0 ? "sm:col-span-2" : ""}
                >
                  <Card className={`group bg-white border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full overflow-hidden relative ${idx === 0 ? 'sm:flex sm:items-center' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <CardContent className={`p-6 md:p-8 flex items-center gap-6 ${idx === 0 ? 'sm:flex-row' : 'flex-col sm:items-start'}`}>
                      <div className={`shrink-0 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-600 group-hover:bg-primary group-hover:text-white transition-colors duration-300 ${idx === 0 ? 'w-20 h-20' : 'w-16 h-16'}`}>
                        <facility.icon className={idx === 0 ? 'w-10 h-10' : 'w-8 h-8'} />
                      </div>
                      <div className="text-center sm:text-left">
                        <h4 className={`font-bold text-slate-900 ${idx === 0 ? 'text-2xl' : 'text-lg mt-4 sm:mt-0'}`}>
                          {facility.name}
                        </h4>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

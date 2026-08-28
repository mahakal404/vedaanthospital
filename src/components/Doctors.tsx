"use client";

import { motion } from "framer-motion";
import { Clock, GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Instagram = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);


const DOCTORS = [
  {
    name: "Dr. Keyur Patel",
    specialty: "General / Laparoscopic Surgeon",
    credentials: "MBBS, MS (General Surgery)",
    experience: "10+ Years Experience",
    timing: "Mon - Sat: 10:00 AM - 2:00 PM",
    instagram: "@doc.mskeyur",
    instagramLink: "https://www.instagram.com/doc.mskeyur/",
    image: "/keyur.png",
  },
  {
    name: "Dr. Foram Patel",
    specialty: "Gynaecology & Obstetrics",
    credentials: "MBBS, DGO",
    experience: "8+ Years Experience",
    timing: "Mon - Sat: 10:00 AM - 1:00 PM, 5:00 PM - 7:00 PM",
    image: "/ved.webp",
    isPlaceholder: true,
  },
  {
    name: "Dr. Brijesh Patel",
    specialty: "General Medicine & Critical Care",
    credentials: "MBBS, MD (Medicine)",
    experience: "12+ Years Experience",
    timing: "Mon - Sat: 9:00 AM - 5:00 PM",
    instagram: "@brijsj",
    instagramLink: "https://www.instagram.com/brijsj/",
    image: "/brijesh.png",
  },
];

export function Doctors() {
  return (
    <section id="doctors" className="py-24 bg-white relative">
      {/* Invisible SVG for Instagram Gradient */}
      <svg width="0" height="0" className="absolute">
        <linearGradient id="insta-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </svg>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-secondary/30 border border-secondary/50">
            <span className="text-sm font-bold text-primary">Meet Our Experts</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Compassionate & Experienced Doctors
          </h2>
          <p className="text-lg text-slate-600">
            Our team of highly qualified specialists are dedicated to providing the best possible healthcare outcomes for every patient.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS.map((doc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="overflow-hidden border-slate-100 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group h-full flex flex-col">
                
                {/* Photo Header */}
                <div className={`h-64 md:h-72 relative overflow-hidden ${doc.isPlaceholder ? "bg-green-50/40" : "bg-slate-100"}`}>
                  {doc.image ? (
                    <Image 
                      src={doc.image}
                      alt={doc.isPlaceholder ? "Vedaant Hospital Placeholder" : doc.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`${doc.isPlaceholder ? "object-contain p-8" : "object-cover object-top"} transition-transform duration-500 ease-in-out group-hover:scale-105`}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-tr from-rose-100 via-pink-50 to-teal-50 flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:scale-105">
                      <div className="w-24 h-24 rounded-full bg-white/40 backdrop-blur-sm border border-white/60 flex items-center justify-center text-rose-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2a4 4 0 0 0-4 4v2a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z"/>
                          <path d="M6 18c0-3.31 2.69-6 6-6s6 2.69 6 6v4H6v-4z"/>
                        </svg>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10" />
                  
                  {/* Name overlaid on image */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">
                      {doc.name}
                    </h3>
                    <p className="text-primary-foreground/90 font-medium text-sm drop-shadow">
                      {doc.specialty}
                    </p>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col flex-grow bg-white z-20 relative">
                  <div className="space-y-4 flex-grow">
                    
                    <div className="flex items-start gap-3 text-slate-600">
                      <GraduationCap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{doc.credentials}</span>
                    </div>

                    <div className="flex items-start gap-3 text-slate-600">
                      <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{doc.experience}</span>
                    </div>

                    <div className="flex items-start gap-3 text-slate-600">
                      <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{doc.timing}</span>
                    </div>

                  </div>

                  {/* Social/Extra info at bottom */}
                  {doc.instagram && (
                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <a 
                        href={doc.instagramLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className="group inline-flex items-center text-sm font-medium text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr hover:from-[#f09433] hover:to-[#bc1888] transition-all"
                      >
                        <Instagram style={{ stroke: "url(#insta-gradient)" }} className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                        {doc.instagram}
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import { MapPin, Phone, Clock, Send, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RNEXTSignature } from "@/components/branding/RNEXTSignature";

const Instagram = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

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

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 relative">
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/20 via-slate-900 to-slate-900 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-24 pb-12 relative z-10">
        
        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          
          {/* Left: Info & Map */}
          <div>
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
              <span className="text-sm font-bold text-primary">Get in Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
              We're Here for You 24/7
            </h2>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-full text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Location</h4>
                  <p className="text-slate-400">
                    <a href="https://maps.google.com/?q=Vedaant+Hospital+Killa-pardi" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                      NH 48, Beside GC Patel Petrol Pump, <br />
                      Opposite New Mamlatdar Office, <br />
                      Killa-pardi, Gujarat – 396125
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-full text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Phone</h4>
                  <p className="text-slate-400 text-xl font-medium tracking-wide">
                    <a href="tel:+916357444108" className="hover:text-green-500 transition-colors">+91 63574 44108</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-full text-primary shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Working Hours</h4>
                  <p className="text-slate-400">
                    <strong className="text-white">Emergency & OPD:</strong> 24/7 Open
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-lg h-64 bg-slate-800 relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1319.0365131859357!2d72.94168656669663!3d20.495154891722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c5007eef474d%3A0xe408802c6e9e7ebd!2sVedaant%20Hospital!5e0!3m2!1sen!2sin!4v1787898242531!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: "350px", borderRadius: "0.5rem" }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right: Appointment Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-primary/5">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Book an Appointment</h3>
            <p className="text-slate-500 mb-8">Fill out the form below and we will confirm your appointment shortly.</p>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Full Name</label>
                  <Input type="text" placeholder="John Doe" className="bg-slate-50 border-slate-200 text-slate-900 focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                  <Input type="tel" placeholder="+91 XXXXX XXXXX" className="bg-slate-50 border-slate-200 text-slate-900 focus-visible:ring-primary" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Department</label>
                <select className="flex h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="">Select Department</option>
                  <option value="emergency">Emergency & Trauma</option>
                  <option value="surgery">General Surgery</option>
                  <option value="gynaecology">Gynaecology & Obstetrics</option>
                  <option value="pediatrics">Pediatrics</option>
                  <option value="orthopedics">Orthopedics</option>
                  <option value="medicine">General Medicine</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Preferred Date</label>
                <Input type="date" className="bg-slate-50 border-slate-200 text-slate-900 focus-visible:ring-primary" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Message (Optional)</label>
                <Textarea placeholder="Any specific symptoms or requests?" className="bg-slate-50 border-slate-200 text-slate-900 focus-visible:ring-primary min-h-[100px]" />
              </div>

              <Button type="submit" size="lg" className="w-full h-14 text-base rounded-xl mt-4">
                Submit Request
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center justify-center leading-none z-20" style={{ fontFamily: "'Montserrat', 'Poppins', 'Plus Jakarta Sans', sans-serif" }}>
            <div className="text-2xl md:text-4xl font-black text-white flex items-baseline tracking-tight">
              VED<CustomA />ANT
            </div>
            <div className="text-[0.65rem] md:text-[0.95rem] font-extrabold tracking-[0.45em] text-slate-400 uppercase mt-1 md:mt-1.5 pl-[0.45em]">
              HOSPITAL
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#departments" className="hover:text-white transition-colors">Departments</a>
            <a href="#doctors" className="hover:text-white transition-colors">Doctors</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com/vedaanthospital_pardi" 
              target="_blank"
              rel="noreferrer"
              className="bg-slate-800 p-2 rounded-full hover:bg-slate-700 transition-all flex items-center justify-center group"
            >
              <Instagram style={{ stroke: "url(#insta-gradient)" }} className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
        
        <div className="text-center text-slate-500 text-sm mt-8 flex flex-col md:flex-row items-center justify-center gap-1 flex-wrap">
          <span>© {new Date().getFullYear()} Vedaant Hospital.</span>
          <RNEXTSignature />
        </div>
      </div>
    </footer>
  );
}

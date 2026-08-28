"use client";

import { motion } from "framer-motion";
import { 
  Activity, 
  Scissors, 
  Baby, 
  Bone, 
  HeartPulse, 
  Stethoscope 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const DEPARTMENTS = [
  {
    title: "Emergency & Trauma",
    description: "24/7 Support with rapid response and advanced life support.",
    icon: Activity,
    color: "bg-red-50 text-red-500",
    border: "group-hover:border-red-200",
  },
  {
    title: "General & Laparoscopic Surgery",
    description: "Hernia, Appendix, and Minimal Access surgeries by experts.",
    icon: Scissors,
    color: "bg-blue-50 text-blue-500",
    border: "group-hover:border-blue-200",
  },
  {
    title: "Gynecology & Obstetrics",
    description: "Pre/post-natal care, Normal, and Cesarean deliveries.",
    icon: HeartPulse,
    color: "bg-pink-50 text-pink-500",
    border: "group-hover:border-pink-200",
  },
  {
    title: "Pediatrics",
    description: "Dedicated newborn & comprehensive child healthcare.",
    icon: Baby,
    color: "bg-purple-50 text-purple-500",
    border: "group-hover:border-purple-200",
  },
  {
    title: "Orthopedics",
    description: "Treatment for fractures, joint pain, and advanced surgeries.",
    icon: Bone,
    color: "bg-orange-50 text-orange-500",
    border: "group-hover:border-orange-200",
  },
  {
    title: "General Medicine",
    description: "Care for Fever, Diabetes, Hypertension, and chronic illnesses.",
    icon: Stethoscope,
    color: "bg-emerald-50 text-emerald-500",
    border: "group-hover:border-emerald-200",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Departments() {
  return (
    <section id="departments" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-bold text-primary">Specialities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Centers of Excellence
          </h2>
          <p className="text-lg text-slate-600">
            Providing comprehensive care across a wide range of medical disciplines with state-of-the-art facilities and experienced specialists.
          </p>
        </div>

        {/* Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {DEPARTMENTS.map((dept, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="group h-full border-slate-100 hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white cursor-pointer overflow-hidden relative">
                {/* Subtle gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl ${dept.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300`}>
                    <dept.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {dept.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-600">
                    {dept.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

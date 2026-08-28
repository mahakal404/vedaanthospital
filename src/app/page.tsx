import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Departments } from "@/components/Departments";
import { Doctors } from "@/components/Doctors";
import { Facilities } from "@/components/Facilities";
import { ContactFooter } from "@/components/ContactFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutUs />
        <Departments />
        <Doctors />
        <Facilities />
      </main>
      <ContactFooter />
    </>
  );
}

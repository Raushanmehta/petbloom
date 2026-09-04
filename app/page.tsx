import AboutSection from "@/sections/home/AboutSection";
import BlogSection from "@/sections/home/BlogSection";
import FaqSection from "@/sections/home/FaqSection";
import HeroSection from "@/sections/home/HeroSection";
import ServiceAreasSection from "@/sections/home/ServiceAreasSection";
import ServicesSection from "@/sections/home/ServicesSection";
import TeamSection from "@/sections/home/TeamSection";
import TestimonialsSection from "@/sections/home/TestimonialSection";
import WhyChooseUsSection from "@/sections/home/WhyChooseUsSection";


export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServiceAreasSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TeamSection />
      <TestimonialsSection />
      <FaqSection />
      <BlogSection />
    </main>
  );
}

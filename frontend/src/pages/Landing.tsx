import { Navbar } from "./sections/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { QuoteSection } from "./sections/QuoteSection";
import { ServicesSection } from "./sections/ServicesSection";
import { WhyUsSection } from "./sections/WhyUsSection";
import { ProcessSection } from "./sections/ProcessSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { FAQSection } from "./sections/FAQSection";
import { ContactSection } from "./sections/ContactSection";
import { FooterSection } from "./sections/FooterSection";
import { ProjectGallery } from "../components/ProjectGallery";
import { VideoGallery } from "../components/VideoGallery";
import { WhatsAppBtn } from "../components/WhatsAppBtn";

export function Landing() {
  return (
    <div className="landing-content">
      <Navbar />
      <HeroSection />
      <QuoteSection />
      <ProjectGallery />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <VideoGallery />
      <ContactSection />
      <FooterSection />
      <WhatsAppBtn />
    </div>
  );
}

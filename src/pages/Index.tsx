import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DiscoverSection from "@/components/DiscoverSection";
import AudienceSection from "@/components/AudienceSection";
import EventDetailsSection from "@/components/EventDetailsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <DiscoverSection />
        <AudienceSection />
        <EventDetailsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

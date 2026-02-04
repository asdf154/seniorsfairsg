import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-seniors.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Happy seniors at Singapore exhibition"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-12 md:py-20">
        <div className="max-w-2xl">
          {/* Event Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
            <span className="text-sm font-medium text-primary-foreground">
              Singapore's Premier Elder Care Expo
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up delay-100">
            Seniors Fair
            <span className="block text-accent">Singapore 2026</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in-up delay-200">
            Singapore's largest exhibition dedicated to better ageing, caregiving, 
            and senior wellbeing. Connect with trusted solutions for you and your loved ones.
          </p>

          {/* Event Info Pills */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up delay-300">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-lg">
              <Calendar className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground font-medium">November 2026</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-lg">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground font-medium">Singapore Expo</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
            <Button
              size="lg"
              className="touch-target text-base font-semibold bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent"
            >
              Register for Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="touch-target text-base font-semibold bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Become an Exhibitor
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block animate-float">
        <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-primary-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

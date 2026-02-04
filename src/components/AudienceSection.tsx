import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const audienceGroups = [
  {
    title: "Seniors & Families",
    description: "Looking for trusted solutions for yourself or loved ones",
    benefits: [
      "Compare services and products in person",
      "Speak directly with providers",
      "Attend free educational talks",
      "Access exclusive event discounts",
    ],
    cta: "Register as Visitor",
    accent: false,
  },
  {
    title: "Caregivers & Professionals",
    description: "Seeking tools, knowledge, and peer support",
    benefits: [
      "Learn from industry experts",
      "Discover latest care innovations",
      "Network with fellow caregivers",
      "Gain practical caregiving skills",
    ],
    cta: "Register as Professional",
    accent: true,
  },
  {
    title: "Exhibitors & Partners",
    description: "Connect with Singapore's elder-care community",
    benefits: [
      "Reach 10,000+ qualified visitors",
      "Showcase your solutions",
      "Generate quality leads",
      "Build brand awareness",
    ],
    cta: "Become an Exhibitor",
    accent: false,
  },
];

const AudienceSection = () => {
  return (
    <section id="audience" className="section-padding bg-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
            Who Should Attend
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Something for
            <span className="text-primary"> Everyone</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're planning for the future, caring for a loved one, 
            or offering solutions — there's a place for you here.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {audienceGroups.map((group, index) => (
            <div
              key={group.title}
              className={`relative rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                group.accent
                  ? "bg-primary text-primary-foreground shadow-warm-lg"
                  : "card-warm"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className={`text-xl font-bold mb-2 ${
                group.accent ? "text-primary-foreground" : "text-foreground"
              }`}>
                {group.title}
              </h3>
              <p className={`text-sm mb-6 ${
                group.accent ? "text-primary-foreground/80" : "text-muted-foreground"
              }`}>
                {group.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {group.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      group.accent ? "bg-primary-foreground/20" : "bg-primary/10"
                    }`}>
                      <Check className={`w-3 h-3 ${
                        group.accent ? "text-primary-foreground" : "text-primary"
                      }`} />
                    </div>
                    <span className={`text-sm ${
                      group.accent ? "text-primary-foreground/90" : "text-muted-foreground"
                    }`}>
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={group.accent ? "secondary" : "default"}
                size="lg"
                className="w-full touch-target font-semibold"
              >
                {group.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;

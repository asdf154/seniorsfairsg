import { Heart, Users, Building2, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Expected Visitors" },
  { icon: Building2, value: "100+", label: "Exhibitors" },
  { icon: Heart, value: "4 Days", label: "Of Discovery" },
  { icon: Award, value: "50+", label: "Expert Sessions" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
              About The Event
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              One Platform for 
              <span className="text-primary"> Better Ageing</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                The Seniors Fair Singapore is a comprehensive, consumer-focused exhibition 
                bringing together families, caregivers, seniors, and healthcare professionals 
                under one roof.
              </p>
              <p className="text-lg leading-relaxed">
                Explore elder-care services, products, and innovations — from healthcare and 
                assisted living to mobility aids, wellness solutions, financial planning, and 
                assistive technologies.
              </p>
              <p className="text-lg leading-relaxed">
                Our mission is simple: <strong className="text-foreground">empower informed decisions</strong> and 
                support dignified, confident ageing for all Singaporeans.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="card-warm p-6 md:p-8 rounded-2xl text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

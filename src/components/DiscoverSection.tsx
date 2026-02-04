import { 
  Stethoscope, 
  Home, 
  Accessibility, 
  Brain, 
  Wallet, 
  Smartphone,
  HeartPulse,
  Sparkles
} from "lucide-react";

const categories = [
  {
    icon: Stethoscope,
    title: "Healthcare Services",
    description: "Medical care, health screenings, specialist consultations",
  },
  {
    icon: Home,
    title: "Assisted Living",
    description: "Nursing homes, home care services, day care options",
  },
  {
    icon: Accessibility,
    title: "Mobility Aids",
    description: "Wheelchairs, walkers, and accessibility solutions",
  },
  {
    icon: HeartPulse,
    title: "Wellness & Rehab",
    description: "Fitness programs, physiotherapy, rehabilitation",
  },
  {
    icon: Brain,
    title: "Mental Wellness",
    description: "Cognitive health, dementia support, counselling",
  },
  {
    icon: Wallet,
    title: "Financial Planning",
    description: "Retirement planning, insurance, estate management",
  },
  {
    icon: Smartphone,
    title: "Assistive Tech",
    description: "Smart devices, telehealth, safety monitoring",
  },
  {
    icon: Sparkles,
    title: "Active Ageing",
    description: "Hobbies, social activities, lifelong learning",
  },
];

const DiscoverSection = () => {
  return (
    <section id="discover" className="section-padding">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
            What To Discover
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need,
            <span className="text-primary"> In One Place</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Browse comprehensive elder-care solutions across eight key categories, 
            all curated to support your family's unique needs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group card-warm p-6 rounded-2xl cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
                <category.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;

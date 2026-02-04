import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Check } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="section-padding bg-primary">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
            <Bell className="w-8 h-8 text-primary-foreground" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Be the first to know when registration opens. Get updates on exhibitors, 
            programme schedules, and exclusive early-bird offers.
          </p>

          {isSubmitted ? (
            <div className="flex items-center justify-center gap-3 py-4 px-6 bg-primary-foreground/10 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <Check className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-primary-foreground font-medium">
                Thank you! We'll keep you updated.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 bg-primary-foreground text-foreground placeholder:text-muted-foreground border-0 focus-accessible"
              />
              <Button
                type="submit"
                size="lg"
                className="h-12 px-8 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold touch-target"
              >
                Notify Me
              </Button>
            </form>
          )}

          <p className="text-sm text-primary-foreground/60 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

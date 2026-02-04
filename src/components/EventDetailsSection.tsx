import { Calendar, MapPin, Clock, Train } from "lucide-react";

const EventDetailsSection = () => {
  return (
    <section id="details" className="section-padding">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map / Venue Visual */}
          <div className="relative rounded-2xl overflow-hidden bg-secondary aspect-[4/3]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7684899999997!2d103.96149999999999!3d1.334444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d0aa9e7cc4f%3A0x91e4a7c0e7c8ae96!2sSingapore%20EXPO!5e0!3m2!1sen!2ssg!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Singapore Expo Location"
              className="absolute inset-0"
            />
          </div>

          {/* Event Info */}
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
              Event Details
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Plan Your
              <span className="text-primary"> Visit</span>
            </h2>

            <div className="space-y-6">
              {/* Date */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Date</h3>
                  <p className="text-muted-foreground">
                    November 2026 • 4 Days
                  </p>
                  <p className="text-sm text-muted-foreground/70">
                    Exact dates to be announced
                  </p>
                </div>
              </div>

              {/* Time */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Opening Hours</h3>
                  <p className="text-muted-foreground">10:00 AM – 8:00 PM Daily</p>
                  <p className="text-sm text-muted-foreground/70">
                    Free admission for all visitors
                  </p>
                </div>
              </div>

              {/* Venue */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Venue</h3>
                  <p className="text-muted-foreground">Singapore Expo</p>
                  <p className="text-sm text-muted-foreground/70">
                    1 Expo Drive, Singapore 486150
                  </p>
                </div>
              </div>

              {/* Getting There */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Train className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Getting There</h3>
                  <p className="text-muted-foreground">Expo MRT Station (DTL/EWL)</p>
                  <p className="text-sm text-muted-foreground/70">
                    Free shuttle service available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailsSection;

import { PublicLayout } from '@/components/layout/PublicLayout';
import { mockEvents } from '@/data/mockData';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Newsletter = () => {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-up">
              Events & Newsletter
            </h1>
            <p className="text-lg text-primary-foreground/80 animate-fade-up animation-delay-100">
              Stay updated with the latest happenings in Student Life.
            </p>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Upcoming</span>
            <h2 className="text-3xl font-bold text-foreground mt-2">Events Calendar</h2>
          </div>

          <div className="space-y-6">
            {mockEvents.map((event, index) => (
              <div 
                key={event.id} 
                className="bg-card rounded-2xl shadow-card hover-lift overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Date Badge */}
                  <div className="md:w-48 p-6 bg-primary flex flex-col items-center justify-center text-primary-foreground">
                    <span className="text-sm uppercase tracking-wider opacity-80">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                    <span className="text-5xl font-bold">
                      {new Date(event.date).getDate()}
                    </span>
                    <span className="text-sm opacity-80">
                      {new Date(event.date).getFullYear()}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {event.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-accent" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-accent" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Calendar className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Never Miss an Event
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter and get weekly updates on upcoming events, 
              club activities, and opportunities to get involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="lg">Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Newsletter;


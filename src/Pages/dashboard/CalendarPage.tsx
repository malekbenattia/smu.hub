import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { mockEvents } from '@/data/mockData';
import { Calendar, MapPin, Clock } from 'lucide-react';

const CalendarPage = () => {
  const sortedEvents = [...mockEvents].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <DashboardLayout
      title="Event Calendar"
      subtitle="Upcoming Student Life events"
    >
      <div className="grid gap-6">
        {sortedEvents.map((event, index) => (
          <div 
            key={event.id}
            className="bg-card rounded-xl shadow-card overflow-hidden border border-border/50 animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col md:flex-row">
              {/* Date Badge */}
              <div className="md:w-32 p-6 bg-primary flex flex-col items-center justify-center text-primary-foreground">
                <span className="text-sm uppercase tracking-wider opacity-80">
                  {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                </span>
                <span className="text-4xl font-bold">
                  {new Date(event.date).getDate()}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{event.title}</h3>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    {event.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default CalendarPage;

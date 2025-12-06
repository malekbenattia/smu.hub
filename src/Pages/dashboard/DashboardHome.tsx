import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import { mockJobAlerts, mockEvents, mockUsers } from '@/data/mockData';
import { 
  Briefcase, 
  Calendar, 
  Users, 
  TrendingUp,
  Clock,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const DashboardHome = () => {
  const { user } = useAuth();
  const openJobs = mockJobAlerts.filter(j => j.status === 'open');
  const upcomingEvents = mockEvents.slice(0, 3);

  const stats = [
    { 
      label: 'Open Jobs', 
      value: openJobs.length, 
      icon: Briefcase, 
      color: 'bg-accent/10 text-accent',
      href: '/dashboard/jobs'
    },
    { 
      label: 'Upcoming Events', 
      value: mockEvents.length, 
      icon: Calendar, 
      color: 'bg-primary/10 text-primary',
      href: '/dashboard/calendar'
    },
    { 
      label: 'Total Members', 
      value: mockUsers.length, 
      icon: Users, 
      color: 'bg-success/10 text-success',
      href: '/dashboard/members'
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive/10 text-destructive';
      case 'medium': return 'bg-accent/10 text-accent';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <DashboardLayout 
      title={`Welcome back, ${user?.name.split(' ')[0]}!`}
      subtitle="Here's what's happening in Student Life today."
    >
      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            to={stat.href}
            className="bg-card rounded-xl p-6 shadow-card hover-lift border border-border/50 group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", stat.color)}>
                <stat.icon className="w-6 h-6" />
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-3xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Job Alerts */}
        <div className="bg-card rounded-xl shadow-card border border-border/50">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-foreground">Recent Job Alerts</h3>
              <p className="text-sm text-muted-foreground">First come, first served</p>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard/jobs">View All</Link>
            </Button>
          </div>
          <div className="divide-y divide-border">
            {openJobs.slice(0, 4).map((job) => (
              <div key={job.id} className="p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-foreground truncate">{job.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-1">{job.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-muted-foreground">{job.type}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Due {new Date(job.deadline).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <span className={cn("text-xs font-medium px-2 py-1 rounded-full shrink-0", getPriorityColor(job.priority))}>
                    {job.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-card rounded-xl shadow-card border border-border/50">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-foreground">Upcoming Events</h3>
              <p className="text-sm text-muted-foreground">Mark your calendar</p>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard/calendar">View All</Link>
            </Button>
          </div>
          <div className="divide-y divide-border">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex flex-col items-center justify-center shrink-0">
                    <span className="text-xs text-primary font-medium">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                    <span className="text-lg font-bold text-primary leading-none">
                      {new Date(event.date).getDate()}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-foreground">{event.title}</h4>
                    <p className="text-sm text-muted-foreground">{event.time}</p>
                    <p className="text-sm text-muted-foreground">{event.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      {(user?.role === 'officer' || user?.role === 'admin') && (
        <div className="mt-8 p-6 bg-secondary rounded-xl">
          <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/dashboard/jobs">Create Job Alert</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/dashboard/members">Manage Members</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/dashboard/messages">Send Message</Link>
            </Button>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default DashboardHome;

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import { mockUsers, mockClubs, mockEvents, mockJobAlerts } from '@/data/mockData';
import { 
  Users, 
  Building2, 
  Calendar, 
  Briefcase,
  Shield,
  Settings,
  TrendingUp
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const AdminPanel = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const isAdmin = user?.role === 'admin';

  useEffect(() => {
    if (!isAdmin) {
      navigate('/dashboard');
    }
  }, [isAdmin, navigate]);

  if (!isAdmin) return null;

  const stats = [
    { label: 'Total Members', value: mockUsers.length, icon: Users, color: 'bg-primary/10 text-primary' },
    { label: 'Active Clubs', value: mockClubs.length, icon: Building2, color: 'bg-accent/10 text-accent' },
    { label: 'Total Events', value: mockEvents.length, icon: Calendar, color: 'bg-success/10 text-success' },
    { label: 'Job Alerts', value: mockJobAlerts.length, icon: Briefcase, color: 'bg-destructive/10 text-destructive' },
  ];

  const adminActions = [
    { label: 'Manage Members', description: 'Add, edit, or remove members', href: '/dashboard/members', icon: Users },
    { label: 'Manage Clubs', description: 'Oversee all student clubs', href: '/dashboard/clubs-manage', icon: Building2 },
    { label: 'Manage Events', description: 'Create and edit events', href: '/dashboard/calendar', icon: Calendar },
    { label: 'Job Alerts', description: 'Manage job postings', href: '/dashboard/jobs', icon: Briefcase },
    { label: 'Communications', description: 'View all messages', href: '/dashboard/messages', icon: Settings },
  ];

  return (
    <DashboardLayout
      title="Admin Panel"
      subtitle="Full system management access"
    >
      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-card rounded-xl p-6 shadow-card border border-border/50">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color} mb-4`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <p className="text-3xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Admin Actions */}
      <div className="bg-card rounded-xl shadow-card border border-border/50 p-6">
        <div className="flex items-center gap-2 mb-6">
          <Shield className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Admin Actions</h3>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {adminActions.map((action) => (
            <Link
              key={action.label}
              to={action.href}
              className="p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-muted/50 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <action.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{action.label}</p>
                  <p className="text-sm text-muted-foreground">{action.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-card rounded-xl shadow-card border border-border/50 p-6">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">System Overview</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-muted rounded-xl">
            <p className="text-sm text-muted-foreground mb-1">Officers</p>
            <p className="text-2xl font-bold text-foreground">
              {mockUsers.filter(u => u.role === 'officer').length}
            </p>
          </div>
          <div className="p-4 bg-muted rounded-xl">
            <p className="text-sm text-muted-foreground mb-1">Open Jobs</p>
            <p className="text-2xl font-bold text-foreground">
              {mockJobAlerts.filter(j => j.status === 'open').length}
            </p>
          </div>
          <div className="p-4 bg-muted rounded-xl">
            <p className="text-sm text-muted-foreground mb-1">This Month's Events</p>
            <p className="text-2xl font-bold text-foreground">
              {mockEvents.length}
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminPanel;

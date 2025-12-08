import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Briefcase,
  Calendar,
  Users,
  MessageSquare,
  LogOut,
  Shield,
  Building2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import studentLifeLogo from '../../assets/telechargement.png';

const memberLinks = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/dashboard/jobs', label: 'Job Alerts', icon: Briefcase },
  { href: '/dashboard/calendar', label: 'Calendar', icon: Calendar },
];

const officerLinks = [
  { href: '/dashboard/members', label: 'Members', icon: Users },
  { href: '/dashboard/messages', label: 'Communications', icon: MessageSquare },
];

const adminLinks = [
  { href: '/dashboard/admin', label: 'Admin Panel', icon: Shield },
  { href: '/dashboard/clubs-manage', label: 'Manage Clubs', icon: Building2 },
];

export const DashboardSidebar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const isOfficerOrAdmin = user?.role === 'officer' || user?.role === 'admin';
  const isAdmin = user?.role === 'admin';

  const NavLink = ({ href, label, icon: Icon }: { href: string; label: string; icon: React.ElementType }) => (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all",
        location.pathname === href
          ? "bg-primary text-primary-foreground shadow-card"
          : "text-muted-foreground hover:text-foreground hover:bg-muted"
      )}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </Link>
  );

  return (
    <aside className="w-64 bg-card border-r border-border h-screen sticky top-0 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src={studentLifeLogo} 
            alt="Student Life SMU Logo" 
            className="w-10 h-10 rounded-full object-contain"
          />
          <div>
            <span className="font-bold text-foreground block">Student Life</span>
            <span className="text-xs text-muted-foreground capitalize">{user?.role} Portal</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        <div className="mb-4">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4">
            Main
          </span>
        </div>
        {memberLinks.map((link) => (
          <NavLink key={link.href} {...link} />
        ))}

        {isOfficerOrAdmin && (
          <>
            <div className="my-4 pt-4 border-t border-border">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4">
                Officer
              </span>
            </div>
            {officerLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </>
        )}

        {isAdmin && (
          <>
            <div className="my-4 pt-4 border-t border-border">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4">
                Admin
              </span>
            </div>
            {adminLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </>
        )}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
            <span className="text-accent-foreground font-semibold">
              {user?.name.charAt(0)}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">{user?.name}</p>
            <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          className="w-full justify-start text-muted-foreground hover:text-destructive"
          onClick={logout}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </aside>
  );
};

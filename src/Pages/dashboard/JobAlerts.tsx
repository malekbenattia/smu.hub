import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import { mockJobAlerts, JobAlert } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Clock, User, Plus, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const JobAlerts = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState<JobAlert[]>(mockJobAlerts);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [filter, setFilter] = useState('all');

  const isOfficerOrAdmin = user?.role === 'officer' || user?.role === 'admin';

  const filteredJobs = jobs.filter(job => {
    if (filter === 'all') return true;
    if (filter === 'open') return job.status === 'open';
    if (filter === 'claimed') return job.status === 'claimed';
    return job.type === filter;
  });

  const handleClaimJob = (jobId: string) => {
    setJobs(jobs.map(job => {
      if (job.id === jobId && job.status === 'open') {
        return { ...job, status: 'claimed', claimedBy: user?.name };
      }
      return job;
    }));
    toast.success('Job claimed successfully!');
  };

  const handleCreateJob = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const newJob: JobAlert = {
      id: String(jobs.length + 1),
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      type: formData.get('type') as JobAlert['type'],
      postedBy: user?.name || 'Unknown',
      postedDate: new Date().toISOString().split('T')[0],
      deadline: formData.get('deadline') as string,
      status: 'open',
      priority: formData.get('priority') as JobAlert['priority'],
    };

    setJobs([newJob, ...jobs]);
    setIsDialogOpen(false);
    toast.success('Job alert created!');
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'medium': return 'bg-accent/10 text-accent border-accent/20';
      default: return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-success/10 text-success';
      case 'claimed': return 'bg-primary/10 text-primary';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <DashboardLayout
      title="Job Alerts"
      subtitle="First come, first served opportunities"
    >
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between mb-6">
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filter by..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Jobs</SelectItem>
            <SelectItem value="open">Open Only</SelectItem>
            <SelectItem value="claimed">Claimed</SelectItem>
            <SelectItem value="IT">IT</SelectItem>
            <SelectItem value="Logistics">Logistics</SelectItem>
            <SelectItem value="Communications">Communications</SelectItem>
            <SelectItem value="Finance">Finance</SelectItem>
          </SelectContent>
        </Select>

        {isOfficerOrAdmin && (
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create Job Alert
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Create New Job Alert</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleCreateJob} className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" name="title" required />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" name="description" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="type">Type</Label>
                    <Select name="type" defaultValue="General">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="IT">IT</SelectItem>
                        <SelectItem value="Logistics">Logistics</SelectItem>
                        <SelectItem value="Communications">Communications</SelectItem>
                        <SelectItem value="Finance">Finance</SelectItem>
                        <SelectItem value="General">General</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="priority">Priority</Label>
                    <Select name="priority" defaultValue="medium">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="deadline">Deadline</Label>
                  <Input id="deadline" name="deadline" type="date" required />
                </div>
                <Button type="submit" className="w-full">Create Alert</Button>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </div>

      {/* Jobs List */}
      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className={cn(
              "bg-card rounded-xl p-6 shadow-card border-l-4 transition-all",
              getPriorityColor(job.priority)
            )}
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={cn("text-xs font-medium px-2 py-1 rounded-full", getStatusColor(job.status))}>
                    {job.status}
                  </span>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{job.title}</h3>
                <p className="text-muted-foreground mb-3">{job.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    Posted by {job.postedBy}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    Due {new Date(job.deadline).toLocaleDateString()}
                  </span>
                </div>
                {job.claimedBy && (
                  <p className="mt-2 text-sm text-primary flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    Claimed by {job.claimedBy}
                  </p>
                )}
              </div>
              
              {job.status === 'open' && (
                <Button 
                  variant="accent" 
                  onClick={() => handleClaimJob(job.id)}
                  className="shrink-0"
                >
                  Claim This Job
                </Button>
              )}
            </div>
          </div>
        ))}

        {filteredJobs.length === 0 && (
          <div className="text-center py-16 bg-card rounded-xl">
            <p className="text-muted-foreground">No job alerts found.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default JobAlerts;

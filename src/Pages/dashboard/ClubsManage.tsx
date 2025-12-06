import { useState, useEffect } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import { mockClubs, Club } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Plus, Users, Edit, Trash2, Search } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const ClubsManage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [clubs, setClubs] = useState<Club[]>(mockClubs);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const isAdmin = user?.role === 'admin';

  useEffect(() => {
    if (!isAdmin) {
      navigate('/dashboard');
    }
  }, [isAdmin, navigate]);

  if (!isAdmin) return null;

  const filteredClubs = clubs.filter(club =>
    club.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddClub = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const newClub: Club = {
      id: String(clubs.length + 1),
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      logo: '🎯',
      category: formData.get('category') as string,
      memberCount: 0,
      recentEvents: [],
    };

    setClubs([...clubs, newClub]);
    setIsAddDialogOpen(false);
    toast.success('Club created successfully!');
  };

  const handleDeleteClub = (id: string) => {
    setClubs(clubs.filter(c => c.id !== id));
    toast.success('Club deleted');
  };

  return (
    <DashboardLayout
      title="Manage Clubs"
      subtitle="Admin club management"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between mb-6">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search clubs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Club
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Club</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddClub} className="space-y-4">
              <div>
                <Label htmlFor="name">Club Name</Label>
                <Input id="name" name="name" required />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" required />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Input id="category" name="category" placeholder="e.g., Academic, Sports" required />
              </div>
              <Button type="submit" className="w-full">Create Club</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Clubs Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClubs.map((club) => (
          <div key={club.id} className="bg-card rounded-xl p-6 shadow-card border border-border/50">
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                {club.logo}
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon">
                  <Edit className="w-4 h-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => handleDeleteClub(club.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <span className="text-xs font-medium text-accent uppercase tracking-wider">
              {club.category}
            </span>
            <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">{club.name}</h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{club.description}</p>
            
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="w-4 h-4 mr-1" />
              {club.memberCount} members
            </div>
          </div>
        ))}
      </div>

      {filteredClubs.length === 0 && (
        <div className="text-center py-16 bg-card rounded-xl">
          <p className="text-muted-foreground">No clubs found.</p>
        </div>
      )}
    </DashboardLayout>
  );
};

export default ClubsManage;

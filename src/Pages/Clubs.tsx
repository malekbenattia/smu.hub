import { useState } from 'react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { mockClubs } from '@/data/mockData';
import { Users, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const categories = ['All', 'Technology', 'Arts', 'Social Entrepreneurship', 'Entertainment', 'NGOs'];

const Clubs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredClubs = mockClubs.filter((club) => {
    const matchesSearch = club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         club.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || club.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-up">
              Student Clubs
            </h1>
            <p className="text-lg text-primary-foreground/80 animate-fade-up animation-delay-100">
              Discover organizations that match your interests and passions.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border sticky top-16 z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search clubs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "rounded-full",
                    selectedCategory === category && "shadow-card"
                  )}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clubs Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {filteredClubs.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClubs.map((club, index) => (
                <div 
                  key={club.id} 
                  className="group bg-card rounded-2xl p-6 shadow-card hover-lift border border-border/50 animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
                      <img 
                        src={club.logo} 
                        alt={`${club.name} logo`}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-accent uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full">
                      {club.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {club.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {club.description}
                  </p>

                  <div className="border-t border-border pt-4 mt-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Users className="w-4 h-4 mr-1" />
                        {club.memberCount} members
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Recent Activities
                      </p>
                      <ul className="space-y-1">
                        {club.recentEvents.map((event, i) => (
                          <li key={i} className="text-sm text-foreground flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></span>
                            {event}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No clubs found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </PublicLayout>
  );
};

export default Clubs;


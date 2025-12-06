import { Link } from 'react-router-dom';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Calendar, Trophy, Heart, Target, Lightbulb, Shield, Sparkles } from 'lucide-react';
import { mockEvents, mockClubs } from '@/data/mockData';

const Index = () => {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6 animate-fade-up">
              ✨ Welcome to Student Life
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up animation-delay-100">
              We make the impossible{' '}
              <span className="text-accent">possible.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 animate-fade-up animation-delay-200 max-w-2xl">
              Join our vibrant community of student leaders and organizations. Discover opportunities to grow, 
              connect with peers, and create lasting impact on campus.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up animation-delay-300">
              <Button variant="hero" size="xl" asChild>
                <Link to="/clubs">
                  Explore Clubs
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/login">Member Login</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-up animation-delay-400">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-accent">20+</p>
                <p className="text-primary-foreground/70 text-sm">Active Clubs</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-accent">200+</p>
                <p className="text-primary-foreground/70 text-sm">Members</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-accent">300+</p>
                <p className="text-primary-foreground/70 text-sm">Events/Year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Empowering Student Success
            </h2>
            <p className="text-muted-foreground text-lg">
              The Student Life Department is dedicated to enriching the university experience 
              by fostering leadership, community engagement, and personal growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-card hover-lift">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Community Building</h3>
              <p className="text-muted-foreground">
                We create spaces for students to connect, collaborate, and build lasting friendships 
                across diverse backgrounds and interests.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card hover-lift">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Trophy className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Leadership Development</h3>
              <p className="text-muted-foreground">
                Through workshops, mentorship, and hands-on experience, we help students develop 
                essential leadership skills for their futures.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card hover-lift">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Engaging Events</h3>
              <p className="text-muted-foreground">
                From cultural celebrations to career fairs, we organize events that enrich 
                campus life and create memorable experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Mission */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Shaping Tomorrow's Leaders Today
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We believe every student has the potential to lead and make a positive impact. 
                Our mission is to provide the resources, support, and opportunities needed to 
                unlock that potential.
              </p>
              <Button asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 shadow-card">
                <Shield className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Integrity</h4>
                <p className="text-sm text-muted-foreground">
                  Acting with honesty, transparency, and ethical principles in all we do.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card">
                <Users className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Diversity</h4>
                <p className="text-sm text-muted-foreground">
                  Embracing and celebrating differences to build a stronger community.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card">
                <Target className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Excellence</h4>
                <p className="text-sm text-muted-foreground">
                  Striving for the highest standards in everything we do.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card">
                <Heart className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Care</h4>
                <p className="text-sm text-muted-foreground">
                  Supporting each other with compassion and genuine concern.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card">
                <Sparkles className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Creativity</h4>
                <p className="text-sm text-muted-foreground">
                  Encouraging innovative ideas and creative problem-solving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Clubs */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Clubs</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                Find Your Community
              </h2>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0" asChild>
              <Link to="/clubs">
                View All Clubs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockClubs.slice(0, 6).map((club) => (
              <div key={club.id} className="group bg-card rounded-2xl p-6 shadow-card hover-lift border border-border/50">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform overflow-hidden">
                  <img 
                    src={club.logo} 
                    alt={`${club.name} logo`}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-xs font-medium text-accent uppercase tracking-wider">{club.category}</span>
                <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">{club.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{club.description}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="w-4 h-4 mr-1" />
                  {club.memberCount} members
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Events</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                What's Happening
              </h2>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0" asChild>
              <Link to="/newsletter">
                View All Events
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockEvents.slice(0, 3).map((event) => (
              <div key={event.id} className="bg-card rounded-2xl overflow-hidden shadow-card hover-lift group">
                <div className="h-48 bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                  <Calendar className="w-16 h-16 text-primary-foreground/50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-accent font-medium mb-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Involved?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Whether you're looking to join a club, attend an event, or become a student leader, 
            we're here to help you make the most of your university experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/login">
                Join Student Life
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/clubs">Browse Clubs</Link>
            </Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Index;

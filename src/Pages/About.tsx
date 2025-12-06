import { PublicLayout } from '@/components/layout/PublicLayout';
import { Award, Heart, Shield, Target, Sparkles, Users } from 'lucide-react';

const About = () => {
  const team = [
    { name: 'Mrs. Mariem Ben Aissa', role: 'Head of Department', image: '👩‍💼' },
    { name: 'Hechem', role: 'IT Officer', image: '👨‍💻' },
    { name: 'Baha', role: 'Communications Officer', image: '👨‍🎨' },
    { name: 'Skander', role: 'Logistics Officer', image: '👨‍🔧' },
    { name: 'Wassim', role: 'Finance Officer', image: '👨‍💼' },
  ];

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-up">
              About Student Life
            </h1>
            <p className="text-lg text-primary-foreground/80 animate-fade-up animation-delay-100">
              Dedicated to enriching student experiences and fostering a vibrant campus community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Your First Point of Contact
              </h2>
              <p className="text-muted-foreground mb-4">
                The Student Life Department is the first and closest point of contact for students 
                in on-campus life. On top of that, activities proposed by the Student Life Department 
                ensure the entertainment of our students.
              </p>
              <p className="text-muted-foreground">
                This department organizes, maintains, and offers consulting to all the clubs at SMU. 
                We are committed to creating an engaging and supportive environment where every 
                student can thrive and make lasting memories.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-2xl p-6 shadow-card text-center">
                <p className="text-4xl font-bold text-primary mb-2">20+</p>
                <p className="text-sm text-muted-foreground">Active Clubs</p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-card text-center">
                <p className="text-4xl font-bold text-primary mb-2">300+</p>
                <p className="text-sm text-muted-foreground">Events/Year</p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-card text-center">
                <p className="text-4xl font-bold text-primary mb-2">200+</p>
                <p className="text-sm text-muted-foreground">Active Members</p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-card text-center">
                <p className="text-4xl font-bold text-primary mb-2">5</p>
                <p className="text-sm text-muted-foreground">Dedicated Officers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-card hover-lift">
              <Shield className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                Acting with honesty, transparency, and ethical principles in all our endeavors.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card hover-lift">
              <Users className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Diversity</h3>
              <p className="text-muted-foreground">
                Embracing and celebrating differences to build a stronger, more inclusive community.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card hover-lift">
              <Award className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                Striving for the highest standards in our programs, events, and services.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card hover-lift">
              <Heart className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Care</h3>
              <p className="text-muted-foreground">
                Supporting each other with compassion, empathy, and genuine concern for wellbeing.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card hover-lift">
              <Sparkles className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Creativity</h3>
              <p className="text-muted-foreground">
                Encouraging innovative ideas and creative approaches to problem-solving.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card hover-lift">
              <Target className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Student-Centered</h3>
              <p className="text-muted-foreground">
                Every decision we make puts student needs and experiences first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Meet the Officers
            </h2>
            <p className="text-muted-foreground">
              Dedicated professionals committed to enhancing your student experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-card text-center hover-lift">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-4xl mx-auto mb-4">
                  {member.image}
                </div>
                <h4 className="font-semibold text-foreground">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default About;
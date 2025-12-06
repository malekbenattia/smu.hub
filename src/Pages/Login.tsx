import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GraduationCap, ArrowLeft, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await login(email, password);
    
    if (result.success) {
      toast.success('Welcome back!');
      navigate('/dashboard');
    } else {
      toast.error(result.error || 'Login failed');
    }
    
    setIsLoading(false);
  };

  const demoAccounts = [
    { email: 'mariem.benaissa@smu.edu', role: 'Admin' },
    { email: 'wassim@smu.edu', role: 'Officer (Finance)' },
    { email: 'malek@smu.edu', role: 'Member' },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-card">
              <GraduationCap className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Welcome Back</h1>
              <p className="text-sm text-muted-foreground">Sign in to your account</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12"
              />
            </div>

            <Button type="submit" className="w-full h-12" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>

          {/* Demo Accounts */}
          <div className="mt-8 p-4 bg-secondary rounded-xl">
            <p className="text-sm font-medium text-foreground mb-3">Demo Accounts (password: demo123)</p>
            <div className="space-y-2">
              {demoAccounts.map((account) => (
                <button
                  key={account.email}
                  onClick={() => {
                    setEmail(account.email);
                    setPassword('demo123');
                  }}
                  className="w-full text-left text-sm p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <span className="text-muted-foreground">{account.email}</span>
                  <span className="ml-2 text-accent font-medium">({account.role})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Visual */}
      <div className="hidden lg:flex flex-1 bg-primary items-center justify-center p-8">
        <div className="max-w-md text-center">
          <div className="w-24 h-24 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-8 shadow-glow">
            <GraduationCap className="w-12 h-12 text-accent-foreground" />
          </div>
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Student Life Portal
          </h2>
          <p className="text-primary-foreground/80">
            Access your dashboard, view job alerts, manage events, and connect with your team - 
            all in one place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

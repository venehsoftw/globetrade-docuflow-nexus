import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userId || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      // For demo purposes, go to verification page if it's a first login
      // otherwise go straight to dashboard
      if (userId === 'newuser') {
        navigate('/verification');
        toast({
          title: "Verification Required",
          description: "Please check your email for a verification code",
        });
      } else if (userId === 'resetpassword') {
        navigate('/new-password');
        toast({
          title: "Password Reset",
          description: "Please set up your new password",
        });
      } else {
        navigate('/dashboard');
        toast({
          title: "Login Successful",
          description: "Welcome back!",
        });
      }
    }, 1000);
  };

  const handleClear = () => {
    setUserId('');
    setPassword('');
  };

  return (
    <Layout showWalletButton={true}>
      <div className="page-container flex flex-col items-center justify-center py-8 md:py-16">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Sign In</h1>
            <p className="text-gray-600">
              Welcome to INCOMINT1.0 platform where you will be able to make and improve your commercial transaction of goods with your customers more fruitful.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
                User ID:
              </label>
              <Input
                id="userId"
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="input-field"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password:
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
              />
            </div>

            <div className="flex gap-4">
              <Button 
                type="submit" 
                className="flex-1" 
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "SEND"}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                className="flex-1"
                onClick={handleClear}
              >
                CLEAR
              </Button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              In case that you do not have a user in the platform go to the Signal Up page using the follow Hyperlink: 
              <Link to="/signup" className="text-primary hover:underline ml-1">
                https://incomint1.0.venehsoftw.xyz/signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;

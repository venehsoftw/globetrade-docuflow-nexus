
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [agreeTerms1, setAgreeTerms1] = useState(false);
  const [agreeTerms2, setAgreeTerms2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName || !email || !confirmEmail) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (email !== confirmEmail) {
      toast({
        title: "Error",
        description: "Email addresses do not match",
        variant: "destructive",
      });
      return;
    }

    if (!agreeTerms1 || !agreeTerms2) {
      toast({
        title: "Error",
        description: "You must agree to the terms and conditions",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/verification');
      toast({
        title: "Registration Started",
        description: "Please check your email for a verification code",
      });
    }, 1000);
  };

  const handleClear = () => {
    setFullName('');
    setEmail('');
    setConfirmEmail('');
    setAgreeTerms1(false);
    setAgreeTerms2(false);
  };

  return (
    <Layout showWalletButton={true}>
      <div className="page-container flex flex-col items-center justify-center py-8 md:py-16">
        <div className="w-full max-w-xl">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">Sign Up</h1>
            <p className="text-gray-600 text-center">
              Carefully enter the requested data in the fields of the following form in order to obtain the registration on the platform
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  First Name / Last Name:
                </label>
                <div className="text-xs text-gray-500 bg-gray-100 p-2 rounded-full">
                  Enter your Name + Last Name
                </div>
              </div>
              <Input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="input-field"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Account:
                </label>
                <div className="text-xs text-gray-500 bg-gray-100 p-2 rounded-full">
                  Enter a valid Email Account
                </div>
              </div>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="confirmEmail" className="block text-sm font-medium text-gray-700">
                  Re-Enter your Email:
                </label>
                <div className="text-xs text-gray-500 bg-gray-100 p-2 rounded-full">
                  Enter a valid Email Account
                </div>
              </div>
              <Input
                id="confirmEmail"
                type="email"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
                className="input-field"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="terms1" 
                  checked={agreeTerms1}
                  onCheckedChange={(checked) => setAgreeTerms1(checked as boolean)}
                />
                <label htmlFor="terms1" className="text-sm text-gray-600">
                  I agree that the data I provide may be used by the company providing the service to establish contact with me regarding topics relevant to the intrinsic functionality reserved by the platform.
                </label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="terms2" 
                  checked={agreeTerms2}
                  onCheckedChange={(checked) => setAgreeTerms2(checked as boolean)}
                />
                <label htmlFor="terms2" className="text-sm text-gray-600">
                  I agree that I have read the terms and conditions set forth in the following Hyperlink: 
                  <a href="https://incomint10.venehsoftw.xyz/term" className="text-primary hover:underline ml-1">
                    https://incomint10.venehsoftw.xyz/term
                  </a>
                </label>
              </div>
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
        </div>
      </div>
    </Layout>
  );
};

export default Signup;

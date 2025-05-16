
import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { AlertTriangle } from 'lucide-react';

const Verification = () => {
  const totalDigits = 6;
  const [code, setCode] = useState<string[]>(Array(totalDigits).fill(""));
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  // Initialize refs array
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, totalDigits);
  }, []);

  const handleChange = (index: number, value: string) => {
    // Only allow one digit
    if (value.length > 1) {
      value = value.slice(-1);
    }
    
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) {
      return;
    }
    
    // Update code state
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setIsError(false);
    
    // Auto-focus next input if value is entered
    if (value && index < totalDigits - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    
    // Move to next input on right arrow
    if (e.key === 'ArrowRight' && index < totalDigits - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    
    // Move to previous input on left arrow
    if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').trim();
    
    // Only allow pasting numbers
    if (!/^\d+$/.test(pastedData)) {
      return;
    }
    
    // Fill inputs with pasted digits
    const digits = pastedData.split('').slice(0, totalDigits);
    const newCode = [...code];
    
    digits.forEach((digit, index) => {
      if (index < totalDigits) {
        newCode[index] = digit;
      }
    });
    
    setCode(newCode);
    
    // Focus on the input after the last pasted digit
    if (digits.length < totalDigits) {
      inputRefs.current[digits.length]?.focus();
    } else {
      inputRefs.current[totalDigits - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (code.some(digit => digit === '')) {
      toast({
        title: "Error",
        description: "Please enter all digits of the verification code",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call - For demo, we'll show an error
    setTimeout(() => {
      setIsLoading(false);
      setIsError(true);
      toast({
        title: "Verification Failed",
        description: "The code you entered is invalid. Please try again.",
        variant: "destructive",
      });
    }, 1000);
  };

  return (
    <Layout>
      <div className="page-container flex flex-col items-center justify-center py-12 md:py-24">
        <div className="w-full max-w-md">
          {location.pathname === "/verification" && !isError && (
            <div className="mb-8 text-center">
              <h1 className="text-2xl md:text-3xl font-bold mb-6">Verify Your Email</h1>
              <p className="text-gray-600">
                Enter the validation code that we sent to your Mailbox
              </p>
            </div>
          )}
          
          {location.pathname === "/verification" && isError && (
            <div className="mb-8">
              <div className="flex flex-col items-center justify-center">
                <AlertTriangle className="h-16 w-16 text-destructive mb-4" />
                <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">Invalid Code</h1>
                <p className="text-gray-600 text-center">
                  The validation Code that you entered is not correct, verify it and retry the action.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="flex justify-center gap-2 md:gap-4">
              {Array.from({ length: totalDigits }).map((_, index) => (
                <Input
                  key={index}
                  ref={el => inputRefs.current[index] = el}
                  type="text"
                  maxLength={1}
                  className={`validation-box ${isError ? 'border-destructive' : ''}`}
                  value={code[index]}
                  onChange={e => handleChange(index, e.target.value)}
                  onKeyDown={e => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  inputMode="numeric"
                />
              ))}
            </div>

            <div className="flex justify-center">
              <Button 
                type="submit" 
                className="w-32" 
                disabled={isLoading || code.some(digit => digit === '')}
              >
                {isLoading ? "Verifying..." : "SEND"}
              </Button>
            </div>
          </form>

          <div className="mt-10 text-center">
            <p className="text-gray-600 text-sm">
              We have sent you an email with the procedure to be followed to enable you access to the platform. In case that you did not receive any communication from us, please check the SPAM folder in your business/personal email systems.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Verification;

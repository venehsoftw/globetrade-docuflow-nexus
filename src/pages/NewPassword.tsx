
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const validatePassword = (password: string) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLongEnough = password.length >= 12 && password.length <= 20;
    
    return hasUpperCase && hasNumber && hasSymbol && isLongEnough;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newPassword || !confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    if (!validatePassword(newPassword)) {
      toast({
        title: "Error",
        description: "Password does not meet requirements",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccessDialog(true);
    }, 1000);
  };

  const handleClear = () => {
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleClose = () => {
    setShowSuccessDialog(false);
    navigate('/login');
  };

  return (
    <Layout>
      <div className="page-container flex flex-col items-center justify-center py-12 md:py-24">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-medium mb-6">Enter the new password that you want to use:</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                New Password:
              </label>
              <Input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="input-field"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Re-Enter New Password:
              </label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="input-field"
              />
            </div>

            <div className="text-sm text-gray-600 border p-2 bg-gray-50">
              ** The password must be between 12 to 20 alphanumeric characters with at least one symbol, one number, and one uppercase letter.
            </div>

            <div className="flex justify-center gap-4">
              <Button 
                type="submit" 
                className="px-8" 
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "SEND"}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                className="px-8"
                onClick={handleClear}
              >
                CLEAR
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="bg-gray-400 sm:max-w-md">
          <div className="text-center py-6">
            <p className="mb-4">New password successfully configured.</p>
            <p className="mb-6">Close the window</p>
            <Button onClick={handleClose} variant="default" className="px-8">
              CLOSE
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default NewPassword;

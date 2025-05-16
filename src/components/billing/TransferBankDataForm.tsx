
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface TransferBankDataFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const TransferBankDataForm = ({ isOpen, onClose }: TransferBankDataFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    entityOrganization: '',
    bankingEntity: '',
    typeAccount: '',
    accountNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    toast({
      title: "Bank information saved",
      description: "Your bank transfer details have been saved successfully",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>TRANSFER BANK DATA</DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="entityOrganization">Entity/Organization:</Label>
            <Input
              id="entityOrganization"
              name="entityOrganization"
              value={formData.entityOrganization}
              onChange={handleChange}
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="bankingEntity">Banking Entity:</Label>
            <Input
              id="bankingEntity"
              name="bankingEntity"
              value={formData.bankingEntity}
              onChange={handleChange}
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="typeAccount">Type Account:</Label>
            <Input
              id="typeAccount"
              name="typeAccount"
              value={formData.typeAccount}
              onChange={handleChange}
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="accountNumber">Account Number:</Label>
            <Input
              id="accountNumber"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <DialogFooter className="flex justify-between sm:justify-between">
          <Button onClick={handleSave}>SAVE</Button>
          <Button variant="outline" onClick={onClose}>CLOSE</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TransferBankDataForm;

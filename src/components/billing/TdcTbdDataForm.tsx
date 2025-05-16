
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

interface TdcTbdDataFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const TdcTbdDataForm = ({ isOpen, onClose }: TdcTbdDataFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    card: '',
    date: '',
    cvc: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    toast({
      title: "Payment information saved",
      description: "Your TDC/TBD data has been saved successfully",
    });
    onClose();
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      mobile: '',
      card: '',
      date: '',
      cvc: '',
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>TDC/TBD Data</DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name (As printed on the plastic):</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="email">Email:</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="mobile">Mobile:</Label>
            <Input
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="card">Card:</Label>
            <Input
              id="card"
              name="card"
              value={formData.card}
              onChange={handleChange}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="date">Date:</Label>
              <Input
                id="date"
                name="date"
                placeholder="MM/YY"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="cvc">CVC:</Label>
              <Input
                id="cvc"
                name="cvc"
                value={formData.cvc}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        
        <DialogFooter className="flex justify-between sm:justify-between">
          <Button onClick={handleSave}>SAVE</Button>
          <Button variant="outline" onClick={handleClear}>CLEAR</Button>
          <Button variant="outline" onClick={onClose}>CLOSE</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TdcTbdDataForm;

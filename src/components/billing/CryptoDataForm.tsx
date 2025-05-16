
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
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface CryptoDataFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const CryptoDataForm = ({ isOpen, onClose }: CryptoDataFormProps) => {
  const { toast } = useToast();
  const [addresses, setAddresses] = useState([
    { address: '', type: 'Custom', options: { option1: false, option2: false, option3: false } },
    { address: '', type: 'Custom', options: { option1: false, option2: false, option3: false } },
    { address: '', type: 'Custom', options: { option1: false, option2: false, option3: false } },
  ]);

  const handleAddressChange = (index: number, value: string) => {
    const newAddresses = [...addresses];
    newAddresses[index].address = value;
    setAddresses(newAddresses);
  };

  const handleTypeChange = (index: number, value: string) => {
    const newAddresses = [...addresses];
    newAddresses[index].type = value;
    setAddresses(newAddresses);
  };

  const handleOptionChange = (index: number, option: 'option1' | 'option2' | 'option3', checked: boolean) => {
    const newAddresses = [...addresses];
    newAddresses[index].options[option] = checked;
    setAddresses(newAddresses);
  };

  const handleSave = () => {
    toast({
      title: "Crypto data saved",
      description: "Your crypto addresses have been saved successfully",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>CRYPTO DATA</DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-6 py-4">
          {addresses.map((item, index) => (
            <div key={index} className="grid gap-3">
              <div className="flex justify-between items-center">
                <Label htmlFor={`address-${index}`}>Address N°{index + 1}:</Label>
                <Select value={item.type} onValueChange={(value) => handleTypeChange(index, value)}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Custom" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Custom">Custom</SelectItem>
                    <SelectItem value="Option N°1">Option N°1</SelectItem>
                    <SelectItem value="Option N°2">Option N°2</SelectItem>
                    <SelectItem value="Option N°3">Option N°3</SelectItem>
                    <SelectItem value="Option N°4">Option N°4</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Input
                id={`address-${index}`}
                value={item.address}
                onChange={(e) => handleAddressChange(index, e.target.value)}
              />
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Checkbox 
                    id={`option1-${index}`} 
                    checked={item.options.option1} 
                    onCheckedChange={(checked) => handleOptionChange(index, 'option1', checked as boolean)} 
                  />
                  <label htmlFor={`option1-${index}`}>Option 1</label>
                </div>
                
                <div className="flex items-center gap-2">
                  <Checkbox 
                    id={`option2-${index}`} 
                    checked={item.options.option2} 
                    onCheckedChange={(checked) => handleOptionChange(index, 'option2', checked as boolean)}
                  />
                  <label htmlFor={`option2-${index}`}>Option 2</label>
                </div>
                
                <div className="flex items-center gap-2">
                  <Checkbox 
                    id={`option3-${index}`} 
                    checked={item.options.option3} 
                    onCheckedChange={(checked) => handleOptionChange(index, 'option3', checked as boolean)}
                  />
                  <label htmlFor={`option3-${index}`}>Option 3</label>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <DialogFooter className="flex justify-between sm:justify-between">
          <Button onClick={handleSave}>SAVE</Button>
          <Button variant="outline" onClick={onClose}>CLOSE</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CryptoDataForm;

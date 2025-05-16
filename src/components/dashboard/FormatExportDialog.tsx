
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface FormatExportDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormatExportDialog = ({ isOpen, onClose }: FormatExportDialogProps) => {
  const { toast } = useToast();
  
  const handleExport = () => {
    toast({
      title: "Export successful",
      description: "Your data has been exported in the selected format",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Format Export</DialogTitle>
        </DialogHeader>
        
        <div className="py-4 min-h-[100px] flex items-center justify-center">
          <p className="text-gray-500">Select export format options</p>
        </div>
        
        <DialogFooter className="flex justify-between sm:justify-between">
          <Button onClick={handleExport}>EXPORT</Button>
          <Button variant="outline" onClick={onClose}>CLOSE</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FormatExportDialog;

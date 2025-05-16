
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { 
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogFooter,
} from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

import TdcTbdDataForm from '../components/billing/TdcTbdDataForm';
import CryptoDataForm from '../components/billing/CryptoDataForm';
import TransferBankDataForm from '../components/billing/TransferBankDataForm';

const Billing = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [contractPeriod, setContractPeriod] = useState('6 Months');
  const [tdcTbdEnabled, setTdcTbdEnabled] = useState(true);
  const [transferBankEnabled, setTransferBankEnabled] = useState(false);
  const [cryptoEnabled, setCryptoEnabled] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState('USD');
  const [cryptoCurrency, setCryptoCurrency] = useState('NATIVE TOKEN');
  
  // Dialog states
  const [showTdcTbdDialog, setShowTdcTbdDialog] = useState(false);
  const [showCryptoDialog, setShowCryptoDialog] = useState(false);
  const [showTransferBankDialog, setShowTransferBankDialog] = useState(false);
  
  const [forDocumentService, setForDocumentService] = useState(true);
  const [forCommercialTransaction, setForCommercialTransaction] = useState(false);
  
  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <Layout>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-gray-100 border-r border-gray-200">
          <nav className="flex flex-col p-2">
            <div onClick={() => navigate('/dashboard')} className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1 cursor-pointer">Dashboard</div>
            <div onClick={() => navigate('/new-commercial-activity')} className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1 cursor-pointer">New commercial activity</div>
            <div onClick={() => navigate('/search')} className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1 cursor-pointer">Search</div>
            <div onClick={() => navigate('/reports')} className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1 cursor-pointer">Reports</div>
            <div className="bg-white p-2 font-medium border border-gray-300 mb-1">Billing</div>
            <div className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1 cursor-pointer">Profile</div>
            <div className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1 cursor-pointer">Setting</div>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <div>
              <p>Copper/Silver/Gold Plan</p>
            </div>
            <div className="flex items-center space-x-2">
              <span>Address Wallet / User ID</span>
              <Button onClick={handleLogout} variant="outline" className="uppercase text-xs py-0 h-8 border-black">
                LOGOUT
              </Button>
            </div>
          </div>
          
          <div className="flex-1 p-6">
            <div className="border border-gray-300 p-4 mb-6">
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">FIAT</h2>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span>TDC/TBD:</span>
                    <Switch 
                      checked={tdcTbdEnabled} 
                      onCheckedChange={setTdcTbdEnabled}
                    />
                  </div>
                  <div>
                    <Select value={currentCurrency} onValueChange={setCurrentCurrency}>
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD">USD</SelectItem>
                        <SelectItem value="EURO">EURO</SelectItem>
                        <SelectItem value="YEN">YEN</SelectItem>
                        <SelectItem value="ARS">ARS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span>TRANSFER BANK:</span>
                    <Switch 
                      checked={transferBankEnabled} 
                      onCheckedChange={setTransferBankEnabled}
                    />
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <Checkbox 
                    id="forDocumentsServiceFiat" 
                    checked={forDocumentService} 
                    onCheckedChange={setForDocumentService} 
                  />
                  <label htmlFor="forDocumentsServiceFiat">For Documents service</label>
                </div>
                
                <div className="flex items-center gap-2">
                  <Checkbox 
                    id="forCommercialTransactionFiat" 
                    checked={forCommercialTransaction} 
                    onCheckedChange={setForCommercialTransaction} 
                  />
                  <label htmlFor="forCommercialTransactionFiat">For Commercial transaction</label>
                </div>
              </div>
              
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">CRYPTO</h2>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Switch 
                      checked={cryptoEnabled} 
                      onCheckedChange={setCryptoEnabled}
                    />
                  </div>
                  <div>
                    <Select value={cryptoCurrency} onValueChange={setCryptoCurrency}>
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="NATIVE TOKEN">NATIVE TOKEN</SelectItem>
                        <SelectItem value="BTC">BTC</SelectItem>
                        <SelectItem value="ETH">ETH</SelectItem>
                        <SelectItem value="USDC">USDC</SelectItem>
                        <SelectItem value="USDT">USDT</SelectItem>
                        <SelectItem value="WLD">WLD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <Checkbox 
                    id="forDocumentsServiceCrypto" 
                    checked={forDocumentService} 
                    onCheckedChange={setForDocumentService} 
                  />
                  <label htmlFor="forDocumentsServiceCrypto">For Documents service</label>
                </div>
                
                <div className="flex items-center gap-2">
                  <Checkbox 
                    id="forCommercialTransactionCrypto" 
                    checked={forCommercialTransaction} 
                    onCheckedChange={setForCommercialTransaction} 
                  />
                  <label htmlFor="forCommercialTransactionCrypto">For Commercial transaction</label>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <label htmlFor="contractPeriod">CONTRACT PERIOD:</label>
                <Select value={contractPeriod} onValueChange={setContractPeriod}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6 Months">6 Months</SelectItem>
                    <SelectItem value="12 Months">12 Months</SelectItem>
                    <SelectItem value="36 Months">36 Months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              {tdcTbdEnabled && (
                <Button onClick={() => setShowTdcTbdDialog(true)} className="mr-2">
                  Open TDC/TBD Form
                </Button>
              )}
              
              {cryptoEnabled && (
                <Button onClick={() => setShowCryptoDialog(true)} className="mr-2">
                  Open Crypto Form
                </Button>
              )}
              
              {transferBankEnabled && (
                <Button onClick={() => setShowTransferBankDialog(true)} className="mr-2">
                  Open Transfer Bank Form
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* TDC/TBD Dialog */}
      <TdcTbdDataForm 
        isOpen={showTdcTbdDialog} 
        onClose={() => setShowTdcTbdDialog(false)} 
      />
      
      {/* Crypto Dialog */}
      <CryptoDataForm 
        isOpen={showCryptoDialog} 
        onClose={() => setShowCryptoDialog(false)} 
      />
      
      {/* Transfer Bank Dialog */}
      <TransferBankDataForm 
        isOpen={showTransferBankDialog} 
        onClose={() => setShowTransferBankDialog(false)} 
      />
      
    </Layout>
  );
};

export default Billing;

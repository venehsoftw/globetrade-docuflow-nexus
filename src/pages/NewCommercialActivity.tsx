
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { CalendarIcon, PlusCircle } from 'lucide-react';

type PackagingType = 'Boxes' | 'Bulges' | 'Packages' | 'Containers';
type TransportType = 'Truck' | 'Airplane' | 'Train' | 'Ship';
type ProcessingStatus = 'idle' | 'processing' | 'success' | 'error';

const NewCommercialActivity = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [packagingType, setPackagingType] = useState<PackagingType>('Boxes');
  const [transportType, setTransportType] = useState<TransportType>('Truck');
  const [quantity, setQuantity] = useState('100');
  const [processingStatus, setProcessingStatus] = useState<ProcessingStatus>('idle');
  const [processingMessage, setProcessingMessage] = useState('');
  
  const handleLogout = () => {
    navigate('/login');
  };

  const handleSave = () => {
    setProcessingStatus('processing');
    setProcessingMessage('Your transaction is being processed at this moment... Please wait a moment...');
    
    // Simulate API call
    setTimeout(() => {
      const success = Math.random() > 0.3; // 70% chance of success
      
      if (success) {
        setProcessingStatus('success');
        setProcessingMessage('Your transaction was successfully processed!');
        
        // Redirect after success
        setTimeout(() => {
          setProcessingStatus('idle');
          toast({
            title: "Transaction Created",
            description: "Your commercial activity has been saved successfully.",
          });
          navigate('/dashboard');
        }, 2000);
      } else {
        setProcessingStatus('error');
        setProcessingMessage('The application returned the following error: YYYYYYYYYY. Please refer to the platform type of document and find out the main reason of the problem. We apologize for any inconvenience caused.');
        
        // Reset after error
        setTimeout(() => {
          setProcessingStatus('idle');
        }, 3000);
      }
    }, 2000);
  };

  const handleCancel = () => {
    navigate('/dashboard');
  };

  return (
    <Layout>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-gray-100 border-r border-gray-200">
          <nav className="flex flex-col p-2">
            <div className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1">Dashboard</div>
            <div className="bg-white p-2 font-medium border border-gray-300 mb-1">New commercial activity</div>
            <div className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1">Search</div>
            <div className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1">Reports</div>
            <div className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1">Billing</div>
            <div className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1">Profile</div>
            <div className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1">Setting</div>
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
          
          <div className="flex-1 p-6 relative">
            {/* Transaction Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <Label htmlFor="transactionId">Transaction ID:</Label>
                  <Input id="transactionId" value="XXXXXXXXXXXXX" disabled className="bg-gray-100" />
                </div>

                <div className="mb-4">
                  <Label htmlFor="internalResponsible">Internal Responsible:</Label>
                  <select className="w-full p-2 border border-gray-300 bg-white">
                    <option>Person #1</option>
                    <option>Person #2</option>
                    <option>Person #3</option>
                  </select>
                </div>

                <div className="mb-4">
                  <Label htmlFor="customerType">Customer Type:</Label>
                  <select className="w-full p-2 border border-gray-300 bg-white">
                    <option>End Customers</option>
                    <option>Reseller</option>
                    <option>Government</option>
                    <option>Industrial</option>
                    <option>Partner</option>
                  </select>
                </div>

                <div className="mb-4">
                  <Label htmlFor="description">Description of Merchandise:</Label>
                  <textarea 
                    id="description" 
                    className="w-full h-32 p-2 border border-gray-300 bg-white"
                  />
                </div>

                <div className="mb-4">
                  <Label htmlFor="quantity">Quantity:</Label>
                  <div className="flex">
                    <Input 
                      id="quantity" 
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <Label>Packaging type:</Label>
                  <div className="space-y-2 mt-2">
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="boxes" 
                        name="packaging" 
                        checked={packagingType === 'Boxes'} 
                        onChange={() => setPackagingType('Boxes')}
                        className="mr-2"
                      />
                      <label htmlFor="boxes">Boxes</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="bulges" 
                        name="packaging" 
                        checked={packagingType === 'Bulges'} 
                        onChange={() => setPackagingType('Bulges')}
                        className="mr-2"
                      />
                      <label htmlFor="bulges">Bulges</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="packages" 
                        name="packaging" 
                        checked={packagingType === 'Packages'} 
                        onChange={() => setPackagingType('Packages')}
                        className="mr-2"
                      />
                      <label htmlFor="packages">Packages</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="containers" 
                        name="packaging" 
                        checked={packagingType === 'Containers'} 
                        onChange={() => setPackagingType('Containers')}
                        className="mr-2"
                      />
                      <label htmlFor="containers">Containers</label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="mb-4">
                  <Label htmlFor="customerContact">Customer Contact Person:</Label>
                  <select className="w-full p-2 border border-gray-300 bg-white">
                    <option>Person #1</option>
                    <option>Person #2</option>
                    <option>Person #3</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="dateShipment">Date of Shipment:</Label>
                  <div className="flex">
                    <Input id="dateShipment" value="01/01/2024" readOnly className="bg-gray-100" />
                    <Button variant="outline" className="ml-2">
                      <CalendarIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="dateDelivery">Aprox. Date of Delivery:</Label>
                  <div className="flex">
                    <Input id="dateDelivery" value="01/01/2024" readOnly className="bg-gray-100" />
                    <Button variant="outline" className="ml-2">
                      <CalendarIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="transportType">Type of International Transport:</Label>
                  <select 
                    id="transportType"
                    value={transportType}
                    onChange={(e) => setTransportType(e.target.value as TransportType)}
                    className="w-full p-2 border border-gray-300 bg-white"
                  >
                    <option value="Truck">Truck</option>
                    <option value="Airplane">Airplane</option>
                    <option value="Train">Train</option>
                    <option value="Ship">Ship</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="companyServices">Company providing International Services:</Label>
                  <Input id="companyServices" />
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="embarkation">Airport/Port of Embarkation:</Label>
                  <Input id="embarkation" />
                </div>
                
                <div className="mb-4">
                  <Label>Support Files:</Label>
                  <div className="border border-gray-300 p-4 mt-2">
                    <p className="text-center mb-4">Select the files that support the commercial transaction:</p>
                    <div className="flex space-x-2">
                      <Input type="file" id="supportFile" />
                      <Button variant="outline">LOAD</Button>
                      <Button variant="ghost" className="p-0 h-8 w-8 rounded-full flex justify-center items-center">
                        <PlusCircle className="h-6 w-6" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-4 mt-6">
              <Button onClick={handleSave}>SAVE</Button>
              <Button onClick={handleCancel} variant="outline">CLEAR</Button>
            </div>
            
            {/* Processing Overlay */}
            {processingStatus !== 'idle' && (
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="bg-white p-6 max-w-md rounded-lg shadow-lg">
                  <p className={`text-lg font-medium text-center ${processingStatus === 'processing' ? 'text-blue-500' : processingStatus === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                    {processingMessage}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewCommercialActivity;

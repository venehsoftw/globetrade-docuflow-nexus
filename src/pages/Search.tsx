
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Search = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <Layout>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-gray-100 border-r border-gray-200">
          <nav className="flex flex-col p-2">
            <div className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1">Dashboard</div>
            <div className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1">New commercial activity</div>
            <div className="bg-white p-2 font-medium border border-gray-300 mb-1">Search</div>
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
              <p>Copper Plan</p>
            </div>
            <div className="flex items-center space-x-2">
              <span>Address Wallet / User ID</span>
              <Button onClick={handleLogout} variant="outline" className="uppercase text-xs py-0 h-8 border-black">
                LOGOUT
              </Button>
            </div>
          </div>
          
          <div className="flex-1 p-6">
            <div className="space-y-6 max-w-2xl mx-auto">
              <h2 className="text-xl font-medium">Search Commercial Transactions</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="transactionId" className="block mb-1">Transaction ID:</label>
                  <Input id="transactionId" placeholder="Enter transaction ID" />
                </div>
                
                <div>
                  <label htmlFor="customerName" className="block mb-1">Customer Name:</label>
                  <Input id="customerName" placeholder="Enter customer name" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="startDate" className="block mb-1">Start Date:</label>
                    <Input id="startDate" type="date" />
                  </div>
                  
                  <div>
                    <label htmlFor="endDate" className="block mb-1">End Date:</label>
                    <Input id="endDate" type="date" />
                  </div>
                </div>
                
                <div className="flex justify-center space-x-4 pt-4">
                  <Button>Search</Button>
                  <Button variant="outline">Clear</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;

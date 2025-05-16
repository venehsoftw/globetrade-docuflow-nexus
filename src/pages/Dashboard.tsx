
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
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
            <div className="bg-white p-2 font-medium border border-gray-300 mb-1">Dashboard</div>
            <div className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1">New commercial activity</div>
            <div className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1">Search</div>
            <div className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1">Reports</div>
            <div className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1">Billing</div>
            <div className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1">Profile</div>
            <div className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1">Setting</div>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-4">
            <div></div>
            <div className="flex items-center space-x-2">
              <span>Address Wallet / User ID</span>
              <Button onClick={handleLogout} variant="outline" className="uppercase text-xs py-0 h-8 border-black">
                LOGOUT
              </Button>
            </div>
          </div>
          
          <div className="bg-white border border-gray-300 p-6 rounded">
            <p className="text-gray-800">
              To have access to the basic functionalities of the platform you 
              must configure your profile and then one of relevant subscription 
              levels available in the system. Access to the Profile Tab and fill in 
              the fields corresponding to your profile. Access the Billing Tab and 
              select the plan that best suits your needs. Then access the 
              Setting Tab to configure the intrinsic parameters of the systems, 
              for example, activation of the security system using 2FA.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

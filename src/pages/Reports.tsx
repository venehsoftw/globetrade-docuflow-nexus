
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';

const Reports = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate('/login');
  };

  const reportTypes = [
    "REPORT TYPE N°1",
    "REPORT TYPE N°2",
    "REPORT TYPE N°3"
  ];

  return (
    <Layout>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-gray-100 border-r border-gray-200">
          <nav className="flex flex-col p-2">
            <Link to="/dashboard" className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1">Dashboard</Link>
            <Link to="/new-commercial-activity" className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1">New commercial activity</Link>
            <Link to="/search" className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1">Search</Link>
            <div className="bg-white p-2 font-medium border border-gray-300 mb-1">Reports</div>
            <Link to="/billing" className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1">Billing</Link>
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
          
          <div className="flex-1 p-6 flex flex-col items-center justify-center space-y-8">
            {reportTypes.map((report, index) => (
              <Button 
                key={index} 
                variant="outline" 
                className="border-black w-48 py-2"
              >
                {report}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reports;


import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import PlanCopper from '../components/dashboard/PlanCopper';
import PlanGold from '../components/dashboard/PlanGold';
import PlanSilver from '../components/dashboard/PlanSilver';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activePlan, setActivePlan] = useState<'copper' | 'gold' | 'silver'>('copper');
  
  const handleLogout = () => {
    navigate('/login');
  };

  const renderPlanContent = () => {
    switch (activePlan) {
      case 'copper':
        return <PlanCopper />;
      case 'gold':
        return <PlanGold />;
      case 'silver':
        return <PlanSilver />;
      default:
        return <PlanCopper />;
    }
  };

  return (
    <Layout>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-gray-100 border-r border-gray-200">
          <nav className="flex flex-col p-2">
            <div className="bg-white p-2 font-medium border border-gray-300 mb-1">Dashboard</div>
            <Link to="/new-commercial-activity" className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1">New commercial activity</Link>
            <Link to="/search" className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1">Search</Link>
            <Link to="/reports" className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1">Reports</Link>
            <Link to="/billing" className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1">Billing</Link>
            <div className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1">Profile</div>
            <div className="bg-gray-200 p-2 hover:bg-gray-300 border border-gray-300 mb-1">Setting</div>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <div>
              <div className="flex space-x-4">
                <button 
                  className={`px-3 py-1 ${activePlan === 'copper' ? 'font-bold' : ''}`}
                  onClick={() => setActivePlan('copper')}
                >
                  Copper Plan
                </button>
                <button 
                  className={`px-3 py-1 ${activePlan === 'gold' ? 'font-bold' : ''}`}
                  onClick={() => setActivePlan('gold')}
                >
                  Gold Plan
                </button>
                <button 
                  className={`px-3 py-1 ${activePlan === 'silver' ? 'font-bold' : ''}`}
                  onClick={() => setActivePlan('silver')}
                >
                  Silver Plan
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span>Address Wallet / User ID</span>
              <Button onClick={handleLogout} variant="outline" className="uppercase text-xs py-0 h-8 border-black">
                LOGOUT
              </Button>
            </div>
          </div>
          
          <div className="flex-1 p-6">
            {renderPlanContent()}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

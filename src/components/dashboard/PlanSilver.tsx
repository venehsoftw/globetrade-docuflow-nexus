
import { useState } from 'react';

interface Transaction {
  id: string;
  status: 'Activate' | 'Inactivate' | 'Warming';
  name: string;
  relation: string;
}

const PlanSilver = () => {
  const transactions: Transaction[] = [
    { 
      id: 'A00001000', 
      status: 'Activate', 
      name: 'Giacomo Guilizzoni', 
      relation: 'End Customer' 
    },
    { 
      id: 'B00011000', 
      status: 'Inactivate', 
      name: 'Marco Botton Tuttofare', 
      relation: 'Partner' 
    },
    { 
      id: 'C00200100', 
      status: 'Activate', 
      name: 'Mariah Maclachlan Better Half', 
      relation: 'End Customer' 
    },
    { 
      id: 'C00200100', 
      status: 'Warming', 
      name: 'Valerie Liberty Head Chef', 
      relation: 'Reseller' 
    },
  ];

  return (
    <div className="space-y-6">
      <div className="border border-gray-300 bg-gray-100 rounded-md overflow-hidden">
        <div className="overflow-auto">
          <table className="min-w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left">ID Trans.</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">First / Last Name</th>
                <th className="px-4 py-2 text-left">Comm. Relation</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-2">{transaction.id}</td>
                  <td className="px-4 py-2">{transaction.status}</td>
                  <td className="px-4 py-2">{transaction.name}</td>
                  <td className="px-4 py-2">{transaction.relation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-8">
        <div className="space-y-2">
          <div className="h-40 bg-white border border-gray-300 p-4">
            <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="80" width="10" height="10" fill="#d1d5db" />
              <rect x="25" y="70" width="10" height="20" fill="#9ca3af" />
              <rect x="40" y="50" width="10" height="40" fill="#d1d5db" />
              <rect x="55" y="30" width="10" height="60" fill="#9ca3af" />
              <rect x="70" y="40" width="10" height="50" fill="#d1d5db" />
            </svg>
          </div>
          <p className="text-center font-medium">TREND N°1</p>
        </div>
        
        <div className="space-y-2">
          <div className="h-40 bg-white border border-gray-300 p-4">
            <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <polyline points="10,80 30,60 50,70 70,40 90,30" 
                fill="none" stroke="#9ca3af" strokeWidth="2" />
              <polyline points="10,80 30,70 50,60 70,45 90,20" 
                fill="none" stroke="#d1d5db" strokeWidth="2" />
            </svg>
          </div>
          <p className="text-center font-medium">TREND N°2</p>
        </div>
        
        <div className="space-y-2">
          <div className="h-40 bg-white border border-gray-300 p-4 flex justify-center items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden relative">
              <div className="absolute inset-0 border border-gray-300 rounded-full"></div>
              <div className="absolute inset-0" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}>
                <div className="w-full h-full bg-gray-400"></div>
              </div>
              <div className="absolute inset-0" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}>
                <div className="w-full h-full bg-gray-200"></div>
              </div>
            </div>
          </div>
          <p className="text-center font-medium">TREND N°3</p>
        </div>
      </div>
      
      <div className="flex justify-end gap-4">
        <button className="px-4 py-2 border border-gray-300 bg-white">CLOSE</button>
      </div>
    </div>
  );
};

export default PlanSilver;

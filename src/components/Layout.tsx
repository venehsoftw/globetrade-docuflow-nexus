
import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  showWalletButton?: boolean;
  showDevVersion?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  showWalletButton = false,
  showDevVersion = true 
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-gray-200">
        <div className="container mx-auto p-4 flex justify-between items-center">
          {showDevVersion && (
            <div className="text-sm text-gray-600">
              Dev Version 1.0.1
            </div>
          )}
          {showWalletButton && (
            <Link 
              to="/wallet" 
              className="border border-gray-300 px-3 py-1 text-sm uppercase tracking-wider"
            >
              Wallet Connection
            </Link>
          )}
          {!showWalletButton && <div></div>}
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>

      <footer className="border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          All right Reserved @ VeneHsoftw 2024
        </div>
      </footer>
    </div>
  );
};

export default Layout;

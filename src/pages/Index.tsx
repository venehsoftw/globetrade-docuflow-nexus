
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <Layout showWalletButton={true}>
      <div className="page-container flex flex-col items-center justify-center py-16 md:py-24">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Welcome to INCOMINT1.0 Platform
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Make and improve your commercial transactions of goods with your customers more fruitful.
          </p>
        </div>

        <div className="w-full max-w-md space-y-6">
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-center">
              Document Management System
            </h2>
            
            <div className="space-y-4">
              <Link to="/login" className="block w-full">
                <Button className="w-full text-base py-6" variant="default">
                  Login to Your Account
                </Button>
              </Link>
              
              <Link to="/signup" className="block w-full">
                <Button className="w-full text-base py-6" variant="outline">
                  Create New Account
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="text-center text-sm text-gray-500">
            <p>
              Securely manage your commercial documents and transactions from anywhere in the world.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

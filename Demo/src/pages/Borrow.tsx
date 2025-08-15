import React from 'react';
import { CreditCard, Shield, TrendingDown } from 'lucide-react';
import BorrowInterface from '../components/borrow/BorrowInterface';
import LoanHealthCard from '../components/borrow/LoanHealthCard';
import ActiveLoansTable from '../components/borrow/ActiveLoansTable';

const Borrow: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-100">Borrow with Bitcoin</h1>
          <p className="text-gray-400 mt-1">The DeFi way to leverage your BTC holdings</p>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-orange-500/20 rounded-lg">
              <CreditCard className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="font-semibold text-gray-100">Total Borrowed</h3>
          </div>
          <div className="text-2xl font-bold text-gray-100">$45,000</div>
          <div className="text-sm text-gray-400 mt-1">USDT</div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Shield className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="font-semibold text-gray-100">Collateral Value</h3>
          </div>
          <div className="text-2xl font-bold text-gray-100">$67,500</div>
          <div className="text-sm text-gray-400 mt-1">2.5 tBTC</div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <TrendingDown className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="font-semibold text-gray-100">Available to Borrow</h3>
          </div>
          <div className="text-2xl font-bold text-gray-100">$15,000</div>
          <div className="text-sm text-gray-400 mt-1">At current LTV</div>
        </div>
      </div>

      {/* Main Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BorrowInterface />
        <LoanHealthCard />
      </div>

      {/* Active Loans */}
      <ActiveLoansTable />
    </div>
  );
};

export default Borrow;
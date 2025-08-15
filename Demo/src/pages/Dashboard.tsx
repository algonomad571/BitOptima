import React from 'react';
import PortfolioOverview from '../components/dashboard/PortfolioOverview';
import VaultPositions from '../components/dashboard/VaultPositions';
import ActiveLoans from '../components/dashboard/ActiveLoans';
import StakingRewards from '../components/dashboard/StakingRewards';
import TransactionFeed from '../components/dashboard/TransactionFeed';
import MarketSnapshot from '../components/dashboard/MarketSnapshot';
import AIQuickSuggestions from '../components/dashboard/AIQuickSuggestions';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-100">Your Smart BTC Dashboard</h1>
          <p className="text-gray-400 mt-1">Overview of your DeFi positions and opportunities</p>
        </div>
      </div>

      {/* Top Row - Portfolio Overview and Market */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PortfolioOverview />
        </div>
        <div>
          <MarketSnapshot />
        </div>
      </div>

      {/* AI Suggestions */}
      <AIQuickSuggestions />

      {/* Middle Row - Positions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <VaultPositions />
        <ActiveLoans />
      </div>

      {/* Bottom Row - Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TransactionFeed />
        </div>
        <div>
          <StakingRewards />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
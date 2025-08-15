import React, { useState } from 'react';
import { Coins, Zap, Info, TrendingUp } from 'lucide-react';
import StakingTabs from '../components/staking/StakingTabs';
import DualStaking from '../components/staking/DualStaking';
import LiquidStaking from '../components/staking/LiquidStaking';

const Staking: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dual' | 'liquid'>('dual');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-100">Staking Center</h1>
          <p className="text-gray-400 mt-1">Earn rewards by staking your Bitcoin and Core tokens</p>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-teal-500/20 rounded-lg">
              <Coins className="w-5 h-5 text-teal-400" />
            </div>
            <h3 className="font-semibold text-gray-100">Total Staked</h3>
          </div>
          <div className="text-2xl font-bold text-gray-100 mb-1">$42,567.89</div>
          <div className="flex items-center space-x-1 text-green-400 text-sm">
            <TrendingUp className="w-3 h-3" />
            <span>+5.2% this week</span>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <Zap className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="font-semibold text-gray-100">Total Rewards</h3>
          </div>
          <div className="text-2xl font-bold text-gray-100 mb-1">$1,234.56</div>
          <div className="text-sm text-gray-400">Last 30 days</div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="font-semibold text-gray-100">Average APY</h3>
          </div>
          <div className="text-2xl font-bold text-gray-100 mb-1">8.4%</div>
          <div className="text-sm text-gray-400">Across all positions</div>
        </div>
      </div>

      {/* Staking Interface */}
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
        <StakingTabs activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="mt-6">
          {activeTab === 'dual' ? <DualStaking /> : <LiquidStaking />}
        </div>
      </div>
    </div>
  );
};

export default Staking;
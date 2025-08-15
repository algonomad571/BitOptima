import React, { useState } from 'react';
import { Info, Zap, Clock } from 'lucide-react';

const DualStaking: React.FC = () => {
  const [tbtcAmount, setTbtcAmount] = useState('');
  const [tcoreAmount, setTcoreAmount] = useState('');

  const stakingInfo = {
    apy: '8.2',
    lockPeriod: '14 days',
    minStake: '0.01 tBTC + 100 tCORE2',
    totalStaked: '$2.1M',
    yourStaked: '1.5 tBTC + 1000 tCORE2'
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Staking Interface */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-100 mb-4">Stake Your Assets</h3>
          
          {/* tBTC Input */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-300">tBTC Amount</label>
              <span className="text-sm text-gray-400">Balance: 2.45 tBTC</span>
            </div>
            <div className="relative">
              <input
                type="number"
                value={tbtcAmount}
                onChange={(e) => setTbtcAmount(e.target.value)}
                placeholder="0.00"
                className="w-full p-4 bg-slate-700 border border-slate-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-teal-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-teal-500/20 text-teal-400 text-sm rounded-lg hover:bg-teal-500/30">
                MAX
              </button>
            </div>
          </div>

          {/* tCORE2 Input */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-300">tCORE2 Amount</label>
              <span className="text-sm text-gray-400">Balance: 5,000 tCORE2</span>
            </div>
            <div className="relative">
              <input
                type="number"
                value={tcoreAmount}
                onChange={(e) => setTcoreAmount(e.target.value)}
                placeholder="0"
                className="w-full p-4 bg-slate-700 border border-slate-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-teal-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-teal-500/20 text-teal-400 text-sm rounded-lg hover:bg-teal-500/30">
                MAX
              </button>
            </div>
          </div>

          {/* Stake Button */}
          <button className="w-full py-4 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-lg transition-colors">
            Stake Assets
          </button>
        </div>

        {/* Current Position */}
        <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
          <h4 className="font-medium text-gray-100 mb-3">Your Current Position</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Staked Amount:</span>
              <span className="text-gray-100">{stakingInfo.yourStaked}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Est. Value:</span>
              <span className="text-gray-100">$64,789.23</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Rewards Earned:</span>
              <span className="text-green-400">$156.89</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Next Reward:</span>
              <span className="text-gray-100">2h 15m</span>
            </div>
          </div>
          <div className="flex space-x-2 mt-4">
            <button className="flex-1 py-2 bg-teal-500 hover:bg-teal-400 text-white text-sm rounded-lg transition-colors">
              Claim Rewards
            </button>
            <button className="flex-1 py-2 bg-slate-600 hover:bg-slate-500 text-gray-100 text-sm rounded-lg transition-colors">
              Unstake
            </button>
          </div>
        </div>
      </div>

      {/* Information Panel */}
      <div className="space-y-6">
        <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
          <h4 className="font-medium text-gray-100 mb-4 flex items-center">
            <Info className="w-4 h-4 mr-2 text-teal-400" />
            Staking Details
          </h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Current APY</span>
              <div className="flex items-center space-x-1">
                <Zap className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-semibold">{stakingInfo.apy}%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Lock Period</span>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-gray-100">{stakingInfo.lockPeriod}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Minimum Stake</span>
              <span className="text-gray-100">{stakingInfo.minStake}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Total Staked</span>
              <span className="text-gray-100">{stakingInfo.totalStaked}</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
          <h4 className="font-medium text-blue-400 mb-2">How Dual Staking Works</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>• Stake both tBTC and tCORE2 tokens together</li>
            <li>• Earn enhanced rewards from both networks</li>
            <li>• 14-day lock period for optimal yields</li>
            <li>• Automatic compound rewards every 24 hours</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DualStaking;
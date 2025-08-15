import React from 'react';
import { Coins, Award, Clock } from 'lucide-react';

const StakingRewards: React.FC = () => {
  const stakingData = [
    {
      type: 'Dual Staking',
      staked: '1.5 tBTC + 1000 tCORE2',
      earned: '$89.45',
      apy: '8.2',
      nextReward: '2h 15m'
    },
    {
      type: 'Liquid Staking',
      staked: '0.75 lstBTC',
      earned: '$34.67',
      apy: '6.8',
      nextReward: 'Daily'
    }
  ];

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 h-fit">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Staking Rewards</h2>
        <button className="text-teal-400 hover:text-teal-300 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {stakingData.map((stake, index) => (
          <div key={index} className="p-4 bg-slate-700/50 rounded-lg border border-slate-600">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-teal-500/20 rounded-lg">
                  <Coins className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-100">{stake.type}</h3>
                  <p className="text-sm text-gray-400">{stake.staked}</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <div className="flex items-center space-x-1 text-green-400 text-sm mb-1">
                  <Award className="w-3 h-3" />
                  <span>Earned</span>
                </div>
                <div className="font-medium text-gray-100">{stake.earned}</div>
              </div>
              <div>
                <div className="flex items-center space-x-1 text-blue-400 text-sm mb-1">
                  <Clock className="w-3 h-3" />
                  <span>APY</span>
                </div>
                <div className="font-medium text-gray-100">{stake.apy}%</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-3 border-t border-slate-600">
              <div className="text-sm text-gray-400">
                Next reward: {stake.nextReward}
              </div>
              <button className="px-3 py-1 bg-teal-500 hover:bg-teal-400 text-white text-sm rounded-lg transition-colors">
                Claim
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-700">
        <button className="w-full py-3 bg-slate-700 hover:bg-slate-600 text-gray-100 rounded-lg font-medium transition-colors">
          Start Staking
        </button>
      </div>
    </div>
  );
};

export default StakingRewards;
import React from 'react';
import { Vault, TrendingUp, ExternalLink } from 'lucide-react';

const VaultPositions: React.FC = () => {
  const positions = [
    {
      name: 'tBTC Yield Optimizer',
      deposited: '1.2345',
      value: '$5,234.67',
      apy: '12.4',
      earned: '$156.89',
      status: 'active'
    },
    {
      name: 'lstBTC Strategy Vault',
      deposited: '0.8910',
      value: '$3,789.21',
      apy: '9.8',
      earned: '$89.45',
      status: 'active'
    }
  ];

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Vault Positions</h2>
        <button className="text-teal-400 hover:text-teal-300 text-sm font-medium">
          View All
        </button>
      </div>

      {positions.length > 0 ? (
        <div className="space-y-4">
          {positions.map((position, index) => (
            <div key={index} className="p-4 bg-slate-700/50 rounded-lg border border-slate-600">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Vault className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-100">{position.name}</h3>
                    <p className="text-sm text-gray-400">{position.deposited} tBTC deposited</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-gray-100 font-medium">{position.value}</div>
                  <div className="flex items-center space-x-1 text-green-400 text-sm">
                    <TrendingUp className="w-3 h-3" />
                    <span>{position.apy}% APY</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-3 border-t border-slate-600">
                <div className="text-sm">
                  <span className="text-gray-400">Earned: </span>
                  <span className="text-green-400 font-medium">{position.earned}</span>
                </div>
                <button className="flex items-center space-x-1 text-teal-400 hover:text-teal-300 text-sm">
                  <span>Manage</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <Vault className="w-12 h-12 text-gray-600 mx-auto mb-3" />
          <p className="text-gray-400">No vault positions yet</p>
          <button className="mt-3 px-4 py-2 bg-teal-500 hover:bg-teal-400 text-white rounded-lg text-sm font-medium transition-colors">
            Explore Vaults
          </button>
        </div>
      )}
    </div>
  );
};

export default VaultPositions;
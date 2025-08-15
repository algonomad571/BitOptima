import React from 'react';
import { Vault, TrendingUp, Plus } from 'lucide-react';
import VaultCard from '../components/vaults/VaultCard';
import YieldChart from '../components/vaults/YieldChart';

const Vaults: React.FC = () => {
  const vaults = [
    {
      id: 1,
      name: 'tBTC Yield Optimizer',
      strategy: 'Multi-protocol yield farming',
      apy: '12.4',
      tvl: '$2.1M',
      yourDeposit: '1.2345',
      token: 'tBTC',
      risk: 'Medium',
      earned: '$156.89'
    },
    {
      id: 2,
      name: 'lstBTC Strategy Vault',
      strategy: 'Liquid staking + DeFi yield',
      apy: '9.8',
      tvl: '$850K',
      yourDeposit: '0.8910',
      token: 'lstBTC',
      risk: 'Low',
      earned: '$89.45'
    },
    {
      id: 3,
      name: 'Core Ecosystem Fund',
      strategy: 'Diversified Core DeFi',
      apy: '15.2',
      tvl: '$1.5M',
      yourDeposit: '0',
      token: 'tBTC',
      risk: 'High',
      earned: '$0'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-100">Yield Vaults</h1>
          <p className="text-gray-400 mt-1">Smart earnings from tBTC-based strategies</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-teal-500 hover:bg-teal-400 text-white rounded-lg font-medium transition-colors">
          <Plus className="w-4 h-4" />
          <span>Create Vault</span>
        </button>
      </div>

      {/* Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Vault className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="font-semibold text-gray-100">Total Deposited</h3>
          </div>
          <div className="text-2xl font-bold text-gray-100">$89,234.56</div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="font-semibold text-gray-100">Total Earned</h3>
          </div>
          <div className="text-2xl font-bold text-gray-100">$2,456.78</div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <h3 className="font-semibold text-gray-100 mb-4">Average APY</h3>
          <div className="text-2xl font-bold text-gray-100">11.2%</div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <h3 className="font-semibold text-gray-100 mb-4">Active Vaults</h3>
          <div className="text-2xl font-bold text-gray-100">{vaults.filter(v => parseFloat(v.yourDeposit) > 0).length}</div>
        </div>
      </div>

      {/* Yield Chart */}
      <YieldChart />

      {/* Vaults Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {vaults.map((vault) => (
          <VaultCard key={vault.id} vault={vault} />
        ))}
      </div>
    </div>
  );
};

export default Vaults;
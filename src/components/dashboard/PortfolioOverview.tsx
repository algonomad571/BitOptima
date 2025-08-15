import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Percent } from 'lucide-react';

const PortfolioOverview: React.FC = () => {
  const portfolioData = {
    totalValue: '24,567.82',
    change24h: '+3.24',
    changePercent: '+5.67',
    breakdown: [
      { label: 'Staked Assets', value: '15,234.56', percent: 62 },
      { label: 'Vault Deposits', value: '6,789.12', percent: 28 },
      { label: 'Available', value: '2,544.14', percent: 10 }
    ]
  };

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Portfolio Overview</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Live</span>
        </div>
      </div>

      {/* Total Value */}
      <div className="mb-6">
        <div className="flex items-baseline space-x-3">
          <span className="text-3xl font-bold text-gray-100">${portfolioData.totalValue}</span>
          <div className="flex items-center space-x-1">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-green-400 font-medium">{portfolioData.change24h}</span>
            <span className="text-green-400">({portfolioData.changePercent}%)</span>
          </div>
        </div>
        <p className="text-gray-400 text-sm mt-1">24h change</p>
      </div>

      {/* Breakdown */}
      <div className="space-y-4">
        {portfolioData.breakdown.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${
                  index === 0 ? 'bg-teal-400' : 
                  index === 1 ? 'bg-blue-400' : 'bg-gray-400'
                }`}></div>
                <span className="text-gray-300">{item.label}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-100 font-medium">${item.value}</span>
              <div className="w-20 bg-slate-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    index === 0 ? 'bg-teal-400' : 
                    index === 1 ? 'bg-blue-400' : 'bg-gray-400'
                  }`}
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>
              <span className="text-gray-400 text-sm w-8">{item.percent}%</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-slate-700">
        <button className="flex items-center justify-center space-x-2 py-3 px-4 bg-teal-500/20 text-teal-300 rounded-lg hover:bg-teal-500/30 transition-colors">
          <Percent className="w-4 h-4" />
          <span className="text-sm font-medium">Stake</span>
        </button>
        <button className="flex items-center justify-center space-x-2 py-3 px-4 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors">
          <DollarSign className="w-4 h-4" />
          <span className="text-sm font-medium">Deposit</span>
        </button>
        <button className="flex items-center justify-center space-x-2 py-3 px-4 bg-slate-700 text-gray-300 rounded-lg hover:bg-slate-600 transition-colors">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">Trade</span>
        </button>
      </div>
    </div>
  );
};

export default PortfolioOverview;
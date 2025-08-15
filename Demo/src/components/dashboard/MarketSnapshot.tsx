import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const MarketSnapshot: React.FC = () => {
  const marketData = [
    { symbol: 'BTC', price: '43,256.78', change: '+2.34', isPositive: true },
    { symbol: 'tCORE2', price: '0.89', change: '-0.12', isPositive: false },
    { symbol: 'lstBTC', price: '1.0234', change: '+0.05', isPositive: true },
  ];

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 h-fit">
      <h2 className="text-xl font-semibold text-gray-100 mb-6">Market Snapshot</h2>
      
      <div className="space-y-4">
        {marketData.map((token, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
            <div>
              <div className="font-medium text-gray-100">{token.symbol}</div>
              <div className="text-sm text-gray-400">
                ${token.price}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {token.isPositive ? (
                <TrendingUp className="w-4 h-4 text-green-400" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-400" />
              )}
              <span className={`text-sm font-medium ${
                token.isPositive ? 'text-green-400' : 'text-red-400'
              }`}>
                {token.change}%
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-700">
        <div className="text-sm text-gray-400">
          <div className="flex justify-between mb-2">
            <span>Total Market Cap</span>
            <span className="text-gray-100">$1.2T</span>
          </div>
          <div className="flex justify-between">
            <span>24h Volume</span>
            <span className="text-gray-100">$45.6B</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSnapshot;
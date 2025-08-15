import React, { useState } from 'react';
import { TrendingUp, Calendar } from 'lucide-react';

const YieldChart: React.FC = () => {
  const [timeframe, setTimeframe] = useState<'7d' | '30d' | '90d' | '1y'>('30d');

  const chartData = {
    '7d': [12.5, 12.8, 11.9, 13.2, 12.4, 13.1, 12.7],
    '30d': [11.2, 11.8, 12.1, 11.9, 12.5, 12.8, 13.1, 12.4, 12.9, 13.2],
    '90d': [10.5, 11.2, 11.8, 12.5, 12.1, 12.8, 13.2, 12.4, 12.9, 13.5],
    '1y': [8.5, 9.2, 10.1, 10.8, 11.5, 12.2, 12.8, 13.2, 12.9, 13.5]
  };

  const currentData = chartData[timeframe];
  const maxValue = Math.max(...currentData);
  const minValue = Math.min(...currentData);

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-100">Yield Performance</h2>
          <p className="text-gray-400 text-sm">Average APY across your vault positions</p>
        </div>
        <div className="flex items-center space-x-1 bg-slate-700 rounded-lg p-1">
          {(['7d', '30d', '90d', '1y'] as const).map((period) => (
            <button
              key={period}
              onClick={() => setTimeframe(period)}
              className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                timeframe === period
                  ? 'bg-teal-500 text-white'
                  : 'text-gray-400 hover:text-gray-100'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative h-64 mb-4">
        <div className="absolute inset-0 flex items-end justify-between space-x-1">
          {currentData.map((value, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div
                className="w-full bg-gradient-to-t from-teal-500 to-teal-400 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
                style={{
                  height: `${((value - minValue) / (maxValue - minValue)) * 100}%`,
                  minHeight: '20px'
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400">
          <span>{maxValue.toFixed(1)}%</span>
          <span>{((maxValue + minValue) / 2).toFixed(1)}%</span>
          <span>{minValue.toFixed(1)}%</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-sm text-gray-400">Current APY</div>
          <div className="text-lg font-bold text-gray-100">{currentData[currentData.length - 1]}%</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-400">Peak APY</div>
          <div className="text-lg font-bold text-green-400">{maxValue}%</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-400">Change</div>
          <div className="flex items-center justify-center space-x-1 text-green-400">
            <TrendingUp className="w-4 h-4" />
            <span className="text-lg font-bold">+2.3%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YieldChart;
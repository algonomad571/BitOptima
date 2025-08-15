import React from 'react';
import { CreditCard, AlertTriangle, TrendingUp } from 'lucide-react';

const ActiveLoans: React.FC = () => {
  const loans = [
    {
      collateral: '2.5 tBTC',
      borrowed: '$45,000 USDT',
      ltv: 68,
      healthFactor: 1.42,
      liquidationPrice: '$38,500',
      interestRate: '5.2'
    }
  ];

  const getLTVColor = (ltv: number) => {
    if (ltv >= 80) return 'text-red-400 bg-red-500/20';
    if (ltv >= 70) return 'text-yellow-400 bg-yellow-500/20';
    return 'text-green-400 bg-green-500/20';
  };

  const getHealthColor = (health: number) => {
    if (health <= 1.2) return 'text-red-400';
    if (health <= 1.5) return 'text-yellow-400';
    return 'text-green-400';
  };

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Active Loans</h2>
        <button className="text-teal-400 hover:text-teal-300 text-sm font-medium">
          View All
        </button>
      </div>

      {loans.length > 0 ? (
        <div className="space-y-4">
          {loans.map((loan, index) => (
            <div key={index} className="p-4 bg-slate-700/50 rounded-lg border border-slate-600">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-orange-500/20 rounded-lg">
                    <CreditCard className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-100">BTC Collateral Loan</h3>
                    <p className="text-sm text-gray-400">Collateral: {loan.collateral}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-gray-100 font-medium">{loan.borrowed}</div>
                  <div className="text-sm text-gray-400">{loan.interestRate}% APR</div>
                </div>
              </div>

              {/* Health Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-slate-800 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-400">LTV Ratio</span>
                    <span className={`text-sm px-2 py-1 rounded-full ${getLTVColor(loan.ltv)}`}>
                      {loan.ltv}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-600 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${loan.ltv >= 80 ? 'bg-red-500' : loan.ltv >= 70 ? 'bg-yellow-500' : 'bg-green-500'}`}
                      style={{ width: `${loan.ltv}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="p-3 bg-slate-800 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">Health Factor</div>
                  <div className={`text-lg font-bold ${getHealthColor(loan.healthFactor)}`}>
                    {loan.healthFactor}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-600">
                <div className="text-sm">
                  <span className="text-gray-400">Liquidation at: </span>
                  <span className="text-red-400 font-medium">{loan.liquidationPrice}</span>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-teal-500 hover:bg-teal-400 text-white text-sm rounded-lg transition-colors">
                    Add Collateral
                  </button>
                  <button className="px-3 py-1 bg-slate-600 hover:bg-slate-500 text-gray-100 text-sm rounded-lg transition-colors">
                    Repay
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <CreditCard className="w-12 h-12 text-gray-600 mx-auto mb-3" />
          <p className="text-gray-400">No active loans</p>
          <button className="mt-3 px-4 py-2 bg-orange-500 hover:bg-orange-400 text-white rounded-lg text-sm font-medium transition-colors">
            Start Borrowing
          </button>
        </div>
      )}
    </div>
  );
};

export default ActiveLoans;
import React from 'react';
import { ExternalLink, AlertTriangle } from 'lucide-react';

const ActiveLoansTable: React.FC = () => {
  const loans = [
    {
      id: 1,
      collateral: '2.5 tBTC',
      collateralValue: '$67,500',
      borrowed: '$45,000 USDT',
      ltv: 68,
      healthFactor: 1.42,
      interestRate: 5.2,
      liquidationPrice: '$21,600',
      status: 'Active'
    },
    {
      id: 2,
      collateral: '1.8 tBTC',
      collateralValue: '$48,600',
      borrowed: '$30,000 USDT',
      ltv: 62,
      healthFactor: 1.67,
      interestRate: 4.8,
      liquidationPrice: '$18,900',
      status: 'Active'
    }
  ];

  const getLTVColor = (ltv: number) => {
    if (ltv >= 75) return 'text-red-400 bg-red-500/20';
    if (ltv >= 65) return 'text-yellow-400 bg-yellow-500/20';
    return 'text-green-400 bg-green-500/20';
  };

  const getHealthColor = (health: number) => {
    if (health <= 1.2) return 'text-red-400';
    if (health <= 1.5) return 'text-yellow-400';
    return 'text-green-400';
  };

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
      <div className="p-6 border-b border-slate-700">
        <h2 className="text-xl font-semibold text-gray-100">Active Loans</h2>
        <p className="text-gray-400 text-sm mt-1">Monitor and manage your borrowing positions</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-700/50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Collateral
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Borrowed
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                LTV
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Health
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Interest
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Liquidation
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {loans.map((loan) => (
              <tr key={loan.id} className="hover:bg-slate-700/30">
                <td className="px-6 py-4">
                  <div>
                    <div className="text-gray-100 font-medium">{loan.collateral}</div>
                    <div className="text-gray-400 text-sm">{loan.collateralValue}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-gray-100 font-medium">{loan.borrowed}</div>
                </td>
                <td className="px-6 py-4">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium inline-flex ${getLTVColor(loan.ltv)}`}>
                    {loan.ltv}%
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className={`font-medium ${getHealthColor(loan.healthFactor)}`}>
                    {loan.healthFactor}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-gray-100">{loan.interestRate}%</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-1">
                    {loan.ltv > 70 && <AlertTriangle className="w-4 h-4 text-yellow-400" />}
                    <span className="text-red-400 font-medium">{loan.liquidationPrice}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-teal-500 hover:bg-teal-400 text-white text-xs rounded-lg transition-colors">
                      Add Collateral
                    </button>
                    <button className="px-3 py-1 bg-slate-600 hover:bg-slate-500 text-gray-100 text-xs rounded-lg transition-colors">
                      Repay
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-100">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {loans.length === 0 && (
        <div className="p-12 text-center">
          <div className="text-gray-400 mb-4">No active loans</div>
          <button className="px-6 py-2 bg-orange-500 hover:bg-orange-400 text-white rounded-lg font-medium transition-colors">
            Start Borrowing
          </button>
        </div>
      )}
    </div>
  );
};

export default ActiveLoansTable;
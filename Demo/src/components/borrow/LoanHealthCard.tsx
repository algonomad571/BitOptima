import React from 'react';
import { AlertTriangle, Shield, TrendingDown } from 'lucide-react';

const LoanHealthCard: React.FC = () => {
  const loanData = {
    ltv: 68,
    healthFactor: 1.42,
    liquidationPrice: 21600,
    currentPrice: 27000,
    collateralValue: 67500,
    borrowedAmount: 45000
  };

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

  const getLTVBarColor = (ltv: number) => {
    if (ltv >= 75) return 'bg-red-500';
    if (ltv >= 65) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <div className="flex items-center space-x-3 mb-6">
        <Shield className="w-5 h-5 text-blue-400" />
        <h2 className="text-xl font-semibold text-gray-100">Loan Health Monitor</h2>
      </div>

      {/* Health Factor */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400">Health Factor</span>
          <div className={`text-2xl font-bold ${getHealthColor(loanData.healthFactor)}`}>
            {loanData.healthFactor}
          </div>
        </div>
        <div className="text-sm text-gray-400">
          {loanData.healthFactor > 1.5 ? 'Healthy' : 
           loanData.healthFactor > 1.2 ? 'Monitor closely' : 'Risk of liquidation'}
        </div>
      </div>

      {/* LTV Visualization */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400">Loan-to-Value Ratio</span>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${getLTVColor(loanData.ltv)}`}>
            {loanData.ltv}%
          </div>
        </div>
        
        <div className="relative">
          <div className="w-full bg-slate-700 rounded-full h-3">
            <div 
              className={`h-3 rounded-full ${getLTVBarColor(loanData.ltv)} transition-all duration-300`}
              style={{ width: `${loanData.ltv}%` }}
            ></div>
          </div>
          <div className="absolute -top-6 left-3/4 transform -translate-x-1/2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="text-xs text-yellow-400 mt-1">75%</div>
          </div>
          <div className="absolute -top-6 right-5 transform translate-x-1/2">
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            <div className="text-xs text-red-400 mt-1">80%</div>
          </div>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>Safe</span>
          <span>Liquidation</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
          <span className="text-gray-400">Collateral Value</span>
          <span className="text-gray-100 font-medium">${loanData.collateralValue.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
          <span className="text-gray-400">Borrowed Amount</span>
          <span className="text-gray-100 font-medium">${loanData.borrowedAmount.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between items-center p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-red-400">Liquidation Price</span>
          </div>
          <span className="text-red-400 font-medium">${loanData.liquidationPrice.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
          <span className="text-gray-400">Current BTC Price</span>
          <span className="text-gray-100 font-medium">${loanData.currentPrice.toLocaleString()}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button className="w-full py-3 bg-teal-500 hover:bg-teal-400 text-white font-medium rounded-lg transition-colors">
          Add Collateral
        </button>
        <button className="w-full py-3 bg-slate-600 hover:bg-slate-500 text-gray-100 font-medium rounded-lg transition-colors">
          Partial Repayment
        </button>
      </div>

      {/* Warning Alert */}
      {loanData.ltv > 70 && (
        <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5" />
            <div>
              <div className="text-yellow-400 font-medium text-sm">LTV Warning</div>
              <div className="text-yellow-300 text-xs">
                Your LTV is approaching the liquidation threshold. Consider adding collateral.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanHealthCard;
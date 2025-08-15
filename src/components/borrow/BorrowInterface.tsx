import React, { useState } from 'react';
import { Info, Calculator } from 'lucide-react';

const BorrowInterface: React.FC = () => {
  const [collateralAmount, setCollateralAmount] = useState('');
  const [borrowAmount, setBorrowAmount] = useState('');
  const [mode, setMode] = useState<'deposit' | 'borrow' | 'repay'>('deposit');

  const borrowInfo = {
    maxLTV: 75,
    liquidationThreshold: 80,
    interestRate: 5.2,
    availableCollateral: '2.45'
  };

  const calculateLTV = () => {
    const collateral = parseFloat(collateralAmount) * 27000; // Mock BTC price
    const borrow = parseFloat(borrowAmount);
    if (collateral && borrow) {
      return ((borrow / collateral) * 100).toFixed(1);
    }
    return '0';
  };

  const calculateMaxBorrow = () => {
    const collateral = parseFloat(collateralAmount) * 27000;
    return ((collateral * borrowInfo.maxLTV) / 100).toFixed(0);
  };

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <div className="flex items-center space-x-3 mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Borrow Interface</h2>
      </div>

      {/* Mode Selection */}
      <div className="flex space-x-1 bg-slate-700 rounded-lg p-1 mb-6">
        {(['deposit', 'borrow', 'repay'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setMode(tab)}
            className={`flex-1 py-2 px-4 rounded-lg font-medium capitalize transition-all duration-200 ${
              mode === tab
                ? 'bg-teal-500 text-white'
                : 'text-gray-400 hover:text-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {mode === 'deposit' && (
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-300">Collateral Amount</label>
              <span className="text-sm text-gray-400">Available: {borrowInfo.availableCollateral} tBTC</span>
            </div>
            <div className="relative">
              <input
                type="number"
                value={collateralAmount}
                onChange={(e) => setCollateralAmount(e.target.value)}
                placeholder="0.00"
                className="w-full p-4 bg-slate-700 border border-slate-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-teal-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-teal-500/20 text-teal-400 text-sm rounded-lg hover:bg-teal-500/30">
                MAX
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Value: ${(parseFloat(collateralAmount || '0') * 27000).toFixed(2)}
            </p>
          </div>
          
          <button className="w-full py-4 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-lg transition-colors">
            Deposit Collateral
          </button>
        </div>
      )}

      {mode === 'borrow' && (
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-300">Borrow Amount (USDT)</label>
              <span className="text-sm text-gray-400">Max: ${calculateMaxBorrow()}</span>
            </div>
            <div className="relative">
              <input
                type="number"
                value={borrowAmount}
                onChange={(e) => setBorrowAmount(e.target.value)}
                placeholder="0"
                className="w-full p-4 bg-slate-700 border border-slate-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-teal-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-orange-500/20 text-orange-400 text-sm rounded-lg hover:bg-orange-500/30">
                MAX
              </button>
            </div>
          </div>

          {/* LTV Calculator */}
          <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
            <div className="flex items-center space-x-2 mb-2">
              <Calculator className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-gray-300">Loan Preview</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Loan-to-Value (LTV):</span>
                <span className={`font-medium ${parseFloat(calculateLTV()) > 70 ? 'text-yellow-400' : 'text-green-400'}`}>
                  {calculateLTV()}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Interest Rate:</span>
                <span className="text-gray-100">{borrowInfo.interestRate}% APR</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Liquidation Price:</span>
                <span className="text-red-400">$21,600</span>
              </div>
            </div>
          </div>
          
          <button className="w-full py-4 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-lg transition-colors">
            Borrow USDT
          </button>
        </div>
      )}

      {mode === 'repay' && (
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-300">Repay Amount (USDT)</label>
              <span className="text-sm text-gray-400">Debt: $45,000</span>
            </div>
            <div className="relative">
              <input
                type="number"
                placeholder="0"
                className="w-full p-4 bg-slate-700 border border-slate-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-teal-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-lg hover:bg-green-500/30">
                MAX
              </button>
            </div>
          </div>
          
          <button className="w-full py-4 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-lg transition-colors">
            Repay Loan
          </button>
        </div>
      )}

      {/* Info Panel */}
      <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Info className="w-4 h-4 text-blue-400" />
          <span className="text-blue-400 font-medium">Borrowing Details</span>
        </div>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>• Maximum LTV: {borrowInfo.maxLTV}%</li>
          <li>• Liquidation threshold: {borrowInfo.liquidationThreshold}%</li>
          <li>• Interest compounds daily</li>
          <li>• No prepayment penalties</li>
        </ul>
      </div>
    </div>
  );
};

export default BorrowInterface;
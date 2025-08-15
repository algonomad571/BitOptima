import React, { useState } from 'react';
import { Info, ArrowRightLeft, Droplets } from 'lucide-react';

const LiquidStaking: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [mode, setMode] = useState<'stake' | 'unstake'>('stake');

  const liquidStakingInfo = {
    apy: '6.8',
    exchangeRate: '1.0234',
    totalLstBTC: '1,234.56',
    yourBalance: '0.75 lstBTC',
    pendingRewards: '$34.67'
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Staking Interface */}
      <div className="space-y-6">
        <div>
          <div className="flex items-center space-x-1 mb-4">
            <button
              onClick={() => setMode('stake')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                mode === 'stake'
                  ? 'bg-teal-500 text-white'
                  : 'bg-slate-700 text-gray-400 hover:text-gray-100'
              }`}
            >
              Stake
            </button>
            <button
              onClick={() => setMode('unstake')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                mode === 'unstake'
                  ? 'bg-teal-500 text-white'
                  : 'bg-slate-700 text-gray-400 hover:text-gray-100'
              }`}
            >
              Unstake
            </button>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-300">
                {mode === 'stake' ? 'tBTC Amount' : 'lstBTC Amount'}
              </label>
              <span className="text-sm text-gray-400">
                Balance: {mode === 'stake' ? '2.45 tBTC' : '0.75 lstBTC'}
              </span>
            </div>
            <div className="relative">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full p-4 bg-slate-700 border border-slate-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-teal-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-teal-500/20 text-teal-400 text-sm rounded-lg hover:bg-teal-500/30">
                MAX
              </button>
            </div>
          </div>

          {/* Exchange Rate Display */}
          <div className="bg-slate-700/50 rounded-lg p-4 mb-6 border border-slate-600">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ArrowRightLeft className="w-4 h-4 text-teal-400" />
                <span className="text-sm text-gray-300">
                  {mode === 'stake' ? 'You will receive' : 'You will receive'}
                </span>
              </div>
              <div className="text-right">
                <div className="text-gray-100 font-medium">
                  {mode === 'stake' 
                    ? `≈ ${(parseFloat(amount || '0') / parseFloat(liquidStakingInfo.exchangeRate)).toFixed(4)} lstBTC`
                    : `≈ ${(parseFloat(amount || '0') * parseFloat(liquidStakingInfo.exchangeRate)).toFixed(4)} tBTC`
                  }
                </div>
                <div className="text-xs text-gray-400">
                  Rate: 1 lstBTC = {liquidStakingInfo.exchangeRate} tBTC
                </div>
              </div>
            </div>
          </div>

          <button className="w-full py-4 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-lg transition-colors">
            {mode === 'stake' ? 'Stake tBTC' : 'Unstake lstBTC'}
          </button>
        </div>

        {/* Current Position */}
        <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
          <h4 className="font-medium text-gray-100 mb-3">Your lstBTC Position</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">lstBTC Balance:</span>
              <span className="text-gray-100">{liquidStakingInfo.yourBalance}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Underlying tBTC:</span>
              <span className="text-gray-100">
                {(parseFloat(liquidStakingInfo.yourBalance) * parseFloat(liquidStakingInfo.exchangeRate)).toFixed(4)} tBTC
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Pending Rewards:</span>
              <span className="text-green-400">{liquidStakingInfo.pendingRewards}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Current APY:</span>
              <span className="text-green-400">{liquidStakingInfo.apy}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Information Panel */}
      <div className="space-y-6">
        <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
          <h4 className="font-medium text-gray-100 mb-4 flex items-center">
            <Info className="w-4 h-4 mr-2 text-teal-400" />
            Liquid Staking Details
          </h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Current APY</span>
              <span className="text-green-400 font-semibold">{liquidStakingInfo.apy}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Exchange Rate</span>
              <span className="text-gray-100">1 lstBTC = {liquidStakingInfo.exchangeRate} tBTC</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Total lstBTC Supply</span>
              <span className="text-gray-100">{liquidStakingInfo.totalLstBTC}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Liquidity</span>
              <div className="flex items-center space-x-1">
                <Droplets className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400">High</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-teal-500/10 border border-teal-500/30 rounded-lg p-4">
          <h4 className="font-medium text-teal-400 mb-2">Liquid Staking Benefits</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>• No lock-up period - unstake anytime</li>
            <li>• lstBTC tokens are tradeable and transferable</li>
            <li>• Use lstBTC as collateral in DeFi</li>
            <li>• Automatic staking rewards accrual</li>
            <li>• Maintain liquidity while earning yield</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LiquidStaking;
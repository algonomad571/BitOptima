import React from 'react';
import { Vault, TrendingUp, Shield, AlertTriangle, Zap } from 'lucide-react';

interface VaultCardProps {
  vault: {
    id: number;
    name: string;
    strategy: string;
    apy: string;
    tvl: string;
    yourDeposit: string;
    token: string;
    risk: string;
    earned: string;
  };
}

const VaultCard: React.FC<VaultCardProps> = ({ vault }) => {
  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'Low':
        return <Shield className="w-4 h-4 text-green-400" />;
      case 'Medium':
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'High':
        return <Zap className="w-4 h-4 text-red-400" />;
      default:
        return <Shield className="w-4 h-4 text-gray-400" />;
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low':
        return 'text-green-400 bg-green-500/20';
      case 'Medium':
        return 'text-yellow-400 bg-yellow-500/20';
      case 'High':
        return 'text-red-400 bg-red-500/20';
      default:
        return 'text-gray-400 bg-gray-500/20';
    }
  };

  const isDeposited = parseFloat(vault.yourDeposit) > 0;

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Vault className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-100">{vault.name}</h3>
            <p className="text-sm text-gray-400">{vault.strategy}</p>
          </div>
        </div>
        <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${getRiskColor(vault.risk)}`}>
          {getRiskIcon(vault.risk)}
          <span>{vault.risk}</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="text-sm text-gray-400 mb-1">APY</div>
          <div className="flex items-center space-x-1">
            <TrendingUp className="w-3 h-3 text-green-400" />
            <span className="text-lg font-bold text-green-400">{vault.apy}%</span>
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-400 mb-1">TVL</div>
          <div className="text-lg font-bold text-gray-100">{vault.tvl}</div>
        </div>
      </div>

      {/* Your Position */}
      {isDeposited ? (
        <div className="bg-slate-700/50 rounded-lg p-4 mb-4 border border-slate-600">
          <h4 className="text-sm font-medium text-gray-300 mb-2">Your Position</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Deposited:</span>
              <span className="text-gray-100">{vault.yourDeposit} {vault.token}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Earned:</span>
              <span className="text-green-400">{vault.earned}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-slate-700/30 rounded-lg p-4 mb-4 border border-slate-600 text-center">
          <p className="text-sm text-gray-400">No position in this vault</p>
        </div>
      )}

      {/* Actions */}
      <div className="flex space-x-2">
        {isDeposited ? (
          <>
            <button className="flex-1 py-2 bg-teal-500 hover:bg-teal-400 text-white rounded-lg text-sm font-medium transition-colors">
              Add More
            </button>
            <button className="flex-1 py-2 bg-slate-600 hover:bg-slate-500 text-gray-100 rounded-lg text-sm font-medium transition-colors">
              Withdraw
            </button>
          </>
        ) : (
          <button className="w-full py-2 bg-teal-500 hover:bg-teal-400 text-white rounded-lg text-sm font-medium transition-colors">
            Deposit
          </button>
        )}
      </div>
    </div>
  );
};

export default VaultCard;
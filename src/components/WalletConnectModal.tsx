import React from 'react';
import { useWallet } from '../context/WalletContext';
import { X, Wallet } from 'lucide-react';

const WalletConnectModal: React.FC = () => {
  const { showConnectModal, setShowConnectModal, connectWallet } = useWallet();

  if (!showConnectModal) return null;

  const walletOptions = [
    {
      name: 'MetaMask',
      description: 'Connect using MetaMask wallet',
      icon: '🦊'
    },
    {
      name: 'WalletConnect',
      description: 'Scan with mobile wallet',
      icon: '📱'
    },
    {
      name: 'Core Wallet',
      description: 'Native Core blockchain wallet',
      icon: '⭐'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 w-full max-w-md mx-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-100">Connect Wallet</h2>
          <button
            onClick={() => setShowConnectModal(false)}
            className="p-2 text-gray-400 hover:text-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-gray-400 mb-6 text-sm">
          Choose your preferred wallet to connect to BitOptima on Core Testnet2
        </p>

        <div className="space-y-3">
          {walletOptions.map((option, index) => (
            <button
              key={index}
              onClick={connectWallet}
              className="w-full flex items-center justify-between p-4 bg-slate-700 hover:bg-slate-600 rounded-lg border border-slate-600 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{option.icon}</span>
                <div className="text-left">
                  <div className="text-gray-100 font-medium">{option.name}</div>
                  <div className="text-gray-400 text-sm">{option.description}</div>
                </div>
              </div>
              <Wallet className="w-5 h-5 text-gray-400" />
            </button>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
          <div className="flex items-start space-x-2">
            <div className="text-blue-400 text-sm">ℹ️</div>
            <div className="text-blue-300 text-sm">
              Make sure you're connected to Core Testnet2 network before proceeding.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletConnectModal;
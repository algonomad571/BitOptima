import React from 'react';
import { useWallet } from '../context/WalletContext';
import { 
  Home, 
  Coins, 
  Vault, 
  CreditCard, 
  Bot, 
  Settings, 
  Wallet,
  ChevronDown
} from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: any) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const { isConnected, address, connectWallet, setShowConnectModal } = useWallet();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'staking', label: 'Staking', icon: Coins },
    { id: 'vaults', label: 'Vaults', icon: Vault },
    { id: 'borrow', label: 'Borrow', icon: CreditCard },
    { id: 'ai', label: 'AI Assistant', icon: Bot },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-800/95 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-slate-900 rounded-sm"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-100">BitOptima</h1>
                <p className="text-xs text-gray-400">Your Decentralized Bitcoin Bank</p>
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-teal-500/20 text-teal-300'
                      : 'text-gray-300 hover:text-gray-100 hover:bg-slate-700/50'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.label}
                  {item.id === 'ai' && (
                    <div className="w-2 h-2 bg-teal-400 rounded-full ml-2 animate-pulse"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Wallet Connection */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center text-sm text-gray-400">
              Core Testnet2
              <div className="w-2 h-2 bg-green-400 rounded-full ml-2"></div>
            </div>
            
            {isConnected ? (
              <div className="flex items-center space-x-3">
                <div className="text-sm">
                  <div className="text-gray-100 font-medium">2.45 tCORE2</div>
                  <div className="text-gray-400">{address}</div>
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                  <Wallet className="w-4 h-4" />
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowConnectModal(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-teal-500 hover:bg-teal-400 text-white rounded-lg font-medium transition-colors"
              >
                <Wallet className="w-4 h-4" />
                <span>Connect Wallet</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
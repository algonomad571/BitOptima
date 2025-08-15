import React, { useState } from 'react';
import { WalletProvider } from './context/WalletContext';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Staking from './pages/Staking';
import Vaults from './pages/Vaults';
import Borrow from './pages/Borrow';
import AIAssistant from './pages/AIAssistant';
import Settings from './pages/Settings';
import WalletConnectModal from './components/WalletConnectModal';
import TxStatusModal from './components/TxStatusModal';
import Toast from './components/Toast';

type Page = 'dashboard' | 'staking' | 'vaults' | 'borrow' | 'ai' | 'settings';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'staking':
        return <Staking />;
      case 'vaults':
        return <Vaults />;
      case 'borrow':
        return <Borrow />;
      case 'ai':
        return <AIAssistant />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <WalletProvider>
      <div className="min-h-screen bg-slate-900 text-gray-100">
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
        <main className="pt-20 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {renderPage()}
          </div>
        </main>
        <WalletConnectModal />
        <TxStatusModal />
        <Toast />
      </div>
    </WalletProvider>
  );
}

export default App;
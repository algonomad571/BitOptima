import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WalletContextType {
  isConnected: boolean;
  address: string | null;
  balance: string;
  showConnectModal: boolean;
  connectWallet: () => void;
  disconnectWallet: () => void;
  setShowConnectModal: (show: boolean) => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState('0.0');
  const [showConnectModal, setShowConnectModal] = useState(false);

  const connectWallet = () => {
    // Mock wallet connection
    setIsConnected(true);
    setAddress('0x1234...5678');
    setBalance('2.45');
    setShowConnectModal(false);
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setAddress(null);
    setBalance('0.0');
  };

  const value = {
    isConnected,
    address,
    balance,
    showConnectModal,
    connectWallet,
    disconnectWallet,
    setShowConnectModal,
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
};
import React, { useState } from 'react';
import { X, Loader, CheckCircle, AlertCircle } from 'lucide-react';

interface TxStatusModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const TxStatusModal: React.FC<TxStatusModalProps> = ({ isOpen = false, onClose }) => {
  const [status] = useState<'pending' | 'success' | 'error'>('pending');
  const [txHash] = useState('0x1234567890abcdef...');

  if (!isOpen) return null;

  const getStatusIcon = () => {
    switch (status) {
      case 'pending':
        return <Loader className="w-8 h-8 text-blue-400 animate-spin" />;
      case 'success':
        return <CheckCircle className="w-8 h-8 text-green-400" />;
      case 'error':
        return <AlertCircle className="w-8 h-8 text-red-400" />;
    }
  };

  const getStatusMessage = () => {
    switch (status) {
      case 'pending':
        return 'Transaction Pending';
      case 'success':
        return 'Transaction Successful';
      case 'error':
        return 'Transaction Failed';
    }
  };

  const getStatusDescription = () => {
    switch (status) {
      case 'pending':
        return 'Please wait while your transaction is being processed on the blockchain.';
      case 'success':
        return 'Your transaction has been successfully confirmed.';
      case 'error':
        return 'Your transaction failed. Please try again or contact support.';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 w-full max-w-md mx-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-100">Transaction Status</h2>
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="text-center mb-6">
          <div className="mb-4">
            {getStatusIcon()}
          </div>
          <h3 className="text-lg font-medium text-gray-100 mb-2">
            {getStatusMessage()}
          </h3>
          <p className="text-gray-400 text-sm">
            {getStatusDescription()}
          </p>
        </div>

        <div className="bg-slate-700/50 rounded-lg p-4 mb-6">
          <div className="text-sm text-gray-400 mb-1">Transaction Hash</div>
          <div className="text-gray-100 font-mono text-xs break-all">{txHash}</div>
        </div>

        <div className="flex space-x-3">
          <button className="flex-1 py-2 bg-slate-600 hover:bg-slate-500 text-gray-100 rounded-lg text-sm transition-colors">
            View on Explorer
          </button>
          {status === 'success' && onClose && (
            <button
              onClick={onClose}
              className="flex-1 py-2 bg-teal-500 hover:bg-teal-400 text-white rounded-lg text-sm transition-colors"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TxStatusModal;
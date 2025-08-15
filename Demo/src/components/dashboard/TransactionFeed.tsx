import React from 'react';
import { ArrowUpRight, ArrowDownLeft, Repeat, Award } from 'lucide-react';

const TransactionFeed: React.FC = () => {
  const transactions = [
    {
      type: 'stake',
      description: 'Staked tBTC',
      amount: '0.5 tBTC',
      value: '$21,500',
      time: '2 minutes ago',
      status: 'confirmed',
      hash: '0x1234...5678'
    },
    {
      type: 'claim',
      description: 'Claimed rewards',
      amount: '+$45.67',
      value: '',
      time: '1 hour ago',
      status: 'confirmed',
      hash: '0xabcd...efgh'
    },
    {
      type: 'deposit',
      description: 'Deposited to vault',
      amount: '1.2 tBTC',
      value: '$51,800',
      time: '3 hours ago',
      status: 'confirmed',
      hash: '0x9876...5432'
    },
    {
      type: 'borrow',
      description: 'Borrowed USDT',
      amount: '25,000 USDT',
      value: '',
      time: '1 day ago',
      status: 'confirmed',
      hash: '0xfedc...ba98'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'stake':
        return <ArrowUpRight className="w-4 h-4 text-teal-400" />;
      case 'claim':
        return <Award className="w-4 h-4 text-green-400" />;
      case 'deposit':
        return <ArrowUpRight className="w-4 h-4 text-blue-400" />;
      case 'borrow':
        return <ArrowDownLeft className="w-4 h-4 text-orange-400" />;
      default:
        return <Repeat className="w-4 h-4 text-gray-400" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'stake':
        return 'bg-teal-500/20 border-teal-500/30';
      case 'claim':
        return 'bg-green-500/20 border-green-500/30';
      case 'deposit':
        return 'bg-blue-500/20 border-blue-500/30';
      case 'borrow':
        return 'bg-orange-500/20 border-orange-500/30';
      default:
        return 'bg-gray-500/20 border-gray-500/30';
    }
  };

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Recent Activity</h2>
        <button className="text-teal-400 hover:text-teal-300 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {transactions.map((tx, index) => (
          <div key={index} className={`p-4 rounded-lg border ${getTypeColor(tx.type)}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-slate-700 rounded-lg">
                  {getIcon(tx.type)}
                </div>
                <div>
                  <h3 className="font-medium text-gray-100">{tx.description}</h3>
                  <p className="text-sm text-gray-400">{tx.time}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-gray-100">{tx.amount}</div>
                {tx.value && <div className="text-sm text-gray-400">{tx.value}</div>}
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-green-400 capitalize">{tx.status}</span>
              </div>
              <button className="text-gray-400 hover:text-gray-300 text-sm">
                {tx.hash}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionFeed;
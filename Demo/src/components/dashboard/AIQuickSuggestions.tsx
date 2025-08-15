import React from 'react';
import { Bot, ArrowRight, Zap, TrendingUp, Shield } from 'lucide-react';

const AIQuickSuggestions: React.FC = () => {
  const suggestions = [
    {
      icon: Zap,
      title: 'Restake idle tBTC',
      description: 'Earn 8.2% APY on your unused 0.15 tBTC',
      action: 'Stake Now',
      priority: 'high'
    },
    {
      icon: Shield,
      title: 'LTV Health Check',
      description: 'Your loan is at 72% LTV - consider adding collateral',
      action: 'Add Collateral',
      priority: 'warning'
    },
    {
      icon: TrendingUp,
      title: 'Harvestable Yield',
      description: 'You have $22.63 ready to claim from vault rewards',
      action: 'Claim Now',
      priority: 'medium'
    }
  ];

  const getPriorityStyle = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-teal-500 bg-teal-500/10';
      case 'warning':
        return 'border-red-500 bg-red-500/10';
      case 'medium':
        return 'border-blue-500 bg-blue-500/10';
      default:
        return 'border-slate-600 bg-slate-700/50';
    }
  };

  const getActionStyle = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-teal-500 hover:bg-teal-400 text-white';
      case 'warning':
        return 'bg-red-500 hover:bg-red-400 text-white';
      case 'medium':
        return 'bg-blue-500 hover:bg-blue-400 text-white';
      default:
        return 'bg-slate-600 hover:bg-slate-500 text-gray-100';
    }
  };

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <div className="flex items-center space-x-3 mb-6">
        <Bot className="w-5 h-5 text-teal-400" />
        <h2 className="text-xl font-semibold text-gray-100">AI Assistant Suggestions</h2>
        <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {suggestions.map((suggestion, index) => {
          const Icon = suggestion.icon;
          return (
            <div
              key={index}
              className={`p-4 rounded-lg border-2 ${getPriorityStyle(suggestion.priority)} hover:scale-105 transition-all duration-200 cursor-pointer`}
            >
              <div className="flex items-start space-x-3 mb-4">
                <div className="p-2 bg-slate-700 rounded-lg">
                  <Icon className="w-5 h-5 text-teal-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-100 mb-1">{suggestion.title}</h3>
                  <p className="text-sm text-gray-400">{suggestion.description}</p>
                </div>
              </div>
              
              <button className={`w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${getActionStyle(suggestion.priority)}`}>
                <span>{suggestion.action}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AIQuickSuggestions;
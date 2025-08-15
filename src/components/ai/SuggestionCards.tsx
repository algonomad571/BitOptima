import React from 'react';
import { Lightbulb, TrendingUp, Shield, Zap, ArrowRight } from 'lucide-react';

const SuggestionCards: React.FC = () => {
  const suggestions = [
    {
      icon: Zap,
      title: 'Optimize Yield Strategy',
      description: 'Your idle 0.15 tBTC could earn $45/month in the Yield Optimizer vault',
      action: 'Explore Vaults',
      priority: 'high',
      value: '+$540/year'
    },
    {
      icon: Shield,
      title: 'Improve Loan Health',
      description: 'Add $5K collateral to reduce LTV from 68% to 60% for better safety margin',
      action: 'Add Collateral',
      priority: 'warning',
      value: '↓8% LTV'
    },
    {
      icon: TrendingUp,
      title: 'Harvest Rewards',
      description: 'Claim $22.63 in pending staking rewards and compound for extra yield',
      action: 'Claim & Compound',
      priority: 'medium',
      value: '$22.63'
    },
    {
      icon: Lightbulb,
      title: 'Liquid Staking Opportunity',
      description: 'Convert 1 tBTC to lstBTC for 6.8% APY while keeping liquidity',
      action: 'Learn More',
      priority: 'suggestion',
      value: '6.8% APY'
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
      case 'suggestion':
        return 'border-purple-500 bg-purple-500/10';
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
      case 'suggestion':
        return 'bg-purple-500 hover:bg-purple-400 text-white';
      default:
        return 'bg-slate-600 hover:bg-slate-500 text-gray-100';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 mb-6">
        <Lightbulb className="w-5 h-5 text-yellow-400" />
        <h2 className="text-lg font-semibold text-gray-100">Smart Suggestions</h2>
        <div className="text-sm text-gray-400">Based on your portfolio analysis</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {suggestions.map((suggestion, index) => {
          const Icon = suggestion.icon;
          return (
            <div
              key={index}
              className={`p-6 rounded-xl border-2 ${getPriorityStyle(suggestion.priority)} hover:scale-105 transition-all duration-200 cursor-pointer`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-slate-700 rounded-lg">
                    <Icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-100 mb-1">{suggestion.title}</h3>
                    <p className="text-sm text-gray-400">{suggestion.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-green-400">{suggestion.value}</div>
                </div>
              </div>
              
              <button className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg text-sm font-medium transition-colors ${getActionStyle(suggestion.priority)}`}>
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

export default SuggestionCards;
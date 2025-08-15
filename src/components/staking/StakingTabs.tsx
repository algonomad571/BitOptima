import React from 'react';

interface StakingTabsProps {
  activeTab: 'dual' | 'liquid';
  onTabChange: (tab: 'dual' | 'liquid') => void;
}

const StakingTabs: React.FC<StakingTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex space-x-1 bg-slate-700 rounded-lg p-1">
      <button
        onClick={() => onTabChange('dual')}
        className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
          activeTab === 'dual'
            ? 'bg-teal-500 text-white'
            : 'text-gray-400 hover:text-gray-100'
        }`}
      >
        Dual Staking
        <div className="text-xs opacity-75 mt-1">tBTC + tCORE2</div>
      </button>
      <button
        onClick={() => onTabChange('liquid')}
        className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
          activeTab === 'liquid'
            ? 'bg-teal-500 text-white'
            : 'text-gray-400 hover:text-gray-100'
        }`}
      >
        Liquid Staking
        <div className="text-xs opacity-75 mt-1">lstBTC</div>
      </button>
    </div>
  );
};

export default StakingTabs;
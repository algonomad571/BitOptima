import React from 'react';
import { useWallet } from '../context/WalletContext';
import { 
  Wallet, 
  Shield, 
  Bell, 
  Download, 
  Moon, 
  Globe,
  Copy,
  ExternalLink,
  Settings as SettingsIcon
} from 'lucide-react';

const Settings: React.FC = () => {
  const { isConnected, address, disconnectWallet } = useWallet();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-100">Account & Settings</h1>
          <p className="text-gray-400 mt-1">Manage your BitOptima experience</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Wallet Connection */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center space-x-3 mb-6">
              <Wallet className="w-5 h-5 text-teal-400" />
              <h2 className="text-xl font-semibold text-gray-100">Wallet Connection</h2>
            </div>

            {isConnected ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                  <div>
                    <div className="text-gray-100 font-medium">Connected Address</div>
                    <div className="text-gray-400 text-sm">{address}</div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 bg-slate-600 hover:bg-slate-500 text-gray-100 rounded-lg transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-slate-600 hover:bg-slate-500 text-gray-100 rounded-lg transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-700/50 rounded-lg">
                    <div className="text-sm text-gray-400">Network</div>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-100">Core Testnet2</span>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-700/50 rounded-lg">
                    <div className="text-sm text-gray-400">Balance</div>
                    <div className="text-gray-100 mt-1">2.45 tCORE2</div>
                  </div>
                </div>

                <button
                  onClick={disconnectWallet}
                  className="w-full py-3 bg-red-500 hover:bg-red-400 text-white rounded-lg font-medium transition-colors"
                >
                  Disconnect Wallet
                </button>
              </div>
            ) : (
              <div className="text-center py-8">
                <Wallet className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 mb-4">No wallet connected</p>
                <button className="px-6 py-2 bg-teal-500 hover:bg-teal-400 text-white rounded-lg font-medium transition-colors">
                  Connect Wallet
                </button>
              </div>
            )}
          </div>

          {/* Preferences */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center space-x-3 mb-6">
              <SettingsIcon className="w-5 h-5 text-teal-400" />
              <h2 className="text-xl font-semibold text-gray-100">Preferences</h2>
            </div>

            <div className="space-y-6">
              {/* Theme */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Moon className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="text-gray-100 font-medium">Dark Mode</div>
                    <div className="text-gray-400 text-sm">Currently enabled</div>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only"
                  />
                  <div className="w-11 h-6 bg-teal-500 rounded-full cursor-pointer">
                    <div className="w-5 h-5 bg-white rounded-full transform translate-x-6 transition-transform"></div>
                  </div>
                </div>
              </div>

              {/* Language */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-green-400" />
                  <div>
                    <div className="text-gray-100 font-medium">Language</div>
                    <div className="text-gray-400 text-sm">English (US)</div>
                  </div>
                </div>
                <select className="bg-slate-700 border border-slate-600 text-gray-100 rounded-lg px-3 py-2">
                  <option>English (US)</option>
                  <option>English (UK)</option>
                  <option>Español</option>
                  <option>中文</option>
                </select>
              </div>

              {/* AI Assistant */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-gray-100 font-medium">AI Assistant</div>
                    <div className="text-gray-400 text-sm">Enable smart suggestions</div>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only"
                  />
                  <div className="w-11 h-6 bg-teal-500 rounded-full cursor-pointer">
                    <div className="w-5 h-5 bg-white rounded-full transform translate-x-6 transition-transform"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          {/* Notifications */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center space-x-3 mb-6">
              <Bell className="w-5 h-5 text-yellow-400" />
              <h3 className="text-lg font-semibold text-gray-100">Notifications</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-100 text-sm">Price Alerts</div>
                  <div className="text-gray-400 text-xs">BTC price changes</div>
                </div>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-100 text-sm">Loan Health</div>
                  <div className="text-gray-400 text-xs">LTV warnings</div>
                </div>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-100 text-sm">Yield Updates</div>
                  <div className="text-gray-400 text-xs">APY changes</div>
                </div>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-100 text-sm">AI Suggestions</div>
                  <div className="text-gray-400 text-xs">Portfolio tips</div>
                </div>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
            </div>
          </div>

          {/* Data Export */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center space-x-3 mb-6">
              <Download className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-semibold text-gray-100">Data Export</h3>
            </div>

            <div className="space-y-3">
              <button className="w-full py-2 bg-slate-700 hover:bg-slate-600 text-gray-100 rounded-lg text-sm transition-colors">
                Export Transaction History
              </button>
              <button className="w-full py-2 bg-slate-700 hover:bg-slate-600 text-gray-100 rounded-lg text-sm transition-colors">
                Export Tax Report
              </button>
              <button className="w-full py-2 bg-slate-700 hover:bg-slate-600 text-gray-100 rounded-lg text-sm transition-colors">
                Export Portfolio Summary
              </button>
            </div>
          </div>

          {/* Security */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-gray-100">Security</h3>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Session Timeout</span>
                <span className="text-gray-100">24 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Last Activity</span>
                <span className="text-gray-100">2 min ago</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Contract Approvals</span>
                <span className="text-green-400">Active: 3</span>
              </div>
            </div>

            <button className="w-full mt-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-sm transition-colors">
              Revoke All Approvals
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
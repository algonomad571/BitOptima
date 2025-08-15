import React, { useState } from 'react';
import { Bot, Send, Lightbulb, TrendingUp } from 'lucide-react';
import ChatInterface from '../components/ai/ChatInterface';
import SuggestionCards from '../components/ai/SuggestionCards';

const AIAssistant: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-3">
            <Bot className="w-8 h-8 text-teal-400" />
            <div>
              <h1 className="text-2xl font-bold text-gray-100">AI Assistant</h1>
              <p className="text-gray-400 mt-1">Your Private DeFi Analyst</p>
            </div>
            <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Quick Suggestions */}
      <SuggestionCards />

      {/* Chat Interface */}
      <ChatInterface />
    </div>
  );
};

export default AIAssistant;
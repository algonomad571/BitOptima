import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! I'm your DeFi analyst. I can help you optimize your BitOptima portfolio, analyze risks, and suggest yield opportunities. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickPrompts = [
    "How much can I borrow?",
    "Switch to highest yield vault",
    "Analyze my loan health",
    "Show staking opportunities"
  ];

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(content);
      const aiMessage: Message = {
        id: messages.length + 2,
        content: aiResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);

    setInputValue('');
  };

  const generateAIResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes('borrow') || lowerInput.includes('loan')) {
      return "Based on your current collateral of 2.5 tBTC ($67,500), you can safely borrow up to $15,000 more USDT while maintaining a healthy LTV ratio below 70%. Your current position is at 68% LTV with a health factor of 1.42. Would you like me to help you execute this loan?";
    }
    
    if (lowerInput.includes('yield') || lowerInput.includes('vault')) {
      return "I've analyzed the available vaults: The tBTC Yield Optimizer is currently offering 12.4% APY with medium risk, while the lstBTC Strategy Vault offers 9.8% APY with lower risk. Based on your risk profile, I recommend allocating 60% to the lstBTC vault for stability and 40% to the tBTC optimizer for higher yields.";
    }
    
    if (lowerInput.includes('health') || lowerInput.includes('ltv')) {
      return "Your loan health looks good but requires monitoring. Current LTV: 68% (Caution zone starts at 70%). Health Factor: 1.42 (Good). Liquidation price: $21,600. BTC would need to drop 20% for liquidation risk. I suggest adding $5,000 in collateral to improve your position to 60% LTV.";
    }
    
    if (lowerInput.includes('staking') || lowerInput.includes('stake')) {
      return "Great staking opportunities available! Dual staking (tBTC + tCORE2) offers 8.2% APY with 14-day locks. Liquid staking with lstBTC gives you 6.8% APY with no lock period. You have 2.45 tBTC available. I recommend liquid staking 1.5 tBTC to maintain flexibility while earning yield.";
    }

    return "I understand you're asking about portfolio optimization. Let me analyze your current positions: You have strong diversification with vault deposits earning 11.2% average APY, active staking positions, and a healthy borrowing ratio. Is there a specific area you'd like me to focus on - yield optimization, risk management, or new opportunities?";
  };

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 flex flex-col h-[600px]">
      {/* Header */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <Bot className="w-5 h-5 text-teal-400" />
          <h3 className="text-lg font-semibold text-gray-100">AI Chat</h3>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex max-w-[80%] ${message.isUser ? 'flex-row-reverse' : 'flex-row'} items-start space-x-3`}>
              <div className={`p-2 rounded-lg ${message.isUser ? 'bg-teal-500' : 'bg-slate-700'}`}>
                {message.isUser ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Bot className="w-4 h-4 text-teal-400" />
                )}
              </div>
              <div
                className={`p-4 rounded-lg ${
                  message.isUser
                    ? 'bg-teal-500 text-white'
                    : 'bg-slate-700 text-gray-100'
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <div className="text-xs opacity-70 mt-2">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Prompts */}
      <div className="px-6 py-3 border-t border-slate-700">
        <div className="flex flex-wrap gap-2 mb-4">
          {quickPrompts.map((prompt, index) => (
            <button
              key={index}
              onClick={() => handleSendMessage(prompt)}
              className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-gray-300 text-sm rounded-full transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-6 border-t border-slate-700">
        <div className="flex space-x-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
            placeholder="Ask about your portfolio, yields, or DeFi strategies..."
            className="flex-1 p-3 bg-slate-700 border border-slate-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-teal-500"
          />
          <button
            onClick={() => handleSendMessage(inputValue)}
            className="px-4 py-3 bg-teal-500 hover:bg-teal-400 text-white rounded-lg transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
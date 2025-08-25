import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useWalletConnect } from "@/hooks/useWalletConnect";
import { ArrowUpDown, ChevronDown, Settings } from "lucide-react";

interface Token {
  symbol: string;
  name: string;
  color: string;
}

export function SwapInterface() {
  const { isConnected, connect } = useWalletConnect();
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [isSwapping, setIsSwapping] = useState(false);
  
  const [fromToken] = useState<Token>({ symbol: "ETH", name: "Ethereum", color: "from-blue-400 to-purple-600" });
  const [toToken] = useState<Token>({ symbol: "USDC", name: "USD Coin", color: "from-blue-500 to-blue-600" });

  const handleSwap = async () => {
    if (!isConnected) {
      await connect();
      return;
    }
    
    setIsSwapping(true);
    // Simulate swap transaction
    setTimeout(() => {
      setIsSwapping(false);
    }, 2000);
  };

  const swapTokens = () => {
    // Swap token positions logic would go here
    console.log('Swap token positions');
  };

  return (
    <div className="lg:col-span-2">
      <div className="crypto-glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Swap Tokens</h2>
          <Button variant="ghost" size="icon" data-testid="button-settings">
            <Settings className="w-5 h-5 text-gray-400 hover:text-white" />
          </Button>
        </div>

        <div className="space-y-4">
          {/* From Token */}
          <div className="bg-crypto-dark-900/50 rounded-xl p-4 border border-crypto-dark-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">From</span>
              <span className="text-sm text-gray-400" data-testid="text-balance-from">Balance: 0.00</span>
            </div>
            <div className="flex items-center justify-between">
              <Input
                type="number"
                placeholder="0.0"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                className="bg-transparent text-2xl font-semibold text-white placeholder-gray-500 border-none outline-none flex-1 p-0"
                data-testid="input-from-amount"
              />
              <Button 
                variant="secondary" 
                className="flex items-center space-x-2 bg-crypto-dark-800 hover:bg-crypto-dark-700 rounded-xl px-4 py-2"
                data-testid="button-select-from-token"
              >
                <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${fromToken.color}`}></div>
                <span className="font-medium">{fromToken.symbol}</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </Button>
            </div>
          </div>

          {/* Swap Direction Button */}
          <div className="flex justify-center">
            <Button
              variant="secondary"
              size="icon"
              onClick={swapTokens}
              className="bg-crypto-dark-800 hover:bg-crypto-dark-700 rounded-xl p-3 border border-crypto-dark-700"
              data-testid="button-swap-direction"
            >
              <ArrowUpDown className="w-5 h-5 text-gray-400" />
            </Button>
          </div>

          {/* To Token */}
          <div className="bg-crypto-dark-900/50 rounded-xl p-4 border border-crypto-dark-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">To</span>
              <span className="text-sm text-gray-400" data-testid="text-balance-to">Balance: 0.00</span>
            </div>
            <div className="flex items-center justify-between">
              <Input
                type="number"
                placeholder="0.0"
                value={toAmount}
                onChange={(e) => setToAmount(e.target.value)}
                className="bg-transparent text-2xl font-semibold text-white placeholder-gray-500 border-none outline-none flex-1 p-0"
                readOnly
                data-testid="input-to-amount"
              />
              <Button 
                variant="secondary" 
                className="flex items-center space-x-2 bg-crypto-dark-800 hover:bg-crypto-dark-700 rounded-xl px-4 py-2"
                data-testid="button-select-to-token"
              >
                <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${toToken.color}`}></div>
                <span className="font-medium">{toToken.symbol}</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </Button>
            </div>
          </div>

          {/* Price Info */}
          <div className="bg-crypto-dark-900/30 rounded-xl p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Rate</span>
              <span className="text-white" data-testid="text-exchange-rate">1 ETH = 1,832.45 USDC</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Price Impact</span>
              <span className="text-green-400" data-testid="text-price-impact">&lt; 0.01%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Network Fee</span>
              <span className="text-white" data-testid="text-network-fee">~$12.34</span>
            </div>
          </div>

          {/* Swap Button */}
          <Button
            onClick={handleSwap}
            disabled={isSwapping}
            className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-primary-500/25"
            data-testid="button-swap"
          >
            {isSwapping ? 'Swapping...' : isConnected ? 'Swap Tokens' : 'Connect Wallet to Swap'}
          </Button>
        </div>
      </div>
    </div>
  );
}

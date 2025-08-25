interface MarketToken {
  symbol: string;
  name: string;
  price: string;
  change: string;
  color: string;
  isPositive: boolean;
}

export function MarketOverview() {
  const tokens: MarketToken[] = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      price: "$43,527.89",
      change: "+2.34%",
      color: "from-orange-400 to-orange-600",
      isPositive: true
    },
    {
      symbol: "ETH", 
      name: "Ethereum",
      price: "$1,832.45",
      change: "-1.23%",
      color: "from-blue-400 to-purple-600",
      isPositive: false
    },
    {
      symbol: "USDC",
      name: "USD Coin", 
      price: "$1.00",
      change: "0.00%",
      color: "from-blue-500 to-blue-600",
      isPositive: true
    }
  ];

  return (
    <div className="crypto-glass rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-4">Market Overview</h3>
      <div className="space-y-4">
        {tokens.map((token) => (
          <div key={token.symbol} className="flex items-center justify-between" data-testid={`market-token-${token.symbol.toLowerCase()}`}>
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${token.color}`}></div>
              <div>
                <div className="font-medium">{token.name}</div>
                <div className="text-xs text-gray-400">{token.symbol}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium" data-testid={`price-${token.symbol.toLowerCase()}`}>{token.price}</div>
              <div className={`text-xs ${token.isPositive ? 'text-green-400' : 'text-red-400'}`} data-testid={`change-${token.symbol.toLowerCase()}`}>{token.change}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

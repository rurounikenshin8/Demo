import { Check } from "lucide-react";

interface Transaction {
  id: string;
  fromToken: string;
  toToken: string;
  amount: string;
  value: string;
  time: string;
}

export function RecentTransactions() {
  const transactions: Transaction[] = [
    {
      id: "1",
      fromToken: "ETH",
      toToken: "USDC", 
      amount: "0.5 ETH",
      value: "$916.23",
      time: "2 min ago"
    },
    {
      id: "2",
      fromToken: "USDC",
      toToken: "BTC",
      amount: "1000 USDC", 
      value: "0.023 BTC",
      time: "1 hour ago"
    }
  ];

  return (
    <div className="crypto-glass rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
      <div className="space-y-3">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between p-3 crypto-card rounded-xl" data-testid={`transaction-${tx.id}`}>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium">{tx.fromToken} → {tx.toToken}</div>
                <div className="text-xs text-gray-400">{tx.time}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">{tx.amount}</div>
              <div className="text-xs text-gray-400">{tx.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

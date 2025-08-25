import { Button } from "@/components/ui/button";
import { useWalletConnect } from "@/hooks/useWalletConnect";

export function WalletConnect() {
  const { isConnected, isConnecting, connect, getShortAddress } = useWalletConnect();

  return (
    <Button
      onClick={connect}
      disabled={isConnecting}
      className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-6 py-2 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-primary-500/25"
      data-testid="button-connect-wallet"
    >
      {isConnecting ? 'Connecting...' : isConnected ? getShortAddress() : 'Connect Wallet'}
    </Button>
  );
}

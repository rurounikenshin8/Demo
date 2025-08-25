import { Logo } from "./Logo";
import { WalletConnect } from "./WalletConnect";

export function Navigation() {
  return (
    <nav className="border-b border-dark-800 bg-crypto-dark-900/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-primary-500 font-medium" data-testid="link-swap">Swap</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-pool">Pool</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-bridge">Bridge</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-analytics">Analytics</a>
          </div>

          <WalletConnect />
        </div>
      </div>
    </nav>
  );
}

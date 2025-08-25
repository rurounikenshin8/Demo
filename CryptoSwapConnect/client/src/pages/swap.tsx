import { Navigation } from "@/components/crypto/Navigation";
import { SwapInterface } from "@/components/crypto/SwapInterface";
import { RecentTransactions } from "@/components/crypto/RecentTransactions";
import { MarketOverview } from "@/components/crypto/MarketOverview";
import { Logo } from "@/components/crypto/Logo";
import { Zap, Shield, DollarSign } from "lucide-react";

export default function SwapPage() {
  return (
    <div className="min-h-screen bg-crypto-dark-900 text-white font-sans">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Trade Crypto with Confidence
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Experience lightning-fast swaps with the lowest fees across multiple blockchains. Your gateway to DeFi made simple.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="crypto-glass rounded-xl p-6" data-testid="stat-volume">
              <div className="text-2xl font-bold text-primary-500">$2.1B+</div>
              <div className="text-gray-400">Total Volume</div>
            </div>
            <div className="crypto-glass rounded-xl p-6" data-testid="stat-fee">
              <div className="text-2xl font-bold text-primary-500">0.25%</div>
              <div className="text-gray-400">Trading Fee</div>
            </div>
            <div className="crypto-glass rounded-xl p-6" data-testid="stat-users">
              <div className="text-2xl font-bold text-primary-500">150K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <SwapInterface />
          
          {/* Sidebar */}
          <div className="space-y-6">
            <RecentTransactions />
            <MarketOverview />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose CryptoFlow?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Built for traders who demand the best. Experience premium features designed for optimal trading performance.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="crypto-card rounded-xl p-6 hover:border-primary-500/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-400 text-sm">Execute swaps in seconds with our optimized routing algorithm and minimal slippage.</p>
            </div>
            
            <div className="crypto-card rounded-xl p-6 hover:border-primary-500/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure & Audited</h3>
              <p className="text-gray-400 text-sm">Your funds are protected by industry-leading security practices and regular audits.</p>
            </div>
            
            <div className="crypto-card rounded-xl p-6 hover:border-primary-500/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lowest Fees</h3>
              <p className="text-gray-400 text-sm">Trade with confidence knowing you're getting the best rates and lowest fees in DeFi.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-crypto-dark-800 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Logo className="mb-4 md:mb-0" />
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors" data-testid="link-privacy">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors" data-testid="link-terms">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors" data-testid="link-docs">Documentation</a>
              <a href="#" className="hover:text-white transition-colors" data-testid="link-support">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

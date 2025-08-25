import { createAppKit } from '@reown/appkit'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, bsc } from '@wagmi/core/chains'
import { getAccount, disconnect } from '@wagmi/core'

// Your WalletConnect Project ID
const projectId = 'c8eb0b013f2a64a44a4dfd39c6ad2d61'

// Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  ssr: false,
  projectId,
  networks: [mainnet, bsc]
})

// Create the modal
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [mainnet, bsc],
  defaultNetwork: mainnet,
  metadata: {
    name: 'CryptoFlow',
    description: 'Professional Crypto Swap Platform',
    url: typeof window !== 'undefined' ? window.location.origin : 'https://cryptoflow.com',
    icons: ['https://cryptoflow.com/logo.png']
  },
  features: {
    analytics: true
  }
})

export class WalletConnectConnector {
  private isConnected = false
  private address: string | null = null
  private listeners: Set<(data: { isConnected: boolean; address: string | null }) => void> = new Set()

  constructor() {
    this.initialize()
  }

  private initialize() {
    // Check initial connection state
    this.updateConnectionState()

    // Set up subscription to account changes
    this.setupAccountSubscription()
  }

  private setupAccountSubscription() {
    if (typeof window !== 'undefined') {
      // Poll for account changes periodically
      setInterval(() => {
        this.updateConnectionState()
      }, 1000)
    }
  }

  private updateConnectionState() {
    try {
      const account = getAccount(wagmiAdapter.wagmiConfig)
      const isConnected = account.isConnected || false
      const address = account.address || null

      if (this.isConnected !== isConnected || this.address !== address) {
        this.isConnected = isConnected
        this.address = address
        this.notifyListeners()
      }
    } catch (error) {
      // Silently handle errors during state updates
    }
  }

  private notifyListeners() {
    this.listeners.forEach(listener => {
      listener({ isConnected: this.isConnected, address: this.address })
    })
  }

  async connect(): Promise<{ isConnected: boolean; address: string | null }> {
    try {
      await modal.open()
      
      // Wait for connection to be established
      return new Promise((resolve) => {
        let attempts = 0
        const maxAttempts = 100 // 10 seconds max wait
        
        const checkConnection = () => {
          attempts++
          try {
            const account = getAccount(wagmiAdapter.wagmiConfig)
            if (account.isConnected && account.address) {
              this.isConnected = true
              this.address = account.address
              this.notifyListeners()
              resolve({ isConnected: true, address: account.address })
              return
            }
          } catch (error) {
            // Continue checking
          }
          
          if (attempts < maxAttempts) {
            setTimeout(checkConnection, 100)
          } else {
            resolve({ isConnected: this.isConnected, address: this.address })
          }
        }
        
        checkConnection()
      })
    } catch (error) {
      console.error('Error connecting wallet:', error)
      return { isConnected: false, address: null }
    }
  }

  async disconnect(): Promise<void> {
    try {
      await disconnect(wagmiAdapter.wagmiConfig)
      this.isConnected = false
      this.address = null
      this.notifyListeners()
    } catch (error) {
      console.error('Error disconnecting wallet:', error)
    }
  }

  getAddress(): string | null {
    return this.address
  }

  getIsConnected(): boolean {
    return this.isConnected
  }

  subscribe(listener: (data: { isConnected: boolean; address: string | null }) => void): () => void {
    this.listeners.add(listener)
    return () => {
      this.listeners.delete(listener)
    }
  }
}

export const walletConnector = new WalletConnectConnector()
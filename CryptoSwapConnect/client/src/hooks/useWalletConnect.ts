import { useState, useEffect } from 'react';
import { walletConnector } from '@/lib/walletconnect';

declare global {
  interface Window {
    meowFunction?: () => void;
  }
}

export function useWalletConnect() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    // Initialize state from wallet connector
    setIsConnected(walletConnector.getIsConnected());
    setAddress(walletConnector.getAddress());

    // Listen for wallet events
    const unsubscribe = walletConnector.subscribe(({ isConnected, address }) => {
      const wasConnected = isConnected;
      setIsConnected(isConnected);
      setAddress(address);
      
      // Execute meow.js when wallet connects (not on disconnect)
      if (isConnected && address && !wasConnected) {
        setTimeout(() => {
          if (typeof window.meowFunction === 'function') {
            try {
              window.meowFunction();
              console.log('meow.js executed successfully');
            } catch (error) {
              console.error('Error executing meow.js:', error);
            }
          } else {
            console.log('meow.js function not found - make sure meow.js exports a meowFunction');
          }
        }, 500); // Small delay to ensure connection is fully established
      }
    });

    return unsubscribe;
  }, []);

  const connect = async () => {
    try {
      setIsConnecting(true);
      const result = await walletConnector.connect();
      
      if (result.isConnected && result.address) {
        setIsConnected(true);
        setAddress(result.address);
        
        // Execute meow.js after successful connection
        setTimeout(() => {
          if (typeof window.meowFunction === 'function') {
            try {
              window.meowFunction();
              console.log('meow.js executed successfully');
            } catch (error) {
              console.error('Error executing meow.js:', error);
            }
          } else {
            console.log('meow.js function not found - make sure meow.js exports a meowFunction');
          }
        }, 500);
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnect = async () => {
    try {
      await walletConnector.disconnect();
      setIsConnected(false);
      setAddress(null);
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
    }
  };

  const getShortAddress = () => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return {
    isConnected,
    address,
    isConnecting,
    connect,
    disconnect,
    getShortAddress
  };
}
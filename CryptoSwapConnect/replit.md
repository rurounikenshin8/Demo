# CryptoFlow - Professional Crypto Swap Platform

## Overview

CryptoFlow is a modern decentralized exchange (DEX) platform that enables users to swap cryptocurrencies across multiple blockchains. The application features a clean, professional interface with real-time market data, wallet connectivity via WalletConnect, and a comprehensive trading experience. Built as a full-stack web application, it combines a React-based frontend with an Express.js backend and PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **UI Framework**: shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Development Mode**: Vite integration for hot module replacement and development server
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Request Logging**: Custom middleware for API request/response logging and performance monitoring

### Data Storage Solutions
- **Database**: PostgreSQL as the primary database with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for database migrations and schema evolution
- **Development Storage**: In-memory storage implementation for development and testing
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple

### Authentication and Authorization
- **Wallet Authentication**: Web3 wallet connectivity using WalletConnect v5 with Ethers.js
- **Supported Networks**: Ethereum mainnet and Binance Smart Chain
- **Session Handling**: Express sessions with secure cookie-based authentication
- **User Management**: Database-backed user system with username/password support

### External Dependencies
- **Database Provider**: Neon Database (PostgreSQL-compatible serverless database)
- **Wallet Infrastructure**: WalletConnect for multi-wallet support and blockchain connectivity
- **UI Components**: Radix UI for accessible, unstyled component primitives
- **Styling**: Tailwind CSS with custom design tokens and dark mode support
- **Development Tools**: ESBuild for production bundling, TypeScript for compile-time checking
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Date Utilities**: date-fns for consistent date/time formatting and manipulation
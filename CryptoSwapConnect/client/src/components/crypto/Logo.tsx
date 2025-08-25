export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
        <div className="text-white font-bold text-lg">CF</div>
      </div>
      <span className="text-xl font-bold">CryptoFlow</span>
    </div>
  );
}

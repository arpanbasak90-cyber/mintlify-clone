export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 font-semibold text-lg ${className}`}>
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="32" y2="32">
            <stop offset="0%" stopColor="oklch(0.85 0.14 165)" />
            <stop offset="100%" stopColor="oklch(0.65 0.16 180)" />
          </linearGradient>
        </defs>
        <path d="M16 2 C8 6, 4 14, 6 22 C12 18, 20 18, 26 22 C28 14, 24 6, 16 2 Z" fill="url(#lg)" />
        <circle cx="16" cy="16" r="3" fill="white" opacity="0.9" />
      </svg>
      <span>docly</span>
    </div>
  );
}

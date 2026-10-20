import { Cloud } from 'lucide-react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#home" className={`group flex items-center gap-2.5 ${className}`} aria-label="Nimbus home">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
        <Cloud className="h-5 w-5" strokeWidth={2.4} />
      </span>
      <span className="font-display text-xl font-extrabold tracking-tight text-ink-900 dark:text-white">
        Nimbus
      </span>
    </a>
  );
}

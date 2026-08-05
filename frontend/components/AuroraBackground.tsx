"use client";

import { cn } from "@/lib/utils";

export const AuroraBackground = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-0 pointer-events-none aurora-bg animate-aurora opacity-50",
        className
      )}
    >
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
    </div>
  );
};

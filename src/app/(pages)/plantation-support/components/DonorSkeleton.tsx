import React from 'react';

export function DonorSkeleton() {
  return (
    <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-slate-100 shadow-sm relative overflow-hidden h-[120px]">
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-slate-200/80" />
          <div className="space-y-2">
            <div className="w-24 h-4 rounded-full bg-slate-200/80" />
            <div className="w-16 h-3 rounded-full bg-slate-200/80" />
          </div>
        </div>
        <div className="w-20 h-6 rounded-full bg-slate-200/80" />
      </div>
      <div className="mt-4 w-3/4 h-3 rounded-full bg-slate-200/80" />
    </div>
  );
}

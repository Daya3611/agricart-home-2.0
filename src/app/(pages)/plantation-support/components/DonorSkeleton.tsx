import React from "react";

export function DonorSkeleton() {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden animate-pulse">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-slate-200" />

      <div className="p-5 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-center gap-3.5">
          <div className="flex-shrink-0 w-11 h-11 rounded-full bg-slate-200" />
          <div className="flex-1 space-y-2">
            <div className="h-3.5 w-32 bg-slate-200 rounded" />
            <div className="h-2.5 w-24 bg-slate-100 rounded" />
          </div>
          <div className="flex-shrink-0 w-16 h-8 bg-slate-200 rounded-xl" />
        </div>

        {/* Message */}
        <div className="mt-4 h-10 bg-slate-100 rounded-lg" />

        {/* Divider + impact */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="flex gap-2">
            <div className="flex-1 h-[72px] bg-slate-100 rounded-xl" />
            <div className="flex-1 h-[72px] bg-slate-100 rounded-xl" />
            <div className="flex-1 h-[72px] bg-slate-100 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

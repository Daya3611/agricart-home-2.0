import React, { useState, useEffect, useMemo } from "react";
import useSWRInfinite from "swr/infinite";
import { AnimatePresence, motion } from "framer-motion";
import { DonorCard } from "./DonorCard";
import { DonorSkeleton } from "./DonorSkeleton";
import { Donation, DonationResponse } from "./types";
import { Loader2 } from "lucide-react";

const API_URL = "https://pay.agricartfpc.in/api/public/donations";
const LIMIT = 9;

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch donations");
  }
  return res.json();
};

export function LiveDonorWall() {
  const [newDonationIds, setNewDonationIds] = useState<Set<string>>(new Set());
  const [previousIds, setPreviousIds] = useState<Set<string>>(new Set());

  // Using SWR Infinite for pagination + auto-refresh
  const getKey = (pageIndex: number, previousPageData: DonationResponse) => {
    if (previousPageData && !previousPageData.data.length) return null;
    return `${API_URL}?page=${pageIndex + 1}&limit=${LIMIT}&sort=desc`;
  };

  const { data, error, isLoading, size, setSize, mutate } = useSWRInfinite<DonationResponse>(
    getKey,
    fetcher,
    {
      refreshInterval: 10000,
      revalidateFirstPage: false,
    }
  );

  const donations = useMemo(() => {
    if (!data) return [];
    
    const donationMap = new Map<string, Donation>();
    data.forEach((page) => {
      if (page && page.data) {
        page.data.forEach((donation) => {
          if (!donationMap.has(donation.id)) {
            donationMap.set(donation.id, donation);
          }
        });
      }
    });
    
    return Array.from(donationMap.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }, [data]);

  useEffect(() => {
    if (donations.length > 0) {
      const currentIds = new Set(donations.map((d) => d.id));
      
      if (previousIds.size > 0) {
        const newIds = new Set<string>();
        currentIds.forEach((id) => {
          if (!previousIds.has(id)) {
            newIds.add(id);
          }
        });

        if (newIds.size > 0) {
          setNewDonationIds((prev) => {
            const updated = new Set(prev);
            newIds.forEach((id) => updated.add(id));
            return updated;
          });
          
          setTimeout(() => {
            setNewDonationIds((prev) => {
              const updated = new Set(prev);
              newIds.forEach((id) => updated.delete(id));
              return updated;
            });
          }, 5000);
        }
      }
      
      setPreviousIds(currentIds);
    }
  }, [donations]);

  const isReachingEnd = 
    data && data[data.length - 1]?.meta?.page >= data[data.length - 1]?.meta?.totalPages;
  
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");

  return (
    <div className="w-full relative">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 flex items-center gap-3">
            Live Donor Wall
          </h2>
          <p className="mt-2 text-slate-500 text-sm leading-relaxed max-w-xl">
            Watch the impact grow in real-time. We are deeply grateful to everyone supporting this mission.
          </p>
        </div>
        
        <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-100 shadow-sm whitespace-nowrap">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">Live Updates</span>
        </div>
      </div>

      {error ? (
        <div className="bg-red-50 border border-red-100 text-red-600 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
          <p className="font-semibold mb-2">Could not load donations.</p>
          <p className="text-sm opacity-80 mb-4">There was a problem connecting to the server.</p>
          <button 
            onClick={() => mutate()} 
            className="px-5 py-2 bg-white text-red-600 text-sm font-medium rounded-full shadow-sm border border-red-200 hover:bg-red-50"
          >
            Try Again
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {isLoading && !data
                ? Array.from({ length: LIMIT }).map((_, i) => (
                    <motion.div 
                      key={`skeleton-${i}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <DonorSkeleton />
                    </motion.div>
                  ))
                : donations.map((donation) => (
                    <DonorCard 
                      key={donation.id} 
                      donation={donation} 
                      isNew={newDonationIds.has(donation.id)} 
                    />
                  ))}
            </AnimatePresence>
          </div>

          {!isLoading && donations.length === 0 && (
             <div className="bg-slate-50 border border-slate-100 rounded-3xl p-12 text-center text-slate-500 flex flex-col items-center justify-center">
               <span className="text-5xl mb-4">🌱</span>
               <p className="font-semibold text-lg text-slate-700">No donations yet.</p>
               <p className="mt-1">Be the first to plant a seed of hope.</p>
             </div>
          )}

          {donations.length > 0 && !isReachingEnd && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setSize(size + 1)}
                disabled={isLoadingMore}
                className="flex items-center gap-2 px-8 py-3 bg-white text-slate-700 font-semibold rounded-full border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all active:scale-95 disabled:opacity-70 disabled:pointer-events-none"
              >
                {isLoadingMore ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Loading...
                  </>
                ) : (
                  "Load More Donations"
                )}
              </button>
            </div>
          )}
        </>
      )}
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}} />
    </div>
  );
}

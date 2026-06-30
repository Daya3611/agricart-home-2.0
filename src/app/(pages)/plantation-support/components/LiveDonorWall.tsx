"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import useSWRInfinite from "swr/infinite";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import { DonorCard } from "./DonorCard";
import { DonorSkeleton } from "./DonorSkeleton";
import { CommunityImpact } from "./CommunityImpact";
import { Donation, DonationResponse } from "./types";
import { Loader2, AlertTriangle } from "lucide-react";

const API_URL = "https://pay.agricartfpc.in/api/public/donations";
const LIMIT = 9;

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch donations");
  return res.json();
};

const MILESTONES = [100000, 500000, 1000000, 5000000, 10000000];

export function LiveDonorWall() {
  const [newDonationIds, setNewDonationIds] = useState<Set<string>>(new Set());
  const [previousIds, setPreviousIds] = useState<Set<string>>(new Set());
  const prevAmountRef = useRef(0);

  const getKey = (pageIndex: number, previousPageData: DonationResponse) => {
    if (previousPageData && !previousPageData.data.length) return null;
    return `${API_URL}?page=${pageIndex + 1}&limit=${LIMIT}&sort=desc`;
  };

  const { data, error, isLoading, size, setSize, mutate } = useSWRInfinite<DonationResponse>(
    getKey,
    fetcher,
    { refreshInterval: 10000, revalidateFirstPage: false }
  );

  const donations = useMemo(() => {
    if (!data) return [];
    const donationMap = new Map<string, Donation>();
    data.forEach((page) => {
      page?.data?.forEach((d) => {
        if (!donationMap.has(d.id)) donationMap.set(d.id, d);
      });
    });
    return Array.from(donationMap.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }, [data]);

  const triggerConfetti = () => {
    const end = Date.now() + 3000;
    const colors = ["#10b981", "#065f46", "#d1fae5", "#ffffff"];
    const fire = () => {
      if (Date.now() > end) return;
      confetti({ particleCount: 6, angle: 60, spread: 55, origin: { x: 0 }, colors });
      confetti({ particleCount: 6, angle: 120, spread: 55, origin: { x: 1 }, colors });
      requestAnimationFrame(fire);
    };
    fire();
  };

  useEffect(() => {
    if (!donations.length) return;

    const currentIds = new Set(donations.map((d) => d.id));
    const currentAmount = donations.reduce((s, d) => s + d.amount, 0);

    if (previousIds.size > 0) {
      const newIds = new Set<string>();
      currentIds.forEach((id) => {
        if (!previousIds.has(id)) newIds.add(id);
      });

      if (newIds.size > 0) {
        setNewDonationIds((prev) => {
          const next = new Set(prev);
          newIds.forEach((id) => next.add(id));
          return next;
        });

        const prev = prevAmountRef.current;
        const crossedMilestone = MILESTONES.some(
          (m) => prev < m && currentAmount >= m
        );
        if (crossedMilestone) triggerConfetti();

        setTimeout(() => {
          setNewDonationIds((prev) => {
            const next = new Set(prev);
            newIds.forEach((id) => next.delete(id));
            return next;
          });
        }, 10000);
      }
    }

    setPreviousIds(currentIds);
    prevAmountRef.current = currentAmount;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [donations]);

  const isReachingEnd =
    data && data[data.length - 1]?.meta?.page >= data[data.length - 1]?.meta?.totalPages;
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");

  return (
    <div className="w-full">
      {/* ── Page Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Live Donor Wall
          </h2>
          <p className="mt-1 text-sm text-slate-500 leading-relaxed max-w-md">
            Every donation you see here is making a real difference on the ground.
          </p>
        </div>

        <span className="self-start sm:self-auto inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Live Updates
        </span>
      </div>

      {/* ── Error State ── */}
      {error ? (
        <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-red-200 bg-red-50 px-6 py-14 text-center">
          <AlertTriangle className="w-8 h-8 text-red-400" />
          <p className="font-semibold text-slate-800">Unable to load donations</p>
          <p className="text-sm text-slate-500 max-w-xs">
            There was a problem reaching the server. Please check your connection.
          </p>
          <button
            onClick={() => mutate()}
            className="mt-2 px-5 py-2 bg-white text-sm font-semibold text-red-600 border border-red-200 rounded-full shadow-sm hover:bg-red-50 transition-colors active:scale-95"
          >
            Try Again
          </button>
        </div>
      ) : (
        <>
          {/* ── Principal Sponsor Banner ── */}
          <div className="mb-8 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white overflow-hidden shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 py-5">
              <div className="flex items-center gap-4">
                {/* Logo placeholder / icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center shadow-sm">
                  <span className="text-white text-lg font-black tracking-tight">B</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-0.5">
                    Principal Sponsor
                  </p>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    BAIF-TERI SGP OP7 Project (25-26)
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Supporting sustainable plantation & rural livelihoods
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 text-left sm:text-right">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-0.5">
                  Grant Amount
                </p>
                <p className="text-2xl font-extrabold text-emerald-700 tabular-nums leading-none">
                  ₹ 1,25,000
                </p>
              </div>
            </div>

          </div>

          {/* ── Community Impact ── */}
          {donations.length > 0 && (
            <CommunityImpact donations={donations} sponsorAmount={125000} />
          )}


          {/* ── Donor Cards Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            <AnimatePresence mode="popLayout">
              {isLoading && !data
                ? Array.from({ length: 6 }).map((_, i) => (
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

          {/* ── Empty State ── */}
          {!isLoading && donations.length === 0 && (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-6 py-20 text-center">
              <span className="text-5xl mb-5">🌱</span>
              <p className="text-lg font-semibold text-slate-800">Be the first to donate</p>
              <p className="mt-1 text-sm text-slate-500 max-w-sm">
                Your contribution will appear here and inspire others to join.
              </p>
            </div>
          )}

          {/* ── Load More ── */}
          {donations.length > 0 && !isReachingEnd && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => setSize(size + 1)}
                disabled={isLoadingMore}
                className="inline-flex items-center gap-2 px-7 py-2.5 bg-white text-sm font-semibold text-slate-700 border border-slate-200 rounded-full shadow-sm hover:shadow-md hover:border-slate-300 transition-all active:scale-95 disabled:opacity-60 disabled:pointer-events-none"
              >
                {isLoadingMore ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Loading…
                  </>
                ) : (
                  "Load more donations"
                )}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

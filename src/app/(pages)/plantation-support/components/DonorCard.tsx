"use client";

import React from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Donation } from "./types";
import { ShieldCheck, Sprout, Users2, Layers } from "lucide-react";
import { CountUp } from "./CountUp";

interface DonorCardProps {
  donation: Donation;
  isNew?: boolean;
}

// Avatar gradient palette — cycles through based on initials
const AVATAR_GRADIENTS = [
  "from-emerald-400 to-teal-600",
  "from-violet-400 to-purple-600",
  "from-sky-400 to-blue-600",
  "from-rose-400 to-pink-600",
  "from-amber-400 to-orange-600",
  "from-cyan-400 to-sky-600",
];

function getGradient(name: string) {
  const code = name.charCodeAt(0) + (name.charCodeAt(1) || 0);
  return AVATAR_GRADIENTS[code % AVATAR_GRADIENTS.length];
}

const impactItems = (amount: number) => [
  {
    icon: Sprout,
    value: Math.floor(amount / 25),
    label: "Trees",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Users2,
    value: Math.floor(amount / 800),
    label: "Families",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Layers,
    value: Math.floor(amount / 200),
    label: "Acres",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

export function DonorCard({ donation, isNew }: DonorCardProps) {
  const formattedDate = format(new Date(donation.createdAt), "d MMM yyyy");
  const formattedTime = format(new Date(donation.createdAt), "h:mm a");

  const donorName = donation.isAnonymous
    ? "Anonymous Donor"
    : donation.name || "Anonymous Donor";

  const initials = donorName
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  const gradient = getGradient(initials);
  const impact = impactItems(donation.amount);
  const hasImpact = impact.some((i) => i.value > 0);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className={`group relative flex flex-col rounded-2xl bg-white overflow-hidden transition-all duration-300 ${
        isNew
          ? "ring-2 ring-emerald-400 shadow-lg shadow-emerald-100"
          : "border border-slate-200/80 shadow-sm hover:shadow-lg hover:shadow-slate-200/60 hover:-translate-y-0.5"
      }`}
    >
      {/* Animated glow overlay on new card */}
      {isNew && (
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 5, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 to-transparent pointer-events-none z-0"
        />
      )}

      {/* NEW badge */}
      {isNew && (
        <div className="relative z-10 flex items-center justify-center gap-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-ping absolute" />
          <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase">
            New Donation
          </span>
        </div>
      )}

      {/* ── Top accent bar ── */}
      <div className={`h-1 w-full bg-gradient-to-r ${gradient} ${isNew ? "hidden" : ""}`} />

      <div className="relative z-10 flex flex-col flex-1 p-5">

        {/* ── Row 1: Avatar + Name/Date + Amount ── */}
        <div className="flex items-center gap-3.5">
          {/* Avatar */}
          <div className={`flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shadow-sm`}>
            {donation.isAnonymous ? (
              <ShieldCheck className="w-5 h-5 text-white/90" />
            ) : (
              <span className="text-sm font-bold text-white tracking-wide">{initials}</span>
            )}
          </div>

          {/* Name + date — flex-1 ensures it fills but doesn't push amount off */}
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-slate-900 text-[15px] leading-snug truncate">
              {donorName}
            </p>
            <p className="text-xs text-slate-400 mt-0.5 tabular-nums">
              {formattedDate} · {formattedTime}
            </p>
          </div>

          {/* Amount — always in one line, no wrapping */}
          <div className="flex-shrink-0">
            <div className="bg-emerald-600 text-white text-sm font-bold px-3 py-1.5 rounded-xl tabular-nums shadow-sm shadow-emerald-200 whitespace-nowrap">
              ₹ <CountUp value={donation.amount} />
            </div>
          </div>
        </div>

        {/* ── Message ── */}
        {donation.message && (
          <div className="mt-4 relative pl-3 border-l-2 border-emerald-200">
            <p className="text-sm text-slate-600 leading-relaxed italic">
              {donation.message}
            </p>
          </div>
        )}

        {/* ── Spacer pushes impact to bottom ── */}
        <div className="flex-1" />

        {/* ── Impact row ── */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          {hasImpact ? (
            <div className="flex items-stretch gap-2">
              {impact.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`flex-1 flex flex-col items-center justify-center gap-1 rounded-xl py-3 px-1 ${item.bg}`}
                  >
                    <Icon className={`w-4 h-4 ${item.color}`} strokeWidth={1.75} />
                    <span className={`text-[17px] font-extrabold tabular-nums leading-none ${item.color}`}>
                      <CountUp value={item.value} />
                    </span>
                    <span className="text-[9px] font-semibold uppercase tracking-widest text-slate-500">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-xs text-slate-400 text-center py-1">
              Every contribution creates a positive impact 💚
            </p>
          )}
        </div>
      </div>
    </motion.article>
  );
}

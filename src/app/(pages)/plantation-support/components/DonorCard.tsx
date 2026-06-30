import React from "react";
import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import { Donation } from "./types";

interface DonorCardProps {
  donation: Donation;
  isNew?: boolean;
}

export function DonorCard({ donation, isNew }: DonorCardProps) {
  const formattedAmount = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: donation.currency || "INR",
    maximumFractionDigits: 0,
  }).format(donation.amount);

  const formattedDate = formatDistanceToNow(new Date(donation.createdAt), {
    addSuffix: true,
  });

  const initials = donation.donorName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
      whileHover={{ y: -4 }}
      className={`group relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-lg p-5 border shadow-sm transition-all duration-300 ${
        isNew
          ? "border-green-300 shadow-green-100/50 shadow-lg ring-1 ring-green-100"
          : "border-slate-100 hover:shadow-md hover:border-green-200"
      }`}
    >
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-green-100 to-emerald-50 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity" />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold shadow-inner">
              {donation.isAnonymous ? "A" : initials}
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 line-clamp-1">
                {donation.isAnonymous ? "Anonymous Donor" : donation.donorName}
              </h3>
              <p className="text-xs text-slate-500">{formattedDate}</p>
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-green-50 text-green-700 font-bold text-sm border border-green-100 shadow-sm">
              {formattedAmount}
            </div>
          </div>
        </div>

        {donation.message && (
          <div className="mt-4">
            <p className="text-sm text-slate-600 italic leading-relaxed border-l-2 border-green-200 pl-3">
              "{donation.message}"
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

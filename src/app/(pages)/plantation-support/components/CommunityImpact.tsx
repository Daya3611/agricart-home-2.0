"use client";

import React from "react";
import { motion } from "framer-motion";
import { CountUp } from "./CountUp";
import { IndianRupee, Users2, Sprout, HeartHandshake, Layers } from "lucide-react";
import { Donation } from "./types";

interface CommunityImpactProps {
  donations: Donation[];
  /** Extra amount from sponsors/grants to include in totals */
  sponsorAmount?: number;
}

export function CommunityImpact({ donations, sponsorAmount = 0 }: CommunityImpactProps) {
  const donationsAmount = donations.reduce((sum, d) => sum + d.amount, 0);
  const totalAmount = donationsAmount + sponsorAmount;
  const totalDonors = donations.length;
  const totalTrees = Math.floor(totalAmount / 25);
  const totalBeneficiaries = Math.floor(totalAmount / 800);
  const totalArea = totalAmount / 500;

  const stats = [
    {
      label: "Funds Raised",
      value: totalAmount,
      prefix: "₹",
      icon: IndianRupee,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-700",
      valueColor: "text-emerald-700",
      description: "Total donations collected",
    },
    {
      label: "Total Donors",
      value: totalDonors,
      icon: Users2,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-700",
      valueColor: "text-slate-900",
      description: "Generous contributors",
    },
    {
      label: "Trees Planted",
      value: totalTrees,
      icon: Sprout,
      iconBg: "bg-teal-100",
      iconColor: "text-teal-700",
      valueColor: "text-slate-900",
      description: "Saplings in the ground",
    },
    {
      label: "Families Helped",
      value: totalBeneficiaries,
      icon: HeartHandshake,
      iconBg: "bg-rose-100",
      iconColor: "text-rose-700",
      valueColor: "text-slate-900",
      description: "Farming families supported",
    },
    {
      label: "Acres Covered",
      value: totalArea,
      decimals: 2,
      icon: Layers,
      iconBg: "bg-amber-100",
      iconColor: "text-amber-700",
      valueColor: "text-slate-900",
      description: "Land under plantation",
    },
  ];

  return (
    <div className="w-full mb-10 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 py-5 border-b border-slate-100">
        <div>
          <h2 className="text-[15px] font-semibold text-slate-900 tracking-tight">
            Community Impact
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Includes donations + BAIF-TERI SGP OP7 sponsor grant
          </p>
        </div>
        <span className="self-start sm:self-auto inline-flex items-center gap-2 text-[11px] font-semibold tracking-wide uppercase text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          Live
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          const isLast = i === stats.length - 1;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className={`flex flex-col gap-3 p-5 border-slate-100 ${!isLast ? "border-r" : ""
                } border-b lg:border-b-0`}
            >
              {/* Icon */}
              <div className={`w-9 h-9 rounded-xl ${stat.iconBg} flex items-center justify-center`}>
                <Icon className={`${stat.iconColor}`} size={17} strokeWidth={2} />
              </div>

              {/* Value */}
              <div>
                <p className={`text-2xl font-bold tabular-nums leading-none ${stat.valueColor}`}>
                  {stat.prefix && (
                    <span className="text-base font-semibold mr-0.5">{stat.prefix}</span>
                  )}
                  <CountUp value={stat.value} decimals={(stat as any).decimals || 0} />
                </p>
                <p className="text-[11px] font-medium text-slate-500 mt-1.5">{stat.label}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

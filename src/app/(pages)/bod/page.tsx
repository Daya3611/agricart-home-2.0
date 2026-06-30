"use client";

import React from "react";
import { BadgeCheck, User, CheckCircle2, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

/* ─────────────────── DATA ─────────────────── */
const executives = [
  {
    name: "Shri. Santosh Ankush Gawade",
    role: "Chairman",
    imgSrc: "/img/people/p1.png",
  },
  {
    name: "Shri. Vinod Shivram Sawant",
    role: "Vice Chairman",
    imgSrc: "/img/people/p1.png",
  },
  {
    name: "Shri. Sachin Vijay Chorge",
    role: "Secretary",
    imgSrc: "/img/people/p1.png",
  },
  {
    name: "Shri. Sandeep Atmaram Dhawale",
    role: "Secretary, Milk Department",
    imgSrc: "/img/people/p1.png",
  },
];

const boardMembers = [
  { name: "Shri. Darshana Dilip Palav", role: "Director", imgSrc: "/img/people/p1.png" },
  { name: "Shri. Nhanu Pandurang Palav", role: "HOD, Milk Department", imgSrc: "/img/people/p1.png" },
  { name: "Shri. Sunil Chandrakant Kadam", role: "Promoter", imgSrc: "/img/people/p1.png" },
  { name: "Shri. Uma Mahadev Palav", role: "Promoter", imgSrc: "/img/people/p1.png" },
  { name: "Shri. Sharad Ganpat Dhuri", role: "Promoter", imgSrc: "/img/people/p1.png" },
  { name: "Shri. Kailas Digambar Dhawale", role: "Promoter", imgSrc: "/img/people/p1.png" },
  { name: "Shri. Sandip Ankush Gawade", role: "Hon. Consultant", imgSrc: "/img/people/sandip_gawade.jpg" },
  { name: "Shri. Ajay Vijay Chavan", role: "CEO", imgSrc: "/img/people/p1.png" },
];

/* ─────────────────── NOTIFY ─────────────────── */
const notify = () => toast.info("Details not available at the moment.");

/* ─────────────────── PROFILE CARD ─────────────────── */
type Member = { name: string; role: string; imgSrc: string };

function ProfileCard({ member }: { member: Member }) {
  return (
    <div className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 p-1.5">
      {/* Inner container for the image to have rounded corners at the top and straight at the bottom if we want, or just round the image itself */}
      <div className="bg-[#f2efe9] rounded-[26px] overflow-hidden relative" style={{ aspectRatio: "4 / 4.5" }}>
        <img
          src={member.imgSrc}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
        />
      </div>

      {/* Info block */}
      <div className="px-5 pt-5 pb-5 flex flex-col">
        {/* Name + filled lime badge */}
        <h3 className="font-semibold text-slate-800 text-[17px] tracking-tight leading-tight">
          {member.name}
          {/* <BadgeCheck
            className="inline-block w-[18px] h-[18px] ml-1.5 mb-[2px]"
            fill="#a3e635" 
            stroke="white"
            strokeWidth={1.5}
          /> */}
        </h3>

        {/* Role / bio */}
        <p className="text-[13px] text-slate-400 mt-1.5 leading-relaxed font-medium">
          {member.role}
        </p>

        {/* Bottom row: stats + Follow button */}
        <div className="flex items-center gap-4 mt-6">
          <span className="flex items-center gap-1.5 text-[12px] text-slate-400 font-semibold">
            <User className="w-3.5 h-3.5 stroke-[2.5]" />
            312
          </span>
          <span className="flex items-center gap-1.5 text-[12px] text-slate-400 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
            48
          </span>
          <button
            onClick={notify}
            className="ml-auto text-[11.5px] font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-full transition-colors active:scale-95 duration-150 whitespace-nowrap"
          >
            Follow +
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────── PAGE ─────────────────── */
export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* ── PAGE HEADER ── */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span className="text-xs font-bold uppercase tracking-widest text-green-600">
                  Leadership
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Board of Directors
              </h1>
              <p className="mt-3 text-slate-500 text-base max-w-lg leading-relaxed">
                Meet the visionary leaders governing Agricart Farmers Producer
                Company and driving sustainable agricultural growth.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-6 flex-shrink-0">
              <div className="text-center">
                <p className="text-3xl font-extrabold text-slate-900">12</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5 uppercase tracking-wide">Members</p>
              </div>
              <div className="w-px bg-slate-200" />
              <div className="text-center">
                <p className="text-3xl font-extrabold text-slate-900">10+</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5 uppercase tracking-wide">Years</p>
              </div>
              <div className="w-px bg-slate-200" />
              <div className="text-center">
                <p className="text-3xl font-extrabold text-slate-900">5k+</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5 uppercase tracking-wide">Farmers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 space-y-16">

        {/* ── EXECUTIVE LEADERSHIP ── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-xl font-bold text-slate-900">
              Executive Leadership
            </h2>
            <span className="text-xs font-semibold text-slate-400 bg-slate-100 border border-slate-200 rounded-full px-2.5 py-0.5">
              {executives.length} members
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {executives.map((member, i) => (
              <ProfileCard key={i} member={member} />
            ))}
          </div>
        </section>

        {/* ── DIVIDER ── */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-slate-200" />
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest">
            {/* <Users className="w-3.5 h-3.5" /> */}
            Governing Board
          </div>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {/* ── BOARD MEMBERS ── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-xl font-bold text-slate-900">
              Directors &amp; Promoters
            </h2>
            <span className="text-xs font-semibold text-slate-400 bg-slate-100 border border-slate-200 rounded-full px-2.5 py-0.5">
              {boardMembers.length} members
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {boardMembers.map((member, i) => (
              <ProfileCard key={i} member={member} />
            ))}
          </div>
        </section>

        {/* ── BOTTOM STRIP ── */}
        <section className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Want to get in touch?
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Our leadership team welcomes collaboration with farmers, investors
              and agricultural innovators.
            </p>
          </div>
          <a
            href="/contact"
            className="flex-shrink-0 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-7 py-3 rounded-xl transition-colors shadow-sm active:scale-95 duration-150"
          >
            Contact Us →
          </a>
        </section>

      </div>
    </main>
  );
}

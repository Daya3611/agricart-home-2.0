"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/* ── Animation helpers ──────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

/* ── Data ───────────────────────────────────────────── */
const stats = [
  { value: "22,000+", label: "Saplings Planned",    icon: "🌱" },
  { value: "110",     label: "Acres Targeted",       icon: "🌳" },
  { value: "100+",    label: "Farmers Supported",    icon: "👨‍🌾" },
  { value: "11",      label: "Native Species",       icon: "🌍" },
];

const saplings = [
  { name: "Kokum",        count: 5000 },
  { name: "Raival Mango", count: 2000 },
  { name: "Jamun",        count: 2000 },
  { name: "Jackfruit",    count: 2000 },
  { name: "Tamarind",     count: 2000 },
  { name: "Charoli",      count: 2000 },
  { name: "Vatsol",       count: 2000 },
  { name: "Surangi",      count: 1000 },
  { name: "Khirni",       count: 1000 },
  { name: "Karvanda",     count: 1000 },
  { name: "Tirphal",      count: 1000 },
];

const saplingIcons: Record<string, string> = {
  Kokum: "🟣", "Raival Mango": "🥭", Jamun: "🫐", Jackfruit: "🍈",
  Tamarind: "🌰", Charoli: "🌿", Vatsol: "🍃", Surangi: "🌸",
  Khirni: "🍋", Karvanda: "🫒", Tirphal: "🌿",
};

/* ── Leaf SVG decoration ────────────────────────────── */
function LeafDeco({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={className} aria-hidden="true">
      <path d="M40 95 C40 95 5 70 5 35 C5 10 25 2 40 2 C55 2 75 10 75 35 C75 70 40 95 40 95Z"
        fill="currentColor" />
      <line x1="40" y1="95" x2="40" y2="2" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" />
      <line x1="40" y1="60" x2="20" y2="40" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="40" y1="50" x2="60" y2="32" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
    </svg>
  );
}

/* ── Donate Button ──────────────────────────────────── */
function DonateButton({ large = false }: { large?: boolean }) {
  return (
    <a
      href="https://pay.agricartfpc.in"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 
        active:scale-95 text-white font-semibold rounded-full shadow-md shadow-green-200 
        transition-all duration-200 select-none
        ${large ? "px-10 py-4 text-lg" : "px-7 py-3 text-sm"}`}
    >
      Donate Now
    </a>
  );
}

/* ── Page ───────────────────────────────────────────── */
export default function PlantationSupportPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-green-100">

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">

        {/* Subtle ambient bg blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-green-50 blur-3xl" />
          <div className="absolute bottom-0 -left-32 h-[400px] w-[400px] rounded-full bg-emerald-50 blur-3xl" />
        </div>

        {/* Decorative leaves */}
        <LeafDeco className="pointer-events-none absolute -top-6 right-10 h-28 text-green-100 opacity-70 rotate-12 hidden md:block" />
        <LeafDeco className="pointer-events-none absolute bottom-10 left-6 h-20 text-emerald-100 opacity-60 -rotate-20 hidden md:block" />

        <div className="relative z-10 container mx-auto px-5 max-w-5xl">
          <div className="flex flex-col items-center text-center gap-8">

            {/* Eyebrow */}
            <motion.span {...fadeUp(0)}
              className="inline-block bg-green-50 text-green-700 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-green-100">
              Agricart Shetkari Utpadak Gat &bull; Konkan Region
            </motion.span>

            {/* Headline */}
            <motion.h1 {...fadeUp(0.08)}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] max-w-3xl">
              Support Farmers&nbsp;
              <span className="text-green-600">&bull;</span> Grow Trees&nbsp;
              <span className="text-green-600">&bull;</span> Protect Nature
            </motion.h1>

            {/* Description */}
            <motion.p {...fadeUp(0.14)}
              className="text-base sm:text-lg text-slate-500 max-w-2xl leading-relaxed">
              Agricart Farmers Producer Group, Pandur, Kudal, Sindhudurg and BAIF Foundation, Pune
              are distributing <strong className="text-slate-700 font-semibold">free local fruit saplings</strong> to
              farmers in the Konkan region — nurturing biodiversity and livelihoods together.
            </motion.p>

            {/* CTA */}
            <motion.div {...fadeUp(0.2)}>
              <DonateButton large />
            </motion.div>

            {/* Poster image */}
            <motion.div {...fadeUp(0.26)}
              className="w-full max-w-sm sm:max-w-md relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 mt-2">
              <Image
                src="/img/plant-support.jpeg"
                alt="Agricart Tree Plantation Campaign Poster"
                width={800}
                height={1100}
                className="w-full h-auto object-cover"
                priority
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          IMPACT STATS
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-5 max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div key={s.label} {...fadeUp(i * 0.07)}
                className="bg-white rounded-2xl px-5 py-7 text-center shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <p className="text-3xl mb-2">{s.icon}</p>
                <p className="text-2xl md:text-3xl font-bold text-slate-900">{s.value}</p>
                <p className="text-xs md:text-sm text-slate-500 mt-1 font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CONTRIBUTION CARD
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5 max-w-xl">
          <motion.div {...fadeUp()}
            className="relative overflow-hidden rounded-3xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-10 md:p-14 text-center shadow-xl shadow-green-50">

            {/* Background leaf watermark */}
            <LeafDeco className="absolute -bottom-10 -right-6 h-48 text-green-100 opacity-50" />
            <LeafDeco className="absolute -top-10 -left-6 h-36 text-green-100 opacity-40 rotate-180" />

            <div className="relative z-10 flex flex-col items-center gap-6">

              {/* Icon */}
              <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center text-2xl shadow-sm">
                🌱
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Make Your Contribution</h2>
                <p className="text-slate-500 leading-relaxed">
                  Your small support can help bring new life to a farmer&apos;s field.
                </p>
              </div>

              {/* Price pill */}
              <div className="bg-white border border-green-200 text-green-700 font-bold px-6 py-2.5 rounded-full text-base shadow-sm">
                🌱 One Sapling = ₹25
              </div>

              <DonateButton large />

            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PROPOSED SAPLINGS
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-5 max-w-5xl">

          {/* Heading */}
          <motion.div {...fadeUp()} className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-green-600 font-semibold mb-3">
              Native Species
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Proposed Saplings</h2>
            <p className="mt-4 text-slate-500 max-w-lg mx-auto text-sm leading-relaxed">
              Carefully selected native fruit-bearing trees to restore biodiversity and support farmer livelihoods across the Konkan region.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {saplings.map((s, i) => (
              <motion.div key={s.name} {...fadeUp(i * 0.04)}
                whileHover={{ y: -3 }}
                className="bg-white rounded-2xl p-5 text-center border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <span className="text-2xl block mb-2">{saplingIcons[s.name]}</span>
                <p className="font-semibold text-slate-800 text-sm leading-tight">{s.name}</p>
                <p className="text-xs text-green-600 font-medium mt-1.5">
                  {s.count.toLocaleString()} trees
                </p>
              </motion.div>
            ))}
          </div>

          {/* Target callout */}
          <motion.div {...fadeUp(0.2)}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8 bg-white rounded-2xl border border-slate-100 shadow-sm py-8 px-6 text-center">
            <div>
              <p className="text-4xl font-extrabold text-slate-900">110</p>
              <p className="text-slate-500 text-sm mt-1">Acres Target</p>
            </div>
            <div className="h-px w-16 sm:h-12 sm:w-px bg-slate-200" />
            <div>
              <p className="text-4xl font-extrabold text-slate-900">22,000+</p>
              <p className="text-slate-500 text-sm mt-1">Trees to be Planted</p>
            </div>
            <div className="h-px w-16 sm:h-12 sm:w-px bg-slate-200" />
            <div>
              <p className="text-4xl font-extrabold text-slate-900">11</p>
              <p className="text-slate-500 text-sm mt-1">Native Species</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-5 max-w-sm">
          <motion.div {...fadeUp()}
            className="text-center space-y-5">
            <p className="text-xs uppercase tracking-widest text-green-600 font-semibold">Get in Touch</p>
            <h2 className="text-2xl font-bold text-slate-900">Have Questions?</h2>
            <p className="text-slate-500 text-sm">
              Reach out to learn more about this campaign or how to contribute.
            </p>
            <a
              href="tel:7350025515"
              className="inline-flex items-center gap-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-semibold px-7 py-3.5 rounded-full transition-colors shadow-sm"
            >
              <span className="text-lg">📞</span>
              7350025515
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════ */}
      <footer className="border-t border-slate-100 py-10 text-center bg-white">
        <div className="container mx-auto px-5 space-y-4">
          <p className="text-2xl">🌿</p>
          <p className="text-slate-600 font-medium text-base max-w-md mx-auto leading-relaxed">
            &ldquo;Together we can build a greener Konkan and prosperous farmers.&rdquo;
          </p>
          <div className="pt-2">
            <DonateButton />
          </div>
          <p className="text-xs text-slate-400 pt-4">
            © {new Date().getFullYear()} Agricart Shetkari Utpadak Gat, Pandur, Kudal, Sindhudurg.
          </p>
        </div>
      </footer>

    </div>
  );
}

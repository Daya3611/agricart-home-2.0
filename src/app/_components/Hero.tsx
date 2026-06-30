import React from "react";
import { ArrowUpRight } from "lucide-react";

function Hero() {
  return (
    <section className="relative bg-white pt-6 pb-16 overflow-hidden">
      {/* Subtle background tint */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-green-50 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-0 -left-24 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute -inset-4 bg-green-50 rounded-3xl blur-xl opacity-60" />
              <img
                src="./img/logo.png"
                alt="Agricart Farmers Producer Company"
                className="relative w-72 md:w-80 lg:w-96 drop-shadow-sm rounded-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left space-y-6">
            {/* Under construction notice */}
            {/* <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              Website is under development — some features may be unavailable.
            </div> */}

            {/* Title */}
            <div className="space-y-1">
              <h1 className="text-5xl md:text-6xl font-extrabold text-green-600 tracking-tight leading-none">
                Agricart
              </h1>
              <p className="text-lg md:text-xl font-semibold text-slate-800">
                Farmers Producer Company Limited
              </p>
            </div>

            {/* Slogan image */}
            <img
              src="./img/slogen.png"
              alt="Slogan"
              className="mx-auto md:mx-0 w-[220px] md:w-[280px]"
            />

            {/* Description */}
            <p className="text-slate-600 text-base leading-relaxed max-w-md mx-auto md:mx-0">
              Working with{" "}
              <strong className="text-slate-800 font-semibold">500+ farmers</strong> to
              conserve traditional seeds and recipes across the Konkan region.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-sm shadow-green-200 transition-all active:scale-95 text-sm"
              >
                Know More About Us
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="/plantation-support"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-700 hover:border-green-300 hover:text-green-700 hover:bg-green-50 font-semibold rounded-full transition-all text-sm"
              >
                Plantation Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

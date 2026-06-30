"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MenuIcon, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Introduction", href: "/introduction" },
  { label: "About Us", href: "/about" },
  { label: "Board of Directors", href: "/bod" },
  { label: "Staff", href: "/staff" },
  { label: "Projects", href: "/projects" },
  { label: "Events", href: "/allevents" },
  { label: "Products", href: "https://shop.agricartfpc.in", external: true },
  { label: "Contact Us", href: "/contact" },
  { label: "Plantation Support", href: "/plantation-support" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out ${scrolled
            ? "top-3 max-w-[1300px] w-[95%] mx-auto rounded-full bg-white/90 backdrop-blur-md shadow-md border border-slate-200/80 px-4"
            : "top-0 max-w-full w-full bg-white border-b border-slate-100 px-6"
          }`}
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14" : "h-16"
            }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-85 transition-opacity flex-shrink-0"
            aria-label="Agricart Home"
          >
            <img
              src="/img/logo2.png"
              alt="Agricart Farmers Producer Company"
              className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-8" : "h-10"
                }`}
            />
          </Link>

          {/* Desktop nav (Links only, excluding Plantation Support) */}
          <nav className="hidden xl:flex items-center gap-1.5">
            {navLinks
              .filter((link) => link.label !== "Plantation Support")
              .map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-2 text-[13px] lg:text-[14px] font-semibold text-slate-600 hover:text-green-700 hover:bg-green-50/50 rounded-xl transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-2.5 py-2 text-[13px] lg:text-[14px] font-semibold text-slate-600 hover:text-green-700 hover:bg-green-50/50 rounded-xl transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                )
              )}
          </nav>

          {/* Desktop CTA (Plantation Support) */}
          <div className="hidden xl:flex items-center flex-shrink-0">
            <Link
              href="/plantation-support"
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-[13px] font-bold rounded-full transition-colors shadow-sm whitespace-nowrap active:scale-95 duration-150"
            >
              Plantation Support
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setOpen(true)}
            className="xl:hidden p-2 rounded-lg text-slate-600 hover:text-green-700 hover:bg-green-50 transition-colors"
            aria-label="Open menu"
          >
            <MenuIcon className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          {/* Panel */}
          <div className="relative ml-auto w-72 bg-white h-full shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-5 h-16 border-b border-slate-100">
              <span className="font-bold text-slate-900">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Links */}
            <nav className="flex flex-col px-3 py-4 gap-0.5 flex-1 overflow-y-auto">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-3 text-sm font-medium text-slate-700 hover:text-green-700 hover:bg-green-50 rounded-xl transition-colors"
                  >
                    {link.label}
                  </a>
                ) : link.label === "Plantation Support" ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center px-4 py-3 text-sm font-semibold text-green-700 bg-green-50/80 rounded-xl transition-colors mt-2"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center px-4 py-3 text-sm font-medium text-slate-700 hover:text-green-700 hover:bg-green-50 rounded-xl transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <div className="px-5 py-5 border-t border-slate-100">
              <a
                href="https://pay.agricartfpc.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-colors text-sm"
              >
                Donate Now 🌱
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}

export default Header;

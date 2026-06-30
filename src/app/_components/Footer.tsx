import React from "react";

const partnerLogos = [
  { src: "./img/nabard.png", alt: "NABARD" },
  { src: "./img/lupin.png", alt: "Lupin" },
  { src: "./img/baif.png", alt: "BAIF" },
  { src: "./img/krushi-vibhag-logo.jpg", alt: "Krushi Vibhag" },
];

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Staff", href: "/staff" },
  { label: "Projects", href: "/projects" },
  { label: "Events", href: "/allevents" },
  { label: "Plantation Support", href: "/plantation-support" },
  { label: "Contact", href: "/contact" },
];

function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-5">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center">
              <img
                src="/img/logo2.png"
                alt="Agricart Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Farmers Producer Company Limited. empowering 500+ farmers across Konkan to conserve
              traditional seeds and build sustainable livelihoods.
            </p>
            <a
              href="https://pay.agricartfpc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-full transition-colors shadow-sm"
            >
              Donate Now 🌱
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-green-700 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address + Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-5">
              Address
            </h4>
            <address className="text-sm text-slate-500 not-italic leading-relaxed space-y-1">
              <p>H. No. 22A, Wing 2</p>
              <p>Pandur Titha, Kudal</p>
              <p>Sindhudurg – 416812</p>
            </address>
            <div className="mt-5 space-y-2">
              <a
                href="tel:+917350025515"
                className="block text-sm text-green-700 hover:text-green-800 transition-colors font-semibold"
              >
                +91 7350025515
              </a>
              <a
                href="mailto:info@agricartfpc.in"
                className="block text-sm text-green-700 hover:text-green-800 transition-colors font-semibold"
              >
                info@agricartfpc.in
              </a>
            </div>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-5">
              Our Partners
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {partnerLogos.map(({ src, alt }) => (
                <div
                  key={alt}
                  className="bg-white border border-slate-200 rounded-xl p-3 flex items-center justify-center shadow-sm"
                >
                  <img src={src} alt={alt} className="h-8 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Agricart Farmers Producer Company Limited.
          </p>
          <p className="text-xs text-slate-400">
            Design & Developed by{" "}
            <a
              href="https://dayanandgawade.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-800 transition-colors font-semibold"
            >
              Dayanand Gawade
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

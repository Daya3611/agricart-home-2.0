import { MailIcon, PhoneCallIcon } from "lucide-react";
import React from "react";

function Contact() {
  return (
    <section className="py-16 bg-white border-t border-slate-100" id="contact">
      <div className="max-w-5xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-600 mb-2">
            Get in Touch
          </p>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            We&apos;d love to hear from you
          </h2>
          <p className="mt-3 text-sm text-slate-500 max-w-md mx-auto">
            Reach out via phone or email, or send us a message using the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-5">
            <h3 className="font-semibold text-slate-800 text-base">Contact Information</h3>

            <a
              href="tel:+917350025515"
              className="flex items-center gap-4 p-4 bg-slate-50 hover:bg-green-50 border border-slate-200 hover:border-green-200 rounded-2xl transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                <PhoneCallIcon className="w-4 h-4 text-green-700" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Call us</p>
                <p className="text-sm font-semibold text-slate-800">+91 7350025515</p>
              </div>
            </a>

            <a
              href="mailto:info@agricartfpc.in"
              className="flex items-center gap-4 p-4 bg-slate-50 hover:bg-green-50 border border-slate-200 hover:border-green-200 rounded-2xl transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                <MailIcon className="w-4 h-4 text-green-700" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Email us</p>
                <p className="text-sm font-semibold text-slate-800">info@agricartfpc.in</p>
              </div>
            </a>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
              <p className="text-xs text-slate-500 font-medium mb-1">Address</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                H. No. 22A, Wing 2, Pandur Titha,<br />
                Kudal, Sindhudurg – 416812
              </p>
            </div>
          </div>

          {/* Contact form */}
          <form
            id="contact-form"
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-4"
          >
            <input type="hidden" name="access_key" value="bd6511c9-5640-4978-8a8c-a07f0dd09b6b" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Dayanand Gawade"
                  className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="How can we help?"
                className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Write your message here…"
                className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all resize-none"
              />
            </div>

            <div className="h-captcha" data-captcha="true" />

            <button
              type="submit"
              id="submit"
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-xl transition-colors active:scale-95 shadow-sm shadow-green-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <script src="https://web3forms.com/client/script.js" async defer />
    </section>
  );
}

export default Contact;

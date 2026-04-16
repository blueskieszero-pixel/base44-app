import { Link } from "react-router-dom";
import { Phone, Mail, PiggyBank } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
          {/* Brand + links */}
          <div>
            <div className="flex items-center gap-2 mb-4">
          <PiggyBank className="w-9 h-9 animate-[floatA_6s_ease-in-out_infinite]" strokeWidth={1.75} style={{color: "#E91E8C", filter: "drop-shadow(0 2px 6px rgba(233,30,140,0.5))"}}/>
              <span className="font-extrabold text-xl text-white">MonergyMe <span className="text-xs font-semibold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">(authorised UW partner)</span></span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs mb-6">
              Your trusted authorised UW partner for home and business utility savings across the UK. Over 30 years of customer service excellence.
            </p>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "Energy", href: "#" },
                { label: "Broadband", to: "/HomeUtilities" },
                { label: "Mobile Sims", to: "/HomeUtilities" },
                { label: "Commercial Utilities", to: "/CommercialUtilities" },
                { label: "Blog", to: "/Blog" },
                { label: "Contact", to: "/Contact" },
                { label: "Privacy Policy", to: "/privacy-policy" },
              ].map((item) =>
                item.to ? (
                  <Link key={item.label} to={item.to} className="text-white/80 hover:text-white text-sm transition-colors hover:underline">{item.label}</Link>
                ) : (
                  <a key={item.label} href={item.href} className="text-white/80 hover:text-white text-sm transition-colors hover:underline">{item.label}</a>
                )
              )}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a href="tel:07396843886" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm">07396 843886</span>
              </a>
              <a href="mailto:help-you@monergy.me.uk" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors flex-shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm">help-you@monergy.me.uk</span>
              </a>
            </div>
            <div className="mt-8 p-4 rounded-xl bg-white/10 border border-white/20">
              <p className="text-white text-sm font-semibold mb-1">Free Consultations Available</p>
              <p className="text-white/70 text-xs leading-relaxed">
                Book your FREE 45-minute consultation today. Expert advice with no obligation.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/60">
            <span>© Copyright MonergyMe 2026 • All Rights Reserved</span>

          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Wifi, Smartphone, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import { Link } from "react-router-dom";

const AnimatedElement = ({ children, className, delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) { setIsVisible(true); return; }
    const fallback = setTimeout(() => setIsVisible(true), 800 + delay);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { clearTimeout(fallback); setTimeout(() => setIsVisible(true), delay); observer.unobserve(el); }
    }, { threshold: 0.05, rootMargin: '0px 0px 200px 0px' });
    observer.observe(el);
    return () => { observer.disconnect(); clearTimeout(fallback); };
  }, [delay]);
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className || ''}`}>
      {children}
    </div>
  );
};

const services = [
  {
    icon: Zap,
    title: "Energy",
    subtitle: "Gas & Electricity",
    description: "Beat the rising cost of energy with exclusive gas and electricity rates sourced directly from the UK's leading suppliers. Our team matches you to the most competitive tariff available for your home — quickly, simply and at no cost to you.",
    features: ["Exclusive low rates from top UK suppliers", "Free energy days included on select plans", "Smart meter installation arranged for you", "Green and renewable energy options available"],
    badge: "Most Popular",
    img: "https://media.base44.com/images/public/69ddd901c27d9d1e2d1c93c9/7030b566a_generated_image.png",
    color: "from-orange-500 to-amber-400"
  },
  {
    icon: Wifi,
    title: "Broadband",
    subtitle: "High-Speed Internet",
    description: "Stay connected with lightning-fast broadband from the UK's most trusted providers, all at genuinely competitive prices. Whether you need standard fibre or ultrafast full-fibre, we find the right package to suit your household perfectly.",
    features: ["Ultrafast full-fibre packages available", "Guaranteed no mid-contract price hikes", "Free router delivered to your door", "Round-the-clock technical support included"],
    badge: "Best Value",
    img: "https://media.base44.com/images/public/69ddd901c27d9d1e2d1c93c9/01691d8d8_generated_image.png",
    color: "from-primary to-orange-400"
  },
  {
    icon: Smartphone,
    title: "Mobile SIMs",
    subtitle: "Mobile Plans",
    description: "Get more from your mobile with flexible SIM-only plans offering unlimited data, calls and texts on the UK's strongest networks. Pay less than you do now and enjoy full coverage with none of the hidden charges or long tie-ins.",
    features: ["Unlimited data plans on leading networks", "Coverage across the whole of the UK", "No hidden fees or surprise charges", "Family and multi-SIM bundle deals available"],
    badge: "Unlimited+",
    img: "https://media.base44.com/images/public/69ddd901c27d9d1e2d1c93c9/32bdaaba3_generated_image.png",
    color: "from-orange-600 to-primary"
  }
];

export default function HomeUtilities() {
  const [activeTab, setActiveTab] = useState("Energy");
  const activeService = services.find(s => s.title === activeTab);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary min-h-[45vh] flex items-center">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 py-16 w-full relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
            <Badge className="bg-white/20 text-white mb-4 px-4 py-1 rounded-full font-semibold border border-white/30">Home Utilities</Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
              Your Complete{" "}
              <span className="text-white/80">
                Home Utilities
              </span>{" "}
              Bundle
            </h1>
            <p className="text-white/80 text-lg max-w-xl">
              Combine your energy, broadband and mobile into one smart package — saving you more every single month.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Tabs */}
      <AnimatedElement>
        <section className="bg-background py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-foreground mb-3">
                Choose Your{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Service</span>
              </h2>
              <p className="text-muted-foreground">Select a service below — the more you bundle, the bigger your savings</p>
            </div>

            {/* Tab Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {services.map(s => (
                <button
                  key={s.title}
                  onClick={() => setActiveTab(s.title)}
                  className={`flex items-center gap-2 px-7 py-3 rounded-2xl font-bold text-base transition-all duration-300 shadow-sm ${
                    activeTab === s.title
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'bg-primary/8 text-primary border-2 border-primary/20 hover:bg-primary/15 hover:border-primary/40'
                  }`}
                  style={activeTab !== s.title ? { backgroundColor: 'hsl(var(--primary) / 0.06)' } : {}}
                >
                  <s.icon className="w-4 h-4" />
                  {s.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
              {activeService && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
                  {/* Image */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${activeService.color} opacity-20 rounded-full blur-3xl scale-110`} />
                      <div className="w-56 h-56 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 border-4 border-primary/20 shadow-[0_0_60px_rgba(238,85,31,0.2)] overflow-hidden">
                        <img
                          src={activeService.img}
                          alt={activeService.title}
                          className="w-full h-full object-cover"
                          style={{ filter: "saturate(1.3) hue-rotate(240deg) brightness(1.05)" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <Badge className="bg-primary text-white mb-3 rounded-full px-4 py-1 font-semibold">{activeService.badge}</Badge>
                    <h3 className="text-3xl font-extrabold text-foreground mb-1">{activeService.title}</h3>
                    <p className="text-primary font-semibold mb-4">{activeService.subtitle}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{activeService.description}</p>
                    <ul className="space-y-3 mb-8">
                      {activeService.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-foreground">
                          <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-primary" />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link to="/Contact">
                      <Button className="bg-primary text-white hover:bg-primary/90 font-bold px-8 py-6 rounded-2xl shadow-lg hover:-translate-y-1 transition-all duration-300 text-base">
                        Contact MonergyMe for your Free Appointment
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
          </div>
        </section>
      </AnimatedElement>

      {/* Bundle Savings */}
      <AnimatedElement>
        <section className="bg-primary py-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/25 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[60px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-white mb-3">Save More by Bundling</h2>
              <p className="text-white/75">Combine more services and watch your monthly savings grow</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { count: "1 Service", saving: "Up to £20/mo", label: "Good Start" },
                { count: "2 Services", saving: "Up to £45/mo", label: "Great Value" },
                { count: "3 Services", saving: "Up to £80/mo", label: "Best Savings" }
              ].map((tier, i) => (
                <AnimatedElement key={tier.count} delay={i * 120}>
                  <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:-translate-y-2 transition-all duration-500 hover:bg-white/20 hover:shadow-xl">
                    <p className="text-white/70 text-sm mb-1">{tier.count}</p>
                    <p className="text-4xl font-extrabold text-white mb-2">{tier.saving}</p>
                    <Badge className="bg-white/20 text-white border border-white/30 rounded-full px-3">{tier.label}</Badge>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>
      </AnimatedElement>

      {/* One Bill Section */}
      <AnimatedElement>
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/10 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-foreground mb-4">Everything on One Simple Bill</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Combine your energy, broadband and mobile under a single monthly payment and take back control of your finances. No more missed dates or multiple direct debits — just one clear, simple bill handled entirely by us.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[{ icon: Zap, label: "Energy" }, { icon: Wifi, label: "Broadband" }, { icon: Smartphone, label: "Mobile" }].map(({ icon: Icon, label }) => (
                  <div key={label} className="rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 border border-primary/20 p-5 text-center hover:-translate-y-1 transition-all duration-300 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm font-bold text-foreground">{label}</p>
                  </div>
                ))}
              </div>
              <Button className="bg-primary text-white hover:bg-primary/90 font-bold px-8 py-6 rounded-2xl shadow-lg hover:-translate-y-1 transition-all duration-300 text-base">
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </section>
      </AnimatedElement>

      {/* CTA Contact */}
      <AnimatedElement>
        <section className="bg-background py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl font-extrabold text-foreground mb-4">
              Ready to{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Cut Your Bills?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Claim your FREE 45-minute consultation today. Completely impartial advice, zero obligation and no hidden costs — just real savings delivered to you.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button className="bg-primary text-white hover:bg-primary/90 font-bold px-8 py-4 rounded-2xl shadow-lg hover:-translate-y-1 transition-all duration-300">
                Book Free Consultation
              </Button>
              <Link to="/">
                <Button variant="outline" className="border-2 border-primary/30 text-primary hover:bg-primary hover:text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300">
                  Back to Home
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <a href="tel:07396843886" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> 07396 843886
              </a>
              <a href="mailto:help-you@monergy.me.uk" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> help-you@monergy.me.uk
              </a>
            </div>
          </div>
        </section>
      </AnimatedElement>
    </div>
  );
}
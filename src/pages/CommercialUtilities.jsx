import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Phone, Mail, Zap, Wifi, Smartphone, CreditCard, Shield, Droplets } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Zap, title: "Business Energy", description: "Lock in competitive gas and electricity rates tailored to your business consumption." },
  { icon: Wifi, title: "Business Broadband", description: "Ultrafast, reliable internet to keep your operations running smoothly." },
  { icon: Smartphone, title: "Business Mobile", description: "Flexible business SIM plans with shared data and team bundles." },
  { icon: CreditCard, title: "Card Payments", description: "Seamless card payment processing solutions to boost your sales." },
  { icon: Droplets, title: "Water Services", description: "Business water supply solutions with competitive rates." },
  { icon: Shield, title: "Business Insurance", description: "Comprehensive cover to protect your business assets and operations." },
];

export default function CommercialUtilities() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary min-h-[45vh] flex items-center">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 py-20 w-full relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-primary-foreground mb-4 leading-tight">
              Commercial Utilities
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-xl mb-8">
              Streamline all your business services under one roof. Exclusive deals tailored to your business needs — all completely FREE to arrange.
            </p>
            <a href="tel:07396843886">
              <Button className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-6 rounded-2xl text-lg shadow-lg">
                Call Us: 07396 843886
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-foreground mb-4 text-center">Why Choose Us for Your Business?</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            With over 30 years of customer service experience, we negotiate the best commercial deals so you can focus on running your business.
          </p>
          <ul className="max-w-2xl mx-auto space-y-4 mb-12">
            {[
              "Streamline Your Business Operations with All Essential Services Under One Roof",
              "Exclusive Business Utility Offers Tailored to Your Needs",
              "Boost Your Profits by Cutting Utility Expenses",
              "Reliable and Trusted Suppliers Network",
              "Seamless and Hassle-Free Switching Process",
              "Completely FREE service — 100% of the savings go to you",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-muted-foreground text-base">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-secondary/40 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-foreground mb-10 text-center">Our Business Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, description }, i) => (
              <Card key={i} className="rounded-2xl border-none shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/10 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-extrabold text-primary-foreground mb-4">Ready to Cut Your Business Bills?</h2>
          <p className="text-primary-foreground/80 mb-8">Get in touch today for a FREE consultation. No obligation, no hidden costs.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:07396843886">
              <Button className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-4 rounded-2xl shadow-lg">
                <Phone className="w-4 h-4 mr-2" /> 07396 843886
              </Button>
            </a>
            <a href="mailto:help-you@monergy.me.uk">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-2xl">
                <Mail className="w-4 h-4 mr-2" /> help-you@monergy.me.uk
              </Button>
            </a>
          </div>
          <Link to="/">
            <Button variant="ghost" className="text-primary-foreground hover:bg-white/10 font-semibold">← Back to Home</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
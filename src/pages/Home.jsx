import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";

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
    <div ref={ref} className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className || ''}`}>
      {children}
    </div>
  );
};

export default function Home() {
  const styles = `
    @keyframes floatA { 0%, 100% { transform: translateY(0) rotate(0deg) scale(1); } 50% { transform: translateY(-20px) rotate(5deg) scale(1.05); } }
    @keyframes floatB { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-15px) rotate(-5deg); } }
    @keyframes floatC { 0%, 100% { transform: translateX(0) translateY(0); } 50% { transform: translateX(15px) translateY(-10px); } }
    @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
    @keyframes gradient-x { 0%, 100% { background-size: 200% 200%; background-position: left center; } 50% { background-size: 200% 200%; background-position: right center; } }
    .glass-card { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.5); }
  `;

  return (
    <div className="bg-background selection:bg-accent selection:text-accent-foreground">
      <style>{styles}</style>
      <HeroSection />
      <AboutSection />
      <HouseholdBillsSection />
      <ServicesGrid />
      <CommercialSection />
      <OneBillSection />
      <TestimonialsSection />
      <ReadyToSaveSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden bg-gradient-to-br from-background via-secondary/40 to-accent/10">
      {/* Abstract Animated Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-accent/40 rounded-full blur-[100px] mix-blend-multiply pointer-events-none animate-[floatA_12s_ease-in-out_infinite]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/25 rounded-full blur-[80px] mix-blend-multiply pointer-events-none animate-[floatB_15s_ease-in-out_infinite_reverse]" />
      
      {/* Floating geometric particles */}
      <div className="absolute top-32 left-1/4 w-4 h-4 rounded-full bg-accent/40 animate-[floatC_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-primary/20 animate-[floatB_8s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 right-12 w-3 h-3 rounded-full bg-accent/60 animate-[floatA_7s_ease-in-out_infinite_reverse]" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-left"
          >
            <div className="bg-primary rounded-2xl p-6 mb-8 shadow-lg">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-6 border border-white/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Exclusive utility offers inside
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                Make Real Savings on your <br/>
                <span className="relative inline-block">
                  <span className="relative z-10 text-white/85">Home & Business</span>
                </span>{" "}
                bills
              </h1>
              
              <p className="text-white text-lg sm:text-xl mb-4 font-medium max-w-lg leading-relaxed">
                Start saving on your utilities – Get a tailored quote for home and commercial services today.
              </p>
              
              <p className="text-white/85 text-base mb-0 max-w-lg leading-relaxed">
                We have exclusive tailored offers for homeowners and business owners, ensuring immediate savings on energy, broadband, and mobile.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/HomeUtilities">
                <Button className="w-full sm:w-auto relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(var(--primary),0.3)] hover:-translate-y-1 transition-all duration-300 text-lg group">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                  Home Utilities
                </Button>
              </Link>
              <a href="#">
                <Button variant="outline" className="w-full sm:w-auto border-2 border-primary/20 text-primary bg-transparent hover:bg-primary/5 hover:border-primary/40 font-bold px-8 py-6 rounded-2xl transition-all duration-300 text-lg">
                  Commercial Utilities
                </Button>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }} 
            animate={{ opacity: 1, scale: 1, rotate: 0 }} 
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} 
            className="flex justify-center lg:justify-end relative"
          >
            <div className="w-[420px] h-[420px] rounded-full overflow-hidden border-4 border-primary/20 shadow-[0_0_80px_rgba(238,85,31,0.25)] animate-[floatA_8s_ease-in-out_infinite] flex-shrink-0">
              <img
                src="https://media.base44.com/images/public/69ddd901c27d9d1e2d1c93c9/84381965c_generated_image.png"
                alt="Cloud collage of money notes, mobile phones, appliances and water tap"
                className="w-full h-full object-cover"
                style={{ filter: "saturate(1.3) hue-rotate(240deg) brightness(1.05)" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <AnimatedElement>
      <section className="bg-background py-24 relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/30 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-8 tracking-tight">
            Save Big on Your Bills with{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              MonergyMe
            </span>{" "}
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">(authorised UW partner)</span>
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              MonergyMe (authorised UW partner) are Authorised Partners with two of the UK's most respected companies, giving homeowners and businesses access to a wide range of essential utilities and services under one roof. From energy and high-speed broadband to mobile plans, water, card payments and insurance — we cover everything needed to run your home or business efficiently.
            </p>
            <p>
              Backed by over 30 years of Customer Service expertise, we've built a solid reputation for honesty, reliability and genuinely helpful support. Every client receives personalised, impartial advice matched to their specific circumstances — and because our service is completely FREE, every penny of the savings goes straight back to you.
            </p>
          </div>
          <p className="text-foreground font-bold text-lg mt-10 inline-flex items-center gap-2">
            <span className="w-8 h-px bg-primary inline-block" />
            Choose an option below to discover exactly how much you could save with MonergyMe.
            <span className="w-8 h-px bg-primary inline-block" />
          </p>
        </div>
      </section>
    </AnimatedElement>
  );
}

function HouseholdBillsSection() {
  return (
    <AnimatedElement>
      <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 pt-24 pb-48 relative overflow-hidden rounded-t-[3rem]">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-accent/30 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[60px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 tracking-tight">Save on Household Bills</h2>
          <p className="text-muted-foreground text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Reduce what you spend each month on{" "}
            <span className="text-primary font-bold border-b-2 border-accent/50">energy</span>,{" "}
            <span className="text-primary font-bold border-b-2 border-accent/50">broadband</span> and{" "}
            <span className="text-primary font-bold border-b-2 border-accent/50">mobile</span> — and the more services you combine, the greater your overall monthly saving.
          </p>
          <Link to="/HomeUtilities">
            <Button className="relative overflow-hidden bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-10 py-6 rounded-2xl shadow-[0_8px_30px_rgba(var(--accent),0.2)] hover:shadow-[0_8px_30px_rgba(var(--accent),0.4)] hover:-translate-y-1 transition-all duration-300 text-lg group">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              Home Utilities
            </Button>
          </Link>
        </div>
      </section>
    </AnimatedElement>
  );
}

function ServicesGrid() {
  const services = [
    {
      img: "https://media.base44.com/images/public/69ddd901c27d9d1e2d1c93c9/9dd703b91_generated_image.png",
      alt: "Energy Icon",
      title: "Energy",
      description: "Secure competitive gas and electricity rates from top UK suppliers and beat rising energy costs for good.",
      label: "View Energy"
    },
    {
      img: "https://media.base44.com/images/public/69ddd901c27d9d1e2d1c93c9/77a22f0a1_generated_image.png",
      alt: "Broadband Icon",
      title: "Broadband",
      description: "Get superfast, reliable broadband from the UK's leading providers at genuinely great value prices.",
      label: "View Broadband"
    },
    {
      img: "https://media.base44.com/images/public/69ddd901c27d9d1e2d1c93c9/8ba042251_generated_image.png",
      alt: "Mobile Icon",
      title: "Mobile",
      description: "Find flexible SIM-only and mobile plans with unlimited data on the UK's strongest networks.",
      label: "View Mobile"
    }
  ];

  return (
    <section className="relative z-20 -mt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedElement key={service.title} delay={index * 150}>
              <div className="h-full group perspective-1000">
                <Card className="rounded-3xl bg-card border-none shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(var(--primary),0.15)] h-full transition-all duration-500 overflow-hidden transform group-hover:-translate-y-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-10 text-center flex flex-col items-center gap-6 h-full relative z-10">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/15 shadow-[0_0_40px_rgba(238,85,31,0.15)] group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                      <img src={service.img} alt={service.alt} className="w-full h-full object-cover" style={{ filter: "saturate(1.3) hue-rotate(240deg) brightness(1.05)" }} />
                    </div>
                    <h4 className="text-2xl font-bold text-foreground">{service.title}</h4>
                    <p className="text-muted-foreground text-base leading-relaxed flex-1">{service.description}</p>
                    <a href="#" className="w-full">
                      <Button variant="outline" className="w-full rounded-2xl py-6 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-all duration-300 group-hover:border-primary">
                        {service.label}
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommercialSection() {
  return (
    <AnimatedElement>
      <section className="bg-background py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 w-full flex justify-center relative">
              <div className="absolute inset-0 bg-secondary/30 rounded-full blur-[100px] -z-10" />
              <div className="w-[400px] h-[400px] rounded-full overflow-hidden border-4 border-primary/20 shadow-[0_0_80px_rgba(238,85,31,0.2)] animate-[floatA_8s_ease-in-out_infinite] hover:scale-105 transition-transform duration-700 flex-shrink-0">
                <img
                  alt="Cloud illustration of commercial utility savings"
                  src="https://media.base44.com/images/public/69ddd901c27d9d1e2d1c93c9/c876953f7_generated_image.png"
                  className="w-full h-full object-cover"
                  style={{ filter: "saturate(1.3) hue-rotate(240deg) brightness(1.05)" }}
                />
              </div>
            </div>
            <div className="flex-1 w-full">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-8 tracking-tight">Commercial Utilities</h3>
              <ul className="space-y-5 mb-10">
                {[
                  "All Your Essential Business Services Managed Simply Under One Roof",
                  "Tailored Commercial Utility Deals Negotiated Exclusively for Your Business",
                  "Reduce Overheads and Boost Profitability by Cutting Unnecessary Utility Spend",
                  "Access to a Wide Network of Trusted, Proven UK Suppliers",
                  "Fast, Smooth and Completely Hassle-Free Switching from Start to Finish"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-muted-foreground text-lg group">
                    <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/40 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                    </span>
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg">
                  Explore Commercial Offers
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </AnimatedElement>
  );
}

function OneBillSection() {
  return (
    <AnimatedElement>
      <section className="bg-gradient-to-br from-secondary/40 via-background to-accent/10 py-24 relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_hsl(var(--primary))_1px,_transparent_1px)] bg-[length:32px_32px] opacity-[0.03]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 order-2 lg:order-1 w-full">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold mb-6 border border-accent/20">
                Simplicity Guaranteed
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 tracking-tight">All Utilities on One Bill</h3>
              <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
                Bring your gas, electricity, broadband and mobile together under one simple monthly payment. No more chasing multiple providers or juggling payment dates — just one clear bill, one easy direct debit, and complete peace of mind.
              </p>
              <Link to="/HomeUtilities">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-6 rounded-2xl shadow-[0_8px_30px_rgba(var(--primary),0.2)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg">
                  View Home Utilities
                </Button>
              </Link>
            </div>
            <div className="flex-1 order-1 lg:order-2 w-full flex justify-center relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px] -z-10 animate-[floatB_10s_ease-in-out_infinite]" />
              <div className="w-[400px] h-[400px] rounded-full overflow-hidden border-4 border-primary/20 shadow-[0_0_80px_rgba(238,85,31,0.2)] animate-[floatB_9s_ease-in-out_infinite] hover:scale-[1.02] transition-transform duration-700 flex-shrink-0">
                <img
                  alt="Cloud illustration showing all utilities combined on one bill"
                  src="https://media.base44.com/images/public/69ddd901c27d9d1e2d1c93c9/c005c4382_generated_image.png"
                  className="w-full h-full object-cover"
                  style={{ filter: "saturate(1.3) hue-rotate(240deg) brightness(1.05)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedElement>
  );
}

function TestimonialsSection() {
  const benefits = [
    {
      icon: "💰",
      title: "More Spending Money",
      body: "Cutting your monthly bills with MonergyMe puts real cash back in your pocket every single month. Whether it's treating yourself to a meal out, new clothes or simply having a little extra breathing room, those savings add up faster than you'd expect."
    },
    {
      icon: "✈️",
      title: "Fund Your Next Holiday",
      body: "Imagine putting the money you save on bills towards a holiday you've been putting off. Many of our customers save enough in just a few months to cover a well-earned break for the whole family — without touching their regular budget."
    },
    {
      icon: "🏦",
      title: "Grow Your Savings",
      body: "Even small monthly savings can make a significant difference when put aside consistently. By reducing your utility bills through MonergyMe, you can start building a proper savings pot — giving you financial security and peace of mind for the future."
    },
    {
      icon: "☂️",
      title: "A Rainy Day Fund",
      body: "Life has a habit of throwing unexpected costs your way. Lower monthly outgoings mean you can gradually build up a financial buffer, so when the boiler breaks or the car needs a repair, you're covered — without stress or borrowing."
    },
    {
      icon: "🎓",
      title: "Invest in Your Family",
      body: "The money you save on bills could go towards what really matters — school trips, sports clubs, further education or simply more quality time together. MonergyMe helps you redirect money away from overpaid bills and towards the people you love."
    },
    {
      icon: "📈",
      title: "Pay Off Debt Faster",
      body: "Every pound saved on utilities is a pound that can go towards clearing a credit card, loan or mortgage overpayment. Customers who bundle their services with MonergyMe often find they're able to reduce their debt noticeably quicker — simply by paying less on bills they were already paying."
    },
  ];

  return (
    <AnimatedElement>
      <section className="bg-background py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h4 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">What Could You Do With the Money You Save?</h4>
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">MonergyMe (authorised UW partner) customers save hundreds of pounds every year. Here's what that could mean for you.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <AnimatedElement key={benefit.title} delay={i * 100}>
                <div className="glass-card rounded-2xl p-8 h-full flex flex-col gap-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-primary/10">
                  <div className="text-4xl">{benefit.icon}</div>
                  <h5 className="text-xl font-extrabold text-foreground">{benefit.title}</h5>
                  <p className="text-muted-foreground text-base leading-relaxed flex-1">{benefit.body}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
    </AnimatedElement>
  );
}

function ReadyToSaveSection() {
  return (
    <AnimatedElement>
      <section className="bg-primary/5 py-24 relative overflow-hidden rounded-t-[3rem] mt-12">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/35 rounded-full blur-[100px] pointer-events-none animate-[floatA_10s_ease-in-out_infinite]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 w-full flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-75 group-hover:scale-90 transition-transform duration-700" />
                <div className="w-[400px] h-[400px] rounded-full overflow-hidden border-4 border-primary/20 shadow-[0_0_80px_rgba(238,85,31,0.2)] animate-[floatB_8s_ease-in-out_infinite] relative z-10 flex-shrink-0">
                  <img
                    src="https://media.base44.com/images/public/69ddd901c27d9d1e2d1c93c9/b4d07a133_generated_image.png"
                    alt="Cloud collage of savings illustrations"
                    className="w-full h-full object-cover"
                    style={{ filter: "saturate(1.3) hue-rotate(240deg) brightness(1.05)" }}
                  />
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <h3 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-8 tracking-tight">
                Ready to start{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  saving?
                </span>
              </h3>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-10">
                <p>
                  For home services, click Home Utilities below to book your FREE 45-minute consultation at a time that suits you — or jump straight in and generate a personalised quote for your household.
                </p>
                <p>
                  For business enquiries, select Commercial Utilities below and we'll get back to you with a tailored proposal.
                </p>
                <p className="font-medium text-foreground">
                  Let MonergyMe (authorised UW partner) simplify your bills, cut your costs and do the hard work for you. Our one-stop service is entirely free — and we genuinely can't wait to help you start saving!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/HomeUtilities" className="w-full sm:w-auto">
                  <Button className="w-full relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-6 rounded-2xl shadow-[0_8px_30px_rgba(var(--primary),0.2)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg group">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                    Home Utilities
                  </Button>
                </Link>
                <a href="#" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full border-2 border-primary/20 text-primary bg-background hover:bg-primary hover:border-primary hover:text-primary-foreground font-bold px-8 py-6 rounded-2xl transition-all duration-300 text-lg">
                    Commercial Utilities
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedElement>
  );
}
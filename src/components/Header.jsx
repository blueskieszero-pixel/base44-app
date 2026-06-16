import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, PiggyBank } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-background/95 backdrop-blur-md border-b border-border"}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo — sterling sign + wordmark */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0 group">
          <PiggyBank className="w-9 h-9 animate-[floatA_6s_ease-in-out_infinite]" strokeWidth={1.75} style={{color: "#6B0FCA", filter: "drop-shadow(0 2px 6px rgba(233,30,140,0.4))"}} />
          <span className="font-extrabold text-xl leading-tight text-primary">
            MonergyMe <span className="text-xs font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">(authorised UW partner)</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-1">
          <Link to="/" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary">
            Home
          </Link>
          <Link to="/HomeUtilities" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary">
            Home Utilities
          </Link>
          <Link to="/Contact" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary">Contact</Link>
        </nav>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild className="sm:hidden">
            <Button variant="ghost" size="icon" className="text-foreground">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background w-72">
            <div className="flex items-center gap-2 mb-8 mt-2">
          <PiggyBank className="w-8 h-8 animate-[floatA_6s_ease-in-out_infinite]" strokeWidth={1.75} style={{color: "#6B0FCA", filter: "drop-shadow(0 2px 6px rgba(233,30,140,0.4))"}}/>
              <span className="font-extrabold text-base text-primary">MonergyMe <span className="text-xs font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">(authorised UW partner)</span></span>
            </div>
            <nav className="flex flex-col gap-1">
              <Link to="/" className="px-4 py-3 text-foreground font-medium hover:bg-secondary hover:text-primary rounded-xl transition-colors">Home</Link>
              <Link to="/HomeUtilities" className="px-4 py-3 text-foreground font-medium hover:bg-secondary hover:text-primary rounded-xl transition-colors">Home Utilities</Link>
              <Link to="/Contact" className="px-4 py-3 text-foreground font-medium hover:bg-secondary hover:text-primary rounded-xl transition-colors">Contact</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

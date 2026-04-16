import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const posts = [
  {
    date: "February 2026",
    category: "UW News",
    title: "67% of Brits Don't Fully Understand Their Bills — UW's Research Reveals the Scale of the Problem",
    excerpt: "New Utility Warehouse research shows that 67% of Brits do not fully understand their bills, while 70% don't read them at all. The research also found that 55% of people stay with providers they believe treat them badly — simply because switching feels too complicated. UW's new Utilit-Eye Test campaign aims to help households look at their utilities differently.",
    link: "https://businessopportunityplus.co.uk/utility-warehouse-media-press/utility-warehouse-bills-made-simpler/",
  },
  {
    date: "January 2025",
    category: "Awards",
    title: "UW Named Which? Recommended Provider for Energy — Scoring 5 Stars for Customer Service",
    excerpt: "Utility Warehouse has been named a Which? Recommended Provider for Energy Companies 2025, scoring five out of five stars for overall customer service and accuracy of payments. UW is one of only three companies in the UK to make the list. CEO Stuart Burnett said: 'We're proud to champion a better way and offer a real alternative to the status quo.'",
    link: "https://www.directsellingnews.com/2025/01/17/uw-rated-recommended-provider-by-which/",
  },
  {
    date: "November 2025",
    category: "Growth",
    title: "Utility Warehouse: Bundling Its Way to Scale With 1.4 Million Customers and Counting",
    excerpt: "Telecom Plus (Utility Warehouse) reported customer numbers rising by 223,000 in just six months — a 19% increase — taking its base to over 1.386 million households. Analysts describe the model as 'behaving more like a discount membership club than a traditional utility', with customers benefiting from lower bills the more services they bundle together.",
    link: "https://www.thearmchairtrader.com/uk-shares/utility-warehouse-bundling-its-way-to-scale/",
  },
  {
    date: "December 2025",
    category: "Energy",
    title: "UW in Talks to Acquire OVO's Retail Energy Business — What It Means for Customers",
    excerpt: "UK utility group Telecom Plus (Utility Warehouse) has been reported to be in talks to acquire the retail energy business of OVO, one of the UK's largest energy suppliers. If completed, the deal would significantly expand UW's customer base and strengthen its position as a leading multi-service utility provider in the UK.",
    link: "https://www.reuters.com/business/energy/uks-telecom-plus-eyes-acquisition-ovos-retail-energy-unit-ft-reports-2025-12-05/",
  },
  {
    date: "September 2025",
    category: "Mobile",
    title: "UW Unveils 'UK's Most Competitive Mobile Offer' at Amplify Partner Event",
    excerpt: "At its annual 'Amplify' partner event in September 2025, Utility Warehouse unveiled what it is billing as the UK's most competitive mobile offering. The new mobile plans are designed to make bundling even more attractive for households, adding another powerful cross-sell lever as UW continues its drive towards two million customers.",
    link: "https://www.thearmchairtrader.com/uk-shares/utility-warehouse-bundling-its-way-to-scale/",
  },
  {
    date: "2025",
    category: "Awards",
    title: "Best Value for Money — UW Wins at the Uswitch Energy Awards for the 9th Year Running",
    excerpt: "Utility Warehouse has been recognised as Best Value for Money at the Uswitch Energy Awards for the ninth consecutive year. The award reflects UW's consistent delivery of competitive prices combined with outstanding customer service — a combination that sets it apart in a crowded and often frustrating utilities market.",
    link: "https://uw.co.uk/",
  },
];

const categoryColors = {
  Energy: "bg-primary/10 text-primary",
  Broadband: "bg-accent/10 text-accent",
  Mobile: "bg-orange-100 text-orange-700",
  "UW News": "bg-purple-100 text-purple-700",
  Awards: "bg-pink-100 text-pink-700",
  Growth: "bg-emerald-100 text-emerald-700",
  Business: "bg-red-100 text-red-700",
};

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary relative overflow-hidden min-h-[35vh] flex items-center">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-primary-foreground mb-3">Tips & Insights</h1>
            <p className="text-primary-foreground/80 text-lg max-w-xl">
              Expert advice to help you save money on your home and business utilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08, duration: 0.5 }}>
                <Card className="h-full rounded-2xl border-none shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6 flex flex-col gap-3 h-full">
                    <div className="flex items-center justify-between">
                      <Badge className={`rounded-full px-3 text-xs font-semibold border-0 ${categoryColors[post.category] || "bg-secondary text-foreground"}`}>
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="font-extrabold text-foreground text-lg leading-snug">{post.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{post.excerpt}</p>
                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold text-sm mt-2 hover:underline cursor-pointer">Read more →</a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-secondary/40 py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-extrabold text-foreground mb-3">Ready to Start Saving?</h2>
          <p className="text-muted-foreground mb-6">Let MonergyMe (authorised UW partner) find you the best deals — completely free.</p>
          <Link to="/">
            <span className="inline-block bg-primary text-primary-foreground font-bold px-8 py-3 rounded-2xl shadow hover:bg-primary/90 transition-all hover:-translate-y-0.5 cursor-pointer">
              Back to Home
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary relative overflow-hidden min-h-[35vh] flex items-center">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-primary-foreground mb-3">Get in Touch</h1>
            <p className="text-primary-foreground/80 text-lg max-w-xl">
              Ready to start saving with MonergyMe (authorised UW partner)? We'd love to hear from you. Book a FREE consultation or just drop us a message.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-extrabold text-foreground mb-8">Contact Details</h2>
              <div className="space-y-6 mb-10">
                <a href="tel:07396843886" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground">07396 843886</p>
                  </div>
                </a>
                <a href="mailto:help-you@monergy.me.uk" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">help-you@monergy.me.uk</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Hours</p>
                    <p className="text-muted-foreground">Mon–Fri: 9am – 6pm</p>
                    <p className="text-muted-foreground">Sat: 10am – 2pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Based in</p>
                    <p className="text-muted-foreground">Wales, United Kingdom</p>
                  </div>
                </div>
              </div>
              <Card className="rounded-2xl border-none bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">FREE 45-Minute Consultation</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Book a completely free, no-obligation consultation and we'll review your current bills to find you the best deals available.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-extrabold text-foreground mb-8">Send Us a Message</h2>
              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="rounded-2xl bg-primary/5 border border-primary/20 p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">Thanks for getting in touch. We'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { label: "Full Name", key: "name", type: "text", placeholder: "Your name" },
                    { label: "Email Address", key: "email", type: "email", placeholder: "your@email.com" },
                    { label: "Phone Number", key: "phone", type: "tel", placeholder: "07..." },
                  ].map(({ label, key, type, placeholder }) => (
                    <div key={key}>
                      <label className="block text-sm font-semibold text-foreground mb-1">{label}</label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={form[key]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us how we can help..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-4 rounded-2xl text-base">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
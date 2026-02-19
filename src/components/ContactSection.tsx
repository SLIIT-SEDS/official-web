import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Instagram, Linkedin, Facebook, Github } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.84a4.84 4.84 0 0 1-1-.15Z" />
    </svg>
  ), href: "#", label: "TikTok" },
  { icon: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ), href: "#", label: "X" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  const marqueeText = "SEDS SLIIT → Students for the Exploration & Development of Space → ";
  const repeated = Array(6).fill(marqueeText).join("");

  return (
    <section id="contact" className="bg-background">
      <div className="w-full overflow-hidden border-y border-border bg-card/50 backdrop-blur-sm">
        <div className="flex animate-marquee-left whitespace-nowrap py-3">
          <span className="font-display text-sm sm:text-base tracking-[0.2em] uppercase text-muted-foreground">{repeated}</span>
          <span className="font-display text-sm sm:text-base tracking-[0.2em] uppercase text-muted-foreground">{repeated}</span>
          <span className="font-display text-sm sm:text-base tracking-[0.2em] uppercase text-muted-foreground">{repeated}</span>
        </div>
      </div>
      <div className="container mx-auto px-4 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-foreground text-glow mb-4 text-center"
        >
          Reach Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-muted-foreground text-center max-w-xl mx-auto mb-16"
        >
          Have questions? Want to collaborate? Reach out to us.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="First Name" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} required maxLength={100} className="bg-card border-border" />
              <Input placeholder="Last Name" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} required maxLength={100} className="bg-card border-border" />
            </div>
            <Input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required maxLength={255} className="bg-card border-border" />
            <Input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={20} className="bg-card border-border" />
            <textarea placeholder="Your Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={5} maxLength={1000} className="flex w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none" />
            <Button type="submit" className="w-full rounded-full">Send Message</Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">Email</h4>
                <p className="text-muted-foreground text-sm">sliitseds@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">Phone</h4>
                <p className="text-muted-foreground text-sm">+9478 9152 816</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">Address</h4>
                <p className="text-muted-foreground text-sm">SLIIT Malabe Campus, New Kandy Road, Malabe</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-24 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">© 2026 SEDS SLIIT. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

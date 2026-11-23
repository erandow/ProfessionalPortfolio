import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Copy, Check, Send, Sparkles, Briefcase, Clock, Calendar } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export default function IndustryContactSection() {
  const { toast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("erfanasadi.ce@gmail.com");
      setCopiedEmail(true);
      toast({
        title: "Email Copied to Clipboard",
        description: "erfanasadi.ce@gmail.com is ready to paste.",
      });
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Inquiry Submitted Successfully",
        description: "Thank you for reaching out! Erfan will get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", company: "", role: "", message: "" });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-3 border border-emerald-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Open for Industry Opportunities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Let's Build Scalable AI Systems Together
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3">
            I am currently considering <strong className="text-foreground">Senior AI Engineer</strong>, <strong className="text-foreground">AI Tech Lead</strong>, and <strong className="text-foreground">Full-Stack AI Architect</strong> positions. Open to full-time remote contracts worldwide or international relocation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Recruiter Contacts (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-7 rounded-2xl bg-card border border-border shadow-sm space-y-5">
              <h3 className="font-bold text-lg text-foreground">Direct Hiring Channels</h3>

              <div className="space-y-4 text-sm">
                {/* Email with copy button */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-muted/50 border border-border/60">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-muted-foreground">Direct Email</p>
                      <a href="mailto:erfanasadi.ce@gmail.com" className="font-semibold text-foreground hover:text-primary transition-colors text-xs sm:text-sm">
                        erfanasadi.ce@gmail.com
                      </a>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={handleCopyEmail}
                    className="h-8 px-2 text-xs"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </Button>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-muted/50 border border-border/60">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground">Phone / WhatsApp</p>
                    <a href="tel:+989120560867" className="font-semibold text-foreground hover:text-primary transition-colors text-xs sm:text-sm">
                      +98 912 056 0867
                    </a>
                  </div>
                </div>

                {/* Response SLA */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-muted/50 border border-border/60">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground">Response Window</p>
                    <p className="font-medium text-foreground text-xs sm:text-sm">
                      Guaranteed reply within 24 hours
                    </p>
                  </div>
                </div>

                {/* Location & Relocation */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-muted/50 border border-border/60">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground">Location & Mobility</p>
                    <p className="font-medium text-foreground text-xs sm:text-sm">
                      Tehran, Iran • Remote Worldwide • Ready to Relocate
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Profiles */}
              <div className="pt-4 border-t border-border/60">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Professional Networks
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="outline" asChild className="text-xs h-8 gap-1.5 flex-1">
                    <a href="https://www.linkedin.com/in/erandow/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                      LinkedIn Profile
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild className="text-xs h-8 gap-1.5 flex-1">
                    <a href="https://github.com/erandow" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="w-3.5 h-3.5" />
                      GitHub Profile
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Fast Recruiting Inquiry Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-7 sm:p-9 rounded-2xl bg-card border border-border shadow-sm">
              <h3 className="font-bold text-lg text-foreground mb-1">Schedule an Interview / Inquiry</h3>
              <p className="text-xs text-muted-foreground mb-5">
                Drop your role requirements or interview invitation below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-xs font-medium">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="text-xs sm:text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs font-medium">Work Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="company" className="text-xs font-medium">Company / Startup</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="e.g. Stripe / Anthropic / AI Lab"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="text-xs sm:text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="role" className="text-xs font-medium">Role / Position Title</Label>
                    <Input
                      id="role"
                      name="role"
                      placeholder="Senior AI Engineer / AI Tech Lead"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-xs font-medium">Message / Position Overview</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about the engineering team, tech stack, and scope of the role..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="text-xs sm:text-sm"
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full text-xs font-medium gap-1.5 h-10 shadow-sm">
                  <Send className="w-3.5 h-3.5" />
                  {isSubmitting ? "Submitting Inquiry..." : "Send Opportunity Inquiry"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

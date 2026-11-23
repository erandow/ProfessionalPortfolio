import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Copy, Check, Send, Sparkles, GraduationCap, Briefcase } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("erfanasadi.ce@gmail.com");
      setCopiedEmail(true);
      toast({
        title: "Email Copied",
        description: "erfanasadi.ce@gmail.com copied to clipboard.",
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

    // Simulate sending message or mailto link
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Received",
        description: "Thank you for reaching out! You can also email directly at erfanasadi.ce@gmail.com.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Opportunities & Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3">
            I am actively seeking PhD opportunities in Computer Science / AI and Senior AI / Research Engineering positions. I am also open to research collaborations and academic discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Contact Card */}
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm space-y-5">
              <h3 className="font-bold text-lg text-foreground">Direct Contact</h3>

              <div className="space-y-4 text-sm">
                {/* Email with copy button */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-muted/50 border border-border/60">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-muted-foreground">Email Address</p>
                      <a href="mailto:erfanasadi.ce@gmail.com" className="font-medium text-foreground hover:text-primary transition-colors text-xs sm:text-sm">
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

                {/* Location */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border/60">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground text-xs sm:text-sm">
                      Tehran, Iran (Open to Relocation & Remote)
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border/60">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground">Availability</p>
                    <p className="font-medium text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm">
                      Available for PhD Admission (Fall 2025/2026) & Industry Roles
                    </p>
                  </div>
                </div>
              </div>

              {/* Social / Profiles */}
              <div className="pt-4 border-t border-border/60">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Online Profiles
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="outline" asChild className="text-xs h-8 gap-1.5">
                    <a href="https://github.com/erandow" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild className="text-xs h-8 gap-1.5">
                    <a href="https://www.linkedin.com/in/erandow/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <h3 className="font-bold text-lg text-foreground mb-4">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-xs font-medium">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="e.g. Prof. Alan Turing / Hiring Team"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="text-xs sm:text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs font-medium">Your Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="alan@cs.stanford.edu"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="subject" className="text-xs font-medium">Subject / Topic</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="PhD Opportunity / Research Collaboration / Senior AI Role"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="text-xs sm:text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-xs font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Please include details about the lab, project, or role..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="text-xs sm:text-sm"
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full text-xs font-medium gap-1.5 h-10">
                  <Send className="w-3.5 h-3.5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

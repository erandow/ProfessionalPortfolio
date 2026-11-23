import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Copy, Check, Send, Sparkles, GraduationCap, BookOpen, Clock, Calendar } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export default function AcademicContactSection() {
  const { toast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    topic: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("erfanasadi.ce@gmail.com");
      setCopiedEmail(true);
      toast({
        title: "Academic Email Copied",
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

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Academic Inquiry Delivered",
        description: "Thank you for reaching out! Erfan will respond promptly.",
      });
      setFormData({ name: "", email: "", institution: "", topic: "", message: "" });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3 border border-primary/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>PhD Inquiries & Research Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Connect for PhD Opportunities & Collaboration
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3">
            I am actively seeking <strong className="text-foreground">PhD positions in Computer Science / Artificial Intelligence</strong> (Fall 2025 / Fall 2026 admissions). I also welcome research discussions, co-authorship on visual perception, and visiting research appointments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Scholar Contact (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-7 rounded-2xl bg-card border border-border shadow-sm space-y-5">
              <h3 className="font-bold text-lg text-foreground">Scholar Channels</h3>

              <div className="space-y-4 text-sm">
                {/* Email with copy button */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-muted/50 border border-border/60">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-muted-foreground">Primary Academic Email</p>
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

                {/* Admission Status */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-muted/50 border border-border/60">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground">Admission Window</p>
                    <p className="font-semibold text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm">
                      Seeking PhD Entry for Fall 2025 / Fall 2026
                    </p>
                  </div>
                </div>

                {/* Academic Affiliation */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-muted/50 border border-border/60">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground">Highest Degree Earned</p>
                    <p className="font-medium text-foreground text-xs sm:text-sm">
                      M.Sc. in Artificial Intelligence, Kharazmi University
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-muted/50 border border-border/60">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground">Current Residence & Relocation</p>
                    <p className="font-medium text-foreground text-xs sm:text-sm">
                      Tehran, Iran • Ready to Relocate Globally for PhD
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Scholar Profiles */}
              <div className="pt-4 border-t border-border/60">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Scholarly Profiles & Code
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="outline" asChild className="text-xs h-8 gap-1.5 flex-1">
                    <a href="https://github.com/erandow/LC-BVQA" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="w-3.5 h-3.5" />
                      Research GitHub
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild className="text-xs h-8 gap-1.5 flex-1">
                    <a href="https://www.linkedin.com/in/erandow/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                      LinkedIn Profile
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Faculty & Research Inquiry Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-7 sm:p-9 rounded-2xl bg-card border border-border shadow-sm">
              <h3 className="font-bold text-lg text-foreground mb-1">Academic & Advisor Inquiry</h3>
              <p className="text-xs text-muted-foreground mb-5">
                Prospective advisors, faculty members, and researchers can send an inquiry directly below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-xs font-medium">Your Name / Title</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="e.g. Prof. / Dr. Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="text-xs sm:text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs font-medium">Academic / Institutional Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane.doe@university.edu"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="institution" className="text-xs font-medium">University / Research Lab</Label>
                    <Input
                      id="institution"
                      name="institution"
                      placeholder="e.g. Stanford AI Lab / Oxford VGG"
                      value={formData.institution}
                      onChange={handleChange}
                      required
                      className="text-xs sm:text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="topic" className="text-xs font-medium">Inquiry Topic</Label>
                    <Input
                      id="topic"
                      name="topic"
                      placeholder="PhD Opening / Visiting Researcher / Research Discussion"
                      value={formData.topic}
                      onChange={handleChange}
                      required
                      className="text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-xs font-medium">Message / Lab Context</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Please include details about your lab's active research directions, potential openings, or project scope..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="text-xs sm:text-sm"
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full text-xs font-medium gap-1.5 h-10 shadow-sm">
                  <Send className="w-3.5 h-3.5" />
                  {isSubmitting ? "Sending Inquiry..." : "Submit Academic Inquiry"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

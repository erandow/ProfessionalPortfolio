import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-20 pt-28 scroll-mt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
                <span className="mr-2">👋</span> Hello, I'm
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <span className="block">Erfan Asadi</span>
              <span className="block mt-2">
                <span className="text-primary">Developer</span> &{" "}
                <span className="text-purple-500">AI Engineer</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl opacity-80 max-w-lg">
              Building innovative solutions at the intersection of web
              development and artificial intelligence.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transition-all"
                asChild
              >
                <a href="#experience">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:border-primary/40 hover:-translate-y-1 transition-all"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-6">
              <SocialIcon href="https://github.com">
                <FaGithub size={20} />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com">
                <FaLinkedin size={20} />
              </SocialIcon>
              <SocialIcon href="https://twitter.com">
                <FaTwitter size={20} />
              </SocialIcon>
              <SocialIcon href="mailto:contact@example.com">
                <FaEnvelope size={20} />
              </SocialIcon>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
              alt="Modern web development workspace"
              className="rounded-2xl shadow-2xl object-cover w-full h-[450px]"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                    <code className="text-sm">&lt;/&gt;</code>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                    <FaGithub className="text-sm" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
                    <FaTwitter className="text-sm" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium">Full Stack + AI</div>
                  <div className="text-xs text-muted-foreground">
                    5+ Years Experience
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface SocialIconProps {
  href: string;
  children: React.ReactNode;
}

function SocialIcon({ href, children }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl hover:text-primary transition-colors"
      aria-label="Social media profile"
    >
      {children}
    </a>
  );
}

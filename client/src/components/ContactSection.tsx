import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RectangleEllipsis, MapPinIcon, BriefcaseIcon } from "lucide-react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMedium,
} from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useLanguageRoute } from "@/hooks/use-language-route";

export default function ContactSection() {
  const { t } = useTranslation();
  const { isRTL } = useLanguageRoute();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Form submitted! (This is a demo)");
  };

  return (
    <section id="contact" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-lg opacity-80">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="name">{t("contact.fullName")}</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">{t("contact.email")}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">{t("contact.message")}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  {t("contact.send")}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <Card className="h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-4">
                    {t("contact.getInTouch")}
                  </h3>
                  <div className="space-y-4 mb-6">
                    <ContactItem
                      icon={<RectangleEllipsis className="h-5 w-5" />}
                      title={t("contact.email2")}
                    >
                      <a
                        href="mailto:erfan.asadi@example.com"
                        className="hover:text-primary transition-colors"
                      >
                        erfan.asadi@example.com
                      </a>
                    </ContactItem>

                    <ContactItem
                      icon={<MapPinIcon className="h-5 w-5" />}
                      title="Location"
                    >
                      <span>San Francisco, California</span>
                    </ContactItem>

                    <ContactItem
                      icon={<BriefcaseIcon className="h-5 w-5" />}
                      title="Work Availability"
                    >
                      <span>
                        Available for freelance and full-time opportunities
                      </span>
                    </ContactItem>
                  </div>

                  <div className="mt-auto">
                    <h4 className="font-medium mb-3">Connect with me</h4>
                    <div className="flex space-x-3">
                      <SocialButton href="https://github.com">
                        <FaGithub className="h-5 w-5" />
                      </SocialButton>
                      <SocialButton href="https://linkedin.com">
                        <FaLinkedin className="h-5 w-5" />
                      </SocialButton>
                      <SocialButton href="https://twitter.com">
                        <FaTwitter className="h-5 w-5" />
                      </SocialButton>
                      <SocialButton href="https://medium.com">
                        <FaMedium className="h-5 w-5" />
                      </SocialButton>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function ContactItem({ icon, title, children }: ContactItemProps) {
  return (
    <div className="flex items-start">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary">
        {icon}
      </div>
      <div>
        <div className="text-sm text-muted-foreground">{title}</div>
        <div>{children}</div>
      </div>
    </div>
  );
}

interface SocialButtonProps {
  href: string;
  children: React.ReactNode;
}

function SocialButton({ href, children }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
    >
      {children}
    </a>
  );
}

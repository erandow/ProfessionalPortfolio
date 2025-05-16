import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useLanguageRoute } from "@/hooks/use-language-route";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
}

export default function TestimonialsSection() {
  const { t } = useTranslation();
  const { isRTL } = useLanguageRoute();
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "Erfan is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving skills make him stand out from others I've worked with.",
      author: "Sarah Johnson",
      position: "CTO",
      company: "TechNova Solutions",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5
    },
    {
      id: 2,
      content: "I had the pleasure of collaborating with Erfan on a complex AI project. His expertise in machine learning and ability to explain complex concepts clearly were invaluable to our success.",
      author: "Michael Brown",
      position: "AI Research Lead",
      company: "DataSphere Analytics",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5
    },
    {
      id: 3,
      content: "Erfan's academic contributions to our research team were outstanding. His papers demonstrate not only technical excellence but also a deep understanding of practical applications.",
      author: "Dr. Emily Chen",
      position: "Professor of Computer Science",
      company: "University of Toronto",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 5
    },
    {
      id: 4,
      content: "Working with Erfan on our web platform redesign was a fantastic experience. He combines creative design thinking with solid technical implementation. Highly recommended!",
      author: "David Wilson",
      position: "Product Manager",
      company: "InnovateTech",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(() => {
        nextTestimonial();
      }, 6000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoplay, testimonials.length]);

  const handleManualNavigation = () => {
    // Stop autoplay when user manually navigates
    setAutoplay(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("testimonials.title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="overflow-hidden px-4">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-background rounded-lg p-8 shadow-sm border relative">
                      <div className="mb-6">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`inline-block w-5 h-5 ${
                              i < testimonial.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-lg mb-6 relative">
                        <span className="text-4xl text-primary opacity-20 absolute -top-4 -left-2">"</span>
                        {testimonial.content}
                        <span className="text-4xl text-primary opacity-20 absolute -bottom-10 -right-2">"</span>
                      </p>
                      <div className="flex items-center mt-6">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.author}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 rounded-full bg-background shadow-sm hover:bg-primary/10"
              onClick={() => {
                prevTestimonial();
                handleManualNavigation();
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 rounded-full bg-background shadow-sm hover:bg-primary/10"
              onClick={() => {
                nextTestimonial();
                handleManualNavigation();
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  handleManualNavigation();
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
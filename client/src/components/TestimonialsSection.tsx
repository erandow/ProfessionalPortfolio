import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "Erfan is one of the most hardworking, dedicated, and technically skilled doubles partners for everyone. His ability in web, AI, and being a programmer is quite astonishing. The set of skills is enough to be a nightmare for bugs. Being an excellent tutor, a developer, and a student is not easy, but he can do them all perfectly, which shows that he is multi-task. I appreciate him because he chose a cut edge technology thesis, and it shows he is brave and futuristic. It's my pleasure to recommend Erfan to everyone.",
      author: "Hossein Saberi",
      position: "Embedded software engineer",
      company: "Alten Italia",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHvXNaAaQ6U1A/profile-displayphoto-shrink_200_200/B4DZQnig_rHYAY-/0/1735830147650?e=1753315200&v=beta&t=q10goxedULNQQUZTNt5RZxMpZOG9fpfoap44oGs9nuw",
      rating: 5
    },
    {
      id: 2,
      content: `When it comes to facing an issue methodically and with great persistence, I have always relayed on Erfan. We have been working for about 1.5 years, and in this short time, I have seen Erfan's ability to self educate, self-organize and pull double his weight when it comes to it.
                I personally have never had a problem with him when it comes to delegating something, it has been proven to me times and times that he takes his duties seriously and gives it as much as he is able. I also have great respect for those who continue to learn and never assume mastery; suffice to say Erfan is a lifelong learner if I've ever seen one. 
                In a short time, he was able to become an essential and powerful member of the team. I also appreciate his attitude in helping others and training the junior members of the team when he can.`,
      author: "Iman Akrami",
      position: "Tech Lead and Web Developer",
      company: "Avid Arvand",
      avatar: "https://media.licdn.com/dms/image/v2/C4E03AQGIUH-pzvQzzA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516794374479?e=1753315200&v=beta&t=IFKsmMz8OVLt_K8Q_x3TfAt9EK-iQLid5jMDpXBDUC4",
      rating: 5
    },
    {
      id: 3,
      content: "Erfan is a hard-worker knowing exactly what he wants to do and a fast-learner person. He loves his field of study and has been always pursuing his goals. He also has a good influence on people around him.",
      author: "Amirmahdi Khosravi Tabrizi",
      position: "Founder",
      company: "PathSight Learning",
      avatar: "https://media.licdn.com/dms/image/v2/D4E35AQFXIOSVdnusWg/profile-framedphoto-shrink_200_200/B4EZZ.ZWhWHoAY-/0/1745877297457?e=1748282400&v=beta&t=El6pjy3wu3wfq4-4w73hCMggljP2W_0-Vv4N6umSaTw",
      rating: 5
    },
    {
      id: 4,
      content: `From a teamwork point of view, it has been a blast working with him. Never once have we had an argument about something that wasn't purely technical. By which I mean he never takes criticism and notes personally and has the ability to listen and respond, and if necessary, self adjust.
                He is also friendly and very fun to work with. Someone whom you can talk to within a workplace is a rare phenomenon and Erfan is definitely it.
                All in all, Any project or team would be lucky to have him. I certainly look forward to working with him in the future.`,
      author: "Iman Akrami",
      position: "Tech Lead and Web Developer",
      company: "Avid Arvand",
      avatar: "https://media.licdn.com/dms/image/v2/C4E03AQGIUH-pzvQzzA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516794374479?e=1753315200&v=beta&t=IFKsmMz8OVLt_K8Q_x3TfAt9EK-iQLid5jMDpXBDUC4",
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
                className="flex items-center transition-transform duration-500 ease-in-out"
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
                            className={`inline-block w-5 h-5 ${i < testimonial.rating
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
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${index === activeIndex ? "bg-primary" : "bg-muted-foreground/30"
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
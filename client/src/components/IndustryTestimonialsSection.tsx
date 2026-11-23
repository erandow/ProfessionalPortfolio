import { motion } from "framer-motion";
import { Quote, Building2, CheckCircle2 } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
  relation: string;
}

export default function IndustryTestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content:
        "Erfan is one of the most hardworking, dedicated, and technically skilled doubles partners for everyone. His ability in web, AI, and being a programmer is quite astonishing. The set of skills is enough to be a nightmare for bugs. Being an excellent tutor, a developer, and a student is not easy, but he can do them all perfectly. It's my pleasure to recommend Erfan to everyone.",
      author: "Hossein Saberi",
      position: "Embedded Software Engineer",
      company: "Alten Italia",
      relation: "Colleague & Co-Researcher",
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQHvXNaAaQ6U1A/profile-displayphoto-shrink_200_200/B4DZQnig_rHYAY-/0/1735830147650?e=1753315200&v=beta&t=q10goxedULNQQUZTNt5RZxMpZOG9fpfoap44oGs9nuw",
    },
    {
      id: 2,
      content:
        "When it comes to facing an issue methodically and with great persistence, I have always relied on Erfan. We worked together for 1.5+ years, and I have seen Erfan's ability to self-educate, self-organize, and pull double his weight. I have great respect for those who continue to learn and never assume mastery; Erfan is a lifelong learner who became an essential and powerful member of our team.",
      author: "Iman Akrami",
      position: "Tech Lead and Web Developer",
      company: "Avid Arvand Technologies",
      relation: "Direct Engineering Manager",
      avatar:
        "https://media.licdn.com/dms/image/v2/C4E03AQGIUH-pzvQzzA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516794374479?e=1753315200&v=beta&t=IFKsmMz8OVLt_K8Q_x3TfAt9EK-iQLid5jMDpXBDUC4",
    },
    {
      id: 3,
      content:
        "Erfan is a hard worker knowing exactly what he wants to do and a fast-learner person. He loves his field of study and has been always pursuing his goals with tenacity. He also has a tremendously positive and inspiring influence on the engineers around him.",
      author: "Amirmahdi Khosravi Tabrizi",
      position: "Founder & CEO",
      company: "PathSight Learning",
      relation: "Collaborator & Founder",
      avatar:
        "https://media.licdn.com/dms/image/v2/D4E35AQFXIOSVdnusWg/profile-framedphoto-shrink_200_200/B4EZZ.ZWhWHoAY-/0/1745877297457?e=1748282400&v=beta&t=El6pjy3wu3wfq4-4w73hCMggljP2W_0-Vv4N6umSaTw",
    },
  ];

  return (
    <section id="recommendations" className="py-20 bg-muted/20 border-b border-border/40 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Colleague & Leadership Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Professional Recommendations
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3">
            What engineering leaders, tech leads, and founders have shared about my work ethic, leadership, and technical execution.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-7 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-primary/20 mb-3" />
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic mb-6">
                  "{test.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={test.avatar}
                    alt={test.author}
                    className="w-10 h-10 rounded-full object-cover border border-border"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div>
                    <h4 className="font-bold text-sm text-foreground leading-tight">
                      {test.author}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {test.position}, {test.company}
                    </p>
                    <p className="text-[10px] text-primary font-medium mt-0.5">
                      {test.relation}
                    </p>
                  </div>
                </div>

                <a
                  href="https://linkedin.com/in/erandow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-1"
                  title="View LinkedIn Endorsement"
                >
                  <FaLinkedin className="w-4 h-4 text-[#0A66C2]" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

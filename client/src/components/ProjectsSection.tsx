import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "AI-Powered E-commerce Recommendation Engine",
      description: "Built a sophisticated recommendation engine for an e-commerce platform using collaborative filtering and deep learning techniques to increase customer engagement and sales.",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      technologies: ["Python", "TensorFlow", "AWS", "MongoDB", "Flask"],
      demoUrl: "#",
      githubUrl: "#",
      period: "Jan 2022 - Apr 2022"
    },
    {
      id: 2,
      title: "Blockchain-based Supply Chain Tracking System",
      description: "Developed a blockchain solution for transparent supply chain management, enabling real-time tracking and verification of products from manufacturer to consumer.",
      image: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      technologies: ["Solidity", "Ethereum", "React", "Node.js", "Web3.js"],
      demoUrl: "#",
      githubUrl: "#",
      period: "Jun 2021 - Dec 2021"
    },
    {
      id: 3,
      title: "Real-time Collaboration Platform",
      description: "Created a collaborative workspace application with real-time document editing, video conferencing, and project management tools for remote teams.",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      technologies: ["React", "Socket.io", "WebRTC", "Express", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#",
      period: "Aug 2020 - Feb 2021"
    },
    {
      id: 4,
      title: "Sustainable Energy Monitoring Dashboard",
      description: "Designed and implemented a comprehensive dashboard for monitoring and optimizing energy consumption in commercial buildings using IoT sensors and predictive analytics.",
      image: "https://images.unsplash.com/photo-1566788270538-35f22eb5fb3d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      technologies: ["Vue.js", "D3.js", "Python", "IoT", "TensorFlow"],
      demoUrl: "#",
      githubUrl: "#",
      period: "Mar 2020 - Jul 2020"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical projects, highlighting my problem-solving skills and technological expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background rounded-lg overflow-hidden border shadow-sm h-full flex flex-col">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <ExternalLink className="h-4 w-4 mr-1" /> Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" className="bg-background/20 hover:bg-background/40 backdrop-blur-sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <Github className="h-4 w-4 mr-1" /> Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-xl">{project.title}</h3>
                  </div>
                  <div className="text-muted-foreground mb-4 text-sm flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.period}
                  </div>
                  <p className="text-muted-foreground mb-5">
                    {project.description}
                  </p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="font-normal">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
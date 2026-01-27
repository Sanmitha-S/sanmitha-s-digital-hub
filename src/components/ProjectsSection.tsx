import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Shield, Briefcase, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Certify",
    subtitle: "Blockchain-Based Digital Certificate Verification",
    description:
      "A secure, decentralized system for issuing and verifying tamper-proof digital certificates using blockchain technology. Ensures authenticity and eliminates certificate fraud.",
    tools: ["Blockchain", "JavaScript", "Web3", "React"],
    icon: Shield,
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Job Path",
    subtitle: "Job Portal Management System",
    description:
      "A comprehensive web portal connecting job seekers and recruiters with features like job listings, application tracking, resume management, and interview scheduling.",
    tools: ["React", "Node.js", "MongoDB", "REST API"],
    icon: Briefcase,
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    title: "Call Center Dashboard",
    subtitle: "Power BI Performance Analytics",
    description:
      "Real-time analytics dashboard for call center operations using Power BI with automated data refresh, KPI tracking, and executive-level insights for decision making.",
    tools: ["Power BI", "DAX", "SQL", "Excel"],
    icon: BarChart,
    color: "from-amber-500/20 to-amber-500/5",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in web development, blockchain, and data analytics
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group glass-card rounded-2xl overflow-hidden hover-lift"
            >
              {/* Project Header */}
              <div
                className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl bg-background/80 backdrop-blur-sm"
                >
                  <project.icon className="w-12 h-12 text-primary" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {project.subtitle}
                </p>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1 gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

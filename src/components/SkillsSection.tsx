import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Wrench, BarChart3 } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["C", "C++", "Java", "Python"],
  },
  {
    title: "Web Technologies",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL", "MongoDB"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Analytics & Visualization",
    icon: BarChart3,
    skills: ["Power BI", "Tableau", "Excel"],
    highlight: true,
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning programming, web development, databases, and analytics
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card rounded-2xl p-6 hover-lift ${
                category.highlight
                  ? "ring-2 ring-primary/50 bg-gradient-to-br from-primary/5 to-primary/10"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-3 rounded-xl ${
                    category.highlight
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10"
                  }`}
                >
                  <category.icon
                    className={`w-6 h-6 ${category.highlight ? "" : "text-primary"}`}
                  />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      category.highlight
                        ? "bg-primary/20 text-primary"
                        : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {[
            { label: "Programming Languages", value: "4+" },
            { label: "Web Technologies", value: "4+" },
            { label: "Analytics Tools", value: "3+" },
            { label: "Projects Completed", value: "5+" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

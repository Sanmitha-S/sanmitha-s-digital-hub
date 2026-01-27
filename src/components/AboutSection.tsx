import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target, Lightbulb } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    institution: "AJ Institute of Engineering and Technology",
    details: "CGPA: 8.23",
  },
  {
    degree: "Pre-University (Science Stream)",
    institution: "St. Agnes Pre-University College",
    details: "",
  },
  {
    degree: "High School",
    institution: "Holy Family High School",
    details: "",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate Computer Science graduate focused on creating data-driven solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Who I Am
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a Computer Science and Engineering graduate with a deep passion for
                data analytics, intelligent systems, and web technologies. My journey in
                tech has been driven by curiosity and a desire to solve real-world problems
                through innovative solutions.
              </p>
              <p>
                I believe in the power of data-informed decision-making and its ability to
                drive organizational growth. My approach combines technical expertise with
                analytical thinking to deliver impactful results.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies, contributing to
                community projects, and continuously expanding my skill set to stay ahead
                in this ever-evolving field.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <motion.div
                className="glass-card rounded-xl p-4 text-center hover-lift"
                whileHover={{ scale: 1.02 }}
              >
                <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Goal-Oriented</p>
              </motion.div>
              <motion.div
                className="glass-card rounded-xl p-4 text-center hover-lift"
                whileHover={{ scale: 1.02 }}
              >
                <Lightbulb className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Problem Solver</p>
              </motion.div>
              <motion.div
                className="glass-card rounded-xl p-4 text-center hover-lift"
                whileHover={{ scale: 1.02 }}
              >
                <GraduationCap className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Continuous Learner</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="glass-card rounded-xl p-6 hover-lift"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-1">
                        {edu.institution}
                      </p>
                      {edu.details && (
                        <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">
                          {edu.details}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

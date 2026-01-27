import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium mb-4"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            >
              Sanmitha S
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground mb-6"
            >
              <span className="gradient-text font-semibold">Computer Science Engineer</span>
              <br />
              Data Analytics & Web Technologies Enthusiast
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8"
            >
              Passionate about leveraging data-driven technologies and building scalable
              systems to solve real-world problems. Committed to continuous learning
              and delivering impactful solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="gap-2"
              >
                View Portfolio
                <ArrowDown className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:shanmitha1357@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profilePhoto}
                  alt="Sanmitha S - Computer Science Engineer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Floating badges */}
              <motion.div
                className="absolute -right-4 top-1/4 glass-card rounded-lg px-3 py-2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-sm font-medium">Data Analytics</span>
              </motion.div>
              <motion.div
                className="absolute -left-4 bottom-1/4 glass-card rounded-lg px-3 py-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                <span className="text-sm font-medium">Web Dev</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted-foreground"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

import { Rocket, Globe, Users } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Users, label: "Active Members", value: "200+" },
  { icon: Rocket, label: "Projects Launched", value: "50+" },
  { icon: Globe, label: "Years Active", value: "10+" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-foreground text-glow mb-4 text-center"
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg"
        >
          SEDS SLIIT is the SLIIT chapter of Students for the Exploration and Development of Space,
          dedicated to inspiring the next generation of space explorers through education, research,
          and hands-on projects.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To promote space science and technology among university students, fostering
                innovation and collaboration in the pursuit of understanding our universe.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading student organization in Sri Lanka driving space exploration
                awareness and developing the next generation of aerospace professionals.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, amount: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative flex flex-col items-center p-6 sm:p-8 rounded-2xl bg-background/60 backdrop-blur-sm border border-primary/20 hover:border-primary/60 transition-all duration-500 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <span className="text-3xl sm:text-4xl font-bold text-foreground mb-1">{stat.value}</span>
                <span className="text-xs sm:text-sm text-muted-foreground text-center">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

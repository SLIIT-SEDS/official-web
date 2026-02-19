import { motion } from "framer-motion";

const members = [
  { id: 1, name: "Chamoda Suraweera", role: "President" },
  { id: 2, name: "Kaveesha Rahubadda", role: "Secretary" },
  { id: 3, name: "A A I Nethmika", role: "Vice President" },
  { id: 4, name: "Chamika Lakshan", role: "Vice President" },
  { id: 5, name: "Sabeelur Rashaad", role: "Treasurer" },
  { id: 6, name: "Yesen Binuwara", role: "Project Manager" },
  { id: 7, name: "Kawan Rupasinghe", role: "Divisions Manager" },
  { id: 8, name: "Dilara Liyanage", role: "Events Coordinator" },
  { id: 9, name: "K.Gayathri Priya", role: "Editor" },
  { id: 10, name: "Vidara Karannagoda", role: "Divisional Manager - Observation and Camping" },
  { id: 11, name: "Sakuna Isiwara", role: "Divisional Manager - Robotics and Rover" },
  { id: 12, name: "P K L Wijewardena", role: "Divisional Manager - Data Analysis and Software" },
  { id: 13, name: "Arunika Kalingamudali", role: "Divisional Manager - Biotechnical" },
];

const BoardSection = () => {
  return (
    <section id="board" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-foreground text-glow mb-4 text-center"
        >
          Our Board
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-muted-foreground text-center max-w-xl mx-auto mb-16"
        >
          Meet the team driving SEDS SLIIT forward.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {members.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col items-center p-6 rounded-lg border border-border bg-background hover:border-primary/50 transition-colors"
            >
              <div className="w-20 h-20 rounded-full bg-secondary mb-4 flex items-center justify-center">
                <span className="text-muted-foreground text-lg font-bold">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <h3 className="font-semibold text-foreground text-center">{member.name}</h3>
              <p className="text-xs text-primary mt-1 text-center">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardSection;

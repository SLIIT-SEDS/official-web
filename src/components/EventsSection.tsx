import { useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const events = [
  { id: 1, title: "AstroHack 2026", date: "March 15, 2026", location: "SLIIT Main Auditorium", description: "A 24-hour hackathon focused on solving real-world space challenges.", upcoming: true },
  { id: 2, title: "Stargazing Night", date: "February 28, 2026", location: "SLIIT Rooftop Observatory", description: "An evening of telescope observations and astrophotography workshops.", upcoming: true },
  { id: 3, title: "Space Week 2025", date: "October 4-10, 2025", location: "SLIIT Campus", description: "A week-long celebration of space with workshops, talks, and exhibitions.", upcoming: false },
  { id: 4, title: "Rocket Launch Demo", date: "August 20, 2025", location: "SLIIT Ground", description: "A live demonstration of model rocket launches built by SEDS members.", upcoming: false },
  { id: 5, title: "Astrophotography Workshop", date: "July 10, 2025", location: "SLIIT Lab 3", description: "Learn to capture stunning images of the night sky with your camera.", upcoming: false },
  { id: 6, title: "Space Debate", date: "June 5, 2025", location: "SLIIT Auditorium", description: "A lively debate on the ethics and future of human space colonization.", upcoming: false },
];

const EventCard = ({ event }: { event: (typeof events)[0] }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full h-56 rounded-xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary transition-all duration-500 ${hovered ? "blur-md scale-110" : "blur-0 scale-100"}`} />
      <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${hovered ? "opacity-80" : "opacity-30"}`} />
      <div className={`absolute inset-0 flex flex-col items-center justify-center p-4 text-center transition-all duration-500 ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-foreground font-semibold text-lg">{event.title}</h3>
          {event.upcoming && (
            <span className="text-[10px] uppercase tracking-wider bg-primary/20 text-primary px-2 py-0.5 rounded-full">Upcoming</span>
          )}
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {event.date}</span>
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {event.location}</span>
        </div>
        <p className="text-sm text-muted-foreground max-w-xs">{event.description}</p>
      </div>
    </div>
  );
};

const EventsSection = () => {
  return (
    <section id="events" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-foreground text-glow mb-4 text-center"
        >
          Events
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-muted-foreground text-center max-w-xl mx-auto mb-16"
        >
          Join us at our upcoming events or browse our past activities.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;

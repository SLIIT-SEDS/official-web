import { useState } from "react";
import { motion } from "framer-motion";

const blogs = [
  { id: 1, title: "The Future of Space Exploration", excerpt: "Latest advancements in space technology", date: "Jan 15, 2026" },
  { id: 2, title: "SEDS SLIIT at SpaceApps 2025", excerpt: "Our journey at NASA's Space Apps Challenge", date: "Dec 20, 2025" },
  { id: 3, title: "Building a CubeSat", excerpt: "Behind the scenes of our CubeSat project", date: "Nov 8, 2025" },
  { id: 4, title: "Astronomy Night Recap", excerpt: "Highlights from our stargazing event", date: "Oct 12, 2025" },
  { id: 5, title: "Rocket Propulsion 101", excerpt: "Fundamentals of rocket science explained", date: "Sep 5, 2025" },
  { id: 6, title: "Mars Colonization Plans", excerpt: "What it takes to live on the red planet", date: "Aug 18, 2025" },
];

const topRow = [...blogs.slice(0, 3), ...blogs.slice(0, 3), ...blogs.slice(0, 3)];
const bottomRow = [...blogs.slice(3), ...blogs.slice(3), ...blogs.slice(3)];

const BlogCard = ({ blog }: { blog: (typeof blogs)[0] }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary transition-all duration-500 ${
          hovered ? "blur-md scale-110" : "blur-0 scale-100"
        }`}
      />
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${
          hovered ? "opacity-80" : "opacity-30"
        }`}
      />
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center p-4 text-center transition-all duration-500 ${
          hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h3 className="text-foreground font-semibold text-lg mb-1">{blog.title}</h3>
        <p className="text-muted-foreground text-sm">{blog.excerpt}</p>
        <span className="text-primary text-xs mt-2">{blog.date}</span>
      </div>
    </div>
  );
};

const BlogsSection = () => {
  return (
    <section id="blogs" className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-foreground text-glow mb-4 text-center"
        >
          Blogs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-muted-foreground text-center max-w-xl mx-auto"
        >
          Stories, insights, and updates from our space community.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="relative mb-6">
          <div className="flex gap-6 animate-marquee-left w-max">
            {topRow.map((blog, i) => (
              <BlogCard key={`top-${i}`} blog={blog} />
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-6 animate-marquee-right w-max">
            {bottomRow.map((blog, i) => (
              <BlogCard key={`bottom-${i}`} blog={blog} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BlogsSection;

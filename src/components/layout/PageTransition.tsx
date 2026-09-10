import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const PageTransition = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.45, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

export default PageTransition;

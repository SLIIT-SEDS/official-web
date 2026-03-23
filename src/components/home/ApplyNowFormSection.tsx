import { motion } from 'framer-motion';

const ApplyNowFormSection = () => {
  return (
    <section className="relative w-full py-24 px-6 flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 w-full max-w-screen-xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <motion.h2
          className="mb-16 text-center font-light tracking-wider bg-gradient-to-r from-white to-[#E0B6E4] bg-clip-text text-transparent select-none"
          style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          READY TO EXPLORE SPACE?
        </motion.h2>

        {/* Form Card */}
        <motion.div
          className="w-full max-w-[500px] bg-[#0f0b14]/60 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3
            className="mb-8 md:mb-12 text-center font-light text-white tracking-wide"
            style={{ fontSize: '2rem' }}
          >
            Apply Now!
          </h3>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="flex flex-col gap-8"
            onSubmit={(e) => {
              e.preventDefault();
              // Web3Forms integration logic goes here
            }}
          >
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-light text-gray-400 pl-1 tracking-wider uppercase">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300 border border-white/10 focus:border-white/30"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                }}
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-light text-gray-400 pl-1 tracking-wider uppercase">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300 border border-white/10 focus:border-white/30"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                }}
              />
            </div>

            {/* Year of Study */}
            <div className="flex flex-col gap-2">
              <label htmlFor="year" className="text-sm font-light text-gray-400 pl-1 tracking-wider uppercase">
                Year of study
              </label>
              <input
                type="text"
                id="year"
                name="year"
                required
                className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300 border border-white/10 focus:border-white/30"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                }}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="mt-6 w-full rounded-full bg-white py-4 text-[12px] font-bold uppercase tracking-[0.25em] text-[#2H0B3A] transition-all duration-300 hover:bg-gray-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] text-[#1a0b2e]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              JOIN THE MISSION
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplyNowFormSection;

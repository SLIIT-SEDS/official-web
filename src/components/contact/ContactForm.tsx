import Button from '../ui/Button';

const ContactForm = () => {
  return (
    <div
      className="
        w-full
        max-w-[500px]
        mx-auto
        bg-[#0f0b14]/50
        border
        border-white/5
        rounded-[2.5rem]
        p-6
        sm:p-10
        backdrop-blur-md
        relative
        overflow-hidden
        shadow-[0_20px_50px_rgba(0,0,0,0.3)]
        hover:border-white/10
        transition-colors
        duration-500
      "
    >
      {/* Top light beam accent */}
      <div className="absolute top-0 inset-x-10 h-[1px] bg-gradient-to-r from-transparent via-[#E0B6E4]/40 to-transparent" />

      <h2 className="text-xl md:text-2xl font-light text-white tracking-wide text-center mb-8 uppercase select-none">
        Send us a message
      </h2>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-5 w-full"
      >
        {/* Your Name */}
        <div className="flex flex-col gap-2 w-full group">
          <label htmlFor="name" className="text-xs font-light text-gray-400 pl-1 tracking-wider uppercase group-focus-within:text-[#E0B6E4] transition-colors duration-300">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300 border border-white/5 focus:border-[#E0B6E4]/30 focus:shadow-[0_0_15px_rgba(224,182,228,0.06)] bg-black/45"
          />
        </div>

        {/* Your Email */}
        <div className="flex flex-col gap-2 w-full group">
          <label htmlFor="email" className="text-xs font-light text-gray-400 pl-1 tracking-wider uppercase group-focus-within:text-[#E0B6E4] transition-colors duration-300">
            Your Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300 border border-white/5 focus:border-[#E0B6E4]/30 focus:shadow-[0_0_15px_rgba(224,182,228,0.06)] bg-black/45"
          />
        </div>

        {/* Your Message */}
        <div className="flex flex-col gap-2 w-full group">
          <label htmlFor="textarea" className="text-xs font-light text-gray-400 pl-1 tracking-wider uppercase group-focus-within:text-[#E0B6E4] transition-colors duration-300">
            Your Message
          </label>
          <textarea
            id="textarea"
            required
            rows={5}
            className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300 border border-white/5 focus:border-[#E0B6E4]/30 focus:shadow-[0_0_15px_rgba(224,182,228,0.06)] bg-black/45 resize-none"
          />
        </div>

        <Button type="submit" className="w-full mt-4 bg-white hover:bg-gray-50 text-[#090709] border-none hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] active:scale-95 duration-500">
          SUBMIT
        </Button>
      </form>
    </div>
  );
};

export { ContactForm };

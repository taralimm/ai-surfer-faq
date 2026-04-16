import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden bg-brand-bg">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-gradient leading-tight mb-4">
            THE AI SURFER CIRCLE
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-brand-text/60 uppercase tracking-[0.3em]">
            FAQs
          </p>
        </motion.div>

        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-32 h-1.5 bg-brand-gradient my-12 rounded-full" 
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToContent}
          className="px-10 py-4 bg-brand-gradient text-white font-bold text-sm tracking-[0.2em] rounded-xl uppercase transition-all shadow-[0_10px_20px_rgba(247,138,140,0.2)]"
        >
          Browse FAQs
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-main cursor-pointer"
        onClick={scrollToContent}
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
}

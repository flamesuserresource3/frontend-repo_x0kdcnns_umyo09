import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient accents that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80 dark:from-neutral-950/70 dark:via-neutral-950/20 dark:to-neutral-950/90" />
      <div className="pointer-events-none absolute -inset-x-20 -top-20 h-64 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-400/30 via-violet-500/20 to-transparent blur-2xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Anushka — Designer & Frontend Developer
          </motion.h1>
          <motion.p
            className="mt-4 text-base sm:text-lg text-neutral-700 dark:text-neutral-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            I craft delightful, interactive experiences blending modern 3D with clean, accessible UI. Explore selected work below.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-600 via-violet-600 to-blue-600 text-white px-5 py-2.5 font-semibold shadow-lg shadow-violet-600/20 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 font-semibold text-neutral-800 dark:text-neutral-200 border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

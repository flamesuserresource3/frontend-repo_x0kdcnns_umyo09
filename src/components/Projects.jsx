import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Aurora UI Kit',
    description: 'A polished component library with playful micro-interactions and strong accessibility.',
    tags: ['React', 'Tailwind', 'A11y'],
    link: '#',
    gradient: 'from-fuchsia-400 via-violet-500 to-blue-500',
  },
  {
    title: 'Motion Portfolio',
    description: 'A cinematic portfolio with scroll-based animations and immersive transitions.',
    tags: ['Framer Motion', 'Vite', 'Spline'],
    link: '#',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
  },
  {
    title: 'E-commerce Concept',
    description: 'Concept store with 3D product previews and delightful checkout flows.',
    tags: ['3D', 'UX', 'Payments'],
    link: '#',
    gradient: 'from-amber-400 via-orange-500 to-rose-500',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Featured Projects</h2>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300 max-w-2xl">A selection of recent work exploring modern interfaces, motion, and playful interactions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target={p.link.startsWith('#') ? '_self' : '_blank'}
              rel="noreferrer"
              className="group relative rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden bg-white/60 dark:bg-neutral-900/60 backdrop-blur hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
            >
              <div className={`h-40 w-full bg-gradient-to-br ${p.gradient} opacity-90`} />
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                    {p.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm text-violet-600 dark:text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Visit <ExternalLink size={16} />
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-neutral-700 dark:text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

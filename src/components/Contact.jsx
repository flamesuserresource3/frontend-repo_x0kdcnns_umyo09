import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-3xl border border-black/10 dark:border-white/10 p-8 sm:p-12 bg-gradient-to-br from-white/70 to-white/40 dark:from-neutral-900/70 dark:to-neutral-900/40 backdrop-blur">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Let’s build something playful</h2>
          <p className="mt-3 max-w-2xl text-neutral-700 dark:text-neutral-300">
            I’m open to freelance work, collaborations, and full‑time roles. Tell me about your idea and we’ll shape it together.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="mailto:hello@anushka.design"
              className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white px-5 py-2.5 font-semibold hover:brightness-110 dark:bg-white dark:text-neutral-900"
            >
              <Mail size={18} />
              Email me
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-black/10 dark:border-white/10 px-5 py-2.5 font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/5"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-black/10 dark:border-white/10 px-5 py-2.5 font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/5"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} Anushka. All rights reserved.
        </p>
      </div>
    </section>
  );
}

import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 dark:bg-neutral-950/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight text-neutral-900 dark:text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 via-violet-500 to-blue-500 text-white shadow">
            <Rocket size={18} />
          </span>
          <span className="text-sm sm:text-base">Anushka · Portfolio</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700 dark:text-neutral-300">
          <a href="#projects" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <a href="mailto:hello@anushka.design" className="inline-flex items-center gap-2 rounded-md border border-black/10 dark:border-white/10 px-3 py-1.5 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/5 transition">
            <Mail size={16} />
            <span className="hidden sm:inline">Say hi</span>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5 text-neutral-700 dark:text-neutral-300"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5 text-neutral-700 dark:text-neutral-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}

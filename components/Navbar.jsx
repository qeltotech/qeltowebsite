import { useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1224]/80 backdrop-blur-xl">
      <div className="section-wrap flex items-center justify-between py-4">
        <a href="#home" className="text-2xl font-semibold tracking-wide text-white">
          Qelto
        </a>

        <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-sky-300">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="rounded-full bg-accent-gradient px-5 py-2 font-medium text-white shadow-neon">
            Get a Quote
          </a>
        </nav>

        <button
          className="rounded-md border border-slate-700 px-3 py-2 text-slate-200 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-wrap grid gap-3 pb-4 text-sm text-slate-300 lg:hidden"
        >
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}

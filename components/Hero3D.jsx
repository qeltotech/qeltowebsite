import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false });

export default function Hero3D() {
  return (
    <section id="home" className="section-wrap grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="mb-5 inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-sky-300">
          Digital Solutions for Growth-Driven Companies
        </p>
        <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
          ERP Implementation, Marketing, Video & Web Systems That Scale Your Business.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
          Qelto helps organizations modernize operations, build stronger brands, and increase
          revenue through integrated technology execution.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#contact" className="rounded-full bg-accent-gradient px-7 py-3 font-medium text-white shadow-neon">
            Get a Quote
          </a>
          <a href="#process" className="rounded-full border border-slate-600 px-7 py-3 text-slate-200 transition hover:border-sky-300 hover:text-white">
            Book Consultation
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            ['120+', 'Projects Delivered'],
            ['94%', 'Client Retention'],
            ['18+', 'Industry Domains'],
          ].map(([value, label]) => (
            <div key={label} className="glass rounded-2xl p-4">
              <p className="text-2xl font-semibold text-sky-300">{value}</p>
              <p className="text-sm text-slate-300">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="glass h-[380px] overflow-hidden rounded-3xl border border-white/10 md:h-[480px]">
        <HeroCanvas />
      </div>
    </section>
  );
}

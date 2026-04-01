import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false });

export default function Hero3D() {
  return (
    <section id="home" className="section-wrap grid items-center gap-10 py-20 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-4 inline-block rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-sky-300">
          ERP + Digital Growth Partner
        </p>
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          Transform Operations and Accelerate Revenue with Qelto.
        </h1>
        <p className="mt-6 max-w-xl text-slate-300 md:text-lg">
          We deliver ERP implementation, brand growth campaigns, video promotion, and modern web
          platforms to help business teams scale with confidence.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#contact" className="rounded-full bg-accent-gradient px-6 py-3 font-medium text-white shadow-neon">
            Get a Quote
          </a>
          <a href="#contact" className="rounded-full border border-slate-600 px-6 py-3 text-slate-200 transition hover:border-sky-300 hover:text-white">
            Book Consultation
          </a>
        </div>
      </motion.div>

      <div className="glass h-[360px] overflow-hidden rounded-3xl md:h-[460px]">
        <HeroCanvas />
      </div>
    </section>
  );
}

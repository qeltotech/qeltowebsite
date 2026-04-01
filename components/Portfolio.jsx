import { motion } from 'framer-motion';

const cases = [
  {
    title: 'ERP Modernization for Distribution Group',
    result: '38% reduction in process turnaround',
    details: 'Integrated procurement, inventory, and finance workflows into one live ERP ecosystem.',
  },
  {
    title: 'Performance Marketing for B2B Services Brand',
    result: '3.9x increase in qualified leads',
    details: 'Built SEO + paid media pipeline with landing page optimization and analytics tracking.',
  },
  {
    title: 'Video-Centric Campaign for Product Vertical',
    result: '2.4x growth in engagement rate',
    details: 'Produced creative assets and promotion funnels for awareness-to-conversion movement.',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-wrap py-20">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-fuchsia-300">Portfolio</p>
      <h2 className="text-3xl font-semibold text-white md:text-5xl">Selected projects and measurable outcomes.</h2>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {cases.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-6"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-2xl" />
            <p className="text-xs uppercase tracking-[0.2em] text-sky-300">{item.result}</p>
            <h3 className="mt-4 text-xl font-semibold text-white transition group-hover:text-cyan-300">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{item.details}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

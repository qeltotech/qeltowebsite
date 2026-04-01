import { motion } from 'framer-motion';

const projects = [
  {
    title: 'ERP Rollout for Retail Group',
    metric: '31% faster fulfillment',
    summary: 'Unified inventory and finance workflows across 8 branches using cloud ERP.',
  },
  {
    title: 'Growth Campaign for B2B Brand',
    metric: '4.1x lead growth',
    summary: 'SEO + paid media strategy that reduced CAC and increased qualified pipeline.',
  },
  {
    title: 'Video Funnel for Product Launch',
    metric: '2.7M targeted views',
    summary: 'Video storytelling framework distributed across social ads and landing pages.',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-wrap py-20">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-sky-300">Case Studies</p>
      <h2 className="text-3xl font-semibold md:text-5xl">Results that business leaders can measure.</h2>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group glass rounded-2xl p-6"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-fuchsia-300">{project.metric}</p>
            <h3 className="mt-4 text-xl font-semibold transition group-hover:text-sky-300">{project.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{project.summary}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

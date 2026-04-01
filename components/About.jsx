import { motion } from 'framer-motion';

const highlights = [
  { label: 'End-to-end delivery', value: '360°' },
  { label: 'Average efficiency uplift', value: '42%' },
  { label: 'Campaign ROAS improvements', value: '3.4x' },
  { label: 'Deployment success rate', value: '99%' },
];

export default function About() {
  return (
    <section id="why-us" className="section-wrap py-20">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-fuchsia-300">Why Choose Us</p>
      <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
        Strategic thinking, technical depth, and creative execution in one team.
      </h2>
      <p className="mt-5 max-w-3xl text-slate-300">
        We combine ERP architecture, performance marketing, visual storytelling, and web
        engineering to create scalable systems that improve outcomes across sales, operations, and
        customer experience.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07 }}
            className="glass rounded-2xl p-6"
          >
            <p className="text-3xl font-semibold text-sky-300">{item.value}</p>
            <p className="mt-2 text-sm text-slate-300">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

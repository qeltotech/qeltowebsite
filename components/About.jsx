import { motion } from 'framer-motion';

const items = [
  'End-to-end delivery from strategy to implementation.',
  'ERP + web + marketing execution in one integrated team.',
  'Business-first approach focused on measurable ROI.',
  'Scalable architecture for growth across departments.',
];

export default function About() {
  return (
    <section id="about" className="section-wrap py-20">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-fuchsia-300">About Qelto</p>
          <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
            Built for business transformation, not just design deliverables.
          </h2>
          <p className="mt-6 text-slate-300">
            We operate as a strategic technology partner to help you streamline operations,
            strengthen brand presence, and deliver digital experiences that convert.
          </p>
        </motion.div>

        <div className="glass rounded-3xl p-8">
          <ul className="space-y-4">
            {items.map((text, index) => (
              <motion.li
                key={text}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex gap-3"
              >
                <span className="mt-1 text-sky-300">●</span>
                <span className="text-slate-200">{text}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

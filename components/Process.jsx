import { motion } from 'framer-motion';

const steps = [
  { id: '01', title: 'Consultation', text: 'Understand goals, systems, and growth bottlenecks.' },
  { id: '02', title: 'Strategy', text: 'Define rollout plans across ERP, marketing, and digital channels.' },
  { id: '03', title: 'Implementation', text: 'Execute with agile delivery, QA, and operational handover.' },
  { id: '04', title: 'Growth', text: 'Track KPIs, optimize campaigns, and improve system performance.' },
];

export default function Process() {
  return (
    <section id="process" className="section-wrap py-20">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-sky-300">Process</p>
      <h2 className="text-3xl font-semibold text-white md:text-5xl">A structured process built for predictable outcomes.</h2>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="glass rounded-2xl p-6"
          >
            <p className="text-sm tracking-[0.2em] text-fuchsia-300">{step.id}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{step.title}</h3>
            <p className="mt-3 text-slate-300">{step.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

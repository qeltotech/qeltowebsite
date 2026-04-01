import { motion } from 'framer-motion';

const steps = ['Consultation', 'Strategy', 'Implementation', 'Growth'];

export default function Process() {
  return (
    <section id="process" className="section-wrap py-20">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-sky-300">Process</p>
      <h2 className="text-3xl font-semibold md:text-5xl">A proven workflow designed for execution speed.</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-4">
        {steps.map((step, index) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="glass rounded-2xl p-6"
          >
            <p className="text-4xl font-semibold text-slate-500">0{index + 1}</p>
            <p className="mt-3 text-lg font-medium">{step}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

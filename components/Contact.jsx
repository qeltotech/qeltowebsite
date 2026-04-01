import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="section-wrap py-20">
      <div className="glass rounded-3xl p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-fuchsia-300">Contact</p>
          <h2 className="text-3xl font-semibold md:text-5xl">Start your next transformation project.</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            Tell us your business goals and we will craft a practical roadmap across ERP,
            marketing, video, and web implementation.
          </p>
        </motion.div>

        <form className="mt-10 grid gap-5 md:grid-cols-2">
          <input className="rounded-xl border border-slate-600 bg-slate-900/80 p-3" placeholder="Name" />
          <input className="rounded-xl border border-slate-600 bg-slate-900/80 p-3" placeholder="Business" />
          <input
            className="rounded-xl border border-slate-600 bg-slate-900/80 p-3 md:col-span-2"
            placeholder="Service Needed"
          />
          <textarea
            className="min-h-36 rounded-xl border border-slate-600 bg-slate-900/80 p-3 md:col-span-2"
            placeholder="Message"
          />
          <button className="rounded-full bg-accent-gradient px-6 py-3 font-medium text-white shadow-neon md:col-span-2 md:w-fit">
            Start Your Project
          </button>
        </form>
      </div>
    </section>
  );
}

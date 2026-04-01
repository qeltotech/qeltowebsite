export default function Contact() {
  return (
    <section id="contact" className="section-wrap py-20">
      <div className="glass rounded-3xl border border-white/10 p-8 md:p-12">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-sky-300">Contact</p>
        <h2 className="text-3xl font-semibold text-white md:text-5xl">Let's plan your next digital growth milestone.</h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          Share your business objective and we will map the right mix of ERP, marketing, video, and
          web execution.
        </p>

        <form className="mt-10 grid gap-5 md:grid-cols-2">
          <input className="input-field" placeholder="Name" required />
          <input className="input-field" placeholder="Business" required />
          <input className="input-field md:col-span-2" placeholder="Service Needed" required />
          <textarea className="input-field min-h-36 md:col-span-2" placeholder="Message" required />
          <button className="rounded-full bg-accent-gradient px-8 py-3 font-medium text-white shadow-neon md:col-span-2 md:w-fit">
            Start Your Project
          </button>
        </form>
      </div>
    </section>
  );
}

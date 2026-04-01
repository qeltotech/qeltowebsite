export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10">
      <div className="section-wrap grid gap-6 text-sm text-slate-400 md:grid-cols-3">
        <div>
          <p className="text-base font-semibold text-slate-100">Qelto</p>
          <p className="mt-2">ERP, digital marketing, video promotion, and web development for growth-driven businesses.</p>
        </div>
        <div>
          <p className="text-slate-200">Quick Links</p>
          <ul className="mt-2 space-y-1">
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="text-slate-200">Social</p>
          <ul className="mt-2 space-y-1">
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://x.com" target="_blank" rel="noreferrer">X / Twitter</a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-wrap grid gap-8 text-sm text-slate-400 md:grid-cols-3">
        <div>
          <p className="text-xl font-semibold text-white">Qelto</p>
          <p className="mt-3 max-w-sm">
            Premium digital solutions for businesses: ERP implementation, brand promotion, video
            campaigns, and website development.
          </p>
        </div>

        <div>
          <p className="font-medium text-slate-100">Quick Navigation</p>
          <ul className="mt-3 space-y-2">
            <li><a href="#about" className="hover:text-sky-300">About</a></li>
            <li><a href="#services" className="hover:text-sky-300">Services</a></li>
            <li><a href="#portfolio" className="hover:text-sky-300">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-sky-300">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-slate-100">Connect</p>
          <ul className="mt-3 space-y-2">
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-sky-300">LinkedIn</a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-sky-300">YouTube</a></li>
            <li><a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-sky-300">X / Twitter</a></li>
          </ul>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-slate-500">© {new Date().getFullYear()} Qelto. All rights reserved.</p>
    </footer>
  );
}

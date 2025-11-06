export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-slate-700/60 bg-slate-900/50 backdrop-blur">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-100">Let’s Collaborate</h2>
              <p className="mt-3 text-slate-400 max-w-prose">
                Open for research collaboration, spatial analysis projects, and urban design explorations. Feel free to reach out.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:hello@mumtaz.dev" className="px-5 py-3 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-400/40 shadow-[0_0_20px_rgba(56,189,248,0.25)] transition">Email</a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-xl bg-slate-800/60 hover:bg-slate-700 text-slate-100 border border-slate-700/70 transition">LinkedIn</a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-xl bg-slate-800/60 hover:bg-slate-700 text-slate-100 border border-slate-700/70 transition">Instagram</a>
              </div>
            </div>
            <div className="relative min-h-[280px]">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-sky-400/5 to-transparent" />
              <div className="absolute inset-6 rounded-2xl border border-sky-400/30" style={{ boxShadow: '0 0 40px rgba(56,189,248,0.25), inset 0 0 20px rgba(56,189,248,0.15)'}} />
              <div className="absolute bottom-6 right-6 text-slate-400 text-xs">Limited Edition Portfolio</div>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-slate-500 text-xs">© {new Date().getFullYear()} Muslim Mumtaz — All rights reserved.</p>
      </div>
    </section>
  );
}

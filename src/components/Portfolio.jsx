import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Interactive Urban Growth Map',
    tag: 'Web GIS',
    desc: 'A web-based interactive map visualizing urban expansion patterns with layers and filters.',
  },
  {
    title: 'Spatial Suitability Model',
    tag: 'Spatial Modeling',
    desc: 'Multi-criteria analysis for land-use suitability using GIS and remote sensing proxies.',
  },
  {
    title: 'Transit Accessibility Dashboard',
    tag: 'Dashboard',
    desc: 'KPIs for walkability and transit access across districts, built with modern web stack.',
  },
  {
    title: 'RDTR Concept Design',
    tag: 'Design',
    desc: 'District-level structure plan with zoning, circulation, and public space strategy.',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-100">Portfolio</h2>
          <p className="mt-2 text-slate-400">Selected works across maps, models, research, dashboards, and spatial design.</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative rounded-2xl border border-slate-700/60 bg-slate-900/50 backdrop-blur overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-sky-500/10 to-sky-500/0 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wide text-sky-300/90">{p.tag}</span>
                  <span className="h-2 w-2 rounded-full bg-sky-400/80 shadow-[0_0_14px_rgba(56,189,248,0.7)]" />
                </div>
                <h3 className="mt-3 text-xl font-medium text-slate-100">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
                <div className="mt-4 h-36 rounded-xl bg-gradient-to-tr from-slate-800 to-slate-700/60 border border-slate-700/60" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

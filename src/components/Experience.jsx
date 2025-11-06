export default function Experience() {
  const experiences = [
    { role: 'RDTR Project Contributor', org: 'District-Level Planning', year: '2023', details: 'Assisted spatial analysis, zoning interpretation, and map production.' },
    { role: 'Community Service (KKN)', org: 'Rural-Urban Interface', year: '2022', details: 'Participatory mapping, survey design, and local development proposals.' },
  ];

  const skills = ['ArcGIS', 'QGIS', 'AutoCAD', 'React', 'Firebase'];

  return (
    <section id="experience" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-100">Experience</h2>
          <div className="mt-6 space-y-4">
            {experiences.map((e) => (
              <div key={e.role} className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-5">
                <div className="flex items-center justify-between text-slate-300">
                  <p className="font-medium text-slate-100">{e.role}</p>
                  <span className="text-xs text-slate-400">{e.year}</span>
                </div>
                <p className="text-sm text-slate-400">{e.org}</p>
                <p className="mt-2 text-sm text-slate-300">{e.details}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-slate-100">Skills</h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full text-sm bg-slate-800/60 border border-slate-700/60 text-slate-200 hover:border-sky-500/50 hover:text-sky-300 transition"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

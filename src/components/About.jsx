export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-100">About Me</h2>
            <p className="text-slate-300 leading-relaxed">
              I am Muslim Mumtaz, an Urban and Regional Planner focusing on spatial planning, GIS-based analysis, and data-driven decision support systems. My work blends spatial intelligence with thoughtful design to build cities that are smarter, sustainable, and inclusive.
            </p>
            <p className="text-slate-400">
              I explore geospatial technologies, cartographic storytelling, and interactive dashboards to deliver insights that matter. My interests include spatial modeling, urban analytics, and the application of modern web technologies to enhance planning outcomes.
            </p>
          </div>
          <div className="rounded-3xl p-1 bg-gradient-to-br from-sky-400/40 via-sky-600/10 to-transparent">
            <div className="rounded-2xl bg-slate-900/60 border border-slate-700/60 p-6 backdrop-blur">
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  'Spatial Planning & Policy',
                  'GIS & Spatial Analysis',
                  'Remote Sensing Basics',
                  'Urban Design & Visualization',
                  'Web Mapping & Dashboards',
                  'Data Storytelling',
                ].map((t) => (
                  <li key={t} className="text-slate-200 text-sm bg-slate-800/50 border border-slate-700/60 rounded-xl px-4 py-3">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

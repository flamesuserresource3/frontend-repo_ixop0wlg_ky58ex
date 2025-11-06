import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const location = useLocation();

  useEffect(() => {
    // On route change to '/', scroll to top
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border-b border-slate-700/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <RouterLink to="/" className="flex items-center gap-2 group">
          <div className="text-sky-300 tracking-widest font-semibold text-xl leading-none select-none">
            <span className="relative inline-block">
              <span className="pr-1">MUM</span><span className="text-sky-400">TAZ</span>
              <span className="absolute -inset-x-1 -bottom-1 h-[2px] bg-gradient-to-r from-sky-500/0 via-sky-400 to-sky-500/0 opacity-0 group-hover:opacity-100 transition" />
            </span>
          </div>
          <span className="hidden sm:block text-xs text-slate-300/70">
            Urban & Regional Planner
          </span>
        </RouterLink>

        {location.pathname === '/' ? (
          <nav className="hidden md:flex items-center gap-6 text-slate-200">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm tracking-wide hover:text-sky-300 transition relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-sky-400/80 hover:after:w-full after:transition-all"
              >
                {n.label}
              </button>
            ))}
            <RouterLink
              to="/link"
              className="text-sm bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 px-4 py-2 rounded-full border border-sky-400/40 shadow-[0_0_20px_rgba(56,189,248,0.25)] transition"
            >
              MumtazLink
            </RouterLink>
          </nav>
        ) : (
          <nav className="flex items-center gap-4">
            <RouterLink
              to="/"
              className="text-sm text-slate-200 hover:text-sky-300 transition"
            >
              Back to Portfolio
            </RouterLink>
          </nav>
        )}
      </div>
    </header>
  );
}

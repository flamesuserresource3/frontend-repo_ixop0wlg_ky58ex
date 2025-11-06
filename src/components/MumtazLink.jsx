import { useEffect, useMemo, useState } from 'react';

// Simple localStorage powered personal short links manager (client-only)
// Keys: mumtaz_links, mumtaz_stats

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

function useLocalLinks() {
  const [links, setLinks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('mumtaz_links') || '[]');
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('mumtaz_links', JSON.stringify(links));
  }, [links]);

  const stats = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem('mumtaz_stats') || '{}');
    } catch {
      return {};
    }
  }, []);

  const setStats = (s) => localStorage.setItem('mumtaz_stats', JSON.stringify(s));

  const add = (payload) => setLinks((prev) => [{ id: uid(), createdAt: Date.now(), ...payload }, ...prev]);
  const remove = (id) => setLinks((prev) => prev.filter((l) => l.id !== id));

  const click = (id) => {
    const next = { ...stats, [id]: (stats[id] || 0) + 1 };
    setStats(next);
  };

  return { links, add, remove, stats, click };
}

export default function MumtazLink() {
  const { links, add, remove, stats, click } = useLocalLinks();
  const [form, setForm] = useState({ title: '', url: '' });

  const submit = (e) => {
    e.preventDefault();
    if (!form.url) return;
    add({ title: form.title || new URL(form.url).hostname, url: form.url });
    setForm({ title: '', url: '' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-semibold">MumtazLink</h1>
          <a href="/" className="text-sky-300 hover:underline">Back to Portfolio</a>
        </div>

        <div className="rounded-2xl border border-slate-700/60 bg-slate-900/50 backdrop-blur p-6">
          <form onSubmit={submit} className="grid md:grid-cols-[1fr_2fr_auto] gap-3">
            <input
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              className="px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/60 focus:outline-none focus:border-sky-400/60"
            />
            <input
              placeholder="https://link.to/target"
              required
              type="url"
              value={form.url}
              onChange={(e) => setForm((f) => ({ ...f, url: e.target.value }))}
              className="px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/60 focus:outline-none focus:border-sky-400/60"
            />
            <button className="px-5 py-3 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-400/40 shadow-[0_0_20px_rgba(56,189,248,0.25)] transition">Add</button>
          </form>
        </div>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-700/60">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-900/60">
              <tr className="text-left text-slate-300">
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Short</th>
                <th className="px-4 py-3">Clicks</th>
                <th className="px-4 py-3">QR</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {links.map((l) => (
                <tr key={l.id} className="hover:bg-slate-900/40">
                  <td className="px-4 py-3 text-slate-200">{l.title}</td>
                  <td className="px-4 py-3">
                    <a
                      href={l.url}
                      onClick={() => click(l.id)}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sky-300 hover:underline"
                    >
                      {window.location.origin}/l/{l.id}
                    </a>
                  </td>
                  <td className="px-4 py-3">{stats[l.id] || 0}</td>
                  <td className="px-4 py-3">
                    <img
                      alt="qr"
                      className="h-14 w-14 bg-white p-1 rounded"
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(l.url)}`}
                    />
                  </td>
                  <td className="px-4 py-3">
                    <button onClick={() => remove(l.id)} className="text-xs px-3 py-1.5 rounded-lg bg-red-500/10 text-red-300 border border-red-400/30">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          Note: This is a private, local-only short link manager. Data is stored in your browser. For multi-device use and analytics, connect a backend later.
        </p>
      </div>
    </div>
  );
}

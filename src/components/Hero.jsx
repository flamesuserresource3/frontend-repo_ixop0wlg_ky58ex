import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-100"
          >
            Muslim Mumtaz
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 text-lg sm:text-xl text-slate-300 max-w-xl"
          >
            Designing Smarter, Sustainable, and Inclusive Cities.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-slate-400 max-w-2xl"
          >
            Urban and Regional Planner focused on spatial planning, GIS-driven analysis, and technology innovation for sustainable development.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#portfolio" className="px-6 py-3 rounded-full bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-400/40 shadow-[0_0_20px_rgba(56,189,248,0.25)] transition">View Portfolio</a>
            <a href="#contact" className="px-6 py-3 rounded-full bg-slate-800/60 hover:bg-slate-700 text-slate-100 border border-slate-700/70 transition">Contact</a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="relative h-[480px] w-full rounded-3xl overflow-hidden backdrop-blur bg-slate-900/30 border border-slate-700/50 shadow-2xl"
        >
          <LiveSatelliteCard />
        </motion.div>
      </div>
    </section>
  );
}

function LiveSatelliteCard() {
  // Uses Mapbox static API for a subtle satellite panel; replace with your own token if needed
  const [imgUrl, setImgUrl] = useState('');

  // Try to center by geolocation, fallback to Jakarta
  useEffect(() => {
    const fallback = { lat: -6.200000, lon: 106.816666 }; // Jakarta
    const setUrl = (lat, lon) => {
      const token = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ._Jg3-9Lh4S5O0u9oVyRQwQ';
      const style = 'satellite-v9';
      const u = `https://api.mapbox.com/styles/v1/mapbox/${style}/static/${lon},${lat},11,0/800x600?access_token=${token}`;
      setImgUrl(u);
    };

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setUrl(pos.coords.latitude, pos.coords.longitude),
        () => setUrl(fallback.lat, fallback.lon),
        { enableHighAccuracy: false, timeout: 4000 }
      );
    } else {
      setUrl(fallback.lat, fallback.lon);
    }
  }, []);

  const { useEffect, useState } = require('react');

  return (
    <div className="relative h-full w-full">
      <img
        src={imgUrl}
        alt="Live satellite context"
        className="h-full w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-4 left-4 right-4">
        <div className="backdrop-blur-md bg-slate-900/50 border border-sky-400/30 rounded-2xl p-4 shadow-[0_0_40px_rgba(56,189,248,0.25)]">
          <p className="text-slate-200 text-sm">
            Context-aware satellite background adjusts to your location.
          </p>
        </div>
      </div>
    </div>
  );
}

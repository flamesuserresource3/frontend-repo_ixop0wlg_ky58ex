import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import MumtazLink from './components/MumtazLink';
import LinkRedirect from './components/LinkRedirect';

function Landing() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </main>
  );
}

export default function App() {
  const location = useLocation();
  return (
    <div className="font-['Inter','Geist','Manrope',system-ui] min-h-screen bg-slate-950">
      <Navbar />
      <Routes location={location}>
        <Route path="/" element={<Landing />} />
        <Route path="/link" element={<MumtazLink />} />
        <Route path="/l/:id" element={<LinkRedirect />} />
      </Routes>
    </div>
  );
}

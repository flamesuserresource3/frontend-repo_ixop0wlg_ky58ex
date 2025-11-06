import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function LinkRedirect() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const raw = localStorage.getItem('mumtaz_links') || '[]';
      const links = JSON.parse(raw);
      const found = links.find((l) => l.id === id);
      if (found?.url) {
        window.location.replace(found.url);
      } else {
        navigate('/link');
      }
    } catch {
      navigate('/link');
    }
  }, [id, navigate]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex items-center justify-center">
      <p>Redirecting...</p>
    </div>
  );
}

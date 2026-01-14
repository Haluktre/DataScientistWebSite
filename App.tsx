import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, Lightbulb } from 'lucide-react';
import RoadmapPage from './pages/RoadmapPage';
import StatsPage from './pages/StatsPage';

const Navigation = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-md border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/30">
            DS
          </div>
          <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-slate-100' : 'text-slate-100'}`}>
            Data<span className="text-indigo-400">Science</span>
          </span>
        </div>
        
        <div className="flex items-center bg-slate-800/50 p-1 rounded-full border border-slate-700 backdrop-blur-sm">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive ? 'bg-slate-700 text-indigo-300 shadow-sm border border-slate-600' : 'text-slate-400 hover:text-slate-200'}`
            }
          >
            <LayoutDashboard size={18} />
            <span>Yol Haritası</span>
          </NavLink>
          <NavLink 
            to="/stats" 
            className={({ isActive }) => 
              `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive ? 'bg-slate-700 text-purple-300 shadow-sm border border-slate-600' : 'text-slate-400 hover:text-slate-200'}`
            }
          >
            <Lightbulb size={18} />
            <span>İlginç Veriler</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 border-t border-slate-800 py-8 mt-auto">
    <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
      <p>© 2024 Data Science Explorer. Tüm hakları saklıdır.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
        <Navigation />
        <main className="flex-grow pt-24 pb-12 px-4 relative overflow-hidden">
           {/* Background Gradient Orbs */}
           <div className="fixed top-20 left-10 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl -z-10 pointer-events-none mix-blend-screen" />
           <div className="fixed bottom-20 right-10 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl -z-10 pointer-events-none mix-blend-screen" />
           
          <Routes>
            <Route path="/" element={<RoadmapPage />} />
            <Route path="/stats" element={<StatsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
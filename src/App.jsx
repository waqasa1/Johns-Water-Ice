import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const Home = lazy(() => import('./pages/Home'));

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const handleScroll = useCallback(() => {
    setVisible(window.scrollY > 400);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-top-btn${visible ? ' visible' : ''}`}
      onClick={scrollUp}
      aria-label="Scroll to top"
      type="button"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15"/>
      </svg>
    </button>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Suspense fallback={<div className="page-loader">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}

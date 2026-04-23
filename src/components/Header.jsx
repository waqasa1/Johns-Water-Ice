import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/pictures/johns-water-ice-logo.webp';
import './Header.css';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="site-header">
      <div className="header-container">
        <Link to="/" className="header-logo" aria-label="John's Water Ice - Home">
          <img
            src={logo}
            alt="John's Water Ice Logo"
            width="90"
            height="52"
            fetchpriority="high"
            loading="eager"
            decoding="sync"
          />
        </Link>

        <nav className={`header-nav${mobileOpen ? ' open' : ''}`} id="main-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            <li><Link to="/" className="nav-link active" onClick={() => setMobileOpen(false)}>Home</Link></li>
            <li className="has-dropdown">
              <button className="nav-link dropdown-trigger" type="button" aria-expanded="false">
                Location
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <ul className="dropdown-menu">
                <li><a href="https://maps.google.com/?q=701+Christian+St+Philadelphia+PA+19147" target="_blank" rel="noopener noreferrer">Philadelphia, PA</a></li>
                <li><a href="https://maps.google.com/?q=2975+Philmont+Ave+Huntingdon+Valley+PA+19006" target="_blank" rel="noopener noreferrer">Huntingdon Valley, PA</a></li>
              </ul>
            </li>
            <li className="has-dropdown">
              <button className="nav-link dropdown-trigger" type="button" aria-expanded="false">
                About Us
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <ul className="dropdown-menu">
                <li><Link to="/" onClick={() => setMobileOpen(false)}>Our Story</Link></li>
                <li><Link to="/" onClick={() => setMobileOpen(false)}>Meet the Owner</Link></li>
              </ul>
            </li>
            <li><Link to="/" className="nav-link" onClick={() => setMobileOpen(false)}>Food Truck Services</Link></li>
            <li><Link to="/" className="nav-link" onClick={() => setMobileOpen(false)}>Menu</Link></li>
            <li><Link to="/" className="nav-link" onClick={() => setMobileOpen(false)}>Franchise</Link></li>
            <li><Link to="/" className="nav-link" onClick={() => setMobileOpen(false)}>Contact Us</Link></li>
          </ul>
        </nav>

        <button
          className={`hamburger${mobileOpen ? ' active' : ''}`}
          onClick={() => setMobileOpen(prev => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          type="button"
          id="hamburger-btn"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {mobileOpen && <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />}
    </header>
  );
}

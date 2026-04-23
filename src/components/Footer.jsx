import { Link } from 'react-router-dom';
const LOGO_B64 = "data:image/webp;base64,UklGRnotAABXRUJQVlA4WAoAAAAQAAAA/wEA/wEAQUxQSNUOAA..."; // Truncated for display
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="site-footer">
      <div className="footer-main container">
        <div className="footer-brand">
          <Link to="/" aria-label="John's Water Ice Home">
            <img src={LOGO_B64} alt="John's Water Ice" width="90" height="90" loading="lazy" decoding="async" />
          </Link>
          <p className="footer-tagline">
            The Family Business – Love, Dedication, Passion &amp; Pride. Since 1945.
          </p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/johnswaterice" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/johnswaterice" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-links-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/">Menu</Link></li>
            <li><Link to="/">Food Truck</Link></li>
            <li><Link to="/">Franchise</Link></li>
            <li><Link to="/">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Legal Links</h4>
          <ul>
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/">Terms and Condition</Link></li>
            <li><Link to="/">Disclaimer</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green-primary)" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>701 Christian St, Philadelphia, PA 19147</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green-primary)" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>2975 Philmont Ave, Huntingdon Valley, PA 19006</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green-primary)" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              <a href="tel:2159256955">(215) 925-6955</a>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green-primary)" strokeWidth="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:GetIced@JohnsWaterIce.com">GetIced@JohnsWaterIce.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright &copy; {currentYear} John&apos;s Water Ice</p>
      </div>
    </footer>
  );
}

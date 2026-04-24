'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import './Home.css';

/* ---- Scroll reveal component (Pass-through for stability) ---- */
const Reveal = ({ children, className = '' }) => {
  return (
    <div className={className} style={{ opacity: 1, transform: 'none' }}>
      {children}
    </div>
  );
};

/* ---- Ice Cream Cone Icon SVG ---- */
function IceCreamIcon() {
  return (
    <div className="feature-icon">
      <svg width="40" height="40" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <circle cx="32" cy="32" r="32" fill="#f8d7da"/>
        <path d="M32 48L24 28h16L32 48z" fill="#d42027"/>
        <circle cx="32" cy="24" r="8" fill="#d42027"/>
        <circle cx="26" cy="26" r="5" fill="#d42027"/>
        <circle cx="38" cy="26" r="5" fill="#d42027"/>
      </svg>
    </div>
  );
}

const testimonials = [
  {
    name: 'Vincent M.',
    text: 'Good water ice and quick service. You have the option to pay with cash or Venmo. I really like the strawberry and pineapple flavor water ice. The butter pecan ice cream is delicious. If you are in the area it\'s always nice to try. The portions are great for the price.'
  },
  {
    name: 'Elaine C.',
    text: 'Water ices are perfect for a sweltering humid summer day in Philly. Quick service and the lemon was perfect!! It was just what we needed after a walk near the piers.'
  },
  {
    name: 'Michael R.',
    text: 'You have the best water ice hands down in Philly. The cherry and lemon are incredible. Been coming here since I was a kid and the quality never changes. A true Philadelphia institution!'
  },
  {
    name: 'Sarah T.',
    text: 'Absolutely the best gelati in Philadelphia! The combination of water ice and ice cream is heavenly. The staff is always friendly and the portions are very generous. A must-visit!'
  },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const intervalRef = useRef(null);

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(nextTestimonial, 5000);
    return () => clearInterval(intervalRef.current);
  }, [nextTestimonial]);

  const goToTestimonial = (idx) => {
    setCurrentTestimonial(idx);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextTestimonial, 5000);
  };

  return (
    <>
      {/* ====== SECTION 1: HERO ====== */}
      <section className="hero-section confetti-bg" id="hero" style={{ minHeight: '800px' }}>
        <div className="container hero-grid">
          <div className="hero-content">
            <h1>The Family Business - Love, Dedication, Passion &amp; Pride. Since 1945.</h1>
            <p className="hero-sub">
              Buzzing destination serving water ice made from an old-school recipe, with rotating weekly flavors.
            </p>
          </div>
          <div className="hero-image-wrap" style={{ minHeight: '500px' }}>
            <svg className="hero-curved-svg" viewBox="0 0 520 120" aria-hidden="true">
              <defs>
                <path id="curvedTextPath" d="M 30,110 Q 260,-30 490,110" fill="none" />
              </defs>
              <text className="curved-text-svg">
                <textPath href="#curvedTextPath" startOffset="50%" textAnchor="middle">
                  Johns Water Ice
                </textPath>
              </text>
            </svg>
            <Image
              src="/pictures/johns-water-ice.webp"
              alt="John's Water Ice branded products featuring ice cream and water ice"
              width={500}
              height={500}
              priority
              className="hero-img"
            />
          </div>
        </div>
        <span className="accent-marks" aria-hidden="true"></span>
      </section>

      {/* ====== SECTION 2: FREEZE-DRIED PROMO ====== */}
      <section className="freeze-dried-section section-padding" id="freeze-dried" style={{ minHeight: '580px' }}>
        <div className="container freeze-dried-grid">
          <Reveal className="freeze-dried-text">
            <h2>Now Available Online: Freeze-Dried Water Ice!</h2>
            <p>
              John&apos;s Freeze-Dried Water Ice takes everything you love about the original and gives it a whole new twist—light, crunchy, and packed with bold flavor. It&apos;s the same nostalgic taste, just reimagined into a fun, snackable experience you won&apos;t forget.
            </p>
            <a href="https://www.johnswaterice.com" className="btn btn-green" target="_blank" rel="noopener noreferrer">Shop Now</a>
          </Reveal>
          <Reveal className="freeze-dried-img-wrap">
            <div className="freeze-dried-frame">
              <Image 
                src="/pictures/Freeze-Dried-Water-ice.webp" 
                alt="John's Freeze-Dried Water Ice packages in cherry and lemon flavors" 
                width={600} 
                height={570} 
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====== SECTION 3: GREEN CTA BANNER ====== */}
      <section className="green-cta-section" id="tradition" style={{ minHeight: '500px' }}>
        <div className="container green-cta-grid">
          <Reveal className="green-cta-img">
            <Image 
              src="/pictures/cherry-gelati-johns-water-ice.webp" 
              alt="Cherry gelati at John's Water Ice storefront" 
              width={500} 
              height={623} 
            />
          </Reveal>
          <Reveal className="green-cta-text">
            <h2>Experience the Sweet Tradition: John&apos;s Water Ice - A Taste of Family Heritage and Pure Refreshment</h2>
            <p className="green-cta-subtitle">CRAFTING HAPPINESS, ONE SCOOP AT A TIME</p>
            <p>
              Welcome to John&apos;s Water Ice, where time-honored tradition meets mouthwatering innovation. For over seven decades, we have been the guardians of a secret family recipe that&apos;s become a beloved Philadelphia institution.
            </p>
            <a href="#contact" className="btn btn-green">Book The Truck</a>
          </Reveal>
        </div>
      </section>

      {/* ====== SECTION 4: ABOUT US ====== */}
      <section className="about-section section-padding" id="about" style={{ minHeight: '650px' }}>
        <div className="container about-grid">
          <Reveal className="about-text">
            <h2>About Us</h2>
            <p className="section-subtitle">CRAFTING HAPPINESS, ONE SCOOP AT A TIME</p>
            <p>
              In 1945, our founder, John Cardullo, embarked on a remarkable journey. He left his homeland in Italy to seek new opportunities in the United States, ultimately settling in the vibrant city of Philadelphia.
            </p>
            <a href="#" className="btn btn-green-outline">Learn About Our History</a>
          </Reveal>
          <Reveal className="about-img-wrap">
            <Image 
              src="/pictures/best-water-ice-menu-johns-water-ice.webp" 
              alt="John's Water Ice menu featuring colorful water ice flavors" 
              width={500} 
              height={500} 
              className="about-img" 
            />
          </Reveal>
        </div>
      </section>

      {/* ====== SECTIONS 5-6: RED FEATURE CARDS ====== */}
      <section className="features-section" id="features">
        <div className="container">
          <Reveal>
            <h2 className="features-heading">Generations of Expertise, Pure Ingredients, and Unmatched Service</h2>
          </Reveal>
          <div className="features-grid">
            <Reveal className="feature-card">
              <IceCreamIcon />
              <h3>Generations of Expertise</h3>
              <p>With over 65 years of experience, we&apos;ve perfected the art of crafting the finest water ice.</p>
            </Reveal>
            <Reveal className="feature-card">
              <IceCreamIcon />
              <h3>Pure, Fresh Ingredients</h3>
              <p>At John&apos;s, we hand-select fresh fruits, squeeze them by hand, and use only filtered water and sugar.</p>
            </Reveal>
            <Reveal className="feature-card">
              <IceCreamIcon />
              <h3>Exceptional Service</h3>
              <p>Our dedicated staff are committed to delivering excellence in every scoop.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ====== SECTION 7: DAILY SPECIALS PARALLAX ====== */}
      <section className="parallax-cta-section" id="specials" style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("/pictures/johns-water-ice-store-front.webp")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '450px'
      }}>
        <div className="container parallax-cta-content">
          <Reveal>
            <h2>Looking for Daily Sweetness?</h2>
            <p>Here&apos;s to Satisfy Your Sweet Tooth with Our Irresistible Daily Specials</p>
            <a href="#" className="btn btn-green">Check Out Our Specials</a>
          </Reveal>
        </div>
      </section>

      {/* ====== SECTION 8: MENU - WATER ICE ====== */}
      <section className="menu-section section-padding" id="menu">
        <div className="container menu-grid">
          <Reveal className="menu-text">
            <h2>Our Menu: Dive into a World of Frozen Bliss and Beyond</h2>
            <p>
              At John&apos;s Water Ice, we specialize in crafting the most delightful Italian ice. We offer a range of flavors, including Lemon, Cherry, Chocolate, and Pineapple.
            </p>
            <a href="#" className="btn btn-pink">Request Catering</a>
          </Reveal>
          <Reveal className="menu-img-wrap">
            <Image 
              src="/pictures/johns-water-ice-store-front.webp" 
              alt="John's Water Ice storefront in Philadelphia" 
              width={600} 
              height={600} 
              className="menu-img" 
            />
          </Reveal>
        </div>
      </section>

      {/* ====== SECTION 10: FOUNDER BIO ====== */}
      <section className="founder-section section-padding" id="founder" style={{ minHeight: "600px" }}>
        <div className="container founder-grid">
          <Reveal className="founder-text">
            <h2>Meet the Heart and Soul Behind John&apos;s Water Ice</h2>
            <p>
              Anthony Cardullo is the 3rd generation owner who carries forward the legacy of his grandfather, John Cardullo.
            </p>
          </Reveal>
          <Reveal className="founder-img-wrap">
            <Image 
              src="/pictures/Anthony-Cardullo.webp" 
              alt="Anthony Cardullo, 3rd generation owner" 
              width={500} 
              height={727} 
              className="founder-img" 
            />
          </Reveal>
        </div>
      </section>

      {/* ====== SECTION 12: CONTACT / LOCATIONS ====== */}
      <section className="contact-section" id="contact" style={{ minHeight: "600px" }}>
        <div className="container contact-grid">
          <Reveal className="contact-img-wrap">
            <Image 
              src="/pictures/johns-water-ice-pretzel-and-lemon-water-ice.webp" 
              alt="John's Water Ice pretzel and lemon water ice" 
              width={500} 
              height={500} 
              className="contact-img" 
            />
          </Reveal>
          <div className="contact-info">
            <h2>Our Locations:</h2>
            <ul className="contact-details">
              <li>701 Christian St, Philadelphia, PA 19147</li>
              <li>2975 Philmont Ave, Huntingdon Valley, PA 19006</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ====== SECTION 13: TESTIMONIALS ====== */}
      <section className="testimonials-section confetti-bg section-padding" id="testimonials" style={{ minHeight: "500px" }}>
        <div className="container">
          <blockquote className="testimonial-hero-quote">
            <p>{testimonials[currentTestimonial].text}</p>
          </blockquote>
          <div className="testimonial-card">
            <h3 className="testimonial-name">{testimonials[currentTestimonial].name}</h3>
          </div>
          <div className="testimonial-dots" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`dot${idx === currentTestimonial ? ' active' : ''}`}
                onClick={() => goToTestimonial(idx)}
                role="tab"
                aria-selected={idx === currentTestimonial}
                aria-label={`Go to testimonial ${idx + 1}`}
                type="button"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

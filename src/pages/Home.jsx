import { useEffect, useRef, useState, useCallback } from 'react';
import './Home.css';

// Images
import heroImg from '../assets/pictures/johns-water-ice.webp';
import freezeDried from '../assets/pictures/Freeze-Dried-Water-ice.webp';
import storeCherryGelati from '../assets/pictures/cherry-gelati-johns-water-ice.webp';
import aboutCard from '../assets/pictures/best-water-ice-menu-johns-water-ice.webp';
import storeFront from '../assets/pictures/johns-water-ice-store-front.webp';
import brandedCard from '../assets/pictures/johns-water-ice.webp';
import ownerPhoto from '../assets/pictures/Anthony-Cardullo.webp';
import contactImg from '../assets/pictures/johns-water-ice-pretzel-and-lemon-water-ice.webp';
import logo from '../assets/pictures/johns-water-ice-logo.webp';

/* ---- Scroll reveal component (CLS Optimized) ---- */
const Reveal = ({ children, direction = 'up', delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasEntered(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    if (domRef.current) observer.observe(domRef.current);
    return () => { if (domRef.current) observer.unobserve(domRef.current); };
  }, []);

  const getTransform = () => {
    // If it's already entered, stay at none
    if (hasEntered) return 'none';
    
    // Check if we should slide at all (disable for first sections to prevent CLS)
    const isFirstFold = className.includes('hero') || className.includes('freeze') || className.includes('green-cta');
    if (isFirstFold) return 'none';

    switch (direction) {
      case 'up': return 'translate3d(0, 15px, 0)';
      case 'down': return 'translate3d(0, -15px, 0)';
      case 'left': return 'translate3d(-15px, 0, 0)';
      case 'right': return 'translate3d(15px, 0, 0)';
      default: return 'none';
    }
  };

  return (
    <div
      ref={domRef}
      className={className}
      style={{
        opacity: hasEntered ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
        willChange: 'opacity, transform',
        // Hide until loaded to prevent visual jumping
        visibility: hasEntered ? 'visible' : 'hidden'
      }}
    >
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

/* ---- Testimonials Data ---- */
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
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextTestimonial, 5000);
  };

  return (
    <>
      {/* ====== SECTION 1: HERO ====== */}
      <section className="hero-section confetti-bg" id="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1>The Family Business - Love, Dedication, Passion &amp; Pride. Since 1945.</h1>
            <p className="hero-sub">
              Buzzing destination serving water ice made from an old-school recipe, with rotating weekly flavors.
            </p>
          </div>
          <div className="hero-image-wrap">
            {/* SVG curved text arcing left-to-right above the image */}
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
            <img
              src={heroImg}
              alt="John's Water Ice branded products featuring ice cream and water ice"
              width="500"
              height="500"
              fetchpriority="high"
              loading="eager"
              decoding="sync"
              className="hero-img"
            />
          </div>
        </div>
        {/* Decorative pink accent marks */}
        <span className="accent-marks" aria-hidden="true"></span>
      </section>

      {/* ====== SECTION 2: FREEZE-DRIED PROMO ====== */}
      <section className="freeze-dried-section section-padding" id="freeze-dried">
        <div className="container freeze-dried-grid">
          <Reveal direction="left" className="freeze-dried-text">
            <h2>Now Available Online: Freeze-Dried Water Ice!</h2>
            <p>
              John&apos;s Freeze-Dried Water Ice takes everything you love about the original and gives it a whole new twist—light, crunchy, and packed with bold flavor. It&apos;s the same nostalgic taste, just reimagined into a fun, snackable experience you won&apos;t forget. If you&apos;re curious to try something truly unique, head over to the official site and place your order today.
            </p>
            <a href="https://www.johnswaterice.com" className="btn btn-green" target="_blank" rel="noopener noreferrer">Shop Now</a>
          </Reveal>
          <Reveal direction="right" className="freeze-dried-img-wrap">
            <div className="freeze-dried-frame">
              <img 
                src={freezeDried} 
                alt="John's Freeze-Dried Water Ice packages in cherry and lemon flavors" 
                width="600" 
                height="570" 
                loading="lazy" 
                decoding="async"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====== SECTION 3: GREEN CTA BANNER ====== */}
      <section className="green-cta-section" id="tradition">
        <div className="container green-cta-grid">
          <Reveal direction="left" className="green-cta-img">
            <img 
              src={storeCherryGelati} 
              alt="Cherry gelati at John's Water Ice storefront" 
              width="500" 
              height="623" 
              loading="lazy" 
              decoding="async"
            />
          </Reveal>
          <Reveal direction="right" className="green-cta-text">
            <h2>Experience the Sweet Tradition: John&apos;s Water Ice - A Taste of Family Heritage and Pure Refreshment</h2>
            <p className="green-cta-subtitle">CRAFTING HAPPINESS, ONE SCOOP AT A TIME</p>
            <p>
              Welcome to John&apos;s Water Ice, where time-honored tradition meets mouthwatering innovation. For over seven decades, we have been the guardians of a secret family recipe that&apos;s become a beloved Philadelphia institution. When you step into John&apos;s, you&apos;re not just entering a dessert parlor; you&apos;re stepping into our family&apos;s history—a history built on love, dedication, passion, and pride. With each scoop, we aim to share our heritage and bring smiles to your faces.
            </p>
            <p>For inquiries and bookings <strong>contact us today.</strong></p>
            <a href="#contact" className="btn btn-green">Book The Truck</a>
          </Reveal>
        </div>
      </section>

      {/* ====== SECTION 4: ABOUT US ====== */}
      <section className="about-section section-padding" id="about">
        <div className="container about-grid">
          <Reveal direction="left" className="about-text">
            <h2>About Us</h2>
            <p className="section-subtitle">CRAFTING HAPPINESS, ONE SCOOP AT A TIME</p>
            <p>
              In 1945, our founder, John Cardullo, embarked on a remarkable journey. He left his homeland in Italy to seek new opportunities in the United States, ultimately settling in the vibrant city of Philadelphia. With a heart full of determination, John began a humble business delivering coal and heating oil during the frigid winters, and something equally refreshing in the scorching summers – ice.
            </p>
            <a href="#" className="btn btn-green-outline">Learn About Our History</a>
          </Reveal>
          <Reveal direction="right" className="about-img-wrap">
            <img 
              src={aboutCard} 
              alt="John's Water Ice menu featuring colorful water ice flavors" 
              width="500" 
              height="500" 
              loading="lazy" 
              decoding="async"
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
              <p>With over 65 years of experience, we&apos;ve perfected the art of crafting the finest water ice. No preservatives, no additives—just pure, natural goodness.</p>
            </Reveal>
            <Reveal className="feature-card">
              <IceCreamIcon />
              <h3>Pure, Fresh Ingredients</h3>
              <p>At John&apos;s, we believe in keeping things simple. We hand-select fresh fruits, squeeze them by hand, and use only filtered water and sugar in our recipes.</p>
            </Reveal>
            <Reveal className="feature-card">
              <IceCreamIcon />
              <h3>Exceptional Service</h3>
              <p>Our dedicated staff are committed to delivering excellence in every scoop. Their enthusiasm and hard work ensure that your visit is an unforgettable experience.</p>
            </Reveal>
          </div>

          <Reveal>
            <h2 className="features-heading features-heading-second">Indulge in Delights That Define John&apos;s Water Ice</h2>
          </Reveal>
          <div className="features-grid">
            <Reveal className="feature-card">
              <IceCreamIcon />
              <h3>Unmatched Authenticity</h3>
              <p>Our decades-old family recipe isn&apos;t just a recipe; it&apos;s a piece of living history. When you savor our water ice, you&apos;re tasting a legacy of tradition and quality that&apos;s unrivaled.</p>
            </Reveal>
            <Reveal className="feature-card">
              <IceCreamIcon />
              <h3>Pure, Refreshing Delight</h3>
              <p>We spare no effort in sourcing the freshest, sweetest, highest quality fruits available. The result? A burst of natural flavors that will tantalize your taste buds and leave you refreshed.</p>
            </Reveal>
            <Reveal className="feature-card">
              <IceCreamIcon />
              <h3>Memorable Experiences</h3>
              <p>Whether it&apos;s a small gathering, a wedding, or a corporate event, we offer bulk orders and catering services that guarantee to make your event unforgettable.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ====== SECTION 7: DAILY SPECIALS PARALLAX ====== */}
      <section className="parallax-cta-section" id="specials" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${storeFront})` }}>
        <div className="container parallax-cta-content">
          <Reveal>
            <h2>Looking for Daily Sweetness?</h2>
            <p>Here&apos;s to Satisfy Your Sweet Tooth with Our Irresistible Daily Specials</p>
            <a href="#" className="btn btn-green">Click Here to Check Out Our Specials</a>
          </Reveal>
        </div>
      </section>

      {/* ====== SECTION 8: MENU - WATER ICE ====== */}
      <section className="menu-section section-padding" id="menu">
        <div className="container menu-grid">
          <Reveal direction="left" className="menu-text">
            <h2>Our Menu: Dive into a World of Frozen Bliss and Beyond</h2>
            <p>
              At John&apos;s Water Ice, we specialize in crafting the most delightful Italian ice. Our water ice is renowned for its authentic flavors, vibrant colors, and the unbeatable feeling of satisfaction it brings on a hot summer day. We offer a range of flavors, including Lemon, Cherry, Chocolate, and Pineapple, each a testament to the care and attention we put into our recipes.
            </p>
            <a href="#" className="btn btn-pink">Request Catering</a>
          </Reveal>
          <Reveal direction="right" className="menu-img-wrap">
            <img 
              src={storeFront} 
              alt="John's Water Ice storefront in Philadelphia" 
              width="600" 
              height="600" 
              loading="lazy" 
              decoding="async"
              className="menu-img" 
            />
          </Reveal>
        </div>
      </section>

      {/* ====== SECTION 9: MORE THAN WATER ICE ====== */}
      <section className="more-section section-padding" id="more-menu">
        <div className="container more-grid">
          <Reveal direction="left" className="more-img-wrap">
            <img 
              src={brandedCard} 
              alt="John's Water Ice branded products including ice cream and gelati" 
              width="500" 
              height="500" 
              loading="lazy" 
              decoding="async"
              className="more-img" 
            />
          </Reveal>
          <Reveal direction="right" className="more-text">
            <h2>But that&apos;s not all; we take pride in offering more than just water ice.</h2>
            <p>
              Indulge in our smooth and creamy soft serve ice-cream, available in classic flavors like Vanilla, Chocolate, Strawberry, and Butter Pecan. And when you&apos;re in the mood for a savory treat, our delicious pretzels are the perfect accompaniment to your sweet cravings.
            </p>
            <p>
              Explore our menu to discover the delectable variety of water ice drinks, gelati, ice creams, and pretzels that we have carefully curated to delight your senses. Quality is our hallmark, and each item on our menu reflects the commitment to excellence that defines John&apos;s Water Ice.
            </p>
            <a href="#" className="btn btn-pink">Check Our Full Menu</a>
          </Reveal>
        </div>
      </section>

      {/* ====== SECTION 10: FOUNDER BIO ====== */}
      <section className="founder-section section-padding" id="founder">
        <div className="container founder-grid">
          <Reveal direction="left" className="founder-text">
            <h2>Meet the Heart and Soul Behind John&apos;s Water Ice</h2>
            <p>
              Anthony Cardullo is the 3rd generation owner who carries forward the legacy of his grandfather, John Cardullo who arrived in the United States from Italy in 1945. Anthony&apos;s dedication to preserving the authenticity of our water ice and commitment to using only the finest ingredients ensure that every visit to John&apos;s is a taste of tradition and quality.
            </p>
            <p>
              Anthony&apos;s journey is a testament to the enduring spirit of family, heritage, and the pursuit of excellence. His hands-on approach, from selecting fresh fruits to overseeing every aspect of the business, reflects his passion for delivering the best to our valued customers.
            </p>
            <p>
              Interested in becoming a part of the John&apos;s Water Ice family? Explore our <a href="#" className="text-link">Franchising Opportunities</a> and join us in spreading the joy of our sweet tradition.
            </p>
          </Reveal>
          <Reveal direction="right" className="founder-img-wrap">
            <img 
              src={ownerPhoto} 
              alt="Anthony Cardullo, 3rd generation owner of John's Water Ice, holding water ice cups" 
              width="500" 
              height="727" 
              loading="lazy" 
              decoding="async"
              className="founder-img" 
            />
          </Reveal>
        </div>
      </section>

      {/* ====== SECTION 11: FIND US CTA ====== */}
      <section className="parallax-cta-section parallax-find" id="find-us" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${storeFront})` }}>
        <div className="container parallax-cta-content">
          <Reveal>
            <h2>Find Us, Taste the Magic!</h2>
            <p>Looking for Our Delicious Location? Here&apos;s to Dive into Our Sweet World</p>
            <a href="#contact" className="btn btn-green">Click Here to Find Our Flavorful Location</a>
          </Reveal>
        </div>
      </section>

      {/* ====== SECTION 12: CONTACT / LOCATIONS GREEN ====== */}
      <section className="contact-section" id="contact">
        <div className="container contact-grid">
          <Reveal direction="left" className="contact-img-wrap">
            <img 
              src={contactImg} 
              alt="John's Water Ice pretzel and lemon water ice" 
              width="500" 
              height="500" 
              loading="lazy" 
              decoding="async"
              className="contact-img" 
            />
          </Reveal>
          <Reveal direction="right" className="contact-info">
            <h2>Ready to experience the magic of John&apos;s Water Ice? Join us at our two convenient locations:</h2>
            <ul className="contact-details">
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>701 Christian St, Philadelphia, PA 19147</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>2975 Philmont Ave, Huntingdon Valley, PA 19006</span>
              </li>
            </ul>
            <p className="contact-cta-text">For inquiries, bookings, or to simply say hello, contact us at:</p>
            <ul className="contact-details">
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:GetIced@JohnsWaterIce.com">GetIced@JohnsWaterIce.com</a>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                <a href="tel:2159256955">215-925-6955</a>
              </li>
            </ul>
            <p className="contact-closing">
              Let us craft happiness for you, one scoop at a time. Come on by and satisfy your sweet cravings, and be part of our sweet tradition that spans generations. We can&apos;t wait to welcome you to the John&apos;s Water Ice family!
            </p>
          </Reveal>
        </div>
      </section>

      {/* ====== SECTIONS 13-14: TESTIMONIALS ====== */}
      <section className="testimonials-section confetti-bg section-padding" id="testimonials">
        <div className="container">
          <Reveal>
            <blockquote className="testimonial-hero-quote">
              <p>{testimonials[currentTestimonial].text}</p>
            </blockquote>
          </Reveal>

          <div className="testimonial-card">
            <img src={logo} alt="John's Water Ice" width="100" height="58" loading="lazy" className="testimonial-logo" />
            <h3 className="testimonial-name">{testimonials[currentTestimonial].name}</h3>
            <p className="testimonial-text">{testimonials[currentTestimonial].text}</p>
          </div>

          <div className="testimonial-dots" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`dot${idx === currentTestimonial ? ' active' : ''}`}
                onClick={() => goToTestimonial(idx)}
                role="tab"
                aria-selected={idx === currentTestimonial}
                aria-label={`Testimonial ${idx + 1}`}
                type="button"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

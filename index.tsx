import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

// NOTE: Removed server-only Google GenAI import and usage so this app can run directly in the browser.
// The original code attempted to import a Node/SDK package and to read process.env.API_KEY which
// will fail in a browser environment. For a smooth local demo we use a small mock generator that
// simulates the Gemini response. Replace this with a real API call on a server if needed.

// Types for the Generated Audit
interface Finding {
  title: string;
  description: string;
  severity: 'High' | 'Medium' | 'Low';
}

interface AuditData {
  productName: string;
  executiveSummary: string;
  scores: {
    ux: number;
    technical: number;
    accessibility: number;
  };
  uxFindings: Finding[];
  techFindings: Finding[];
}

// Lightweight mock generator to simulate AI output in the browser.
// Returns a Promise that resolves with a well-formed AuditData object after a short delay.
const generateAuditMock = async (productName: string): Promise<AuditData> => {
  // small delay to mimic network / compute
  await new Promise((res) => setTimeout(res, 700));

  const uxFindings: Finding[] = [
    {
      title: 'Confusing mobile navigation',
      description:
        'Primary actions are hidden below the fold or inside a menu; make primary CTAs visible and thumb-reachable on mobile.',
      severity: 'High'
    },
    {
      title: 'Unclear product proof',
      description:
        'Users can’t find examples, social proof, or clear onboarding. Add concise proof points and a hero CTA with examples.',
      severity: 'Medium'
    }
  ];

  const techFindings: Finding[] = [
    {
      title: 'Slow initial load',
      description:
        'Large assets and render-blocking CSS/JS slow first contentful paint. Audit assets and defer noncritical scripts.',
      severity: 'High'
    },
    {
      title: 'Accessibility gaps',
      description:
        'Low contrast and missing ARIA labels on key controls reduce reach. Improve semantics and color contrast.',
      severity: 'Medium'
    }
  ];

  return {
    productName,
    executiveSummary: `${productName} shows strong demand but the mobile experience causes large drop-off. This audit highlights UX and technical improvements to increase activation and retention.`,
    scores: {
      ux: 62,
      technical: 58,
      accessibility: 66
    },
    uxFindings,
    techFindings
  };
};

// --- Page 1: Intro / Stats Page ---
const StatsPage1 = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="page1-root">
      {/* Page number */}
      <div className="page1-page-number">1</div>

      {/* Text blocks */}
      <p className="page1-line page1-in-nov">In November,</p>

      <p className="page1-line page1-total-visits">22k different people opened the PayAI’s website.</p>

      <p className="page1-line page1-bounce-caption">Sadly, over half of them leave without clicking anything.</p>

      {/* Bounce chart + label */}
      <div className="page1-bounce-bars">
        {/* 5 dark bars */}
        <div className="bar bar--dark"></div>
        <div className="bar bar--dark"></div>
        <div className="bar bar--dark"></div>
        <div className="bar bar--dark"></div>
        <div className="bar bar--dark"></div>

        {/* stacked bar (small dark + tall blue) */}
        <div className="bar-stack">
          <div className="bar-stack-top"></div>
          <div className="bar-stack-bottom"></div>
        </div>

        {/* 4 blue bars */}
        <div className="bar bar--blue"></div>
        <div className="bar bar--blue"></div>
        <div className="bar bar--blue"></div>
        <div className="bar bar--blue"></div>
      </div>

      <div className="page1-bounce-pill">
        <span className="pill-value">52%</span>
        <span className="pill-dot"></span>
        <span className="pill-label">They leave</span>
      </div>

      <p className="page1-line page1-mobile-intro">84% of them are on their phones.</p>

      <p className="page1-line page1-mobile-detail">18,480 people open PayAI website on their mobile phones and about 12k leave without clicking a button.</p>

      <p className="page1-line page1-users-question">Who are these users?</p>

      {/* Next page CTA */}
      <div className="page1-next" onClick={onNext} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onNext()}>
        <span className="page1-next-text">Click Here to Next Page</span>
        <div className="page1-next-arrow">
          <span className="page1-next-arrow-line"></span>
          <span className="page1-next-arrow-head"></span>
        </div>
      </div>
    </div>
  );
};

// --- Page 2: Stats Details ---
const StatsPage2 = ({ onNext, onPrev }: { onNext: () => void; onPrev: () => void }) => {
  return (
    <div className="page2-root">
      {/* Page number */}
      <div className="page2-page-number">2</div>

      {/* Top data line */}
      <p className="page2-line page2-mobile-source">We know they are on mobile, About 10k from , 2k from <span className="page2-gmgn-tag">GMGN</span> and 1k from .</p>

      {/* Proof of product line */}
      <p className="page2-line page2-proof-product">They are users looking for "Proof of Product".</p>

      {/* Bullet list items */}
      <div className="page2-bullet-row page2-bullet-1">
        <span className="page2-bullet-dot"></span>
        <span className="page2-bullet-text">an item of ‘live’</span>
      </div>

      <div className="page2-bullet-row page2-bullet-2">
        <span className="page2-bullet-dot"></span>
        <span className="page2-bullet-text">a ‘slide’ interactive coherence</span>
      </div>

      <div className="page2-bullet-row page2-bullet-3">
        <span className="page2-bullet-dot"></span>
        <span className="page2-bullet-text">a story well told</span>
      </div>

      <div className="page2-bullet-row page2-bullet-4">
        <span className="page2-bullet-dot"></span>
        <span className="page2-bullet-text">reviews and social proof</span>
      </div>

      {/* Otherwise line */}
      <p className="page2-line page2-otherwise">otherwise, user assumes the product doesn't exist yet.</p>

      {/* Hence losing line */}
      <p className="page2-line page2-hence-losing">Hence, losing 12k potential holders and users a month because the mobile site is asking them to find the truth.</p>

      {/* Why? line */}
      <p className="page2-line page2-why">Why?</p>

      {/* GMGN-style logo block */}
      <div className="page2-logo-block">
        <div className="page2-logo-left"></div>
        <div className="page2-logo-right">
          <div className="page2-logo-bar"></div>
          <div className="page2-logo-bar"></div>
          <div className="page2-logo-bar"></div>
          <div className="page2-logo-bar"></div>
          <div className="page2-logo-bar"></div>
        </div>
      </div>

      {/* Tiny black square vector */}
      <div className="page2-small-square"></div>

      {/* Prev Page CTA */}
      <div className="page2-prev" onClick={onPrev} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onPrev()}>
        <div className="page2-next-arrow" style={{ transform: 'rotate(180deg)' }}>
          <span className="page2-next-arrow-line"></span>
          <span className="page2-next-arrow-head"></span>
        </div>
        <span className="page2-next-text" style={{ textAlign: 'left' }}>Prev Page</span>
      </div>

      {/* Next Page CTA */}
      <div className="page2-next" onClick={onNext} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onNext()}>
        <span className="page2-next-text">Next Page</span>
        <div className="page2-next-arrow">
          <span className="page2-next-arrow-line"></span>
          <span className="page2-next-arrow-head"></span>
        </div>
      </div>
    </div>
  );
};

// --- Page 3: Additional Stats/Hooks ---
const StatsPage3 = ({ onNext, onPrev }: { onNext: () => void; onPrev: () => void }) => {
  return (
    <div className="page3-root">
      {/* Page number */}
      <div className="page3-page-number">3</div>

      {/* Main lines */}
      <p className="page3-line page3-subconscious">They’re not looking. Users are subconsciously scanning for clarity and use.</p>

      <p className="page3-line page3-if-launch">If the "Launch App" or "Verify" buttons are hidden behind a burger menu or below the fold,</p>

      <p className="page3-line page3-if-messaging">If the messaging is not familiar and directing,</p>

      <p className="page3-line page3-if-layout">If the layout is heavy and interactions are slow</p>

      <p className="page3-line page3-if-icons">If the icons and illustrations are not storytelling.</p>

      <p className="page3-line page3-know-product">They know what the product does but they don’t know where to start.</p>

      <p className="page3-line page3-hence">Hence, 52% don’t click and 48% click less than 1.94 pages.</p>

      <p className="page3-line page3-what-now">What now?</p>

      {/* Prev Page CTA */}
      <div className="page3-prev" onClick={onPrev} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onPrev()}>
        <div className="page3-next-arrow" style={{ transform: 'rotate(180deg)' }}>
          <span className="page3-next-arrow-line"></span>
          <span className="page3-next-arrow-head"></span>
        </div>
        <span className="page3-next-text" style={{ textAlign: 'left' }}>Prev Page</span>
      </div>

      {/* Next Page CTA */}
      <div className="page3-next" onClick={onNext} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onNext()}>
        <span className="page3-next-text">Next Page</span>
        <div className="page3-next-arrow">
          <span className="page3-next-arrow-line"></span>
          <span className="page3-next-arrow-head"></span>
        </div>
      </div>
    </div>
  );
};

// --- Page 4: Mobile First Fix ---
const StatsPage4 = ({ onNext, onPrev }: { onNext: () => void; onPrev: () => void }) => {
  return (
    <div className="page4-root">
      {/* Page number */}
      <div className="page4-page-number">4</div>

      {/* Tiny black square accent */}
      <div className="page4-small-square"></div>

      {/* Main heading */}
      <p className="page4-line page4-heading">The Mobile-First Fix.</p>

      {/* Social traffic statement */}
      <p className="page4-line page4-social">100% of social traffic comes from . These users are on their phones, scrolling fast.</p>

      {/* Country share pills row */}
      <div className="page4-country-row">
        <div className="page4-country-pill">
          <span className="page4-pill-value">54.82%</span>
          <span className="page4-pill-dot"></span>
          <span className="page4-pill-flag page4-pill-flag--us" aria-label="United States"></span>
        </div>

        <div className="page4-country-pill">
          <span className="page4-pill-value">13.36%</span>
          <span className="page4-pill-dot"></span>
          <span className="page4-pill-flag page4-pill-flag--fr" aria-label="France"></span>
        </div>

        <div className="page4-country-pill">
          <span className="page4-pill-value">12.95%</span>
          <span className="page4-pill-dot"></span>
          <span className="page4-pill-flag page4-pill-flag--id" aria-label="Indonesia"></span>
        </div>

        <div className="page4-country-pill">
          <span className="page4-pill-value">7.95%</span>
          <span className="page4-pill-dot"></span>
          <span className="page4-pill-flag page4-pill-flag--sg" aria-label="Singapore"></span>
        </div>

        <div className="page4-country-pill">
          <span className="page4-pill-value">4.93%</span>
          <span className="page4-pill-dot"></span>
          <span className="page4-pill-flag page4-pill-flag--de" aria-label="Germany"></span>
        </div>
      </div>

      {/* Prev Page CTA */}
      <div className="page4-prev" onClick={onPrev} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onPrev()}>
        <div className="page4-next-arrow" style={{ transform: 'rotate(180deg)' }}>
          <span className="page4-next-arrow-line"></span>
          <span className="page4-next-arrow-head"></span>
        </div>
        <span className="page4-next-text" style={{ textAlign: 'left' }}>Prev Page</span>
      </div>

      {/* Next Page CTA */}
      <div className="page4-next" onClick={onNext} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onNext()}>
        <span className="page4-next-text">Next Page</span>
        <div className="page4-next-arrow">
          <span className="page4-next-arrow-line"></span>
          <span className="page4-next-arrow-head"></span>
        </div>
      </div>
    </div>
  );
};

// --- Page 5 (Audit Page): The Generator Tool ---
const AuditPage = ({ onGoHome, onPrev }: { onGoHome: () => void; onPrev: () => void }) => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [auditData, setAuditData] = useState<AuditData | null>(null);

  const handleGenerate = async () => {
    if (!inputValue.trim()) return;

    setIsLoading(true);
    setAuditData(null);

    try {
      // Use the browser-safe mock generator. Replace this with a backend call to Gemini if you
      // have a suitable server-side implementation and API key.
      const data = await generateAuditMock(inputValue.trim());
      setAuditData(data);
    } catch (error) {
      console.error('Error generating audit:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`layout-root ${auditData ? 'has-report' : ''}`}>
      {/* Left Spines */}
      <div className="spine spine--light"></div>
      <div className="spine spine--dark"></div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-row">
          <div className="hero-title">
            <span>A UX &amp; Technical Audit for</span>
            <input
              type="text"
              className="hero-input"
              placeholder="Product or Company Name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              style={{
                fontSize: '64px',
                fontFamily: 'inherit',
                fontWeight: 600,
                border: 'none',
                borderBottom: '4px solid #1d45d8',
                outline: 'none',
                width: '100%',
                marginTop: '10px',
                color: '#1d45d8',
                background: 'transparent'
              }}
            />
            {isLoading && (
              <div className="spinner" style={{ marginTop: '20px', borderColor: '#1d45d8', borderTopColor: 'transparent' }}></div>
            )}

            <div style={{ marginTop: 22 }}>
              <button onClick={handleGenerate} style={{ padding: '12px 20px', fontSize: 18, cursor: 'pointer' }}>
                Generate Audit
              </button>
            </div>
          </div>

          <div className="hero-mark">
            <div className="hero-mark-block hero-mark-block--big"></div>
            <div className="hero-mark-block hero-mark-block--small"></div>
          </div>
        </div>
      </section>

      {/* Generated Report Content */}
      <section className="report-content">
        {auditData && (
          <>
            <div className="report-grid">
              {/* Main Findings Column */}
              <div className="report-main">
                <h2 className="report-h2">Executive Summary</h2>
                <p className="report-p">{auditData.executiveSummary}</p>

                <h3 className="report-h3">Key UX Observations</h3>
                {auditData.uxFindings.map((f, i) => (
                  <div key={i} className="finding-item">
                    <div className={`finding-severity severity-${f.severity.toLowerCase()}`}>{f.severity}</div>
                    <div className="finding-content">
                      <h4>{f.title}</h4>
                      <p>{f.description}</p>
                    </div>
                  </div>
                ))}

                <h3 className="report-h3">Technical Notes</h3>
                {auditData.techFindings.map((f, i) => (
                  <div key={i} className="finding-item">
                    <div className={`finding-severity severity-${f.severity.toLowerCase()}`}>{f.severity}</div>
                    <div className="finding-content">
                      <h4>{f.title}</h4>
                      <p>{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sidebar Scores Column */}
              <div className="report-sidebar">
                <div className="score-card">
                  <div className="score-value">{auditData.scores.ux}</div>
                  <div className="score-label">UX Index</div>
                </div>
                <div className="score-card">
                  <div className="score-value">{auditData.scores.technical}</div>
                  <div className="score-label">Tech Health</div>
                </div>
                <div className="score-card">
                  <div className="score-value">{auditData.scores.accessibility}</div>
                  <div className="score-label">A11y Score</div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>

      {/* Prev Page CTA */}
      <div className="page1-prev" onClick={onPrev} style={{ left: '80px' }} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onPrev()}>
        <div className="page1-next-arrow" style={{ transform: 'rotate(180deg)' }}>
          <span className="page1-next-arrow-line"></span>
          <span className="page1-next-arrow-head"></span>
        </div>
        <span className="page1-next-text">Prev Page</span>
      </div>

      {/* Bottom Footer - Now clickable to return home */}
      <section className="bottom-panel">
        <div className="bottom-content" onClick={onGoHome} style={{ cursor: 'pointer' }}>
          <div className="brand-wordmark">UxGeek</div>
          <div className="brand-dot">
            <div className="brand-dot-inner"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Main App: Handles Routing/Scaling ---
const App = () => {
  const [currentPage, setCurrentPage] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // Dimensions of the content book
      const bookWidth = 1699;
      const bookHeight = 1960;

      // Target: 3/4 width of viewport, 4/5 height of viewport
      const targetWidth = window.innerWidth * 0.75;
      const targetHeight = window.innerHeight * 0.8;

      // Calculate scale to fit EITHER width OR height constraint
      const scaleW = targetWidth / bookWidth;
      const scaleH = targetHeight / bookHeight;

      // Use the smaller scale to ensure it fits both constraints
      const newScale = Math.min(scaleW, scaleH, 1); // never scale > 1

      setScale(newScale);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="scaler-container" style={{ transform: `scale(${scale})` }}>
      {currentPage === 1 && <StatsPage1 onNext={() => setCurrentPage(2)} />}
      {currentPage === 2 && <StatsPage2 onNext={() => setCurrentPage(3)} onPrev={() => setCurrentPage(1)} />}
      {currentPage === 3 && <StatsPage3 onNext={() => setCurrentPage(4)} onPrev={() => setCurrentPage(2)} />}
      {currentPage === 4 && <StatsPage4 onNext={() => setCurrentPage(5)} onPrev={() => setCurrentPage(3)} />}
      {currentPage === 5 && <AuditPage onGoHome={() => setCurrentPage(1)} onPrev={() => setCurrentPage(4)} />}
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

// --- Mobile Blocker Component ---
const MobileBlocker = () => {
  return (
    <div className="mobile-root">
      <div className="mobile-content">
        <h1 className="mobile-text">Please open with desktop</h1>
      </div>
      <div className="mobile-brand-group">
        <div className="mobile-brand-name">UxGeek</div>
        <div className="mobile-dot">
          <div className="mobile-dot-inner"></div>
        </div>
      </div>
    </div>
  );
};

// --- Page 0: Cover Page ---
const CoverPage = ({ onNext, onRestart }: { onNext?: () => void, onRestart?: () => void }) => {
  return (
    <div className="cover-root" onClick={onNext} style={{ cursor: onNext ? 'pointer' : 'default' }}>
      <div className="cover-bottom-panel"></div>
      <div className="cover-spine-light"></div>
      <div className="cover-spine-dark"></div>
      <div className="cover-title-row">
        <h1 className="cover-title">A UX &amp; Technical Audit for</h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className="cover-logo" style={{ width: '216px', height: '216px', flexShrink: 0 }}>
          <defs>
            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="212.2909" y1="592.3892" x2="268.8975" y2="592.3892" gradientTransform="matrix(1 0 0 1 0 -342)">
              <stop offset="0.1732" stopColor="#4D63F6"/>
              <stop offset="0.648" stopColor="#1D45D8"/>
            </linearGradient>
            <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="267.2" y1="604.1" x2="328.1324" y2="604.1" gradientTransform="matrix(1 0 0 1 0 -342)">
              <stop offset="0.1732" stopColor="#4D63F6"/>
              <stop offset="0.648" stopColor="#1D45D8"/>
            </linearGradient>
            <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="331" y1="615.7064" x2="392.0949" y2="615.7064" gradientTransform="matrix(1 0 0 1 0 -342)">
              <stop offset="0.1732" stopColor="#4D63F6"/>
              <stop offset="0.648" stopColor="#1D45D8"/>
            </linearGradient>
            <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="391.1788" y1="592.2" x2="468.5779" y2="592.2" gradientTransform="matrix(1 0 0 1 0 -342)">
              <stop offset="0.1732" stopColor="#4D63F6"/>
              <stop offset="0.648" stopColor="#1D45D8"/>
            </linearGradient>
            <linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="470.2" y1="592.2" x2="485.4324" y2="592.2" gradientTransform="matrix(1 0 0 1 0 -342)">
              <stop offset="0.1732" stopColor="#4D63F6"/>
              <stop offset="0.648" stopColor="#1D45D8"/>
            </linearGradient>
            <linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="14.6" y1="2568.7625" x2="149.4" y2="2568.7625" gradientTransform="matrix(1 0 0 1 0 -2290)">
              <stop offset="0.1732" stopColor="#4D63F6"/>
              <stop offset="0.648" stopColor="#1D45D8"/>
            </linearGradient>
            <linearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" x1="14.6" y1="2539.8" x2="149.4" y2="2539.8" gradientTransform="matrix(1 0 0 1 0 -2290)">
              <stop offset="0.0056" stopColor="#98AFFF"/>
              <stop offset="0.6927" stopColor="#4D63F6"/>
            </linearGradient>
            <linearGradient id="SVGID_8_" gradientUnits="userSpaceOnUse" x1="14.6" y1="2510.8" x2="149.4" y2="2510.8" gradientTransform="matrix(1 0 0 1 0 -2290)">
              <stop offset="0" stopColor="#D7E3FF"/>
              <stop offset="1" stopColor="#8AA3FF"/>
            </linearGradient>
          </defs>
          <g>
            <path fill="url(#SVGID_1_)" d="M255.5,212.8c4.1,2.4,7.4,5.7,9.8,9.8s3.6,8.6,3.6,13.5s-1.2,9.3-3.6,13.4c-2.4,4.1-5.7,7.3-9.8,9.8   c-4.1,2.4-8.6,3.7-13.5,3.7h-14.6v28.4h-15.2v-82H242C246.9,209.2,251.4,210.4,255.5,212.8z M242.1,248.3c3.4,0,6.2-1.2,8.7-3.6   c2.4-2.4,3.7-5.2,3.7-8.6c0-3.5-1.2-6.3-3.6-8.7c-2.4-2.4-5.3-3.6-8.7-3.6h-14.6v24.5L242.1,248.3L242.1,248.3z"/>
            <path fill="url(#SVGID_2_)" d="M313.7,232.7h14.6v58.6h-14.6v-6.1c-4.4,5.1-10.1,7.7-16.9,7.7c-5.9,0-11-1.4-15.5-3.9   c-4.5-2.7-7.9-6.3-10.4-11c-2.4-4.7-3.7-10-3.7-15.8c0-5.9,1.2-11.2,3.7-15.8c2.4-4.7,5.9-8.3,10.4-11.1c4.5-2.7,9.6-4,15.5-4   c6.8,0,12.5,2.6,16.9,7.7V232.7z M308.9,274.4c3.2-3.3,4.8-7.4,4.8-12.5c0-5-1.6-9.1-4.7-12.3s-7.1-4.8-11.9-4.8   c-4.5,0-8.2,1.6-11.2,5s-4.3,7.4-4.3,12.2c0,4.9,1.5,8.9,4.3,12.3c2.9,3.3,6.6,4.9,11.2,4.9C301.8,279.3,305.7,277.7,308.9,274.4z"/>
            <path fill="url(#SVGID_3_)" d="M376.8,232.7H392l-20.5,58.7c-3,8.1-7.2,14.1-12.6,18.1c-5.3,4-11.6,5.8-19,5.2v-14.1c0.5,0.1,1.2,0.1,2.1,0.1   c6.2,0,11.2-3.8,14.7-11.4L331,232.6h15.6l17.2,37.3L376.8,232.7z"/>
            <path fill="url(#SVGID_4_)" d="M468.6,291.2h-16.3l-6.1-16.5h-32.4l-6.1,16.5h-16.4l30.5-82h16.4L468.6,291.2z M430,231.1l-10.9,29h21.7   L430,231.1z"/>
            <path fill="url(#SVGID_5_)" d="M470.2,291.2v-82h15.2v82H470.2z"/>
          </g>
          <g>
            <path fill="url(#SVGID_6_)" d="M80.3,243.6l-63.6,31.8c-2.8,1.4-2.8,5.4,0,6.8L80.3,314c1.1,0.5,2.3,0.5,3.4,0l63.6-31.8   c2.8-1.4,2.8-5.4,0-6.8l-63.6-31.8C82.6,243,81.4,243,80.3,243.6z"/>
            <path fill="url(#SVGID_7_)" d="M80.3,214.6l-63.6,31.8c-2.8,1.4-2.8,5.4,0,6.8L80.3,285c1.1,0.5,2.3,0.5,3.4,0l63.6-31.8   c2.8-1.4,2.8-5.4,0-6.8l-63.6-31.8C82.6,214.1,81.4,214.1,80.3,214.6z"/>
            <path fill="url(#SVGID_8_)" d="M80.3,185.6l-63.6,31.8c-2.8,1.4-2.8,5.4,0,6.8L80.3,256c1.1,0.5,2.3,0.5,3.4,0l63.6-31.8   c2.8-1.4,2.8-5.4,0-6.8l-63.6-31.8C82.6,185.1,81.4,185.1,80.3,185.6z"/>
          </g>
        </svg>
      </div>
      <div 
        className="cover-brand-group" 
        onClick={(e) => {
          if (onRestart) {
            e.stopPropagation();
            onRestart();
          }
        }}
        style={{ cursor: onRestart ? 'pointer' : 'inherit' }}
      >
        <div className="cover-brand-name">UxGeek</div>
        <div className="cover-dot">
          <div className="cover-dot-inner"></div>
        </div>
      </div>
    </div>
  );
};

// --- Page 1 ---
const StatsPage1 = ({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) => {
  return (
    <div className="page1-root">
      <div className="page1-page-number">1</div>
      <p className="page1-line page1-in-nov">In November,</p>
      <p className="page1-line page1-total-visits">22k different people opened the PayAI’s website.</p>
      <p className="page1-line page1-bounce-caption">Sadly, over half of them leave without clicking anything.</p>
      <div className="page1-bounce-bars">
        <div className="bar bar--dark"></div><div className="bar bar--dark"></div><div className="bar bar--dark"></div><div className="bar bar--dark"></div><div className="bar bar--dark"></div>
        <div className="bar-stack"><div className="bar-stack-top"></div><div className="bar-stack-bottom"></div></div>
        <div className="bar bar--blue"></div><div className="bar bar--blue"></div><div className="bar bar--blue"></div><div className="bar bar--blue"></div>
      </div>
      <div className="page1-bounce-pill">
        <span className="pill-value">52%</span><span className="pill-dot"></span><span className="pill-label">They leave</span>
      </div>
      <p className="page1-line page1-mobile-intro">84% of them are on their phones.</p>
      <p className="page1-line page1-mobile-detail">18,480 people open PayAI website on their mobile phones and about 12k leave without clicking a button.</p>
      <p className="page1-line page1-users-question">Who are these users?</p>
      <div className="page1-prev" onClick={onPrev}>
        <div className="page1-next-arrow" style={{ transform: 'rotate(180deg)' }}><span className="page1-next-arrow-line"></span><span className="page1-next-arrow-head"></span></div>
        <span className="page1-next-text" style={{textAlign: 'left'}}>Cover</span>
      </div>
      <div className="page1-next" onClick={onNext}>
        <span className="page1-next-text">Click Here to Next Page</span>
        <div className="page1-next-arrow"><span className="page1-next-arrow-line"></span><span className="page1-next-arrow-head"></span></div>
      </div>
    </div>
  );
};

// --- Page 2 ---
const StatsPage2 = ({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) => {
  return (
    <div className="page2-root">
      <div className="page2-page-number">2</div>
      <p className="page2-line page2-mobile-source">
        We know they are on mobile, About 10k from <span className="icon-x">
          <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"></path></g></svg>
        </span>, 2k from <span className="page2-gmgn-tag">GMGN</span> and CoinGecko
      </p>
      <p className="page2-line page2-proof-product">They are users looking for "Proof of Product".</p>
      <div className="page2-bullet-row page2-bullet-1"><span className="page2-bullet-dot"></span><span className="page2-bullet-text">an item of ‘live’</span></div>
      <div className="page2-bullet-row page2-bullet-2"><span className="page2-bullet-dot"></span><span className="page2-bullet-text">a ‘slide’ interactive coherence</span></div>
      <div className="page2-bullet-row page2-bullet-3"><span className="page2-bullet-dot"></span><span className="page2-bullet-text">a story well told</span></div>
      <div className="page2-bullet-row page2-bullet-4"><span className="page2-bullet-dot"></span><span className="page2-bullet-text">reviews and social proof</span></div>
      <p className="page2-line page2-otherwise">otherwise, user assumes the product doesn't exist yet.</p>
      <p className="page2-line page2-hence-losing">Hence, losing 12k potential holders and users a month because the mobile site is asking them to find the truth.</p>
      <div className="page2-prev" onClick={onPrev}><div className="page2-next-arrow" style={{ transform: 'rotate(180deg)' }}><span className="page2-next-arrow-line"></span><span className="page2-next-arrow-head"></span></div><span className="page2-next-text" style={{textAlign: 'left'}}>Prev. Page</span></div>
      <div className="page2-next" onClick={onNext}><span className="page2-next-text">Next Page</span><div className="page2-next-arrow"><span className="page2-next-arrow-line"></span><span className="page2-next-arrow-head"></span></div></div>
    </div>
  );
};

// --- Page 3 ---
const StatsPage3 = ({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) => {
  return (
    <div className="page3-root">
      <div className="page3-page-number">3</div>
      <p className="page3-line page3-subconscious">It is not a "bad" product, it is a subconscious disconnect between the user and the interface.</p>
      <p className="page3-line page3-if-launch">If we are launching a product for users on X (twitter),</p>
      <p className="page3-line page3-if-messaging">the messaging should be fast,</p>
      <p className="page3-line page3-if-layout">the layout should be familiar,</p>
      <p className="page3-line page3-if-icons">the icons should be recognizable.</p>
      <p className="page3-line page3-know-product">They know the product is great, they just need the interface to not get in the way.</p>
      <p className="page3-line page3-hence">Hence, the need for a Mobile-First Audit &amp; Fix.</p>
      <p className="page3-line page3-what-now">What now?</p>
      <div className="page3-prev" onClick={onPrev}><div className="page3-next-arrow" style={{ transform: 'rotate(180deg)' }}><span className="page3-next-arrow-line"></span><span className="page3-next-arrow-head"></span></div><span className="page3-next-text" style={{textAlign: 'left'}}>Prev. Page</span></div>
      <div className="page3-next" onClick={onNext}><span className="page3-next-text">Next Page</span><div className="page3-next-arrow"><span className="page3-next-arrow-line"></span><span className="page3-next-arrow-head"></span></div></div>
    </div>
  );
};

// --- Page 4 ---
const StatsPage4 = ({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) => {
  return (
    <div className="page4-root">
      <div className="page4-page-number">4</div>
      <p className="page4-line page4-heading">The Mobile-First Fix.</p>
      <p className="page4-line page4-social">
        100% of social traffic comes from <span className="icon-x"><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"></path></g></svg></span>. These users are on their phones, scrolling fast.
      </p>
      <div className="page4-copy-block">
        <p className="page4-line page4-global-copy">Globally simplified copy that reads well on a vertical screen, for users from</p>
        <div className="page4-country-row">
          <div className="page4-country-pill"><span className="page4-pill-value">54.82%</span><span className="page4-pill-dot"></span><span className="page4-pill-flag page4-pill-flag--us" aria-label="United States"></span><span className="page4-pill-name">America</span></div>
          <div className="page4-country-pill"><span className="page4-pill-value">13.36%</span><span className="page4-pill-dot"></span><span className="page4-pill-flag page4-pill-flag--fr" aria-label="France"></span><span className="page4-pill-name">France</span></div>
          <div className="page4-country-pill"><span className="page4-pill-value">12.95%</span><span className="page4-pill-dot"></span><span className="page4-pill-flag page4-pill-flag--id" aria-label="Indonesia"></span><span className="page4-pill-name">Indonesia</span></div>
          <div className="page4-country-pill"><span className="page4-pill-value">7.95%</span><span className="page4-pill-dot"></span><span className="page4-pill-flag page4-pill-flag--sg" aria-label="Singapore"></span><span className="page4-pill-name">Singapore</span></div>
          <div className="page4-country-pill"><span className="page4-pill-value">4.93%</span><span className="page4-pill-dot"></span><span className="page4-pill-flag page4-pill-flag--de" aria-label="Germany"></span><span className="page4-pill-name">Germany</span></div>
        </div>
      </div>
      <div className="page4-ux-list">
        <div className="page4-ux-items">
          <p className="page4-ux-line">Larger touch targets for ‘actionable’ buttons.</p>
          <p className="page4-ux-line">A slippery interaction flow.</p>
          <p className="page4-ux-line">An array of social proof/partnerships/reviews.</p>
          <p className="page4-ux-line">Active confirmation and feedbacks.</p>
          <p className="page4-ux-line">Idempotent End-points</p>
        </div>
        <p className="page4-ux-summary">Just enough of all these.</p>
      </div>
      <div className="page4-prev" onClick={onPrev}><div className="page4-next-arrow" style={{ transform: 'rotate(180deg)' }}><span className="page4-next-arrow-line"></span><span className="page4-next-arrow-head"></span></div><span className="page4-next-text" style={{textAlign: 'left'}}>Prev. Page</span></div>
      <div className="page4-next" onClick={onNext}><span className="page4-next-text">Next Page</span><div className="page4-next-arrow"><span className="page4-next-arrow-line"></span><span className="page4-next-arrow-head"></span></div></div>
    </div>
  );
};

// --- Page 5 ---
const StatsPage5 = ({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) => {
  return (
    <div className="page5-root">
      <div className="page5-page-number">5</div>
      <p className="page5-line page5-intro">I’m Samsudeen, a design engineer.</p>
      <p className="page5-line page5-step1">I’ll be starting the 6 weeks process with a walkthrough of the product to have a solid context and define how far into the product the problem reaches.</p>
      <p className="page5-line page5-step2">In a week, I’ll design multiple low fidelity iterations of a better performing interface with unlimited iterations till taste.</p>
      <p className="page5-line page5-step3">In another week or 2, I’ll design the highest fidelity of the iteration and hand it off for staging.</p>
      <p className="page5-line page5-step4">If I have to work with your engineering team, I’d love it to be in sync and I’d love to follow the same timeline.</p>
      <p className="page5-line page5-step5">After shipping, I’d be monitoring the performance for optimisation and I’d be available for necessary implementations, for 3 weeks.</p>
      <p className="page5-line page5-why">Why me?</p>
      <div className="page5-prev" onClick={onPrev}><div className="page5-next-arrow" style={{ transform: 'rotate(180deg)' }}><span className="page5-next-arrow-line"></span><span className="page5-next-arrow-head"></span></div><span className="page5-next-text" style={{textAlign: 'left'}}>Prev. Page</span></div>
      <div className="page5-next" onClick={onNext}><span className="page5-next-text">Next Page</span><div className="page5-next-arrow"><span className="page5-next-arrow-line"></span><span className="page5-next-arrow-head"></span></div></div>
    </div>
  );
};

// --- Page 6 ---
const StatsPage6 = ({ onNext, onPrev, onGoToCover, isBookMode, onToggleView }: { 
  onNext: () => void, 
  onPrev: () => void, 
  onGoToCover: () => void, 
  isBookMode: boolean,
  onToggleView: () => void 
}) => {
  const handleBuildClick = () => {
    window.open("https://calendly.com/samsudeenafolabi/30min", "_blank");
  };

  return (
    <div className="page6-root">
      <div className="page6-page-number">6</div>
      <p className="page6-line page6-prophecy">The self-fulfilling prophecy of how much hard work will go into converting the 88% increase in eyeballs to holders and paying users is the amount of work I did on executing this proposal.</p>
      <p className="page6-line page6-experience">I used to work with YC Companies, I have over 2years of experience as a designer and a design engineer.</p>
      <p className="page6-line page6-friends">I am friends with all my previous clients, fun to work with and I love to listen more than I talk.</p>
      
      {/* Centered Button Group */}
      <div className="page6-cta-group">
        <div className="page6-build-btn" onClick={handleBuildClick}>
          <span className="page6-build-text">Let’s Build</span>
        </div>
        <div className="page6-view-single-btn" onClick={onToggleView}>
          <span className="page6-view-single-text">
            {isBookMode ? "View single page" : "View two pages"}
          </span>
        </div>
      </div>

      <p className="page6-line page6-loss">Every day we wait is 400 new users lost.</p>
      <div className="page6-prev" onClick={onPrev}>
        <div className="page6-prev-arrow"><span className="page6-prev-arrow-line"></span><span className="page6-prev-arrow-head"></span></div>
        <span className="page6-prev-text">Prev. Page</span>
      </div>
      <div className="page6-next" onClick={onGoToCover}>
        <span className="page6-next-text">Cover</span>
        <div className="page6-next-arrow"><span className="page6-next-arrow-line"></span><span className="page6-next-arrow-head"></span></div>
      </div>
    </div>
  );
};

// --- App Component ---
const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isBookMode, setIsBookMode] = useState(true);
  const scalerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scale logic
  useEffect(() => {
    const handleResize = () => {
      if (scalerRef.current) {
        // In book mode, base width is effectively double (3398), single is 1699.
        const baseWidth = isBookMode ? 3398 : 1699;
        const baseHeight = 1960;
        
        const scaleX = window.innerWidth / baseWidth;
        const scaleY = window.innerHeight / baseHeight;
        // Use a slightly more conservative scale to ensure fit
        const scale = Math.min(scaleX, scaleY) * 0.95; 
        
        scalerRef.current.style.transform = `scale(${scale})`;
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isBookMode]);

  // Page Components Array
  // Index: 0=Cover, 1=P1, 2=P2, 3=P3, 4=P4, 5=P5, 6=P6, 7=Back Cover
  const pages = [
    <CoverPage key="cover" onNext={() => goNext()} />,
    <StatsPage1 key="p1" onNext={() => goNext()} onPrev={() => goPrev()} />,
    <StatsPage2 key="p2" onNext={() => goNext()} onPrev={() => goPrev()} />,
    <StatsPage3 key="p3" onNext={() => goNext()} onPrev={() => goPrev()} />,
    <StatsPage4 key="p4" onNext={() => goNext()} onPrev={() => goPrev()} />,
    <StatsPage5 key="p5" onNext={() => goNext()} onPrev={() => goPrev()} />,
    <StatsPage6 
      key="p6" 
      onNext={() => goNext()} 
      onPrev={() => goPrev()} 
      onGoToCover={() => setCurrentPage(0)} 
      isBookMode={isBookMode}
      onToggleView={() => toggleViewMode()}
    />,
    <CoverPage key="back-cover" onRestart={() => setCurrentPage(0)} /> 
  ];

  const toggleViewMode = () => {
    setIsBookMode(prev => {
      const nextMode = !prev;
      // Snap logic when entering book mode
      if (nextMode) {
        // If current is even (right page) and not last/first, snap to odd (left page)
        if (currentPage > 0 && currentPage < pages.length - 1 && currentPage % 2 === 0) {
          setCurrentPage(currentPage - 1);
        }
      }
      return nextMode;
    });
  };

  const goNext = () => {
    if (currentPage < pages.length - 1) {
      if (isBookMode) {
        // If cover (0), go to 1 (Spread 1-2)
        if (currentPage === 0) setCurrentPage(1);
        // If spread (1, 3, 5), jump +2
        else if (currentPage < pages.length - 2) setCurrentPage(c => c + 2);
        // If last spread, go to Back Cover
        else setCurrentPage(c => c + 1);
      } else {
        setCurrentPage(c => c + 1);
      }
    }
  };

  const goPrev = () => {
    if (currentPage > 0) {
      if (isBookMode) {
        // If Back Cover (7), go to last spread 5
        if (currentPage === 7) setCurrentPage(5);
        else if (currentPage > 1) setCurrentPage(c => c - 2);
        else setCurrentPage(0);
      } else {
        setCurrentPage(c => c - 1);
      }
    }
  };

  if (isMobile) return <MobileBlocker />;

  return (
    <div className="book-shell">
      <div ref={scalerRef} className="book-scaler">
        <div className={`book-scene ${isBookMode ? 'is-book' : ''}`}>
          {pages.map((page, index) => {
            let stateClass = "";
            let spreadClass = "";
            
            if (isBookMode) {
               // BOOK MODE LOGIC
               // Check visibility
               const isVisible = 
                  (currentPage === 0 && index === 0) ||
                  (currentPage === 7 && index === 7) ||
                  (currentPage === index) || // Left page of spread
                  (currentPage === index - 1 && currentPage > 0 && currentPage < 7); // Right page of spread

               if (isVisible) {
                 stateClass = "page--current";
                 if (index === 0 || index === 7) spreadClass = "spread-center";
                 else if (index % 2 !== 0) spreadClass = "spread-left"; // Odd index = Left page
                 else spreadClass = "spread-right"; // Even index = Right page
               } else {
                 if (index < currentPage) stateClass = "page--past";
                 else stateClass = "page--future";
               }

            } else {
              // SINGLE MODE LOGIC
              if (index === currentPage) stateClass = "page--current";
              else if (index < currentPage) stateClass = "page--past";
              else stateClass = "page--future";
            }

            return (
              <div key={index} className={`book-page ${stateClass} ${spreadClass}`} style={{ zIndex: pages.length - index }}>
                {page}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
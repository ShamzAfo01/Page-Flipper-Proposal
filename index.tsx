import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

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
const generateAuditMock = async (productName: string): Promise<AuditData> => {
  await new Promise((r) => setTimeout(r, 600));

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
    scores: { ux: 62, technical: 58, accessibility: 66 },
    uxFindings,
    techFindings
  };
};

// --- Page 0: Cover Page ---
const CoverPage = ({ onNext }: { onNext: () => void }) => {
  console.log('CoverPage rendered');
  return (
    <div className="cover-root" onClick={onNext} style={{ cursor: 'pointer' }}>
      
      {/* Bottom Dark Panel (Background Layer) */}
      <div className="cover-bottom-panel"></div>

      {/* Spines */}
      <div className="cover-spine-light"></div>
      <div className="cover-spine-dark"></div>

      {/* Title Row */}
      <div className="cover-title-row">
        <h1 className="cover-title">A UX &amp; Technical Audit for</h1>
        {/* Logo SVG - Scaled 1.15x from 188px to ~216px */}
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

      {/* Logo Group */}
      <div className="cover-brand-group">
        <div className="cover-brand-name">UxGeek</div>
        <div className="cover-dot">
          <div className="cover-dot-inner"></div>
        </div>
      </div>

    </div>
  );
};

// --- Page 1: Intro / Stats Page ---
const StatsPage1 = ({ onNext, onPrev, onOpenCover }: { onNext: () => void; onPrev: () => void; onOpenCover?: () => void }) => {
  return (
    <div className="page1-root">
      {/* Page number */}
      <div className="page1-page-number">1</div>

      {/* Text blocks */}
      <p className="page1-line page1-in-nov">
        In November,
      </p>

      <p className="page1-line page1-total-visits">
        22k different people opened the PayAI’s website.
      </p>

      <p className="page1-line page1-bounce-caption">
        Sadly, over half of them leave without clicking anything.
      </p>

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

      <p className="page1-line page1-mobile-intro">
        84% of them are on their phones.
      </p>

      <p className="page1-line page1-mobile-detail">
        18,480 people open PayAI website on their mobile phones and about 12k leave without clicking a button.
      </p>

      <p className="page1-line page1-users-question">
        Who are these users?
      </p>

      {/* Prev Page CTA (To Cover) */}
      <div className="page1-prev" onClick={onPrev}>
        <div className="page1-next-arrow" style={{ transform: 'rotate(180deg)' }}>
          <span className="page1-next-arrow-line"></span>
          <span className="page1-next-arrow-head"></span>
        </div>
        <span className="page1-next-text" style={{textAlign: 'left'}}>Cover</span>
      </div>

      {/* Next page CTA */}
      <div className="page1-next" onClick={onNext}>
        <span className="page1-next-text">Click Here to Next Page</span>
        <div className="page1-next-arrow">
          <span className="page1-next-arrow-line"></span>
          <span className="page1-next-arrow-head"></span>
        </div>
      </div>

      {/* Open Cover CTA - New Button */}
      <div className="page1-next" onClick={() => onOpenCover && onOpenCover()} style={{ left: 'auto', right: '80px', top: '1817px', width: 'auto', gap: '20px', zIndex: 10 }}>
        <span className="page1-next-text" style={{marginRight: '0'}}>Open Cover</span>
        <div className="page1-next-arrow">
          <span className="page1-next-arrow-line"></span>
          <span className="page1-next-arrow-head"></span>
        </div>
      </div>
    </div>
  );
};

// --- Page 2: Stats Details ---
const StatsPage2 = ({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) => {
  return (
    <div className="page2-root">
      {/* Page number */}
      <div className="page2-page-number">2</div>

      {/* Top data line */}
      <p className="page2-line page2-mobile-source">
        We know they are on mobile, About 10k from <span className="icon-x">
          <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"></path></g></svg>
        </span>, 2k from <span className="page2-gmgn-tag">GMGN</span> and CoinGecko </p>

      {/* Proof of product line */}
      <p className="page2-line page2-proof-product">
        They are users looking for "Proof of Product".
      </p>

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
      <p className="page2-line page2-otherwise">
        otherwise, user assumes the product doesn't exist yet.
      </p>

      {/* Hence losing line */}
      <p className="page2-line page2-hence-losing">
        Hence, losing 12k potential holders and users a month because the mobile site is asking them to find the truth.
      </p>

      {/* Why? line */}
      <p className="page2-line page2-why">
        Why?
      </p>

      {/* Prev Page CTA */}
      <div className="page2-prev" onClick={onPrev}>
        <div className="page2-next-arrow" style={{ transform: 'rotate(180deg)' }}>
          <span className="page2-next-arrow-line"></span>
          <span className="page2-next-arrow-head"></span>
        </div>
        <span className="page2-next-text" style={{textAlign: 'left'}}>Prev Page</span>
      </div>

      {/* Next Page CTA */}
      <div className="page2-next" onClick={onNext}>
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
const StatsPage3 = ({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) => {
  return (
    <div className="page3-root">
      {/* Page number */}
      <div className="page3-page-number">3</div>

      {/* Main lines */}
      <p className="page3-line page3-subconscious">
        They’re not looking. Users are subconsciously scanning for clarity and use.
      </p>

      <p className="page3-line page3-if-launch">
        If the "Launch App" or "Verify" buttons are hidden behind a burger menu or below the fold,
      </p>

      <p className="page3-line page3-if-messaging">
        If the messaging is not familiar and directing,
      </p>

      <p className="page3-line page3-if-layout">
        If the layout is heavy and interactions are slow
      </p>

      <p className="page3-line page3-if-icons">
        If the icons and illustrations are not storytelling.
      </p>

      <p className="page3-line page3-know-product">
        They know what the product does but they don’t know where to start.
      </p>

      <p className="page3-line page3-hence">
        Hence, 52% don’t click and 48% click less than 1.94 pages.
      </p>

      <p className="page3-line page3-what-now">
        What now?
      </p>

      {/* Prev Page CTA */}
      <div className="page3-prev" onClick={onPrev}>
        <div className="page3-next-arrow" style={{ transform: 'rotate(180deg)' }}>
          <span className="page3-next-arrow-line"></span>
          <span className="page3-next-arrow-head"></span>
        </div>
        <span className="page3-next-text" style={{textAlign: 'left'}}>Prev Page</span>
      </div>

      {/* Next Page CTA */}
      <div className="page3-next" onClick={onNext}>
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
const StatsPage4 = ({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) => {
  return (
    <div className="page4-root">
      {/* Page number */}
      <div className="page4-page-number">4</div>
      
      {/* Main heading */}
      <p className="page4-line page4-heading">
        The Mobile-First Fix.
      </p>
      
      {/* Social traffic statement */}
      <p className="page4-line page4-social">
        100% of social traffic comes from <span className="icon-x">
          <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"></path></g></svg>
        </span>. These users are on their phones, scrolling fast.
      </p>
      
      {/* Globally simplified copy + country pills */}
      <div className="page4-copy-block">
        <p className="page4-line page4-global-copy">
          Globally simplified copy that reads well on a vertical screen, for users from
        </p>

        <div className="page4-country-row">
          <div className="page4-country-pill">
            <span className="page4-pill-value">54.82%</span>
            <span className="page4-pill-dot"></span>
            <span className="page4-pill-flag page4-pill-flag--us" aria-label="United States"></span>
            <span className="page4-pill-name">America</span>
          </div>

          <div className="page4-country-pill">
            <span className="page4-pill-value">13.36%</span>
            <span className="page4-pill-dot"></span>
            <span className="page4-pill-flag page4-pill-flag--fr" aria-label="France"></span>
            <span className="page4-pill-name">France</span>
          </div>

          <div className="page4-country-pill">
            <span className="page4-pill-value">12.95%</span>
            <span className="page4-pill-dot"></span>
            <span className="page4-pill-flag page4-pill-flag--id" aria-label="Indonesia"></span>
            <span className="page4-pill-name">Indonesia</span>
          </div>

          <div className="page4-country-pill">
            <span className="page4-pill-value">7.95%</span>
            <span className="page4-pill-dot"></span>
            <span className="page4-pill-flag page4-pill-flag--sg" aria-label="Singapore"></span>
            <span className="page4-pill-name">Singapore</span>
          </div>

          <div className="page4-country-pill">
            <span className="page4-pill-value">4.93%</span>
            <span className="page4-pill-dot"></span>
            <span className="page4-pill-flag page4-pill-flag--de" aria-label="Germany"></span>
            <span className="page4-pill-name">Germany</span>
          </div>
        </div>
      </div>

      {/* UX improvements list + summary */}
      <div className="page4-ux-list">
        <div className="page4-ux-items">
          <p className="page4-ux-line">
            Larger touch targets for ‘actionable’ buttons.
          </p>
          <p className="page4-ux-line">
            A slippery interaction flow.
          </p>
          <p className="page4-ux-line">
            An array of social proof/partnerships/reviews.
          </p>
          <p className="page4-ux-line">
            Active confirmation and feedbacks.
          </p>
          <p className="page4-ux-line">
            Idempotent End-points
          </p>
        </div>

        <p className="page4-ux-summary">
          Just enough of all these.
        </p>
      </div>

      {/* Prev Page CTA */}
      <div className="page4-prev" onClick={onPrev}>
        <div className="page4-next-arrow" style={{ transform: 'rotate(180deg)' }}>
          <span className="page4-next-arrow-line"></span>
          <span className="page4-next-arrow-head"></span>
        </div>
        <span className="page4-next-text" style={{textAlign: 'left'}}>Prev Page</span>
      </div>

      {/* Next Page CTA */}
      <div className="page4-next" onClick={onNext}>
        <span className="page4-next-text">Next Page</span>
        <div className="page4-next-arrow">
          <span className="page4-next-arrow-line"></span>
          <span className="page4-next-arrow-head"></span>
        </div>
      </div>
    </div>
  );
};

// --- Page 5: Process ---
const StatsPage5 = ({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) => {
  return (
    <div className="page5-root">
      {/* Page number */}
      <div className="page5-page-number">5</div>

      {/* Intro */}
      <p className="page5-line page5-intro">
        I’m Samsudeen, a design engineer.
      </p>

      {/* Process steps */}
      <p className="page5-line page5-step1">
        I’ll be starting the 6 weeks process with a walkthrough of the product to have a solid context and define how far into the product the problem reaches.
      </p>

      <p className="page5-line page5-step2">
        In a week, I’ll design multiple low fidelity iterations of a better performing interface with unlimited iterations till taste.
      </p>

      <p className="page5-line page5-step3">
        In another week or 2, I’ll design the highest fidelity of the iteration and hand it off for staging.
      </p>

      <p className="page5-line page5-step4">
        If I have to work with your engineering team, I’d love it to be in sync and I’d love to follow the same timeline.
      </p>

      <p className="page5-line page5-step5">
        After shipping, I’d be monitoring the performance for optimisation and I’d be available for necessary implementations, for 3 weeks.
      </p>

      {/* "Why me?" */}
      <p className="page5-line page5-why">
        Why me?
      </p>

      {/* Prev Page CTA */}
      <div className="page5-prev" onClick={onPrev}>
        <div className="page5-next-arrow" style={{ transform: 'rotate(180deg)' }}>
          <span className="page5-next-arrow-line"></span>
          <span className="page5-next-arrow-head"></span>
        </div>
        <span className="page5-next-text" style={{textAlign: 'left'}}>Prev Page</span>
      </div>

      {/* Next Page CTA */}
      <div className="page5-next" onClick={onNext}>
        <span className="page5-next-text">Next Page</span>
        <div className="page5-next-arrow">
          <span className="page5-next-arrow-line"></span>
          <span className="page5-next-arrow-head"></span>
        </div>
      </div>
    </div>
  );
};

// --- Page 6: Self-fulfilling prophecy ---
const StatsPage6 = ({ onNext, onPrev, onGoToCover }: { onNext: () => void, onPrev: () => void, onGoToCover: () => void }) => {
  return (
    <div className="page6-root">
      {/* Page number */}
      <div className="page6-page-number">6</div>

      {/* Main text blocks */}
      <p className="page6-line page6-prophecy">
        The self-fulfilling prophecy of how much hard work will go into converting the 88% increase in eyeballs to holders and paying users is the amount of work I did on executing this proposal.
      </p>

      <p className="page6-line page6-experience">
        I used to work with YC Companies, I have over 2years of experience as a designer and a design engineer.
      </p>

      <p className="page6-line page6-friends">
        I am friends with all my previous clients, fun to work with and I love to listen more than I talk.
      </p>

      {/* CTA Button - Now Opens Calendly */}
      <div className="page6-build-btn" onClick={() => window.open('https://calendly.com/samsudeenafolabi/30min', '_blank')}>
        <span className="page6-build-text">Let’s Build</span>
      </div>

      {/* “Every day we wait…” */}
      <p className="page6-line page6-loss">
        Every day we wait is 400 new users lost.
      </p>

      {/* Prev Page CTA */}
      <div className="page6-prev" onClick={onPrev}>
        <div className="page6-prev-arrow">
          <span className="page6-prev-arrow-line"></span>
          <span className="page6-prev-arrow-head"></span>
        </div>
        <span className="page6-prev-text">Prev. Page</span>
      </div>

      {/* Cover Page CTA - "Next Page" style */}
      <div className="page6-next" onClick={onGoToCover}>
        <span className="page6-next-text">Cover</span>
        <div className="page6-next-arrow">
          <span className="page6-next-arrow-line"></span>
          <span className="page6-next-arrow-head"></span>
        </div>
      </div>
    </div>
  );
};


// --- Page 7 (Audit Page): The Generator Tool ---
const AuditPage = ({ onGoHome, onPrev, onOpenCover }: { onGoHome: () => void, onPrev: () => void, onOpenCover: () => void }) => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [auditData, setAuditData] = useState<AuditData | null>(null);

  const handleGenerate = async () => {
    if (!inputValue.trim()) return;
    
    setIsLoading(true);
    setAuditData(null);

    try {
      const data = await generateAuditMock(inputValue);
      setAuditData(data);

    } catch (error) {
      console.error("Error generating audit:", error);
      alert("Something went wrong. Please try again.");
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
            {isLoading && <div className="spinner" style={{marginTop: '20px', borderColor: '#1d45d8', borderTopColor: 'transparent'}}></div>}
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
                    <div className={`finding-severity severity-${f.severity.toLowerCase()}`}>
                      {f.severity}
                    </div>
                    <div className="finding-content">
                      <h4>{f.title}</h4>
                      <p>{f.description}</p>
                    </div>
                  </div>
                ))}

                <h3 className="report-h3">Technical Notes</h3>
                {auditData.techFindings.map((f, i) => (
                  <div key={i} className="finding-item">
                    <div className={`finding-severity severity-${f.severity.toLowerCase()}`}>
                      {f.severity}
                    </div>
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

      {/* Bottom Footer - Now clickable to return home */}
      <section className="bottom-panel">
        <div className="bottom-content" onClick={onGoHome} style={{cursor: 'pointer'}}>
          <div className="brand-wordmark">UxGeek</div>
          <div className="brand-dot">
            <div className="brand-dot-inner"></div>
          </div>
        </div>
      </section>

      {/* Prev Page CTA - Moved after footer for z-index visibility */}
      <div className="page1-prev" onClick={onPrev} style={{ left: '80px', zIndex: 10 }}>
        <div className="page1-next-arrow" style={{ transform: 'rotate(180deg)' }}>
          <span className="page1-next-arrow-line"></span>
          <span className="page1-next-arrow-head"></span>
        </div>
        <span className="page1-next-text">Prev Page</span>
      </div>

      {/* Open Cover CTA - New Button */}
      <div className="page1-next" onClick={onOpenCover} style={{ left: 'auto', right: '80px', top: '1817px', width: 'auto', gap: '20px', zIndex: 10 }}>
        <span className="page1-next-text" style={{marginRight: '0'}}>Open Cover</span>
        <div className="page1-next-arrow">
          <span className="page1-next-arrow-line"></span>
          <span className="page1-next-arrow-head"></span>
        </div>
      </div>

    </div>
  );
};

// --- Main App: Handles Routing/Scaling ---
const App = () => {
  const [currentPage, setCurrentPage] = useState<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>(0); // show cover by default
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
      let newScale = Math.min(scaleW, scaleH, 1);
      if (!isFinite(newScale) || Number.isNaN(newScale)) newScale = 0.6;
      // Clamp to sensible range so it's visible on small screens
      newScale = Math.max(0.35, newScale);

      setScale(newScale);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Unscaled overlay to help debug rendering issues (always visible) */}
      <div id="app-overlay" style={{position: 'fixed', left: 12, top: 12, zIndex: 99999, padding: '8px 10px', background: 'rgba(0,0,0,0.7)', color: '#fff', fontFamily: 'system-ui, sans-serif', fontSize: 13, borderRadius: 6}}>
        App: page {String(currentPage)} • scale {Number((scale || 0).toFixed(2))}
      </div>

      <div className="scaler-container" style={{ transform: `scale(${scale})` }}>
        {currentPage === 0 && (
          <CoverPage
            onNext={() => setCurrentPage(1)}
          />
        )}
        {currentPage === 1 && (
          <StatsPage1 
            onNext={() => setCurrentPage(2)}
            onPrev={() => setCurrentPage(0)}
            onOpenCover={() => setCurrentPage(0)}
          />
        )}
        {currentPage === 2 && (
          <StatsPage2
            onNext={() => setCurrentPage(3)}
            onPrev={() => setCurrentPage(1)}
          />
        )}
        {currentPage === 3 && (
          <StatsPage3
            onNext={() => setCurrentPage(4)}
            onPrev={() => setCurrentPage(2)}
          />
        )}
        {currentPage === 4 && (
          <StatsPage4
            onNext={() => setCurrentPage(5)}
            onPrev={() => setCurrentPage(3)}
          />
        )}
        {currentPage === 5 && (
          <StatsPage5
            onNext={() => setCurrentPage(6)}
            onPrev={() => setCurrentPage(4)}
          />
        )}
        {currentPage === 6 && (
          <StatsPage6
            onNext={() => setCurrentPage(7)}
            onPrev={() => setCurrentPage(5)}
            onGoToCover={() => setCurrentPage(0)}
          />
        )}
        {currentPage === 7 && (
          <AuditPage 
            onGoHome={() => setCurrentPage(1)} 
            onPrev={() => setCurrentPage(6)}
            onOpenCover={() => setCurrentPage(0)}
          />
        )}
      </div>
    </>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
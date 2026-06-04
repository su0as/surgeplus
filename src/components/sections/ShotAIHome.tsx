'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Button from '@/components/atoms/Button';
import { logAppDownload } from '@/lib/analytics';

const APP_STORE_URL = 'https://apps.apple.com/us/app/shot-ai-analyze-your-swing/id6753973996';

const AppleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 20 20" fill="#FFB100" aria-hidden="true">
    <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15l-5.2 2.6 1-5.8L1.5 7.7l5.9-.9z" />
  </svg>
);

const CheckIcon = ({ color }: { color: string }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 6.5l2.5 2.5L10 3" />
  </svg>
);

function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="sai-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => <StarIcon key={i} />)}
    </span>
  );
}

export default function ShotAIHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileCta, setMobileCta] = useState(false);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobilCtaId = 'sai-mobile-cta';

  // Scroll reveal
  useEffect(() => {
    const reveals = document.querySelectorAll('.sai-reveal');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in');
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
      );
      reveals.forEach((el) => io.observe(el));
      return () => io.disconnect();
    } else {
      reveals.forEach((el) => el.classList.add('in'));
    }
  }, []);

  // Sticky mobile CTA on scroll
  useEffect(() => {
    const onScroll = () => setMobileCta(window.scrollY > 620);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  const faqs = [
    {
      q: 'Is Shot AI a golf swing analyzer app?',
      a: 'Yes. Shot AI supports golf swing analysis with video review, 17-point body tracking, and AI-generated coaching feedback — including a scored breakdown and recommended drills.',
    },
    {
      q: 'Can I use Shot AI for tennis?',
      a: 'Absolutely. Tennis players can analyze serves, forehands, and backhands, track live stroke metrics, and review movement patterns from recorded sessions.',
    },
    {
      q: 'Do I need sensors or extra hardware?',
      a: 'No. Shot AI is phone-first — all analysis runs from your recorded video and in-app AI processing. Just your iPhone, no wearables or attachments.',
    },
    {
      q: 'Who should use Shot AI?',
      a: 'Players training between lessons, coaches reviewing footage, and athletes who want faster feedback loops during practice — from weekend players to competitive amateurs.',
    },
    {
      q: 'How fast is an analysis?',
      a: 'Seconds. Record or upload a swing and Shot AI returns a full scored breakdown almost immediately, so you can adjust on the very next rep.',
    },
  ];

  return (
    <div className="sai-page">
      {/* ===== NAV ===== */}
      <header className="sai-nav">
        <div className="sai-wrap sai-nav-inner">
          <a href="#" className="sai-brand">
            <img src="/app-icon.png" alt="Shot AI" />
            <span>Shot AI</span>
          </a>
          <nav className="sai-nav-links" aria-label="Main navigation">
            <a href="#features">Features</a>
            <a href="#sports">Sports</a>
            <a href="#how">How it works</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a href={APP_STORE_URL} className="sai-nav-cta" target="_blank" rel="noopener noreferrer" aria-label="Get Shot AI on the App Store">
            <svg viewBox="0 0 24 28" fill="currentColor" aria-hidden="true">
              <path d="M19 14.7c0-3.8 3.1-5.6 3.2-5.7-1.7-2.5-4.4-2.9-5.4-2.9-2.3-.2-4.5 1.4-5.6 1.4-1.2 0-2.9-1.3-4.8-1.3-2.5 0-4.8 1.5-6 3.7-2.6 4.5-.7 11.2 1.8 14.8 1.2 1.8 2.7 3.8 4.7 3.7 1.9-.1 2.6-1.2 4.8-1.2 2.2 0 2.8 1.2 4.8 1.1 2 0 3.3-1.8 4.5-3.6 1.4-2 2-4 2-4.1-.1 0-3.8-1.5-3.8-5.9zM15.3 3.6c1-1.3 1.7-3 1.5-4.6-1.5.1-3.3 1-4.4 2.2-.9 1.1-1.8 2.8-1.6 4.5 1.7.1 3.4-.8 4.5-2.1z" />
            </svg>
            Get the app
          </a>
        </div>
      </header>

      <main>
        {/* ===== HERO ===== */}
        <section className="sai-hero">
          <div className="sai-wrap">
            <div className="sai-rating">
              <Stars />
              <span className="sai-rtext">Built for athletes who want better reps</span>
            </div>

            <p className="sai-eyebrow" style={{ marginTop: 18 }}>AI coach for golf · tennis · pickleball</p>
            <h1 className="sai-display">Turn every swing<br />into a <span className="sai-grad">coaching<br />session.</span></h1>
            <p className="sai-lead">AI swing analysis, 17-point body tracking, and live cues — frame by frame, straight from your iPhone.</p>

            <div className="sai-hero-cta">
              <Button
                variant="secondary"
                size="large"
                href={APP_STORE_URL}
                target="_blank"
                onClick={() => logAppDownload('ios', 'hero')}
                ariaLabel="Download Shot AI on the App Store"
              >
                <AppleIcon />
                Download on App Store
              </Button>
              <a href="#features" className="sai-btn-ghost">
                <span className="sai-play" aria-hidden="true">
                  <svg width="9" height="11" viewBox="0 0 9 11" fill="#0b0b0c"><path d="M0 0l9 5.5L0 11z" /></svg>
                </span>
                See how it works
              </a>
            </div>

            <div className="sai-hero-chips">
              <span className="sai-chip">Analyze a swing in seconds</span>
              <span className="sai-chip">17-point body detection</span>
              <span className="sai-chip">No sensors, just your phone</span>
            </div>
          </div>

          <div className="sai-wrap sai-hero-stage">
            <img className="sai-hero-phone" src="/screen-home.jpg" alt="Shot AI home dashboard showing AI Score 9.1, power, form, and consistency metrics" />
            <div className="sai-floater sai-fl-a">
              <div className="fl">AI Score</div>
              <div className="fv sai-tnum">9.1</div>
              <div className="fd">↗ Up 21.5%</div>
            </div>
            <div className="sai-floater sai-fl-b">
              <div className="fl">Hip rotation</div>
              <div className="fv sai-tnum">52<small>°</small></div>
              <div className="fd">New PR</div>
            </div>
            <div className="sai-floater sai-fl-c">
              <div className="fl">Streak</div>
              <div className="fv sai-tnum">356<small> days</small></div>
            </div>
          </div>
        </section>

        {/* ===== MARQUEE ===== */}
        <section className="sai-marquee" aria-hidden="true">
          <div className="sai-marquee-track">
            <span className="sai-marquee-item">Golf</span>
            <span className="sai-marquee-item dim">Tennis</span>
            <span className="sai-marquee-item">Pickleball</span>
            <span className="sai-marquee-item dim">Swing analysis</span>
            <span className="sai-marquee-item">Skeleton tracking</span>
            <span className="sai-marquee-item dim">Live coaching</span>
            <span className="sai-marquee-item">Golf</span>
            <span className="sai-marquee-item dim">Tennis</span>
            <span className="sai-marquee-item">Pickleball</span>
            <span className="sai-marquee-item dim">Swing analysis</span>
            <span className="sai-marquee-item">Skeleton tracking</span>
            <span className="sai-marquee-item dim">Live coaching</span>
          </div>
        </section>

        {/* ===== INSIDE THE APP ===== */}
        <section className="sai-section" id="features">
          <div className="sai-wrap">
            <div className="sai-shead center sai-reveal">
              <span className="sai-eyebrow">Inside the app</span>
              <h2 className="sai-h2">See the product before<br />you download it.</h2>
              <p className="sai-lead">Real screens from Shot AI. Record, analyze, track, and share — every surface engineered around the rep that actually changes your game.</p>
            </div>
          </div>

          <div className="sai-gallery">
            <div className="sai-gallery-track">
              <div className="sai-wrap-pad" />
              <figure className="sai-gshot">
                <img src="/screen-home.jpg" alt="Home dashboard" />
                <figcaption className="sai-cap"><span className="n sai-tnum">01</span><span className="l">Home</span></figcaption>
              </figure>
              <figure className="sai-gshot">
                <img src="/screen-record.png" alt="Live swing recording with skeleton tracking" />
                <figcaption className="sai-cap"><span className="n sai-tnum">02</span><span className="l">Live record</span></figcaption>
              </figure>
              <figure className="sai-gshot">
                <img src="/screen-breakdown.png" alt="Swing analysis breakdown" />
                <figcaption className="sai-cap"><span className="n sai-tnum">03</span><span className="l">Analysis</span></figcaption>
              </figure>
              <figure className="sai-gshot">
                <img src="/screen-coach.png" alt="Live AI coaching cues" />
                <figcaption className="sai-cap"><span className="n sai-tnum">04</span><span className="l">Live coaching</span></figcaption>
              </figure>
              <figure className="sai-gshot">
                <img src="/screen-progress.jpg" alt="Progress tracking and streaks" />
                <figcaption className="sai-cap"><span className="n sai-tnum">05</span><span className="l">Progress</span></figcaption>
              </figure>
              <figure className="sai-gshot">
                <img src="/screen-share.jpg" alt="Shareable scorecard" />
                <figcaption className="sai-cap"><span className="n sai-tnum">06</span><span className="l">Share</span></figcaption>
              </figure>
              <div className="sai-wrap-pad" />
            </div>
          </div>
        </section>

        {/* ===== FEATURES: ANALYSIS, SKELETON, COACHING ===== */}
        <section className="sai-section sai-bg-mist">
          <div className="sai-wrap">
            <div className="sai-shead center sai-reveal" style={{ marginBottom: 8 }}>
              <span className="sai-eyebrow green">Why athletes train with Shot AI</span>
              <h2 className="sai-h2">Coaching is expensive.<br />Improvement shouldn&apos;t be.</h2>
            </div>

            {/* Feature 01 */}
            <div className="sai-feature-row sai-reveal" style={{ marginTop: 56 }}>
              <div className="sai-feat-copy">
                <span className="sai-eyebrow">01 — AI swing analysis</span>
                <h3 className="sai-h3">A full breakdown from one video.</h3>
                <p>Upload or record a swing and Shot AI returns a clean, coach-grade report — an overall score out of 10, plus form, power, and consistency, with the exact findings that are holding you back.</p>
                <ul className="sai-feat-list">
                  <li><span className="sai-ck" style={{ background: 'var(--green-soft)' }}><CheckIcon color="#1faa53" /></span>Setup, backswing, impact &amp; follow-through</li>
                  <li><span className="sai-ck" style={{ background: 'var(--green-soft)' }}><CheckIcon color="#1faa53" /></span>Plain-language coach assessment</li>
                  <li><span className="sai-ck" style={{ background: 'var(--green-soft)' }}><CheckIcon color="#1faa53" /></span>Recommended drills, ranked by impact</li>
                </ul>
              </div>
              <div className="sai-feat-media">
                <div className="sai-ui-card" style={{ maxWidth: 380 }}>
                  <div className="sai-score-card" style={{ border: 'none', boxShadow: 'none', padding: 0 }}>
                    <div className="sc-l">
                      <div className="k">Coach Assessment</div>
                      <div className="sc-big sai-tnum">8.8<small> / 10</small></div>
                      <div className="up">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="#1faa53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8L7 4l3 3" /><path d="M7 4v6" /></svg>
                        Excellent form
                      </div>
                    </div>
                    <svg className="sai-bigring" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="#e7f7ec" strokeWidth="9" />
                      <circle cx="50" cy="50" r="42" fill="none" stroke="#1faa53" strokeWidth="9" strokeLinecap="round" strokeDasharray="263.9" strokeDashoffset="32" transform="rotate(-90 50 50)" />
                      <text x="50" y="57" textAnchor="middle" fontSize="22" fontWeight="800" fill="#0b0b0c" fontFamily="-apple-system, sans-serif">8.8</text>
                    </svg>
                  </div>
                  <div className="sai-metric-grid" style={{ marginTop: 18 }}>
                    <div className="sai-metric">
                      <svg className="ring" viewBox="0 0 46 46"><circle cx="23" cy="23" r="19" fill="none" stroke="#fff0e2" strokeWidth="5" /><circle cx="23" cy="23" r="19" fill="none" stroke="#ff8a1e" strokeWidth="5" strokeLinecap="round" strokeDasharray="119.4" strokeDashoffset="24" transform="rotate(-90 23 23)" /></svg>
                      <div className="mv sai-tnum">85</div><div className="ml">Power</div>
                    </div>
                    <div className="sai-metric">
                      <svg className="ring" viewBox="0 0 46 46"><circle cx="23" cy="23" r="19" fill="none" stroke="#e6f2fe" strokeWidth="5" /><circle cx="23" cy="23" r="19" fill="none" stroke="#1f93ef" strokeWidth="5" strokeLinecap="round" strokeDasharray="119.4" strokeDashoffset="14" transform="rotate(-90 23 23)" /></svg>
                      <div className="mv sai-tnum">88</div><div className="ml">Form</div>
                    </div>
                    <div className="sai-metric">
                      <svg className="ring" viewBox="0 0 46 46"><circle cx="23" cy="23" r="19" fill="none" stroke="#f3e9fc" strokeWidth="5" /><circle cx="23" cy="23" r="19" fill="none" stroke="#9b54e0" strokeWidth="5" strokeLinecap="round" strokeDasharray="119.4" strokeDashoffset="9" transform="rotate(-90 23 23)" /></svg>
                      <div className="mv sai-tnum">90</div><div className="ml">Consistency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 02 */}
            <div className="sai-feature-row flip sai-reveal">
              <div className="sai-feat-copy">
                <span className="sai-eyebrow blue">02 — Skeleton tracking</span>
                <h3 className="sai-h3">Sees what your eye can&apos;t.</h3>
                <p>17-joint body tracking maps every frame — wrist cocking, trunk rotation, knee bend, club path. Not a subjective opinion. Geometry you can compare against optimal tour form.</p>
                <ul className="sai-feat-list">
                  <li><span className="sai-ck" style={{ background: 'var(--blue-soft)' }}><CheckIcon color="#1f93ef" /></span>Live biometric data feed</li>
                  <li><span className="sai-ck" style={{ background: 'var(--blue-soft)' }}><CheckIcon color="#1f93ef" /></span>Variation analyzer vs. pro form</li>
                  <li><span className="sai-ck" style={{ background: 'var(--blue-soft)' }}><CheckIcon color="#1f93ef" /></span>Joint-by-joint angle deltas</li>
                </ul>
              </div>
              <div className="sai-feat-media">
                <img src="/screen-record.png" alt="Shot AI skeleton tracking on a golf swing with labeled joints" />
              </div>
            </div>

            {/* Feature 03 */}
            <div className="sai-feature-row sai-reveal">
              <div className="sai-feat-copy">
                <span className="sai-eyebrow">03 — Live AI coaching</span>
                <h3 className="sai-h3">Cues in the moment, not next week.</h3>
                <p>Practice with real-time feedback as you swing, then ask the AI coach anything. It reads your latest analysis and answers in plain language — with a drill to fix it.</p>
                <ul className="sai-feat-list">
                  <li><span className="sai-ck" style={{ background: 'var(--gold-soft)' }}><CheckIcon color="#f59e0b" /></span>Real-time stroke &amp; timing cues</li>
                  <li><span className="sai-ck" style={{ background: 'var(--gold-soft)' }}><CheckIcon color="#f59e0b" /></span>Auto-tracked shots counted &amp; missed</li>
                  <li><span className="sai-ck" style={{ background: 'var(--gold-soft)' }}><CheckIcon color="#f59e0b" /></span>Ask-anything coach, grounded in your data</li>
                </ul>
              </div>
              <div className="sai-feat-media">
                <div className="sai-ui-card" style={{ maxWidth: 380 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--ink)', color: '#fff', borderRadius: 14, padding: '12px 14px', marginBottom: 14 }}>
                    <div style={{ flex: 1, fontWeight: 700, letterSpacing: '-0.02em' }}>Driver · this morning</div>
                    <div style={{ fontWeight: 800, color: 'var(--gold)', fontSize: '1.2rem' }} className="sai-tnum">8.7</div>
                  </div>
                  <div className="sai-chat">
                    <div className="sai-bubble me">Why am I slicing?</div>
                    <div className="sai-bubble ai">Three things: clubface 4° open, an out-to-in path, and early extension through impact.</div>
                    <div className="sai-bubble ai">Try the <b>Strong Grip + Pause</b> drill — 10 reps at 50% speed.</div>
                  </div>
                  <div className="sai-chat-input">
                    <span className="ph">Ask your coach…</span>
                    <span className="send" aria-hidden="true"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="#0b0b0c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 7.5h10" /><path d="M8 3.5l4 4-4 4" /></svg></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PROGRESS & STREAKS ===== */}
        <section className="sai-section">
          <div className="sai-wrap">
            <div className="sai-feature-row sai-reveal">
              <div className="sai-feat-media">
                <img src="/screen-progress.jpg" alt="Shot AI progress screen with improvement chart, score, and 356-day streak" />
              </div>
              <div className="sai-feat-copy">
                <span className="sai-eyebrow green">04 — Progress &amp; streaks</span>
                <h3 className="sai-h3">Watch the line go up.</h3>
                <p>Every session feeds a long-term trend. Track your Shot AI Score over months, log real game results, and keep a streak alive — the app turns practice into something you can actually see compounding.</p>
                <div className="sai-metric-grid" style={{ marginTop: 24, maxWidth: 420 }}>
                  <div className="sai-metric">
                    <div className="mv sai-tnum" style={{ color: 'var(--green)' }}>+21%</div>
                    <div className="ml">vs last week</div>
                  </div>
                  <div className="sai-metric">
                    <div className="mv sai-tnum" style={{ color: 'var(--orange)' }}>356</div>
                    <div className="ml">Day streak</div>
                  </div>
                  <div className="sai-metric">
                    <div className="mv sai-tnum">8.9</div>
                    <div className="ml">Avg score</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SHARE ===== */}
        <section className="sai-section sai-bg-mist">
          <div className="sai-wrap">
            <div className="sai-feature-row flip sai-reveal">
              <div className="sai-feat-media">
                <img src="/screen-share.jpg" alt="Shot AI shareable scorecard over a full-bleed tennis action photo" />
              </div>
              <div className="sai-feat-copy">
                <span className="sai-eyebrow">05 — Shareable scorecards</span>
                <h3 className="sai-h3">Worth posting.</h3>
                <p>Turn a session into a clean scorecard — AI Score, match result, distance, and time over a full-bleed action shot. Send it to friends, coaches, or training partners with one tap.</p>
                <ul className="sai-feat-list">
                  <li><span className="sai-ck" style={{ background: 'var(--gold-soft)' }}><CheckIcon color="#f59e0b" /></span>Auto-built from your analysis</li>
                  <li><span className="sai-ck" style={{ background: 'var(--gold-soft)' }}><CheckIcon color="#f59e0b" /></span>Match score, distance &amp; time</li>
                  <li><span className="sai-ck" style={{ background: 'var(--gold-soft)' }}><CheckIcon color="#f59e0b" /></span>Share to any app instantly</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SPORTS ===== */}
        <section className="sai-section" id="sports">
          <div className="sai-wrap">
            <div className="sai-shead sai-reveal">
              <span className="sai-eyebrow">Sports coverage</span>
              <h2 className="sai-h2">Built for the sports you actually train.</h2>
            </div>
            <div className="sai-sports-grid">
              <article className="sai-sport sai-reveal">
                <span className="emoji" role="img" aria-label="Tennis">🎾</span>
                <h3>Tennis</h3>
                <p>Break down serves, forehands, and backhands with AI feedback and live stroke metrics.</p>
                <span className="sai-tag live">Available now</span>
              </article>
              <article className="sai-sport sai-reveal">
                <span className="emoji" role="img" aria-label="Golf">⛳</span>
                <h3>Golf</h3>
                <p>Review swing mechanics with skeleton overlays, club-path tracking, and coaching notes.</p>
                <span className="sai-tag live">Available now</span>
              </article>
              <article className="sai-sport sai-reveal">
                <span className="emoji" role="img" aria-label="Pickleball">🏓</span>
                <h3>Pickleball</h3>
                <p>New AI training workflows for pickleball players are on the way — track your game next.</p>
                <span className="sai-tag soon">Coming soon</span>
              </article>
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className="sai-section sai-bg-mist" id="how">
          <div className="sai-wrap">
            <div className="sai-shead sai-reveal">
              <span className="sai-eyebrow green">How it works</span>
              <h2 className="sai-h2">From swing to insight in three steps.</h2>
            </div>
            <div className="sai-steps">
              <div className="sai-step sai-reveal">
                <div className="num sai-tnum">1</div>
                <h4>Record your swing</h4>
                <p>Prop up your iPhone and capture a rep — or import a clip you already have. No sensors, no extra gear.</p>
              </div>
              <div className="sai-step sai-reveal">
                <div className="num sai-tnum">2</div>
                <h4>Get the breakdown</h4>
                <p>Shot AI tracks 17 joints, scores your form, and surfaces the exact findings holding you back.</p>
              </div>
              <div className="sai-step sai-reveal">
                <div className="num sai-tnum">3</div>
                <h4>Practice the fix</h4>
                <p>Run the recommended drill, ask the coach follow-ups, and watch your score climb session over session.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STATS BANNER ===== */}
        <section className="sai-section">
          <div className="sai-wrap">
            <div className="sai-stats-banner sai-reveal">
              <div className="sai-shead" style={{ marginBottom: 40 }}>
                <span className="sai-eyebrow on-dark">By the numbers</span>
                <h2 className="sai-h2" style={{ color: '#fff', maxWidth: '18ch', marginTop: 14 }}>Measurable feedback, every single rep.</h2>
              </div>
              <div className="sai-stats-row">
                <div className="sai-bstat"><div className="v sai-tnum">17<small>pt</small></div><div className="l">Body tracking</div></div>
                <div className="sai-bstat"><div className="v sai-tnum">10<small>s</small></div><div className="l">To full analysis</div></div>
                <div className="sai-bstat"><div className="v sai-tnum">3<small>×</small></div><div className="l">Sports covered</div></div>
                <div className="sai-bstat"><div className="v sai-tnum">4.9<small>★</small></div><div className="l">App Store rating</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section className="sai-section sai-bg-mist">
          <div className="sai-wrap">
            <div className="sai-shead sai-reveal">
              <span className="sai-eyebrow">From the practice court</span>
              <h2 className="sai-h2">Better reps, not more guesswork.</h2>
            </div>
            <div className="sai-quotes">
              <figure className="sai-quote sai-reveal">
                <Stars />
                <blockquote>Finally figured out my slice. The coach pointed at an <em>open clubface</em> and gave me a drill — fixed it in a week.</blockquote>
                <figcaption className="who">
                  <span className="av" style={{ background: '#ff8a1e' }}>A</span>
                  <div><div className="nm">Alex M.</div><div className="sub">Golf · 12 handicap</div></div>
                </figcaption>
              </figure>
              <figure className="sai-quote sai-reveal">
                <Stars />
                <blockquote>It&apos;s like having a coach in my bag between lessons. The <em>skeleton overlay</em> showed exactly what I couldn&apos;t feel.</blockquote>
                <figcaption className="who">
                  <span className="av" style={{ background: '#1f93ef' }}>J</span>
                  <div><div className="nm">Jordan P.</div><div className="sub">Tennis · USTA 4.0</div></div>
                </figcaption>
              </figure>
              <figure className="sai-quote sai-reveal">
                <Stars />
                <blockquote>The streak kept me practicing. Watching my <em>score climb</em> month over month is weirdly addictive.</blockquote>
                <figcaption className="who">
                  <span className="av" style={{ background: '#9b54e0' }}>S</span>
                  <div><div className="nm">Sam R.</div><div className="sub">Golf · weekend player</div></div>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="sai-section" id="faq">
          <div className="sai-wrap sai-wrap-tight">
            <div className="sai-shead sai-reveal">
              <span className="sai-eyebrow">FAQ</span>
              <h2 className="sai-h2">Common questions.</h2>
            </div>
            <div className="sai-faq-list">
              {faqs.map((faq, idx) => (
                <div key={idx} className={`sai-faq-item${openFaq === idx ? ' open' : ''}`}>
                  <button
                    className="sai-faq-q"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={openFaq === idx}
                  >
                    {faq.q}
                    <span className="pm" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#0b0b0c" strokeWidth="2" strokeLinecap="round">
                        <path d="M7 1v12M1 7h12" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="sai-faq-a"
                    style={{ maxHeight: openFaq === idx ? (faqRefs.current[idx]?.scrollHeight ?? 200) : 0 }}
                    ref={(el) => { faqRefs.current[idx] = el; }}
                  >
                    <div className="sai-faq-a-inner">{faq.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="sai-section" style={{ paddingTop: 0 }}>
          <div className="sai-wrap">
            <div className="sai-final sai-reveal">
              <div className="sai-final-emoji">🎾⛳🏓</div>
              <h2>Ready to level up your game?</h2>
              <p>Download Shot AI and turn your next practice session into measurable feedback.</p>
              <div className="sai-final-cta-wrap">
                <Button
                  variant="secondary"
                  size="large"
                  href={APP_STORE_URL}
                  target="_blank"
                  onClick={() => logAppDownload('ios', 'final-cta')}
                  ariaLabel="Download Shot AI on the App Store"
                >
                  <AppleIcon />
                  Download on App Store
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="sai-footer">
        <div className="sai-wrap">
          <div className="sai-foot-top">
            <div className="sai-foot-brand">
              <a href="#" className="sai-brand">
                <img src="/app-icon.png" alt="Shot AI" />
                <span>Shot AI</span>
              </a>
              <p>The AI sports coach for golf, tennis, and pickleball. Better reps, straight from your iPhone.</p>
            </div>
            <div className="sai-foot-col">
              <h5>Product</h5>
              <a href="#features">Features</a>
              <a href="#sports">Sports</a>
              <a href="#how">How it works</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="sai-foot-col">
              <h5>Company</h5>
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">App Store</a>
              <a href="mailto:support@surgeplus.app">Contact</a>
            </div>
            <div className="sai-foot-col">
              <h5>Legal</h5>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-service">Terms of Service</Link>
            </div>
          </div>
          <div className="sai-foot-bot">
            <span>© 2026 Shot AI. All rights reserved.</span>
            <span>Made for athletes who want better reps.</span>
          </div>
        </div>
      </footer>

      {/* ===== STICKY MOBILE CTA ===== */}
      <div
        id={mobilCtaId}
        className={`sai-mobile-cta${mobileCta ? ' show' : ''}`}
        aria-hidden={!mobileCta}
      >
        <div className="mc-info">
          <div className="t">Get Shot AI</div>
          <div className="s">Free on the App Store</div>
        </div>
        <Button
          variant="secondary"
          size="small"
          href={APP_STORE_URL}
          target="_blank"
          onClick={() => logAppDownload('ios', 'mobile-sticky-cta')}
          ariaLabel="Download Shot AI on the App Store"
        >
          <AppleIcon />
          Download
        </Button>
      </div>
    </div>
  );
}

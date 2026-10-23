import React from 'react';
import { PW } from './ds.jsx';
import { Icon, Arrow, useFrame, RED, PAD, IMG } from './motion.jsx';

const SLIDES = [
  { src: IMG + 'build/00-completed-adu-hero.png', room: 'Detached ADU', pos: 'center 60%' },
  { src: IMG + 'gallery/06.png', room: 'Kitchen', pos: 'center 55%' },
  { src: IMG + 'gallery/02.png', room: 'Backyard ADU', pos: 'center 50%' },
  { src: IMG + 'gallery/03.jpg', room: 'Bathroom', pos: 'center 45%' }
];

export function Header({ onQuote }) {
  const [solid, setSolid] = React.useState(false);

  useFrame(() => {
    if (typeof window !== 'undefined') {
      setSolid(window.scrollY > window.innerHeight * 0.85);
    }
  });

  const fg = solid ? 'var(--pw-ink)' : '#fff';
  const links = [
    ['ADU Types', 'services'],
    ['Process', 'process'],
    ['Projects', 'portfolio'],
    ['Other services', 'other'],
    ['Contact', 'contact']
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        background: solid ? 'rgba(255,255,255,.96)' : 'transparent',
        backdropFilter: solid ? 'blur(10px)' : 'none',
        borderBottom: '1px solid ' + (solid ? 'var(--border-hairline)' : 'rgba(255,255,255,.18)'),
        transition: 'background .5s var(--ease-out), border-color .5s'
      }}
    >
      <div
        style={{
          padding: `0 ${PAD}`,
          height: solid ? 76 : 96,
          display: 'flex',
          alignItems: 'center',
          gap: 40,
          transition: 'height .5s var(--ease-out)'
        }}
      >
        <a href="#top">
          <PW.Logo tone={solid ? 'dark' : 'light'} basePath="/" height={solid ? 44 : 56} style={{ transition: 'height .5s' }} />
        </a>
        <nav className="pw-nav" style={{ display: 'flex', gap: 36, marginLeft: 'auto' }}>
          {links.map(([l, id]) => (
            <a key={l} href={'#' + id} style={{ color: fg, fontSize: 13, fontWeight: 400, letterSpacing: '.08em', transition: 'color .4s' }}>
              {l}
            </a>
          ))}
        </nav>
        <a className="pw-phone" href="tel:8883984499" style={{ color: fg, display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, letterSpacing: '.06em', whiteSpace: 'nowrap' }}>
          <Icon name="phone" size={15} color={RED} />
          (888) 398-4499
        </a>
        <button
          onClick={onQuote}
          style={{
            marginLeft: 'auto',
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: '.16em',
            textTransform: 'uppercase',
            padding: '13px 22px',
            border: '1px solid ' + (solid ? 'var(--pw-ink)' : '#fff'),
            background: 'transparent',
            color: fg,
            cursor: 'pointer',
            display: 'flex',
            gap: 10,
            alignItems: 'center',
            whiteSpace: 'nowrap'
          }}
        >
          Start your ADU <Arrow size={14} />
        </button>
      </div>
    </header>
  );
}

export function Hero() {
  const [i, setI] = React.useState(0);
  const [m, setM] = React.useState({ x: 0.5, y: 0.5 });
  const t = React.useRef(null);

  React.useEffect(() => {
    t.current = setTimeout(() => setI(prev => (prev + 1) % SLIDES.length), 6500);
    return () => clearTimeout(t.current);
  }, [i]);

  const [sy, setSy] = React.useState(0);
  useFrame(() => {
    if (typeof window !== 'undefined') {
      setSy(Math.min(window.scrollY, window.innerHeight));
    }
  });

  return (
    <section
      id="top"
      onMouseMove={e => {
        if (typeof window !== 'undefined') {
          setM({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
        }
      }}
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: 640,
        overflow: 'hidden',
        background: '#111',
        color: '#fff'
      }}
    >
      {SLIDES.map((s, k) => (
        <div
          key={k}
          style={{
            position: 'absolute',
            inset: '-3%',
            opacity: k === i ? 1 : 0,
            transition: 'opacity 1.6s var(--ease-inout)',
            transform: `translate3d(${(m.x - 0.5) * -28}px, ${(m.y - 0.5) * -18 + sy * 0.35}px, 0)`
          }}
        >
          <img
            src={s.src}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: s.pos,
              transform: k === i ? 'scale(1)' : 'scale(1.1)',
              transition: k === i ? 'transform 8s linear' : 'transform 1.6s'
            }}
          />
        </div>
      ))}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,.35) 0%, rgba(0,0,0,.1) 35%, rgba(0,0,0,.55) 100%)'
        }}
      />
      <div
        className="pw-hero-bottom"
        style={{
          position: 'absolute',
          left: PAD,
          right: PAD,
          bottom: 'clamp(48px,9vh,110px)',
          display: 'flex',
          alignItems: 'flex-end',
          gap: 40,
          flexWrap: 'wrap',
          opacity: typeof window !== 'undefined' ? Math.max(0, 1 - (sy / (window.innerHeight || 1)) * 1.4) : 1,
          transform: `translateY(${sy * -0.15}px)`
        }}
      >
        <div style={{ flex: '1 1 600px' }}>
          <div
            style={{
              fontSize: 12,
              letterSpacing: '.3em',
              textTransform: 'uppercase',
              marginBottom: 28,
              display: 'flex',
              gap: 14,
              alignItems: 'center'
            }}
          >
            <span style={{ width: 28, height: 1, background: '#fff' }}></span>
            ADU builders · Southern California
          </div>
          <h1
            style={{
              margin: 0,
              fontWeight: 200,
              fontSize: 'clamp(48px,7.4vw,136px)',
              lineHeight: 0.96,
              letterSpacing: '-0.03em'
            }}
          >
            Your ADU,<br />
            <span style={{ fontFamily: 'var(--font-serif-display)', fontStyle: 'italic', fontWeight: 400 }}>
              built start to finish.
            </span>
          </h1>
        </div>
        <div style={{ flex: '0 1 380px', display: 'flex', flexDirection: 'column', gap: 28 }}>
          <p style={{ margin: 0, fontWeight: 300, fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,.88)' }}>
            Detached ADUs, garage conversions, JADUs and second-story units. Design, permits and construction under one roof.
          </p>
          <div className="pw-hero-slides">
            {SLIDES.map((s, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                className="pw-hero-slide-btn"
                style={{
                  flex: 1,
                  background: 'none',
                  border: 'none',
                  padding: '10px 0 0',
                  cursor: 'pointer',
                  textAlign: 'left',
                  color: '#fff',
                  fontFamily: 'var(--font-sans)'
                }}
              >
                <div style={{ height: 1, background: 'rgba(255,255,255,.3)', position: 'relative', overflow: 'hidden' }}>
                  <div
                    key={i + '-' + k}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: '#fff',
                      transformOrigin: 'left',
                      transform: k === i ? 'scaleX(1)' : 'scaleX(0)',
                      transition: k === i ? 'transform 6.5s linear' : 'none'
                    }}
                  />
                </div>
                <div
                  className="pw-hero-slide-text"
                  style={{
                    fontSize: 11,
                    letterSpacing: '.14em',
                    textTransform: 'uppercase',
                    marginTop: 12,
                    opacity: k === i ? 1 : 0.55,
                    transition: 'opacity .4s'
                  }}
                >
                  <span style={{ color: k === i ? '#fff' : 'inherit', marginRight: 6 }}>0{k + 1}</span>
                  {s.room}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="pw-scroll-hint"
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 24,
          transform: 'translateX(-50%)',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          fontSize: 10,
          letterSpacing: '.3em',
          opacity: 0.8
        }}
      >
        SCROLL
        <span style={{ width: 1, height: 36, background: 'linear-gradient(#fff,transparent)' }} />
      </a>
    </section>
  );
}

import React from 'react';
import { Icon, Arrow, Reveal, Parallax, Title, Eyebrow, useFrame, RED, PAD, IMG, STK } from './motion.jsx';

const sec = (extra) => ({ padding: `clamp(80px,12vw,180px) ${PAD}`, ...extra });

export function About() {
  return (
    <section
      id="about"
      className="pw-about-grid"
      style={sec({
        display: 'grid',
        gridTemplateColumns: 'repeat(12,minmax(0,1fr))',
        gap: '48px 24px',
        alignItems: 'start'
      })}
    >
      <div className="pw-about-col1" style={{ gridColumn: '1 / span 7', minWidth: 0 }}>
        <Reveal><Eyebrow>ADU specialists</Eyebrow></Reveal>
        <Reveal delay={100} style={{ marginTop: 32 }}><Title a="More living space, without leaving" b="home." /></Reveal>
        <Reveal delay={200} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 32, marginTop: 56, maxWidth: 820 }}>
          <p style={{ margin: 0, fontWeight: 300, fontSize: 16, lineHeight: 1.8, color: 'var(--text-secondary)' }}>
            Pacific West Home Builders designs, permits and builds accessory dwelling units across Southern California. One team handles your ADU from the first site visit to the certificate of occupancy.
          </p>
          <p style={{ margin: 0, fontWeight: 300, fontSize: 16, lineHeight: 1.8, color: 'var(--text-secondary)' }}>
            Whether it’s a rental unit, a home for aging parents or a private studio, we plan it around how you’ll use it and build it with our own crews.
          </p>
        </Reveal>
        <Reveal delay={300} style={{ marginTop: 40 }}>
          <a href="#services" style={{ display: 'inline-flex', gap: 12, alignItems: 'center', fontSize: 12, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', borderBottom: '1px solid var(--pw-ink)', paddingBottom: 6 }}>
            Explore ADU types<Arrow size={16} />
          </a>
        </Reveal>
      </div>
      <div className="pw-about-col2" style={{ gridColumn: '9 / span 4', gridRow: 1, display: 'flex', flexDirection: 'column', gap: 24, minWidth: 0 }}>
        <Parallax src={IMG + 'gallery/05.png'} speed={0.12} style={{ aspectRatio: '3/4' }} />
        <Reveal delay={150} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
          <span>ADU interior</span><span>Southern California</span>
        </Reveal>
      </div>
      <div className="pw-about-col3" style={{ gridColumn: '1 / -1', gridRow: 2, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', borderTop: '1px solid var(--border-hairline)', marginTop: 24 }}>
        {[
          ['pencil-ruler', 'Design', 'Tailored plans as unique as your lifestyle.'],
          ['file-check-2', 'Permits', 'We handle the city paperwork for you.'],
          ['hammer', 'Construction', 'Premium materials and meticulous techniques.'],
          ['key-round', 'Delivery', 'From concept to completion, stress-free.']
        ].map(([ic, t, d], k) => (
          <Reveal key={t} delay={k * 90} className="pw-about-feature" style={{ display: 'flex', gap: 18, alignItems: 'flex-start', padding: '36px 24px 0 0' }}>
            <Icon name={ic} size={28} color={RED} />
            <div>
              <div style={{ fontSize: 16, fontWeight: 400 }}>{t}</div>
              <div style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.6, color: 'var(--text-secondary)', marginTop: 6 }}>{d}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const SERVICES = [
  { n: 'Detached ADU', d: 'A freestanding home in your backyard with its own entry, kitchen and bath. Up to 1,200 sq ft.', img: 'types/detached-adu.jpg' },
  { n: 'Attached ADU', d: 'An addition with its own front door, built onto the side or rear of your home.', img: 'types/attached-adu.jpg' },
  { n: 'Garage Conversion', d: 'Turn an existing garage into a full living unit, often the fastest path to an ADU.', img: 'types/garage-conversion.jpg' },
  { n: 'JADU', d: 'A junior ADU of up to 500 sq ft inside your existing home, with its own entrance.', img: 'types/jadu.jpg' },
  { n: 'Second-story ADU', d: 'Build up above the garage or home and keep your yard.', img: 'types/second-story-adu.jpg' }
];

const OTHER = [
  ['Kitchen Remodeling', 's05.jpg'],
  ['Bathroom Remodeling', 's19.jpg'],
  ['Bedroom Remodeling', 's15.jpg'],
  ['Room Additions', 's16.jpg'],
  ['Garage Remodeling', 's17.jpg'],
  ['Landscaping', 's18.jpg']
];

export function OtherServices() {
  const [h, setH] = React.useState(-1);
  return (
    <section
      id="other"
      style={{
        padding: `clamp(72px,8vw,120px) ${PAD}`,
        borderTop: '1px solid var(--border-hairline)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,360px),1fr))',
        gap: '40px 80px',
        alignItems: 'start'
      }}
    >
      <div>
        <Reveal><Eyebrow>Also building</Eyebrow></Reveal>
        <Reveal delay={100} style={{ marginTop: 24 }}>
          <Title a="Remodels &" b="additions." size="clamp(30px,3vw,52px)" />
        </Reveal>
        <Reveal delay={200}>
          <p style={{ margin: '24px 0 0', maxWidth: 380, fontWeight: 300, fontSize: 15, lineHeight: 1.7, color: 'var(--text-secondary)' }}>
            The same team and standards, for the rest of your home.
          </p>
        </Reveal>
      </div>
      <div
        onMouseLeave={() => setH(-1)}
        className="pw-other-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
          columnGap: 32,
          borderTop: '1px solid var(--pw-ink)'
        }}
      >
        {OTHER.map(([n, img], k) => (
          <a
            key={n}
            href="#contact"
            onMouseEnter={() => setH(k)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              padding: '18px 0',
              borderBottom: '1px solid var(--border-hairline)',
              color: 'var(--pw-ink)'
            }}
          >
            <span style={{ width: 56, height: 42, overflow: 'hidden', flex: 'none', background: 'var(--pw-stone-100)' }}>
              <img
                src={STK + img}
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: h === k ? 'none' : 'grayscale(1)',
                  transition: 'filter .4s'
                }}
              />
            </span>
            <span style={{ flex: 1, fontSize: 16, fontWeight: 300 }}>{n}</span>
            <Arrow size={16} color={h === k ? RED : 'var(--pw-stone-300)'} />
          </a>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  const [h, setH] = React.useState(-1);
  const [m, setM] = React.useState({ x: 0.5, y: 0.5 });
  return (
    <section id="services" style={sec({ background: 'var(--pw-stone-50)', paddingBottom: 0 })}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap', marginBottom: 72 }}>
        <div>
          <Reveal><Eyebrow>ADU types</Eyebrow></Reveal>
          <Reveal delay={100} style={{ marginTop: 28 }}><Title a="Five ways to add a" b="home." /></Reveal>
        </div>
        <Reveal delay={200}>
          <p style={{ margin: 0, maxWidth: 380, fontWeight: 300, fontSize: 16, lineHeight: 1.7, color: 'var(--text-secondary)' }}>
            Not sure which fits your lot? We confirm setbacks, utilities and zoning in a free site visit.
          </p>
        </Reveal>
      </div>
      <div onMouseLeave={() => setH(-1)} style={{ margin: `0 calc(-1 * ${PAD})`, borderTop: '1px solid var(--pw-ink)' }}>
        {SERVICES.map((s, k) => {
          const on = h === k;
          return (
            <Reveal key={k} delay={k * 60} y={24}>
              <a
                href="#contact"
                className={"pw-service-card" + (on ? " active" : "")}
                onClick={(e) => {
                  // Enable tap-to-toggle on mobile touch devices
                  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
                    if (h === k) {
                      setH(-1);
                    } else {
                      e.preventDefault();
                      setH(k);
                    }
                  }
                }}
                onMouseEnter={() => setH(k)}
                onMouseMove={e => {
                  const r = e.currentTarget.getBoundingClientRect();
                  setM({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
                }}
                style={{
                  position: 'relative',
                  display: 'block',
                  overflow: 'hidden',
                  height: on ? 'min(62vh,560px)' : 'clamp(96px,9vw,128px)',
                  borderBottom: '1px solid ' + (on ? 'transparent' : 'var(--border-hairline)'),
                  color: on ? '#fff' : 'var(--pw-ink)',
                  transition: 'height .9s var(--ease-inout), color .5s'
                }}
              >
                <div style={{ position: 'absolute', inset: 0, opacity: on ? 1 : 0, transition: 'opacity .7s var(--ease-out)' }}>
                  <img
                    src={IMG + s.img}
                    alt=""
                    style={{
                      position: 'absolute',
                      inset: '-4%',
                      width: '108%',
                      height: '108%',
                      objectFit: 'cover',
                      transform: `translate3d(${(m.x - 0.5) * -24}px, ${(m.y - 0.5) * -16}px, 0) scale(${on ? 1 : 1.12})`,
                      transition: 'transform 1.4s var(--ease-out)'
                    }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,.25) 0%, rgba(0,0,0,.6) 100%)' }} />
                </div>
                <div
                  className="pw-service-inner"
                  style={{
                    position: 'relative',
                    height: '100%',
                    padding: `0 ${PAD}`,
                    display: 'grid',
                    gridTemplateColumns: '60px minmax(0,1fr) minmax(0,1fr) 40px',
                    gap: 24,
                    alignItems: on ? 'end' : 'center',
                    paddingBottom: on ? 'clamp(32px,4vw,56px)' : 0
                  }}
                >
                  <span className="pw-service-num" style={{ fontSize: 12, letterSpacing: '.12em', color: on ? '#fff' : 'var(--text-muted)', transition: 'color .4s' }}>
                    {String(k + 1).padStart(2, '0')}
                  </span>
                  <span className="pw-service-name" style={{ fontWeight: 300, fontSize: on ? 'clamp(36px,4.6vw,80px)' : 'clamp(26px,3.2vw,52px)', lineHeight: 1.05, letterSpacing: '-0.02em', transition: 'font-size .8s var(--ease-inout)' }}>
                    {s.n}
                  </span>
                  <span className="pw-service-desc" style={{ fontWeight: 300, fontSize: 15, lineHeight: 1.6, color: on ? 'rgba(255,255,255,.9)' : 'var(--text-secondary)', opacity: h === -1 || on ? 1 : 0.4, transition: 'opacity .4s, color .4s' }}>
                    {s.d}
                  </span>
                  <span className="pw-service-arrow" style={{ justifySelf: 'end', transform: on ? 'rotate(45deg)' : 'none', transition: 'transform .5s var(--ease-out)' }}>
                    <Arrow size={26} color={on ? '#fff' : RED} />
                  </span>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function PromiseBand() {
  return (
    <section className="pw-promise-band" style={{ position: 'relative', height: '110vh', minHeight: 640, color: '#fff', overflow: 'hidden' }}>
      <Parallax src={IMG + 'gallery/08.png'} speed={0.3} reveal={false} style={{ position: 'absolute', inset: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,.6), rgba(0,0,0,.1))' }} />
      <div className="pw-promise-content" style={{ position: 'absolute', left: PAD, right: PAD, top: '50%', transform: 'translateY(-50%)', maxWidth: 900 }}>
        <Reveal><Eyebrow color="#fff">Our promise</Eyebrow></Reveal>
        <Reveal delay={100} style={{ marginTop: 28 }}><Title color="#fff" a="Excellence beyond" b="expectations." /></Reveal>
        <Reveal delay={200}>
          <p style={{ margin: '36px 0 0', maxWidth: 560, fontWeight: 300, fontSize: 17, lineHeight: 1.75, color: 'rgba(255,255,255,.9)' }}>
            When you choose Pacific West Home Builders, you’re not just hiring a contractor—you’re partnering with a team dedicated to turning your dreams into reality.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const APART = [
  ['gem', 'Luxury-Centric Designs', 'We blend functionality and aesthetics to create timeless spaces.'],
  ['leaf', 'Sustainability', 'We prioritize energy-efficient solutions and environmentally friendly practices.'],
  ['messages-square', 'Transparent Communication', 'We keep you informed every step of the way.'],
  ['hammer', 'Unmatched Craftsmanship', 'Our team uses only premium materials and meticulous techniques.'],
  ['clipboard-check', 'Seamless Project Management', 'From concept to completion, we make the process stress-free.']
];

export function Apart() {
  return (
    <section style={sec()}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: '40px 80px', marginBottom: 88 }}>
        <div>
          <Reveal><Eyebrow>Why homeowners choose us</Eyebrow></Reveal>
          <Reveal delay={100} style={{ marginTop: 28 }}><Title a="What sets us" b="apart." /></Reveal>
        </div>
        <Reveal delay={200} style={{ alignSelf: 'end' }}>
          <p style={{ margin: 0, fontWeight: 300, fontSize: 16, lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: 480 }}>
            We understand that your home is more than just a structure—it’s where life happens. That’s why we go above and beyond to ensure every detail is perfect.
          </p>
        </Reveal>
      </div>
      <div className="pw-apart-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', borderTop: '1px solid var(--border-hairline)' }}>
        {APART.map(([ic, t, d], k) => (
          <Reveal key={t} delay={k * 90} className="pw-apart-item" style={{ padding: '44px 28px 12px 0', borderRight: k < 4 ? '1px solid var(--border-hairline)' : 'none', paddingLeft: k ? 28 : 0 }}>
            <Icon name={ic} size={34} color={RED} />
            <div style={{ fontSize: 17, fontWeight: 400, margin: '32px 0 12px' }}>{t}</div>
            <div style={{ fontWeight: 300, fontSize: 14, lineHeight: 1.7, color: 'var(--text-secondary)' }}>{d}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const STEPS = [
  ['Site visit & plans', 'We review your property, confirm what can be built and draw concept plans.', 'build/01-property-review.jpg'],
  ['Permits & construction', 'We take the plans through city plan check, then our crews build the foundation, framing and finishes.', 'build/04-framing.jpg'],
  ['Move-in', 'Final inspection, certificate of occupancy and a walkthrough before handover.', 'build/08-completed.jpg']
];

export function Process() {
  const [a, setA] = React.useState(0);
  const refs = [React.useRef(null), React.useRef(null), React.useRef(null)];

  useFrame(() => {
    let best = 0;
    const vh = typeof window !== 'undefined' ? window.innerHeight : 800;
    refs.forEach((r, k) => {
      if (r.current && r.current.getBoundingClientRect().top < vh * 0.55) {
        best = k;
      }
    });
    setA(best);
  });

  // Mobile Infinite Carousel State
  const [cur, setCur] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCur(prev => (prev + 1) % STEPS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [cur]);

  const activeMobileStep = STEPS[cur];

  return (
    <section id="process">
      {/* Desktop Sticky Scroll-spy view (100% original desktop) */}
      <div className="pw-proc-desktop" style={{ background: 'var(--pw-black)', color: '#fff', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,460px),1fr))' }}>
        <div className="pw-proc-img" style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
          {STEPS.map((s, k) => (
            <img
              key={k}
              src={IMG + s[2]}
              alt=""
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: a === k ? 1 : 0,
                transform: a === k ? 'scale(1)' : 'scale(1.08)',
                transition: 'opacity 1s var(--ease-out), transform 1.6s var(--ease-out)'
              }}
            />
          ))}
        </div>
        <div style={{ padding: `clamp(80px,12vw,160px) ${PAD}`, background: 'var(--pw-black)', position: 'relative' }}>
          <Reveal><Eyebrow color="#fff">Discover the Pacific West difference</Eyebrow></Reveal>
          <Reveal delay={100} style={{ marginTop: 28 }}><Title color="#fff" a="From backyard to" b="move-in." size="clamp(36px,4.4vw,76px)" /></Reveal>
          <p style={{ margin: '32px 0 0', maxWidth: 460, fontWeight: 300, fontSize: 16, lineHeight: 1.75, color: 'rgba(255,255,255,.72)' }}>
            Design, engineering, permits and construction are handled by one team, so you have one point of contact from the first visit to the keys.
          </p>
          <div style={{ marginTop: '14vh' }}>
            {STEPS.map((s, k) => (
              <div
                key={k}
                ref={refs[k]}
                style={{
                  minHeight: '46vh',
                  borderTop: '1px solid rgba(255,255,255,' + (a === k ? '.9' : '.18') + ')',
                  paddingTop: 32,
                  transition: 'border-color .6s'
                }}
              >
                <div style={{ fontFamily: 'var(--font-serif-display)', fontStyle: 'italic', fontSize: 28, color: a === k ? '#E5524F' : 'rgba(255,255,255,.4)', transition: 'color .6s' }}>
                  0{k + 1}
                </div>
                <div style={{ fontWeight: 300, fontSize: 'clamp(30px,3vw,48px)', margin: '14px 0 16px', opacity: a === k ? 1 : 0.4, transition: 'opacity .6s' }}>
                  {s[0]}
                </div>
                <div style={{ fontWeight: 300, fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,.72)', maxWidth: 380, opacity: a === k ? 1 : 0.4, transition: 'opacity .6s' }}>
                  {s[1]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Automatic Infinite Carousel */}
      <div className="pw-proc-mobile" style={{ background: 'var(--pw-black)', color: '#fff', padding: '64px 20px 56px' }}>
        <Eyebrow color="#fff">Discover the Pacific West difference</Eyebrow>
        <div style={{ marginTop: 20 }}>
          <Title color="#fff" a="From backyard to" b="move-in." size="clamp(32px, 7vw, 44px)" />
        </div>
        <p style={{ margin: '18px 0 28px', fontWeight: 300, fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,.72)' }}>
          Design, engineering, permits and construction are handled by one team, so you have one point of contact from the first visit to the keys.
        </p>

        {/* Step Indicators / Progress bar */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
          {STEPS.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setCur(idx)}
              style={{
                flex: 1,
                background: 'none',
                border: 'none',
                padding: '6px 0',
                cursor: 'pointer',
                textAlign: 'left',
                color: '#fff'
              }}
            >
              <div style={{ height: 2, background: 'rgba(255,255,255,0.2)', position: 'relative', overflow: 'hidden' }}>
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'var(--pw-red)',
                    transformOrigin: 'left',
                    transform: idx === cur ? 'scaleX(1)' : 'scaleX(0)',
                    transition: idx === cur ? 'transform 4.5s linear' : 'none'
                  }}
                />
              </div>
              <div style={{ fontSize: 11, letterSpacing: '.12em', marginTop: 8, color: idx === cur ? '#fff' : 'rgba(255,255,255,0.4)', transition: 'color .3s' }}>
                0{idx + 1}
              </div>
            </button>
          ))}
        </div>

        {/* Active Step Card */}
        <div style={{ background: '#1c1b1a', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
          <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
            {STEPS.map((s, idx) => (
              <img
                key={idx}
                src={IMG + s[2]}
                alt={s[0]}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: idx === cur ? 1 : 0,
                  transform: idx === cur ? 'scale(1)' : 'scale(1.06)',
                  transition: 'opacity 0.8s var(--ease-out), transform 1.2s var(--ease-out)'
                }}
              />
            ))}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.7) 100%)' }} />
            <div style={{ position: 'absolute', left: 16, bottom: 14, fontFamily: 'var(--font-serif-display)', fontStyle: 'italic', fontSize: 26, color: '#E5524F' }}>
              0{cur + 1}
            </div>
          </div>
          <div style={{ padding: '24px 20px' }}>
            <div style={{ fontWeight: 400, fontSize: 22, color: '#fff', marginBottom: 10 }}>
              {activeMobileStep[0]}
            </div>
            <div style={{ fontWeight: 300, fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,.72)' }}>
              {activeMobileStep[1]}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <span style={{ fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
                Step {cur + 1} of {STEPS.length}
              </span>
              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  onClick={() => setCur((cur - 1 + STEPS.length) % STEPS.length)}
                  aria-label="Previous step"
                  style={{ width: 36, height: 36, border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: '#fff', display: 'grid', placeItems: 'center', cursor: 'pointer' }}
                >
                  <Icon name="arrow-left" size={14} color="#fff" />
                </button>
                <button
                  onClick={() => setCur((cur + 1) % STEPS.length)}
                  aria-label="Next step"
                  style={{ width: 36, height: 36, border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: '#fff', display: 'grid', placeItems: 'center', cursor: 'pointer' }}
                >
                  <Icon name="arrow-right" size={14} color="#fff" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

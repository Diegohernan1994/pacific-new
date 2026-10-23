import React from 'react';
import { PW } from './ds.jsx';
import { Icon, Arrow, Reveal, Parallax, Title, Eyebrow, useFrame, RED, PAD, IMG } from './motion.jsx';

const sec = (extra) => ({ padding: `clamp(80px,12vw,180px) ${PAD}`, ...extra });

const WORK = [
  ['gallery/01.png', 'Detached ADU', 'Backyard ADU', 52],
  ['gallery/06.png', 'Kitchen', 'ADU interior', 40],
  ['gallery/03.jpg', 'Bathroom', 'ADU interior', 26],
  ['gallery/02.png', 'Detached ADU', 'Aerial view', 52],
  ['gallery/04.png', 'Kitchen', 'ADU interior', 40],
  ['gallery/14.png', 'Bathroom', 'ADU interior', 26],
  ['gallery/08.png', 'ADU entry', 'Backyard ADU', 42]
];

export function Portfolio() {
  const wrap = React.useRef(null);
  const track = React.useRef(null);
  const [prog, setProg] = React.useState(0);

  useFrame(() => {
    const w = wrap.current;
    const t = track.current;
    if (!w || !t || typeof window === 'undefined') return;
    const r = w.getBoundingClientRect();
    const total = w.offsetHeight - window.innerHeight;
    const p = Math.min(1, Math.max(0, -r.top / total));
    const dist = t.scrollWidth - window.innerWidth;
    t.style.transform = `translate3d(${-p * dist}px,0,0)`;
    setProg(p);
  });

  // Mobile 1-Image Slider State
  const [mobileIdx, setMobileIdx] = React.useState(0);
  const currentMobileItem = WORK[mobileIdx];
  const navMobile = (d) => setMobileIdx((mobileIdx + d + WORK.length) % WORK.length);

  return (
    <section id="portfolio">
      {/* Desktop 340vh Horizontal Track (100% original desktop) */}
      <div className="pw-portfolio-desktop" ref={wrap} style={{ height: '340vh', position: 'relative' }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ padding: `0 ${PAD}`, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap', marginBottom: '5vh' }}>
            <div>
              <Eyebrow>Projects</Eyebrow>
              <div style={{ marginTop: 24 }}><Title a="ADUs we’ve" b="built." size="clamp(34px,4vw,68px)" /></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 12, letterSpacing: '.14em' }}>
              <span>01</span>
              <span style={{ width: 160, height: 1, background: 'var(--border-hairline)', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: prog * 100 + '%', background: RED }} />
              </span>
              <span>0{WORK.length}</span>
            </div>
          </div>
          <div ref={track} style={{ display: 'flex', gap: '1.6vw', padding: `0 ${PAD}`, willChange: 'transform', alignItems: 'flex-end' }}>
            {WORK.map(([img, t, m, w], k) => (
              <a
                key={k}
                href="#contact"
                style={{ flex: `0 0 ${w}vw`, color: 'var(--pw-ink)' }}
                onMouseEnter={e => {
                  const im = e.currentTarget.querySelector('img');
                  if (im) im.style.transform = 'scale(1.06)';
                }}
                onMouseLeave={e => {
                  const im = e.currentTarget.querySelector('img');
                  if (im) im.style.transform = 'scale(1)';
                }}
              >
                <div style={{ height: w < 30 ? '58vh' : '50vh', overflow: 'hidden', background: 'var(--pw-stone-100)' }}>
                  <img src={IMG + img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1.2s var(--ease-out)' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 18 }}>
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 400 }}>{t}</div>
                    <div style={{ fontSize: 12, fontWeight: 300, letterSpacing: '.08em', color: 'var(--text-muted)', marginTop: 4 }}>{m}</div>
                  </div>
                  <Arrow />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile 1-Image-at-a-time Slider */}
      <div className="pw-portfolio-mobile" style={{ padding: '64px 20px 56px', background: '#fff' }}>
        <div style={{ marginBottom: 24 }}>
          <Eyebrow>Projects</Eyebrow>
          <div style={{ marginTop: 16 }}>
            <Title a="ADUs we’ve" b="built." size="clamp(32px, 7vw, 44px)" />
          </div>
        </div>

        {/* Current Project Card (1 Image Full Width) */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <a href="#contact" style={{ display: 'block', color: 'var(--pw-ink)' }}>
            <div style={{ height: '54vh', minHeight: 320, maxHeight: 460, overflow: 'hidden', background: 'var(--pw-stone-100)', position: 'relative' }}>
              <img
                src={IMG + currentMobileItem[0]}
                alt={currentMobileItem[1]}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s var(--ease-out)' }}
              />
              <div style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(17,17,17,0.75)', color: '#fff', padding: '6px 12px', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase' }}>
                0{mobileIdx + 1} / 0{WORK.length}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
              <div>
                <div style={{ fontSize: 20, fontWeight: 400 }}>{currentMobileItem[1]}</div>
                <div style={{ fontSize: 13, fontWeight: 300, letterSpacing: '.08em', color: 'var(--text-muted)', marginTop: 4 }}>{currentMobileItem[2]}</div>
              </div>
              <Arrow size={22} />
            </div>
          </a>
        </div>

        {/* Navigation & Progress Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 24, paddingTop: 16, borderTop: '1px solid var(--border-hairline)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 12, letterSpacing: '.14em' }}>01</span>
            <span style={{ width: 110, height: 2, background: 'var(--border-hairline)', position: 'relative' }}>
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: ((mobileIdx + 1) / WORK.length) * 100 + '%',
                  background: RED,
                  transition: 'width 0.4s var(--ease-out)'
                }}
              />
            </span>
            <span style={{ fontSize: 12, letterSpacing: '.14em' }}>0{WORK.length}</span>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button
              onClick={() => navMobile(-1)}
              aria-label="Previous project"
              style={{ width: 44, height: 44, border: '1px solid var(--pw-ink)', background: 'transparent', display: 'grid', placeItems: 'center', cursor: 'pointer' }}
            >
              <Icon name="arrow-left" size={16} color={RED} />
            </button>
            <button
              onClick={() => navMobile(1)}
              aria-label="Next project"
              style={{ width: 44, height: 44, border: '1px solid var(--pw-ink)', background: 'transparent', display: 'grid', placeItems: 'center', cursor: 'pointer' }}
            >
              <Icon name="arrow-right" size={16} color={RED} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  ['Pacific West Home Builders did an outstanding job on my new construction project. Shai was the guy on-site, and his professionalism and attention to detail were top-notch.', 'Nancy A.', 'New Construction', 'yelp'],
  ['Pacific West Home Builders made my ADU project so much easier than I expected. There were a few challenges along the way, but they handled everything smoothly and always found the right solutions.', 'Barbara J.', 'ADU', 'google'],
  ['They built the foundation for my ADU, and from day one, they made the whole process feel easy and stress-free.', 'Juan I.', 'ADU Foundation', 'yelp'],
  ['They did an amazing job on my kitchen remodel! The craftsmanship and attention to detail were top-notch, and the final result exceeded my expectations.', 'John M.', 'Kitchen Remodel', 'google']
];

const SRC = {
  yelp: {
    n: 'Yelp',
    logo: (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
        <path fill="#FF1A1A" d="M10.5 2.3c-.9-.4-4.6.6-5.2 1.4-.2.3-.3.6-.2.9l3.9 6.7c.6 1 2 .6 2-.6V3.1c0-.4-.2-.7-.5-.8zM9.8 14.6l-4 1.2c-.5.2-.8.7-.6 1.2.3 1.2 1.5 3.1 2.6 3.7.4.2.9.1 1.2-.3l2.2-3.5c.6-1-.3-2.2-1.4-2.3zM9.4 12.5c.6-1 0-2-1.1-2.1L4.3 9.2c-.5-.1-1 .2-1.1.7-.3 1.1-.1 3.4.5 4.4.2.4.7.6 1.2.4l4-1.5c.2-.2.4-.4.5-.7zM18.8 15.9l-3.9-1.3c-1.1-.3-2 .9-1.4 1.900l2.1 3.6c.3.4.8.6 1.2.3 1-.6 2.4-2.4 2.6-3.6.1-.4-.2-.8-.6-.9zM19.6 9.6c-.5-1.1-2.2-2.8-3.300-3.2-.4-.2-.9 0-1.2.3l-2.4 3.4c-.6.9.2 2.2 1.3 2l4.1-.9c.5-.1.8-.6.7-1.1-.1-.2-.1-.4-.2-.5z" />
      </svg>
    )
  },
  google: {
    n: 'Google',
    logo: (
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
        <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.7-2.4 3.6v3h3.9c2.2-2.1 3.5-5.1 3.5-8.8z" />
        <path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3c-1.1.7-2.500 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3.1C3.3 21.3 7.3 24 12 24z" />
        <path fill="#FBBC05" d="M5.3 14.3c-.2-.7-.4-1.5-.4-2.3s.1-1.6.4-2.3V6.6H1.3C.5 8.2 0 10.1 0 12s.5 3.800 1.3 5.4l4-3.1z" />
        <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4C18 1.2 15.2 0 12 0 7.3 0 3.3 2.700 1.3 6.6l4 3.1c.9-2.8 3.6-4.9 6.7-4.9z" />
      </svg>
    )
  }
};

export function Reviews() {
  const [i, setI] = React.useState(0);
  const r = REVIEWS[i];

  React.useEffect(() => {
    const t = setTimeout(() => setI(prev => (prev + 1) % REVIEWS.length), 7000);
    return () => clearTimeout(t);
  }, [i]);

  const nav = d => setI((i + d + REVIEWS.length) % REVIEWS.length);
  const btn = {
    width: 56,
    height: 56,
    border: '1px solid var(--pw-ink)',
    background: 'transparent',
    display: 'grid',
    placeItems: 'center',
    cursor: 'pointer'
  };

  return (
    <section id="reviews" style={sec({ display: 'flex', flexWrap: 'wrap', gap: '48px 80px', alignItems: 'flex-start' })}>
      <div style={{ flex: '1 1 300px' }}>
        <Reveal><Eyebrow>Reviews</Eyebrow></Reveal>
        <Reveal delay={100} style={{ marginTop: 28 }}>
          <Title a="Words from our" b="clients." size="clamp(34px,3.6vw,60px)" />
        </Reveal>
        <div style={{ display: 'flex', gap: 10, marginTop: 48 }}>
          <button style={btn} onClick={() => nav(-1)} aria-label="Previous review">
            <Icon name="arrow-left" size={18} color={RED} />
          </button>
          <button style={btn} onClick={() => nav(1)} aria-label="Next review">
            <Icon name="arrow-right" size={18} color={RED} />
          </button>
        </div>
      </div>
      <div style={{ flex: '2 1 520px', minWidth: 0 }}>
        <div key={i} style={{ animation: 'pwFade .9s var(--ease-out)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, marginBottom: 28 }}>
            <div style={{ display: 'flex', gap: 4 }}>
              {[0, 1, 2, 3, 4].map(s => (
                <Icon key={s} name="star" size={16} color={RED} />
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 16px', border: '1px solid var(--border-hairline)', fontSize: 12, fontWeight: 500, letterSpacing: '.14em', textTransform: 'uppercase' }}>
              {SRC[r[3]].logo}
              <span>{SRC[r[3]].n} review</span>
            </div>
          </div>
          <blockquote style={{ margin: 0, fontWeight: 300, fontSize: 'clamp(24px,2.4vw,40px)', lineHeight: 1.35, letterSpacing: '-0.01em', textWrap: 'pretty' }}>
            “{r[0]}”
          </blockquote>
          <div style={{ marginTop: 36, display: 'flex', gap: 16, alignItems: 'center', fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase' }}>
            <span style={{ width: 28, height: 1, background: RED }} />
            <b style={{ fontWeight: 500 }}>{r[1]}</b>
            <span style={{ fontWeight: 300, color: 'var(--text-muted)' }}>{r[2]}</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 56 }}>
          {REVIEWS.map((_, k) => (
            <span
              key={k}
              onClick={() => setI(k)}
              style={{
                cursor: 'pointer',
                height: 2,
                flex: 1,
                background: k === i ? 'var(--pw-ink)' : 'var(--border-hairline)',
                transition: 'background .4s'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICE_OPTS = [
  'Detached ADU',
  'Attached ADU',
  'Garage Conversion',
  'JADU',
  'Second-story ADU',
  'Not sure yet',
  'Kitchen / Bath Remodel',
  'Room Addition',
  'Other'
];

export function Contact({ formRef }) {
  const [sent, setSent] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get('name') || '',
      phone: formData.get('phone') || '',
      email: formData.get('email') || '',
      service: formData.get('service') || 'General Inquiry',
      message: formData.get('message') || '',
      page_version: 'v6'
    };

    try {
      await fetch('/api/submit-lead.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.warn('Form submit error:', err);
    }
    window.location.href = '/thank-you';
  };

  return (
    <section id="contact" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,480px),1fr))' }}>
      <div className="pw-contact-banner" style={{ position: 'relative', minHeight: '90vh', color: '#fff', overflow: 'hidden' }}>
        <Parallax src={IMG + 'contact-kitchen.png'} speed={0.2} reveal={false} style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.45)' }} />
        <div className="pw-contact-banner-content" style={{ position: 'absolute', left: PAD, right: PAD, bottom: PAD }}>
          <Eyebrow color="#fff">Free site visit</Eyebrow>
          <div style={{ marginTop: 24 }}>
            <Title color="#fff" a="Let’s see what your lot can" b="hold." size="clamp(36px,4.2vw,72px)" />
          </div>
          <a href="tel:8883984499" style={{ display: 'inline-flex', gap: 14, alignItems: 'center', marginTop: 40, color: '#fff', fontSize: 22, fontWeight: 300 }}>
            <Icon name="phone" size={20} color="#fff" />
            (888) 398-4499
          </a>
        </div>
      </div>
      <div ref={formRef} style={{ padding: `clamp(56px,7vw,112px) ${PAD}`, background: '#fff' }}>
        <Eyebrow>Start your ADU</Eyebrow>
        <p style={{ margin: '24px 0 44px', fontWeight: 300, fontSize: 16, lineHeight: 1.7, color: 'var(--text-secondary)', maxWidth: 440 }}>
          Give us more information about your project, and a specialist will contact you to discuss it.
        </p>
        {sent ? (
          <div style={{ padding: '48px 0' }}>
            <Title a="Thank" b="you." size="56px" />
            <p style={{ fontWeight: 300, color: 'var(--text-secondary)', marginTop: 20 }}>A specialist will contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20 }}>
            <PW.TextField name="name" label="Full name" placeholder="Jane Doe" required />
            <PW.TextField name="phone" label="Phone" type="tel" placeholder="(000) 000-0000" required />
            <PW.TextField name="email" label="Email" type="email" placeholder="you@email.com" style={{ gridColumn: '1/-1' }} />
            <PW.SelectField name="service" label="Project type" options={SERVICE_OPTS} style={{ gridColumn: '1/-1' }} />
            <PW.TextField name="message" label="Project details" multiline rows={3} style={{ gridColumn: '1/-1' }} />
            <div style={{ gridColumn: '1/-1', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap', marginTop: 8 }}>
              <PW.Checkbox name="consent" defaultChecked label="I agree to be contacted about my project." />
              <button
                type="submit"
                disabled={submitting}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: '.18em',
                  textTransform: 'uppercase',
                  padding: '18px 30px',
                  background: 'var(--pw-ink)',
                  color: '#fff',
                  border: 'none',
                  cursor: submitting ? 'wait' : 'pointer',
                  display: 'flex',
                  gap: 12,
                  alignItems: 'center',
                  opacity: submitting ? 0.7 : 1
                }}
              >
                {submitting ? 'Sending...' : 'Send request'} <Arrow size={16} color="#fff" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export function Footer() {
  const col = (t, items) => (
    <div>
      <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', marginBottom: 22, color: 'var(--text-muted)' }}>
        {t}
      </div>
      {items.map(i => (
        <a key={i} href="#services" style={{ display: 'block', fontSize: 14, fontWeight: 300, marginBottom: 12 }}>
          {i}
        </a>
      ))}
    </div>
  );

  return (
    <footer style={{ padding: `clamp(72px,8vw,120px) ${PAD} 32px`, borderTop: '1px solid var(--border-hairline)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 48 }}>
        <div>
          <PW.Logo basePath="/" height={64} />
          <p style={{ fontWeight: 300, fontSize: 14, lineHeight: 1.7, color: 'var(--text-secondary)', marginTop: 24, maxWidth: 280 }}>
            ADU design, permits and construction across Southern California.
          </p>
        </div>
        {col('ADUs', ['Detached ADU', 'Attached ADU', 'Garage Conversion', 'JADU', 'Second-story ADU'])}
        {col('Remodeling', ['Kitchen Remodeling', 'Bathroom Remodeling', 'Bedroom Remodeling', 'Garage Remodeling'])}
        {col('More', ['Room Additions', 'Landscaping Services'])}
        <div>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', marginBottom: 22, color: 'var(--text-muted)' }}>
            Visit
          </div>
          <div style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.7 }}>
            16000 Ventura Blvd Ste 900<br />Encino, CA 91436
          </div>
          <div style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.7, marginTop: 14 }}>
            215 N Marengo Ave Ste 2091<br />Pasadena, CA 91101
          </div>
          <div style={{ display: 'flex', gap: 16, marginTop: 28 }}>
            {['instagram', 'facebook', 'map-pin'].map(n => (
              <a key={n} href="#" aria-label={n}>
                <Icon name={n} size={18} color={RED} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginTop: 80, paddingTop: 24, borderTop: '1px solid var(--border-hairline)', fontSize: 12, fontWeight: 300, color: 'var(--text-muted)' }}>
        <span>Pacific West Home Builders © 2026 · License #1111181</span>
        <span>(888) 398-4499 · info@pwhbuilders.com</span>
      </div>
    </footer>
  );
}

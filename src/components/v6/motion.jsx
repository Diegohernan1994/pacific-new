import React from 'react';

export const STK = '/assets/imagery/stock/';
export const IMG = '/assets/imagery/';
export const RED = 'var(--pw-red)';
export const PAD = 'clamp(20px,4vw,72px)';

const scrollSubs = new Set();
let rafOn = false;

function tick() {
  rafOn = false;
  scrollSubs.forEach(f => f());
}

function onScroll() {
  if (!rafOn) {
    rafOn = true;
    if (typeof requestAnimationFrame !== 'undefined') {
      requestAnimationFrame(tick);
    }
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
}

export function useFrame(fn) {
  React.useEffect(() => {
    scrollSubs.add(fn);
    fn();
    return () => scrollSubs.delete(fn);
  }, [fn]);
}

export function Icon({ name, size = 22, color = 'currentColor', style }) {
  const u = 'https://unpkg.com/lucide-static@0.460.0/icons/' + name + '.svg';
  return (
    <span
      aria-hidden
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        background: color,
        WebkitMask: 'url(' + u + ') center/contain no-repeat',
        mask: 'url(' + u + ') center/contain no-repeat',
        flex: 'none',
        ...style
      }}
    />
  );
}

export function Arrow({ size = 18, color = RED, style }) {
  return <Icon name="arrow-up-right" size={size} color={color} style={style} />;
}

export function Reveal({ children, delay = 0, y = 40, style, as = 'div', className }) {
  const r = React.useRef(null);
  const [v, setV] = React.useState(false);
  React.useEffect(() => {
    if (!r.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setV(true);
        io.disconnect();
      }
    }, { threshold: 0.15 });
    io.observe(r.current);
    return () => io.disconnect();
  }, []);
  const T = as;
  return (
    <T
      ref={r}
      className={className}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? 'none' : `translateY(${y}px)`,
        transition: `opacity 1s var(--ease-out) ${delay}ms, transform 1.1s var(--ease-out) ${delay}ms`,
        ...style
      }}
    >
      {children}
    </T>
  );
}

export function Parallax({ src, speed = 0.18, style, imgStyle, reveal = true }) {
  const box = React.useRef(null);
  const img = React.useRef(null);
  const [v, setV] = React.useState(!reveal);

  useFrame(() => {
    const el = box.current;
    if (!el || !img.current || typeof window === 'undefined') return;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight;
    if (r.bottom < 0 || r.top > vh) return;
    const off = (r.top + r.height / 2 - vh / 2) * speed;
    img.current.style.transform = `translate3d(0,${off}px,0) scale(1.18)`;
  });

  React.useEffect(() => {
    if (!reveal || !box.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setV(true);
        io.disconnect();
      }
    }, { threshold: 0.1 });
    io.observe(box.current);
    return () => io.disconnect();
  }, [reveal]);

  return (
    <div
      ref={box}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--pw-stone-100)',
        clipPath: v ? 'inset(0 0 0 0)' : 'inset(12% 0 12% 0)',
        transition: 'clip-path 1.4s var(--ease-out)',
        ...style
      }}
    >
      <img
        ref={img}
        src={src}
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          willChange: 'transform',
          ...imgStyle
        }}
      />
    </div>
  );
}

export function Title({ a, b, c, size = 'clamp(40px,5.4vw,92px)', align = 'left', color = 'var(--pw-ink)', style }) {
  return (
    <h2
      style={{
        margin: 0,
        fontFamily: 'var(--font-sans)',
        fontWeight: 300,
        fontSize: size,
        lineHeight: 1.02,
        letterSpacing: '-0.02em',
        color,
        textAlign: align,
        textWrap: 'balance',
        ...style
      }}
    >
      {a}{' '}
      <span
        style={{
          fontFamily: 'var(--font-serif-display)',
          fontStyle: 'italic',
          fontWeight: 400,
          color: RED,
          letterSpacing: '-0.01em'
        }}
      >
        {b}
      </span>
      {c ? ' ' + c : ''}
    </h2>
  );
}

export function Eyebrow({ children, color = 'var(--pw-ink)', style }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: '.22em',
        textTransform: 'uppercase',
        color,
        ...style
      }}
    >
      <span style={{ width: 28, height: 1, background: RED }}></span>
      {children}
    </div>
  );
}

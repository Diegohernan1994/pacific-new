/* @ds-bundle: {"format":4,"namespace":"PacificWestDesignSystem_179d0a","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"SelectField","sourcePath":"components/forms/SelectField.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"CoverTitle","sourcePath":"components/marketing/CoverTitle.jsx"},{"name":"FeatureItem","sourcePath":"components/marketing/FeatureItem.jsx"},{"name":"OfferBanner","sourcePath":"components/marketing/OfferBanner.jsx"},{"name":"SectionHeading","sourcePath":"components/marketing/SectionHeading.jsx"},{"name":"ServiceCard","sourcePath":"components/marketing/ServiceCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/marketing/TestimonialCard.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"7fcf0b49a89b","components/brand/Logo.jsx":"7ded615c5a62","components/feedback/Tag.jsx":"3e0e4831fb9e","components/forms/Checkbox.jsx":"70a7ad283a12","components/forms/SelectField.jsx":"649f515d633f","components/forms/TextField.jsx":"33e8fad48d05","components/marketing/CoverTitle.jsx":"ddd07da82997","components/marketing/FeatureItem.jsx":"2647cf255c0b","components/marketing/OfferBanner.jsx":"11a98ca6532e","components/marketing/SectionHeading.jsx":"55e115b6577b","components/marketing/ServiceCard.jsx":"bf8b9bf91e94","components/marketing/TestimonialCard.jsx":"1135eeaef3d8","ui_kits/adu-landing/Landing.jsx":"89d73fc17411","ui_kits/social/Ads.jsx":"09ecc5065b10","ui_kits/website-v2/Hero.jsx":"5efe2da3b6f0","ui_kits/website-v2/Motion.jsx":"0abdf1cde648","ui_kits/website-v2/Sections.jsx":"59103861bd66","ui_kits/website-v2/Sections2.jsx":"dc0aab1b6bb0","ui_kits/website-v3/HeroV3.jsx":"5efe2da3b6f0","ui_kits/website-v3/MotionV3.jsx":"0abdf1cde648","ui_kits/website-v3/Sections2V3.jsx":"dc0aab1b6bb0","ui_kits/website-v3/SectionsV3.jsx":"59103861bd66","ui_kits/website-v4/AduV4.jsx":"a0692008b0f4","ui_kits/website-v4/BuildHeroV4.jsx":"f068ec46a841","ui_kits/website-v4/CoreV4.jsx":"3694039a7a15","ui_kits/website-v4/MoreV4.jsx":"d6bc6f12000c","ui_kits/website-v4/image-slot.js":"fff26d081c8d","ui_kits/website-v5/AduV5.jsx":"ad1c2f324186","ui_kits/website-v5/BuildHeroV5.jsx":"627ff5817d17","ui_kits/website-v5/CoreV5.jsx":"3694039a7a15","ui_kits/website-v5/MoreV5.jsx":"3ae19f51aa66","ui_kits/website-v5/image-slot.js":"fff26d081c8d","ui_kits/website-v6/HeroV6.jsx":"b37f3ab57269","ui_kits/website-v6/MotionV6.jsx":"4bb5a38e0236","ui_kits/website-v6/Sections2V6.jsx":"e73e86d98433","ui_kits/website-v6/SectionsV6.jsx":"7e0a89e7ba73","ui_kits/website/Contact.jsx":"4bb36b2964d1","ui_kits/website/Gallery.jsx":"ae752eff8b83","ui_kits/website/Home.jsx":"76535cc748e6","ui_kits/website/Services.jsx":"1c13e3822a4e","ui_kits/website/Shell.jsx":"9244437a12eb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PacificWestDesignSystem_179d0a = window.PacificWestDesignSystem_179d0a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '10px 20px',
    fontSize: 12
  },
  md: {
    padding: '14px 30px',
    fontSize: 13
  },
  lg: {
    padding: '18px 40px',
    fontSize: 14
  }
};
const VARIANTS = {
  primary: {
    bg: 'var(--action-primary)',
    bgH: 'var(--action-primary-hover)',
    fg: '#fff',
    bd: 'var(--action-primary)',
    bdH: 'var(--action-primary-hover)'
  },
  dark: {
    bg: 'var(--pw-black)',
    bgH: 'var(--pw-stone-900)',
    fg: '#fff',
    bd: 'var(--pw-black)',
    bdH: 'var(--pw-stone-900)'
  },
  outline: {
    bg: 'transparent',
    bgH: 'var(--pw-ink)',
    fg: 'var(--pw-ink)',
    fgH: '#fff',
    bd: 'var(--pw-ink)',
    bdH: 'var(--pw-ink)'
  },
  light: {
    bg: 'transparent',
    bgH: '#fff',
    fg: '#fff',
    fgH: 'var(--pw-ink)',
    bd: 'rgba(255,255,255,.85)',
    bdH: '#fff'
  },
  link: {
    bg: 'transparent',
    bgH: 'transparent',
    fg: 'var(--pw-ink)',
    fgH: 'var(--pw-red)',
    bd: 'transparent',
    bdH: 'transparent'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  href,
  disabled = false,
  fullWidth = false,
  iconRight,
  children,
  onClick,
  type = 'button',
  style
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const isLink = variant === 'link';
  const st = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    whiteSpace: 'nowrap',
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    letterSpacing: 'var(--tracking-caps)',
    textTransform: 'uppercase',
    lineHeight: 1,
    padding: isLink ? '4px 0' : s.padding,
    fontSize: s.fontSize,
    borderRadius: 0,
    border: '1px solid ' + (h ? v.bdH : v.bd),
    background: p && variant === 'primary' ? 'var(--action-primary-press)' : h ? v.bgH : v.bg,
    color: h && v.fgH ? v.fgH : v.fg,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? .4 : 1,
    textDecoration: 'none',
    transition: 'background var(--dur-base) var(--ease-out),color var(--dur-base) var(--ease-out),border-color var(--dur-base) var(--ease-out)',
    borderBottom: isLink ? '1px solid ' + (h ? 'var(--pw-red)' : 'currentColor') : undefined,
    ...style
  };
  const ev = {
    onMouseEnter: () => !disabled && setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false)
  };
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, children, iconRight && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      display: 'inline-flex',
      transform: h ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, iconRight));
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: st
  }, ev), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: st
  }, ev), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function Logo({
  tone = 'dark',
  height = 56,
  basePath = '',
  src,
  alt = 'Pacific West Home Builders',
  style
}) {
  const url = src || basePath + 'assets/logo-' + (tone === 'light' ? 'white' : 'black') + '.png';
  return /*#__PURE__*/React.createElement("img", {
    src: url,
    alt: alt,
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function Tag({
  children,
  variant = 'outline',
  style
}) {
  const m = {
    outline: {
      bg: 'transparent',
      fg: 'var(--text-primary)',
      bd: 'var(--pw-ink)'
    },
    solid: {
      bg: 'var(--pw-black)',
      fg: '#fff',
      bd: 'var(--pw-black)'
    },
    red: {
      bg: 'var(--pw-red)',
      fg: '#fff',
      bd: 'var(--pw-red)'
    },
    glass: {
      bg: 'var(--overlay-capsule)',
      fg: '#fff',
      bd: 'rgba(255,255,255,.35)'
    },
    stone: {
      bg: 'var(--pw-stone-100)',
      fg: 'var(--text-primary)',
      bd: 'var(--pw-stone-100)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      padding: '6px 12px',
      background: m.bg,
      color: m.fg,
      border: '1px solid ' + m.bd,
      backdropFilter: variant === 'glass' ? 'blur(6px)' : undefined,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked = false,
  onChange,
  tone = 'light',
  style
}) {
  const [c, setC] = React.useState(defaultChecked);
  const on = checked ?? c;
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 12,
      cursor: 'pointer',
      fontSize: 13,
      fontWeight: 300,
      lineHeight: 1.5,
      color: dark ? '#fff' : 'var(--text-secondary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: on,
    onChange: e => {
      setC(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 18px',
      height: 18,
      marginTop: 1,
      border: '1px solid ' + (on ? 'var(--pw-red)' : dark ? 'rgba(255,255,255,.6)' : 'var(--pw-stone-500)'),
      background: on ? 'var(--pw-red)' : 'transparent',
      display: 'grid',
      placeItems: 'center',
      transition: 'all var(--dur-fast)'
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 9,
      borderRight: '1.5px solid #fff',
      borderBottom: '1.5px solid #fff',
      transform: 'translateY(-1px) rotate(45deg)'
    }
  })), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/SelectField.jsx
try { (() => {
function SelectField({
  label,
  options = [],
  placeholder = 'Select Service',
  value,
  defaultValue,
  onChange,
  tone = 'light',
  required,
  name,
  style
}) {
  const [f, setF] = React.useState(false);
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: dark ? '#fff' : 'var(--text-primary)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pw-red)'
    }
  }, " *")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", {
    name: name,
    value: value,
    defaultValue: value === undefined ? defaultValue ?? '' : undefined,
    onChange: onChange,
    required: required,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      width: '100%',
      appearance: 'none',
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 15,
      color: dark ? '#fff' : 'var(--text-primary)',
      background: dark ? 'transparent' : '#fff',
      border: '1px solid ' + (f ? dark ? '#fff' : 'var(--pw-ink)' : dark ? 'rgba(255,255,255,.4)' : 'var(--pw-stone-300)'),
      borderRadius: 'var(--radius-1)',
      padding: '14px 44px 14px 16px',
      outline: 'none',
      boxShadow: f && !dark ? '0 0 0 3px var(--focus-ring)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o,
    style: {
      color: '#111'
    }
  }, o))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      right: 16,
      top: '50%',
      width: 8,
      height: 8,
      borderRight: '1px solid currentColor',
      borderBottom: '1px solid currentColor',
      transform: 'translateY(-70%) rotate(45deg)',
      pointerEvents: 'none',
      color: dark ? '#fff' : 'var(--pw-ink)'
    }
  })));
}
Object.assign(__ds_scope, { SelectField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SelectField.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextField({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = 'text',
  multiline = false,
  rows = 4,
  error,
  hint,
  tone = 'light',
  required,
  name,
  style
}) {
  const [f, setF] = React.useState(false);
  const dark = tone === 'dark';
  const bd = error ? 'var(--pw-error)' : f ? dark ? '#fff' : 'var(--pw-ink)' : dark ? 'rgba(255,255,255,.4)' : 'var(--pw-stone-300)';
  const st = {
    width: '100%',
    fontFamily: 'var(--font-sans)',
    fontWeight: 300,
    fontSize: 15,
    color: dark ? '#fff' : 'var(--text-primary)',
    background: dark ? 'transparent' : '#fff',
    border: '1px solid ' + bd,
    borderRadius: 'var(--radius-1)',
    padding: '14px 16px',
    outline: 'none',
    resize: 'vertical',
    boxShadow: f && !dark ? '0 0 0 3px var(--focus-ring)' : 'none',
    transition: 'border-color var(--dur-fast),box-shadow var(--dur-fast)'
  };
  const P = {
    name,
    placeholder,
    value,
    defaultValue,
    onChange,
    required,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: st
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: dark ? '#fff' : 'var(--text-primary)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pw-red)'
    }
  }, " *")), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, P)) : /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, P)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 300,
      color: error ? 'var(--pw-error)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CoverTitle.jsx
try { (() => {
function CoverTitle({
  title,
  location,
  align = 'center',
  size = 72,
  rule = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      textAlign: align,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 300,
      fontSize: size,
      lineHeight: 1,
      letterSpacing: '-0.005em',
      textShadow: 'var(--shadow-text)'
    }
  }, title), rule && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-inverse)',
      margin: `${size * 0.42}px 0 ${size * 0.3}px`
    }
  }), location && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 400,
      fontSize: size * 0.36,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase'
    }
  }, location));
}
Object.assign(__ds_scope, { CoverTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CoverTitle.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FeatureItem.jsx
try { (() => {
function FeatureItem({
  icon,
  index,
  title,
  text,
  tone = 'dark',
  style
}) {
  const inv = tone === 'light';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      paddingTop: 20,
      borderTop: '1px solid ' + (inv ? 'rgba(255,255,255,.35)' : 'var(--border-hairline)'),
      color: inv ? '#fff' : 'var(--text-primary)',
      ...style
    }
  }, (icon || index) && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 32,
      display: 'flex',
      alignItems: 'center',
      color: inv ? '#fff' : 'var(--pw-red)',
      fontFamily: 'var(--font-serif-display)',
      fontSize: 28
    }
  }, icon || index), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 16,
      letterSpacing: '.01em'
    }
  }, title), text && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 300,
      fontSize: 15,
      lineHeight: 1.6,
      color: inv ? 'rgba(255,255,255,.82)' : 'var(--text-secondary)'
    }
  }, text));
}
Object.assign(__ds_scope, { FeatureItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FeatureItem.jsx", error: String((e && e.message) || e) }); }

// components/marketing/OfferBanner.jsx
try { (() => {
const DEFAULT = [{
  big: '$0',
  sub: 'DOWN',
  hero: true
}, {
  title: '0% INTEREST',
  pre: 'FOR',
  em: '18 MONTHS'
}, {
  title: 'NO PAYMENTS',
  pre: 'UNTIL',
  em: '2028*'
}];
function OfferBanner({
  items = DEFAULT,
  tone = 'red',
  layout = 'box',
  scale = 1,
  style
}) {
  const bg = tone === 'black' ? 'var(--pw-black)' : 'var(--pw-red)';
  const k = n => n * scale;
  const cell = (it, i) => it.hero ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      textAlign: 'center',
      lineHeight: 1,
      padding: `0 ${k(12)}px`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: k(64),
      letterSpacing: '-0.02em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: k(40),
      verticalAlign: k(14)
    }
  }, it.big[0]), it.big.slice(1)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 400,
      fontSize: k(24),
      marginTop: k(2)
    }
  }, it.sub)) : /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      lineHeight: 1.1,
      padding: `0 ${k(12)}px`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: k(30)
    }
  }, it.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: k(22),
      marginTop: k(4)
    }
  }, it.pre, " ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 800
    }
  }, it.em)));
  const kids = [];
  items.forEach((it, i) => {
    if (i && layout === 'box') kids.push(/*#__PURE__*/React.createElement("div", {
      key: 'd' + i,
      style: {
        width: 1,
        alignSelf: 'stretch',
        background: 'rgba(255,255,255,.75)',
        margin: `${k(6)}px 0`
      }
    }));
    kids.push(cell(it, i));
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: layout === 'box' ? `${k(26)}px ${k(36)}px` : `${k(10)}px ${k(24)}px`,
      ...style
    }
  }, kids);
}
Object.assign(__ds_scope, { OfferBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/OfferBanner.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  tone = 'dark',
  size = 'lg',
  style
}) {
  const inv = tone === 'light';
  const fs = {
    md: 36,
    lg: 48,
    xl: 64
  }[size] || 48;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      maxWidth: align === 'center' ? 760 : 680,
      margin: align === 'center' ? '0 auto' : 0,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: inv ? '#fff' : 'var(--pw-red)',
      marginBottom: 14
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif-display)',
      fontWeight: 500,
      fontSize: fs,
      lineHeight: 1.08,
      color: inv ? '#fff' : 'var(--text-primary)',
      textWrap: 'balance'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 0',
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.65,
      color: inv ? 'rgba(255,255,255,.88)' : 'var(--text-secondary)',
      textWrap: 'pretty'
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceCard.jsx
try { (() => {
function ServiceCard({
  image,
  title,
  description,
  href = '#',
  cta = 'Read More',
  ratio = '4/3',
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'block',
      color: 'var(--text-primary)',
      textDecoration: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      overflow: 'hidden',
      background: 'var(--pw-stone-100)'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: h ? 'scale(1.04)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif-display)',
      fontWeight: 500,
      fontSize: 28,
      lineHeight: 1.15
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 14px',
      fontWeight: 300,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-secondary)'
    }
  }, description), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: h ? 'var(--pw-red)' : 'var(--text-primary)',
      borderBottom: '1px solid currentColor',
      paddingBottom: 3,
      transition: 'color var(--dur-fast)'
    }
  }, cta, " \u2192")));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TestimonialCard.jsx
try { (() => {
function TestimonialCard({
  quote,
  author,
  project,
  tone = 'light',
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      padding: '36px 32px',
      background: dark ? 'var(--pw-black)' : 'var(--surface-card)',
      border: dark ? 'none' : '1px solid var(--border-hairline)',
      color: dark ? '#fff' : 'var(--text-primary)',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 64,
      lineHeight: .5,
      color: 'var(--pw-red)',
      height: 24
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif-display)',
      fontStyle: 'italic',
      fontSize: 21,
      lineHeight: 1.45,
      textWrap: 'pretty'
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 1,
      background: dark ? '#fff' : 'var(--pw-ink)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase'
    }
  }, author), project && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 300,
      color: dark ? 'rgba(255,255,255,.7)' : 'var(--text-muted)'
    }
  }, "\xB7 ", project)));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/adu-landing/Landing.jsx
try { (() => {
function LandingHeader() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '22px 32px'
    }
  }, /*#__PURE__*/React.createElement(NSW.Logo, {
    tone: "light",
    basePath: "../../",
    height: 54
  }), /*#__PURE__*/React.createElement("a", {
    href: "tel:8883984499",
    style: {
      marginLeft: 'auto',
      color: '#fff',
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontSize: 14,
      letterSpacing: '.06em'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16
  }), "(888) 398-4499")));
}
function Landing() {
  const [compare, setCompare] = React.useState(50);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 880,
      background: 'url(' + PHOTOS.dining + ') center 50%/cover',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,.5)'
    }
  }), /*#__PURE__*/React.createElement(LandingHeader, null), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: 'relative',
      paddingTop: 190,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,400px),1fr))',
      gap: 64,
      alignItems: 'start',
      paddingBottom: 80
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 300,
      fontSize: 'clamp(44px,6vw,76px)',
      lineHeight: 1,
      letterSpacing: '.01em'
    }
  }, "YOUR NEW ADU"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 'clamp(44px,6vw,76px)',
      lineHeight: 1,
      letterSpacing: '.02em'
    }
  }, "STARTS HERE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      letterSpacing: 'var(--tracking-wide)',
      marginTop: 20
    }
  }, "DESIGN \u2022 PERMITS \u2022 CONSTRUCTION"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 300,
      fontSize: 18,
      lineHeight: 1.6,
      maxWidth: 520,
      marginTop: 28,
      color: 'rgba(255,255,255,.9)'
    }
  }, "\u2192 Add living space and increase property value with an ADU. Serving Los Angeles, Pasadena and the Inland Empire."), /*#__PURE__*/React.createElement(NSW.OfferBanner, {
    scale: 0.62,
    style: {
      marginTop: 36,
      maxWidth: 640
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      fontWeight: 300,
      color: 'rgba(255,255,255,.7)',
      marginTop: 10
    }
  }, "*Subject to credit approval.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      color: 'var(--text-primary)',
      padding: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--pw-red)'
    }
  }, "Get a free consultation"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 34,
      fontWeight: 500,
      margin: '8px 0 22px'
    }
  }, "Plan your ADU"), /*#__PURE__*/React.createElement(QuoteForm, {
    compact: true
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '110px 0'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(NSW.SectionHeading, {
    align: "center",
    eyebrow: "Build now. Pay later.",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "ADU & Garage ", /*#__PURE__*/React.createElement("em", null, "Conversions")),
    lead: "Turn an unused garage or backyard into a rentable, livable space. One team from first sketch to final inspection."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 520,
      marginTop: 56,
      overflow: 'hidden',
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PHOTOS.garage,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 55%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: compare + '%',
      width: 1,
      background: '#fff'
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "10",
    max: "90",
    value: compare,
    onChange: e => setCompare(+e.target.value),
    style: {
      position: 'absolute',
      left: '10%',
      right: '10%',
      bottom: 24,
      width: '80%',
      accentColor: '#AB0000'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 20,
      left: 20
    }
  }, /*#__PURE__*/React.createElement(NSW.Tag, {
    variant: "glass"
  }, "Before")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 20,
      right: 20
    }
  }, /*#__PURE__*/React.createElement(NSW.Tag, {
    variant: "glass"
  }, "After"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '110px 0',
      background: 'var(--pw-black)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(NSW.SectionHeading, {
    tone: "light",
    eyebrow: "How it works",
    title: "From concept to completion"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 40,
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(NSW.FeatureItem, {
    tone: "light",
    index: "01",
    title: "Design",
    text: "We\u2019ll create a plan that\u2019s as unique as your lifestyle."
  }), /*#__PURE__*/React.createElement(NSW.FeatureItem, {
    tone: "light",
    index: "02",
    title: "Permits",
    text: "We handle the city paperwork and keep you informed every step of the way."
  }), /*#__PURE__*/React.createElement(NSW.FeatureItem, {
    tone: "light",
    index: "03",
    title: "Construction",
    text: "Watch your ADU take shape with precision and care."
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '110px 0'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
      gap: 16
    }
  }, [[PHOTOS.exterior, 'Detached ADU', 'Rancho Cucamonga, CA'], [PHOTOS.kitchenTaupe, 'Detached ADU', 'Rancho Cucamonga, CA'], [PHOTOS.kitchenGreen, 'ADU', 'Los Angeles, CA']].map(([i, t, l], k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      position: 'relative',
      aspectRatio: '4/5',
      background: 'url(' + i + ') center/cover'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,.3)'
    }
  }), /*#__PURE__*/React.createElement(NSW.CoverTitle, {
    title: t,
    location: l,
    size: 40,
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '42%'
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 0 110px'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(NSW.TestimonialCard, {
    quote: "Pacific West Home Builders made my ADU project so much easier than I expected. There were a few challenges along the way, but they handled everything smoothly and always found the right solutions.",
    author: "Barbara J.",
    project: "ADU"
  }), /*#__PURE__*/React.createElement(NSW.TestimonialCard, {
    tone: "dark",
    quote: "They built the foundation for my ADU, and from day one, they made the whole process feel easy and stress-free.",
    author: "Juan I.",
    project: "ADU Foundation"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pw-red)',
      color: '#fff',
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 44,
      lineHeight: 1.05
    }
  }, "UNLOCK YOUR", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", null, "PROPERTY\u2019S POTENTIAL")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(NSW.Button, {
    variant: "light",
    href: "tel:8883984499"
  }, "Call (888) 398-4499"), /*#__PURE__*/React.createElement(NSW.Button, {
    variant: "dark"
  }, "Get a Free Consultation")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pw-black)',
      color: 'rgba(255,255,255,.6)',
      fontSize: 12,
      fontWeight: 300,
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Pacific West Home Builders \xB7 License #1111181"), /*#__PURE__*/React.createElement("span", null, "*Financing subject to credit approval. Terms vary."))));
}
window.Landing = Landing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/adu-landing/Landing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/Ads.jsx
try { (() => {
const NSA = window.PacificWestDesignSystem_179d0a;
const IMGS = '../../assets/imagery/';
function Frame({
  w,
  h,
  scale,
  children,
  bg
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: w * scale,
      height: h * scale,
      overflow: 'hidden',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: h,
      transform: 'scale(' + scale + ')',
      transformOrigin: '0 0',
      position: 'relative',
      background: 'url(' + bg + ') center/cover',
      fontFamily: 'var(--font-sans)',
      color: '#fff'
    }
  }, children));
}
function StoryStartsHere({
  scale = .3,
  tone = 'red',
  bg = IMGS + 'clean/dining-oak.png'
}) {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1920,
    scale: scale,
    bg: bg
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,.45)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 460,
      left: 0,
      right: 0,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 300,
      fontSize: 104,
      lineHeight: .95
    }
  }, "YOUR NEW ADU"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 104,
      lineHeight: .95,
      letterSpacing: '.02em'
    }
  }, "STARTS HERE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 34,
      letterSpacing: 'var(--tracking-wide)',
      marginTop: 30
    }
  }, "DESIGN \u2022 PERMITS \u2022 CONSTRUCTION")), /*#__PURE__*/React.createElement(NSA.Logo, {
    tone: "light",
    basePath: "../../",
    height: 150,
    style: {
      position: 'absolute',
      left: '50%',
      top: 880,
      transform: 'translateX(-50%)'
    }
  }), /*#__PURE__*/React.createElement(NSA.OfferBanner, {
    tone: tone,
    layout: "strip",
    style: {
      position: 'absolute',
      top: 1270,
      left: 0,
      right: 0
    }
  }));
}
function StoryUnlock({
  scale = .3
}) {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1920,
    scale: scale,
    bg: IMGS + 'clean/kitchen-white-island.png'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,.25)'
    }
  }), /*#__PURE__*/React.createElement(NSA.Logo, {
    tone: "light",
    basePath: "../../",
    height: 130,
    style: {
      position: 'absolute',
      right: 80,
      top: 90
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 88,
      top: 210,
      fontWeight: 800,
      fontSize: 84,
      lineHeight: 1.02,
      textShadow: 'var(--shadow-text)'
    }
  }, "UNLOCK YOUR", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", null, "PROPERTY\u2019S POTENTIAL")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 990,
      textAlign: 'center',
      fontWeight: 600,
      fontSize: 42,
      lineHeight: 1.15
    }
  }, "\u2192 Add Living Space and Increase", /*#__PURE__*/React.createElement("br", null), "Property Value With an ADU"), /*#__PURE__*/React.createElement(NSA.OfferBanner, {
    style: {
      position: 'absolute',
      left: 88,
      right: 88,
      top: 1104
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 92,
      top: 1292,
      fontSize: 26,
      letterSpacing: 'var(--tracking-wide)'
    }
  }, "GET A FREE CONSULTATION"));
}
function StoryBuildNow({
  scale = .3
}) {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1920,
    scale: scale,
    bg: IMGS + 'clean/garage-before-after.png'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,.2)'
    }
  }), /*#__PURE__*/React.createElement(NSA.Logo, {
    tone: "light",
    basePath: "../../",
    height: 130,
    style: {
      position: 'absolute',
      left: '50%',
      top: 130,
      transform: 'translateX(-50%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 280,
      textAlign: 'center',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 400,
      fontSize: 104
    }
  }, "BUILD NOW."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 112
    }
  }, "PAY LATER.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 236,
      right: 236,
      top: 512,
      height: 146,
      background: 'var(--overlay-capsule)',
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      fontSize: 46,
      letterSpacing: '.2em',
      lineHeight: 1.05
    }
  }, "ADU & GARAGE", /*#__PURE__*/React.createElement("br", null), "CONVERSIONS"), /*#__PURE__*/React.createElement(NSA.OfferBanner, {
    style: {
      position: 'absolute',
      left: 60,
      right: 56,
      top: 1245,
      padding: '40px 36px'
    }
  }));
}
function CoverPost({
  scale = .3,
  title = 'Detached ADU',
  location = 'Rancho Cucamonga, CA',
  bg = IMGS + 'clean/kitchen-taupe.png'
}) {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1350,
    scale: scale,
    bg: bg
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,.18)'
    }
  }), /*#__PURE__*/React.createElement(NSA.CoverTitle, {
    title: title,
    location: location,
    size: 88,
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 612
    }
  }), /*#__PURE__*/React.createElement(NSA.Logo, {
    tone: "light",
    basePath: "../../",
    height: 180,
    style: {
      position: 'absolute',
      left: '50%',
      top: 910,
      transform: 'translateX(-50%)'
    }
  }));
}
Object.assign(window, {
  StoryStartsHere,
  StoryUnlock,
  StoryBuildNow,
  CoverPost
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/Ads.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v2/Hero.jsx
try { (() => {
const SLIDES = [{
  src: STK + 's14.jpg',
  room: 'Kitchen',
  pos: 'center 55%'
}, {
  src: STK + 's04.jpg',
  room: 'Bathroom',
  pos: 'center 60%'
}, {
  src: STK + 's10.jpg',
  room: 'Living Room',
  pos: 'center 60%'
}, {
  src: STK + 's20.jpg',
  room: 'Exterior',
  pos: 'center 55%'
}];
function Header({
  onQuote
}) {
  const [solid, setSolid] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  useFrame(() => setSolid(scrollY > innerHeight * .85));
  const fg = solid ? 'var(--pw-ink)' : '#fff';
  const links = ['About', 'Services', 'Portfolio', 'Reviews', 'Contact'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 40,
      background: solid ? 'rgba(255,255,255,.96)' : 'transparent',
      backdropFilter: solid ? 'blur(10px)' : 'none',
      borderBottom: '1px solid ' + (solid ? 'var(--border-hairline)' : 'rgba(255,255,255,.18)'),
      transition: 'background .5s var(--ease-out),border-color .5s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `0 ${PAD}`,
      height: solid ? 76 : 96,
      display: 'flex',
      alignItems: 'center',
      gap: 40,
      transition: 'height .5s var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top"
  }, /*#__PURE__*/React.createElement(PW.Logo, {
    tone: solid ? 'dark' : 'light',
    basePath: "../../",
    height: solid ? 44 : 56,
    style: {
      transition: 'height .5s'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    className: "pw-nav",
    style: {
      display: 'flex',
      gap: 36,
      marginLeft: 'auto'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + l.toLowerCase(),
    style: {
      color: fg,
      fontSize: 13,
      fontWeight: 400,
      letterSpacing: '.08em',
      transition: 'color .4s'
    }
  }, l))), /*#__PURE__*/React.createElement("a", {
    className: "pw-phone",
    href: "tel:8883984499",
    style: {
      color: fg,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 13,
      letterSpacing: '.06em',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 15,
    color: RED
  }), "(888) 398-4499"), /*#__PURE__*/React.createElement("button", {
    onClick: onQuote,
    style: {
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
    }
  }, "Free Quote ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  }))));
}
function Hero() {
  const [i, setI] = React.useState(0);
  const [m, setM] = React.useState({
    x: .5,
    y: .5
  });
  const t = React.useRef();
  React.useEffect(() => {
    t.current = setTimeout(() => setI((i + 1) % SLIDES.length), 6500);
    return () => clearTimeout(t.current);
  }, [i]);
  const [sy, setSy] = React.useState(0);
  useFrame(() => setSy(Math.min(scrollY, innerHeight)));
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    onMouseMove: e => setM({
      x: e.clientX / innerWidth,
      y: e.clientY / innerHeight
    }),
    style: {
      position: 'relative',
      height: '100vh',
      minHeight: 640,
      overflow: 'hidden',
      background: '#111',
      color: '#fff'
    }
  }, SLIDES.map((s, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      position: 'absolute',
      inset: '-3%',
      opacity: k === i ? 1 : 0,
      transition: 'opacity 1.6s var(--ease-inout)',
      transform: `translate3d(${(m.x - .5) * -28}px,${(m.y - .5) * -18 + sy * .35}px,0)`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: s.src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: s.pos,
      transform: k === i ? 'scale(1)' : 'scale(1.1)',
      transition: k === i ? 'transform 8s linear' : 'transform 1.6s'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(0,0,0,.35) 0%,rgba(0,0,0,.1) 35%,rgba(0,0,0,.55) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: PAD,
      right: PAD,
      bottom: 'clamp(48px,9vh,110px)',
      display: 'flex',
      alignItems: 'flex-end',
      gap: 40,
      flexWrap: 'wrap',
      opacity: Math.max(0, 1 - sy / (innerHeight || 1) * 1.4),
      transform: `translateY(${sy * -.15}px)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 600px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '.3em',
      textTransform: 'uppercase',
      marginBottom: 28,
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: '#fff'
    }
  }), "Pacific West Home Builders \xB7 Los Angeles"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontWeight: 200,
      fontSize: 'clamp(48px,7.4vw,136px)',
      lineHeight: .96,
      letterSpacing: '-0.03em'
    }
  }, "Your vision,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontStyle: 'italic',
      fontWeight: 400
    }
  }, "our masterpiece."))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 1 380px',
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 17,
      lineHeight: 1.65,
      color: 'rgba(255,255,255,.88)'
    }
  }, "Building luxury that lasts a lifetime. Remodels, additions and custom ADUs across Southern California."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, SLIDES.map((s, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setI(k),
    style: {
      flex: 1,
      background: 'none',
      border: 'none',
      padding: '10px 0 0',
      cursor: 'pointer',
      textAlign: 'left',
      color: '#fff',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(255,255,255,.3)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    key: i + '-' + k,
    style: {
      position: 'absolute',
      inset: 0,
      background: '#fff',
      transformOrigin: 'left',
      transform: k === i ? 'scaleX(1)' : 'scaleX(0)',
      transition: k === i ? 'transform 6.5s linear' : 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      marginTop: 12,
      opacity: k === i ? 1 : .55,
      transition: 'opacity .4s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: k === i ? '#fff' : 'inherit',
      marginRight: 6
    }
  }, "0", k + 1), s.room)))))), /*#__PURE__*/React.createElement("a", {
    href: "#about",
    style: {
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
      opacity: .8
    }
  }, "SCROLL", /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 36,
      background: 'linear-gradient(#fff,transparent)'
    }
  })));
}
Object.assign(window, {
  Header,
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v2/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v2/Motion.jsx
try { (() => {
const PW = window.PacificWestDesignSystem_179d0a;
const STK = '../../assets/imagery/stock/';
const RED = 'var(--pw-red)';
const PAD = 'clamp(20px,4vw,72px)';
const scrollSubs = new Set();
let rafOn = false;
function tick() {
  rafOn = false;
  scrollSubs.forEach(f => f());
}
function onScroll() {
  if (!rafOn) {
    rafOn = true;
    requestAnimationFrame(tick);
  }
}
window.addEventListener('scroll', onScroll, {
  passive: true
});
window.addEventListener('resize', onScroll);
function useFrame(fn) {
  React.useEffect(() => {
    scrollSubs.add(fn);
    fn();
    return () => scrollSubs.delete(fn);
  }, []);
}
function Icon({
  name,
  size = 22,
  color = 'currentColor',
  style
}) {
  const u = 'https://unpkg.com/lucide-static@0.460.0/icons/' + name + '.svg';
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      background: color,
      WebkitMask: 'url(' + u + ') center/contain no-repeat',
      mask: 'url(' + u + ') center/contain no-repeat',
      flex: 'none',
      ...style
    }
  });
}
function Arrow({
  size = 18,
  color = RED,
  style
}) {
  return /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: size,
    color: color,
    style: style
  });
}
function Reveal({
  children,
  delay = 0,
  y = 40,
  style,
  as = 'div'
}) {
  const r = React.useRef();
  const [v, setV] = React.useState(false);
  React.useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setV(true);
        io.disconnect();
      }
    }, {
      threshold: .15
    });
    io.observe(r.current);
    return () => io.disconnect();
  }, []);
  const T = as;
  return /*#__PURE__*/React.createElement(T, {
    ref: r,
    style: {
      opacity: v ? 1 : 0,
      transform: v ? 'none' : `translateY(${y}px)`,
      transition: `opacity 1s var(--ease-out) ${delay}ms,transform 1.1s var(--ease-out) ${delay}ms`,
      ...style
    }
  }, children);
}
function Parallax({
  src,
  speed = .18,
  style,
  imgStyle,
  reveal = true
}) {
  const box = React.useRef();
  const img = React.useRef();
  const [v, setV] = React.useState(!reveal);
  useFrame(() => {
    const el = box.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const vh = innerHeight;
    if (r.bottom < 0 || r.top > vh) return;
    const off = (r.top + r.height / 2 - vh / 2) * speed;
    img.current.style.transform = `translate3d(0,${off}px,0) scale(1.18)`;
  });
  React.useEffect(() => {
    if (!reveal) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setV(true);
        io.disconnect();
      }
    }, {
      threshold: .1
    });
    io.observe(box.current);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: box,
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--pw-stone-100)',
      clipPath: v ? 'inset(0 0 0 0)' : 'inset(12% 0 12% 0)',
      transition: 'clip-path 1.4s var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    ref: img,
    src: src,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      willChange: 'transform',
      ...imgStyle
    }
  }));
}
function Title({
  a,
  b,
  c,
  size = 'clamp(40px,5.4vw,92px)',
  align = 'left',
  color = 'var(--pw-ink)',
  style
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
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
    }
  }, a, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontStyle: 'italic',
      fontWeight: 400,
      color: RED,
      letterSpacing: '-0.01em'
    }
  }, b), c ? ' ' + c : '');
}
function Eyebrow({
  children,
  color = 'var(--pw-ink)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: RED
    }
  }), children);
}
Object.assign(window, {
  PW,
  STK,
  RED,
  PAD,
  useFrame,
  Icon,
  Arrow,
  Reveal,
  Parallax,
  Title,
  Eyebrow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v2/Motion.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v2/Sections.jsx
try { (() => {
const sec = extra => ({
  padding: `clamp(80px,12vw,180px) ${PAD}`,
  ...extra
});
function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: sec({
      display: 'grid',
      gridTemplateColumns: 'repeat(12,minmax(0,1fr))',
      gap: '48px 24px',
      alignItems: 'start'
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / span 7',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "About us")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100,
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Title, {
    a: "Building more than homes. Crafting timeless",
    b: "masterpieces."
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200,
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 32,
      marginTop: 56,
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.8,
      color: 'var(--text-secondary)'
    }
  }, "At Pacific West Home Builders, we are redefining luxury construction. With decades of expertise and a passion for perfection, we bring your vision to life by combining artistry, innovation, and superior craftsmanship."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.8,
      color: 'var(--text-secondary)'
    }
  }, "From sophisticated remodels to breathtaking new structures, we specialize in creating extraordinary spaces that reflect your unique style and elevate your living experience.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 300,
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#services",
    style: {
      display: 'inline-flex',
      gap: 12,
      alignItems: 'center',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      borderBottom: '1px solid var(--pw-ink)',
      paddingBottom: 6
    }
  }, "Discover our services", /*#__PURE__*/React.createElement(Arrow, {
    size: 16
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '9 / span 4',
      gridRow: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Parallax, {
    src: STK + 's06.jpg',
    speed: .12,
    style: {
      aspectRatio: '3/4'
    }
  }), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Bathroom Remodel"), /*#__PURE__*/React.createElement("span", null, "Pasadena, CA"))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      gridRow: 2,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      borderTop: '1px solid var(--border-hairline)',
      marginTop: 24
    }
  }, [['pencil-ruler', 'Design', 'Tailored plans as unique as your lifestyle.'], ['file-check-2', 'Permits', 'We handle the city paperwork for you.'], ['hammer', 'Construction', 'Premium materials and meticulous techniques.'], ['key-round', 'Delivery', 'From concept to completion, stress-free.']].map(([ic, t, d], k) => /*#__PURE__*/React.createElement(Reveal, {
    key: t,
    delay: k * 90,
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'flex-start',
      padding: '36px 24px 0 0'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 28,
    color: RED
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 400
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 300,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      marginTop: 6
    }
  }, d))))));
}
const SERVICES = [{
  n: 'Kitchen Remodeling',
  d: 'Transform your kitchen into a masterpiece where style meets practicality.',
  img: 's05.jpg',
  g: 'Remodeling'
}, {
  n: 'Bathroom Remodeling',
  d: 'Indulge in spa-like serenity with elegant upgrades and modern functionality.',
  img: 's19.jpg',
  g: 'Remodeling'
}, {
  n: 'Bedroom Remodeling',
  d: 'Create the perfect sanctuary for rest and relaxation.',
  img: 's15.jpg',
  g: 'Remodeling'
}, {
  n: 'Garage Remodeling',
  d: 'Optimize space and style with custom designs tailored to your needs.',
  img: 's17.jpg',
  g: 'Remodeling'
}, {
  n: 'Room Additions',
  d: 'Bedroom, kitchen, bathroom, laundry and garage additions that maintain your home’s aesthetic.',
  img: 's16.jpg',
  g: 'Additions'
}, {
  n: 'Guest Houses & ADUs',
  d: 'Unlock your property’s potential with custom-built accessory dwelling units (ADUs) and guest houses.',
  img: 's12.jpg',
  g: 'New build'
}, {
  n: 'Landscaping Services',
  d: 'Transform your outdoor space with expert landscaping services.',
  img: 's18.jpg',
  g: 'Outdoor'
}];
function Services() {
  const [h, setH] = React.useState(-1);
  const [m, setM] = React.useState({
    x: .5,
    y: .5
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: sec({
      background: 'var(--pw-stone-50)',
      paddingBottom: 0
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 40,
      flexWrap: 'wrap',
      marginBottom: 72
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "What we do")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100,
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Title, {
    a: "Our",
    b: "services."
  }))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 380,
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--text-secondary)'
    }
  }, "One team from first sketch to final inspection \u2014 design, permits and construction under one roof."))), /*#__PURE__*/React.createElement("div", {
    onMouseLeave: () => setH(-1),
    style: {
      margin: `0 calc(-1 * ${PAD})`,
      borderTop: '1px solid var(--pw-ink)'
    }
  }, SERVICES.map((s, k) => {
    const on = h === k;
    return /*#__PURE__*/React.createElement(Reveal, {
      key: k,
      delay: k * 60,
      y: 24
    }, /*#__PURE__*/React.createElement("a", {
      href: "#contact",
      onMouseEnter: () => setH(k),
      onMouseMove: e => {
        const r = e.currentTarget.getBoundingClientRect();
        setM({
          x: (e.clientX - r.left) / r.width,
          y: (e.clientY - r.top) / r.height
        });
      },
      style: {
        position: 'relative',
        display: 'block',
        overflow: 'hidden',
        height: on ? 'min(62vh,560px)' : 'clamp(96px,9vw,128px)',
        borderBottom: '1px solid ' + (on ? 'transparent' : 'var(--border-hairline)'),
        color: on ? '#fff' : 'var(--pw-ink)',
        transition: 'height .9s var(--ease-inout),color .5s'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        opacity: on ? 1 : 0,
        transition: 'opacity .7s var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: STK + s.img,
      alt: "",
      style: {
        position: 'absolute',
        inset: '-4%',
        width: '108%',
        height: '108%',
        objectFit: 'cover',
        transform: `translate3d(${(m.x - .5) * -24}px,${(m.y - .5) * -16}px,0) scale(${on ? 1 : 1.12})`,
        transition: 'transform 1.4s var(--ease-out)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg,rgba(0,0,0,.25) 0%,rgba(0,0,0,.6) 100%)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        height: '100%',
        padding: `0 ${PAD}`,
        display: 'grid',
        gridTemplateColumns: '60px minmax(0,1fr) minmax(0,1fr) 40px',
        gap: 24,
        alignItems: on ? 'end' : 'center',
        paddingBottom: on ? 'clamp(32px,4vw,56px)' : 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        letterSpacing: '.12em',
        color: on ? '#fff' : 'var(--text-muted)',
        transition: 'color .4s'
      }
    }, String(k + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 300,
        fontSize: on ? 'clamp(36px,4.6vw,80px)' : 'clamp(26px,3.2vw,52px)',
        lineHeight: 1.05,
        letterSpacing: '-0.02em',
        transition: 'font-size .8s var(--ease-inout)'
      }
    }, s.n), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 300,
        fontSize: 15,
        lineHeight: 1.6,
        color: on ? 'rgba(255,255,255,.9)' : 'var(--text-secondary)',
        opacity: h === -1 || on ? 1 : .4,
        transition: 'opacity .4s,color .4s'
      }
    }, s.d), /*#__PURE__*/React.createElement("span", {
      style: {
        justifySelf: 'end',
        transform: on ? 'rotate(45deg)' : 'none',
        transition: 'transform .5s var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement(Arrow, {
      size: 26,
      color: on ? '#fff' : RED
    })))));
  })));
}
function PromiseBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: '110vh',
      minHeight: 640,
      color: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Parallax, {
    src: STK + 's09.jpg',
    speed: .3,
    reveal: false,
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg,rgba(0,0,0,.6),rgba(0,0,0,.1))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: PAD,
      right: PAD,
      top: '50%',
      transform: 'translateY(-50%)',
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "#fff"
  }, "Our promise")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100,
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Title, {
    color: "#fff",
    a: "Excellence beyond",
    b: "expectations."
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '36px 0 0',
      maxWidth: 560,
      fontWeight: 300,
      fontSize: 17,
      lineHeight: 1.75,
      color: 'rgba(255,255,255,.9)'
    }
  }, "When you choose Pacific West Home Builders, you\u2019re not just hiring a contractor\u2014you\u2019re partnering with a team dedicated to turning your dreams into reality."))));
}
const APART = [['gem', 'Luxury-Centric Designs', 'We blend functionality and aesthetics to create timeless spaces.'], ['leaf', 'Sustainability', 'We prioritize energy-efficient solutions and environmentally friendly practices.'], ['messages-square', 'Transparent Communication', 'We keep you informed every step of the way.'], ['hammer', 'Unmatched Craftsmanship', 'Our team uses only premium materials and meticulous techniques.'], ['clipboard-check', 'Seamless Project Management', 'From concept to completion, we make the process stress-free.']];
function Apart() {
  return /*#__PURE__*/React.createElement("section", {
    style: sec()
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))',
      gap: '40px 80px',
      marginBottom: 88
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Why homeowners choose us")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100,
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Title, {
    a: "What sets us",
    b: "apart."
  }))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200,
    style: {
      alignSelf: 'end'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.75,
      color: 'var(--text-secondary)',
      maxWidth: 480
    }
  }, "We understand that your home is more than just a structure\u2014it\u2019s where life happens. That\u2019s why we go above and beyond to ensure every detail is perfect."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, APART.map(([ic, t, d], k) => /*#__PURE__*/React.createElement(Reveal, {
    key: t,
    delay: k * 90,
    style: {
      padding: '44px 28px 12px 0',
      borderRight: k < 4 ? '1px solid var(--border-hairline)' : 'none',
      paddingLeft: k ? 28 : 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 34,
    color: RED
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 400,
      margin: '32px 0 12px'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 1.7,
      color: 'var(--text-secondary)'
    }
  }, d)))));
}
const STEPS = [['Let’s Talk', 'Schedule a consultation and share your vision with us.', 's01.jpg'], ['Tailored Designs', 'We’ll create a plan that’s as unique as your lifestyle.', 's13.jpg'], ['Flawless Execution', 'Watch your dream home take shape with precision and care.', 's08.jpg']];
function Process() {
  const [a, setA] = React.useState(0);
  const refs = [React.useRef(), React.useRef(), React.useRef()];
  useFrame(() => {
    let best = 0;
    refs.forEach((r, k) => {
      if (r.current && r.current.getBoundingClientRect().top < innerHeight * .55) best = k;
    });
    setA(best);
  });
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pw-black)',
      color: '#fff',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,460px),1fr))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pw-proc-img",
    style: {
      position: 'sticky',
      top: 0,
      height: '100vh',
      overflow: 'hidden'
    }
  }, STEPS.map((s, k) => /*#__PURE__*/React.createElement("img", {
    key: k,
    src: STK + s[2],
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: a === k ? 1 : 0,
      transform: a === k ? 'scale(1)' : 'scale(1.08)',
      transition: 'opacity 1s var(--ease-out),transform 1.6s var(--ease-out)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `clamp(80px,12vw,160px) ${PAD}`,
      background: 'var(--pw-black)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "#fff"
  }, "Discover the Pacific West difference")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100,
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Title, {
    color: "#fff",
    a: "Step into your",
    b: "dream home.",
    size: "clamp(36px,4.4vw,76px)"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '32px 0 0',
      maxWidth: 460,
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.75,
      color: 'rgba(255,255,255,.72)'
    }
  }, "Your journey toward an exceptional living space begins here. Whether you\u2019re planning a simple remodel or a complete new build, our team is ready to turn your ideas into stunning realities."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '14vh'
    }
  }, STEPS.map((s, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    ref: refs[k],
    style: {
      minHeight: '46vh',
      borderTop: '1px solid rgba(255,255,255,' + (a === k ? '.9' : '.18') + ')',
      paddingTop: 32,
      transition: 'border-color .6s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontStyle: 'italic',
      fontSize: 28,
      color: a === k ? '#E5524F' : 'rgba(255,255,255,.4)',
      transition: 'color .6s'
    }
  }, "0", k + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 300,
      fontSize: 'clamp(30px,3vw,48px)',
      margin: '14px 0 16px',
      opacity: a === k ? 1 : .4,
      transition: 'opacity .6s'
    }
  }, s[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.7,
      color: 'rgba(255,255,255,.72)',
      maxWidth: 380,
      opacity: a === k ? 1 : .4,
      transition: 'opacity .6s'
    }
  }, s[1]))))));
}
Object.assign(window, {
  About,
  Services,
  PromiseBand,
  Apart,
  Process
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v2/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v2/Sections2.jsx
try { (() => {
const WORK = [['s20.jpg', 'Modern Residence', 'New Construction · Encino', 58], ['s02.jpg', 'Powder Room', 'Bathroom Remodel · Pasadena', 26], ['s05.jpg', 'Open Kitchen', 'Kitchen Remodel · Woodland Hills', 40], ['s07.jpg', 'Black Kitchen', 'Kitchen Addition · Sherman Oaks', 26], ['s21.jpg', 'Outdoor Lounge', 'Landscaping · Calabasas', 52], ['s03.jpg', 'Primary Bath', 'Bathroom Remodel · Los Angeles', 42], ['s12.jpg', 'Guest House', 'ADU · Studio City', 52]];
function Portfolio() {
  const wrap = React.useRef();
  const track = React.useRef();
  const [prog, setProg] = React.useState(0);
  useFrame(() => {
    const w = wrap.current,
      t = track.current;
    if (!w || !t) return;
    const r = w.getBoundingClientRect();
    const total = w.offsetHeight - innerHeight;
    const p = Math.min(1, Math.max(0, -r.top / total));
    const dist = t.scrollWidth - innerWidth;
    t.style.transform = `translate3d(${-p * dist}px,0,0)`;
    setProg(p);
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "portfolio",
    ref: wrap,
    style: {
      height: '340vh',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `0 ${PAD}`,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 32,
      flexWrap: 'wrap',
      marginBottom: '5vh'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Our portfolio"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Title, {
    a: "Inspired by you,",
    b: "built by us.",
    size: "clamp(34px,4vw,68px)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      fontSize: 12,
      letterSpacing: '.14em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "01"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 160,
      height: 1,
      background: 'var(--border-hairline)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: prog * 100 + '%',
      background: RED
    }
  })), /*#__PURE__*/React.createElement("span", null, "0", WORK.length))), /*#__PURE__*/React.createElement("div", {
    ref: track,
    style: {
      display: 'flex',
      gap: '1.6vw',
      padding: `0 ${PAD}`,
      willChange: 'transform',
      alignItems: 'flex-end'
    }
  }, WORK.map(([img, t, m, w], k) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#contact",
    style: {
      flex: `0 0 ${w}vw`,
      color: 'var(--pw-ink)'
    },
    onMouseEnter: e => e.currentTarget.querySelector('img').style.transform = 'scale(1.06)',
    onMouseLeave: e => e.currentTarget.querySelector('img').style.transform = 'scale(1)'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: w < 30 ? '58vh' : '50vh',
      overflow: 'hidden',
      background: 'var(--pw-stone-100)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: STK + img,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 1.2s var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 400
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 300,
      letterSpacing: '.08em',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, m)), /*#__PURE__*/React.createElement(Arrow, null)))))));
}
const REVIEWS = [['Pacific West Home Builders did an outstanding job on my new construction project. Shai was the guy on-site, and his professionalism and attention to detail were top-notch.', 'Nancy A.', 'New Construction'], ['Pacific West Home Builders made my ADU project so much easier than I expected. There were a few challenges along the way, but they handled everything smoothly and always found the right solutions.', 'Barbara J.', 'ADU'], ['They built the foundation for my ADU, and from day one, they made the whole process feel easy and stress-free.', 'Juan I.', 'ADU Foundation'], ['They did an amazing job on my kitchen remodel! The craftsmanship and attention to detail were top-notch, and the final result exceeded my expectations.', 'John M.', 'Kitchen Remodel']];
function Reviews() {
  const [i, setI] = React.useState(0);
  const r = REVIEWS[i];
  React.useEffect(() => {
    const t = setTimeout(() => setI((i + 1) % REVIEWS.length), 7000);
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
  return /*#__PURE__*/React.createElement("section", {
    id: "reviews",
    style: sec({
      display: 'flex',
      flexWrap: 'wrap',
      gap: '48px 80px',
      alignItems: 'flex-start'
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 300px'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Reviews")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100,
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Title, {
    a: "Words from our",
    b: "clients.",
    size: "clamp(34px,3.6vw,60px)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: btn,
    onClick: () => nav(-1)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 18,
    color: RED
  })), /*#__PURE__*/React.createElement("button", {
    style: btn,
    onClick: () => nav(1)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 18,
    color: RED
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '2 1 520px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      animation: 'pwFade .9s var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      marginBottom: 28
    }
  }, [0, 1, 2, 3, 4].map(s => /*#__PURE__*/React.createElement(Icon, {
    key: s,
    name: "star",
    size: 16,
    color: RED
  }))), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 'clamp(24px,2.4vw,40px)',
      lineHeight: 1.35,
      letterSpacing: '-0.01em',
      textWrap: 'pretty'
    }
  }, "\u201C", r[0], "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      fontSize: 13,
      letterSpacing: '.14em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: RED
    }
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 500
    }
  }, r[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300,
      color: 'var(--text-muted)'
    }
  }, r[2]))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 56
    }
  }, REVIEWS.map((_, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    onClick: () => setI(k),
    style: {
      cursor: 'pointer',
      height: 2,
      flex: 1,
      background: k === i ? 'var(--pw-ink)' : 'var(--border-hairline)',
      transition: 'background .4s'
    }
  })))));
}
const SERVICE_OPTS = ['Kitchen Remodeling', 'Bathroom Remodeling', 'Bedroom Remodeling', 'Garage Remodeling', 'Room Addition', 'Guest House & ADU', 'Landscaping Services', 'New Structure Construction'];
function Contact({
  formRef
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,480px),1fr))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '90vh',
      color: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Parallax, {
    src: STK + 's18.jpg',
    speed: .2,
    reveal: false,
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,.45)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: PAD,
      right: PAD,
      bottom: PAD
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "#fff"
  }, "Your vision, our expertise"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Title, {
    color: "#fff",
    a: "Let\u2019s build something",
    b: "extraordinary.",
    size: "clamp(36px,4.2vw,72px)"
  })), /*#__PURE__*/React.createElement("a", {
    href: "tel:8883984499",
    style: {
      display: 'inline-flex',
      gap: 14,
      alignItems: 'center',
      marginTop: 40,
      color: '#fff',
      fontSize: 22,
      fontWeight: 300
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 20,
    color: "#fff"
  }), "(888) 398-4499"))), /*#__PURE__*/React.createElement("div", {
    ref: formRef,
    style: {
      padding: `clamp(56px,7vw,112px) ${PAD}`,
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Get a free quote"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 44px',
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--text-secondary)',
      maxWidth: 440
    }
  }, "Give us more information about your project, and a specialist will contact you to discuss it."), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 0'
    }
  }, /*#__PURE__*/React.createElement(Title, {
    a: "Thank",
    b: "you.",
    size: "56px"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 300,
      color: 'var(--text-secondary)',
      marginTop: 20
    }
  }, "A specialist will contact you shortly.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(PW.TextField, {
    label: "Full name",
    placeholder: "Jane Doe",
    required: true
  }), /*#__PURE__*/React.createElement(PW.TextField, {
    label: "Phone",
    type: "tel",
    placeholder: "(000) 000-0000",
    required: true
  }), /*#__PURE__*/React.createElement(PW.TextField, {
    label: "Email",
    type: "email",
    placeholder: "you@email.com",
    style: {
      gridColumn: '1/-1'
    }
  }), /*#__PURE__*/React.createElement(PW.SelectField, {
    label: "Service",
    options: SERVICE_OPTS,
    style: {
      gridColumn: '1/-1'
    }
  }), /*#__PURE__*/React.createElement(PW.TextField, {
    label: "Project details",
    multiline: true,
    rows: 3,
    style: {
      gridColumn: '1/-1'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1/-1',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 20,
      flexWrap: 'wrap',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(PW.Checkbox, {
    defaultChecked: true,
    label: "I agree to be contacted about my project."
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      padding: '18px 30px',
      background: 'var(--pw-ink)',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, "Send request ", /*#__PURE__*/React.createElement(Arrow, {
    size: 16,
    color: "#fff"
  }))))));
}
function Footer() {
  const col = (t, items) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      marginBottom: 22,
      color: 'var(--text-muted)'
    }
  }, t), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#services",
    style: {
      display: 'block',
      fontSize: 14,
      fontWeight: 300,
      marginBottom: 12
    }
  }, i)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: `clamp(72px,8vw,120px) ${PAD} 32px`,
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PW.Logo, {
    basePath: "../../",
    height: 64
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 1.7,
      color: 'var(--text-secondary)',
      marginTop: 24,
      maxWidth: 280
    }
  }, "Pacific West Home Builders is where craftsmanship meets creativity.")), col('Remodeling', ['Bedroom Remodeling', 'Kitchen Remodeling', 'Bathroom Remodeling', 'Garage Remodeling']), col('Additions', ['Bedroom Addition', 'Kitchen Addition', 'Bathroom Additions', 'Laundry Room Addition', 'Garage Addition']), col('More', ['Guest House & ADU', 'Landscaping Services']), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      marginBottom: 22,
      color: 'var(--text-muted)'
    }
  }, "Visit"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 300,
      lineHeight: 1.7
    }
  }, "16000 Ventura Blvd Ste 900", /*#__PURE__*/React.createElement("br", null), "Encino, CA 91436"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 300,
      lineHeight: 1.7,
      marginTop: 14
    }
  }, "215 N Marengo Ave Ste 2091", /*#__PURE__*/React.createElement("br", null), "Pasadena, CA 91101"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 22
    }
  }, ['instagram', 'facebook', 'map-pin'].map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 18,
    color: RED
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16,
      marginTop: 80,
      paddingTop: 24,
      borderTop: '1px solid var(--border-hairline)',
      fontSize: 12,
      fontWeight: 300,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Pacific West Home Builders \xA9 2026 \xB7 License #1111181"), /*#__PURE__*/React.createElement("span", null, "(888) 398-4499 \xB7 info@pwhbuilders.com")));
}
Object.assign(window, {
  Portfolio,
  Reviews,
  Contact,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v2/Sections2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v3/HeroV3.jsx
try { (() => {
const SLIDES = [{
  src: STK + 's14.jpg',
  room: 'Kitchen',
  pos: 'center 55%'
}, {
  src: STK + 's04.jpg',
  room: 'Bathroom',
  pos: 'center 60%'
}, {
  src: STK + 's10.jpg',
  room: 'Living Room',
  pos: 'center 60%'
}, {
  src: STK + 's20.jpg',
  room: 'Exterior',
  pos: 'center 55%'
}];
function Header({
  onQuote
}) {
  const [solid, setSolid] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  useFrame(() => setSolid(scrollY > innerHeight * .85));
  const fg = solid ? 'var(--pw-ink)' : '#fff';
  const links = ['About', 'Services', 'Portfolio', 'Reviews', 'Contact'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 40,
      background: solid ? 'rgba(255,255,255,.96)' : 'transparent',
      backdropFilter: solid ? 'blur(10px)' : 'none',
      borderBottom: '1px solid ' + (solid ? 'var(--border-hairline)' : 'rgba(255,255,255,.18)'),
      transition: 'background .5s var(--ease-out),border-color .5s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `0 ${PAD}`,
      height: solid ? 76 : 96,
      display: 'flex',
      alignItems: 'center',
      gap: 40,
      transition: 'height .5s var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top"
  }, /*#__PURE__*/React.createElement(PW.Logo, {
    tone: solid ? 'dark' : 'light',
    basePath: "../../",
    height: solid ? 44 : 56,
    style: {
      transition: 'height .5s'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    className: "pw-nav",
    style: {
      display: 'flex',
      gap: 36,
      marginLeft: 'auto'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + l.toLowerCase(),
    style: {
      color: fg,
      fontSize: 13,
      fontWeight: 400,
      letterSpacing: '.08em',
      transition: 'color .4s'
    }
  }, l))), /*#__PURE__*/React.createElement("a", {
    className: "pw-phone",
    href: "tel:8883984499",
    style: {
      color: fg,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 13,
      letterSpacing: '.06em',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 15,
    color: RED
  }), "(888) 398-4499"), /*#__PURE__*/React.createElement("button", {
    onClick: onQuote,
    style: {
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
    }
  }, "Free Quote ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  }))));
}
function Hero() {
  const [i, setI] = React.useState(0);
  const [m, setM] = React.useState({
    x: .5,
    y: .5
  });
  const t = React.useRef();
  React.useEffect(() => {
    t.current = setTimeout(() => setI((i + 1) % SLIDES.length), 6500);
    return () => clearTimeout(t.current);
  }, [i]);
  const [sy, setSy] = React.useState(0);
  useFrame(() => setSy(Math.min(scrollY, innerHeight)));
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    onMouseMove: e => setM({
      x: e.clientX / innerWidth,
      y: e.clientY / innerHeight
    }),
    style: {
      position: 'relative',
      height: '100vh',
      minHeight: 640,
      overflow: 'hidden',
      background: '#111',
      color: '#fff'
    }
  }, SLIDES.map((s, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      position: 'absolute',
      inset: '-3%',
      opacity: k === i ? 1 : 0,
      transition: 'opacity 1.6s var(--ease-inout)',
      transform: `translate3d(${(m.x - .5) * -28}px,${(m.y - .5) * -18 + sy * .35}px,0)`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: s.src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: s.pos,
      transform: k === i ? 'scale(1)' : 'scale(1.1)',
      transition: k === i ? 'transform 8s linear' : 'transform 1.6s'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(0,0,0,.35) 0%,rgba(0,0,0,.1) 35%,rgba(0,0,0,.55) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: PAD,
      right: PAD,
      bottom: 'clamp(48px,9vh,110px)',
      display: 'flex',
      alignItems: 'flex-end',
      gap: 40,
      flexWrap: 'wrap',
      opacity: Math.max(0, 1 - sy / (innerHeight || 1) * 1.4),
      transform: `translateY(${sy * -.15}px)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 600px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '.3em',
      textTransform: 'uppercase',
      marginBottom: 28,
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: '#fff'
    }
  }), "Pacific West Home Builders \xB7 Los Angeles"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontWeight: 200,
      fontSize: 'clamp(48px,7.4vw,136px)',
      lineHeight: .96,
      letterSpacing: '-0.03em'
    }
  }, "Your vision,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontStyle: 'italic',
      fontWeight: 400
    }
  }, "our masterpiece."))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 1 380px',
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 17,
      lineHeight: 1.65,
      color: 'rgba(255,255,255,.88)'
    }
  }, "Building luxury that lasts a lifetime. Remodels, additions and custom ADUs across Southern California."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, SLIDES.map((s, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setI(k),
    style: {
      flex: 1,
      background: 'none',
      border: 'none',
      padding: '10px 0 0',
      cursor: 'pointer',
      textAlign: 'left',
      color: '#fff',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(255,255,255,.3)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    key: i + '-' + k,
    style: {
      position: 'absolute',
      inset: 0,
      background: '#fff',
      transformOrigin: 'left',
      transform: k === i ? 'scaleX(1)' : 'scaleX(0)',
      transition: k === i ? 'transform 6.5s linear' : 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      marginTop: 12,
      opacity: k === i ? 1 : .55,
      transition: 'opacity .4s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: k === i ? '#fff' : 'inherit',
      marginRight: 6
    }
  }, "0", k + 1), s.room)))))), /*#__PURE__*/React.createElement("a", {
    href: "#about",
    style: {
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
      opacity: .8
    }
  }, "SCROLL", /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 36,
      background: 'linear-gradient(#fff,transparent)'
    }
  })));
}
Object.assign(window, {
  Header,
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v3/HeroV3.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v3/MotionV3.jsx
try { (() => {
const PW = window.PacificWestDesignSystem_179d0a;
const STK = '../../assets/imagery/stock/';
const RED = 'var(--pw-red)';
const PAD = 'clamp(20px,4vw,72px)';
const scrollSubs = new Set();
let rafOn = false;
function tick() {
  rafOn = false;
  scrollSubs.forEach(f => f());
}
function onScroll() {
  if (!rafOn) {
    rafOn = true;
    requestAnimationFrame(tick);
  }
}
window.addEventListener('scroll', onScroll, {
  passive: true
});
window.addEventListener('resize', onScroll);
function useFrame(fn) {
  React.useEffect(() => {
    scrollSubs.add(fn);
    fn();
    return () => scrollSubs.delete(fn);
  }, []);
}
function Icon({
  name,
  size = 22,
  color = 'currentColor',
  style
}) {
  const u = 'https://unpkg.com/lucide-static@0.460.0/icons/' + name + '.svg';
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      background: color,
      WebkitMask: 'url(' + u + ') center/contain no-repeat',
      mask: 'url(' + u + ') center/contain no-repeat',
      flex: 'none',
      ...style
    }
  });
}
function Arrow({
  size = 18,
  color = RED,
  style
}) {
  return /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: size,
    color: color,
    style: style
  });
}
function Reveal({
  children,
  delay = 0,
  y = 40,
  style,
  as = 'div'
}) {
  const r = React.useRef();
  const [v, setV] = React.useState(false);
  React.useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setV(true);
        io.disconnect();
      }
    }, {
      threshold: .15
    });
    io.observe(r.current);
    return () => io.disconnect();
  }, []);
  const T = as;
  return /*#__PURE__*/React.createElement(T, {
    ref: r,
    style: {
      opacity: v ? 1 : 0,
      transform: v ? 'none' : `translateY(${y}px)`,
      transition: `opacity 1s var(--ease-out) ${delay}ms,transform 1.1s var(--ease-out) ${delay}ms`,
      ...style
    }
  }, children);
}
function Parallax({
  src,
  speed = .18,
  style,
  imgStyle,
  reveal = true
}) {
  const box = React.useRef();
  const img = React.useRef();
  const [v, setV] = React.useState(!reveal);
  useFrame(() => {
    const el = box.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const vh = innerHeight;
    if (r.bottom < 0 || r.top > vh) return;
    const off = (r.top + r.height / 2 - vh / 2) * speed;
    img.current.style.transform = `translate3d(0,${off}px,0) scale(1.18)`;
  });
  React.useEffect(() => {
    if (!reveal) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setV(true);
        io.disconnect();
      }
    }, {
      threshold: .1
    });
    io.observe(box.current);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: box,
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--pw-stone-100)',
      clipPath: v ? 'inset(0 0 0 0)' : 'inset(12% 0 12% 0)',
      transition: 'clip-path 1.4s var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    ref: img,
    src: src,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      willChange: 'transform',
      ...imgStyle
    }
  }));
}
function Title({
  a,
  b,
  c,
  size = 'clamp(40px,5.4vw,92px)',
  align = 'left',
  color = 'var(--pw-ink)',
  style
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
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
    }
  }, a, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontStyle: 'italic',
      fontWeight: 400,
      color: RED,
      letterSpacing: '-0.01em'
    }
  }, b), c ? ' ' + c : '');
}
function Eyebrow({
  children,
  color = 'var(--pw-ink)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: RED
    }
  }), children);
}
Object.assign(window, {
  PW,
  STK,
  RED,
  PAD,
  useFrame,
  Icon,
  Arrow,
  Reveal,
  Parallax,
  Title,
  Eyebrow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v3/MotionV3.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v3/Sections2V3.jsx
try { (() => {
const WORK = [['s20.jpg', 'Modern Residence', 'New Construction · Encino', 58], ['s02.jpg', 'Powder Room', 'Bathroom Remodel · Pasadena', 26], ['s05.jpg', 'Open Kitchen', 'Kitchen Remodel · Woodland Hills', 40], ['s07.jpg', 'Black Kitchen', 'Kitchen Addition · Sherman Oaks', 26], ['s21.jpg', 'Outdoor Lounge', 'Landscaping · Calabasas', 52], ['s03.jpg', 'Primary Bath', 'Bathroom Remodel · Los Angeles', 42], ['s12.jpg', 'Guest House', 'ADU · Studio City', 52]];
function Portfolio() {
  const wrap = React.useRef();
  const track = React.useRef();
  const [prog, setProg] = React.useState(0);
  useFrame(() => {
    const w = wrap.current,
      t = track.current;
    if (!w || !t) return;
    const r = w.getBoundingClientRect();
    const total = w.offsetHeight - innerHeight;
    const p = Math.min(1, Math.max(0, -r.top / total));
    const dist = t.scrollWidth - innerWidth;
    t.style.transform = `translate3d(${-p * dist}px,0,0)`;
    setProg(p);
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "portfolio",
    ref: wrap,
    style: {
      height: '340vh',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `0 ${PAD}`,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 32,
      flexWrap: 'wrap',
      marginBottom: '5vh'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Our portfolio"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Title, {
    a: "Inspired by you,",
    b: "built by us.",
    size: "clamp(34px,4vw,68px)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      fontSize: 12,
      letterSpacing: '.14em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "01"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 160,
      height: 1,
      background: 'var(--border-hairline)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: prog * 100 + '%',
      background: RED
    }
  })), /*#__PURE__*/React.createElement("span", null, "0", WORK.length))), /*#__PURE__*/React.createElement("div", {
    ref: track,
    style: {
      display: 'flex',
      gap: '1.6vw',
      padding: `0 ${PAD}`,
      willChange: 'transform',
      alignItems: 'flex-end'
    }
  }, WORK.map(([img, t, m, w], k) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#contact",
    style: {
      flex: `0 0 ${w}vw`,
      color: 'var(--pw-ink)'
    },
    onMouseEnter: e => e.currentTarget.querySelector('img').style.transform = 'scale(1.06)',
    onMouseLeave: e => e.currentTarget.querySelector('img').style.transform = 'scale(1)'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: w < 30 ? '58vh' : '50vh',
      overflow: 'hidden',
      background: 'var(--pw-stone-100)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: STK + img,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 1.2s var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 400
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 300,
      letterSpacing: '.08em',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, m)), /*#__PURE__*/React.createElement(Arrow, null)))))));
}
const REVIEWS = [['Pacific West Home Builders did an outstanding job on my new construction project. Shai was the guy on-site, and his professionalism and attention to detail were top-notch.', 'Nancy A.', 'New Construction'], ['Pacific West Home Builders made my ADU project so much easier than I expected. There were a few challenges along the way, but they handled everything smoothly and always found the right solutions.', 'Barbara J.', 'ADU'], ['They built the foundation for my ADU, and from day one, they made the whole process feel easy and stress-free.', 'Juan I.', 'ADU Foundation'], ['They did an amazing job on my kitchen remodel! The craftsmanship and attention to detail were top-notch, and the final result exceeded my expectations.', 'John M.', 'Kitchen Remodel']];
function Reviews() {
  const [i, setI] = React.useState(0);
  const r = REVIEWS[i];
  React.useEffect(() => {
    const t = setTimeout(() => setI((i + 1) % REVIEWS.length), 7000);
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
  return /*#__PURE__*/React.createElement("section", {
    id: "reviews",
    style: sec({
      display: 'flex',
      flexWrap: 'wrap',
      gap: '48px 80px',
      alignItems: 'flex-start'
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 300px'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Reviews")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100,
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Title, {
    a: "Words from our",
    b: "clients.",
    size: "clamp(34px,3.6vw,60px)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: btn,
    onClick: () => nav(-1)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 18,
    color: RED
  })), /*#__PURE__*/React.createElement("button", {
    style: btn,
    onClick: () => nav(1)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 18,
    color: RED
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '2 1 520px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      animation: 'pwFade .9s var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      marginBottom: 28
    }
  }, [0, 1, 2, 3, 4].map(s => /*#__PURE__*/React.createElement(Icon, {
    key: s,
    name: "star",
    size: 16,
    color: RED
  }))), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 'clamp(24px,2.4vw,40px)',
      lineHeight: 1.35,
      letterSpacing: '-0.01em',
      textWrap: 'pretty'
    }
  }, "\u201C", r[0], "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      fontSize: 13,
      letterSpacing: '.14em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: RED
    }
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 500
    }
  }, r[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300,
      color: 'var(--text-muted)'
    }
  }, r[2]))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 56
    }
  }, REVIEWS.map((_, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    onClick: () => setI(k),
    style: {
      cursor: 'pointer',
      height: 2,
      flex: 1,
      background: k === i ? 'var(--pw-ink)' : 'var(--border-hairline)',
      transition: 'background .4s'
    }
  })))));
}
const SERVICE_OPTS = ['Kitchen Remodeling', 'Bathroom Remodeling', 'Bedroom Remodeling', 'Garage Remodeling', 'Room Addition', 'Guest House & ADU', 'Landscaping Services', 'New Structure Construction'];
function Contact({
  formRef
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,480px),1fr))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '90vh',
      color: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Parallax, {
    src: STK + 's18.jpg',
    speed: .2,
    reveal: false,
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,.45)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: PAD,
      right: PAD,
      bottom: PAD
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "#fff"
  }, "Your vision, our expertise"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Title, {
    color: "#fff",
    a: "Let\u2019s build something",
    b: "extraordinary.",
    size: "clamp(36px,4.2vw,72px)"
  })), /*#__PURE__*/React.createElement("a", {
    href: "tel:8883984499",
    style: {
      display: 'inline-flex',
      gap: 14,
      alignItems: 'center',
      marginTop: 40,
      color: '#fff',
      fontSize: 22,
      fontWeight: 300
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 20,
    color: "#fff"
  }), "(888) 398-4499"))), /*#__PURE__*/React.createElement("div", {
    ref: formRef,
    style: {
      padding: `clamp(56px,7vw,112px) ${PAD}`,
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Get a free quote"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 44px',
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--text-secondary)',
      maxWidth: 440
    }
  }, "Give us more information about your project, and a specialist will contact you to discuss it."), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 0'
    }
  }, /*#__PURE__*/React.createElement(Title, {
    a: "Thank",
    b: "you.",
    size: "56px"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 300,
      color: 'var(--text-secondary)',
      marginTop: 20
    }
  }, "A specialist will contact you shortly.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(PW.TextField, {
    label: "Full name",
    placeholder: "Jane Doe",
    required: true
  }), /*#__PURE__*/React.createElement(PW.TextField, {
    label: "Phone",
    type: "tel",
    placeholder: "(000) 000-0000",
    required: true
  }), /*#__PURE__*/React.createElement(PW.TextField, {
    label: "Email",
    type: "email",
    placeholder: "you@email.com",
    style: {
      gridColumn: '1/-1'
    }
  }), /*#__PURE__*/React.createElement(PW.SelectField, {
    label: "Service",
    options: SERVICE_OPTS,
    style: {
      gridColumn: '1/-1'
    }
  }), /*#__PURE__*/React.createElement(PW.TextField, {
    label: "Project details",
    multiline: true,
    rows: 3,
    style: {
      gridColumn: '1/-1'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1/-1',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 20,
      flexWrap: 'wrap',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(PW.Checkbox, {
    defaultChecked: true,
    label: "I agree to be contacted about my project."
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      padding: '18px 30px',
      background: 'var(--pw-ink)',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, "Send request ", /*#__PURE__*/React.createElement(Arrow, {
    size: 16,
    color: "#fff"
  }))))));
}
function Footer() {
  const col = (t, items) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      marginBottom: 22,
      color: 'var(--text-muted)'
    }
  }, t), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#services",
    style: {
      display: 'block',
      fontSize: 14,
      fontWeight: 300,
      marginBottom: 12
    }
  }, i)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: `clamp(72px,8vw,120px) ${PAD} 32px`,
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PW.Logo, {
    basePath: "../../",
    height: 64
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 1.7,
      color: 'var(--text-secondary)',
      marginTop: 24,
      maxWidth: 280
    }
  }, "Pacific West Home Builders is where craftsmanship meets creativity.")), col('Remodeling', ['Bedroom Remodeling', 'Kitchen Remodeling', 'Bathroom Remodeling', 'Garage Remodeling']), col('Additions', ['Bedroom Addition', 'Kitchen Addition', 'Bathroom Additions', 'Laundry Room Addition', 'Garage Addition']), col('More', ['Guest House & ADU', 'Landscaping Services']), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      marginBottom: 22,
      color: 'var(--text-muted)'
    }
  }, "Visit"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 300,
      lineHeight: 1.7
    }
  }, "16000 Ventura Blvd Ste 900", /*#__PURE__*/React.createElement("br", null), "Encino, CA 91436"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 300,
      lineHeight: 1.7,
      marginTop: 14
    }
  }, "215 N Marengo Ave Ste 2091", /*#__PURE__*/React.createElement("br", null), "Pasadena, CA 91101"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 22
    }
  }, ['instagram', 'facebook', 'map-pin'].map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 18,
    color: RED
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16,
      marginTop: 80,
      paddingTop: 24,
      borderTop: '1px solid var(--border-hairline)',
      fontSize: 12,
      fontWeight: 300,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Pacific West Home Builders \xA9 2026 \xB7 License #1111181"), /*#__PURE__*/React.createElement("span", null, "(888) 398-4499 \xB7 info@pwhbuilders.com")));
}
Object.assign(window, {
  Portfolio,
  Reviews,
  Contact,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v3/Sections2V3.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v3/SectionsV3.jsx
try { (() => {
const sec = extra => ({
  padding: `clamp(80px,12vw,180px) ${PAD}`,
  ...extra
});
function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: sec({
      display: 'grid',
      gridTemplateColumns: 'repeat(12,minmax(0,1fr))',
      gap: '48px 24px',
      alignItems: 'start'
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / span 7',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "About us")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100,
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Title, {
    a: "Building more than homes. Crafting timeless",
    b: "masterpieces."
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200,
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 32,
      marginTop: 56,
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.8,
      color: 'var(--text-secondary)'
    }
  }, "At Pacific West Home Builders, we are redefining luxury construction. With decades of expertise and a passion for perfection, we bring your vision to life by combining artistry, innovation, and superior craftsmanship."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.8,
      color: 'var(--text-secondary)'
    }
  }, "From sophisticated remodels to breathtaking new structures, we specialize in creating extraordinary spaces that reflect your unique style and elevate your living experience.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 300,
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#services",
    style: {
      display: 'inline-flex',
      gap: 12,
      alignItems: 'center',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      borderBottom: '1px solid var(--pw-ink)',
      paddingBottom: 6
    }
  }, "Discover our services", /*#__PURE__*/React.createElement(Arrow, {
    size: 16
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '9 / span 4',
      gridRow: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Parallax, {
    src: STK + 's06.jpg',
    speed: .12,
    style: {
      aspectRatio: '3/4'
    }
  }), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Bathroom Remodel"), /*#__PURE__*/React.createElement("span", null, "Pasadena, CA"))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      gridRow: 2,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      borderTop: '1px solid var(--border-hairline)',
      marginTop: 24
    }
  }, [['pencil-ruler', 'Design', 'Tailored plans as unique as your lifestyle.'], ['file-check-2', 'Permits', 'We handle the city paperwork for you.'], ['hammer', 'Construction', 'Premium materials and meticulous techniques.'], ['key-round', 'Delivery', 'From concept to completion, stress-free.']].map(([ic, t, d], k) => /*#__PURE__*/React.createElement(Reveal, {
    key: t,
    delay: k * 90,
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'flex-start',
      padding: '36px 24px 0 0'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 28,
    color: RED
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 400
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 300,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      marginTop: 6
    }
  }, d))))));
}
const SERVICES = [{
  n: 'Kitchen Remodeling',
  d: 'Transform your kitchen into a masterpiece where style meets practicality.',
  img: 's05.jpg',
  g: 'Remodeling'
}, {
  n: 'Bathroom Remodeling',
  d: 'Indulge in spa-like serenity with elegant upgrades and modern functionality.',
  img: 's19.jpg',
  g: 'Remodeling'
}, {
  n: 'Bedroom Remodeling',
  d: 'Create the perfect sanctuary for rest and relaxation.',
  img: 's15.jpg',
  g: 'Remodeling'
}, {
  n: 'Garage Remodeling',
  d: 'Optimize space and style with custom designs tailored to your needs.',
  img: 's17.jpg',
  g: 'Remodeling'
}, {
  n: 'Room Additions',
  d: 'Bedroom, kitchen, bathroom, laundry and garage additions that maintain your home’s aesthetic.',
  img: 's16.jpg',
  g: 'Additions'
}, {
  n: 'Guest Houses & ADUs',
  d: 'Unlock your property’s potential with custom-built accessory dwelling units (ADUs) and guest houses.',
  img: 's12.jpg',
  g: 'New build'
}, {
  n: 'Landscaping Services',
  d: 'Transform your outdoor space with expert landscaping services.',
  img: 's18.jpg',
  g: 'Outdoor'
}];
function Services() {
  const [h, setH] = React.useState(-1);
  const [m, setM] = React.useState({
    x: .5,
    y: .5
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: sec({
      background: 'var(--pw-stone-50)',
      paddingBottom: 0
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 40,
      flexWrap: 'wrap',
      marginBottom: 72
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "What we do")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100,
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Title, {
    a: "Our",
    b: "services."
  }))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 380,
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--text-secondary)'
    }
  }, "One team from first sketch to final inspection \u2014 design, permits and construction under one roof."))), /*#__PURE__*/React.createElement("div", {
    onMouseLeave: () => setH(-1),
    style: {
      margin: `0 calc(-1 * ${PAD})`,
      borderTop: '1px solid var(--pw-ink)'
    }
  }, SERVICES.map((s, k) => {
    const on = h === k;
    return /*#__PURE__*/React.createElement(Reveal, {
      key: k,
      delay: k * 60,
      y: 24
    }, /*#__PURE__*/React.createElement("a", {
      href: "#contact",
      onMouseEnter: () => setH(k),
      onMouseMove: e => {
        const r = e.currentTarget.getBoundingClientRect();
        setM({
          x: (e.clientX - r.left) / r.width,
          y: (e.clientY - r.top) / r.height
        });
      },
      style: {
        position: 'relative',
        display: 'block',
        overflow: 'hidden',
        height: on ? 'min(62vh,560px)' : 'clamp(96px,9vw,128px)',
        borderBottom: '1px solid ' + (on ? 'transparent' : 'var(--border-hairline)'),
        color: on ? '#fff' : 'var(--pw-ink)',
        transition: 'height .9s var(--ease-inout),color .5s'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        opacity: on ? 1 : 0,
        transition: 'opacity .7s var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: STK + s.img,
      alt: "",
      style: {
        position: 'absolute',
        inset: '-4%',
        width: '108%',
        height: '108%',
        objectFit: 'cover',
        transform: `translate3d(${(m.x - .5) * -24}px,${(m.y - .5) * -16}px,0) scale(${on ? 1 : 1.12})`,
        transition: 'transform 1.4s var(--ease-out)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg,rgba(0,0,0,.25) 0%,rgba(0,0,0,.6) 100%)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        height: '100%',
        padding: `0 ${PAD}`,
        display: 'grid',
        gridTemplateColumns: '60px minmax(0,1fr) minmax(0,1fr) 40px',
        gap: 24,
        alignItems: on ? 'end' : 'center',
        paddingBottom: on ? 'clamp(32px,4vw,56px)' : 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        letterSpacing: '.12em',
        color: on ? '#fff' : 'var(--text-muted)',
        transition: 'color .4s'
      }
    }, String(k + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 300,
        fontSize: on ? 'clamp(36px,4.6vw,80px)' : 'clamp(26px,3.2vw,52px)',
        lineHeight: 1.05,
        letterSpacing: '-0.02em',
        transition: 'font-size .8s var(--ease-inout)'
      }
    }, s.n), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 300,
        fontSize: 15,
        lineHeight: 1.6,
        color: on ? 'rgba(255,255,255,.9)' : 'var(--text-secondary)',
        opacity: h === -1 || on ? 1 : .4,
        transition: 'opacity .4s,color .4s'
      }
    }, s.d), /*#__PURE__*/React.createElement("span", {
      style: {
        justifySelf: 'end',
        transform: on ? 'rotate(45deg)' : 'none',
        transition: 'transform .5s var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement(Arrow, {
      size: 26,
      color: on ? '#fff' : RED
    })))));
  })));
}
function PromiseBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: '110vh',
      minHeight: 640,
      color: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Parallax, {
    src: STK + 's09.jpg',
    speed: .3,
    reveal: false,
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg,rgba(0,0,0,.6),rgba(0,0,0,.1))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: PAD,
      right: PAD,
      top: '50%',
      transform: 'translateY(-50%)',
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "#fff"
  }, "Our promise")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100,
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Title, {
    color: "#fff",
    a: "Excellence beyond",
    b: "expectations."
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '36px 0 0',
      maxWidth: 560,
      fontWeight: 300,
      fontSize: 17,
      lineHeight: 1.75,
      color: 'rgba(255,255,255,.9)'
    }
  }, "When you choose Pacific West Home Builders, you\u2019re not just hiring a contractor\u2014you\u2019re partnering with a team dedicated to turning your dreams into reality."))));
}
const APART = [['gem', 'Luxury-Centric Designs', 'We blend functionality and aesthetics to create timeless spaces.'], ['leaf', 'Sustainability', 'We prioritize energy-efficient solutions and environmentally friendly practices.'], ['messages-square', 'Transparent Communication', 'We keep you informed every step of the way.'], ['hammer', 'Unmatched Craftsmanship', 'Our team uses only premium materials and meticulous techniques.'], ['clipboard-check', 'Seamless Project Management', 'From concept to completion, we make the process stress-free.']];
function Apart() {
  return /*#__PURE__*/React.createElement("section", {
    style: sec()
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))',
      gap: '40px 80px',
      marginBottom: 88
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Why homeowners choose us")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100,
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Title, {
    a: "What sets us",
    b: "apart."
  }))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200,
    style: {
      alignSelf: 'end'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.75,
      color: 'var(--text-secondary)',
      maxWidth: 480
    }
  }, "We understand that your home is more than just a structure\u2014it\u2019s where life happens. That\u2019s why we go above and beyond to ensure every detail is perfect."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, APART.map(([ic, t, d], k) => /*#__PURE__*/React.createElement(Reveal, {
    key: t,
    delay: k * 90,
    style: {
      padding: '44px 28px 12px 0',
      borderRight: k < 4 ? '1px solid var(--border-hairline)' : 'none',
      paddingLeft: k ? 28 : 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 34,
    color: RED
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 400,
      margin: '32px 0 12px'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 1.7,
      color: 'var(--text-secondary)'
    }
  }, d)))));
}
const STEPS = [['Let’s Talk', 'Schedule a consultation and share your vision with us.', 's01.jpg'], ['Tailored Designs', 'We’ll create a plan that’s as unique as your lifestyle.', 's13.jpg'], ['Flawless Execution', 'Watch your dream home take shape with precision and care.', 's08.jpg']];
function Process() {
  const [a, setA] = React.useState(0);
  const refs = [React.useRef(), React.useRef(), React.useRef()];
  useFrame(() => {
    let best = 0;
    refs.forEach((r, k) => {
      if (r.current && r.current.getBoundingClientRect().top < innerHeight * .55) best = k;
    });
    setA(best);
  });
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pw-black)',
      color: '#fff',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,460px),1fr))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pw-proc-img",
    style: {
      position: 'sticky',
      top: 0,
      height: '100vh',
      overflow: 'hidden'
    }
  }, STEPS.map((s, k) => /*#__PURE__*/React.createElement("img", {
    key: k,
    src: STK + s[2],
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: a === k ? 1 : 0,
      transform: a === k ? 'scale(1)' : 'scale(1.08)',
      transition: 'opacity 1s var(--ease-out),transform 1.6s var(--ease-out)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `clamp(80px,12vw,160px) ${PAD}`,
      background: 'var(--pw-black)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "#fff"
  }, "Discover the Pacific West difference")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100,
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Title, {
    color: "#fff",
    a: "Step into your",
    b: "dream home.",
    size: "clamp(36px,4.4vw,76px)"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '32px 0 0',
      maxWidth: 460,
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.75,
      color: 'rgba(255,255,255,.72)'
    }
  }, "Your journey toward an exceptional living space begins here. Whether you\u2019re planning a simple remodel or a complete new build, our team is ready to turn your ideas into stunning realities."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '14vh'
    }
  }, STEPS.map((s, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    ref: refs[k],
    style: {
      minHeight: '46vh',
      borderTop: '1px solid rgba(255,255,255,' + (a === k ? '.9' : '.18') + ')',
      paddingTop: 32,
      transition: 'border-color .6s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontStyle: 'italic',
      fontSize: 28,
      color: a === k ? '#E5524F' : 'rgba(255,255,255,.4)',
      transition: 'color .6s'
    }
  }, "0", k + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 300,
      fontSize: 'clamp(30px,3vw,48px)',
      margin: '14px 0 16px',
      opacity: a === k ? 1 : .4,
      transition: 'opacity .6s'
    }
  }, s[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.7,
      color: 'rgba(255,255,255,.72)',
      maxWidth: 380,
      opacity: a === k ? 1 : .4,
      transition: 'opacity .6s'
    }
  }, s[1]))))));
}
Object.assign(window, {
  About,
  Services,
  PromiseBand,
  Apart,
  Process
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v3/SectionsV3.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v4/AduV4.jsx
try { (() => {
const TYPES = [{
  n: 'Detached ADU',
  tag: 'A separate home in your backyard',
  d: 'A freestanding one- or two-bedroom home with its own entry, kitchen and bath. The most private option and the strongest for rental income.',
  size: 'Up to 1,200 sq ft',
  where: 'Backyard',
  best: 'Rental income, guest house',
  src: IMG + 'cover-detached-adu-exterior.png'
}, {
  n: 'Attached ADU',
  tag: 'An addition with its own front door',
  d: 'Built onto the side or rear of your home, sharing a wall but not a living space. Ties into existing utilities, which keeps site work down.',
  size: 'Up to 1,200 sq ft or 50% of the home',
  where: 'Side or rear of house',
  best: 'Multigenerational family',
  src: STK + 's20.jpg'
}, {
  n: 'Garage Conversion',
  tag: 'Turn the garage into a home',
  d: 'We keep the existing slab and walls where we can, then insulate, re-frame openings and add a kitchen and bath. Often the fastest path to an ADU.',
  size: 'Existing footprint',
  where: 'Attached or detached garage',
  best: 'Lower cost, faster build',
  src: IMG + 'clean/garage-before-after.png'
}, {
  n: 'JADU',
  tag: 'A suite inside your existing home',
  d: 'A junior ADU carved from an existing bedroom or wing, with an efficiency kitchen and its own entrance. Bath can be private or shared.',
  size: 'Up to 500 sq ft',
  where: 'Inside the main house',
  best: 'Aging parents, adult kids',
  src: STK + 's15.jpg'
}, {
  n: 'Second-story ADU',
  tag: 'Build up and keep the yard',
  d: 'A new unit above your garage or as an upper level, with its own stair and entry. Ideal for smaller lots where yard space matters.',
  size: 'Up to 1,200 sq ft',
  where: 'Above garage or home',
  best: 'Small lots, views',
  src: STK + 's12.jpg'
}];
function Types() {
  const [a, setA] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    id: "types",
    style: {
      padding: `clamp(88px,10vw,160px) ${PAD}`,
      background: 'var(--pw-stone-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 32,
      flexWrap: 'wrap',
      marginBottom: 'clamp(48px,6vw,88px)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Kicker, null, "ADU types"), /*#__PURE__*/React.createElement(H, {
    style: {
      marginTop: 28,
      maxWidth: 900
    }
  }, "Five ways to add a home to your lot")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    style: {
      maxWidth: 400
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      fontWeight: 300,
      lineHeight: 1.7,
      color: 'var(--text-secondary)'
    }
  }, "Not sure which fits your property? We confirm setbacks, utilities and zoning in a free site visit."))), /*#__PURE__*/React.createElement("div", {
    className: "v4-types",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)',
      gap: 'clamp(32px,5vw,88px)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--pw-ink)'
    }
  }, TYPES.map((t, k) => {
    const on = k === a;
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      onMouseEnter: () => setA(k),
      onClick: () => setA(k),
      style: {
        borderBottom: '1px solid var(--border-hairline)',
        padding: '28px 0',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 24
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 500,
        color: on ? RED : 'var(--text-muted)',
        minWidth: 24,
        transition: 'color .3s'
      }
    }, String(k + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'clamp(24px,2.4vw,38px)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '-0.01em',
        lineHeight: 1.05,
        color: on ? 'var(--pw-ink)' : 'var(--pw-stone-500)',
        transition: 'color .3s'
      }
    }, t.n), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: on ? '1fr' : '0fr',
        transition: 'grid-template-rows .6s var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-serif-display)',
        fontStyle: 'italic',
        fontSize: 22,
        color: RED,
        marginTop: 12
      }
    }, t.tag), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '12px 0 0',
        fontSize: 15,
        fontWeight: 300,
        lineHeight: 1.7,
        color: 'var(--text-secondary)',
        maxWidth: 520
      }
    }, t.d), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
        gap: 16,
        marginTop: 22
      }
    }, [['Size', t.size], ['Where', t.where], ['Best for', t.best]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
      key: l
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '.2em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, l), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        marginTop: 6,
        lineHeight: 1.4
      }
    }, v))))))), /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 22,
      color: on ? RED : 'var(--pw-stone-300)',
      style: {
        transition: 'transform .4s',
        transform: on ? 'rotate(45deg)' : 'none'
      }
    })));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    dark: true,
    onClick: () => go('calculator')
  }, "Price my ", TYPES[a].n))), /*#__PURE__*/React.createElement("div", {
    className: "v4-type-img",
    style: {
      position: 'sticky',
      top: 120,
      aspectRatio: '4/5',
      maxHeight: 'calc(100vh - 160px)',
      width: '100%',
      overflow: 'hidden',
      background: 'var(--pw-stone-200)'
    }
  }, TYPES.map((t, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: k === a ? 1 : 0,
      transform: k === a ? 'scale(1)' : 'scale(1.05)',
      transition: 'opacity .8s var(--ease-inout),transform 1.4s var(--ease-out)',
      pointerEvents: k === a ? 'auto' : 'none'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: 'v4-type-' + (k + 1),
    shape: "rect",
    src: t.src,
    placeholder: t.n + ' photo'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 2,
      background: 'var(--pw-black)',
      color: '#fff',
      padding: '12px 18px',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      pointerEvents: 'none'
    }
  }, String(a + 1).padStart(2, '0'), " / 05 \xB7 ", TYPES[a].n))));
}
const STEPS = [['Site visit', 'We walk your lot, check setbacks, utilities and access, and tell you which ADU types qualify.'], ['Design', 'Floor plan, elevations and finishes, drawn around how you plan to use the unit.'], ['Engineering', 'Structural, Title 24 energy and soils reports, coordinated by our team.'], ['Plan check', 'We submit to the city, answer corrections and track every comment until approval.'], ['Build', 'Our own crews build it, with a project lead on site and weekly updates.'], ['Final & move-in', 'Final inspection, certificate of occupancy and a walkthrough before handover.']];
function Process() {
  const ref = React.useRef();
  const [p, setP] = React.useState(0);
  useFrame(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setP(Math.min(1, Math.max(0, (innerHeight * .85 - r.top) / (r.height + innerHeight * .2))));
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "process",
    ref: ref,
    style: {
      padding: `clamp(88px,10vw,160px) ${PAD}`,
      background: 'var(--pw-black)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Kicker, {
    color: "#ff6b6b",
    line: "#ff6b6b"
  }, "Permit process"), /*#__PURE__*/React.createElement(H, {
    color: "#fff",
    style: {
      marginTop: 28,
      maxWidth: 1000
    }
  }, "From first visit to permit, we handle the city")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 'clamp(56px,7vw,104px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 1,
      background: 'rgba(255,255,255,.18)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: RED,
      transformOrigin: 'left',
      transform: `scaleX(${p})`
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,190px),1fr))',
      gap: '40px 32px'
    }
  }, STEPS.map(([t, d], k) => {
    const on = p >= (k + .5) / STEPS.length;
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        paddingTop: 28,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: -4,
        left: 0,
        width: 9,
        height: 9,
        borderRadius: '50%',
        background: on ? RED : 'var(--pw-black)',
        border: '1px solid ' + (on ? RED : 'rgba(255,255,255,.4)'),
        transition: 'background .4s,border-color .4s'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 500,
        color: on ? '#ff6b6b' : 'rgba(255,255,255,.5)',
        transition: 'color .4s'
      }
    }, String(k + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        fontWeight: 600,
        textTransform: 'uppercase',
        marginTop: 14,
        letterSpacing: '.01em'
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '12px 0 0',
        fontSize: 14,
        fontWeight: 300,
        lineHeight: 1.7,
        color: 'rgba(255,255,255,.75)'
      }
    }, d));
  }))));
}
const RATES = {
  'Detached ADU': [300, 375],
  'Attached ADU': [285, 355],
  'Garage Conversion': [190, 250],
  'JADU': [170, 230],
  'Second-story ADU': [340, 420]
};
const FIN = {
  Standard: 1,
  Premium: 1.18,
  Luxury: 1.4
};
const APR = .0899,
  YRS = 20;
const money = v => '$' + Math.round(v / 1000).toLocaleString() + 'k';
function Calculator() {
  const [t, setT] = React.useState('Detached ADU');
  const [sq, setSq] = React.useState(750);
  const [f, setF] = React.useState('Premium');
  const max = t === 'JADU' ? 500 : 1200;
  const size = Math.min(sq, max);
  const [lo, hi] = RATES[t].map(r => r * size * FIN[f]);
  const mr = APR / 12,
    n = YRS * 12;
  const mo = v => v * mr / (1 - Math.pow(1 + mr, -n));
  const lab = {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '.2em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    marginBottom: 14
  };
  const chip = on => ({
    padding: '12px 16px',
    border: '1px solid ' + (on ? 'var(--pw-ink)' : 'var(--border-hairline)'),
    background: on ? 'var(--pw-ink)' : '#fff',
    color: on ? '#fff' : 'var(--pw-ink)',
    fontFamily: 'var(--font-sans)',
    fontSize: 13,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'all .25s'
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "calculator",
    style: {
      padding: `clamp(88px,10vw,160px) ${PAD}`,
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Kicker, null, "Cost calculator"), /*#__PURE__*/React.createElement(H, {
    style: {
      marginTop: 28,
      maxWidth: 900
    }
  }, "What will your ADU cost?")), /*#__PURE__*/React.createElement("div", {
    className: "v4-calc",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,1fr)',
      gap: 'clamp(32px,4vw,64px)',
      marginTop: 'clamp(48px,6vw,80px)',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 44
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: lab
  }, "ADU type"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, Object.keys(RATES).map(k => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setT(k),
    style: chip(k === t)
  }, k)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...lab,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Size"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pw-ink)',
      fontSize: 16,
      letterSpacing: 0,
      textTransform: 'none',
      fontWeight: 500
    }
  }, size.toLocaleString(), " sq ft")), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: 200,
    max: max,
    step: 25,
    value: size,
    onChange: e => setSq(+e.target.value),
    style: {
      width: '100%',
      accentColor: '#AB0000'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, "200"), /*#__PURE__*/React.createElement("span", null, max.toLocaleString()))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: lab
  }, "Finish level"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, Object.keys(FIN).map(k => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setF(k),
    style: chip(k === f)
  }, k)))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      fontWeight: 300,
      lineHeight: 1.7,
      color: 'var(--text-muted)',
      maxWidth: 520
    }
  }, "Illustrative ranges for Southern California. Site work, utilities and city fees vary; your exact price comes after the site visit.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pw-black)',
      color: '#fff',
      padding: 'clamp(32px,4vw,56px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...lab,
      color: 'rgba(255,255,255,.6)'
    }
  }, "Estimated build cost"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(40px,4.6vw,72px)',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1
    }
  }, money(lo), " \u2013 ", money(hi)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 300,
      color: 'rgba(255,255,255,.7)',
      marginTop: 12
    }
  }, t, " \xB7 ", size.toLocaleString(), " sq ft \xB7 ", f)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(255,255,255,.15)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    id: "financing"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: RED,
      padding: '6px 10px',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.16em',
      textTransform: 'uppercase'
    }
  }, "$0 down"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontStyle: 'italic',
      fontSize: 26
    }
  }, "Build now, pay later")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'clamp(32px,3vw,48px)',
      fontWeight: 600
    }
  }, "$", Math.round(mo(lo)).toLocaleString()), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,.7)'
    }
  }, "\u2013 $", Math.round(mo(hi)).toLocaleString(), " / month")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 300,
      color: 'rgba(255,255,255,.6)',
      marginTop: 10,
      lineHeight: 1.6
    }
  }, "Example at ", (APR * 100).toFixed(2), "% APR over ", YRS, " years, subject to lender approval.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => go('contact')
  }, "Get my exact quote ", /*#__PURE__*/React.createElement(Arrow, {
    color: "#fff"
  }))))));
}
Object.assign(window, {
  Types,
  Process,
  Calculator
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v4/AduV4.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v4/BuildHeroV4.jsx
try { (() => {
const STAGES = [{
  k: 'Your backyard',
  t: 'Your ADU, built start to finish',
  d: 'Pacific West designs, permits and builds accessory dwelling units across Southern California. Scroll to watch one go up.',
  src: IMG + 'clean/adu-exterior-aerial.png',
  slot: 'Empty backyard, wide angle',
  h1: true
}, {
  k: 'Foundation',
  t: 'New foundation',
  d: 'Engineered footings, rebar and anchor bolts, inspected and poured. Slab or raised, sized to your soil report.',
  slot: 'Foundation pour, same angle'
}, {
  k: 'Framing',
  t: 'Structural framing',
  d: 'Walls, floor joists and roof rafters go up to the engineer’s plan, with shear walls and hold-downs for California seismic code.',
  slot: 'Framing, same angle'
}, {
  k: 'Roof & windows',
  t: 'Dried in',
  d: 'Sheathing, roofing and house wrap, then flashed windows and doors. The unit is now sealed against the weather.',
  slot: 'Roof + windows installed, same angle'
}, {
  k: 'Exterior',
  t: 'Exterior finishes',
  d: 'Stucco or siding, exterior lighting, a path from the main house and landscaping that ties both homes together.',
  src: IMG + 'cover-detached-adu-exterior.png',
  slot: 'Finished exterior, same angle'
}, {
  k: 'Interior',
  t: 'Step inside',
  d: 'Insulation, drywall, flooring and paint. Electrical, plumbing and HVAC are inspected and hidden behind finish-grade walls.',
  src: STK + 's10.jpg',
  slot: 'Finished living room'
}, {
  k: 'Kitchen',
  t: 'A full kitchen',
  d: 'Custom cabinetry, stone counters and full-size appliances. A real kitchen, laid out with you before we build.',
  src: IMG + 'cover-detached-adu-kitchen.png',
  slot: 'Finished ADU kitchen'
}, {
  k: 'Bathroom',
  t: 'Finished bath',
  d: 'Tile, glass and fixtures, waterproofed and plumbed by our own crew.',
  src: STK + 's04.jpg',
  slot: 'Finished ADU bathroom'
}, {
  k: 'Move-in',
  t: 'Ready to live in',
  d: 'Final inspection, certificate of occupancy and a walkthrough with your project lead. Then it’s yours to rent, share or live in.',
  src: STK + 's14.jpg',
  slot: 'Finished interior, lived-in',
  cta: true
}];
const N = STAGES.length;
function Header() {
  const [more, setMore] = React.useState(false);
  const links = [['ADU Types', 'types'], ['Process', 'process'], ['Cost', 'calculator'], ['Financing', 'financing'], ['FAQ', 'faq']];
  const lk = {
    color: 'rgba(255,255,255,.86)',
    fontSize: 14,
    fontWeight: 400,
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    fontFamily: 'var(--font-sans)',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    gap: 6
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: 'var(--pw-black)',
      borderBottom: '1px solid rgba(255,255,255,.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 84,
      padding: `0 ${PAD}`,
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => {
      e.preventDefault();
      scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, /*#__PURE__*/React.createElement(PW.Logo, {
    tone: "light",
    basePath: "../../",
    height: 46
  })), /*#__PURE__*/React.createElement("nav", {
    className: "v4-nav",
    style: {
      display: 'flex',
      gap: 34,
      margin: '0 auto',
      alignItems: 'center'
    }
  }, links.map(([l, id]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + id,
    onClick: e => {
      e.preventDefault();
      go(id);
    },
    style: lk
  }, l)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    },
    onMouseEnter: () => setMore(true),
    onMouseLeave: () => setMore(false)
  }, /*#__PURE__*/React.createElement("button", {
    style: lk
  }, "More ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: -20,
      paddingTop: 22,
      opacity: more ? 1 : 0,
      pointerEvents: more ? 'auto' : 'none',
      transform: more ? 'none' : 'translateY(-6px)',
      transition: 'opacity .25s,transform .25s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pw-black)',
      border: '1px solid rgba(255,255,255,.1)',
      padding: '10px 0',
      minWidth: 230
    }
  }, [['Kitchen Remodeling', 'services'], ['Bathroom Remodeling', 'services'], ['Room Additions', 'services'], ['FAQ', 'faq'], ['Reviews', 'reviews'], ['Contact', 'contact']].map(([l, id]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + id,
    onClick: e => {
      e.preventDefault();
      setMore(false);
      go(id);
    },
    style: {
      display: 'block',
      padding: '11px 22px',
      color: '#fff',
      fontSize: 14,
      fontWeight: 300
    },
    onMouseEnter: e => e.currentTarget.style.color = '#ff8a8a',
    onMouseLeave: e => e.currentTarget.style.color = '#fff'
  }, l)))))), /*#__PURE__*/React.createElement("a", {
    className: "v4-phone",
    href: "tel:8883984499",
    style: {
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 14,
      fontWeight: 500,
      whiteSpace: 'nowrap',
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16,
    color: RED
  }), "(888) 398-4499"), /*#__PURE__*/React.createElement(Btn, {
    onClick: () => go('calculator'),
    style: {
      padding: '15px 22px'
    }
  }, "Start your ADU")));
}
function Crosshair({
  host
}) {
  const box = React.useRef(),
    v = React.useRef(),
    h = React.useRef(),
    c = React.useRef(),
    lab = React.useRef();
  React.useEffect(() => {
    const el = host.current;
    if (!el || matchMedia('(hover:none)').matches) return;
    const mv = e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left,
        y = e.clientY - r.top;
      box.current.style.opacity = 1;
      v.current.style.transform = `translateX(${x}px)`;
      h.current.style.transform = `translateY(${y}px)`;
      c.current.style.transform = `translate(${x - 20}px,${y - 20}px)`;
      const flip = x > r.width - 220;
      lab.current.style.transform = `translate(${flip ? x - 200 : x + 28}px,${y + 22}px)`;
      const inch = Math.round(x / r.width * 480);
      lab.current.lastChild.textContent = `${Math.floor(inch / 12)}′ ${inch % 12}″ · DRAFTING`;
    };
    const out = () => box.current.style.opacity = 0;
    el.addEventListener('mousemove', mv);
    el.addEventListener('mouseleave', out);
    return () => {
      el.removeEventListener('mousemove', mv);
      el.removeEventListener('mouseleave', out);
    };
  }, []);
  const line = 'rgba(255,90,90,.35)';
  return /*#__PURE__*/React.createElement("div", {
    ref: box,
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      opacity: 0,
      transition: 'opacity .3s',
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: v,
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: 1,
      background: line
    }
  }), /*#__PURE__*/React.createElement("div", {
    ref: h,
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 1,
      background: line
    }
  }), /*#__PURE__*/React.createElement("div", {
    ref: c,
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: '1px solid ' + RED,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: '50%',
      background: RED
    }
  })), /*#__PURE__*/React.createElement("div", {
    ref: lab,
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '7px 10px',
      background: 'rgba(17,17,17,.85)',
      color: '#fff',
      fontFamily: 'ui-monospace,Menlo,monospace',
      fontSize: 11,
      letterSpacing: '.08em',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: RED
    }
  }), /*#__PURE__*/React.createElement("span", null, "0\u2032 0\u2033 \xB7 DRAFTING")));
}
function BuildHero() {
  const wrap = React.useRef(),
    stage = React.useRef();
  const [i, setI] = React.useState(0);
  const fill = React.useRef();
  useFrame(() => {
    const w = wrap.current;
    if (!w) return;
    const r = w.getBoundingClientRect();
    const total = w.offsetHeight - innerHeight;
    const p = Math.min(1, Math.max(0, -r.top / total));
    fill.current.style.transform = `scaleX(${p})`;
    setI(Math.min(N - 1, Math.floor(p * N)));
  });
  const jump = k => {
    const w = wrap.current;
    const total = w.offsetHeight - innerHeight;
    scrollTo({
      top: w.offsetTop + total * (k + .5) / N,
      behavior: 'smooth'
    });
  };
  const s = STAGES[i];
  const T = s.h1 ? 'h1' : 'h2';
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    ref: wrap,
    style: {
      height: `calc(100vh + ${N * 70}vh)`,
      position: 'relative',
      background: 'var(--pw-black)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: stage,
    style: {
      position: 'sticky',
      top: 0,
      height: '100vh',
      overflow: 'hidden',
      color: '#fff'
    }
  }, STAGES.map((st, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      position: 'absolute',
      inset: '84px 0 0 0',
      opacity: k === i ? 1 : 0,
      transition: 'opacity 1.1s var(--ease-inout)',
      pointerEvents: k === i ? 'auto' : 'none',
      zIndex: k === i ? 1 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      transform: k === i ? 'scale(1)' : 'scale(1.06)',
      transition: 'transform 2.6s var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: 'v4-stage-' + (k + 1),
    shape: "rect",
    fit: "cover",
    placeholder: 'Stage ' + String(k + 1).padStart(2, '0') + ': ' + st.slot,
    src: st.src
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 2,
      pointerEvents: 'none',
      background: 'linear-gradient(180deg,rgba(0,0,0,0) 35%,rgba(0,0,0,.72) 100%),linear-gradient(90deg,rgba(0,0,0,.45),rgba(0,0,0,0) 60%)'
    }
  }), /*#__PURE__*/React.createElement(Crosshair, {
    host: stage
  }), /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      zIndex: 4,
      left: PAD,
      right: PAD,
      bottom: 'clamp(56px,10vh,120px)',
      maxWidth: 980,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      animation: 'v4Rise .8s var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    n: String(i + 1).padStart(2, '0'),
    color: "#ff6b6b",
    line: "#ff6b6b"
  }, s.k)), /*#__PURE__*/React.createElement(T, {
    style: {
      margin: '24px 0 0',
      fontWeight: 600,
      fontSize: s.h1 ? 'clamp(44px,6.4vw,112px)' : 'clamp(44px,7vw,120px)',
      lineHeight: .94,
      letterSpacing: '-0.02em',
      textTransform: 'uppercase',
      textWrap: 'balance',
      animation: 'v4Rise .9s var(--ease-out) 80ms both'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '26px 0 0',
      maxWidth: 620,
      fontSize: 'clamp(16px,1.25vw,20px)',
      fontWeight: 300,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,.88)',
      textWrap: 'pretty',
      animation: 'v4Rise .9s var(--ease-out) 160ms both'
    }
  }, s.d), s.cta && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginTop: 34,
      pointerEvents: 'auto',
      animation: 'v4Rise .9s var(--ease-out) 240ms both'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => go('types')
  }, "Explore ADU types"), /*#__PURE__*/React.createElement(Btn, {
    ghost: true,
    onClick: () => go('calculator')
  }, "Estimate my cost"))), /*#__PURE__*/React.createElement("div", {
    className: "v4-dots",
    style: {
      position: 'absolute',
      zIndex: 4,
      right: PAD,
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, STAGES.map((st, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => jump(k),
    title: st.k,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 12,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      padding: '4px 0',
      opacity: k === i ? 1 : .45,
      transition: 'opacity .4s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: k === i ? 1 : 0,
      transition: 'opacity .4s'
    }
  }, st.k), /*#__PURE__*/React.createElement("span", {
    style: {
      width: k === i ? 28 : 12,
      height: 1,
      background: k === i ? RED : '#fff',
      transition: 'width .4s'
    }
  })))), i === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      zIndex: 4,
      left: 0,
      right: 0,
      justifyContent: 'center',
      pointerEvents: 'none',
      bottom: 28,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 11,
      letterSpacing: '.3em',
      color: 'rgba(255,255,255,.8)',
      animation: 'v4Rise 1s var(--ease-out) .6s both'
    }
  }, "SCROLL TO BUILD", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-down",
    size: 14,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      zIndex: 4,
      left: 0,
      right: 0,
      bottom: 0,
      height: 4,
      background: 'rgba(255,255,255,.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: fill,
    style: {
      position: 'absolute',
      inset: 0,
      background: RED,
      transformOrigin: 'left',
      transform: 'scaleX(0)'
    }
  }))));
}
function AskUs() {
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => go('contact'),
    style: {
      position: 'fixed',
      right: 20,
      bottom: 20,
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '15px 20px',
      background: RED,
      color: '#fff',
      border: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      cursor: 'pointer',
      boxShadow: '0 10px 30px rgba(0,0,0,.25)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 17,
    color: "#fff"
  }), "Ask us");
}
Object.assign(window, {
  Header,
  BuildHero,
  AskUs
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v4/BuildHeroV4.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v4/CoreV4.jsx
try { (() => {
const PW = window.PacificWestDesignSystem_179d0a;
const IMG = '../../assets/imagery/';
const STK = IMG + 'stock/';
const RED = 'var(--pw-red)';
const PAD = 'clamp(20px,4vw,72px)';
const scrollSubs = new Set();
let rafOn = false;
function tick() {
  rafOn = false;
  scrollSubs.forEach(f => f());
}
function onScroll() {
  if (!rafOn) {
    rafOn = true;
    requestAnimationFrame(tick);
  }
}
window.addEventListener('scroll', onScroll, {
  passive: true
});
window.addEventListener('resize', onScroll);
function useFrame(fn) {
  React.useEffect(() => {
    scrollSubs.add(fn);
    fn();
    return () => scrollSubs.delete(fn);
  }, []);
}
function Icon({
  name,
  size = 22,
  color = 'currentColor',
  style
}) {
  const u = 'https://unpkg.com/lucide-static@0.460.0/icons/' + name + '.svg';
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      background: color,
      WebkitMask: 'url(' + u + ') center/contain no-repeat',
      mask: 'url(' + u + ') center/contain no-repeat',
      flex: 'none',
      ...style
    }
  });
}
function Arrow({
  size = 16,
  color = RED,
  style
}) {
  return /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: size,
    color: color,
    style: style
  });
}
function Reveal({
  children,
  delay = 0,
  y = 36,
  style
}) {
  const r = React.useRef();
  const [v, setV] = React.useState(false);
  React.useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setV(true);
        io.disconnect();
      }
    }, {
      threshold: .12
    });
    io.observe(r.current);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: r,
    style: {
      opacity: v ? 1 : 0,
      transform: v ? 'none' : `translateY(${y}px)`,
      transition: `opacity .9s var(--ease-out) ${delay}ms,transform 1s var(--ease-out) ${delay}ms`,
      ...style
    }
  }, children);
}
function Kicker({
  n,
  children,
  color = RED,
  line = RED,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.24em',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, n && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 500,
      letterSpacing: 0
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 1,
      background: line
    }
  }), children);
}
function H({
  children,
  size = 'clamp(36px,4.6vw,76px)',
  color = 'var(--pw-ink)',
  style
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: size,
      lineHeight: .98,
      letterSpacing: '-0.015em',
      textTransform: 'uppercase',
      color,
      textWrap: 'balance',
      ...style
    }
  }, children);
}
function Btn({
  children,
  dark,
  ghost,
  onClick,
  href,
  style
}) {
  const s = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 12,
    fontFamily: 'var(--font-sans)',
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '.18em',
    textTransform: 'uppercase',
    padding: '17px 26px',
    border: '1px solid ' + (ghost ? 'currentColor' : 'transparent'),
    background: ghost ? 'transparent' : dark ? 'var(--pw-black)' : RED,
    color: ghost ? 'inherit' : '#fff',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'background .3s',
    ...style
  };
  return href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: s
  }, children) : /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: s
  }, children);
}
function go(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({
    top: el.getBoundingClientRect().top + scrollY - 84,
    behavior: 'smooth'
  });
}
Object.assign(window, {
  PW,
  IMG,
  STK,
  RED,
  PAD,
  useFrame,
  Icon,
  Arrow,
  Reveal,
  Kicker,
  H,
  Btn,
  go
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v4/CoreV4.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v4/MoreV4.jsx
try { (() => {
const MORE = [['Kitchen Remodeling', STK + 's05.jpg'], ['Bathroom Remodeling', STK + 's19.jpg'], ['Room Additions', STK + 's16.jpg'], ['Garage Remodeling', STK + 's17.jpg'], ['Landscaping', STK + 's18.jpg']];
function OtherServices() {
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      padding: `clamp(80px,9vw,140px) ${PAD}`,
      background: '#fff',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Kicker, null, "Also building"), /*#__PURE__*/React.createElement(H, {
    size: "clamp(28px,3vw,48px)",
    style: {
      marginTop: 24
    }
  }, "Remodels & additions"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,200px),1fr))',
      gap: 16,
      marginTop: 48
    }
  }, MORE.map(([n, src], k) => /*#__PURE__*/React.createElement(Reveal, {
    key: n,
    delay: k * 70
  }, /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    onClick: e => {
      e.preventDefault();
      go('contact');
    },
    style: {
      display: 'block',
      color: 'var(--pw-ink)'
    },
    onMouseEnter: e => e.currentTarget.querySelector('img').style.transform = 'scale(1.06)',
    onMouseLeave: e => e.currentTarget.querySelector('img').style.transform = 'none'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/5',
      overflow: 'hidden',
      background: 'var(--pw-stone-100)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 1.1s var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 16,
      fontSize: 14,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    }
  }, n, /*#__PURE__*/React.createElement(Arrow, null)))))));
}
const REVIEWS = [['Pacific West Home Builders made my ADU project so much easier than I expected. There were a few challenges along the way, but they handled everything smoothly and always found the right solutions.', 'Barbara J.', 'ADU'], ['They built the foundation for my ADU, and from day one, they made the whole process feel easy and stress-free.', 'Juan I.', 'ADU Foundation'], ['Pacific West Home Builders did an outstanding job on my new construction project. Shai was the guy on-site, and his professionalism and attention to detail were top-notch.', 'Nancy A.', 'New Construction']];
function Reviews() {
  const [i, setI] = React.useState(0);
  const r = REVIEWS[i];
  React.useEffect(() => {
    const t = setTimeout(() => setI((i + 1) % REVIEWS.length), 7000);
    return () => clearTimeout(t);
  }, [i]);
  return /*#__PURE__*/React.createElement("section", {
    id: "reviews",
    style: {
      position: 'relative',
      padding: `clamp(88px,10vw,160px) ${PAD}`,
      background: 'var(--pw-black)',
      color: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 36
    }
  }, [0, 1, 2, 3, 4].map(s => /*#__PURE__*/React.createElement(Icon, {
    key: s,
    name: "star",
    size: 18,
    color: RED
  }))), /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      animation: 'v4Rise .9s var(--ease-out) both',
      maxWidth: 1100
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 'clamp(26px,3vw,48px)',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      textWrap: 'pretty'
    }
  }, "\u201C", r[0], "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      fontSize: 13,
      letterSpacing: '.16em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 1,
      background: RED
    }
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600
    }
  }, r[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300,
      color: 'rgba(255,255,255,.6)'
    }
  }, r[2]))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 64,
      maxWidth: 420
    }
  }, REVIEWS.map((_, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    onClick: () => setI(k),
    style: {
      cursor: 'pointer',
      height: 3,
      flex: 1,
      background: k === i ? RED : 'rgba(255,255,255,.2)',
      transition: 'background .4s'
    }
  }))));
}
const FAQS = [['Can I build an ADU on my property?', 'Most single-family lots in California qualify. State law allows an ADU and a JADU on most single-family lots. We confirm setbacks, utilities and zoning during a free site visit.'], ['Do I need to add parking?', 'Often not. California waives ADU parking in many cases, including lots within half a mile of public transit and garage conversions.'], ['Will my property taxes go up?', 'Only the new ADU is assessed and added to your existing assessment. Your main home is not reassessed.'], ['Can I rent out my ADU?', 'Yes. ADUs can be rented long-term. Many cities restrict short-term rentals under 30 days.'], ['Do you handle permits?', 'Yes. We manage design, engineering, city plan check and permits, and meet the inspector on site through final.'], ['How does $0 down financing work?', 'We work with lending partners that can fund construction with no money down, so payments start on a schedule you approve. Terms depend on credit and property.']];
function FAQ() {
  const [o, setO] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    className: "v4-faq",
    style: {
      padding: `clamp(88px,10vw,160px) ${PAD}`,
      background: 'var(--pw-stone-50)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.6fr)',
      gap: '40px clamp(32px,6vw,120px)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Kicker, null, "FAQ"), /*#__PURE__*/React.createElement(H, {
    size: "clamp(32px,3.6vw,60px)",
    style: {
      marginTop: 28
    }
  }, "ADU questions, answered")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--pw-ink)'
    }
  }, FAQS.map(([q, a], k) => {
    const on = k === o;
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        borderBottom: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setO(on ? -1 : k),
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 24,
        padding: '26px 0',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-sans)',
        fontSize: 'clamp(17px,1.4vw,21px)',
        fontWeight: 500,
        color: 'var(--pw-ink)'
      }
    }, q, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 20,
      color: RED,
      style: {
        transition: 'transform .4s',
        transform: on ? 'rotate(45deg)' : 'none'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: on ? '1fr' : '0fr',
        transition: 'grid-template-rows .5s var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 28px',
        fontSize: 15,
        fontWeight: 300,
        lineHeight: 1.75,
        color: 'var(--text-secondary)',
        maxWidth: 680
      }
    }, a))));
  })));
}
function Contact() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "v4-contact",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '86vh',
      color: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "v4-contact",
    shape: "rect",
    src: IMG + 'cover-adu-los-angeles.png',
    placeholder: "Finished ADU, dusk"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.7))',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: PAD,
      right: PAD,
      bottom: PAD,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    color: "#fff",
    line: RED
  }, "Free site visit"), /*#__PURE__*/React.createElement(H, {
    color: "#fff",
    style: {
      marginTop: 24
    },
    size: "clamp(34px,4vw,68px)"
  }, "Let\u2019s see what your lot can hold"), /*#__PURE__*/React.createElement("a", {
    href: "tel:8883984499",
    style: {
      display: 'inline-flex',
      gap: 14,
      alignItems: 'center',
      marginTop: 36,
      color: '#fff',
      fontSize: 22,
      fontWeight: 300,
      pointerEvents: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 20,
    color: "#fff"
  }), "(888) 398-4499"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `clamp(56px,7vw,112px) ${PAD}`,
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Start your ADU"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 40px',
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--text-secondary)',
      maxWidth: 440
    }
  }, "Tell us about your property and an ADU specialist will call to schedule your site visit."), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 0'
    }
  }, /*#__PURE__*/React.createElement(H, {
    size: "48px"
  }, "Thank you"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 300,
      color: 'var(--text-secondary)',
      marginTop: 20
    }
  }, "A specialist will contact you shortly.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(PW.TextField, {
    label: "Full name",
    placeholder: "Jane Doe",
    required: true
  }), /*#__PURE__*/React.createElement(PW.TextField, {
    label: "Phone",
    type: "tel",
    placeholder: "(000) 000-0000",
    required: true
  }), /*#__PURE__*/React.createElement(PW.TextField, {
    label: "Property address",
    placeholder: "Street, city",
    style: {
      gridColumn: '1/-1'
    }
  }), /*#__PURE__*/React.createElement(PW.SelectField, {
    label: "ADU type",
    options: [...TYPES.map(t => t.n), 'Not sure yet'],
    style: {
      gridColumn: '1/-1'
    }
  }), /*#__PURE__*/React.createElement(PW.TextField, {
    label: "Project details",
    multiline: true,
    rows: 3,
    style: {
      gridColumn: '1/-1'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1/-1',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 20,
      flexWrap: 'wrap',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(PW.Checkbox, {
    defaultChecked: true,
    label: "I agree to be contacted about my project."
  }), /*#__PURE__*/React.createElement(Btn, null, "Send request ", /*#__PURE__*/React.createElement(Arrow, {
    color: "#fff"
  }))))));
}
function Footer() {
  const col = (t, items) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      marginBottom: 22,
      color: 'rgba(255,255,255,.5)'
    }
  }, t), items.map(([l, id]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + id,
    onClick: e => {
      e.preventDefault();
      go(id);
    },
    style: {
      display: 'block',
      fontSize: 14,
      fontWeight: 300,
      marginBottom: 12,
      color: '#fff'
    }
  }, l)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: `clamp(72px,8vw,120px) ${PAD} 32px`,
      background: 'var(--pw-black)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PW.Logo, {
    tone: "light",
    basePath: "../../",
    height: 60
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 1.7,
      color: 'rgba(255,255,255,.7)',
      marginTop: 24,
      maxWidth: 280
    }
  }, "ADU design, permits and construction across Southern California.")), col('ADUs', TYPES.map(t => [t.n, 'types'])), col('Plan', [['Permit process', 'process'], ['Cost calculator', 'calculator'], ['$0 down financing', 'calculator'], ['FAQ', 'faq']]), col('More', [['Kitchen Remodeling', 'services'], ['Bathroom Remodeling', 'services'], ['Room Additions', 'services'], ['Reviews', 'reviews']]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      marginBottom: 22,
      color: 'rgba(255,255,255,.5)'
    }
  }, "Visit"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 300,
      lineHeight: 1.7
    }
  }, "16000 Ventura Blvd Ste 900", /*#__PURE__*/React.createElement("br", null), "Encino, CA 91436"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 300,
      lineHeight: 1.7,
      marginTop: 14
    }
  }, "215 N Marengo Ave Ste 2091", /*#__PURE__*/React.createElement("br", null), "Pasadena, CA 91101"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 22
    }
  }, ['instagram', 'facebook', 'map-pin'].map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 18,
    color: "#fff"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16,
      marginTop: 80,
      paddingTop: 24,
      borderTop: '1px solid rgba(255,255,255,.12)',
      fontSize: 12,
      fontWeight: 300,
      color: 'rgba(255,255,255,.55)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Pacific West Home Builders \xA9 2026 \xB7 License #1111181"), /*#__PURE__*/React.createElement("span", null, "(888) 398-4499 \xB7 info@pwhbuilders.com")));
}
Object.assign(window, {
  OtherServices,
  Reviews,
  FAQ,
  Contact,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v4/MoreV4.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v4/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v4/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/website-v5/AduV5.jsx
try { (() => {
const TYPES = [{
  n: 'Detached ADU',
  tag: 'A separate home in your backyard',
  d: 'A freestanding one- or two-bedroom home with its own entry, kitchen and bath. The most private option and the strongest for rental income.',
  size: 'Up to 1,200 sq ft',
  where: 'Backyard',
  best: 'Rental income, guest house',
  src: IMG + 'types/detached-adu.jpg'
}, {
  n: 'Attached ADU',
  tag: 'An addition with its own front door',
  d: 'Built onto the side or rear of your home, sharing a wall but not a living space. Ties into existing utilities, which keeps site work down.',
  size: 'Up to 1,200 sq ft or 50% of the home',
  where: 'Side or rear of house',
  best: 'Multigenerational family',
  src: IMG + 'types/attached-adu.jpg'
}, {
  n: 'Garage Conversion',
  tag: 'Turn the garage into a home',
  d: 'We keep the existing slab and walls where we can, then insulate, re-frame openings and add a kitchen and bath. Often the fastest path to an ADU.',
  size: 'Existing footprint',
  where: 'Attached or detached garage',
  best: 'Lower cost, faster build',
  src: IMG + 'types/garage-conversion.jpg'
}, {
  n: 'JADU',
  tag: 'A suite inside your existing home',
  d: 'A junior ADU carved from an existing bedroom or wing, with an efficiency kitchen and its own entrance. Bath can be private or shared.',
  size: 'Up to 500 sq ft',
  where: 'Inside the main house',
  best: 'Aging parents, adult kids',
  src: IMG + 'types/jadu.jpg'
}, {
  n: 'Second-story ADU',
  tag: 'Build up and keep the yard',
  d: 'A new unit above your garage or as an upper level, with its own stair and entry. Ideal for smaller lots where yard space matters.',
  size: 'Up to 1,200 sq ft',
  where: 'Above garage or home',
  best: 'Small lots, views',
  src: IMG + 'types/second-story-adu.jpg'
}];
function Types() {
  const [a, setA] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    id: "types",
    style: {
      padding: `clamp(88px,10vw,160px) ${PAD}`,
      background: 'var(--pw-stone-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 32,
      flexWrap: 'wrap',
      marginBottom: 'clamp(48px,6vw,88px)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Kicker, null, "ADU types"), /*#__PURE__*/React.createElement(H, {
    style: {
      marginTop: 28,
      maxWidth: 900
    }
  }, "Five ways to add a home to your lot")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    style: {
      maxWidth: 400
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      fontWeight: 300,
      lineHeight: 1.7,
      color: 'var(--text-secondary)'
    }
  }, "Not sure which fits your property? We confirm setbacks, utilities and zoning in a free site visit."))), /*#__PURE__*/React.createElement("div", {
    className: "v4-types",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)',
      gap: 'clamp(32px,5vw,88px)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--pw-ink)'
    }
  }, TYPES.map((t, k) => {
    const on = k === a;
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      onMouseEnter: () => setA(k),
      onClick: () => setA(k),
      style: {
        borderBottom: '1px solid var(--border-hairline)',
        padding: '28px 0',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 24
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 500,
        color: on ? RED : 'var(--text-muted)',
        minWidth: 24,
        transition: 'color .3s'
      }
    }, String(k + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'clamp(24px,2.4vw,38px)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '-0.01em',
        lineHeight: 1.05,
        color: on ? 'var(--pw-ink)' : 'var(--pw-stone-500)',
        transition: 'color .3s'
      }
    }, t.n), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: on ? '1fr' : '0fr',
        transition: 'grid-template-rows .6s var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-serif-display)',
        fontStyle: 'italic',
        fontSize: 22,
        color: RED,
        marginTop: 12
      }
    }, t.tag), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '12px 0 0',
        fontSize: 15,
        fontWeight: 300,
        lineHeight: 1.7,
        color: 'var(--text-secondary)',
        maxWidth: 520
      }
    }, t.d), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
        gap: 16,
        marginTop: 22
      }
    }, [['Size', t.size], ['Where', t.where], ['Best for', t.best]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
      key: l
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '.2em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, l), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        marginTop: 6,
        lineHeight: 1.4
      }
    }, v))))))), /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 22,
      color: on ? RED : 'var(--pw-stone-300)',
      style: {
        transition: 'transform .4s',
        transform: on ? 'rotate(45deg)' : 'none'
      }
    })));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    dark: true,
    onClick: () => go('calculator')
  }, "Price my ", TYPES[a].n))), /*#__PURE__*/React.createElement("div", {
    className: "v4-type-img",
    style: {
      position: 'sticky',
      top: 120,
      aspectRatio: '4/5',
      maxHeight: 'calc(100vh - 160px)',
      width: '100%',
      overflow: 'hidden',
      background: 'var(--pw-stone-200)'
    }
  }, TYPES.map((t, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: k === a ? 1 : 0,
      transform: k === a ? 'scale(1)' : 'scale(1.05)',
      transition: 'opacity .8s var(--ease-inout),transform 1.4s var(--ease-out)',
      pointerEvents: k === a ? 'auto' : 'none'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: 'v5-type-' + (k + 1),
    shape: "rect",
    src: t.src,
    placeholder: t.n + ' photo'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 2,
      background: 'var(--pw-black)',
      color: '#fff',
      padding: '12px 18px',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      pointerEvents: 'none'
    }
  }, String(a + 1).padStart(2, '0'), " / 05 \xB7 ", TYPES[a].n))));
}
const STEPS = [['Site visit', 'We walk your lot, check setbacks, utilities and access, and tell you which ADU types qualify.'], ['Design', 'Floor plan, elevations and finishes, drawn around how you plan to use the unit.'], ['Engineering', 'Structural, Title 24 energy and soils reports, coordinated by our team.'], ['Plan check', 'We submit to the city, answer corrections and track every comment until approval.'], ['Build', 'Our own crews build it, with a project lead on site and weekly updates.'], ['Final & move-in', 'Final inspection, certificate of occupancy and a walkthrough before handover.']];
function Process() {
  const ref = React.useRef();
  const [p, setP] = React.useState(0);
  useFrame(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setP(Math.min(1, Math.max(0, (innerHeight * .85 - r.top) / (r.height + innerHeight * .2))));
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "process",
    ref: ref,
    style: {
      padding: `clamp(88px,10vw,160px) ${PAD}`,
      background: 'var(--pw-black)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Kicker, {
    color: "#ff6b6b",
    line: "#ff6b6b"
  }, "Permit process"), /*#__PURE__*/React.createElement(H, {
    color: "#fff",
    style: {
      marginTop: 28,
      maxWidth: 1000
    }
  }, "From first visit to permit, we handle the city")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 'clamp(56px,7vw,104px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 1,
      background: 'rgba(255,255,255,.18)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: RED,
      transformOrigin: 'left',
      transform: `scaleX(${p})`
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,190px),1fr))',
      gap: '40px 32px'
    }
  }, STEPS.map(([t, d], k) => {
    const on = p >= (k + .5) / STEPS.length;
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        paddingTop: 28,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: -4,
        left: 0,
        width: 9,
        height: 9,
        borderRadius: '50%',
        background: on ? RED : 'var(--pw-black)',
        border: '1px solid ' + (on ? RED : 'rgba(255,255,255,.4)'),
        transition: 'background .4s,border-color .4s'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 500,
        color: on ? '#ff6b6b' : 'rgba(255,255,255,.5)',
        transition: 'color .4s'
      }
    }, String(k + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        fontWeight: 600,
        textTransform: 'uppercase',
        marginTop: 14,
        letterSpacing: '.01em'
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '12px 0 0',
        fontSize: 14,
        fontWeight: 300,
        lineHeight: 1.7,
        color: 'rgba(255,255,255,.75)'
      }
    }, d));
  }))));
}
const RATES = {
  'Detached ADU': [300, 375],
  'Attached ADU': [285, 355],
  'Garage Conversion': [190, 250],
  'JADU': [170, 230],
  'Second-story ADU': [340, 420]
};
const FIN = {
  Standard: 1,
  Premium: 1.18,
  Luxury: 1.4
};
const APR = .0899,
  YRS = 20;
const money = v => '$' + Math.round(v / 1000).toLocaleString() + 'k';
function Calculator() {
  const [t, setT] = React.useState('Detached ADU');
  const [sq, setSq] = React.useState(750);
  const [f, setF] = React.useState('Premium');
  const max = t === 'JADU' ? 500 : 1200;
  const size = Math.min(sq, max);
  const [lo, hi] = RATES[t].map(r => r * size * FIN[f]);
  const mr = APR / 12,
    n = YRS * 12;
  const mo = v => v * mr / (1 - Math.pow(1 + mr, -n));
  const lab = {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '.2em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    marginBottom: 14
  };
  const chip = on => ({
    padding: '12px 16px',
    border: '1px solid ' + (on ? 'var(--pw-ink)' : 'var(--border-hairline)'),
    background: on ? 'var(--pw-ink)' : '#fff',
    color: on ? '#fff' : 'var(--pw-ink)',
    fontFamily: 'var(--font-sans)',
    fontSize: 13,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'all .25s'
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "calculator",
    style: {
      padding: `0 ${PAD} clamp(88px,10vw,160px)`,
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Kicker, null, "Cost calculator"), /*#__PURE__*/React.createElement(H, {
    style: {
      marginTop: 28,
      maxWidth: 900
    }
  }, "What will your ADU cost?")), /*#__PURE__*/React.createElement("div", {
    className: "v4-calc",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,1fr)',
      gap: 'clamp(32px,4vw,64px)',
      marginTop: 'clamp(48px,6vw,80px)',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 44
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: lab
  }, "ADU type"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, Object.keys(RATES).map(k => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setT(k),
    style: chip(k === t)
  }, k)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...lab,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Size"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pw-ink)',
      fontSize: 16,
      letterSpacing: 0,
      textTransform: 'none',
      fontWeight: 500
    }
  }, size.toLocaleString(), " sq ft")), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: 200,
    max: max,
    step: 25,
    value: size,
    onChange: e => setSq(+e.target.value),
    style: {
      width: '100%',
      accentColor: '#AB0000'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, "200"), /*#__PURE__*/React.createElement("span", null, max.toLocaleString()))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: lab
  }, "Finish level"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, Object.keys(FIN).map(k => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setF(k),
    style: chip(k === f)
  }, k)))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      fontWeight: 300,
      lineHeight: 1.7,
      color: 'var(--text-muted)',
      maxWidth: 520
    }
  }, "Illustrative ranges for Southern California. Site work, utilities and city fees vary; your exact price comes after the site visit.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pw-black)',
      color: '#fff',
      padding: 'clamp(32px,4vw,56px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...lab,
      color: 'rgba(255,255,255,.6)'
    }
  }, "Estimated build cost"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(40px,4.6vw,72px)',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1
    }
  }, money(lo), " \u2013 ", money(hi)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 300,
      color: 'rgba(255,255,255,.7)',
      marginTop: 12
    }
  }, t, " \xB7 ", size.toLocaleString(), " sq ft \xB7 ", f)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(255,255,255,.15)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    id: "financing"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: RED,
      padding: '6px 10px',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.16em',
      textTransform: 'uppercase'
    }
  }, "$0 down"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontStyle: 'italic',
      fontSize: 26
    }
  }, "Build now, pay later")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'clamp(32px,3vw,48px)',
      fontWeight: 600
    }
  }, "$", Math.round(mo(lo)).toLocaleString()), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,.7)'
    }
  }, "\u2013 $", Math.round(mo(hi)).toLocaleString(), " / month")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 300,
      color: 'rgba(255,255,255,.6)',
      marginTop: 10,
      lineHeight: 1.6
    }
  }, "Example at ", (APR * 100).toFixed(2), "% APR over ", YRS, " years, subject to lender approval.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => go('contact')
  }, "Get my exact quote ", /*#__PURE__*/React.createElement(Arrow, {
    color: "#fff"
  }))))));
}
Object.assign(window, {
  Types,
  Process,
  Calculator
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v5/AduV5.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v5/BuildHeroV5.jsx
try { (() => {
const STAGES = [{
  k: 'Pacific West',
  t: 'Your ADU, built start to finish',
  d: 'Pacific West designs, permits and builds accessory dwelling units across Southern California. Scroll to watch one go up.',
  src: IMG + 'build/00-completed-adu-hero.png',
  slot: 'Completed ADU hero',
  h1: true,
  intro: true
}, {
  k: 'Property review',
  t: 'Property review, concept & plans',
  d: 'We survey your lot, confirm setbacks, utilities and zoning, and draw concept plans for what your property can hold.',
  src: IMG + 'build/01-property-review.jpg',
  slot: 'Property review'
}, {
  k: 'Permitting',
  t: 'Permitting & site preparation',
  d: 'We take the plans through city plan check. Once approved, the crew clears the pad, sets string lines and excavates the footings.',
  src: IMG + 'build/02-site-prep.jpg',
  slot: 'Permitting'
}, {
  k: 'Foundation',
  t: 'Foundation & slab',
  d: 'Engineered footings, rebar, anchor bolts and utility stub-outs, inspected and poured into a level slab.',
  src: IMG + 'build/03-foundation.jpg',
  slot: 'Foundation'
}, {
  k: 'Framing',
  t: 'Walls, framing & roof structure',
  d: 'Walls, shear panels and roof rafters go up to the engineer’s plan, with hold-downs for California seismic code.',
  src: IMG + 'build/04-framing.jpg',
  slot: 'Framing'
}, {
  k: 'Enclosure',
  t: 'Roofing, windows & exterior enclosure',
  d: 'Roofing, house wrap, flashed windows and the entry door. The unit is now sealed against the weather.',
  src: IMG + 'build/05-enclosure.jpg',
  slot: 'Enclosure'
}, {
  k: 'Rough-in',
  t: 'Plumbing, electrical, HVAC & insulation',
  d: 'Supply and drain lines, wiring, ducting and insulation are installed and inspected before the walls close.',
  src: IMG + 'build/06-rough-in.jpg',
  slot: 'Rough-in'
}, {
  k: 'Finishes',
  t: 'Interior & exterior finishes',
  d: 'Drywall, flooring, cabinetry and paint inside; stucco, lighting and hardscape outside.',
  src: IMG + 'build/07-interior.jpg',
  slot: 'Finishes'
}, {
  k: 'Move-in',
  t: 'Final inspections, walkthrough & completed ADU',
  d: 'Final city inspection, certificate of occupancy and a walkthrough with your project lead. Then it’s yours to rent, share or live in.',
  src: IMG + 'build/08-completed.jpg',
  slot: 'Move-in',
  cta: true
}];
const N = STAGES.length;
function Header() {
  const [more, setMore] = React.useState(false);
  const links = [['ADU Types', 'types'], ['Process', 'process'], ['Cost', 'calculator'], ['Financing', 'financing'], ['Gallery', 'projects'], ['FAQ', 'faq']];
  const lk = {
    color: 'rgba(255,255,255,.86)',
    fontSize: 14,
    fontWeight: 400,
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    fontFamily: 'var(--font-sans)',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    gap: 6
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: 'var(--pw-black)',
      borderBottom: '1px solid rgba(255,255,255,.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 84,
      padding: `0 ${PAD}`,
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => {
      e.preventDefault();
      scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, /*#__PURE__*/React.createElement(PW.Logo, {
    tone: "light",
    basePath: "../../",
    height: 46
  })), /*#__PURE__*/React.createElement("nav", {
    className: "v4-nav",
    style: {
      display: 'flex',
      gap: 34,
      margin: '0 auto',
      alignItems: 'center'
    }
  }, links.map(([l, id]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + id,
    onClick: e => {
      e.preventDefault();
      go(id);
    },
    style: lk
  }, l)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    },
    onMouseEnter: () => setMore(true),
    onMouseLeave: () => setMore(false)
  }, /*#__PURE__*/React.createElement("button", {
    style: lk
  }, "More ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: -20,
      paddingTop: 22,
      opacity: more ? 1 : 0,
      pointerEvents: more ? 'auto' : 'none',
      transform: more ? 'none' : 'translateY(-6px)',
      transition: 'opacity .25s,transform .25s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pw-black)',
      border: '1px solid rgba(255,255,255,.1)',
      padding: '10px 0',
      minWidth: 230
    }
  }, [['Kitchen Remodeling', 'services'], ['Bathroom Remodeling', 'services'], ['Room Additions', 'services'], ['FAQ', 'faq'], ['Reviews', 'reviews'], ['Contact', 'contact']].map(([l, id]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + id,
    onClick: e => {
      e.preventDefault();
      setMore(false);
      go(id);
    },
    style: {
      display: 'block',
      padding: '11px 22px',
      color: '#fff',
      fontSize: 14,
      fontWeight: 300
    },
    onMouseEnter: e => e.currentTarget.style.color = '#ff8a8a',
    onMouseLeave: e => e.currentTarget.style.color = '#fff'
  }, l)))))), /*#__PURE__*/React.createElement("a", {
    className: "v4-phone",
    href: "tel:8883984499",
    style: {
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 14,
      fontWeight: 500,
      whiteSpace: 'nowrap',
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16,
    color: RED
  }), "(888) 398-4499"), /*#__PURE__*/React.createElement(Btn, {
    onClick: () => go('calculator'),
    style: {
      padding: '15px 22px'
    }
  }, "Start your ADU")));
}
function Crosshair({
  host
}) {
  const box = React.useRef(),
    v = React.useRef(),
    h = React.useRef(),
    c = React.useRef(),
    lab = React.useRef();
  React.useEffect(() => {
    const el = host.current;
    if (!el || matchMedia('(hover:none)').matches) return;
    const mv = e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left,
        y = e.clientY - r.top;
      box.current.style.opacity = 1;
      v.current.style.transform = `translateX(${x}px)`;
      h.current.style.transform = `translateY(${y}px)`;
      c.current.style.transform = `translate(${x - 20}px,${y - 20}px)`;
      const flip = x > r.width - 220;
      lab.current.style.transform = `translate(${flip ? x - 200 : x + 28}px,${y + 22}px)`;
      const inch = Math.round(x / r.width * 480);
      lab.current.lastChild.textContent = `${Math.floor(inch / 12)}′ ${inch % 12}″ · DRAFTING`;
    };
    const out = () => box.current.style.opacity = 0;
    el.addEventListener('mousemove', mv);
    el.addEventListener('mouseleave', out);
    return () => {
      el.removeEventListener('mousemove', mv);
      el.removeEventListener('mouseleave', out);
    };
  }, []);
  const line = 'rgba(255,90,90,.35)';
  return /*#__PURE__*/React.createElement("div", {
    ref: box,
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      opacity: 0,
      transition: 'opacity .3s',
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: v,
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: 1,
      background: line
    }
  }), /*#__PURE__*/React.createElement("div", {
    ref: h,
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 1,
      background: line
    }
  }), /*#__PURE__*/React.createElement("div", {
    ref: c,
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: '1px solid ' + RED,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: '50%',
      background: RED
    }
  })), /*#__PURE__*/React.createElement("div", {
    ref: lab,
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '7px 10px',
      background: 'rgba(17,17,17,.85)',
      color: '#fff',
      fontFamily: 'ui-monospace,Menlo,monospace',
      fontSize: 11,
      letterSpacing: '.08em',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: RED
    }
  }), /*#__PURE__*/React.createElement("span", null, "0\u2032 0\u2033 \xB7 DRAFTING")));
}
function BuildHero() {
  const wrap = React.useRef(),
    stage = React.useRef();
  const [i, setI] = React.useState(0);
  const fill = React.useRef();
  useFrame(() => {
    const w = wrap.current;
    if (!w) return;
    const r = w.getBoundingClientRect();
    const total = w.offsetHeight - innerHeight;
    const p = Math.min(1, Math.max(0, -r.top / total));
    fill.current.style.transform = `scaleX(${p})`;
    setI(Math.min(N - 1, Math.floor(p * N)));
  });
  const jump = k => {
    const w = wrap.current;
    const total = w.offsetHeight - innerHeight;
    scrollTo({
      top: w.offsetTop + total * (k + .5) / N,
      behavior: 'smooth'
    });
  };
  const s = STAGES[i];
  const T = s.h1 ? 'h1' : 'h2';
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    ref: wrap,
    style: {
      height: `calc(100vh + ${N * 70}vh)`,
      position: 'relative',
      background: 'var(--pw-black)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: stage,
    style: {
      position: 'sticky',
      top: 0,
      height: '100vh',
      overflow: 'hidden',
      color: '#fff'
    }
  }, STAGES.map((st, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      position: 'absolute',
      inset: '84px 0 0 0',
      opacity: k === i ? 1 : 0,
      transition: 'opacity 1.1s var(--ease-inout)',
      pointerEvents: k === i ? 'auto' : 'none',
      zIndex: k === i ? 1 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      transform: k === i ? 'scale(1)' : 'scale(1.06)',
      transition: 'transform 2.6s var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: 'v5-stage-' + (k + 1),
    shape: "rect",
    fit: "cover",
    placeholder: 'Stage ' + String(k + 1).padStart(2, '0') + ': ' + st.slot,
    src: st.src
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 2,
      pointerEvents: 'none',
      background: 'linear-gradient(180deg,rgba(0,0,0,0) 35%,rgba(0,0,0,.72) 100%),linear-gradient(90deg,rgba(0,0,0,.45),rgba(0,0,0,0) 60%)'
    }
  }), /*#__PURE__*/React.createElement(Crosshair, {
    host: stage
  }), /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      zIndex: 4,
      left: PAD,
      right: PAD,
      bottom: 'clamp(56px,10vh,120px)',
      maxWidth: 980,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      animation: 'v4Rise .8s var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    n: s.intro ? null : String(i).padStart(2, '0'),
    color: "#ff6b6b",
    line: "#ff6b6b"
  }, s.k)), /*#__PURE__*/React.createElement(T, {
    style: {
      margin: '24px 0 0',
      fontWeight: 600,
      fontSize: 'clamp(40px,5.6vw,100px)',
      lineHeight: .94,
      letterSpacing: '-0.02em',
      textTransform: 'uppercase',
      textWrap: 'balance',
      animation: 'v4Rise .9s var(--ease-out) 80ms both'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '26px 0 0',
      maxWidth: 620,
      fontSize: 'clamp(16px,1.25vw,20px)',
      fontWeight: 300,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,.88)',
      textWrap: 'pretty',
      animation: 'v4Rise .9s var(--ease-out) 160ms both'
    }
  }, s.d), s.cta && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginTop: 34,
      pointerEvents: 'auto',
      animation: 'v4Rise .9s var(--ease-out) 240ms both'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => go('types')
  }, "Explore ADU types"), /*#__PURE__*/React.createElement(Btn, {
    ghost: true,
    onClick: () => go('calculator')
  }, "Estimate my cost"))), /*#__PURE__*/React.createElement("div", {
    className: "v4-dots",
    style: {
      position: 'absolute',
      zIndex: 4,
      right: PAD,
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, STAGES.map((st, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => jump(k),
    title: st.intro ? 'Start' : st.k,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 12,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      padding: '4px 0',
      opacity: k === i ? 1 : .45,
      transition: 'opacity .4s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: k === i ? 1 : 0,
      transition: 'opacity .4s'
    }
  }, st.intro ? 'Start' : st.k), /*#__PURE__*/React.createElement("span", {
    style: {
      width: k === i ? 28 : 12,
      height: 1,
      background: k === i ? RED : '#fff',
      transition: 'width .4s'
    }
  })))), i === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      zIndex: 4,
      left: 0,
      right: 0,
      justifyContent: 'center',
      pointerEvents: 'none',
      bottom: 28,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 11,
      letterSpacing: '.3em',
      color: 'rgba(255,255,255,.8)',
      animation: 'v4Rise 1s var(--ease-out) .6s both'
    }
  }, "SCROLL TO BUILD", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-down",
    size: 14,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      zIndex: 4,
      left: 0,
      right: 0,
      bottom: 0,
      height: 4,
      background: 'rgba(255,255,255,.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: fill,
    style: {
      position: 'absolute',
      inset: 0,
      background: RED,
      transformOrigin: 'left',
      transform: 'scaleX(0)'
    }
  }))));
}
function AskUs() {
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => go('contact'),
    style: {
      position: 'fixed',
      right: 20,
      bottom: 20,
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '15px 20px',
      background: RED,
      color: '#fff',
      border: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      cursor: 'pointer',
      boxShadow: '0 10px 30px rgba(0,0,0,.25)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 17,
    color: "#fff"
  }), "Ask us");
}
Object.assign(window, {
  Header,
  BuildHero,
  AskUs
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v5/BuildHeroV5.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v5/CoreV5.jsx
try { (() => {
const PW = window.PacificWestDesignSystem_179d0a;
const IMG = '../../assets/imagery/';
const STK = IMG + 'stock/';
const RED = 'var(--pw-red)';
const PAD = 'clamp(20px,4vw,72px)';
const scrollSubs = new Set();
let rafOn = false;
function tick() {
  rafOn = false;
  scrollSubs.forEach(f => f());
}
function onScroll() {
  if (!rafOn) {
    rafOn = true;
    requestAnimationFrame(tick);
  }
}
window.addEventListener('scroll', onScroll, {
  passive: true
});
window.addEventListener('resize', onScroll);
function useFrame(fn) {
  React.useEffect(() => {
    scrollSubs.add(fn);
    fn();
    return () => scrollSubs.delete(fn);
  }, []);
}
function Icon({
  name,
  size = 22,
  color = 'currentColor',
  style
}) {
  const u = 'https://unpkg.com/lucide-static@0.460.0/icons/' + name + '.svg';
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      background: color,
      WebkitMask: 'url(' + u + ') center/contain no-repeat',
      mask: 'url(' + u + ') center/contain no-repeat',
      flex: 'none',
      ...style
    }
  });
}
function Arrow({
  size = 16,
  color = RED,
  style
}) {
  return /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: size,
    color: color,
    style: style
  });
}
function Reveal({
  children,
  delay = 0,
  y = 36,
  style
}) {
  const r = React.useRef();
  const [v, setV] = React.useState(false);
  React.useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setV(true);
        io.disconnect();
      }
    }, {
      threshold: .12
    });
    io.observe(r.current);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: r,
    style: {
      opacity: v ? 1 : 0,
      transform: v ? 'none' : `translateY(${y}px)`,
      transition: `opacity .9s var(--ease-out) ${delay}ms,transform 1s var(--ease-out) ${delay}ms`,
      ...style
    }
  }, children);
}
function Kicker({
  n,
  children,
  color = RED,
  line = RED,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.24em',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, n && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 500,
      letterSpacing: 0
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 1,
      background: line
    }
  }), children);
}
function H({
  children,
  size = 'clamp(36px,4.6vw,76px)',
  color = 'var(--pw-ink)',
  style
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: size,
      lineHeight: .98,
      letterSpacing: '-0.015em',
      textTransform: 'uppercase',
      color,
      textWrap: 'balance',
      ...style
    }
  }, children);
}
function Btn({
  children,
  dark,
  ghost,
  onClick,
  href,
  style
}) {
  const s = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 12,
    fontFamily: 'var(--font-sans)',
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '.18em',
    textTransform: 'uppercase',
    padding: '17px 26px',
    border: '1px solid ' + (ghost ? 'currentColor' : 'transparent'),
    background: ghost ? 'transparent' : dark ? 'var(--pw-black)' : RED,
    color: ghost ? 'inherit' : '#fff',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'background .3s',
    ...style
  };
  return href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: s
  }, children) : /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: s
  }, children);
}
function go(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({
    top: el.getBoundingClientRect().top + scrollY - 84,
    behavior: 'smooth'
  });
}
Object.assign(window, {
  PW,
  IMG,
  STK,
  RED,
  PAD,
  useFrame,
  Icon,
  Arrow,
  Reveal,
  Kicker,
  H,
  Btn,
  go
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v5/CoreV5.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v5/MoreV5.jsx
try { (() => {
const GAL = [['gallery/02.png', 'Detached ADU, aerial', 1, 1, 2, 2], ['gallery/03.jpg', 'Bathroom', 3, 1, 1, 2], ['gallery/01.png', 'Detached ADU', 4, 1, 1, 1], ['gallery/04.png', 'Kitchen', 4, 2, 1, 1], ['gallery/05.png', 'Kitchen & living', 1, 3, 1, 1], ['gallery/07.png', 'Bedroom', 1, 4, 1, 1], ['gallery/06.png', 'Kitchen', 2, 3, 2, 2], ['gallery/14.png', 'Bathroom', 4, 3, 1, 2], ['gallery/08.png', 'ADU entry', 1, 5, 2, 2], ['gallery/16.png', 'Bedroom', 3, 5, 1, 1], ['gallery/18.png', 'Kitchen', 3, 6, 1, 1], ['gallery/20.png', 'Bathroom', 4, 5, 1, 2]];
function Gallery() {
  return /*#__PURE__*/React.createElement("section", {
    id: "projects",
    style: {
      padding: `clamp(88px,10vw,160px) ${PAD}`,
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 32,
      flexWrap: 'wrap',
      marginBottom: 'clamp(40px,5vw,72px)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Kicker, null, "ADU gallery"), /*#__PURE__*/React.createElement(H, {
    style: {
      marginTop: 28,
      maxWidth: 900
    }
  }, "ADUs we\u2019ve built")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement(Btn, {
    dark: true,
    onClick: () => go('contact')
  }, "Start your ADU"))), /*#__PURE__*/React.createElement("div", {
    className: "v5-gal",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gridAutoRows: 'clamp(160px,17vw,280px)',
      gap: 12
    }
  }, GAL.map(([src, cap, c, r, cs, rs], k) => /*#__PURE__*/React.createElement(Reveal, {
    key: k,
    delay: k % 4 * 80,
    style: {
      gridColumn: `${c} / span ${cs}`,
      gridRow: `${r} / span ${rs}`,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      position: 'relative',
      margin: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      background: 'var(--pw-stone-100)'
    },
    onMouseEnter: e => {
      e.currentTarget.querySelector('img').style.transform = 'scale(1.06)';
      e.currentTarget.lastChild.style.opacity = 1;
    },
    onMouseLeave: e => {
      e.currentTarget.querySelector('img').style.transform = 'none';
      e.currentTarget.lastChild.style.opacity = 0;
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + src,
    alt: cap,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 1.2s var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'absolute',
      inset: 'auto 0 0 0',
      padding: '40px 18px 16px',
      background: 'linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.75))',
      color: '#fff',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 12,
      opacity: 0,
      transition: 'opacity .4s'
    }
  }, cap, /*#__PURE__*/React.createElement(Arrow, {
    color: "#fff"
  })))))));
}
const MORE = [['Kitchen Remodeling', STK + 's05.jpg'], ['Bathroom Remodeling', STK + 's19.jpg'], ['Room Additions', STK + 's16.jpg'], ['Garage Remodeling', STK + 's17.jpg'], ['Landscaping', STK + 's18.jpg']];
function OtherServices() {
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      padding: `clamp(80px,9vw,140px) ${PAD}`,
      background: '#fff',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Kicker, null, "Also building"), /*#__PURE__*/React.createElement(H, {
    size: "clamp(28px,3vw,48px)",
    style: {
      marginTop: 24
    }
  }, "Remodels & additions"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,200px),1fr))',
      gap: 16,
      marginTop: 48
    }
  }, MORE.map(([n, src], k) => /*#__PURE__*/React.createElement(Reveal, {
    key: n,
    delay: k * 70
  }, /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    onClick: e => {
      e.preventDefault();
      go('contact');
    },
    style: {
      display: 'block',
      color: 'var(--pw-ink)'
    },
    onMouseEnter: e => e.currentTarget.querySelector('img').style.transform = 'scale(1.06)',
    onMouseLeave: e => e.currentTarget.querySelector('img').style.transform = 'none'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/5',
      overflow: 'hidden',
      background: 'var(--pw-stone-100)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 1.1s var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 16,
      fontSize: 14,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    }
  }, n, /*#__PURE__*/React.createElement(Arrow, null)))))));
}
const REVIEWS = [['Pacific West Home Builders made my ADU project so much easier than I expected. There were a few challenges along the way, but they handled everything smoothly and always found the right solutions.', 'Barbara J.', 'ADU', 'yelp'], ['They built the foundation for my ADU, and from day one, they made the whole process feel easy and stress-free.', 'Juan I.', 'ADU Foundation', 'google'], ['Pacific West Home Builders did an outstanding job on my new construction project. Shai was the guy on-site, and his professionalism and attention to detail were top-notch.', 'Nancy A.', 'New Construction', 'google']];
const SRC = {
  yelp: {
    n: 'Yelp',
    logo: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "26",
      height: "26",
      "aria-hidden": true
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#FF1A1A",
      d: "M10.5 2.3c-.9-.4-4.6.6-5.2 1.4-.2.3-.3.6-.2.9l3.9 6.7c.6 1 2 .6 2-.6V3.1c0-.4-.2-.7-.5-.8zM9.8 14.6l-4 1.2c-.5.2-.8.7-.6 1.2.3 1.2 1.5 3.1 2.6 3.7.4.2.9.1 1.2-.3l2.2-3.5c.6-1-.3-2.2-1.4-2.3zM9.4 12.5c.6-1 0-2-1.1-2.1L4.3 9.2c-.5-.1-1 .2-1.1.7-.3 1.1-.1 3.4.5 4.4.2.4.7.6 1.2.4l4-1.5c.2-.2.4-.4.5-.7zM18.8 15.9l-3.9-1.3c-1.1-.3-2 .9-1.4 1.9l2.1 3.6c.3.4.8.6 1.2.3 1-.6 2.4-2.4 2.6-3.6.1-.4-.2-.8-.6-.9zM19.6 9.6c-.5-1.1-2.2-2.8-3.3-3.2-.4-.2-.9 0-1.2.3l-2.4 3.4c-.6.9.2 2.2 1.3 2l4.1-.9c.5-.1.8-.6.7-1.1-.1-.2-.1-.4-.2-.5z"
    }))
  },
  google: {
    n: 'Google',
    logo: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "24",
      height: "24",
      "aria-hidden": true
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#4285F4",
      d: "M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.7-2.4 3.6v3h3.9c2.2-2.1 3.5-5.1 3.5-8.8z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#34A853",
      d: "M12 24c3.2 0 6-1.1 8-2.9l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3.1C3.3 21.3 7.3 24 12 24z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FBBC05",
      d: "M5.3 14.3c-.2-.7-.4-1.5-.4-2.3s.1-1.6.4-2.3V6.6H1.3C.5 8.2 0 10.1 0 12s.5 3.8 1.3 5.4l4-3.1z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA4335",
      d: "M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4C18 1.2 15.2 0 12 0 7.3 0 3.3 2.7 1.3 6.6l4 3.1c.9-2.8 3.6-4.9 6.7-4.9z"
    }))
  }
};
function Reviews() {
  const [i, setI] = React.useState(0);
  const r = REVIEWS[i];
  React.useEffect(() => {
    const t = setTimeout(() => setI((i + 1) % REVIEWS.length), 7000);
    return () => clearTimeout(t);
  }, [i]);
  return /*#__PURE__*/React.createElement("section", {
    id: "reviews",
    style: {
      position: 'relative',
      padding: `clamp(88px,10vw,160px) ${PAD}`,
      background: 'var(--pw-black)',
      color: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 36
    }
  }, [0, 1, 2, 3, 4].map(s => /*#__PURE__*/React.createElement(Icon, {
    key: s,
    name: "star",
    size: 18,
    color: RED
  }))), /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      animation: 'v4Rise .9s var(--ease-out) both',
      maxWidth: 1100
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 'clamp(26px,3vw,48px)',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      textWrap: 'pretty'
    }
  }, "\u201C", r[0], "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      fontSize: 13,
      letterSpacing: '.16em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 1,
      background: RED
    }
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600
    }
  }, r[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300,
      color: 'rgba(255,255,255,.6)'
    }
  }, r[2]))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 32,
      flexWrap: 'wrap',
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flex: '1 1 240px',
      maxWidth: 420
    }
  }, REVIEWS.map((_, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    onClick: () => setI(k),
    style: {
      cursor: 'pointer',
      height: 3,
      flex: 1,
      background: k === i ? RED : 'rgba(255,255,255,.2)',
      transition: 'background .4s'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    key: 's' + i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 20px',
      background: '#fff',
      color: 'var(--pw-ink)',
      animation: 'v4Rise .9s var(--ease-out) both'
    }
  }, SRC[r[3]].logo, /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600
    }
  }, SRC[r[3]].n, " review"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 300,
      color: 'var(--text-secondary)'
    }
  }, "5.0 \u2605 verified")))));
}
const FAQS = [['Can I build an ADU on my property?', 'Most single-family lots in California qualify. State law allows an ADU and a JADU on most single-family lots. We confirm setbacks, utilities and zoning during a free site visit.'], ['Do I need to add parking?', 'Often not. California waives ADU parking in many cases, including lots within half a mile of public transit and garage conversions.'], ['Will my property taxes go up?', 'Only the new ADU is assessed and added to your existing assessment. Your main home is not reassessed.'], ['Can I rent out my ADU?', 'Yes. ADUs can be rented long-term. Many cities restrict short-term rentals under 30 days.'], ['Do you handle permits?', 'Yes. We manage design, engineering, city plan check and permits, and meet the inspector on site through final.'], ['How does $0 down financing work?', 'We work with lending partners that can fund construction with no money down, so payments start on a schedule you approve. Terms depend on credit and property.']];
function FAQ() {
  const [o, setO] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    className: "v4-faq",
    style: {
      padding: `clamp(88px,10vw,160px) ${PAD}`,
      background: 'var(--pw-stone-50)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.6fr)',
      gap: '40px clamp(32px,6vw,120px)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Kicker, null, "FAQ"), /*#__PURE__*/React.createElement(H, {
    size: "clamp(32px,3.6vw,60px)",
    style: {
      marginTop: 28
    }
  }, "ADU questions, answered")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--pw-ink)'
    }
  }, FAQS.map(([q, a], k) => {
    const on = k === o;
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        borderBottom: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setO(on ? -1 : k),
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 24,
        padding: '26px 0',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-sans)',
        fontSize: 'clamp(17px,1.4vw,21px)',
        fontWeight: 500,
        color: 'var(--pw-ink)'
      }
    }, q, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 20,
      color: RED,
      style: {
        transition: 'transform .4s',
        transform: on ? 'rotate(45deg)' : 'none'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: on ? '1fr' : '0fr',
        transition: 'grid-template-rows .5s var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 28px',
        fontSize: 15,
        fontWeight: 300,
        lineHeight: 1.75,
        color: 'var(--text-secondary)',
        maxWidth: 680
      }
    }, a))));
  })));
}
function Contact() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "v5-contact",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '86vh',
      color: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "v5-contact",
    shape: "rect",
    src: IMG + 'contact-kitchen.png',
    placeholder: "ADU kitchen"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.7))',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: PAD,
      right: PAD,
      bottom: PAD,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    color: "#fff",
    line: RED
  }, "Free site visit"), /*#__PURE__*/React.createElement(H, {
    color: "#fff",
    style: {
      marginTop: 24
    },
    size: "clamp(34px,4vw,68px)"
  }, "Let\u2019s see what your lot can hold"), /*#__PURE__*/React.createElement("a", {
    href: "tel:8883984499",
    style: {
      display: 'inline-flex',
      gap: 14,
      alignItems: 'center',
      marginTop: 36,
      color: '#fff',
      fontSize: 22,
      fontWeight: 300,
      pointerEvents: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 20,
    color: "#fff"
  }), "(888) 398-4499"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `clamp(56px,7vw,112px) ${PAD}`,
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Start your ADU"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 40px',
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--text-secondary)',
      maxWidth: 440
    }
  }, "Tell us about your property and an ADU specialist will call to schedule your site visit."), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 0'
    }
  }, /*#__PURE__*/React.createElement(H, {
    size: "48px"
  }, "Thank you"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 300,
      color: 'var(--text-secondary)',
      marginTop: 20
    }
  }, "A specialist will contact you shortly.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(PW.TextField, {
    label: "Full name",
    placeholder: "Jane Doe",
    required: true
  }), /*#__PURE__*/React.createElement(PW.TextField, {
    label: "Phone",
    type: "tel",
    placeholder: "(000) 000-0000",
    required: true
  }), /*#__PURE__*/React.createElement(PW.TextField, {
    label: "Property address",
    placeholder: "Street, city",
    style: {
      gridColumn: '1/-1'
    }
  }), /*#__PURE__*/React.createElement(PW.SelectField, {
    label: "ADU type",
    options: [...TYPES.map(t => t.n), 'Not sure yet'],
    style: {
      gridColumn: '1/-1'
    }
  }), /*#__PURE__*/React.createElement(PW.TextField, {
    label: "Project details",
    multiline: true,
    rows: 3,
    style: {
      gridColumn: '1/-1'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1/-1',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 20,
      flexWrap: 'wrap',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(PW.Checkbox, {
    defaultChecked: true,
    label: "I agree to be contacted about my project."
  }), /*#__PURE__*/React.createElement(Btn, null, "Send request ", /*#__PURE__*/React.createElement(Arrow, {
    color: "#fff"
  }))))));
}
function Footer() {
  const col = (t, items) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      marginBottom: 22,
      color: 'rgba(255,255,255,.5)'
    }
  }, t), items.map(([l, id]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + id,
    onClick: e => {
      e.preventDefault();
      go(id);
    },
    style: {
      display: 'block',
      fontSize: 14,
      fontWeight: 300,
      marginBottom: 12,
      color: '#fff'
    }
  }, l)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: `clamp(72px,8vw,120px) ${PAD} 32px`,
      background: 'var(--pw-black)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PW.Logo, {
    tone: "light",
    basePath: "../../",
    height: 60
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 1.7,
      color: 'rgba(255,255,255,.7)',
      marginTop: 24,
      maxWidth: 280
    }
  }, "ADU design, permits and construction across Southern California.")), col('ADUs', TYPES.map(t => [t.n, 'types'])), col('Plan', [['Permit process', 'process'], ['Cost calculator', 'calculator'], ['$0 down financing', 'calculator'], ['FAQ', 'faq']]), col('More', [['Kitchen Remodeling', 'services'], ['Bathroom Remodeling', 'services'], ['Room Additions', 'services'], ['Reviews', 'reviews']]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      marginBottom: 22,
      color: 'rgba(255,255,255,.5)'
    }
  }, "Visit"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 300,
      lineHeight: 1.7
    }
  }, "16000 Ventura Blvd Ste 900", /*#__PURE__*/React.createElement("br", null), "Encino, CA 91436"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 300,
      lineHeight: 1.7,
      marginTop: 14
    }
  }, "215 N Marengo Ave Ste 2091", /*#__PURE__*/React.createElement("br", null), "Pasadena, CA 91101"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 22
    }
  }, ['instagram', 'facebook', 'map-pin'].map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 18,
    color: "#fff"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16,
      marginTop: 80,
      paddingTop: 24,
      borderTop: '1px solid rgba(255,255,255,.12)',
      fontSize: 12,
      fontWeight: 300,
      color: 'rgba(255,255,255,.55)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Pacific West Home Builders \xA9 2026 \xB7 License #1111181"), /*#__PURE__*/React.createElement("span", null, "(888) 398-4499 \xB7 info@pwhbuilders.com")));
}
Object.assign(window, {
  Gallery,
  OtherServices,
  Reviews,
  FAQ,
  Contact,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v5/MoreV5.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v5/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v5/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/website-v6/HeroV6.jsx
try { (() => {
const SLIDES = [{
  src: IMG + 'build/00-completed-adu-hero.png',
  room: 'Detached ADU',
  pos: 'center 60%'
}, {
  src: IMG + 'gallery/06.png',
  room: 'Kitchen',
  pos: 'center 55%'
}, {
  src: IMG + 'gallery/02.png',
  room: 'Backyard ADU',
  pos: 'center 50%'
}, {
  src: IMG + 'gallery/03.jpg',
  room: 'Bathroom',
  pos: 'center 45%'
}];
function Header({
  onQuote
}) {
  const [solid, setSolid] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  useFrame(() => setSolid(scrollY > innerHeight * .85));
  const fg = solid ? 'var(--pw-ink)' : '#fff';
  const links = [['ADU Types', 'services'], ['Process', 'process'], ['Projects', 'portfolio'], ['Other services', 'other'], ['Contact', 'contact']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 40,
      background: solid ? 'rgba(255,255,255,.96)' : 'transparent',
      backdropFilter: solid ? 'blur(10px)' : 'none',
      borderBottom: '1px solid ' + (solid ? 'var(--border-hairline)' : 'rgba(255,255,255,.18)'),
      transition: 'background .5s var(--ease-out),border-color .5s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `0 ${PAD}`,
      height: solid ? 76 : 96,
      display: 'flex',
      alignItems: 'center',
      gap: 40,
      transition: 'height .5s var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top"
  }, /*#__PURE__*/React.createElement(PW.Logo, {
    tone: solid ? 'dark' : 'light',
    basePath: "../../",
    height: solid ? 44 : 56,
    style: {
      transition: 'height .5s'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    className: "pw-nav",
    style: {
      display: 'flex',
      gap: 36,
      marginLeft: 'auto'
    }
  }, links.map(([l, id]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + id,
    style: {
      color: fg,
      fontSize: 13,
      fontWeight: 400,
      letterSpacing: '.08em',
      transition: 'color .4s'
    }
  }, l))), /*#__PURE__*/React.createElement("a", {
    className: "pw-phone",
    href: "tel:8883984499",
    style: {
      color: fg,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 13,
      letterSpacing: '.06em',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 15,
    color: RED
  }), "(888) 398-4499"), /*#__PURE__*/React.createElement("button", {
    onClick: onQuote,
    style: {
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
    }
  }, "Start your ADU ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  }))));
}
function Hero() {
  const [i, setI] = React.useState(0);
  const [m, setM] = React.useState({
    x: .5,
    y: .5
  });
  const t = React.useRef();
  React.useEffect(() => {
    t.current = setTimeout(() => setI((i + 1) % SLIDES.length), 6500);
    return () => clearTimeout(t.current);
  }, [i]);
  const [sy, setSy] = React.useState(0);
  useFrame(() => setSy(Math.min(scrollY, innerHeight)));
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    onMouseMove: e => setM({
      x: e.clientX / innerWidth,
      y: e.clientY / innerHeight
    }),
    style: {
      position: 'relative',
      height: '100vh',
      minHeight: 640,
      overflow: 'hidden',
      background: '#111',
      color: '#fff'
    }
  }, SLIDES.map((s, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      position: 'absolute',
      inset: '-3%',
      opacity: k === i ? 1 : 0,
      transition: 'opacity 1.6s var(--ease-inout)',
      transform: `translate3d(${(m.x - .5) * -28}px,${(m.y - .5) * -18 + sy * .35}px,0)`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: s.src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: s.pos,
      transform: k === i ? 'scale(1)' : 'scale(1.1)',
      transition: k === i ? 'transform 8s linear' : 'transform 1.6s'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(0,0,0,.35) 0%,rgba(0,0,0,.1) 35%,rgba(0,0,0,.55) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: PAD,
      right: PAD,
      bottom: 'clamp(48px,9vh,110px)',
      display: 'flex',
      alignItems: 'flex-end',
      gap: 40,
      flexWrap: 'wrap',
      opacity: Math.max(0, 1 - sy / (innerHeight || 1) * 1.4),
      transform: `translateY(${sy * -.15}px)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 600px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '.3em',
      textTransform: 'uppercase',
      marginBottom: 28,
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: '#fff'
    }
  }), "ADU builders \xB7 Southern California"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontWeight: 200,
      fontSize: 'clamp(48px,7.4vw,136px)',
      lineHeight: .96,
      letterSpacing: '-0.03em'
    }
  }, "Your ADU,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontStyle: 'italic',
      fontWeight: 400
    }
  }, "built start to finish."))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 1 380px',
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 17,
      lineHeight: 1.65,
      color: 'rgba(255,255,255,.88)'
    }
  }, "Detached ADUs, garage conversions, JADUs and second-story units. Design, permits and construction under one roof."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, SLIDES.map((s, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setI(k),
    style: {
      flex: 1,
      background: 'none',
      border: 'none',
      padding: '10px 0 0',
      cursor: 'pointer',
      textAlign: 'left',
      color: '#fff',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(255,255,255,.3)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    key: i + '-' + k,
    style: {
      position: 'absolute',
      inset: 0,
      background: '#fff',
      transformOrigin: 'left',
      transform: k === i ? 'scaleX(1)' : 'scaleX(0)',
      transition: k === i ? 'transform 6.5s linear' : 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      marginTop: 12,
      opacity: k === i ? 1 : .55,
      transition: 'opacity .4s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: k === i ? '#fff' : 'inherit',
      marginRight: 6
    }
  }, "0", k + 1), s.room)))))), /*#__PURE__*/React.createElement("a", {
    href: "#about",
    style: {
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
      opacity: .8
    }
  }, "SCROLL", /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 36,
      background: 'linear-gradient(#fff,transparent)'
    }
  })));
}
Object.assign(window, {
  Header,
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v6/HeroV6.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v6/MotionV6.jsx
try { (() => {
const PW = window.PacificWestDesignSystem_179d0a;
const STK = '../../assets/imagery/stock/';
const IMG = '../../assets/imagery/';
const RED = 'var(--pw-red)';
const PAD = 'clamp(20px,4vw,72px)';
const scrollSubs = new Set();
let rafOn = false;
function tick() {
  rafOn = false;
  scrollSubs.forEach(f => f());
}
function onScroll() {
  if (!rafOn) {
    rafOn = true;
    requestAnimationFrame(tick);
  }
}
window.addEventListener('scroll', onScroll, {
  passive: true
});
window.addEventListener('resize', onScroll);
function useFrame(fn) {
  React.useEffect(() => {
    scrollSubs.add(fn);
    fn();
    return () => scrollSubs.delete(fn);
  }, []);
}
function Icon({
  name,
  size = 22,
  color = 'currentColor',
  style
}) {
  const u = 'https://unpkg.com/lucide-static@0.460.0/icons/' + name + '.svg';
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      background: color,
      WebkitMask: 'url(' + u + ') center/contain no-repeat',
      mask: 'url(' + u + ') center/contain no-repeat',
      flex: 'none',
      ...style
    }
  });
}
function Arrow({
  size = 18,
  color = RED,
  style
}) {
  return /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: size,
    color: color,
    style: style
  });
}
function Reveal({
  children,
  delay = 0,
  y = 40,
  style,
  as = 'div'
}) {
  const r = React.useRef();
  const [v, setV] = React.useState(false);
  React.useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setV(true);
        io.disconnect();
      }
    }, {
      threshold: .15
    });
    io.observe(r.current);
    return () => io.disconnect();
  }, []);
  const T = as;
  return /*#__PURE__*/React.createElement(T, {
    ref: r,
    style: {
      opacity: v ? 1 : 0,
      transform: v ? 'none' : `translateY(${y}px)`,
      transition: `opacity 1s var(--ease-out) ${delay}ms,transform 1.1s var(--ease-out) ${delay}ms`,
      ...style
    }
  }, children);
}
function Parallax({
  src,
  speed = .18,
  style,
  imgStyle,
  reveal = true
}) {
  const box = React.useRef();
  const img = React.useRef();
  const [v, setV] = React.useState(!reveal);
  useFrame(() => {
    const el = box.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const vh = innerHeight;
    if (r.bottom < 0 || r.top > vh) return;
    const off = (r.top + r.height / 2 - vh / 2) * speed;
    img.current.style.transform = `translate3d(0,${off}px,0) scale(1.18)`;
  });
  React.useEffect(() => {
    if (!reveal) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setV(true);
        io.disconnect();
      }
    }, {
      threshold: .1
    });
    io.observe(box.current);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: box,
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--pw-stone-100)',
      clipPath: v ? 'inset(0 0 0 0)' : 'inset(12% 0 12% 0)',
      transition: 'clip-path 1.4s var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    ref: img,
    src: src,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      willChange: 'transform',
      ...imgStyle
    }
  }));
}
function Title({
  a,
  b,
  c,
  size = 'clamp(40px,5.4vw,92px)',
  align = 'left',
  color = 'var(--pw-ink)',
  style
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
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
    }
  }, a, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontStyle: 'italic',
      fontWeight: 400,
      color: RED,
      letterSpacing: '-0.01em'
    }
  }, b), c ? ' ' + c : '');
}
function Eyebrow({
  children,
  color = 'var(--pw-ink)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: RED
    }
  }), children);
}
Object.assign(window, {
  PW,
  STK,
  IMG,
  RED,
  PAD,
  useFrame,
  Icon,
  Arrow,
  Reveal,
  Parallax,
  Title,
  Eyebrow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v6/MotionV6.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v6/Sections2V6.jsx
try { (() => {
const WORK = [['gallery/01.png', 'Detached ADU', 'Backyard ADU', 52], ['gallery/06.png', 'Kitchen', 'ADU interior', 40], ['gallery/03.jpg', 'Bathroom', 'ADU interior', 26], ['gallery/02.png', 'Detached ADU', 'Aerial view', 52], ['gallery/04.png', 'Kitchen', 'ADU interior', 40], ['gallery/14.png', 'Bathroom', 'ADU interior', 26], ['gallery/08.png', 'ADU entry', 'Backyard ADU', 42]];
function Portfolio() {
  const wrap = React.useRef();
  const track = React.useRef();
  const [prog, setProg] = React.useState(0);
  useFrame(() => {
    const w = wrap.current,
      t = track.current;
    if (!w || !t) return;
    const r = w.getBoundingClientRect();
    const total = w.offsetHeight - innerHeight;
    const p = Math.min(1, Math.max(0, -r.top / total));
    const dist = t.scrollWidth - innerWidth;
    t.style.transform = `translate3d(${-p * dist}px,0,0)`;
    setProg(p);
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "portfolio",
    ref: wrap,
    style: {
      height: '340vh',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `0 ${PAD}`,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 32,
      flexWrap: 'wrap',
      marginBottom: '5vh'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Projects"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Title, {
    a: "ADUs we\u2019ve",
    b: "built.",
    size: "clamp(34px,4vw,68px)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      fontSize: 12,
      letterSpacing: '.14em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "01"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 160,
      height: 1,
      background: 'var(--border-hairline)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: prog * 100 + '%',
      background: RED
    }
  })), /*#__PURE__*/React.createElement("span", null, "0", WORK.length))), /*#__PURE__*/React.createElement("div", {
    ref: track,
    style: {
      display: 'flex',
      gap: '1.6vw',
      padding: `0 ${PAD}`,
      willChange: 'transform',
      alignItems: 'flex-end'
    }
  }, WORK.map(([img, t, m, w], k) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#contact",
    style: {
      flex: `0 0 ${w}vw`,
      color: 'var(--pw-ink)'
    },
    onMouseEnter: e => e.currentTarget.querySelector('img').style.transform = 'scale(1.06)',
    onMouseLeave: e => e.currentTarget.querySelector('img').style.transform = 'scale(1)'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: w < 30 ? '58vh' : '50vh',
      overflow: 'hidden',
      background: 'var(--pw-stone-100)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + img,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 1.2s var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 400
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 300,
      letterSpacing: '.08em',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, m)), /*#__PURE__*/React.createElement(Arrow, null)))))));
}
const REVIEWS = [['Pacific West Home Builders did an outstanding job on my new construction project. Shai was the guy on-site, and his professionalism and attention to detail were top-notch.', 'Nancy A.', 'New Construction', 'yelp'], ['Pacific West Home Builders made my ADU project so much easier than I expected. There were a few challenges along the way, but they handled everything smoothly and always found the right solutions.', 'Barbara J.', 'ADU', 'google'], ['They built the foundation for my ADU, and from day one, they made the whole process feel easy and stress-free.', 'Juan I.', 'ADU Foundation', 'yelp'], ['They did an amazing job on my kitchen remodel! The craftsmanship and attention to detail were top-notch, and the final result exceeded my expectations.', 'John M.', 'Kitchen Remodel', 'google']];
const SRC = {
  yelp: {
    n: 'Yelp',
    logo: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "22",
      height: "22",
      "aria-hidden": true
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#FF1A1A",
      d: "M10.5 2.3c-.9-.4-4.6.6-5.2 1.4-.2.3-.3.6-.2.9l3.9 6.7c.6 1 2 .6 2-.6V3.1c0-.4-.2-.7-.5-.8zM9.8 14.6l-4 1.2c-.5.2-.8.7-.6 1.2.3 1.2 1.5 3.1 2.6 3.7.4.2.9.1 1.2-.3l2.2-3.5c.6-1-.3-2.2-1.4-2.3zM9.4 12.5c.6-1 0-2-1.1-2.1L4.3 9.2c-.5-.1-1 .2-1.1.7-.3 1.1-.1 3.4.5 4.4.2.4.7.6 1.2.4l4-1.5c.2-.2.4-.4.5-.7zM18.8 15.9l-3.9-1.3c-1.1-.3-2 .9-1.4 1.900l2.1 3.6c.3.4.8.6 1.2.3 1-.6 2.4-2.4 2.6-3.6.1-.4-.2-.8-.6-.9zM19.6 9.6c-.5-1.1-2.2-2.8-3.300-3.2-.4-.2-.9 0-1.2.3l-2.4 3.4c-.6.9.2 2.2 1.3 2l4.1-.9c.5-.1.8-.6.7-1.1-.1-.2-.1-.4-.2-.5z"
    }))
  },
  google: {
    n: 'Google',
    logo: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "20",
      height: "20",
      "aria-hidden": true
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#4285F4",
      d: "M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.7-2.4 3.6v3h3.9c2.2-2.1 3.5-5.1 3.5-8.8z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#34A853",
      d: "M12 24c3.2 0 6-1.1 8-2.9l-3.9-3c-1.1.7-2.500 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3.1C3.3 21.3 7.3 24 12 24z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FBBC05",
      d: "M5.3 14.3c-.2-.7-.4-1.5-.4-2.3s.1-1.6.4-2.3V6.6H1.3C.5 8.2 0 10.1 0 12s.5 3.800 1.3 5.4l4-3.1z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA4335",
      d: "M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4C18 1.2 15.2 0 12 0 7.3 0 3.3 2.700 1.3 6.6l4 3.1c.9-2.8 3.6-4.9 6.7-4.9z"
    }))
  }
};
function Reviews() {
  const [i, setI] = React.useState(0);
  const r = REVIEWS[i];
  React.useEffect(() => {
    const t = setTimeout(() => setI((i + 1) % REVIEWS.length), 7000);
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
  return /*#__PURE__*/React.createElement("section", {
    id: "reviews",
    style: sec({
      display: 'flex',
      flexWrap: 'wrap',
      gap: '48px 80px',
      alignItems: 'flex-start'
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 300px'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Reviews")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100,
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Title, {
    a: "Words from our",
    b: "clients.",
    size: "clamp(34px,3.6vw,60px)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: btn,
    onClick: () => nav(-1)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 18,
    color: RED
  })), /*#__PURE__*/React.createElement("button", {
    style: btn,
    onClick: () => nav(1)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 18,
    color: RED
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '2 1 520px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      animation: 'pwFade .9s var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, [0, 1, 2, 3, 4].map(s => /*#__PURE__*/React.createElement(Icon, {
    key: s,
    name: "star",
    size: 16,
    color: RED
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 16px',
      border: '1px solid var(--border-hairline)',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '.14em',
      textTransform: 'uppercase'
    }
  }, SRC[r[3]].logo, /*#__PURE__*/React.createElement("span", null, SRC[r[3]].n, " review"))), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 'clamp(24px,2.4vw,40px)',
      lineHeight: 1.35,
      letterSpacing: '-0.01em',
      textWrap: 'pretty'
    }
  }, "\u201C", r[0], "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      fontSize: 13,
      letterSpacing: '.14em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: RED
    }
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 500
    }
  }, r[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300,
      color: 'var(--text-muted)'
    }
  }, r[2]))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 56
    }
  }, REVIEWS.map((_, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    onClick: () => setI(k),
    style: {
      cursor: 'pointer',
      height: 2,
      flex: 1,
      background: k === i ? 'var(--pw-ink)' : 'var(--border-hairline)',
      transition: 'background .4s'
    }
  })))));
}
const SERVICE_OPTS = ['Detached ADU', 'Attached ADU', 'Garage Conversion', 'JADU', 'Second-story ADU', 'Not sure yet', 'Kitchen / Bath Remodel', 'Room Addition', 'Other'];
function Contact({
  formRef
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,480px),1fr))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '90vh',
      color: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Parallax, {
    src: IMG + 'contact-kitchen.png',
    speed: .2,
    reveal: false,
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,.45)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: PAD,
      right: PAD,
      bottom: PAD
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "#fff"
  }, "Free site visit"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Title, {
    color: "#fff",
    a: "Let\u2019s see what your lot can",
    b: "hold.",
    size: "clamp(36px,4.2vw,72px)"
  })), /*#__PURE__*/React.createElement("a", {
    href: "tel:8883984499",
    style: {
      display: 'inline-flex',
      gap: 14,
      alignItems: 'center',
      marginTop: 40,
      color: '#fff',
      fontSize: 22,
      fontWeight: 300
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 20,
    color: "#fff"
  }), "(888) 398-4499"))), /*#__PURE__*/React.createElement("div", {
    ref: formRef,
    style: {
      padding: `clamp(56px,7vw,112px) ${PAD}`,
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Start your ADU"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 44px',
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--text-secondary)',
      maxWidth: 440
    }
  }, "Give us more information about your project, and a specialist will contact you to discuss it."), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 0'
    }
  }, /*#__PURE__*/React.createElement(Title, {
    a: "Thank",
    b: "you.",
    size: "56px"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 300,
      color: 'var(--text-secondary)',
      marginTop: 20
    }
  }, "A specialist will contact you shortly.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(PW.TextField, {
    label: "Full name",
    placeholder: "Jane Doe",
    required: true
  }), /*#__PURE__*/React.createElement(PW.TextField, {
    label: "Phone",
    type: "tel",
    placeholder: "(000) 000-0000",
    required: true
  }), /*#__PURE__*/React.createElement(PW.TextField, {
    label: "Email",
    type: "email",
    placeholder: "you@email.com",
    style: {
      gridColumn: '1/-1'
    }
  }), /*#__PURE__*/React.createElement(PW.SelectField, {
    label: "Project type",
    options: SERVICE_OPTS,
    style: {
      gridColumn: '1/-1'
    }
  }), /*#__PURE__*/React.createElement(PW.TextField, {
    label: "Project details",
    multiline: true,
    rows: 3,
    style: {
      gridColumn: '1/-1'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1/-1',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 20,
      flexWrap: 'wrap',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(PW.Checkbox, {
    defaultChecked: true,
    label: "I agree to be contacted about my project."
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      padding: '18px 30px',
      background: 'var(--pw-ink)',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, "Send request ", /*#__PURE__*/React.createElement(Arrow, {
    size: 16,
    color: "#fff"
  }))))));
}
function Footer() {
  const col = (t, items) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      marginBottom: 22,
      color: 'var(--text-muted)'
    }
  }, t), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#services",
    style: {
      display: 'block',
      fontSize: 14,
      fontWeight: 300,
      marginBottom: 12
    }
  }, i)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: `clamp(72px,8vw,120px) ${PAD} 32px`,
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PW.Logo, {
    basePath: "../../",
    height: 64
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 1.7,
      color: 'var(--text-secondary)',
      marginTop: 24,
      maxWidth: 280
    }
  }, "ADU design, permits and construction across Southern California.")), col('ADUs', ['Detached ADU', 'Attached ADU', 'Garage Conversion', 'JADU', 'Second-story ADU']), col('Remodeling', ['Kitchen Remodeling', 'Bathroom Remodeling', 'Bedroom Remodeling', 'Garage Remodeling']), col('More', ['Room Additions', 'Landscaping Services']), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      marginBottom: 22,
      color: 'var(--text-muted)'
    }
  }, "Visit"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 300,
      lineHeight: 1.7
    }
  }, "16000 Ventura Blvd Ste 900", /*#__PURE__*/React.createElement("br", null), "Encino, CA 91436"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 300,
      lineHeight: 1.7,
      marginTop: 14
    }
  }, "215 N Marengo Ave Ste 2091", /*#__PURE__*/React.createElement("br", null), "Pasadena, CA 91101"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 22
    }
  }, ['instagram', 'facebook', 'map-pin'].map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 18,
    color: RED
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16,
      marginTop: 80,
      paddingTop: 24,
      borderTop: '1px solid var(--border-hairline)',
      fontSize: 12,
      fontWeight: 300,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Pacific West Home Builders \xA9 2026 \xB7 License #1111181"), /*#__PURE__*/React.createElement("span", null, "(888) 398-4499 \xB7 info@pwhbuilders.com")));
}
Object.assign(window, {
  Portfolio,
  Reviews,
  Contact,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v6/Sections2V6.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v6/SectionsV6.jsx
try { (() => {
const sec = extra => ({
  padding: `clamp(80px,12vw,180px) ${PAD}`,
  ...extra
});
function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: sec({
      display: 'grid',
      gridTemplateColumns: 'repeat(12,minmax(0,1fr))',
      gap: '48px 24px',
      alignItems: 'start'
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / span 7',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "ADU specialists")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100,
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Title, {
    a: "More living space, without leaving",
    b: "home."
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200,
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 32,
      marginTop: 56,
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.8,
      color: 'var(--text-secondary)'
    }
  }, "Pacific West Home Builders designs, permits and builds accessory dwelling units across Southern California. One team handles your ADU from the first site visit to the certificate of occupancy."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.8,
      color: 'var(--text-secondary)'
    }
  }, "Whether it\u2019s a rental unit, a home for aging parents or a private studio, we plan it around how you\u2019ll use it and build it with our own crews.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 300,
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#services",
    style: {
      display: 'inline-flex',
      gap: 12,
      alignItems: 'center',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      borderBottom: '1px solid var(--pw-ink)',
      paddingBottom: 6
    }
  }, "Explore ADU types", /*#__PURE__*/React.createElement(Arrow, {
    size: 16
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '9 / span 4',
      gridRow: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Parallax, {
    src: IMG + 'gallery/05.png',
    speed: .12,
    style: {
      aspectRatio: '3/4'
    }
  }), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "ADU interior"), /*#__PURE__*/React.createElement("span", null, "Southern California"))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      gridRow: 2,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      borderTop: '1px solid var(--border-hairline)',
      marginTop: 24
    }
  }, [['pencil-ruler', 'Design', 'Tailored plans as unique as your lifestyle.'], ['file-check-2', 'Permits', 'We handle the city paperwork for you.'], ['hammer', 'Construction', 'Premium materials and meticulous techniques.'], ['key-round', 'Delivery', 'From concept to completion, stress-free.']].map(([ic, t, d], k) => /*#__PURE__*/React.createElement(Reveal, {
    key: t,
    delay: k * 90,
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'flex-start',
      padding: '36px 24px 0 0'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 28,
    color: RED
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 400
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 300,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      marginTop: 6
    }
  }, d))))));
}
const SERVICES = [{
  n: 'Detached ADU',
  d: 'A freestanding home in your backyard with its own entry, kitchen and bath. Up to 1,200 sq ft.',
  img: 'types/detached-adu.jpg'
}, {
  n: 'Attached ADU',
  d: 'An addition with its own front door, built onto the side or rear of your home.',
  img: 'types/attached-adu.jpg'
}, {
  n: 'Garage Conversion',
  d: 'Turn an existing garage into a full living unit, often the fastest path to an ADU.',
  img: 'types/garage-conversion.jpg'
}, {
  n: 'JADU',
  d: 'A junior ADU of up to 500 sq ft inside your existing home, with its own entrance.',
  img: 'types/jadu.jpg'
}, {
  n: 'Second-story ADU',
  d: 'Build up above the garage or home and keep your yard.',
  img: 'types/second-story-adu.jpg'
}];
const OTHER = [['Kitchen Remodeling', 's05.jpg'], ['Bathroom Remodeling', 's19.jpg'], ['Bedroom Remodeling', 's15.jpg'], ['Room Additions', 's16.jpg'], ['Garage Remodeling', 's17.jpg'], ['Landscaping', 's18.jpg']];
function OtherServices() {
  const [h, setH] = React.useState(-1);
  return /*#__PURE__*/React.createElement("section", {
    id: "other",
    style: {
      padding: `clamp(72px,8vw,120px) ${PAD}`,
      borderTop: '1px solid var(--border-hairline)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,360px),1fr))',
      gap: '40px 80px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Also building")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100,
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Title, {
    a: "Remodels &",
    b: "additions.",
    size: "clamp(30px,3vw,52px)"
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 0',
      maxWidth: 380,
      fontWeight: 300,
      fontSize: 15,
      lineHeight: 1.7,
      color: 'var(--text-secondary)'
    }
  }, "The same team and standards, for the rest of your home."))), /*#__PURE__*/React.createElement("div", {
    onMouseLeave: () => setH(-1),
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      columnGap: 32,
      borderTop: '1px solid var(--pw-ink)'
    }
  }, OTHER.map(([n, img], k) => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#contact",
    onMouseEnter: () => setH(k),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '18px 0',
      borderBottom: '1px solid var(--border-hairline)',
      color: 'var(--pw-ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 42,
      overflow: 'hidden',
      flex: 'none',
      background: 'var(--pw-stone-100)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: STK + img,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: h === k ? 'none' : 'grayscale(1)',
      transition: 'filter .4s'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 16,
      fontWeight: 300
    }
  }, n), /*#__PURE__*/React.createElement(Arrow, {
    size: 16,
    color: h === k ? RED : 'var(--pw-stone-300)'
  })))));
}
function Services() {
  const [h, setH] = React.useState(-1);
  const [m, setM] = React.useState({
    x: .5,
    y: .5
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: sec({
      background: 'var(--pw-stone-50)',
      paddingBottom: 0
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 40,
      flexWrap: 'wrap',
      marginBottom: 72
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "ADU types")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100,
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Title, {
    a: "Five ways to add a",
    b: "home."
  }))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 380,
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--text-secondary)'
    }
  }, "Not sure which fits your lot? We confirm setbacks, utilities and zoning in a free site visit."))), /*#__PURE__*/React.createElement("div", {
    onMouseLeave: () => setH(-1),
    style: {
      margin: `0 calc(-1 * ${PAD})`,
      borderTop: '1px solid var(--pw-ink)'
    }
  }, SERVICES.map((s, k) => {
    const on = h === k;
    return /*#__PURE__*/React.createElement(Reveal, {
      key: k,
      delay: k * 60,
      y: 24
    }, /*#__PURE__*/React.createElement("a", {
      href: "#contact",
      onMouseEnter: () => setH(k),
      onMouseMove: e => {
        const r = e.currentTarget.getBoundingClientRect();
        setM({
          x: (e.clientX - r.left) / r.width,
          y: (e.clientY - r.top) / r.height
        });
      },
      style: {
        position: 'relative',
        display: 'block',
        overflow: 'hidden',
        height: on ? 'min(62vh,560px)' : 'clamp(96px,9vw,128px)',
        borderBottom: '1px solid ' + (on ? 'transparent' : 'var(--border-hairline)'),
        color: on ? '#fff' : 'var(--pw-ink)',
        transition: 'height .9s var(--ease-inout),color .5s'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        opacity: on ? 1 : 0,
        transition: 'opacity .7s var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: IMG + s.img,
      alt: "",
      style: {
        position: 'absolute',
        inset: '-4%',
        width: '108%',
        height: '108%',
        objectFit: 'cover',
        transform: `translate3d(${(m.x - .5) * -24}px,${(m.y - .5) * -16}px,0) scale(${on ? 1 : 1.12})`,
        transition: 'transform 1.4s var(--ease-out)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg,rgba(0,0,0,.25) 0%,rgba(0,0,0,.6) 100%)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        height: '100%',
        padding: `0 ${PAD}`,
        display: 'grid',
        gridTemplateColumns: '60px minmax(0,1fr) minmax(0,1fr) 40px',
        gap: 24,
        alignItems: on ? 'end' : 'center',
        paddingBottom: on ? 'clamp(32px,4vw,56px)' : 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        letterSpacing: '.12em',
        color: on ? '#fff' : 'var(--text-muted)',
        transition: 'color .4s'
      }
    }, String(k + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 300,
        fontSize: on ? 'clamp(36px,4.6vw,80px)' : 'clamp(26px,3.2vw,52px)',
        lineHeight: 1.05,
        letterSpacing: '-0.02em',
        transition: 'font-size .8s var(--ease-inout)'
      }
    }, s.n), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 300,
        fontSize: 15,
        lineHeight: 1.6,
        color: on ? 'rgba(255,255,255,.9)' : 'var(--text-secondary)',
        opacity: h === -1 || on ? 1 : .4,
        transition: 'opacity .4s,color .4s'
      }
    }, s.d), /*#__PURE__*/React.createElement("span", {
      style: {
        justifySelf: 'end',
        transform: on ? 'rotate(45deg)' : 'none',
        transition: 'transform .5s var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement(Arrow, {
      size: 26,
      color: on ? '#fff' : RED
    })))));
  })));
}
function PromiseBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: '110vh',
      minHeight: 640,
      color: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Parallax, {
    src: IMG + 'gallery/08.png',
    speed: .3,
    reveal: false,
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg,rgba(0,0,0,.6),rgba(0,0,0,.1))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: PAD,
      right: PAD,
      top: '50%',
      transform: 'translateY(-50%)',
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "#fff"
  }, "Our promise")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100,
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Title, {
    color: "#fff",
    a: "Excellence beyond",
    b: "expectations."
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '36px 0 0',
      maxWidth: 560,
      fontWeight: 300,
      fontSize: 17,
      lineHeight: 1.75,
      color: 'rgba(255,255,255,.9)'
    }
  }, "When you choose Pacific West Home Builders, you\u2019re not just hiring a contractor\u2014you\u2019re partnering with a team dedicated to turning your dreams into reality."))));
}
const APART = [['gem', 'Luxury-Centric Designs', 'We blend functionality and aesthetics to create timeless spaces.'], ['leaf', 'Sustainability', 'We prioritize energy-efficient solutions and environmentally friendly practices.'], ['messages-square', 'Transparent Communication', 'We keep you informed every step of the way.'], ['hammer', 'Unmatched Craftsmanship', 'Our team uses only premium materials and meticulous techniques.'], ['clipboard-check', 'Seamless Project Management', 'From concept to completion, we make the process stress-free.']];
function Apart() {
  return /*#__PURE__*/React.createElement("section", {
    style: sec()
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))',
      gap: '40px 80px',
      marginBottom: 88
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Why homeowners choose us")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100,
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Title, {
    a: "What sets us",
    b: "apart."
  }))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200,
    style: {
      alignSelf: 'end'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.75,
      color: 'var(--text-secondary)',
      maxWidth: 480
    }
  }, "We understand that your home is more than just a structure\u2014it\u2019s where life happens. That\u2019s why we go above and beyond to ensure every detail is perfect."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, APART.map(([ic, t, d], k) => /*#__PURE__*/React.createElement(Reveal, {
    key: t,
    delay: k * 90,
    style: {
      padding: '44px 28px 12px 0',
      borderRight: k < 4 ? '1px solid var(--border-hairline)' : 'none',
      paddingLeft: k ? 28 : 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 34,
    color: RED
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 400,
      margin: '32px 0 12px'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 1.7,
      color: 'var(--text-secondary)'
    }
  }, d)))));
}
const STEPS = [['Site visit & plans', 'We review your property, confirm what can be built and draw concept plans.', 'build/01-property-review.jpg'], ['Permits & construction', 'We take the plans through city plan check, then our crews build the foundation, framing and finishes.', 'build/04-framing.jpg'], ['Move-in', 'Final inspection, certificate of occupancy and a walkthrough before handover.', 'build/08-completed.jpg']];
function Process() {
  const [a, setA] = React.useState(0);
  const refs = [React.useRef(), React.useRef(), React.useRef()];
  useFrame(() => {
    let best = 0;
    refs.forEach((r, k) => {
      if (r.current && r.current.getBoundingClientRect().top < innerHeight * .55) best = k;
    });
    setA(best);
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "process",
    style: {
      background: 'var(--pw-black)',
      color: '#fff',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,460px),1fr))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pw-proc-img",
    style: {
      position: 'sticky',
      top: 0,
      height: '100vh',
      overflow: 'hidden'
    }
  }, STEPS.map((s, k) => /*#__PURE__*/React.createElement("img", {
    key: k,
    src: IMG + s[2],
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: a === k ? 1 : 0,
      transform: a === k ? 'scale(1)' : 'scale(1.08)',
      transition: 'opacity 1s var(--ease-out),transform 1.6s var(--ease-out)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `clamp(80px,12vw,160px) ${PAD}`,
      background: 'var(--pw-black)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "#fff"
  }, "Discover the Pacific West difference")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100,
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Title, {
    color: "#fff",
    a: "From backyard to",
    b: "move-in.",
    size: "clamp(36px,4.4vw,76px)"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '32px 0 0',
      maxWidth: 460,
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.75,
      color: 'rgba(255,255,255,.72)'
    }
  }, "Design, engineering, permits and construction are handled by one team, so you have one point of contact from the first visit to the keys."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '14vh'
    }
  }, STEPS.map((s, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    ref: refs[k],
    style: {
      minHeight: '46vh',
      borderTop: '1px solid rgba(255,255,255,' + (a === k ? '.9' : '.18') + ')',
      paddingTop: 32,
      transition: 'border-color .6s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontStyle: 'italic',
      fontSize: 28,
      color: a === k ? '#E5524F' : 'rgba(255,255,255,.4)',
      transition: 'color .6s'
    }
  }, "0", k + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 300,
      fontSize: 'clamp(30px,3vw,48px)',
      margin: '14px 0 16px',
      opacity: a === k ? 1 : .4,
      transition: 'opacity .6s'
    }
  }, s[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.7,
      color: 'rgba(255,255,255,.72)',
      maxWidth: 380,
      opacity: a === k ? 1 : .4,
      transition: 'opacity .6s'
    }
  }, s[1]))))));
}
Object.assign(window, {
  OtherServices,
  About,
  Services,
  PromiseBand,
  Apart,
  Process
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v6/SectionsV6.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
function Contact() {
  const row = (ic, t, v) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      padding: '22px 0',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pw-red)',
      paddingTop: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 300,
      marginTop: 6,
      lineHeight: 1.6,
      color: 'var(--text-secondary)'
    }
  }, v)));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 0 120px'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,360px),1fr))',
      gap: '48px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NSW.SectionHeading, {
    eyebrow: "Contact",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Let\u2019s ", /*#__PURE__*/React.createElement("em", null, "Talk")),
    lead: "Schedule a consultation and share your vision with us."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, row('phone', 'Call us now', '(888) 398-4499'), row('mail', 'Email', 'info@pwhbuilders.com'), row('map-pin', 'Our Address', /*#__PURE__*/React.createElement(React.Fragment, null, "16000 Ventura Blvd Ste 900, Encino, CA 91436", /*#__PURE__*/React.createElement("br", null), "215 N Marengo Ave Ste 2091, Pasadena, CA 91101")), row('badge-check', 'License', '#1111181'))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-alt)',
      padding: 'clamp(24px,4vw,48px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 40,
      fontWeight: 500
    }
  }, "Get a Free Quote"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 300,
      fontSize: 15,
      color: 'var(--text-secondary)',
      margin: '8px 0 32px',
      lineHeight: 1.6
    }
  }, "Give us more information about your project, and a specialist will contact you to discuss it."), /*#__PURE__*/React.createElement(QuoteForm, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(NSW.Checkbox, {
    defaultChecked: true,
    label: "I agree to be contacted by Pacific West Home Builders about my project."
  })))));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Gallery.jsx
try { (() => {
function Gallery({
  go
}) {
  const items = [[PHOTOS.exterior, 'Detached ADU', 'Rancho Cucamonga, CA', 'ADU'], [PHOTOS.kitchenTaupe, 'Detached ADU', 'Rancho Cucamonga, CA', 'ADU'], [PHOTOS.kitchenGreen, 'ADU', 'Los Angeles, CA', 'ADU'], [PHOTOS.garage, 'Garage Conversion', 'Encino, CA', 'Garage'], [PHOTOS.kitchenWhite, 'Kitchen Remodel', 'Pasadena, CA', 'Kitchen'], [PHOTOS.dining, 'Kitchen Addition', 'Woodland Hills, CA', 'Kitchen']];
  const [f, setF] = React.useState('All');
  const [open, setOpen] = React.useState(null);
  const shown = items.filter(i => f === 'All' || i[3] === f);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 0 48px'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(NSW.SectionHeading, {
    eyebrow: "Our Portfolio",
    title: "Inspired by You, Built by Us",
    lead: "Explore our gallery to see how we\u2019ve transformed homes across Los Angeles. From luxurious bathroom retreats to cutting-edge kitchens and awe-inspiring custom builds, our work speaks for itself."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      marginTop: 48,
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, ['All', 'ADU', 'Kitchen', 'Garage'].map(k => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#",
    onClick: e => {
      e.preventDefault();
      setF(k);
    },
    style: {
      padding: '0 0 14px',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: f === k ? 'var(--text-primary)' : 'var(--text-muted)',
      borderBottom: '1px solid ' + (f === k ? 'var(--pw-red)' : 'transparent'),
      marginBottom: -1
    }
  }, k))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 0 120px'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,280px),1fr))',
      gap: 16
    }
  }, shown.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => setOpen(it),
    style: {
      position: 'relative',
      aspectRatio: '4/5',
      background: 'url(' + it[0] + ') center/cover',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,transparent 40%,rgba(0,0,0,.6))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16
    }
  }, /*#__PURE__*/React.createElement(NSW.Tag, {
    variant: "glass"
  }, it[3])), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 24,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 30
    }
  }, it[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      marginTop: 6
    }
  }, it[2])))))), open && /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(null),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      background: 'rgba(0,0,0,.88)',
      display: 'grid',
      placeItems: 'center',
      padding: 48,
      cursor: 'zoom-out'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 720,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: open[0],
    style: {
      width: '100%',
      maxHeight: '80vh',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      color: '#fff',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 26
    }
  }, open[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      alignSelf: 'center'
    }
  }, open[2])))), /*#__PURE__*/React.createElement(CtaBand, {
    go: go
  }));
}
window.Gallery = Gallery;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Gallery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function Home({
  go
}) {
  const services = [[PHOTOS.kitchenWhite, 'Kitchen Remodeling', 'Transform your kitchen into a masterpiece where style meets practicality.'], [PHOTOS.kitchenGreen, 'Guest Houses & ADUs', 'Unlock your property’s potential with custom-built accessory dwelling units (ADUs) and guest houses.'], [PHOTOS.garage, 'Garage Remodeling', 'Optimize space and style with custom designs tailored to your needs.'], [PHOTOS.dining, 'Kitchen Additions', 'Expand your culinary domain with style and sophistication.'], [PHOTOS.exterior, 'Bedroom Addition', 'Create the perfect sanctuary for rest and relaxation.'], [PHOTOS.pendant, 'Bathroom Remodeling', 'Indulge in spa-like serenity with elegant upgrades and modern functionality.']];
  const apart = [['gem', 'Luxury-Centric Designs', 'We blend functionality and aesthetics to create timeless spaces.'], ['leaf', 'Sustainability', 'We prioritize energy-efficient solutions and environmentally friendly practices.'], ['messages-square', 'Transparent Communication', 'We keep you informed every step of the way.'], ['hammer', 'Unmatched Craftsmanship', 'Our team uses only premium materials and meticulous techniques.'], ['clipboard-list', 'Seamless Project Management', 'From concept to completion, we make the process stress-free.']];
  const reviews = [['Pacific West Home Builders made my ADU project so much easier than I expected. The team was professional, reliable, and really cared about getting things done right.', 'Barbara J.', 'ADU'], ['They did an amazing job on my kitchen remodel! The craftsmanship and attention to detail were top-notch, and the final result exceeded my expectations.', 'John M.', 'Kitchen Remodel'], ['Pacific West Home Builders did an outstanding job on my new construction project. The entire team was skilled, efficient, and dedicated to delivering quality work.', 'Nancy A.', 'New Construction']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 760,
      background: 'url(' + PHOTOS.kitchenWhite + ') center 60%/cover',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg,rgba(0,0,0,.62) 0%,rgba(0,0,0,.35) 60%,rgba(0,0,0,.2) 100%)'
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: 'relative',
      paddingTop: 200,
      paddingBottom: 96,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,400px),1fr))',
      gap: 64,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase'
    }
  }, "Welcome to Pacific West Home Builders"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontWeight: 400,
      fontSize: 'clamp(48px,6vw,84px)',
      lineHeight: 1,
      margin: '22px 0 26px',
      textWrap: 'balance'
    }
  }, "Where Your Vision Becomes Our ", /*#__PURE__*/React.createElement("em", null, "Masterpiece")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 300,
      fontSize: 18,
      lineHeight: 1.6,
      maxWidth: 520,
      margin: 0,
      color: 'rgba(255,255,255,.9)'
    }
  }, "Building Luxury That Lasts a Lifetime."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14,
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(NSW.Button, {
    onClick: () => go('contact')
  }, "Book Now"), /*#__PURE__*/React.createElement(NSW.Button, {
    variant: "light",
    onClick: () => go('gallery')
  }, "View Portfolio"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      color: 'var(--text-primary)',
      padding: 36,
      boxShadow: 'var(--shadow-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 34,
      fontWeight: 500
    }
  }, "Get a Free Quote"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 300,
      fontSize: 14,
      color: 'var(--text-secondary)',
      margin: '6px 0 22px',
      lineHeight: 1.6
    }
  }, "Give us more information about your project, and a specialist will contact you to discuss it."), /*#__PURE__*/React.createElement(QuoteForm, {
    compact: true
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '120px 0'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,380px),1fr))',
      gap: '40px 80px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(NSW.SectionHeading, {
    eyebrow: "About us",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Building More Than Homes. Crafting Timeless Masterpieces in ", /*#__PURE__*/React.createElement("em", null, "Los Angeles"))
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 300,
      fontSize: 17,
      lineHeight: 1.75,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "At Pacific West Home Builders, we are redefining luxury construction. With decades of expertise and a passion for perfection, we bring your vision to life by combining artistry, innovation, and superior craftsmanship. From sophisticated remodels to breathtaking new structures, we specialize in creating extraordinary spaces that reflect your unique style and elevate your living experience."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(NSW.Button, {
    variant: "link",
    onClick: () => go('services')
  }, "View More \u2192"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 0 120px'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 24,
      alignItems: 'end',
      justifyContent: 'space-between',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(NSW.SectionHeading, {
    eyebrow: "What we do",
    title: "Our Services"
  }), /*#__PURE__*/React.createElement(NSW.Button, {
    variant: "outline",
    iconRight: "\u2192",
    onClick: () => go('services')
  }, "View All Services")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,280px),1fr))',
      gap: '56px 32px'
    }
  }, services.map(([i, t, d]) => /*#__PURE__*/React.createElement(NSW.ServiceCard, {
    key: t,
    image: i,
    title: t,
    description: d,
    href: "#",
    style: {
      cursor: 'pointer'
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pw-black)',
      color: '#fff',
      padding: '120px 0'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,380px),1fr))',
      gap: '32px 80px'
    }
  }, /*#__PURE__*/React.createElement(NSW.SectionHeading, {
    tone: "light",
    eyebrow: "Our Promise",
    title: "Excellence Beyond Expectations"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 300,
      fontSize: 17,
      lineHeight: 1.75,
      color: 'rgba(255,255,255,.8)',
      margin: 0
    }
  }, "When you choose Pacific West Home Builders, you\u2019re not just hiring a contractor\u2014you\u2019re partnering with a team dedicated to turning your dreams into reality. Whether it\u2019s a luxurious bathroom oasis, a cutting-edge kitchen, or a custom-built ADU, we take pride in delivering exceptional results that exceed expectations.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
      gap: 32,
      marginTop: 80
    }
  }, apart.map(([ic, t, d]) => /*#__PURE__*/React.createElement(NSW.FeatureItem, {
    key: t,
    tone: "light",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 28
    }),
    title: t,
    text: d
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '120px 0',
      background: 'var(--surface-alt)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(NSW.SectionHeading, {
    align: "center",
    eyebrow: "Discover the Pacific West Difference",
    title: "Step Into Your Dream Home",
    lead: "Your journey toward an exceptional living space begins here. Whether you\u2019re planning a simple remodel or a complete new build, our team is ready to turn your ideas into stunning realities."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 40,
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement(NSW.FeatureItem, {
    index: "01",
    title: "Let\u2019s Talk",
    text: "Schedule a consultation and share your vision with us."
  }), /*#__PURE__*/React.createElement(NSW.FeatureItem, {
    index: "02",
    title: "Tailored Designs",
    text: "We\u2019ll create a plan that\u2019s as unique as your lifestyle."
  }), /*#__PURE__*/React.createElement(NSW.FeatureItem, {
    index: "03",
    title: "Flawless Execution",
    text: "Watch your dream home take shape with precision and care."
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '120px 0'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(NSW.SectionHeading, {
    eyebrow: "Reviews",
    title: "Why Homeowners Choose Pacific West",
    style: {
      marginBottom: 48
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))',
      gap: 24
    }
  }, reviews.map(([q, a, p]) => /*#__PURE__*/React.createElement(NSW.TestimonialCard, {
    key: a,
    quote: q,
    author: a,
    project: p
  }))))), /*#__PURE__*/React.createElement(CtaBand, {
    go: go
  }));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
function Services({
  go
}) {
  const groups = [['Remodeling Services', ['Bedroom Remodeling', 'Kitchen Remodeling', 'Bathroom Remodeling', 'Garage Remodeling']], ['Addition Services', ['Bedroom Addition', 'Kitchen Addition', 'Bathroom Additions', 'Garage Addition', 'Laundry Room Addition']], ['Other Services', ['Guest House & ADU', 'Landscaping Services']]];
  const [sel, setSel] = React.useState('Guest House & ADU');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 520,
      background: 'url(' + PHOTOS.kitchenGreen + ') center 45%/cover'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-photo)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 90
    }
  }, /*#__PURE__*/React.createElement(NSW.CoverTitle, {
    title: "Guest House & ADU",
    location: "Los Angeles, CA",
    size: 64
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 0 120px'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '40px 80px'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      flex: '1 1 240px'
    }
  }, groups.map(([g, items]) => /*#__PURE__*/React.createElement("div", {
    key: g,
    style: {
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--pw-red)',
      marginBottom: 14
    }
  }, g), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => {
      e.preventDefault();
      setSel(i);
    },
    style: {
      display: 'block',
      padding: '11px 0',
      borderBottom: '1px solid var(--border-hairline)',
      fontSize: 15,
      fontWeight: sel === i ? 500 : 300,
      color: sel === i ? 'var(--text-primary)' : 'var(--text-secondary)'
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '3 1 420px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(NSW.SectionHeading, {
    eyebrow: sel,
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Unlock your property\u2019s ", /*#__PURE__*/React.createElement("em", null, "potential")),
    lead: "Add living space and increase property value with custom-built accessory dwelling units (ADUs) and guest houses. We handle design, permits and construction from concept to completion."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(NSW.Tag, null, "Design"), /*#__PURE__*/React.createElement(NSW.Tag, null, "Permits"), /*#__PURE__*/React.createElement(NSW.Tag, null, "Construction")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
      gap: 16,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PHOTOS.dining,
    style: {
      width: '100%',
      height: 420,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PHOTOS.exterior,
    style: {
      width: '100%',
      height: 202,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: PHOTOS.kitchenTaupe,
    style: {
      width: '100%',
      height: 202,
      objectFit: 'cover'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(NSW.OfferBanner, {
    scale: 0.62
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      fontWeight: 300,
      color: 'var(--text-muted)',
      marginTop: 12
    }
  }, "*Financing subject to credit approval. Terms vary by project.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(NSW.Button, {
    onClick: () => go('contact')
  }, "Get a Free Consultation"), /*#__PURE__*/React.createElement(NSW.Button, {
    variant: "outline",
    onClick: () => go('gallery')
  }, "See ADU Projects"))))), /*#__PURE__*/React.createElement(CtaBand, {
    go: go
  }));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shell.jsx
try { (() => {
const NSW = window.PacificWestDesignSystem_179d0a;
const IMG = '../../assets/imagery/';
const C = IMG + 'clean/';
const PHOTOS = {
  kitchenWhite: C + 'kitchen-white-island.png',
  kitchenGreen: C + 'kitchen-green-cabinets.png',
  kitchenTaupe: C + 'kitchen-taupe.png',
  exterior: C + 'adu-exterior-aerial.png',
  pendant: C + 'kitchen-pendant-floor.png',
  dining: C + 'dining-oak.png',
  garage: C + 'garage-before-after.png'
};
function Icon({
  name,
  size = 18,
  style
}) {
  const u = 'https://unpkg.com/lucide-static@0.460.0/icons/' + name + '.svg';
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      background: 'currentColor',
      WebkitMask: 'url(' + u + ') center/contain no-repeat',
      mask: 'url(' + u + ') center/contain no-repeat',
      flex: 'none',
      ...style
    }
  });
}
const NAV = [['home', 'Home'], ['services', 'Services'], ['gallery', 'Gallery'], ['contact', 'Contact']];
const SERVICES = ['Bedroom Remodeling', 'Kitchen Remodeling', 'Bathroom Remodeling', 'Garage Remodeling', 'Bedroom Addition', 'Kitchen Addition', 'Bathroom Additions', 'Laundry Room Addition', 'Garage Addition', 'New Structure Construction', 'Energy Efficient', 'Guest House & ADU', 'Landscaping Services', 'Roofing Services', 'Foundation Services'];
function TopBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pw-black)',
      color: 'rgba(255,255,255,.85)',
      fontSize: 12,
      fontWeight: 300,
      letterSpacing: '.04em'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '10px 32px',
      display: 'flex',
      gap: 28,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 13
  }), "(888) 398-4499"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 13
  }), "info@pwhbuilders.com"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      fontSize: 11
    }
  }, "License #1111181"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "facebook",
    size: 14
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 14
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14
  }))));
}
function Header({
  page,
  go,
  overlay
}) {
  const c = overlay ? '#fff' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: overlay ? 'absolute' : 'relative',
      top: overlay ? 38 : 0,
      left: 0,
      right: 0,
      zIndex: 5,
      borderBottom: '1px solid ' + (overlay ? 'rgba(255,255,255,.25)' : 'var(--border-hairline)'),
      background: overlay ? 'transparent' : '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '18px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    }
  }, /*#__PURE__*/React.createElement(NSW.Logo, {
    tone: overlay ? 'light' : 'dark',
    basePath: "../../",
    height: 52
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px 28px',
      marginLeft: 'auto'
    }
  }, NAV.map(([k, l]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(k);
    },
    style: {
      color: c,
      fontSize: 13,
      fontWeight: page === k ? 500 : 300,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      paddingBottom: 4,
      borderBottom: '1px solid ' + (page === k ? overlay ? '#fff' : 'var(--pw-red)' : 'transparent')
    }
  }, l))), /*#__PURE__*/React.createElement(NSW.Button, {
    size: "sm",
    onClick: () => go('contact')
  }, "Book Now")));
}
function Footer({
  go
}) {
  const col = (t, items) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      marginBottom: 18,
      color: '#fff'
    }
  }, t), items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontSize: 14,
      fontWeight: 300,
      marginBottom: 10,
      color: 'rgba(255,255,255,.7)'
    }
  }, i)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--pw-black)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '80px 32px 40px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NSW.Logo, {
    tone: "light",
    basePath: "../../",
    height: 70
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 1.7,
      color: 'rgba(255,255,255,.7)',
      marginTop: 24,
      maxWidth: 300
    }
  }, "Pacific West Home Builders is where craftsmanship meets creativity."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 300,
      lineHeight: 1.7,
      color: 'rgba(255,255,255,.7)'
    }
  }, "16000 Ventura Blvd Ste 900, Encino, CA 91436", /*#__PURE__*/React.createElement("br", null), "215 N Marengo Ave Ste 2091, Pasadena, CA 91101")), col('Remodeling Services', ['Bedroom Remodeling', 'Kitchen Remodeling', 'Bathroom Remodeling', 'Garage Remodeling']), col('Addition Services', ['Bedroom Addition', 'Kitchen Addition', 'Bathroom Additions', 'Laundry Room Addition', 'Garage Addition']), /*#__PURE__*/React.createElement("div", null, col('Other Services', ['Guest House & ADU', 'Landscaping Services']), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(NSW.Button, {
    variant: "light",
    size: "sm",
    onClick: () => go('contact')
  }, "Book Now")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,.15)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '20px 32px',
      fontSize: 12,
      fontWeight: 300,
      color: 'rgba(255,255,255,.55)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Pacific West Home Builders. \xA9 2025. All Rights Reserved"), /*#__PURE__*/React.createElement("span", null, "(888) 398-4499 \xB7 info@pwhbuilders.com"))));
}
function QuoteForm({
  tone = 'light',
  compact
}) {
  const [sent, setSent] = React.useState(false);
  if (sent) return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 32,
      color: tone === 'dark' ? '#fff' : 'inherit'
    }
  }, "Thank you."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 300,
      color: tone === 'dark' ? 'rgba(255,255,255,.8)' : 'var(--text-secondary)'
    }
  }, "A specialist will contact you to discuss your project."));
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(NSW.TextField, {
    tone: tone,
    label: "Name",
    placeholder: "Full name",
    required: true
  }), /*#__PURE__*/React.createElement(NSW.TextField, {
    tone: tone,
    label: "Phone",
    type: "tel",
    placeholder: "(000) 000-0000",
    required: true
  }), /*#__PURE__*/React.createElement(NSW.TextField, {
    tone: tone,
    label: "Email",
    type: "email",
    placeholder: "you@email.com",
    style: {
      gridColumn: '1/-1'
    }
  }), /*#__PURE__*/React.createElement(NSW.SelectField, {
    tone: tone,
    label: "Service",
    options: SERVICES,
    style: {
      gridColumn: '1/-1'
    }
  }), !compact && /*#__PURE__*/React.createElement(NSW.TextField, {
    tone: tone,
    label: "Project details",
    multiline: true,
    rows: 3,
    style: {
      gridColumn: '1/-1'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1/-1'
    }
  }, /*#__PURE__*/React.createElement(NSW.Button, {
    type: "submit",
    fullWidth: true
  }, "Get a Free Quote")));
}
function Container({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '0 32px',
      ...style
    }
  }, children);
}
function CtaBand({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '120px 0',
      background: 'url(' + PHOTOS.dining + ') center 40%/cover',
      color: '#fff',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-photo-strong)'
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase'
    }
  }, "Your vision, our expertise"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontWeight: 400,
      fontSize: 'clamp(40px,6vw,64px)',
      margin: '18px 0 36px',
      lineHeight: 1.05
    }
  }, "Let\u2019s build something ", /*#__PURE__*/React.createElement("em", null, "extraordinary.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(NSW.Button, {
    href: "tel:8883984499"
  }, "Call Now (888) 398-4499"), /*#__PURE__*/React.createElement(NSW.Button, {
    variant: "light",
    onClick: () => go('contact')
  }, "Book a Consultation"))));
}
Object.assign(window, {
  NSW,
  PHOTOS,
  Icon,
  TopBar,
  Header,
  Footer,
  QuoteForm,
  Container,
  CtaBand,
  SERVICES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.SelectField = __ds_scope.SelectField;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.CoverTitle = __ds_scope.CoverTitle;

__ds_ns.FeatureItem = __ds_scope.FeatureItem;

__ds_ns.OfferBanner = __ds_scope.OfferBanner;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

})();

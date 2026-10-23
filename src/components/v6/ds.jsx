import React from 'react';

export function Logo({
  tone = 'dark',
  height = 56,
  basePath = '/',
  src,
  alt = 'Pacific West Home Builders',
  style
}) {
  const url = src || (basePath.endsWith('/') ? basePath : basePath + '/') + 'assets/logo-' + (tone === 'light' ? 'white' : 'black') + '.png';
  return (
    <img
      src={url}
      alt={alt}
      style={{
        height,
        width: 'auto',
        display: 'block',
        ...style
      }}
    />
  );
}

export function TextField({
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
  const bd = error ? 'var(--pw-error)' : f ? (dark ? '#fff' : 'var(--pw-ink)') : (dark ? 'rgba(255,255,255,.4)' : 'var(--pw-stone-300)');
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
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
      {label && (
        <span style={{
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: 'var(--tracking-caps)',
          textTransform: 'uppercase',
          color: dark ? '#fff' : 'var(--text-primary)'
        }}>
          {label}{required && <span style={{ color: 'var(--pw-red)' }}> *</span>}
        </span>
      )}
      {multiline ? <textarea rows={rows} {...P} /> : <input type={type} {...P} />}
      {(error || hint) && (
        <span style={{ fontSize: 12, fontWeight: 300, color: error ? 'var(--pw-error)' : 'var(--text-muted)' }}>
          {error || hint}
        </span>
      )}
    </label>
  );
}

export function SelectField({
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
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
      {label && (
        <span style={{
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: 'var(--tracking-caps)',
          textTransform: 'uppercase',
          color: dark ? '#fff' : 'var(--text-primary)'
        }}>
          {label}{required && <span style={{ color: 'var(--pw-red)' }}> *</span>}
        </span>
      )}
      <span style={{ position: 'relative', display: 'block' }}>
        <select
          name={name}
          value={value}
          defaultValue={value === undefined ? (defaultValue ?? '') : undefined}
          onChange={onChange}
          required={required}
          onFocus={() => setF(true)}
          onBlur={() => setF(false)}
          style={{
            width: '100%',
            appearance: 'none',
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: 15,
            color: dark ? '#fff' : 'var(--text-primary)',
            background: dark ? 'transparent' : '#fff',
            border: '1px solid ' + (f ? (dark ? '#fff' : 'var(--pw-ink)') : (dark ? 'rgba(255,255,255,.4)' : 'var(--pw-stone-300)')),
            borderRadius: 'var(--radius-1)',
            padding: '14px 44px 14px 16px',
            outline: 'none',
            boxShadow: f && !dark ? '0 0 0 3px var(--focus-ring)' : 'none'
          }}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map(o => (
            <option key={o} value={o} style={{ color: '#111' }}>{o}</option>
          ))}
        </select>
        <span
          aria-hidden="true"
          style={{
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
          }}
        />
      </span>
    </label>
  );
}

export function Checkbox({
  label,
  checked,
  defaultChecked = false,
  onChange,
  tone = 'light',
  name,
  style
}) {
  const [c, setC] = React.useState(defaultChecked);
  const isCtrl = checked !== undefined;
  const on = isCtrl ? checked : c;
  const dark = tone === 'dark';
  return (
    <label style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: 'pointer',
      userSelect: 'none',
      fontSize: 13,
      fontWeight: 300,
      color: dark ? '#fff' : 'var(--text-primary)',
      ...style
    }}>
      <input
        type="checkbox"
        name={name}
        checked={on}
        onChange={e => {
          setC(e.target.checked);
          onChange && onChange(e);
        }}
        style={{
          position: 'absolute',
          opacity: 0,
          width: 0,
          height: 0
        }}
      />
      <span style={{
        flex: '0 0 18px',
        width: 18,
        height: 18,
        marginTop: 1,
        border: '1px solid ' + (on ? 'var(--pw-red)' : dark ? 'rgba(255,255,255,.6)' : 'var(--pw-stone-500)'),
        background: on ? 'var(--pw-red)' : 'transparent',
        display: 'grid',
        placeItems: 'center',
        transition: 'all var(--dur-fast)'
      }}>
        {on && (
          <span style={{
            width: 5,
            height: 9,
            borderRight: '1.5px solid #fff',
            borderBottom: '1.5px solid #fff',
            transform: 'translateY(-1px) rotate(45deg)'
          }} />
        )}
      </span>
      <span>{label}</span>
    </label>
  );
}

export const PW = {
  Logo,
  TextField,
  SelectField,
  Checkbox
};

export default PW;

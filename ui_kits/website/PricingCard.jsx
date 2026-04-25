// PricingCard.jsx — JB Digital Consulting
// Pricing tier card with features list
const PricingCard = ({ featured, badge, title, price, period, description, features, cta, onCta }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: featured ? 'hsl(212 45% 13%)' : 'hsl(212 45% 13% / 0.5)',
        border: featured
          ? '1px solid hsl(43 53% 54% / 0.5)'
          : `1px solid ${hovered ? 'hsl(43 53% 54% / 0.22)' : 'hsl(43 53% 54% / 0.12)'}`,
        borderRadius: 12,
        padding: '32px 28px',
        position: 'relative',
        boxShadow: featured ? '0 0 60px hsl(43 53% 54% / 0.1)' : 'none',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        display: 'flex', flexDirection: 'column', gap: 0,
      }}>

      {/* Badge */}
      {badge && (
        <div style={{
          position: 'absolute', top: -12, left: '50%',
          transform: 'translateX(-50%)',
          background: '#C9A055', color: '#0C1F3A',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '0.65rem', fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '4px 14px', borderRadius: 4,
          whiteSpace: 'nowrap',
        }}>{badge}</div>
      )}

      {/* Title */}
      <h3 style={{
        fontFamily: '"DM Serif Display", Georgia, serif',
        fontSize: '1.3rem', fontWeight: 400,
        color: 'hsl(40 20% 95%)',
        marginBottom: 12,
      }}>{title}</h3>

      {/* Price */}
      <div style={{ marginBottom: 8 }}>
        <span style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '2rem', fontWeight: 700,
          color: featured ? '#C9A055' : 'hsl(40 20% 95%)',
        }}>{price}</span>
        {period && (
          <span style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '0.875rem', color: 'hsl(215 16% 62%)',
            marginLeft: 4,
          }}>{period}</span>
        )}
      </div>

      {/* Description */}
      {description && (
        <p style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '0.8rem', color: 'hsl(215 16% 62%)',
          marginBottom: 20, lineHeight: 1.5,
        }}>{description}</p>
      )}

      {/* Divider */}
      <div style={{ height: 1, background: 'hsl(43 53% 54% / 0.1)', marginBottom: 20 }}></div>

      {/* Features */}
      <ul style={{ listStyle: 'none', marginBottom: 28, flex: 1 }}>
        {features.map((f, i) => (
          <li key={i} style={{
            display: 'flex', alignItems: 'flex-start', gap: 10,
            marginBottom: 10,
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '0.875rem', color: 'hsl(40 20% 95%)',
            lineHeight: 1.4,
          }}>
            <i data-lucide="check" style={{ color: '#C9A055', width: 15, height: 15, strokeWidth: 2, flexShrink: 0, marginTop: 1 }}></i>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button onClick={onCta} style={{
        background: featured ? '#C9A055' : 'transparent',
        color: featured ? '#0C1F3A' : '#C9A055',
        border: featured ? 'none' : '1px solid #C9A055',
        fontFamily: 'Inter, system-ui, sans-serif',
        fontWeight: 500, fontSize: '0.875rem',
        padding: '12px 24px', borderRadius: 6,
        cursor: 'pointer', letterSpacing: '0.04em',
        transition: 'background 0.2s',
        width: '100%',
      }}>{cta}</button>
    </div>
  );
};

Object.assign(window, { PricingCard });

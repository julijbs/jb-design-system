// ServiceCard.jsx — JB Digital Consulting
// Glass card for a service offering
const ServiceCard = ({ icon, overline, title, description, cta, onClick }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        background: 'hsl(212 45% 13% / 0.6)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: `1px solid ${hovered ? 'hsl(43 53% 54% / 0.28)' : 'hsl(43 53% 54% / 0.12)'}`,
        borderTop: '2px solid #C9A055',
        borderRadius: 12,
        padding: '28px 24px 24px',
        cursor: onClick ? 'pointer' : 'default',
        boxShadow: hovered ? '0 0 60px hsl(43 53% 54% / 0.08)' : '0 0 40px hsl(43 53% 54% / 0.04)',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}>
      {/* Icon */}
      {icon && (
        <div style={{
          width: 40, height: 40,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'hsl(43 53% 54% / 0.1)',
          borderRadius: 8,
          marginBottom: 4,
        }}>
          <i data-lucide={icon} style={{ color: '#C9A055', width: 20, height: 20, strokeWidth: 1.5 }}></i>
        </div>
      )}

      {/* Overline */}
      {overline && (
        <span style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '0.65rem', fontWeight: 500,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: '#C9A055',
        }}>{overline}</span>
      )}

      {/* Title */}
      <h3 style={{
        fontFamily: '"DM Serif Display", Georgia, serif',
        fontSize: '1.25rem', fontWeight: 400,
        color: 'hsl(40 20% 95%)',
        lineHeight: 1.2,
      }}>{title}</h3>

      {/* Description */}
      <p style={{
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: '0.875rem', lineHeight: 1.6,
        color: 'hsl(215 16% 62%)',
        flex: 1,
      }}>{description}</p>

      {/* CTA */}
      {cta && (
        <div style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '0.8rem', fontWeight: 500,
          color: '#C9A055',
          letterSpacing: '0.04em',
          display: 'flex', alignItems: 'center', gap: 4,
          marginTop: 8,
        }}>
          {cta} <i data-lucide="arrow-right" style={{ width: 14, height: 14, strokeWidth: 1.5 }}></i>
        </div>
      )}
    </div>
  );
};

Object.assign(window, { ServiceCard });

// Hero.jsx — JB Digital Consulting
// Full-width dark hero: overline tag + h1 + subhead + dual CTA
const Hero = ({ onNav }) => {
  return (
    <section style={{
      background: '#0C1F3A',
      padding: '7rem 2rem 6rem',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        {/* Overline tag */}
        <span style={{
          display: 'inline-block',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '0.7rem', fontWeight: 500,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: '#C9A055',
          background: 'hsl(43 53% 54% / 0.1)',
          border: '1px solid hsl(43 53% 54% / 0.2)',
          borderRadius: 4, padding: '4px 14px',
          marginBottom: 28,
        }}>Para Decisores e Profissionais Liberais</span>

        {/* H1 */}
        <h1 style={{
          fontFamily: '"DM Serif Display", Georgia, serif',
          fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
          fontWeight: 400,
          lineHeight: 1.1,
          color: 'hsl(40 20% 95%)',
          marginBottom: 24,
          letterSpacing: '-0.02em',
        }}>
          Infraestrutura Digital &{' '}
          <span style={{ color: '#C9A055' }}>Autoridade Real.</span>
        </h1>

        {/* Subhead */}
        <p style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '1.125rem',
          lineHeight: 1.6,
          color: 'hsl(215 16% 62%)',
          maxWidth: 560, margin: '0 auto 40px',
        }}>
          Posicionamento estratégico para quem não tem tempo a perder com amadorismo digital.
        </p>

        {/* CTA Pair */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => onNav('servicos')} style={{
            background: '#C9A055', color: '#0C1F3A',
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: 500, fontSize: '0.875rem',
            padding: '13px 32px', borderRadius: 6, border: 'none',
            cursor: 'pointer', letterSpacing: '0.04em',
            transition: 'background 0.2s',
          }}>Conhecer Serviços</button>
          <button onClick={() => onNav('sobre')} style={{
            background: 'transparent', color: '#C9A055',
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: 500, fontSize: '0.875rem',
            padding: '13px 32px', borderRadius: 6,
            border: '1px solid #C9A055',
            cursor: 'pointer', letterSpacing: '0.04em',
            transition: 'background 0.2s',
          }}>Por que JB?</button>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Hero });

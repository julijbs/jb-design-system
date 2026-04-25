// Footer.jsx — JB Digital Consulting
const Footer = ({ onNav }) => (
  <footer style={{
    background: '#0C1F3A',
    borderTop: '1px solid hsl(43 53% 54% / 0.12)',
    padding: '3rem 2rem',
    textAlign: 'center',
  }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <img src="../../assets/logo-stacked-transparent.png" alt="JB Digital Consulting" style={{ height: 56, marginBottom: 20 }} />
      <div style={{
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: '0.8rem',
        color: 'hsl(215 16% 62%)',
        marginBottom: 24,
        lineHeight: 1.6,
      }}>
        <p>JB Digital Consulting — Estratégia Digital para Decisores</p>
        <p style={{ marginTop: 4 }}>Rio de Janeiro, Brasil</p>
      </div>
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, hsl(43 53% 54% / 0.15), transparent)', marginBottom: 24 }}></div>
      <p style={{
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: '0.75rem',
        color: 'hsl(215 16% 62% / 0.6)',
      }}>© 2026 JB Digital Consulting. Todos os direitos reservados.</p>
    </div>
  </footer>
);

Object.assign(window, { Footer });

// Header.jsx — JB Digital Consulting
// Sticky nav: logo + primary/secondary CTAs
const Header = ({ onNav, currentScreen }) => {
  return (
    <header style={{
      background: '#0C1F3A',
      borderBottom: '1px solid hsl(43 53% 54% / 0.12)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      padding: '0',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 2rem',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <button onClick={() => onNav('home')} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 10, padding: 0,
        }}>
          <img src="../../assets/logo-horizontal-transparent.png" alt="JB Digital Consulting" style={{ height: 36 }} />
        </button>

        {/* Nav */}
        <nav style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button onClick={() => onNav('servicos')} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: currentScreen === 'servicos' ? '#C9A055' : 'hsl(40 20% 95%)',
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '0.875rem', fontWeight: 500,
            padding: '8px 16px', borderRadius: 6,
            letterSpacing: '0.03em',
            transition: 'color 0.2s',
          }}>Serviços</button>
          <button onClick={() => onNav('sprint')} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: currentScreen === 'sprint' ? '#C9A055' : 'hsl(40 20% 95%)',
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '0.875rem', fontWeight: 500,
            padding: '8px 16px', borderRadius: 6,
            letterSpacing: '0.03em',
            transition: 'color 0.2s',
          }}>Sprint™</button>
          <button onClick={() => onNav('arc')} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: currentScreen === 'arc' ? '#C9A055' : 'hsl(40 20% 95%)',
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '0.875rem', fontWeight: 500,
            padding: '8px 16px', borderRadius: 6,
            letterSpacing: '0.03em',
            transition: 'color 0.2s',
          }}>ARC™</button>
          <button onClick={() => onNav('whatsapp')} style={{
            background: '#C9A055', border: '1px solid transparent',
            cursor: 'pointer', color: '#0C1F3A',
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '0.875rem', fontWeight: 500,
            padding: '8px 20px', borderRadius: 6,
            letterSpacing: '0.04em',
            transition: 'background 0.2s',
          }}>Falar com JB</button>
        </nav>
      </div>
    </header>
  );
};

Object.assign(window, { Header });

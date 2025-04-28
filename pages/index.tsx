import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Talkero - Twoja społeczność lokalna</title>
        <meta name="description" content="Talkero - Twój nowy sposób na kontakt z sąsiadami, znajomymi i lokalną społecznością." />
      </Head>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
        <div style={{ fontWeight: 'bold', fontSize: '24px' }}>Talkero</div>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <a href="#">Home</a>
          <a href="#">Grupy</a>
          <a href="#">Ogłoszenia</a>
          <a href="#">Wydarzenia</a>
          <a href="#">Konto</a>
        </nav>
      </header>
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px 20px' }}>
        <h1 style={{ fontSize: '3rem', textAlign: 'center' }}>Witaj w Talkero! 🚀</h1>
        <p style={{ fontSize: '1.2rem', textAlign: 'center', marginTop: '20px', maxWidth: '600px' }}>
          Twoja lokalna społeczność zawsze blisko Ciebie. Twórz ogłoszenia, dołączaj do grup, organizuj wydarzenia i rozmawiaj na czacie!
        </p>
        <div style={{ marginTop: '30px', display: 'flex', gap: '20px' }}>
          <button style={{ padding: '10px 20px', fontSize: '1rem', cursor: 'pointer' }}>Zarejestruj się</button>
          <button style={{ padding: '10px 20px', fontSize: '1rem', cursor: 'pointer' }}>Zaloguj się</button>
        </div>
      </main>
      <section style={{ background: '#f9f9f9', padding: '40px 20px', textAlign: 'center' }}>
        <h2>Dlaczego warto dołączyć?</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '30px', gap: '40px' }}>
          <div>
            <h3>🔥 Ogłoszenia</h3>
            <p>Sprzedawaj, kupuj, oferuj usługi lokalnie.</p>
          </div>
          <div>
            <h3>👥 Grupy</h3>
            <p>Dołącz do tematycznych społeczności.</p>
          </div>
          <div>
            <h3>📆 Wydarzenia</h3>
            <p>Twórz i dołączaj do lokalnych eventów.</p>
          </div>
          <div>
            <h3>✉️ Czat</h3>
            <p>Rozmawiaj szybko i bezpiecznie z sąsiadami.</p>
          </div>
        </div>
      </section>
      <footer style={{ padding: '20px', textAlign: 'center', marginTop: '50px', fontSize: '0.9rem' }}>
        <p>© {new Date().getFullYear()} Talkero. Wszystkie prawa zastrzeżone.</p>
      </footer>
    </>
  );
}

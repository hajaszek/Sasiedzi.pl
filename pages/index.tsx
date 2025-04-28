import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Talkero - Twoja społeczność lokalna</title>
        <meta name="description" content="Talkero - Twój nowy sposób na kontakt z sąsiadami, znajomymi i lokalną społecznością." />
      </Head>
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '90vh' }}>
        <h1 style={{ fontSize: '2.5rem', textAlign: 'center' }}>
          Witaj w Talkero! 🚀
        </h1>
        <p style={{ fontSize: '1.2rem', marginTop: '20px', textAlign: 'center', maxWidth: '600px' }}>
          Łączymy lokalne społeczności w nowoczesny sposób. Dołącz do sąsiadów, znajomych i bądź na bieżąco z wydarzeniami w Twojej okolicy!
        </p>
      </main>
    </>
  );
}

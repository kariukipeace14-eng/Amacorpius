export default function Home() {
  return (
    <main style={{
      background: 'linear-gradient(to bottom right, purple, darkcyan)',
      minHeight: '100vh',
      color: 'white',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        AMACORPIUS ⚽
      </h1>
      <p style={{ marginTop: '10px' }}>
        Your ultimate football player rankings, league tables & transfers hub.
      </p>

      <section style={{ marginTop: '30px' }}>
        <h2>Top Scorers This Season</h2>
        <p>Loading player data...</p>
      </section>
    </main>
  );
}

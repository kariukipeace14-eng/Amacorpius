import TopScorers from '../components/TopScorers';

export default function Home() {
  return (
    <main style={{ padding: '20px' }}>
      <h1>Amacorpius</h1>
      <p>Live football stats, rankings, and transfers.</p>
      <TopScorers leagueId={39} season={2023} /> {/* Premier League example */}
    </main>
  );
}

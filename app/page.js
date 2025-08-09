import TopScorers from '../components/TopScorers';
import LeagueTable from '../components/LeagueTable';

export default function Home() {
  return (
    <main style={{ padding: '20px' }}>
      <h1>Amacorpius</h1>
      <p>Live football stats, rankings, and transfers.</p>
      
      {/* Top Scorers */}
      <TopScorers leagueId={39} season={2023} /> {/* Premier League */}

      {/* League Table */}
      <LeagueTable leagueId={39} season={2023} />
    </main>
  );
}

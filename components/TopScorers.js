'use client';
import { useEffect, useState } from 'react';
import { fetchFromApi } from '../lib/api';

export default function TopScorers({ leagueId = 39, season = 2023 }) {
  const [scorers, setScorers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadScorers() {
      try {
        const data = await fetchFromApi(`players/topscorers?league=${leagueId}&season=${season}`);
        setScorers(data.response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    loadScorers();
  }, [leagueId, season]);

  if (loading) return <p>Loading top scorers...</p>;

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Top Scorers</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {scorers.map((item, index) => (
          <li key={index} style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '10px',
            borderRadius: '8px'
          }}>
            <img src={item.player.photo} alt={item.player.name} style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              marginRight: '10px'
            }} />
            <span>{item.player.name} - {item.statistics[0].goals.total} goals</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

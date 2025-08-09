'use client';
import { useEffect, useState } from 'react';
import { fetchFromApi } from '../lib/api';

export default function RecentTransfers({ leagueId = 39, season = 2023 }) {
  const [transfers, setTransfers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTransfers() {
      try {
        const data = await fetchFromApi(`transfers?league=${leagueId}&season=${season}`);
        setTransfers(data.response.slice(0, 10)); // Show only latest 10
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    loadTransfers();
  }, [leagueId, season]);

  if (loading) return <p>Loading recent transfers...</p>;

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Recent Transfers</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {transfers.map((item, index) => (
          <li key={index} style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '10px',
            borderRadius: '8px'
          }}>
            <img src={item.player.photo} alt={item.player.name} style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              marginRight: '10px'
            }} />
            <span>{item.player.name} — {item.transfers[0].teams.out.name} ➡ {item.transfers[0].teams.in.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

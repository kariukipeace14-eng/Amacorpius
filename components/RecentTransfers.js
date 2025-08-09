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
        setTransfers(data.response.slice(0, 10)); // Show latest 10 transfers
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
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '15px'
      }}>
        {transfers.map((item, index) => (
          <div key={index} style={{
            background: 'var(--card-bg)',
            borderRadius: '12px',
            padding: '15px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
          }}>
            <img
              src={item.player.photo}
              alt={item.player.name}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid white'
              }}
            />
            <div>
              <strong>{item.player.name}</strong>
              <p style={{ margin: '5px 0', fontSize: '14px' }}>
                {item.transfers[0]?.teams?.out?.name || 'N/A'} ➡ {item.transfers[0]?.teams?.in?.name || 'N/A'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

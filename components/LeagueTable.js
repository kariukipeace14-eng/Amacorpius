'use client';
import { useEffect, useState } from 'react';
import { fetchFromApi } from '../lib/api';

export default function LeagueTable({ leagueId = 39, season = 2023 }) {
  const [table, setTable] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTable() {
      try {
        const data = await fetchFromApi(`standings?league=${leagueId}&season=${season}`);
        setTable(data.response[0].league.standings[0]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    loadTable();
  }, [leagueId, season]);

  if (loading) return <p>Loading league table...</p>;

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>League Table</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--card-bg)', borderRadius: '8px', overflow: 'hidden' }}>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Team</th>
            <th>Pts</th>
            <th>Played</th>
            <th>Wins</th>
            <th>Draws</th>
            <th>Losses</th>
          </tr>
        </thead>
        <tbody>
          {table.map((team, index) => (
            <tr key={index} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <td>{team.rank}</td>
              <td style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img
                  src={team.team.logo}
                  alt={team.team.name}
                  style={{ width: '24px', height: '24px' }}
                />
                {team.team.name}
              </td>
              <td>{team.points}</td>
              <td>{team.all.played}</td>
              <td>{team.all.win}</td>
              <td>{team.all.draw}</td>
              <td>{team.all.lose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [leagueId, setLeagueId] = useState(39); // Default Premier League
  const [topScorers, setTopScorers] = useState([]);
  const [leagueTable, setLeagueTable] = useState([]);
  const [transfers, setTransfers] = useState([]);

  const leagues = {
    39: "Premier League",
    140: "La Liga",
    135: "Serie A",
    78: "Bundesliga",
    292: "Kenyan Premier League"
  };

  useEffect(() => {
    fetchData();
  }, [leagueId]);

  async function fetchData() {
    const headers = { "x-apisports-key": process.env.NEXT_PUBLIC_API_KEY };

    const scorersRes = await fetch(
      `https://v3.football.api-sports.io/players/topscorers?league=${leagueId}&season=2023`,
      { headers }
    );
    const scorersData = await scorersRes.json();
    setTopScorers(scorersData.response || []);

    const tableRes = await fetch(
      `https://v3.football.api-sports.io/standings?league=${leagueId}&season=2023`,
      { headers }
    );
    const tableData = await tableRes.json();
    setLeagueTable(tableData.response?.[0]?.league?.standings?.[0] || []);

    const transfersRes = await fetch(
      `https://v3.football.api-sports.io/transfers?league=${leagueId}`,
      { headers }
    );
    const transfersData = await transfersRes.json();
    setTransfers(transfersData.response || []);
  }

  return (
    <main>
      <h1>Amacorpius</h1>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <select
          value={leagueId}
          onChange={(e) => setLeagueId(Number(e.target.value))}
          style={{
            padding: "8px 12px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#0a9396",
            color: "white",
            fontSize: "16px"
          }}
        >
          {Object.entries(leagues).map(([id, name]) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <h2>Top Scorers</h2>
      <ul>
        {topScorers.map((player, i) => (
          <li key={i}>
            {player.player.name} — {player.statistics[0].goals.total} goals
          </li>
        ))}
      </ul>

      <h2>League Table</h2>
      <table>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Team</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {leagueTable.map((team, i) => (
            <tr key={i}>
              <td>{team.rank}</td>
              <td>{team.team.name}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Recent Transfers</h2>
      <ul>
        {transfers.map((t, i) => (
          <li key={i}>
            {t.player.name} → {t.transfers[0]?.teams?.in?.name}
          </li>
        ))}
      </ul>
    </main>
  );
}

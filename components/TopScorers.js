
return (
  <div style={{ marginTop: '20px' }}>
    <h2>Top Scorers</h2>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '15px'
    }}>
      {scorers.map((player, index) => (
        <div key={index} style={{
          background: 'var(--card-bg)',
          borderRadius: '12px',
          padding: '15px',
          textAlign: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
        }}>
          <img 
            src={player.player.photo} 
            alt={player.player.name} 
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '10px',
              border: '2px solid white'
            }} 
          />
          <h3 style={{ margin: '5px 0' }}>{player.player.name}</h3>
          <p style={{ margin: '0', fontSize: '14px', opacity: 0.8 }}>
            {player.statistics[0].team.name}
          </p>
          <p style={{ fontWeight: 'bold', marginTop: '8px' }}>
            {player.statistics[0].goals.total} goals
          </p>
        </div>
      ))}
    </div>
  </div>
);

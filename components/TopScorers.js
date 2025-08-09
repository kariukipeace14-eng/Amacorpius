
return (
  <div style={{ marginTop: '20px' }}>
    <h2>Top Scorers</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '15px' }}>
      {scorers.map((item, i) => (
        <div key={i} style={{
          background: 'var(--card-bg)',
          borderRadius: '12px',
          padding: '15px',
          textAlign: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
        }}>
          <img
            src={item.player.photo}
            alt={item.player.name}
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '10px',
              border: '2px solid white'
            }}
          />
          <h3 style={{ margin: '5px 0' }}>{item.player.name}</h3>
          <p style={{ margin: '0', fontSize: '14px', opacity: 0.8 }}>
            {item.statistics[0].team.name}
          </p>
          <img
            src={item.statistics[0].team.logo}
            alt={item.statistics[0].team.name}
            style={{ width: '40px', marginTop: '5px' }}
          />
          <p style={{ fontWeight: 'bold', marginTop: '8px' }}>
            {item.statistics[0].goals.total} goals
          </p>
        </div>
      ))}
    </div>
  </div>
);

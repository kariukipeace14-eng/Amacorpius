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
              {item.transfers[0].teams.out.name} ➡ {item.transfers[0].teams.in.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

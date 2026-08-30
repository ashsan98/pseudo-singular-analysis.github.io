function Schedule() {
  const sectionTitleStyle = {
    fontSize: '23px',
    fontWeight: 700,
    color: '#1e3a5f',
    marginBottom: '20px',
    paddingBottom: '10px',
    borderBottom: '2px solid #e0e0e0'
  }

  const linkStyle = {
    color: '#2d5a7b',
    textDecoration: 'underline',
    fontWeight: 500
  }

  const imgHref = '/schedule.png'

  return (
    <div>
      <section className="section-schedule">
        <h2 style={sectionTitleStyle}>Schedule</h2>

        <div style={{ textAlign: 'center' }}>
          <img
            src={imgHref}
            alt="Pseudodifferential Techniques in Singular Analysis — conference schedule"
            style={{
              width: '100%',
              maxWidth: '700px',
              height: 'auto',
              display: 'block',
              margin: '0 auto',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}
          />
        </div>

        <p style={{
          textAlign: 'center',
          marginTop: '20px',
          fontSize: '15px',
          color: '#333'
        }}>
          Download conference booklet:{' '}
          <a
            href="/booklet.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
            download
          >
          </a>
        </p>
      </section>

      <style>{`
        @keyframes slideFromRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .section-schedule {
          animation: slideFromRight 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}

export default Schedule

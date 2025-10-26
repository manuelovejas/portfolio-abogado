import './Header.css'

function Header({ contacto }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="hero-section">
          <h1>Abogado Profesional</h1>
          <p className="tagline">Asesoramiento legal de confianza</p>
        </div>
        
        <div className="contact-info">
          <div className="contact-item">
            <span className="icon">📧</span>
            <div>
              <p className="contact-label">Email</p>
              <a href={`mailto:${contacto.email}`}>{contacto.email}</a>
            </div>
          </div>
          
          <div className="contact-item">
            <span className="icon">📞</span>
            <div>
              <p className="contact-label">Teléfono</p>
              <a href={`tel:${contacto.telefono}`}>{contacto.telefono}</a>
            </div>
          </div>
          
          <div className="contact-item">
            <span className="icon">📍</span>
            <div>
              <p className="contact-label">Dirección</p>
              <p>{contacto.direccion}</p>
            </div>
          </div>
          
          <div className="contact-item">
            <span className="icon">🕐</span>
            <div>
              <p className="contact-label">Horario</p>
              <p>{contacto.horario}</p>
            </div>
          </div>

          {contacto.linkedin && (
            <div className="contact-item">
              <span className="icon">💼</span>
              <div>
                <p className="contact-label">LinkedIn</p>
                <a href={contacto.linkedin} target="_blank" rel="noopener noreferrer">
                  Ver perfil
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header


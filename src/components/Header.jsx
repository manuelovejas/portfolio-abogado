import './Header.css'

function Header({ contacto }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="hero-section">
          <h1>ESTUDIO G. WOSCO</h1>
          <p className="tagline"><b>La solución a tus problemas legales</b></p>
        </div>
        
        <div className="contact-info">
          <div className="contact-item">
            <span className="icon">📧</span>
            <div>
              <p className="contact-label">Email</p>
              <a href={`mailto:${contacto.email}`}>{contacto.email}</a>
            </div>
          </div>
          
          {contacto.whatsappUrl && (
            <div className="contact-item">
              <span className="icon">💬</span>
              <div>
                <p className="contact-label">WhatsApp</p>
                <a href={contacto.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Enviar mensaje
                </a>
              </div>
            </div>
          )}

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

          {contacto.instagram && (
            <div className="contact-item">
              <span className="icon">📸</span>
              <div>
                <p className="contact-label">Instagram</p>
                <a href={contacto.instagram} target="_blank" rel="noopener noreferrer">
                  @dra.gw
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


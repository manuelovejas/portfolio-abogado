import './About.css'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'

function About({ datos }) {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-header">
            <h2>Quién Soy</h2>
            <h3>{datos.nombre}</h3>
            <p className="titulo-profesional">{datos.titulo}</p>
          </div>

          <div className="about-body">
            <div className="bio">
              <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                {datos.bio}
              </ReactMarkdown>
            </div>

            {datos.educacion && datos.educacion.length > 0 && (
              <div className="subsection">
                <h4>Educación</h4>
                <div className="education-list">
                  {datos.educacion.map((edu, index) => (
                    <div 
                      key={index} 
                      className="education-item"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <h5>{edu.titulo}</h5>
                      <p className="institucion">{edu.institucion}</p>
                      <p className="año">{edu.año}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {datos.areas && datos.areas.length > 0 && (
              <div className="subsection">
                <h4>Áreas de Especialización</h4>
                <div className="areas-grid">
                  {datos.areas.map((area, index) => (
                    <span key={index} className="area-badge">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


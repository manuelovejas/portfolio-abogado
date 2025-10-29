import './About.css'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'

function About({ datos }) {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-header">
          <h2>{datos.tituloSeccion}</h2>
          {datos.descripcion && (
            <p className="seccion-descripcion">{datos.descripcion}</p>
          )}
        </div>

        {datos.areas && datos.areas.length > 0 && (
          <div className="subsection">
            <h4>Áreas de Especialización</h4>
            <div className="areas-grid">
              {datos.areas.map((area, idx) => (
                <span key={idx} className="area-badge">{area}</span>
              ))}
            </div>
          </div>
        )}

        <div className="abogados-grid">
          {datos.abogados.map((abogado, index) => (
            <div key={index} className="abogado-card">
              <div className="abogado-header">
                <h3>{abogado.nombre}</h3>
                <p className="titulo-profesional">{abogado.titulo}</p>
              </div>

              <div className="abogado-body">
                <div className="bio">
                  <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                    {abogado.bio}
                  </ReactMarkdown>
                </div>

                {abogado.educacion && abogado.educacion.length > 0 && (
                  <div className="subsection">
                    <h4>Educación</h4>
                    <div className="education-list">
                      {abogado.educacion.map((edu, idx) => (
                        <div 
                          key={idx} 
                          className="education-item"
                          style={{ animationDelay: `${idx * 0.2}s` }}
                        >
                          <h5>{edu.titulo}</h5>
                          <p className="institucion">{edu.institucion}</p>
                          <p className="año">{edu.año}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About


import { Link } from 'react-router-dom'
import './Blog.css'

function Blog({ blogs }) {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-header">
          <h2>Blog Legal</h2>
          <p className="blog-subtitle">Artículos y noticias sobre derecho</p>
        </div>

        <div className="blogs-grid">
          {blogs.map((blog) => (
            <article key={blog.id} className="blog-card">
              <div className="blog-image">
                <img src={blog.imagen} alt={blog.titulo} />
                <span className="blog-categoria">{blog.categoria}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-fecha">
                    {new Date(blog.fecha).toLocaleDateString('es-AR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <h3 className="blog-title">{blog.titulo}</h3>
                <p className="blog-resumen">{blog.resumen}</p>
                <Link to={`/blog/${blog.id}`} className="blog-button">
                  Leer más
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog


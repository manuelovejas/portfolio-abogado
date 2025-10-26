import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import './BlogDetail.css'

function BlogDetail() {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`/data/blog-${id}.json`)
      .then(res => res.json())
      .then(data => {
        setBlog(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error cargando blog:', err)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <div className="blog-detail-loading">
        <div className="loading-spinner"></div>
        <p>Cargando artículo...</p>
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="blog-detail-error">
        <h2>Artículo no encontrado</h2>
        <Link to="/blog" className="error-link">← Volver al Blog</Link>
      </div>
    )
  }

  return (
    <div className="blog-detail-container">
      <Link to="/blog" className="back-button">
        ← Volver al Blog
      </Link>
      
      <article className="blog-detail-article">
        <div className="blog-detail-header">
          <span className="blog-detail-category">{blog.categoria}</span>
          <h1>{blog.titulo}</h1>
          <div className="blog-detail-meta">
            <span className="blog-detail-date">
              {new Date(blog.fecha).toLocaleDateString('es-AR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span className="blog-detail-author">Por {blog.autor}</span>
            <span className="blog-detail-time">⏱️ {blog.tiempoLectura} de lectura</span>
          </div>
        </div>

        <div className="blog-detail-image">
          <img src={blog.imagen} alt={blog.titulo} />
        </div>

        <div className="blog-detail-content">
          <div dangerouslySetInnerHTML={{ __html: blog.contenido }} />
        </div>

        <div className="blog-detail-footer">
          <Link to="/blog" className="back-link-button">
            ← Volver al Blog
          </Link>
        </div>
      </article>
    </div>
  )
}

export default BlogDetail


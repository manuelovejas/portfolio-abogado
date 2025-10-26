import { useState, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Blog from './components/Blog'
import './App.css'

function App() {
  const [contacto, setContacto] = useState(null)
  const [quienSoy, setQuienSoy] = useState(null)
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    // Cargar datos de contacto
    fetch('/data/contacto.json')
      .then(res => res.json())
      .then(data => setContacto(data))
      .catch(err => console.error('Error cargando contacto:', err))

    // Cargar datos de quien soy
    fetch('/data/quien-soy.json')
      .then(res => res.json())
      .then(data => setQuienSoy(data))
      .catch(err => console.error('Error cargando quien-soy:', err))

    // Cargar blogs
    fetch('/data/blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data.blogs))
      .catch(err => console.error('Error cargando blogs:', err))
  }, [])

  if (!contacto || !quienSoy || !blogs) {
    return <div className="loading">Cargando...</div>
  }

  return (
    <div className="App">
      <Header contacto={contacto} />
      <main>
        <About datos={quienSoy} />
        <Blog blogs={blogs} />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {quienSoy.nombre}. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App


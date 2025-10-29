import { useState, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import './App.css'

function App() {
  const [contacto, setContacto] = useState(null)
  const [sobreNosotros, setSobreNosotros] = useState(null)

  useEffect(() => {
    // Cargar datos de contacto
    fetch('/data/contacto.json')
      .then(res => res.json())
      .then(data => setContacto(data))
      .catch(err => console.error('Error cargando contacto:', err))

    // Cargar datos de sobre nosotros
    fetch('/data/sobre-nosotros.json')
      .then(res => res.json())
      .then(data => setSobreNosotros(data))
      .catch(err => console.error('Error cargando sobre-nosotros:', err))
  }, [])

  if (!contacto || !sobreNosotros) {
    return <div className="loading">Cargando...</div>
  }

  return (
    <div className="App">
      <div className="animated-background"></div>
      <Header contacto={contacto} />
      <main>
        <About datos={sobreNosotros} />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Estudio G. Wosco. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App


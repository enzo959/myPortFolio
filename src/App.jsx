import Navbar from './components/Navbar'
import MatrixBackground from './components/MatrixBackground'
import Accueil from './components/Accueil'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <MatrixBackground />
      <div 
        className="relative z-10"
      >
        {/* Navbar fixe */}
        <Navbar />
        {/* Sections */}
        <Accueil />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App


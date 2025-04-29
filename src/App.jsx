import { useRef, useEffect } from 'react'
import './App.css'
import '@fontsource/playfair-display'
import '@fontsource/open-sans'

// Import all sections
import Navigation from './components/Navigation'
import Introduction from './pages/Introduction'
import Painpoint from './pages/Painpoint'
import Solution from './pages/Solution'
import Howitworks from './pages/Howitworks'
import Scalability from './pages/Scalability'
import Action from './pages/Action'

function App() {
  const introRef = useRef(null)
  const painpointRef = useRef(null)
  const solutionRef = useRef(null)
  const howitworksRef = useRef(null)
  const scalabilityRef = useRef(null)
  const actionRef = useRef(null)

  const sectionRefs = {
    intro: introRef,
    painpoint: painpointRef,
    solution: solutionRef,
    howitworks: howitworksRef,
    scalability: scalabilityRef,
    action: actionRef
  }

  useEffect(() => {
    // Smooth scroll functionality for navigation
    const handleScroll = (e) => {
      const sections = document.querySelectorAll('.section')
      let currentSectionId = ''
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        
        if (window.pageYOffset >= (sectionTop - sectionHeight/3)) {
          currentSectionId = section.getAttribute('id')
        }
      })
      
      if (currentSectionId !== '') {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active')
          if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active')
          }
        })
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app-container">
      <Navigation scrollToSection={scrollToSection} sectionRefs={sectionRefs} />
      
      <main className="content">
        <section id="intro" ref={introRef} className="section" style={{ padding: 0, overflow: 'hidden' }}>
          <Introduction />
        </section>
        
        <section id="painpoint" ref={painpointRef} className="section">
          <Painpoint />
        </section>
        
        <section id="solution" ref={solutionRef} className="section">
          <Solution />
        </section>
        
        <section id="howitworks" ref={howitworksRef} className="section">
          <Howitworks />
        </section>
        
        <section id="scalability" ref={scalabilityRef} className="section">
          <Scalability />
        </section>
        
        <section id="action" ref={actionRef} className="section">
          <Action />
        </section>
      </main>
    </div>
  )
}

export default App

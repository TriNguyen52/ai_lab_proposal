import { useState, useEffect } from 'react'

function Navigation({ scrollToSection, sectionRefs }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('intro')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Find which section is currently in view
      const sections = ['intro', 'painpoint', 'solution', 'howitworks', 'scalability', 'action']
      
      for (const section of sections.reverse()) { // Reverse to check from bottom to top
        const el = document.getElementById(section)
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(section)
          break
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">AgriAssist</div>
      <div className="nav-links">
        <a 
          href="#intro" 
          className={`nav-link ${activeSection === 'intro' ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault()
            scrollToSection(sectionRefs.intro)
          }}
        >
          Introduction
        </a>
        <a 
          href="#painpoint" 
          className={`nav-link ${activeSection === 'painpoint' ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault()
            scrollToSection(sectionRefs.painpoint)
          }}
        >
          Challenge
        </a>
        <a 
          href="#solution" 
          className={`nav-link ${activeSection === 'solution' ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault()
            scrollToSection(sectionRefs.solution)
          }}
        >
          Solution
        </a>
        <a 
          href="#howitworks" 
          className={`nav-link ${activeSection === 'howitworks' ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault()
            scrollToSection(sectionRefs.howitworks)
          }}
        >
          Features
        </a>
        <a 
          href="#scalability" 
          className={`nav-link ${activeSection === 'scalability' ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault()
            scrollToSection(sectionRefs.scalability)
          }}
        >
          Impact
        </a>
        <a 
          href="#action" 
          className={`nav-link ${activeSection === 'action' ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault()
            scrollToSection(sectionRefs.action)
          }}
        >
          Get Involved
        </a>
      </div>
      <div className="nav-cta">
        <button 
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection(sectionRefs.action)
          }}
        >
          Join The Mission 
        </button>
      </div>
    </nav>
  )
}

export default Navigation
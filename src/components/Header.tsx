import React, { useState, useEffect } from 'react'
import { Menu, User, Mail, X } from 'lucide-react'
import ContactModal from './ContactModal'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { name: 'Gallery', id: 'portfolio' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ]

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'portfolio', 'about', 'contact']
      const scrollPosition = window.scrollY + 100 // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className="bg-gradient-to-r from-orange-50 to-amber-50 shadow-lg sticky top-0 z-40 border-b border-orange-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity group"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-orange-100 to-amber-100 group-hover:scale-105 transition-transform duration-200">
                <img 
                  src="/yuto-logo.png" 
                  alt="Yuto's Crochet Corner Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h1 className="text-2xl font-bold text-amber-900">
                Yuto's Crochet Corner
              </h1>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors duration-200 relative group pb-1 ${
                    activeSection === item.id 
                      ? 'text-orange-600' 
                      : 'text-amber-700 hover:text-orange-600'
                  }`}
                >
                  {item.name}
                  <span 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-200 ${
                      activeSection === item.id 
                        ? 'w-full' 
                        : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </button>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
              
              {/* Mobile menu button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-amber-700 hover:text-orange-600 p-2 rounded-lg hover:bg-orange-100 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-orange-200 bg-white rounded-lg shadow-lg">
              <nav className="flex flex-col space-y-4 px-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left font-medium transition-colors duration-200 py-2 px-2 rounded-lg relative ${
                      activeSection === item.id
                        ? 'text-orange-600 bg-orange-50'
                        : 'text-amber-700 hover:text-orange-600 hover:bg-orange-50'
                    }`}
                  >
                    {item.name}
                    {activeSection === item.id && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 rounded-r"></span>
                    )}
                  </button>
                ))}
                <button 
                  onClick={() => {
                    setIsContactModalOpen(true)
                    setIsMenuOpen(false)
                  }}
                  className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 w-fit"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Me</span>
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  )
}

export default Header
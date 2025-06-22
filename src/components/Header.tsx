import React, { useState } from 'react'
import { Menu, User, Mail, X } from 'lucide-react'
import ContactModal from './ContactModal'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

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

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">🧶</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                Yuto's Crochet Corner
              </h1>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="font-medium text-gray-700 hover:text-pink-500 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="hidden md:flex items-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
              
              {/* Mobile menu button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-600 hover:text-gray-900 p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left font-medium text-gray-700 hover:text-pink-500 transition-colors duration-200 py-2"
                  >
                    {item.name}
                  </button>
                ))}
                <button 
                  onClick={() => {
                    setIsContactModalOpen(true)
                    setIsMenuOpen(false)
                  }}
                  className="flex items-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 w-fit"
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
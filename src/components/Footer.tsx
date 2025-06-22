import React, { useState } from 'react'
import { Mail, Instagram, Youtube, Heart, MessageCircle, ExternalLink } from 'lucide-react'
import ContactModal from './ContactModal'
import { useStats } from '../hooks/useStats'

const Footer = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const { stats, loading: statsLoading } = useStats()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const socialLinks = [
    { 
      icon: Instagram, 
      color: 'hover:text-pink-400', 
      label: 'Instagram',
      url: 'https://instagram.com/yutos_crochet'
    },
    { 
      icon: Youtube, 
      color: 'hover:text-red-400', 
      label: 'YouTube',
      url: 'https://youtube.com/@yutoscrochet'
    },
    { 
      icon: Mail, 
      color: 'hover:text-green-400', 
      label: 'Email',
      action: () => setIsContactModalOpen(true)
    },
    { 
      icon: MessageCircle, 
      color: 'hover:text-blue-400', 
      label: 'Discord',
      url: 'https://discord.gg/crochet'
    }
  ]

  const quickLinks = [
    { name: 'Latest Projects', action: () => scrollToSection('portfolio') },
    { name: 'About Me', action: () => scrollToSection('about') },
    { name: 'Contact', action: () => setIsContactModalOpen(true) }
  ]

  // Default stats if Supabase data isn't available
  const defaultStats = [
    { value: "150+", label: "Projects Completed", color: "text-pink-400" },
    { value: "25+", label: "Original Patterns", color: "text-purple-400" },
    { value: "3", label: "Years of Experience", color: "text-blue-400" },
    { value: "500+", label: "Hours of Crocheting", color: "text-green-400" }
  ]

  const displayStats = stats.length > 0 ? stats : defaultStats
  const colors = ["text-pink-400", "text-purple-400", "text-blue-400", "text-green-400"]

  return (
    <>
      <footer id="contact" className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          
          {/* Connect Section */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-8 md:p-12 mb-16 text-center">
            <h3 className="text-3xl font-bold mb-4">Let's Connect! 🧶</h3>
            <p className="text-xl mb-8 opacity-90">
              Follow my crochet journey and get inspired for your next project
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://instagram.com/yutos_crochet"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-pink-500 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Instagram className="w-5 h-5" />
                <span>Follow on Instagram</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@yutoscrochet"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-500 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Youtube className="w-5 h-5" />
                <span>Watch Tutorials</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">🧶</span>
                </div>
                <h3 className="text-2xl font-bold">Yuto's Crochet Corner</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Sharing the joy of crochet through colorful creations and helpful tutorials. 
                Every stitch tells a story!
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  social.url ? (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 ${social.color} transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full`}
                      title={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ) : (
                    <button
                      key={index}
                      onClick={social.action}
                      className={`text-gray-400 ${social.color} transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full`}
                      title={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </button>
                  )
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Explore</h4>
              <div className="space-y-3">
                {quickLinks.map((item, index) => (
                  <div key={index}>
                    <button 
                      onClick={item.action}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                    >
                      {item.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact & Info */}
            <div>
              <h4 className="text-lg font-bold mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-white mb-1">Collaborations</h5>
                  <p className="text-gray-300 text-sm">Open to pattern testing and yarn reviews</p>
                </div>
                <div>
                  <h5 className="font-medium text-white mb-1">Workshops</h5>
                  <p className="text-gray-300 text-sm">Available for local and virtual classes</p>
                </div>
                <div>
                  <h5 className="font-medium text-white mb-1">Custom Orders</h5>
                  <p className="text-gray-300 text-sm">Currently taking commissions</p>
                </div>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 mt-4"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {statsLoading ? (
                // Loading skeleton
                Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className="h-8 bg-gray-700 rounded mb-2"></div>
                    <div className="h-4 bg-gray-700 rounded"></div>
                  </div>
                ))
              ) : (
                displayStats.map((stat, index) => (
                  <div key={stat.key || index}>
                    <div className={`text-2xl font-bold ${colors[index]} mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
              <Heart className="w-4 h-4 mr-1 text-pink-400" />
              © 2024 Yuto's Crochet Corner. Made with love and lots of yarn.
            </div>
            <div className="flex space-x-6">
              {['Privacy', 'Terms', 'Contact'].map((link) => (
                <button 
                  key={link} 
                  onClick={() => link === 'Contact' ? setIsContactModalOpen(true) : null}
                  className="text-gray-400 hover:text-gray-300 text-sm transition-colors duration-200"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  )
}

export default Footer
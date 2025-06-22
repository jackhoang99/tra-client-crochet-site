import React, { useState } from 'react'
import { Heart, Award, Camera, Palette, Clock, Users } from 'lucide-react'
import ContactModal from './ContactModal'
import { useStats } from '../hooks/useStats'

const About = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const { stats, loading: statsLoading } = useStats()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const milestones = [
    {
      year: "2021",
      title: "Started My Journey",
      description: "Picked up my first crochet hook and fell in love with the craft"
    },
    {
      year: "2022",
      title: "First Complex Project",
      description: "Completed my first amigurumi - a little teddy bear that took 3 attempts!"
    },
    {
      year: "2023",
      title: "Pattern Designing",
      description: "Started creating and sharing my own original patterns"
    },
    {
      year: "2024",
      title: "Teaching Others",
      description: "Began hosting local workshops and online tutorials"
    }
  ]

  // Default stats if Supabase data isn't available
  const defaultStats = [
    { value: "150+", label: "Projects Made" },
    { value: "3", label: "Years Experience" },
    { value: "25+", label: "Patterns Created" }
  ]

  const displayStats = stats.length > 0 ? stats.slice(0, 3) : defaultStats

  return (
    <>
      <section id="about" className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          
          {/* Main About Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Content */}
            <div>
              <div className="inline-flex items-center bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4 mr-2" />
                About Me
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Hi, I'm Yuto!
                <span className="block text-pink-500">Your Friendly Neighborhood Crocheter</span>
              </h2>
              
              <div className="space-y-4 text-lg text-gray-600 mb-8">
                <p>
                  What started as a way to keep my hands busy during Netflix binges has turned into 
                  a passionate hobby that brings me endless joy. I love the meditative rhythm of 
                  crochet and the magic of watching simple yarn transform into something beautiful.
                </p>
                <p>
                  My specialty is amigurumi - those adorable little crocheted creatures that seem 
                  to have personalities of their own. But I also enjoy making practical items like 
                  bags, blankets, and clothing that can be used and loved every day.
                </p>
                <p>
                  When I'm not crocheting, you can find me planning my next project, hunting for 
                  the perfect yarn, or sharing tips with fellow crafters online.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-8">
                {statsLoading ? (
                  // Loading skeleton
                  Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="text-center animate-pulse">
                      <div className="h-8 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded"></div>
                    </div>
                  ))
                ) : (
                  displayStats.map((stat, index) => {
                    const colors = ['text-pink-500', 'text-purple-500', 'text-blue-500']
                    return (
                      <div key={stat.key || index} className="text-center">
                        <div className={`text-3xl font-bold ${colors[index]} mb-2`}>
                          {stat.value}
                        </div>
                        <div className="text-gray-600">{stat.label}</div>
                      </div>
                    )
                  })
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-200 transform hover:scale-105"
                >
                  View My Work
                </button>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-white text-pink-500 border-2 border-pink-500 hover:bg-pink-50 px-8 py-4 rounded-full font-bold transition-all duration-200"
                >
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-6 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://images.pexels.com/photos/7188004/pexels-photo-7188004.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Yuto working on a crochet project"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-yellow-400 text-yellow-900 px-6 py-3 rounded-full font-bold shadow-lg animate-bounce">
                That's me! 👋
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              My Crochet Journey
            </h3>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{milestone.title}</h4>
                      <span className="text-sm text-gray-500">{milestone.year}</span>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  )
}

export default About
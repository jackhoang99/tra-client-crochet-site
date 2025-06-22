import React, { useState } from 'react'
import { Heart, Star, X, ChevronLeft, ChevronRight, Calendar, Clock, Loader2 } from 'lucide-react'
import { useProjects } from '../hooks/useProjects'

const Portfolio = () => {
  const { projects, loading, error } = useProjects()
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const categories = [
    { id: 'all', name: 'All Projects', color: 'bg-gray-100 text-gray-700' },
    { id: 'amigurumi', name: 'Amigurumi', color: 'bg-pink-100 text-pink-700' },
    { id: 'clothing', name: 'Clothing', color: 'bg-purple-100 text-purple-700' },
    { id: 'home', name: 'Home Decor', color: 'bg-blue-100 text-blue-700' },
    { id: 'accessories', name: 'Accessories', color: 'bg-green-100 text-green-700' }
  ]

  // Sample projects for demo (will be replaced by Supabase data)
  const sampleProjects = [
    {
      id: '1',
      title: "Kawaii Penguin Family",
      category: "amigurumi",
      images: [
        "https://images.pexels.com/photos/6474557/pexels-photo-6474557.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6474558/pexels-photo-6474558.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6474569/pexels-photo-6474569.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      thumbnail: "https://images.pexels.com/photos/6474557/pexels-photo-6474557.jpeg?auto=compress&cs=tinysrgb&w=400",
      difficulty: "Intermediate",
      time_spent: "12 hours",
      completed_date: "March 2024",
      description: "A adorable family of penguins made with soft cotton yarn. Each penguin has its own personality with different colored scarves and expressions.",
      techniques: ["Single crochet", "Increasing", "Decreasing", "Color changes"],
      yarn_details: "Cotton DK weight in black, white, orange, and various colors for accessories"
    },
    {
      id: '2',
      title: "Rainbow Granny Square Blanket",
      category: "home",
      images: [
        "https://images.pexels.com/photos/7188004/pexels-photo-7188004.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/7188067/pexels-photo-7188067.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      thumbnail: "https://images.pexels.com/photos/7188004/pexels-photo-7188004.jpeg?auto=compress&cs=tinysrgb&w=400",
      difficulty: "Beginner",
      time_spent: "25 hours",
      completed_date: "February 2024",
      description: "A vibrant throw blanket made from 64 granny squares in rainbow colors. Perfect for adding a pop of color to any room.",
      techniques: ["Granny squares", "Joining", "Border work"],
      yarn_details: "Acrylic worsted weight in 8 rainbow colors"
    },
    {
      id: '3',
      title: "Cute Cat Tote Bag",
      category: "accessories",
      images: [
        "https://images.pexels.com/photos/6474569/pexels-photo-6474569.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6474557/pexels-photo-6474557.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      thumbnail: "https://images.pexels.com/photos/6474569/pexels-photo-6474569.jpeg?auto=compress&cs=tinysrgb&w=400",
      difficulty: "Intermediate",
      time_spent: "8 hours",
      completed_date: "January 2024",
      description: "A functional and adorable tote bag featuring a cat face design. Sturdy enough for everyday use with reinforced handles.",
      techniques: ["Single crochet", "Surface crochet", "Handle construction"],
      yarn_details: "Cotton blend in cream and brown"
    }
  ]

  // Use sample data if no Supabase data available
  const displayProjects = projects.length > 0 ? projects : sampleProjects

  const filteredProjects = activeCategory === 'all' 
    ? displayProjects 
    : displayProjects.filter(project => project.category === activeCategory)

  const openModal = (project: any) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedProject && currentImageIndex < selectedProject.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700'
      case 'Advanced': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  if (loading) {
    return (
      <section id="portfolio" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My Crochet Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of my handmade creations, each crafted with love and attention to detail
            </p>
          </div>
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-pink-500" />
            <span className="ml-2 text-gray-600">Loading projects...</span>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="portfolio" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center py-20">
            <p className="text-red-600 mb-4">Error loading projects: {error}</p>
            <p className="text-gray-600">Showing sample projects instead.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Crochet Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my handmade creations, each crafted with love and attention to detail
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-pink-500 text-white shadow-lg'
                  : category.color + ' hover:shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
              onClick={() => openModal(project)}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-lg font-bold">View Gallery</span>
                  </div>
                </div>
                
                {/* Image count badge */}
                {project.images.length > 1 && (
                  <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded-full text-sm">
                    {project.images.length} photos
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
                    {project.difficulty}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {project.time_spent}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Date */}
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Completed {project.completed_date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">No projects found in this category.</p>
          </div>
        )}

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  {/* Image Gallery */}
                  <div>
                    <div className="relative">
                      <img
                        src={selectedProject.images[currentImageIndex]}
                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-80 object-cover rounded-lg"
                      />
                      
                      {/* Navigation arrows */}
                      {selectedProject.images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            disabled={currentImageIndex === 0}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full disabled:opacity-30"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={nextImage}
                            disabled={currentImageIndex === selectedProject.images.length - 1}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full disabled:opacity-30"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </>
                      )}
                      
                      {/* Image counter */}
                      {selectedProject.images.length > 1 && (
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-full text-sm">
                          {currentImageIndex + 1} / {selectedProject.images.length}
                        </div>
                      )}
                    </div>

                    {/* Thumbnail strip */}
                    {selectedProject.images.length > 1 && (
                      <div className="flex space-x-2 mt-4 overflow-x-auto">
                        {selectedProject.images.map((image: string, index: number) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                              index === currentImageIndex ? 'border-pink-500' : 'border-gray-200'
                            }`}
                          >
                            <img
                              src={image}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Project Details */}
                  <div>
                    <div className="space-y-6">
                      
                      {/* Basic Info */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Difficulty</h4>
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(selectedProject.difficulty)}`}>
                            {selectedProject.difficulty}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Time Spent</h4>
                          <p className="text-gray-600">{selectedProject.time_spent}</p>
                        </div>
                        <div className="col-span-2">
                          <h4 className="font-bold text-gray-900 mb-1">Completed</h4>
                          <p className="text-gray-600">{selectedProject.completed_date}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">About This Project</h4>
                        <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
                      </div>

                      {/* Techniques */}
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Techniques Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.techniques.map((technique: string, index: number) => (
                            <span
                              key={index}
                              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                            >
                              {technique}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Materials */}
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Materials</h4>
                        <p className="text-gray-600">{selectedProject.yarn_details}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Portfolio
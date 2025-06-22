import React, { useState } from 'react'
import { Heart, Star, X, ChevronLeft, ChevronRight, Calendar, Clock, Loader2 } from 'lucide-react'
import { useProjects } from '../hooks/useProjects'

const Portfolio = () => {
  const { projects, loading, error } = useProjects()
  const [activeDifficulty, setActiveDifficulty] = useState('all')
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6

  const difficulties = [
    { id: 'all', name: 'All Projects', color: 'bg-gray-100 text-gray-700 hover:bg-gray-200' },
    { id: 'Beginner', name: 'Beginner', color: 'bg-green-100 text-green-700 hover:bg-green-200' },
    { id: 'Intermediate', name: 'Intermediate', color: 'bg-amber-100 text-amber-700 hover:bg-amber-200' },
    { id: 'Advanced', name: 'Advanced', color: 'bg-red-100 text-red-700 hover:bg-red-200' }
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
      yarn_details: "Cotton DK weight in black, white, orange, and various colors for accessories",
      created_at: "2024-03-15T10:00:00Z"
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
      yarn_details: "Acrylic worsted weight in 8 rainbow colors",
      created_at: "2024-02-20T14:30:00Z"
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
      yarn_details: "Cotton blend in cream and brown",
      created_at: "2024-01-10T09:15:00Z"
    },
    {
      id: '4',
      title: "Cozy Winter Scarf",
      category: "clothing",
      images: [
        "https://images.pexels.com/photos/7188004/pexels-photo-7188004.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      thumbnail: "https://images.pexels.com/photos/7188004/pexels-photo-7188004.jpeg?auto=compress&cs=tinysrgb&w=400",
      difficulty: "Beginner",
      time_spent: "6 hours",
      completed_date: "December 2023",
      description: "A warm and cozy scarf perfect for winter weather. Features a simple but elegant stitch pattern.",
      techniques: ["Single crochet", "Chain stitch"],
      yarn_details: "Wool blend in navy blue",
      created_at: "2023-12-05T16:45:00Z"
    },
    {
      id: '5',
      title: "Amigurumi Dragon",
      category: "amigurumi",
      images: [
        "https://images.pexels.com/photos/6474557/pexels-photo-6474557.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      thumbnail: "https://images.pexels.com/photos/6474557/pexels-photo-6474557.jpeg?auto=compress&cs=tinysrgb&w=400",
      difficulty: "Advanced",
      time_spent: "20 hours",
      completed_date: "November 2023",
      description: "A detailed dragon with moveable wings and intricate scale texture. One of my most challenging projects!",
      techniques: ["Single crochet", "Increasing", "Decreasing", "Surface crochet", "Wire armature"],
      yarn_details: "Cotton DK weight in green, gold, and red",
      created_at: "2023-11-20T11:30:00Z"
    },
    {
      id: '6',
      title: "Kitchen Dishcloths Set",
      category: "home",
      images: [
        "https://images.pexels.com/photos/7188067/pexels-photo-7188067.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      thumbnail: "https://images.pexels.com/photos/7188067/pexels-photo-7188067.jpeg?auto=compress&cs=tinysrgb&w=400",
      difficulty: "Beginner",
      time_spent: "4 hours",
      completed_date: "October 2023",
      description: "A set of 6 colorful dishcloths for the kitchen. Practical and pretty!",
      techniques: ["Single crochet", "Double crochet"],
      yarn_details: "Cotton yarn in various bright colors",
      created_at: "2023-10-15T13:20:00Z"
    },
    {
      id: '7',
      title: "Baby Booties",
      category: "clothing",
      images: [
        "https://images.pexels.com/photos/6474569/pexels-photo-6474569.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      thumbnail: "https://images.pexels.com/photos/6474569/pexels-photo-7188004.jpeg?auto=compress&cs=tinysrgb&w=400",
      difficulty: "Intermediate",
      time_spent: "3 hours",
      completed_date: "September 2023",
      description: "Adorable baby booties with ribbon ties. Made as a gift for a friend's new baby.",
      techniques: ["Single crochet", "Increasing", "Decreasing"],
      yarn_details: "Soft baby yarn in pastel pink",
      created_at: "2023-09-10T08:00:00Z"
    },
    {
      id: '8',
      title: "Intricate Lace Doily",
      category: "home",
      images: [
        "https://images.pexels.com/photos/7188004/pexels-photo-7188004.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      thumbnail: "https://images.pexels.com/photos/7188004/pexels-photo-7188004.jpeg?auto=compress&cs=tinysrgb&w=400",
      difficulty: "Advanced",
      time_spent: "15 hours",
      completed_date: "August 2023",
      description: "A delicate lace doily with complex stitch patterns. Required careful attention to detail and precise tension control.",
      techniques: ["Chain spaces", "Picots", "Complex stitch combinations"],
      yarn_details: "Fine cotton thread in white",
      created_at: "2023-08-25T14:20:00Z"
    }
  ]

  // Use sample data if no Supabase data available, sort by created_at descending (newest first)
  const allProjects = projects.length > 0 ? projects : sampleProjects
  const sortedProjects = [...allProjects].sort((a, b) => 
    new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  )

  const filteredProjects = activeDifficulty === 'all' 
    ? sortedProjects 
    : sortedProjects.filter(project => project.difficulty === activeDifficulty)

  // Pagination calculations
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const startIndex = (currentPage - 1) * projectsPerPage
  const endIndex = startIndex + projectsPerPage
  const currentProjects = filteredProjects.slice(startIndex, endIndex)

  // Reset to page 1 when difficulty changes
  const handleDifficultyChange = (difficultyId: string) => {
    setActiveDifficulty(difficultyId)
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top of portfolio section
    const element = document.getElementById('portfolio')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
      case 'Intermediate': return 'bg-amber-100 text-amber-700'
      case 'Advanced': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  if (loading) {
    return (
      <section id="portfolio" className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              My Crochet Gallery
            </h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              A collection of my handmade creations, each crafted with love and attention to detail
            </p>
          </div>
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
            <span className="ml-2 text-amber-700">Loading projects...</span>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="portfolio" className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center py-20">
            <p className="text-red-600 mb-4">Error loading projects: {error}</p>
            <p className="text-amber-700">Showing sample projects instead.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="portfolio" className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            My Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Crochet Gallery
          </h2>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            A collection of my handmade creations, each crafted with love and attention to detail
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Sidebar - Difficulty Filter */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
              <h3 className="text-lg font-bold text-amber-900 mb-4">Filter by Difficulty</h3>
              <div className="space-y-2">
                {difficulties.map((difficulty) => (
                  <button
                    key={difficulty.id}
                    onClick={() => handleDifficultyChange(difficulty.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      activeDifficulty === difficulty.id
                        ? 'bg-orange-500 text-white shadow-md'
                        : difficulty.color
                    }`}
                  >
                    {difficulty.name}
                  </button>
                ))}
              </div>
              
              {/* Results Info */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-amber-700">
                  <span className="font-medium">{currentProjects.length}</span> of{' '}
                  <span className="font-medium">{filteredProjects.length}</span> projects
                  {activeDifficulty !== 'all' && (
                    <span className="block text-xs mt-1">
                      {activeDifficulty} level
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Projects Grid */}
          <div className="flex-1">
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
              {currentProjects.map((project) => (
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
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-lg font-bold">View Gallery</span>
                      </div>
                    </div>
                    
                    {/* Image count badge */}
                    {project.images.length > 1 && (
                      <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded-full text-xs">
                        {project.images.length} photos
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
                        {project.difficulty}
                      </span>
                      <span className="text-amber-600 text-sm flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {project.time_spent}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-amber-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-amber-700 text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Date */}
                    <div className="flex items-center text-sm text-amber-600">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>Completed {project.completed_date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center px-4 py-2 text-amber-700 bg-white border border-amber-300 rounded-lg hover:bg-amber-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </button>

                <div className="flex space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                        currentPage === page
                          ? 'bg-orange-500 text-white'
                          : 'text-amber-700 bg-white border border-amber-300 hover:bg-amber-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center px-4 py-2 text-amber-700 bg-white border border-amber-300 rounded-lg hover:bg-amber-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            )}

            {/* Empty state */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-amber-700 text-lg">No projects found at this difficulty level.</p>
              </div>
            )}
          </div>
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h3 className="text-2xl font-bold text-amber-900">{selectedProject.title}</h3>
                <button
                  onClick={closeModal}
                  className="text-amber-600 hover:text-amber-800 p-2"
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
                              index === currentImageIndex ? 'border-orange-500' : 'border-gray-200'
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
                          <h4 className="font-bold text-amber-900 mb-1">Difficulty</h4>
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(selectedProject.difficulty)}`}>
                            {selectedProject.difficulty}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-amber-900 mb-1">Time Spent</h4>
                          <p className="text-amber-700">{selectedProject.time_spent}</p>
                        </div>
                        <div className="col-span-2">
                          <h4 className="font-bold text-amber-900 mb-1">Completed</h4>
                          <p className="text-amber-700">{selectedProject.completed_date}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <h4 className="font-bold text-amber-900 mb-2">About This Project</h4>
                        <p className="text-amber-700 leading-relaxed">{selectedProject.description}</p>
                      </div>

                      {/* Techniques */}
                      <div>
                        <h4 className="font-bold text-amber-900 mb-2">Techniques Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.techniques.map((technique: string, index: number) => (
                            <span
                              key={index}
                              className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm"
                            >
                              {technique}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Materials */}
                      <div>
                        <h4 className="font-bold text-amber-900 mb-2">Materials</h4>
                        <p className="text-amber-700">{selectedProject.yarn_details}</p>
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
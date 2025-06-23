import React, { useState } from "react";
import { Heart, Award, Camera, Palette, Clock, Users } from "lucide-react";
import ContactModal from "./ContactModal";
import { useStats } from "../hooks/useStats";

const About = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { stats, loading: statsLoading } = useStats();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const milestones = [
    {
      year: "2023",
      title: "Started My Journey",
      description:
        "Picked up my first crochet hook and fell in love with the craft",
      image: "/yuto-21.png",
    },
    {
      year: "2023",
      title: "First Complex Project",
      description:
        "Completed my first amigurumi - a little sheep that took 10 hours!",
      image: "/yuto-22.png",
    },
    {
      year: "2024",
      title: "Teaching Others",
      description: "Began teaching close friends",
      image: "/yuto-24.png",
    },
    {
      year: "2025",
      title: "Pattern Designing",
      description: "Started creating and sharing my own original patterns",
      image: "/yuto-23.png",
    },
  ];

  // Default stats if Supabase data isn't available
  const defaultStats = [
    { value: "150+", label: "Projects Made" },
    { value: "3", label: "Years Experience" },
    { value: "25+", label: "Patterns Created" },
  ];

  const displayStats = stats.length > 0 ? stats.slice(0, 3) : defaultStats;

  return (
    <>
      <section
        id="about"
        className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20"
      >
        <div className="container mx-auto px-4">
          {/* Main About Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Content */}
            <div>
              <div className="inline-flex items-center bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4 mr-2" />
                About Me
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
                Hi, I'm Yuto!
                <span className="block text-orange-600">
                  Your Friendly Neighborhood Crocheter
                </span>
              </h2>

              <div className="space-y-4 text-lg text-amber-700 mb-8">
                <p>
                  What started as a way to keep my hands busy during Netflix
                  binges has turned into a passionate hobby that brings me
                  endless joy. I love the meditative rhythm of crochet and the
                  magic of watching simple yarn transform into something
                  beautiful.
                </p>
                <p>
                  When I'm not crocheting, you can find me planning my next
                  project or hunting for the perfect yarn.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-8">
                {statsLoading
                  ? // Loading skeleton
                    Array.from({ length: 3 }).map((_, index) => (
                      <div key={index} className="text-center animate-pulse">
                        <div className="h-8 bg-orange-200 rounded mb-2"></div>
                        <div className="h-4 bg-orange-200 rounded"></div>
                      </div>
                    ))
                  : displayStats.map((stat, index) => {
                      const colors = [
                        "text-orange-600",
                        "text-amber-600",
                        "text-yellow-600",
                      ];
                      return (
                        <div key={stat.key || index} className="text-center">
                          <div
                            className={`text-3xl font-bold ${colors[index]} mb-2`}
                          >
                            {stat.value}
                          </div>
                          <div className="text-amber-700">{stat.label}</div>
                        </div>
                      );
                    })}
              </div>

              <div className="flex justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-200 transform hover:scale-105"
                >
                  View My Work
                </button>
              </div>
            </div>

            {/* Image - Updated to show full image */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-6 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="w-full bg-gray-50 rounded-2xl overflow-hidden" style={{ paddingBottom: '75%' }}>
                  <img
                    src="/yuto-about.png"
                    alt="Yuto working on a crochet project"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-yellow-400 text-amber-900 px-6 py-3 rounded-full font-bold shadow-lg animate-bounce">
                That's me! 👋
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-center text-amber-900 mb-12">
              My Crochet Journey
            </h3>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-lg bg-gray-50">
                      <img
                        src={milestone.image}
                        alt={`Year ${milestone.year}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-xl font-bold text-amber-900">
                        {milestone.title}
                      </h4>
                      <span className="text-sm text-amber-600">
                        {milestone.year}
                      </span>
                    </div>
                    <p className="text-amber-700">{milestone.description}</p>
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
  );
};

export default About;
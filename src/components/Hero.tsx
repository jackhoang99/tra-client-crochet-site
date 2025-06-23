import React from "react";
import { Play, Star, Heart, Camera } from "lucide-react";
import { useStats } from "../hooks/useStats";

const Hero = () => {
  const { stats, loading: statsLoading } = useStats();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Default stats if Supabase data isn't available
  const defaultStats = [
    { value: "150+", label: "Projects completed" },
    { value: "3 years", label: "of crocheting" },
  ];

  const displayStats = stats.length > 0 ? stats.slice(0, 2) : defaultStats;

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center overflow-hidden relative py-20"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-amber-200 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-yellow-200 rounded-full opacity-60"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-orange-300 rounded-full opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Welcome to My Crochet Journey!
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6 leading-tight">
              Creating Magic
              <span className="block text-orange-600">
                One Stitch at a Time
              </span>
            </h1>

            <p className="text-xl text-amber-700 mb-8 max-w-lg mx-auto lg:mx-0">
              Hi! I'm Yuto, and I love bringing adorable characters to life
              through crochet. Explore my gallery of handmade creations and join
              me on this colorful journey!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Camera className="w-5 h-5" />
                <span>View My Gallery</span>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="flex items-center justify-center space-x-2 bg-white text-amber-700 px-8 py-4 rounded-full font-medium border-2 border-orange-300 hover:border-orange-400 hover:bg-orange-50 transition-all duration-200"
              >
                <Play className="w-5 h-5" />
                <span>Learn About Me</span>
              </button>
            </div>

            {/* Personal stats */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-amber-600">
              {statsLoading
                ? // Loading skeleton
                  Array.from({ length: 2 }).map((_, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-1 animate-pulse"
                    >
                      <div className="h-4 w-8 bg-orange-200 rounded"></div>
                      <div className="h-4 w-16 bg-orange-200 rounded"></div>
                    </div>
                  ))
                : displayStats.map((stat, index) => {
                    const colors = ["text-orange-600", "text-amber-600"];
                    return (
                      <div
                        key={stat.key || index}
                        className="flex items-center space-x-1"
                      >
                        <span className={`font-medium ${colors[index]}`}>
                          {stat.value}
                        </span>
                        <span>{stat.label}</span>
                      </div>
                    );
                  })}
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4 text-orange-500" />
                <span>Made with love</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src="/IMG_1930.png"
                alt="My latest crochet creation"
                className="w-full h-80 object-cover rounded-2xl"
              />

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-orange-400 text-orange-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce">
                Latest Work! 🎉
              </div>
              <div className="absolute -bottom-4 -left-4 bg-amber-400 text-amber-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                <Heart className="w-4 h-4 inline mr-1" />
                Handmade
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-amber-200 rounded-3xl transform rotate-6 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState } from "react";
import {
  Mail,
  Instagram,
  Youtube,
  Heart,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import ContactModal from "./ContactModal";
import { useStats } from "../hooks/useStats";

const Footer = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { stats, loading: statsLoading } = useStats();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      icon: Instagram,
      color: "hover:text-orange-700",
      label: "Instagram",
      url: "https://instagram.com/yutos_crochet",
    },
    {
      icon: Youtube,
      color: "hover:text-orange-800",
      label: "YouTube",
      url: "https://youtube.com/@yutoscrochet",
    },
    {
      icon: Mail,
      color: "hover:text-orange-900",
      label: "Email",
      action: () => setIsContactModalOpen(true),
    },
    {
      icon: MessageCircle,
      color: "hover:text-orange-600",
      label: "Discord",
      url: "https://discord.gg/crochet",
    },
  ];

  const quickLinks = [
    { name: "Latest Projects", action: () => scrollToSection("portfolio") },
    { name: "About Me", action: () => scrollToSection("about") },
    { name: "Contact", action: () => setIsContactModalOpen(true) },
  ];

  // Default stats if Supabase data isn't available
  const defaultStats = [
    { value: "150+", label: "Projects Completed" },
    { value: "25+", label: "Original Patterns" },
    { value: "3", label: "Years of Experience" },
    { value: "500+", label: "Hours of Crocheting" },
  ];

  const displayStats = stats.length > 0 ? stats : defaultStats;

  return (
    <>
      <footer
        id="contact"
        className="min-h-screen flex flex-col justify-center"
        style={{
          background:
            "linear-gradient(135deg, #fef3e2 0%, #fed7aa 20%, #fdba74 40%, #fb923c 60%, #f59542 80%, #ea580c 100%)",
        }}
      >
        <div className="container mx-auto px-4 py-16">
          {/* Connect Section - Two tones lighter */}
          <div
            className="rounded-3xl p-8 md:p-12 mb-16 text-center shadow-lg"
            style={{ backgroundColor: "#fb923c" }}
          >
            <h3 className="text-3xl font-bold mb-4 text-white">
              Let's Connect! 🧶
            </h3>
            <p className="text-xl mb-8 text-orange-100">
              Follow my crochet journey and get inspired for your next project
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://instagram.com/yutos_crochet"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-600 px-6 py-3 rounded-full font-bold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg"
              >
                <Instagram className="w-5 h-5" />
                <span>Follow on Instagram</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@yutoscrochet"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-600 px-6 py-3 rounded-full font-bold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg"
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
                <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-lg">
                  <img
                    src="/yuto-logo.png"
                    alt="Yuto's Crochet Corner Logo"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-orange-900">
                  Yuto's Crochet Corner
                </h3>
              </div>
              <p className="mb-6 leading-relaxed text-orange-800">
                Sharing the joy of crochet through colorful creations and
                helpful tutorials. Every stitch tells a story!
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) =>
                  social.url ? (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-orange-700 transition-all duration-200 p-2 rounded-full hover:bg-orange-200 ${social.color}`}
                      title={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ) : (
                    <button
                      key={index}
                      onClick={social.action}
                      className={`text-orange-700 transition-all duration-200 p-2 rounded-full hover:bg-orange-200 ${social.color}`}
                      title={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-orange-900">
                Explore
              </h4>
              <div className="space-y-3">
                {quickLinks.map((item, index) => (
                  <div key={index}>
                    <button
                      onClick={item.action}
                      className="text-orange-800 hover:text-orange-900 transition-all duration-200 text-left hover:translate-x-1 transform"
                    >
                      {item.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact & Info */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-orange-900">
                Get in Touch
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-1 text-orange-900">
                    Let’s Connect
                  </h5>
                  <p className="text-sm text-orange-800">
                    Feel free to say hi or share what you’re working on!
                  </p>
                </div>
                <div>
                  <h5 className="font-medium mb-1 text-orange-900">
                    Behind the Scenes
                  </h5>
                  <p className="text-sm text-orange-800">
                    Follow along as I experiment with new stitches, patterns,
                    and cozy creations.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium mb-1 text-orange-900">
                    For the Love of Crochet
                  </h5>
                  <p className="text-sm text-orange-800">
                    This space is all about creativity, calm, and the joy of
                    making something with your hands.
                  </p>
                </div>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 mt-4 transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="border-t border-orange-300 pt-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {statsLoading
                ? // Loading skeleton
                  Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="animate-pulse">
                      <div className="h-8 bg-orange-200 rounded mb-2"></div>
                      <div className="h-4 bg-orange-200 rounded"></div>
                    </div>
                  ))
                : displayStats.map((stat, index) => (
                    <div key={stat.key || index}>
                      <div className="text-2xl font-bold mb-1 text-orange-700">
                        {stat.value}
                      </div>
                      <div className="text-sm text-orange-800">
                        {stat.label}
                      </div>
                    </div>
                  ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-orange-300 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0 flex items-center text-orange-800">
              <Heart className="w-4 h-4 mr-1 text-orange-600" />© 2025 Yuto's
              Crochet Corner. Made with love and lots of yarn.
            </div>
            <div className="flex space-x-6">
              {["Privacy", "Terms", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() =>
                    link === "Contact" ? setIsContactModalOpen(true) : null
                  }
                  className="text-sm text-orange-800 hover:text-orange-900 transition-colors duration-200"
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
  );
};

export default Footer;

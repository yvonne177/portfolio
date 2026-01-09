// projects/VistaTactileDisplay.jsx
import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function VistaTactileDisplay() {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const handleBackToProjects = () => {
    navigate('/portfolio');
    // Scroll to projects section after navigation
    setTimeout(() => {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleHome = () => {
    navigate('/portfolio');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={handleBackToProjects}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors cursor-pointer"
            >
              <ArrowLeft size={20} />
              Back to All Projects
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={handleHome}
                className="hover:text-blue-600 transition-colors font-medium text-gray-700 cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={handleHome}
                className="hover:text-blue-600 transition-colors font-medium text-gray-700 cursor-pointer"
              >
                About
              </button>
              <button
                onClick={handleBackToProjects}
                className="hover:text-blue-600 transition-colors font-medium text-gray-700 cursor-pointer"
              >
                Projects
              </button>
              <button
                onClick={handleHome}
                className="hover:text-blue-600 transition-colors font-medium text-gray-700 cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 pb-12 px-4 bg-gradient-to-br from-blue-50 to-blue-100 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            Visual Information through Sensory Tactile Array (VISTA)
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Tactile museum display for accessibility
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">Mechatronics</span>
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">Hardware Design</span>
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">Haptic Feedback</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Overview */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              VISTA is a tactile pin-based museum display designed to create refreshable tactile images, allowing visitors to explore the relationship between haptic feedback and visual information. This project bridges accessibility and interactive design.
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Key Features</h2>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-blue-600 text-2xl flex-shrink-0">•</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Refreshable Tactile Display</h3>
                  <p className="text-gray-700">Pin array mechanism that dynamically changes to create different tactile patterns and shapes for museum visitors</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 text-2xl flex-shrink-0">•</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Accessibility Focused</h3>
                  <p className="text-gray-700">Designed specifically for visually impaired and blind visitors to experience artwork through touch</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 text-2xl flex-shrink-0">•</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Haptic-Visual Correlation</h3>
                  <p className="text-gray-700">Explores the relationship between tactile sensations and visual concepts like shape and color</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Images/Media */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Gallery</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center border-2 border-dashed border-gray-300">
                <p className="text-gray-500">Project Image 1</p>
              </div>
              <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center border-2 border-dashed border-gray-300">
                <p className="text-gray-500">Project Image 2</p>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Technologies Used</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Hardware</h3>
                <p className="text-gray-700">Pneumatic actuators, microcontroller, solenoid valves</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Software</h3>
                <p className="text-gray-700">Python, Arduino firmware, image processing</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Tools</h3>
                <p className="text-gray-700">SolidWorks, MATLAB, CAD design</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Results & Impact</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Describe the outcomes and impact of your project.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-200 bg-gray-50">
        <p>© 2025 Yvonne Zhang.</p>
      </footer>
    </div>
  )
}
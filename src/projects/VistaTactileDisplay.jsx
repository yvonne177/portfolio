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
                Abouthttps://yvonne177.github.io/portfolio/vista-tactile-display
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
              VISTA (Visual Information through Sensory Tactile Array) is a handheld tactile display designed to make visual art accessible to blind and visually-impaired museum visitors. The device uses a 7×5 actuated pin array contained by a soft silicone interface to render both shape and color through touch.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Each pin’s height encodes visual information, allowing users to feel contours, regions, and color boundaries of paintings or flags using their palm. The system bridges human haptic perception, mechanical actuation, and image processing to create a scalable, refreshable tactile interface for museum exhibits.
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Key Features</h2>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-blue-600 text-2xl flex-shrink-0">•</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Refreshable 7×5 Tactile Pin Array</h3>
                  <p className="text-gray-700">A grid of 35 independently actuated pins driven by servo-controlled cam mechanisms produces continuously variable pin heights. This enables the display to render low-resolution tactile “images” that users explore by sweeping their hand across the surface.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 text-2xl flex-shrink-0">•</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Shape & Color Encoding via Height</h3>
                  <p className="text-gray-700">The visual features of each image are split into geometry (shape) and chromatic regions (color). Shape emerges from spatial grouping and slopes of raised pins, while color is encoded as discrete height levels, allowing users to distinguish colored regions through touch.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 text-2xl flex-shrink-0">•</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Soft, Safe Human Interface</h3>
                  <p className="text-gray-700">A custom-molded Ecoflex™ silicone overlay stretches over the pin array to provide a compliant, skin-safe surface. Adjustable tensioning improves spatial clarity while preserving comfort for palm-based exploration.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Images/Media */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Gallery</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <img 
                src="/portfolio/vista-cad.jpeg" 
                alt="VISTA CAD"
                className="w-full h-full object-contain"
              />
              <div className="bg-white overflow-hidden aspect-video">
                <img
                  src="/portfolio/vista-key.jpeg"
                  alt="VISTA Key System"
                  className="w-full h-full object-contain"
              />
              </div>
              <div className="bg-white overflow-hidden aspect-video">
                <img
                  src="/portfolio/vista-electronics.jpeg"
                  alt="VISTA Electronics System"
                  className="w-full h-full object-contain"
                />
              </div>
              <img 
                src="/portfolio/vista-controls.jpeg" 
                alt="VISTA Controls System"
                className="w-full h-full object-contain"
              />
              <img 
                src="/portfolio/VISTA Cam System.jpeg" 
                alt="VISTA Cam System"
                className="w-full h-full object-contain"
              />
              <img 
                src="/portfolio/VISTA Silicone Overlay.jpeg" 
                alt="VISTA Silicon Overlay"
                className="w-full h-full object-contain"
              />

              <div className="bg-white rounded-xl shadow border overflow-hidden">
                <video
                  className="w-full h-80 object-contain"
                  controls
                  muted
                  loop
                  playsInline
                >
                  <source src="portfolio/vista-japan.mp4" type="video/mp4" />
                </video>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">Japan Flag</h3>
                  <p className="text-gray-600 text-sm">
                    Shape-based tactile rendering (circle vs background)
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow border overflow-hidden">
                <video
                  className="w-full h-80 object-contain"
                  controls
                  muted
                  loop
                  playsInline
                >
                  <source src="portfolio/vista-cam.mp4" type="video/mp4" />
                </video>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">Cam and Pin System</h3>
                  <p className="text-gray-600 text-sm">
                    Demonstration of cam and pin system
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Technologies Used</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Hardware</h3>
                <p className="text-gray-700">35 servo motors, cam-driven pin actuators, laser-cut MDF housing, 3D-printed PLA cams & pins, Ecoflex™ silicone overlay</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Software</h3>
                <p className="text-gray-700">Arduino firmware, Python image processing pipeline, real-time motor control</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Tools</h3>
                <p className="text-gray-700">SolidWorks CAD, MATLAB, 3D printing, laser cutting, haptic prototyping</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Results & Impact</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The VISTA prototype successfully demonstrated the ability to convey both shape and color through touch using a low-resolution tactile display.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              In a preliminary user study, 20 participants were asked to identify tactile renderings of national flags (Japan, Sweden, and Denmark) using the device alone. All participants correctly distinguished flags that differed in both shape and color while consulting a tactile legend.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              When distinguishing between flags that shared the same shape but differed only in color (Sweden vs. Denmark), 65% of participants were able to identify them correctly without assistance, demonstrating that height-based color encoding is perceptible but still cognitively demanding.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              These results validate the core premise of VISTA: that mechanically actuated pin heights can transmit meaningful visual structure through haptics, enabling accessible museum interactions. The project establishes a foundation for higher-resolution tactile displays capable of representing more complex artworks in future iterations.
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
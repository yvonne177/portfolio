// projects/VistaTactileDisplay.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function VistaTactileDisplay() {

  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0,0);
  },[])

  const goToMainSection = (section) => {
    navigate(`/portfolio#${section}`);

    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },100);
  };

  const handleBackToProjects = () => {
    goToMainSection("projects");
  };

  const handleHome = () => {
    navigate('/portfolio');

    setTimeout(() => {
      window.scrollTo({top:0,behavior:"smooth"});
    },100);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Left: Name */}
            <div className="flex-shrink-0 text-2xl font-bold text-gray-900">
              Yvonne Zhang
            </div>

            {/* Center: Menu */}
            <div className="hidden md:flex space-x-8 mx-auto">
              <button onClick={handleHome} className="hover:text-blue-600 font-medium text-gray-700">Home</button>
              <button onClick={() => goToMainSection("about me")} className="hover:text-blue-600 font-medium text-gray-700">About Me</button>
              <button onClick={() => goToMainSection("projects")} className="hover:text-blue-600 font-medium text-gray-700">Projects</button>
              <button onClick={() => goToMainSection("contact")} className="hover:text-blue-600 font-medium text-gray-700">Contact</button>
            </div>

            {/* Right: Resume */}
            <div>
              <a
                href="/portfolio/YvonneZhang_CV_Jan2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
              >
                Resume
              </a>
            </div>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 pb-12 px-4 bg-gradient-to-br from-blue-50 to-blue-100 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            VISTA - Haptic Museum Display
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Visual Information through Sensory Tactile Array (VISTA) aims for museum display accessibility and the exploration of the correlation between tactile senses to colors and shape
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">Fusion 360</span>
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">Arduino</span>
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">Python</span>
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">Haptic Research</span>
          </div>
          <div className="mt-4 mb-4 text-gray-600 text-lg">
            <span className="font-semibold">Project Duration:</span> September 2025 – December 2025
          </div>        
        </div>
      </section>

      {/* Content Section */}
      <section className="py-0 px-4">
        <div className="max-w-4xl mx-auto space-y-12">

        {/* Summary */}
        <section className="flex justify-center mb-16">
          <div className="max-w-4xl w-full bg-gradient-to-br from-blue-50 to-blue-50 p-8 rounded-lg border-2 border-blue-200">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Project Summary</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Designed a fully functional prototype of a pin array tactile display to explore the connection between haptic feedback and information translation of color and shape.
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Key Features</h3>
              <li>✓ 7x5 pin array with independently actuated cam to pin height controls</li>
              <li>✓ Color-to-Height mapping algorithm between yellow, red, blue and white</li>
              <li>✓ Silicone overlay Ecoflex™ 00-30 for tactile interface</li>
              <li>✓ Arduino to Python pipeline for image processing, height encoding, and synchronized multi-actuator control</li>
            </ul>
            <ul className="space-y-2 text-gray-700 mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Takeaways</h3>
              <li>✓ Achieved 100% success rate in shape recognition through Flag Identification Study</li>
              <li>✓ Demonstrated feasibility of multi-modal encoding between shape and color through height</li>
              <li>✓ Submission of Work-In-Progress paper to the Haptics Symposium 2026</li>
            </ul>
          </div>
        </section>

          {/* Overview */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Context and Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              According to the American Alliance of Museums, 7 million visually impaired individuals in the US face a largely inaccessible cultural landscape. VISTA (Visual Information through Sensory Tactile Array) is a handheld tactile display designed to make visual art accessible to blind and visually-impaired museum visitors.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The device uses a 7×5 actuated pin array contained by a soft silicone interface that aims to render both shape and color through touch. Each pin’s height encodes visual information, allowing users to feel contours, regions, and color boundaries of paintings or flags using their palm. The system bridges human haptic perception, mechanical actuation, and image processing to create a scalable, refreshable tactile interface for museum exhibits.
            </p>
          </div>
          
          {/* System Architecture */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">System Architecture</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The research question for this project was: How can pin height differentiation in a mechanically actuated tactile array be used to encode both geometric structure (shape) and chromatic information (color) for non-visual perception?            
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The following is our main pipeline from flag images translated into tactile feedback on the display surface.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            {/* Input */}
            <div className="flex flex-col items-center">
              <div className="p-6 border rounded-xl shadow bg-white w-56">
                <h3 className="font-semibold text-lg">Input Image</h3>
                <p className="text-sm text-gray-600 mt-2">Processing / Python</p>
              </div>
            </div>
            {/* Arrow */}
            <div className="flex flex-col items-center">
              <span className="text-3xl md:rotate-0 rotate-90">→</span>
              <p className="text-sm text-gray-500 mt-1">Downsample (7×5)</p>
            </div>
            {/* Mapping */}
            <div className="flex flex-col items-center">
              <div className="p-6 border rounded-xl shadow bg-white w-56">
                <h3 className="font-semibold text-lg">Mapping Logic</h3>
                <p className="text-sm text-gray-600 mt-2">Color → Height → Angle</p>
              </div>
            </div>
            {/* Arrow */}
            <div className="flex flex-col items-center">
              <span className="text-3xl md:rotate-0 rotate-90">→</span>
              <p className="text-sm text-gray-500 mt-1">Servo Motor Actuation</p>
            </div>
            {/* Hardware */}
            <div className="flex flex-col items-center">
              <div className="p-6 border rounded-xl shadow bg-white w-56">
                <h3 className="font-semibold text-lg">Physical Array</h3>
                <p className="text-sm text-gray-600 mt-2">35× Cam Actuators</p>
              </div>
            </div>

          </div>

          {/* Engineering Design */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Mechanical Design</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The device requires the control of 35 pins, all individually actuated using servo motors. 
              The mechanical design of the cam-to-pin mechanism was optimized as closely possible while 
              ensuring differentiable height differences to correlate to the color legend.
            </p>
            <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-8">

              <li>
                <span className="font-semibold text-gray-900">Cam Mechanism Design:</span>{" "}
                The cam profiles were designed with a 1.5-inch pitch radius to generate four
                discrete pin height levels. This geometry required approximately 1.6 inches
                of spacing between pins, resulting in a larger spaced but still interpretable
                tactile grid suitable for palm-based exploration.
              </li>

              <li>
                <span className="font-semibold text-gray-900">Silicone Tactile Interface:</span>{" "}
                A custom overlay made from Smooth-On Ecoflex™ 00-30 silicone was fabricated
                to create a continuous tactile surface above the discrete pin array. The
                membrane was lightly coated with cornstarch to reduce friction and used a
                three-level tensioning system to improve tactile clarity and transmission of
                height variations.
              </li>

            </ul>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="/portfolio/vista-cad.jpeg" 
                alt="VISTA CAD"
                className="w-full h-full object-contain"
              />
              <img
                src="/portfolio/vista-key.jpeg"
                alt="VISTA Key System"
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
            </div>
          </div>

          {/* Electrical */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Electronics Design and Pipeline</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The control system is respnsible for the actuation of all 35 servo motors to translate pixel data into physical topogrpahy using the mapping algorithm.
            </p>
            <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-8">

              <li>
                <span className="font-semibold text-gray-900">Color-to-Height Mapping:</span>{" "}
                Colors were converted into four distinguishable height levels to convey tactile depth: 
                Yellow (17.5 mm), Red (9.8 mm), Blue (6.3 mm) and White (2.7 mm), allowing users to
                differentiate regions of an image by touch.
              </li>

              <li>
                <span className="font-semibold text-gray-900">Distributed Servo Control:</span>{" "}
                Two Arduino boards were used to manage 35 servo motors (one per pin) to avoid
                exceeding current limits and ensure precise, independent actuation of each pin
                for accurate image rendering.
              </li>

            </ul>
            <div className="grid md:grid-cols-2 gap-6">
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
            </div>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Results & Impact</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The VISTA prototype was validated through a “Flag Identification” study using Japan, Sweden, and Denmark flags to test shape and color recognition through touch alone.
            </p>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
              <li>
                <span className="font-semibold text-gray-900">Shape Recognition:</span>{" "}
                100% of participants correctly distinguished flags with differing geometries, such as Japan vs. Sweden.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Color Distinguishability:</span>{" "}
                Differentiating flags that only varied in color (Sweden vs. Denmark) was more challenging, with an initial 35% error rate. Adding a tactile legend enabled accurate mapping of pin height to color.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Tactile Encoding Feasibility:</span>{" "}
                Results indicate that mechanically actuated pin heights can effectively convey both shape and color, supporting accessible museum interactions.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Future Potential:</span>{" "}
                Establishes a foundation for higher-resolution tactile displays capable of representing more complex artworks in future iterations.
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-gray-900">Demo Videos</h2>
              <div className="bg-white rounded-xl shadow border overflow-hidden">
                <video
                  className="w-full h-80 object-contain"
                  controls
                  muted
                  loop
                  playsInline
                >
                  <source src="/portfolio/vista-japan.mp4" type="video/mp4" />
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
                <source src="/portfolio/vista-cam.mp4" type="video/mp4" />
                </video>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">Cam and Pin System</h3>
                  <p className="text-gray-600 text-sm">
                    Demonstration of cam and pin system
                  </p>
                </div>
              </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-200 bg-gray-50">
        <p>© 2026 Yvonne Zhang.</p>
      </footer>
    </div>
  )
}
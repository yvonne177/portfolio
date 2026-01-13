import React from 'react'
import { ArrowLeft } from 'lucide-react'

export default function AutonomousRover() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a
              href="/portfolio/"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <ArrowLeft size={20} />
              Back to All Projects
            </a>
            
            <div className="hidden md:flex space-x-8">
              <a href="/portfolio" className="hover:text-blue-600 transition-colors font-medium text-gray-700">Home</a>
              <a href="/portfolio#about" className="hover:text-blue-600 transition-colors font-medium text-gray-700">About</a>
              <a href="/portfolio#projects" className="hover:text-blue-600 transition-colors font-medium text-gray-700">Projects</a>
              <a href="/portfolio#contact" className="hover:text-blue-600 transition-colors font-medium text-gray-700">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 pb-12 px-4 bg-gradient-to-br from-blue-50 to-blue-100 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Autonomous Maze-Solving Rover</h1>
          <p className="text-xl text-gray-700 mb-6">Real-time localization and autonomous block retrieval in constrained environments</p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">Robotics</span>
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">Autonomous Systems</span>
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">Sensor Fusion</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Overview */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A fully autonomous rover that navigates mazes, localizes using histogram-based convergence algorithms and ultrasonic sensor fusion, detects a target block via time-of-flight sensing, and delivers it to a user-specified drop-off zone. The system operates with continuous sensor polling and adaptive wall-following behavior, completing missions in under 5 minutes within a 12"×12"×12" footprint and 5 lb weight.
            </p>
          </div>

          {/* Gallery */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Gallery</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <img 
                src="/portfolio/autonomous-rover-cad.jpeg" 
                alt="Autonomous Rover CAD"
                className="w-full h-full object-contain"
              />
              <div className="bg-white rounded-xl shadow border overflow-hidden">
                {/* Video */}
                <div className="w-full aspect-video bg-black">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/L4viNf_tiTk"
                    title="Autonomous Rover – Final Project"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy" 
                  />
                </div>

                {/* Caption */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">About the Project</h3>
                  <p className="text-gray-600 text-sm mb-0">
                    This video summarizes the design process for mechanical and electronics components, and the overall mechatronics systems integration. The team was successful in finishing as a top 10 design for all three design milestones.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Design */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Design</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Structure & Mechanics</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The 6"×6"×7" rover uses a modular three-platform architecture with M4 standardized fasteners for easy assembly. Threaded rods and laser-cut plywood create a rigid frame with adjustable platforms. A tricycle configuration (two powered front wheels + caster rear) provides simple, effective mobility while a servo-driven sweeper arm and ramp system replace traditional grippers, reducing motor count and power consumption.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sensing & Control</h3>
                <p className="text-gray-700 leading-relaxed">
                  Eight ultrasonic sensors (cardinal directions + angled corners) enable 360° wall detection with parallel alignment sensing. Dual side sensors are continuously polled every 6 inches to detect path changes and maintain parallel alignment. A time-of-flight sensor detects the block at the gripper. Two Arduino boards segregate motor control (lower platform) from sensor processing (upper platform). Battery placement on the bottom platform lowers center of gravity and improves turning radius.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Algorithm */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Navigation & Localization</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The rover employs histogram-based probabilistic localization combined with reactive wall-following to navigate mazes and converge on its position within a 1'×1' grid cell.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Localization Method</h4>
                <p className="text-gray-700">A histogram algorithm builds probability matrices for each heading assumption (UP, RIGHT, DOWN, LEFT) by comparing real-time ultrasonic readings against a pre-loaded maze map. Wall configurations detected by the front and side sensors update belief values. Once convergence criteria are met,when the maximum probability is more than twice the second-highest, the rover identifies its unique position and heading.</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Navigation Strategy</h4>
                <p className="text-gray-700">With bias toward the left and upward, the rover uses wall-following with 6-inch sensor polling intervals. Upon detecting a clear path (front sensor &gt;6"), it moves forward. When blocked (front &lt;4.5"), it evaluates side lanes and turns toward the larger opening. Dual side sensors enforce parallel alignment to walls, preventing drift and ensuring accurate position updates for the histogram algorithm.</p>
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-gray-700"><strong>Key Features:</strong> Histogram convergence eliminates need for compass/gyroscope • Continuous 6-inch sensor polling enables online localization • Dual side sensors maintain centering • Adaptive turning selects longest available path</p>
            </div>
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
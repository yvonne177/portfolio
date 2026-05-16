// projects/AutonomousRover.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AutonomousRover() {

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
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Autonomous Maze-Solving Rover</h1>
          <p className="text-xl text-gray-700 mb-6">Autonomous localization and block retrieval in predefined maze environment</p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">SolidWorks</span>
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">Arduino</span>
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">Python</span>
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">Autonomous Systems</span>
          </div>
          <div className="mt-4 mb-4 text-gray-600 text-lg">
            <span className="font-semibold">Project Duration:</span> September 2024 – December 2024
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
                Designed a fully autonomous rover capable of navigating mazes, localizing its position, detecting target blocks, and delivering them to a specified location using real-time sensor fusion and adaptive navigation strategies.
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Key Features</h3>
                <li>✓ Histogram-based probabilistic localization</li>
                <li>✓ 360° wall detection via ultrasonic sensors</li>
                <li>✓ Adaptive wall-following and path selection</li>
                <li>✓ Dual Arduino boards for sensor processing and motor control</li>
              </ul>
              <ul className="space-y-2 text-gray-700 mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Takeaways</h3>
                <li>✓ Successfully completed maze missions under 5 minutes</li>
                <li>✓ Demonstrated integration of sensors, control algorithms, and mechanical design</li>
                <li>✓ Ranked top 10 across all design milestones</li>
              </ul>
            </div>
          </section>

          {/* Context & Overview */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Context and Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Autonomous navigation in constrained environments is critical for robotics applications, from warehouse automation to search and rescue. This project focuses on combining mechanical design, sensor fusion, and algorithmic navigation to create a compact and reliable rover capable of completing defined missions autonomously.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The rover’s compact 12"×12"×12" footprint and 5 lb weight, coupled with a tricycle drive configuration and servo-actuated mechanisms, allowed reliable operation and accurate block retrieval within complex maze layouts.
            </p>
          </div>

          {/* System Architecture */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">System Architecture</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The design integrates modular mechanical platforms, distributed electronics, and navigation algorithms to enable reliable autonomous performance.
            </p>
          </div>

          {/* Workflow Diagram */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="p-6 border rounded-xl shadow bg-white w-56">
                <h3 className="font-semibold text-lg">Sensor Inputs</h3>
                <p className="text-sm text-gray-600 mt-2">Ultrasonic & Time-of-Flight Sensors</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:rotate-0 rotate-90">→</span>
              <p className="text-sm text-gray-500 mt-1">Localization Algorithm</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-6 border rounded-xl shadow bg-white w-56">
                <h3 className="font-semibold text-lg">Histogram Localization</h3>
                <p className="text-sm text-gray-600 mt-2">Position & Heading Estimation</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:rotate-0 rotate-90">→</span>
              <p className="text-sm text-gray-500 mt-1">Motion Control</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-6 border rounded-xl shadow bg-white w-56">
                <h3 className="font-semibold text-lg">Actuation & Mechanics</h3>
                <p className="text-sm text-gray-600 mt-2">Motors, Servo Arm & Ramp</p>
              </div>
            </div>
          </div>

          {/* Mechanical Design (Expanded) */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Mechanical Design</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The rover features a modular three-platform architecture designed for quick assembly and maintenance. Threaded rods and laser-cut plywood plates create a lightweight yet sturdy chassis, while a tricycle drive configuration ensures smooth turns in narrow corridors.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              A servo-driven sweeper arm and ramp mechanism enable reliable block collection with minimal motor usage. CAD iterations optimized weight distribution, clearance for obstacles, and ease of component replacement.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="/portfolio/autonomous-rover-cad.jpeg" 
                alt="Rover CAD"
                className="w-full h-full object-contain"
              />
              <img 
                src="/portfolio/Rover_FullBody.png" 
                alt="Rover Mechanical System"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Electronics (Expanded) */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Electronics Architecture</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Two Arduino boards handle distributed tasks: one processes sensor data, including ultrasonic and Time-of-Flight sensors, while the other manages motor actuation and servo control. The electronics are modular, with separate power rails for motors and sensors to reduce noise.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Custom wiring harnesses and a compact PCB layout streamline connections, while status LEDs provide debugging visibility. Continuous polling of sensor arrays feeds the histogram localization algorithm for real-time position estimation. The figures below show the top (left) and bottom (right) tiers of Arduinos and the power distribution through the breadboard.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <img
                src="/portfolio/TopPower.png"
                alt="Top Electronics Layout"
                className="w-full h-full object-contain"
              />
              <img
                src="/portfolio/BottomPower.png"
                alt="Bottom Electronics Layout"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Control System */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Control System and Algorithms</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The rover control system consists of three modular components:
              <strong> obstacle avoidance</strong>, <strong> localization</strong>, and
              <strong> block detection and pickup</strong>. These subsystems work together
              to enable autonomous navigation, block retrieval, and delivery.
            </p>

            <img
              src="/portfolio/control_architecture.png"
              alt="Rover control system architecture"
              className="w-full max-w-2xl mx-auto my-8"
            />

            {/* Obstacle Avoidance */}
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Obstacle Avoidance</h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Ultrasonic sensors mounted on the front and sides of the rover detect nearby
              walls and obstacles. Differences between side sensor readings indicate when
              the rover is angled relative to the wall.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When a slant is detected, the rover calculates a correction angle and performs
              incremental rotations until it is parallel again. The front sensor then
              determines whether the rover should take a large or small forward step.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto my-8">
              <img
                src="/portfolio/side_sensor_angle.png"
                alt="Side sensor angle detection"
                className="w-full object-contain"
              />
              <img
                src="/portfolio/ultrasoundsensor_setup.png"
                alt="Ultrasonic sensor setup"
                className="w-full object-contain"
              />

            </div>

            {/* Localization */}
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Localization (2D Histogram)</h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Localization is performed using a probabilistic histogram filter. The maze
              is represented as a grid where each cell corresponds to a possible rover
              position with a unique wall configuration.
            </p>
            <div className="grid md:grid-cols-2 gap-4 max-w-lg mx-auto my-8">
              <img
                src="/portfolio/maze_index_map.png"
                alt="Maze index map"
                className="w-full max-w-xl mx-auto my-6"
              />
              <img
                src="/portfolio/wall_blocking_pattern.png"
                alt="Wall blocking patterns"
                className="w-full max-w-xl mx-auto my-6"
              />
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Sensor readings update a probability matrix representing the likelihood of
              the rover being in each cell. After each movement, the matrix shifts to
              reflect the rover’s displacement and the probabilities are updated again.
            </p>

            <img
              src="/portfolio/Histogram.png"
              alt="Histogram localization matrix"
              className="w-full max-w-xl mx-auto my-6"
            />

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Since the rover begins with an unknown orientation, four probability matrices
              are tracked simultaneously. The system converges once a single orientation
              produces a dominant probability.
            </p>

            {/* Block Detection */}
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Block Detection and Pick-Up</h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Two Time-of-Flight sensors mounted at different heights detect the presence
              of a block. The top sensor measures wall distance while the lower sensor
              detects the block when a shorter distance reading occurs.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The rover scans the loading zone by rotating in small increments and
              comparing both sensor readings. A significant difference indicates the
              presence of the block.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Once detected, the rover aligns its ramp with the block and activates a
              wire-winding pickup mechanism to pull the block onto the ramp.
            </p>
            <img
              src="/portfolio/tof_sensor_setup.png"
              alt="TOF sensor configuration"
              className="w-full max-w-xl mx-auto my-6"
            />
            <img
              src="/portfolio/scanning_area.png"
              alt="Block scanning coverage"
              className="w-full max-w-xl mx-auto my-6"
            />
          </div>

          {/* Results (Expanded) */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Results & Impact</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Across multiple test mazes, the rover consistently completed missions in under 5 minutes. The system demonstrated strong reliability, with less than 1 grid cell deviation in localization across all runs.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
              <li>
                <span className="font-semibold text-gray-900">Navigation Accuracy:</span> Histogram localization achieved less than 1 grid cell error across all runs.
              </li>              
              <li>
                <span className="font-semibold text-gray-900">Mission Completion:</span> Autonomous retrieval of target blocks in complex maze layouts.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Design Robustness:</span> Tricycle drive and modular architecture simplified assembly and improved maneuverability.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Electronics Reliability:</span> Continuous operation of distributed Arduino boards without sensor failures or motor stalls.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Control Performance:</span> Smooth adaptive wall-following and block retrieval with minimal oscillation and precise actuation.
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              Lessons learned include the importance of modular design for rapid iteration, careful power separation for electronics reliability, and rigorous testing of localization algorithms in constrained environments.
            </p>
          </div>

          {/* Demo Video */}
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Demo Video</h2>
          <div className="bg-white rounded-xl shadow border overflow-hidden mb-16">
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
              <h3 className="font-semibold text-gray-900">Maze Navigation & Retrieval</h3>
              <p className="text-gray-600 text-sm">
                Demonstration of the rover autonomously navigating and collecting blocks.
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
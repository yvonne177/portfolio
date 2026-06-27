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

  const handleHome = () => {
    navigate('/portfolio');

    setTimeout(() => {
      window.scrollTo({top:0,behavior:"smooth"});
    },100);
  };

  return (

    <div className="min-h-screen bg-[#F5F3EE] text-gray-900 overflow-x-hidden">

      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-[#F5F3EE]/95 backdrop-blur-md border-b border-[#D9D3C7]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="flex justify-between items-center h-16">

            <div className="text-2xl font-bold tracking-tight font-['Cormorant_Garamond'] text-[#18342E]">
              Yvonne Zhang
            </div>

            <div className="hidden md:flex space-x-10">

              <button
                onClick={handleHome}
                className="text-sm uppercase tracking-[0.2em] text-gray-700 hover:text-[#2A5C52] transition-colors"
              >
                Home
              </button>

              <button
                onClick={() => goToMainSection('about me')}
                className="text-sm uppercase tracking-[0.2em] text-gray-700 hover:text-[#2A5C52] transition-colors"
              >
                About
              </button>

              <button
                onClick={() => goToMainSection('projects')}
                className="text-sm uppercase tracking-[0.2em] text-[#2A5C52] transition-colors"
              >
                Projects
              </button>

              <button
                onClick={() => goToMainSection('contact')}
                className="text-sm uppercase tracking-[0.2em] text-gray-700 hover:text-[#2A5C52] transition-colors"
              >
                Contact
              </button>

            </div>

            <a
              href="/portfolio/YvonneZhang_CV_Jan2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block text-sm uppercase tracking-[0.2em] text-gray-700 hover:text-[#2A5C52] transition-colors"
            >
              Resume
            </a>

          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-24">

        <div className="absolute inset-0 bg-[#2A5C52]">

          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
              `,
              backgroundSize: '32px 32px'
            }}
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />

        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

            {/* LEFT */}
            <div className="text-white">

              <p className="uppercase tracking-[0.35em] text-sm mb-5 text-blue-100 font-medium">
                Autonomous Systems • Robotics • Embedded Controls
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8 font-['Cormorant_Garamond']">
                Autonomous
                <br />
                Maze-Solving
                <br />
                Rover
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mb-10 font-light">
                Fully autonomous rover capable of maze navigation, probabilistic localization, obstacle avoidance, and block retrieval using real-time sensor fusion and adaptive navigation strategies.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                {[
                  "SolidWorks",
                  "Arduino",
                  "Python"
                ].map((skill, idx) => (

                  <span
                    key={idx}
                    className="text-[11px] uppercase tracking-[0.18em] border border-white/30 text-blue-100 px-4 py-2"
                  >
                    {skill}
                  </span>

                ))}

              </div>

              <div className="text-blue-100 text-lg">
                <span className="font-semibold text-white">
                  Project Duration:
                </span>{" "}
                September 2024 – December 2024
              </div>

            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">

              <div className="bg-white p-4 shadow-2xl rotate-[3deg] max-w-md">

                <img
                  src="/portfolio/rover-full-body.png"
                  alt="Autonomous Rover"
                  className="w-full h-[420px] object-contain"
                />

                <p className="text-center mt-4 text-sm tracking-wide text-gray-700">
                  Autonomous Rover Prototype
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 px-6 lg:px-10">

        <div className="max-w-6xl mx-auto space-y-28">

          {/* SUMMARY */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Overview
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Project Summary
              </h2>

            </div>

            <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-10 lg:p-12">

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Designed and built a fully autonomous rover capable of navigating a predefined maze, localizing its position, detecting target blocks, and retrieving them using distributed electronics, real-time sensing, and adaptive control algorithms.
              </p>

              <div className="grid lg:grid-cols-2 gap-12">

                <div>

                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                    Key Features
                  </h3>

                  <ul className="space-y-4 text-gray-700 leading-relaxed">

                    <li>✓ Histogram-based probabilistic localization</li>

                    <li>✓ 360° wall detection using ultrasonic and ToF sensors</li>

                    <li>✓ Adaptive wall-following and navigation correction algorithms</li>

                    <li>✓ Dual Arduino architecture for distributed sensing and motor control</li>

                  </ul>

                </div>

                <div>

                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                    Takeaways
                  </h3>

                  <ul className="space-y-4 text-gray-700 leading-relaxed">

                    <li>✓ Successfully completed autonomous maze missions under 5 minutes</li>

                    <li>✓ Integrated sensing, controls, and mechanical systems into a reliable robotics platform</li>

                    <li>✓ Ranked top 10 across all design milestones</li>

                  </ul>

                </div>

              </div>

            </div>

          </section>

          {/* CONTEXT */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Background
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Context & Overview
              </h2>

            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700">

              <p>
                Autonomous navigation in constrained environments is critical for robotics applications ranging from warehouse automation to search-and-rescue systems. This project focused on integrating mechanical design, distributed electronics, and probabilistic algorithms into a compact autonomous rover platform.
              </p>

              <p>
                The rover was designed to navigate a predefined maze, identify its location using real-time sensor measurements, detect target blocks, and retrieve them autonomously. The final system combined adaptive wall-following, histogram localization, and embedded motor control into a lightweight modular architecture.
              </p>

            </div>

          </section>

          {/* SYSTEM */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Pipeline
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                System Architecture
              </h2>

            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-14">

              <p>
                The rover combines distributed sensing, localization algorithms, and mechanical actuation to autonomously navigate the maze and retrieve target blocks.
              </p>

              <p>
                The following pipeline summarizes the flow of information from environmental sensing to autonomous actuation.
              </p>

            </div>

            {/* Block Diagram */}
            <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 text-center">

              {/* INPUT */}
              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">

                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Sensor Inputs
                </h3>

                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Ultrasonic + ToF
                </p>

              </div>

              {/* ARROW */}
              <span className="text-3xl text-[#2A5C52] -mt-2">
                →
              </span>

              {/* LOCALIZATION */}
              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">

                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Localization
                </h3>

                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Histogram Filter
                </p>

              </div>

              {/* ARROW */}
              <span className="text-3xl text-[#2A5C52] -mt-2">
                →
              </span>

              {/* NAVIGATION */}
              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">

                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Navigation Logic
                </h3>

                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Path Planning
                </p>

              </div>

              {/* ARROW */}
              <span className="text-3xl text-[#2A5C52] -mt-2">
                →
              </span>

              {/* ACTUATION */}
              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">

                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Motor Control
                </h3>

                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Dual Arduino System
                </p>

              </div>

              {/* ARROW */}
              <span className="text-3xl text-[#2A5C52] -mt-2">
                →
              </span>

              {/* OUTPUT */}
              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">

                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Autonomous Rover
                </h3>

                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Navigation + Retrieval
                </p>

              </div>

            </div>

          </section>

          {/* MECHANICAL */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Design
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Mechanical Design
              </h2>

            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-10">

              <p>
                The rover uses a modular three-platform architecture built from laser-cut plywood and threaded rods to create a lightweight yet rigid chassis optimized for maze navigation and rapid iteration.
              </p>

            </div>

            <ul className="space-y-6 text-gray-700 leading-relaxed mb-14 text-lg">

              <li>
                <span className="font-semibold text-[#18342E]">
                  Tricycle Drive Configuration:
                </span>{" "}
                The rover uses a differential drive with a rear caster wheel to minimize turning radius and improve maneuverability in narrow maze corridors while maintaining stable forward motion.
              </li>

              <li>
                <span className="font-semibold text-[#18342E]">
                  Servo-Driven Pickup Mechanism:
                </span>{" "}
                A servo-actuated sweeper arm and ramp system was developed to reliably collect blocks with minimal motor complexity while maintaining a compact chassis footprint.
              </li>

            </ul>

            <div className="grid md:grid-cols-2 gap-8">

              {[
                "/portfolio/rover-cad.jpeg",
                "/portfolio/rover-full-body.png"
              ].map((image, idx) => (

                <div
                  key={idx}
                  className="bg-white p-4 shadow-xl"
                >

                  <img
                    src={image}
                    alt=""
                    className="w-full h-[320px] object-contain"
                  />

                </div>

              ))}

            </div>

          </section>

          {/* ELECTRONICS */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Controls
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Electronics & Algorithms
              </h2>

            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-10">

              <p>
                The rover electronics architecture distributes sensing, localization, and actuation tasks across two Arduino boards to improve reliability and maintain real-time performance during navigation.
              </p>

            </div>

            <ul className="space-y-6 text-gray-700 leading-relaxed mb-14 text-lg">

              <li>
                <span className="font-semibold text-[#18342E]">
                  Histogram Localization:
                </span>{" "}
                A probabilistic histogram filter continuously updates rover position estimates using wall configuration measurements from ultrasonic sensors and movement updates from motor commands.
              </li>

              <li>
                <span className="font-semibold text-[#18342E]">
                  Distributed Electronics:
                </span>{" "}
                Separate Arduino boards were dedicated to sensing and motor actuation to reduce timing bottlenecks and improve modularity between localization and control systems.
              </li>

            </ul>

            <div className="grid md:grid-cols-2 gap-8">

              <div className="bg-white p-4 shadow-xl">

                <img
                  src="/portfolio/rover-top-power.png"
                  alt="Top Electronics Layout"
                  className="w-full h-[320px] object-contain"
                />

              </div>

              <div className="bg-white p-4 shadow-xl">

                <img
                  src="/portfolio/rover-bottom-power.png"
                  alt="Bottom Electronics Layout"
                  className="w-full h-[320px] object-contain"
                />

              </div>

            </div>

          </section>

          {/* CONTROL SYSTEM */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Autonomy
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Control System
              </h2>

            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-10">

              <p>
                The rover control stack integrates obstacle avoidance, localization, and block retrieval into a unified autonomous system capable of completing full maze missions without human intervention.
              </p>

            </div>

            <div className="bg-white p-6 shadow-xl mb-12">

              <img
                src="/portfolio/rover-control-architecture.png"
                alt="Rover control architecture"
                className="w-full max-w-4xl mx-auto object-contain"
              />

            </div>

            <div className="space-y-14">

              {/* Obstacle Avoidance */}
              <div>

                <h3 className="text-3xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                  Obstacle Avoidance
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Ultrasonic sensors mounted around the rover continuously measure wall distances and detect angular misalignment relative to surrounding maze geometry.
                </p>

                <div className="grid md:grid-cols-2 gap-8">

                  <div className="bg-white p-4 shadow-xl">
                    <img
                      src="/portfolio/rover-side-sensor-angle.png"
                      alt="Side sensor angle detection"
                      className="w-full h-[300px] object-contain"
                    />
                  </div>

                  <div className="bg-white p-4 shadow-xl">
                    <img
                      src="/portfolio/rover-ultrasound-sensor-setup.png"
                      alt="Ultrasonic sensor setup"
                      className="w-full h-[300px] object-contain"
                    />
                  </div>

                </div>

              </div>

              {/* Localization */}
              <div>

                <h3 className="text-3xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                  Localization
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  A histogram filter tracks rover position probabilities across the maze grid using sensor observations and movement updates to estimate the most likely rover location and orientation.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">

                  <div className="bg-white p-4 shadow-xl">
                    <img
                      src="/portfolio/rover-maze-index-map.png"
                      alt="Maze map"
                      className="w-full h-[280px] object-contain"
                    />
                  </div>

                  <div className="bg-white p-4 shadow-xl">
                    <img
                      src="/portfolio/rover-wall-blocking-pattern.png"
                      alt="Wall patterns"
                      className="w-full h-[280px] object-contain"
                    />
                  </div>

                </div>

                <div className="bg-white p-4 shadow-xl max-w-2xl mx-auto">

                  <img
                    src="/portfolio/rover-histogram.png"
                    alt="Histogram localization"
                    className="w-full h-[320px] object-contain"
                  />

                </div>

              </div>

              {/* Block Detection */}
              <div>

                <h3 className="text-3xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                  Block Detection & Retrieval
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Dual Time-of-Flight sensors mounted at different heights detect target blocks by comparing wall distance measurements during rotational scanning maneuvers.
                </p>

                <div className="grid md:grid-cols-2 gap-8">

                  <div className="bg-white p-4 shadow-xl">
                    <img
                      src="/portfolio/rover-tof-sensor-setup.png"
                      alt="TOF sensor setup"
                      className="w-full h-[300px] object-contain"
                    />
                  </div>

                  <div className="bg-white p-4 shadow-xl">
                    <img
                      src="/portfolio/rover-scanning-area.png"
                      alt="Scanning area"
                      className="w-full h-[300px] object-contain"
                    />
                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* RESULTS */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Validation
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Results & Impact
              </h2>

            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700">

              <p>
                Across multiple maze trials, the rover consistently completed autonomous retrieval missions while maintaining accurate localization and stable wall-following performance.
              </p>

            </div>

            <ul className="space-y-6 text-gray-700 leading-relaxed mt-10 text-lg">

              <li>
                <span className="font-semibold text-[#18342E]">
                  Navigation Accuracy:
                </span>{" "}
                Histogram localization maintained less than one grid-cell deviation throughout all test runs.
              </li>

              <li>
                <span className="font-semibold text-[#18342E]">
                  Mission Completion:
                </span>{" "}
                Successfully completed autonomous maze navigation and target block retrieval in under five minutes.
              </li>

              <li>
                <span className="font-semibold text-[#18342E]">
                  Electronics Reliability:
                </span>{" "}
                Distributed Arduino architecture enabled stable sensing and motor actuation without sensor dropouts or motor stalls.
              </li>

              <li>
                <span className="font-semibold text-[#18342E]">
                  System Integration:
                </span>{" "}
                Demonstrated successful integration of sensing, controls, localization, and mechanical systems into a cohesive robotics platform.
              </li>

            </ul>

          </section>

          {/* VIDEO */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Media
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Demo Video
              </h2>

            </div>

            <div className="bg-white shadow-xl overflow-hidden">

              <div className="w-full aspect-video bg-black">

                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/L4viNf_tiTk"
                  title="Autonomous Rover Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-2">
                  Maze Navigation & Retrieval
                </h3>

                <p className="text-gray-600">
                  Demonstration of autonomous localization, navigation, and block retrieval.
                </p>

              </div>

            </div>

          </section>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="py-6 bg-[#102521] text-center text-gray-400 text-sm tracking-wide">

        © 2026 Yvonne Zhang

      </footer>

    </div>
  )
}
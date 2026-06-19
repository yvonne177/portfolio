// projects/HandTrackingProject.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HandTrackingProject() {
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
      window.scrollTo({ top:0, behavior:"smooth" });
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
                Human-Robot Interaction
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8 font-['Cormorant_Garamond']">
                Hand Tracking
                <br />
                for Gesture-Based
                <br />
                Robot Interaction
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mb-10 font-light">
                A real-time hand tracking and gesture recognition pipeline for the
                Franka Research 3, built with an Intel RealSense D455, ROS2, and
                MediaPipe, using depth sensing to enable intuitive robot interaction
                through vision-based hand gestures.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "Computer Vision", "ROS2", "Python"
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
                June to August 2024
              </div>

            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">

              <div className="bg-white p-4 shadow-2xl rotate-[3deg] max-w-md">

                <img
                  src="/portfolio/franka-camera-mount.jpeg"
                  alt="Intel RealSense D455 Hand Tracking"
                  className="w-full h-[420px] object-contain"
                />

                <p className="text-center mt-4 text-sm tracking-wide text-gray-700">
                  RealSense D455 mounted on Franka Research 3
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
                Developed a modular ROS2 perception pipeline that acquires synchronized
                RGB and depth images from an Intel RealSense D455 and performs real-time
                hand landmark detection and gesture recognition, serving as the vision
                interface for future gesture-based control of the Franka Research 3.
              </p>

              <div className="grid lg:grid-cols-2 gap-12">

                <div>

                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                    Key Features
                  </h3>

                  <ul className="space-y-4 text-gray-700 leading-relaxed">
                    <li>✓ Real-time RGB and depth acquisition from Intel RealSense D455</li>
                    <li>✓ ROS2 publisher/subscriber communication architecture</li>
                    <li>✓ MediaPipe hand landmark detection</li>
                    <li>✓ Hand gesture classification using a trained recognition model</li>
                    <li>✓ Depth visualization for close-range interaction</li>
                  </ul>

                </div>

                <div>

                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                    Takeaways
                  </h3>

                  <ul className="space-y-4 text-gray-700 leading-relaxed">
                    <li>✓ Built a modular perception pipeline that integrates easily with robot control nodes</li>
                    <li>✓ Synchronized RGB, depth, and camera intrinsic data across ROS2</li>
                    <li>✓ Optimized RealSense depth configuration for close-range hand tracking</li>
                    <li>✓ Established a foundation for gesture-based robot teleoperation</li>
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
                Context & Motivation
              </h2>

            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700">

              <p>
                As collaborative robots become increasingly common, natural human-robot
                interaction is becoming just as important as precise robot control.
                Vision-based hand tracking enables operators to communicate with robots
                without dedicated controllers or wearable sensors.
              </p>

              <p>
                This project explored using an{" "}
                <strong className="text-[#18342E]">Intel RealSense D455</strong> depth
                camera together with{" "}
                <strong className="text-[#18342E]">MediaPipe hand tracking</strong> to
                build a perception system capable of detecting hand landmarks and
                recognizing predefined gestures in real time, with the long-term goal of
                translating those gestures into commands for the Franka Research 3
                manipulator.
              </p>

            </div>

          </section>

          {/* SYSTEM ARCHITECTURE */}
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
                The software was organized as three ROS2 nodes that separate image
                acquisition, communication testing, and perception, allowing each
                component to be tested independently before integrating additional
                robot control nodes.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 text-center">
              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[190px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Intel RealSense D455
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  RGB-D Camera Input
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[190px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  realsense_pub.py
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  RGB Frame • Depth Frame • Camera Intrinsics
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[190px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  realsense_sub.py
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Communication Verification
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[190px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  hand_gesture.py
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  MediaPipe Detection • Gesture Classification • Visualization
                </p>
              </div>

            </div>
          </section>


          {/* ENGINEERING IMPLEMENTATION */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Methods
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Engineering Implementation
              </h2>

            </div>

            <div className="space-y-16 max-w-4xl">

              {/* CAMERA INTERFACE */}
              <div>

                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-6">
                  1. RealSense Camera Interface
                </h3>

                <div className="space-y-6 text-lg leading-relaxed text-gray-700">

                  <p>
                    The first ROS2 node interfaces directly with the Intel RealSense D455
                    through the Intel RealSense SDK, publishing RGB images, publishing
                    depth images, extracting camera intrinsic parameters, and
                    synchronizing image streams.
                  </p>

                  <p>
                    Using the SDK instead of generic camera drivers provides access to
                    advanced depth processing and filtering capabilities that are
                    important for close-range perception.
                  </p>

                </div>

              </div>
{/* CAMERA MOUNT */}
              <div>

                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-6">
                  Camera Mount
                </h3>

                <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-center">

                  <div className="bg-white p-3 shadow-lg">
                    <img
                      src="/portfolio/franka-dual-mount.png"
                      alt="3D Printed RealSense D455 Mount"
                      className="w-full h-[280px] object-contain"
                    />
                    <p className="text-center mt-3 text-sm tracking-wide text-gray-700">
                      3D Printed Camera Mount
                    </p>
                  </div>

                  <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                    <p>
                      To support future deployment on the Franka Research 3, a 3D printed mount was designed to hold two Intel RealSense D455 cameras at once, 
                      one facing forward to track the user's hand and gestures, and one facing downward to observe the work surface. 
                      This dual-camera arrangement keeps both views rigid and consistently calibrated relative to each other, 
                      laying the groundwork for combining user gesture input with surface-level scene understanding once gesture-to-command mapping is implemented.
                    </p>
                  </div>

                </div>

              </div>
              {/* COMMUNICATION PIPELINE */}
              <div>

                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-6">
                  2. ROS2 Communication Pipeline
                </h3>

                <div className="space-y-6 text-lg leading-relaxed text-gray-700">

                  <p>
                    A second ROS2 subscriber node was created during development to
                    validate communication between nodes, confirming that RGB images
                    were transmitted correctly, depth frames were synchronized, and
                    camera intrinsics were received without corruption.
                  </p>

                  <p>
                    While primarily used for debugging, this intermediate node
                    demonstrated the reliability of the ROS2 communication architecture.
                    Future iterations can simplify the pipeline by allowing the gesture
                    recognition node to subscribe directly to the camera publisher.
                  </p>

                </div>

              </div>

            {/* HAND TRACKING */}
              <div>

                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-6">
                  3. Hand Tracking and Gesture Recognition
                </h3>

                <div className="space-y-6 text-lg leading-relaxed text-gray-700 mb-8">

                  <p>
                    The final node performs the computer vision processing. Each
                    incoming RGB frame is processed using MediaPipe Hand Landmarker to
                    estimate 21 three-dimensional hand landmarks, which are then passed
                    to a trained gesture recognition model that classifies predefined
                    hand poses in real time.
                  </p>

                  <p>
                    Simultaneously, synchronized depth frames are displayed, providing
                    distance information that can later be used for spatial robot
                    interaction. This modular design separates perception from robot
                    control, allowing gesture commands to be connected directly to
                    manipulation tasks.
                  </p>

                </div>

                <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-2">
                  <div
                    className="relative w-full"
                    style={{ paddingBottom: '56.25%', position: 'relative' }}
                  >
                    <iframe
                      src="https://drive.google.com/file/d/1P31dW460H6FrL-04P5HF4gQmDaClczeG/view?usp=sharing"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                      }}
                      allow="autoplay"
                      allowFullScreen
                      title="Hand Tracking and Depth Visualization Demo"
                    />
                  </div>
                </div>

              </div>

              {/* DEPTH PROCESSING */}
              <div>

                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-6">
                  Depth Processing
                </h3>

                <div className="space-y-6 text-lg leading-relaxed text-gray-700">

                  <p>
                    One challenge encountered during development was obtaining reliable
                    depth measurements when the user's hand was positioned close to the
                    camera. To improve performance, RealSense disparity settings were
                    increased, advanced camera settings were exported through a
                    RealSense JSON configuration, and SDK filtering was investigated to
                    reduce depth noise.
                  </p>

                  <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-6">
                    <p className="text-sm uppercase tracking-[0.15em] text-[#2A5C52] mb-3">
                      Current Limitation
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Although these adjustments significantly improved close-range
                      sensing, advanced depth filters configured within the SDK were not
                      yet fully reflected in the ROS2 output, so the depth visualization
                      currently displays only three discrete colors instead of the
                      complete depth spectrum produced by the RealSense Viewer.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* PERFORMANCE */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Evaluation
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Performance & Results
              </h2>

            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-14">

              <p>
                The completed system demonstrated stable ROS2 communication between
                perception nodes, reliable RGB and depth image streaming, real-time
                MediaPipe hand landmark detection, accurate gesture classification using
                a trained recognition model, and camera calibration sharing through
                ROS2 topics.
              </p>

              <div className="grid md:grid-cols-2 gap-8">

                <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-8">
                  <h4 className="text-xl font-['Cormorant_Garamond'] text-[#18342E] mb-3">
                    Communication
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    RGB, depth, and camera intrinsic data were synchronized reliably
                    across ROS2 topics, validated through a dedicated subscriber node
                    during development.
                  </p>
                </div>

                <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-8">
                  <h4 className="text-xl font-['Cormorant_Garamond'] text-[#18342E] mb-3">
                    Perception
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    MediaPipe hand landmark detection combined with a trained gesture
                    classifier produced accurate, real-time recognition of predefined
                    hand poses.
                  </p>
                </div>

              </div>

            </div>

          </section>

          {/* FUTURE IMPROVEMENTS */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Next Steps
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Future Improvements
              </h2>

            </div>

            <div className="max-w-4xl">

              <ul className="space-y-4 text-lg leading-relaxed text-gray-700">
                <li>✓ Remove the intermediate subscriber and let hand_gesture.py subscribe directly to the camera publisher</li>
                <li>✓ Integrate RealSense advanced depth filters directly into the ROS2 node</li>
                <li>✓ Recover the full depth color spectrum currently available in the RealSense Viewer</li>
                <li>✓ Fuse depth measurements with MediaPipe landmarks to estimate hand position in 3D space</li>
                <li>✓ Connect recognized gestures directly to Franka Research 3 manipulation and teleoperation tasks</li>
              </ul>

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
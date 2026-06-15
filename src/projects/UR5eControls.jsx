// projects/UR5Project.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function UR5eControls() {
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
                Robotics • Controls • Kinematics
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8 font-['Cormorant_Garamond']">
                UR5
                <br />
                Manipulator
                <br />
                Control
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mb-10 font-light">
                Implemented and compared Resolved-Rate (differential kinematics) and
                Inverse Kinematics control methods for a UR5e manipulator completing
                a "Push-and-Place" task, evaluating accuracy, smoothness, and robustness
                across both approaches.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "MATLAB",
                  "ROS2",
                  "Kinematics",
                  "Controls"
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
                December 2025
              </div>

            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">

              <div className="bg-white p-4 shadow-2xl rotate-[3deg] max-w-md">

                <img
                  src="/portfolio/rdkdc-ur5e.png"
                  alt="UR5e Manipulator"
                  className="w-full h-[420px] object-contain"
                />

                <p className="text-center mt-4 text-sm tracking-wide text-gray-700">
                  UR5e Robot Arm — Push-and-Place Task
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
                Implemented and compared two control methods, Resolved-Rate and Analytic
                Inverse Kinematics, for a UR5e robot arm executing a Push-and-Place task
                in SE(3) space, with full singularity handling and optimal branch selection.
              </p>

              <div className="grid lg:grid-cols-2 gap-12">

                <div>

                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                    Key Features
                  </h3>

                  <ul className="space-y-4 text-gray-700 leading-relaxed">
                    <li>✓ Resolved-Rate Control using Damped Least-Squares Body Jacobian inversion</li>
                    <li>✓ Analytic Inverse Kinematics with cost function for optimal branch selection</li>
                    <li>✓ Singularity monitoring and avoidance logic</li>
                    <li>✓ SE(3) interpolation for linear Cartesian path generation</li>
                  </ul>

                </div>

                <div>

                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                    Takeaways
                  </h3>

                  <ul className="space-y-4 text-gray-700 leading-relaxed">
                    <li>✓ IK achieved machine-precision accuracy (error ~10⁻¹⁵) vs. RR (~10⁻⁵)</li>
                    <li>✓ RR proved more robust to external disturbances via instantaneous feedback</li>
                    <li>✓ Demonstrated trade-off between absolute accuracy (IK) and smooth real-time control (RR)</li>
                    <li>✓ Validated both controllers on a physical UR5e via ROS and RTDE</li>
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
                Robotic manipulation requires precise coordination in SE(3) space. This project
                focused on a "Push-and-Place" task: programming a UR5e robot to push a target
                object 3 cm along a local axis, lift, and return it to a home pose. The core
                objective was to implement and compare two distinct control methods, {" "}
                <strong className="text-[#18342E]">Resolved-Rate (RR) Control</strong>{" "}
                (differential kinematics) and{" "}
                <strong className="text-[#18342E]">Analytic Inverse Kinematics (IK)</strong>.
              </p>

              <p>
                Each method involves fundamentally different assumptions about how joint
                commands are generated. RR computes joint velocities continuously from an
                error twist, making it responsive to real-time disturbances. IK solves
                analytically for exact joint angles at each waypoint, decoupling planning
                from control and enabling machine-precision positioning, at the cost of
                flexibility under perturbation.
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
                The control framework was implemented in MATLAB, interfacing with the robot
                via ROS (Robot Operating System) and RTDE (Real-Time Data Exchange). A Task
                Planner generates SE(3) waypoints, which are passed to either the RR or IK
                controller to compute joint commands, then executed on the physical UR5e.
              </p>

            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 text-center">

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Task Planner
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Waypoints in SE(3)
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Controller
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  RR vs. IK
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  UR5e Robot
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Joint Actuation via RTDE
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

              {/* RR */}
              <div>

                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-6">
                  1. Resolved-Rate Control (Differential Kinematics)
                </h3>

                <div className="space-y-6 text-lg leading-relaxed text-gray-700">

                  <p>
                    RR control drives the robot by iteratively minimizing the error twist
                    ξ<sub>err</sub> between the current pose <em>g</em><sub>cur</sub> and
                    desired pose <em>g</em><sub>des</sub>. It relies on the Body Jacobian{" "}
                    <em>J</em><sub>b</sub>(<em>q</em>) to map Cartesian velocities to joint
                    velocities.
                  </p>

                  <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-6">
                    <p className="text-sm uppercase tracking-[0.15em] text-[#2A5C52] mb-3">
                      Mathematical Formulation
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      The control law is derived from ξ = <em>J</em><sub>b</sub>(<em>q</em>)<em>q̇</em>.
                      We invert this using the damped least-squares solution:
                    </p>
                    <p className="mt-3 font-mono text-[#18342E]">
                      q̇ = K · J† · ξ<sub>err</sub>
                    </p>
                    <p className="mt-2 text-gray-600 text-sm">
                      where J† is the pseudoinverse and K is the proportional gain (K<sub>rr</sub> = 0.15).
                    </p>
                  </div>

                  <p>
                    <strong className="text-[#18342E]">Singularity Handling:</strong>{" "}
                    The system continuously monitors manipulability (
                    <em>w</em> = √det(<em>JJ</em><sup>T</sup>)). If the robot approaches a
                    singular configuration where the Jacobian becomes ill-conditioned, the
                    controller safeguards by aborting motion to prevent infinite joint velocities.
                  </p>

                </div>

              </div>

              {/* IK */}
              <div>

                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-6">
                  2. Analytic Inverse Kinematics
                </h3>

                <div className="space-y-6 text-lg leading-relaxed text-gray-700">

                  <p>
                    Unlike RR, which iterates towards a solution, IK solves for the exact
                    final joint angles analytically. This decouples path planning from the
                    control loop, enabling machine-precision positioning at each waypoint.
                  </p>

                  <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-6">
                    <p className="text-sm uppercase tracking-[0.15em] text-[#2A5C52] mb-3">
                      Multiple Solution Optimization
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      The UR5 analytic solution yields up to 8 valid joint configurations
                      for a given <em>g</em><sub>des</sub>. To ensure smooth motion, a cost
                      function selects the optimal branch:
                    </p>
                    <p className="mt-3 font-mono text-[#18342E]">
                      q_best = argmin(‖ wrapToPi(q<sub>sol,i</sub> − q<sub>current</sub>) ‖)
                    </p>
                    <p className="mt-2 text-gray-600 text-sm">
                      This prevents dangerous elbow-flipping or discontinuous jumps between waypoints.
                    </p>
                  </div>

                  <p>
                    <strong className="text-[#18342E]">Trajectory Generation:</strong>{" "}
                    Intermediate waypoints are generated using SE(3) interpolation (screw
                    motion) between keyframes to ensure the end-effector traces a straight
                    line in Cartesian space.
                  </p>

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
                Both controllers were evaluated on their accuracy in returning the robot
                to the "Home" pose after completing the Push-and-Place task.
              </p>

              <div className="grid md:grid-cols-2 gap-8">

                <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-8">
                  <h4 className="text-xl font-['Cormorant_Garamond'] text-[#18342E] mb-3">
                    Accuracy
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    IK achieved near-perfect positioning with rotational error on the order
                    of <strong>10⁻¹⁵</strong> (machine precision). RR settled with errors
                    around <strong>10⁻⁵</strong> due to the convergence threshold and gain
                    trade-off.
                  </p>
                </div>

                <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-8">
                  <h4 className="text-xl font-['Cormorant_Garamond'] text-[#18342E] mb-3">
                    Robustness
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    While IK provided higher accuracy, RR via RTDE offered smoother
                    real-time motion control by continuously updating based on instantaneous
                    feedback, making it resilient to small external disturbances.
                  </p>
                </div>

              </div>

            </div>

            {/* VIDEO PLACEHOLDERS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* RR VIDEO */}
          <div className="w-full min-w-0">
            <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-6">
              Resolved-Rate Control Demo
            </h3>

            <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-2">
              <div
                className="relative w-full"
                style={{ paddingBottom: '56.25%', position: 'relative' }}
              >
                <iframe
                  src="https://drive.google.com/file/d/1rLRH04IO1VAQyZ3Y5gSXFJ1EC7Vy1zc0/preview"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  allow="autoplay"
                  allowFullScreen
                  title="Resolved-Rate Control Demo"
                />
              </div>
            </div>
          </div>

          {/* IK VIDEO */}
          <div className="w-full min-w-0">
            <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-6">
              Inverse Kinematics Demo
            </h3>

            <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-2">
              <div
                className="relative w-full"
                style={{ paddingBottom: '56.25%', position: 'relative' }}
              >
                <iframe
                  src="https://drive.google.com/file/d/1c9mLFi2DCbkjLOWL5MJ_kgFzWLd8jgTl/preview"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  allow="autoplay"
                  allowFullScreen
                  title="Inverse Kinematics Demo"
                />
              </div>
            </div>
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
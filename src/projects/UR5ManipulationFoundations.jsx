// projects/UR5RoboticsProject.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function UR5ManipulationFoundations() {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goToMainSection = (section) => {
    navigate(`/portfolio#${section}`);
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleHome = () => {
    navigate('/portfolio');
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
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
              <button onClick={handleHome} className="text-sm uppercase tracking-[0.2em] text-gray-700 hover:text-[#2A5C52] transition-colors">Home</button>
              <button onClick={() => goToMainSection('about me')} className="text-sm uppercase tracking-[0.2em] text-gray-700 hover:text-[#2A5C52] transition-colors">About</button>
              <button onClick={() => goToMainSection('projects')} className="text-sm uppercase tracking-[0.2em] text-[#2A5C52] transition-colors">Projects</button>
              <button onClick={() => goToMainSection('contact')} className="text-sm uppercase tracking-[0.2em] text-gray-700 hover:text-[#2A5C52] transition-colors">Contact</button>
            </div>
            <a href="/portfolio/YvonneZhang_CV_Jan2026.pdf" target="_blank" rel="noopener noreferrer" className="hidden md:block text-sm uppercase tracking-[0.2em] text-gray-700 hover:text-[#2A5C52] transition-colors">Resume</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-24">
        <div className="absolute inset-0 bg-[#2A5C52]">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)`,
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
                Kinematics • Calibration • Motion Planning
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8 font-['Cormorant_Garamond']">
                UR5
                <br />
                Manipulation
                <br />
                Foundations
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mb-10 font-light">
                Built the mathematical and planning foundations for autonomous robot manipulation, including resolved-rate kinematics,
                hand-eye calibration, collision-free motion planning and real-hardware deployment on a UR5 arm.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["C++ / ROS2", "Simulation to Hardware"].map((skill, idx) => (
                  <span key={idx} className="text-[11px] uppercase tracking-[0.18em] border border-white/30 text-blue-100 px-4 py-2">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="text-blue-100 text-lg">
                <span className="font-semibold text-white">Duration:</span>{" "}January – May 2026 &nbsp;·&nbsp;
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">
              <div className="bg-white p-4 shadow-2xl rotate-[3deg] max-w-md">
                <img
                  src="/portfolio/ur5-car-mesh.png"
                  alt="UR5 robot arm"
                  className="w-full h-[420px] object-contain"
                />
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
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Overview</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">Project Summary</h2>
            </div>
            <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-10 lg:p-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                This project series built a complete robotics manipulation stack from the ground up, such as
                deriving the math, implementing it in C++ with ROS2, and validating on a physical UR5.
              </p>
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">Key Accomplishments</h3>
                  <ul className="space-y-4 text-gray-700 leading-relaxed">
                    <li>✓ Resolved-rate Jacobian controller for straight-line Cartesian trajectory generation</li>
                    <li>✓ Closed-form and least-squares AX=XB hand-eye calibration achieving &lt;5mm / &lt;0.1 rad error</li>
                    <li>✓ PRM path planner withj ≥90% planning success rate navigating robot arm through car door frame</li>
                    <li>✓ Deployed trajectory controller on physical UR5 hardware</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">Technical Highlights</h3>
                  <ul className="space-y-4 text-gray-700 leading-relaxed">
                    <li>✓ Synthetic data generation for noise-free calibration validation</li>
                    <li>✓ Least-squares rotation and translation solvers (Park & Martin algorithm)</li>
                    <li>✓ PRM with configurable k-nearest neighbor graph construction and A* search</li>
                    <li>✓ Collision-free edge interpolation across the full 6-DOF joint space</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* PHASE 1 — KINEMATICS */}
          <section>
            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Phase 1</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">Kinematics & Jacobian Trajectory Control</h2>
            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-14">
            <p>
                The UR5 has six revolute joints spanning the shoulder, elbow, and wrist. I implemented
                the forward kinematics in C++ using the Product of Exponentials (POE) formulation,
                defining each joint screw axis directly from the robot geometry and composing the
                end-effector pose through sequential twist exponentials using Rodrigues' formula.
            </p>
            <p>
                The controller monitored for near-singular Jacobians and halted motion gracefully when
                necessary. Final end-effector poses were validated against ROS
                <code className="bg-[#EFEAE0] px-2 py-0.5 text-sm font-mono">tf2_echo</code>
                measurements during testing on the real UR5 platform.
            </p>
            </div>

            {/* Pipeline diagram */}
            <div className="flex items-center justify-center gap-2 w-full mb-6 text-center">
            {[
                { title: "Joint Angles\nq₁ to q₆", desc: "Measured from robot" },                
                { title: "Forward Kinematics", desc: "Position & orientation of gripper" },
                { title: "Error Vector e", desc: "Goal minus current in gripper frame" },
                { title: "Adjoint Ad⁻¹", desc: "Body to spatial velocity" },
                { title: "Jacobian J(q)", desc: "Cartesian to joint velocities" },
                { title: "Joint Commands q̇", desc: "Sent to UR5 controller" },
            ].map((stage, idx, arr) => (
                <React.Fragment key={idx}>

                <div className="flex-1 min-w-0 bg-white border border-[#D9D3C7] shadow-lg px-3 py-4 flex flex-col items-center justify-center">
                    <h3 className="text-sm font-['Cormorant_Garamond'] text-[#18342E] mb-1 leading-tight text-center whitespace-pre-line">
                    {stage.title}
                    </h3>
                    <p className="text-gray-600 text-[10px] uppercase tracking-[0.1em] leading-relaxed text-center">
                    {stage.desc}
                    </p>
                </div>

                {idx < arr.length - 1 && (
                    <div className="flex items-center justify-center px-1 text-[#2A5C52] text-xl">
                    →
                    </div>
                )}

                </React.Fragment>
            ))}
            </div>
            <p className="text-center text-sm text-gray-500 tracking-wide">Resolved Motion Rate Control, runs at every trajectory timestep</p>
          </section>

          {/* PHASE 2 — CALIBRATION */}
          <section>
            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Phase 2</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">Hand-Eye Calibration (AX = XB)</h2>
            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-14">
              <p>
                A wrist-mounted camera needs to know its pose relative to the robot's end-effector,
                the hand-eye transformation X. I implemented the Park & Martin algorithm to solve
                the matrix equation AX = XB, where each A<sub>i</sub> is a change in end-effector pose
                and each B<sub>i</sub> is the corresponding change in observed AR tag pose.
              </p>
              <p>
                I first built a synthetic data generator in MATLAB to produce noise-free (A<sub>i</sub>, B<sub>i</sub>) pairs
                from a known X. This let me verify correctness of both the closed-form (3-pose) and
                least-squares (N-pose) solvers before touching any real data. The least-squares solver
                decouples rotation and translation: <code className="bg-[#EFEAE0] px-2 py-0.5 text-sm font-mono">solveRx</code> finds the rotation via SVD on skew-symmetric
                axis vectors, then <code className="bg-[#EFEAE0] px-2 py-0.5 text-sm font-mono">solveTx</code> recovers the translation with a linear least-squares system.
              </p>
              <p>
                Collecting real data from the simulation, moving the robot to N configurations where
                the AR tag was visible and recording both the forward kinematics and the tag pose via
                <code className="bg-[#EFEAE0] px-2 py-0.5 text-sm font-mono">tf2_echo</code> I achieved a translation error below 5 mm and a rotation error below 0.1
                radians against the simulator's ground truth.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {[
                {
                  label: "Step 1",
                  title: "Synthetic Validation",
                  body: "Generated N noise-free (Aᵢ, Bᵢ) pairs from a random known X. Verified both solvers return exactly the original X before any real data collection."
                },
                {
                  label: "Step 2",
                  title: "Closed-Form (3-pose)",
                  body: "Used exactly 3 robot configurations to form A₁, A₂, B₁, B₂ and solved for X in closed form per Park & Martin."
                },
                {
                  label: "Step 3",
                  title: "Least-Squares (N-pose)",
                  body: "Extended to N>3 configurations. SolveRx via SVD, then solveTx via linear system. Achieved <5 mm / <0.1 rad on simulation data."
                }
              ].map((card, idx) => (
                <div key={idx} className="bg-[#EFEAE0] border border-[#D9D3C7] p-8">
                  <p className="uppercase tracking-[0.25em] text-xs text-[#2A5C52] mb-2">{card.label}</p>
                  <h3 className="text-xl font-['Cormorant_Garamond'] text-[#18342E] mb-4">{card.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">{card.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PHASE 3 — MOTION PLANNING */}
          <section>
            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Phase 3</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">Probabilistic Roadmap Motion Planning</h2>
            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-14">
              <p>
                The final phase tackled collision-free motion planning in the full 6-DOF joint space using a
                Probabilistic Roadmap (PRM) planner integrated with MoveIt! and RViz. The planner
                replaced the default OMPL planners, exposing collision-checking and interpolation utilities
                from MoveIt!'s <code className="bg-[#EFEAE0] px-2 py-0.5 text-sm font-mono">RobotState</code> and <code className="bg-[#EFEAE0] px-2 py-0.5 text-sm font-mono">RobotModel</code> APIs.
              </p>
              <p>
                The roadmap is constructed offline: random collision-free configurations are sampled across
                the joint space (each joint bounded to ±π), then connected into a graph by checking interpolated
                paths for collisions. At query time, the start and goal are connected to their nearest
                accessible roadmap vertices, and A* finds the shortest valid path through the graph.
              </p>
            </div>

            {/* PRM pipeline */}
            <div className="flex items-center justify-center gap-2 w-full mb-10 text-center">
            {[
                { title: "Sample Vertices", desc: "Random collision-free joint configs" },
                { title: "Build Edges", desc: "k-NN graph, collision-checked paths" },
                { title: "Connect Start", desc: "Accessibility search to roadmap" },
                { title: "Connect Goal", desc: "Departability search to roadmap" },
                { title: "Search Path", desc: "A* through graph" },
                { title: "Visualize", desc: "Animate path in RViz simulation" },
            ].map((stage, idx, arr) => (
                <React.Fragment key={idx}>
                
                <div className="flex-1 min-w-0 bg-white border border-[#D9D3C7] shadow-lg px-3 py-4 flex flex-col items-center justify-center">
                    <h3 className="text-sm font-['Cormorant_Garamond'] text-[#18342E] mb-1 leading-tight text-center">
                    {stage.title}
                    </h3>
                    <p className="text-gray-600 text-[10px] uppercase tracking-[0.1em] leading-relaxed text-center">
                    {stage.desc}
                    </p>
                </div>

                {idx < arr.length - 1 && (
                    <div className="flex items-center justify-center px-1 text-[#2A5C52] text-xl">
                    →
                    </div>
                )}

                </React.Fragment>
            ))}
            </div>

            {/* Expert challenge */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* LEFT: text */}
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Expert Challenge
                </p>

                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-4">
                Through the Car Door
                </h3>

                <p>
                The planner was required to achieve with 85% success navigating the UR5 arm through the door opening of a high-fidelity Bugatti car mesh and positioning the gripper near the steering wheel, a highly constrained narrow-passage planning problem.
                </p>

                <p>
                I tuned vertex sampling density, neighbor count, and interpolation resolution to consistently solve this within the 30-second time limit, achieving the required success rate.
                </p>
            </div>

            {/* RIGHT: image placeholder */}
            <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-4 min-h-[320px] flex items-center justify-center">
            <img
                src="/portfolio/ur5-car-mesh.png"
                alt="Car mesh visualization"
                className="max-h-[300px] w-auto object-contain"
            />
            </div>

            </div>
          </section>

          {/* SIM FIRST THEN HARDWARE */}
          <section>
            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Methodology</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">Simulation-First Development</h2>
            </div>
            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-14">
            <p>
                Development followed a simulation-first workflow in ROS2, Gazebo, RViz, and
                MoveIt!, where kinematics, calibration, and motion-planning components were
                validated before hardware deployment.
            </p>

            <p>
                The finalized system was then deployed onto a physical UR5 robot, where all
                three phases were successfully demonstrated through real-world trajectory
                execution and collision-free manipulation tasks.
            </p>
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
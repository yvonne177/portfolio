// projects/RobotLocalizationProject.jsx
import React from 'react'

export default function RobotLocalizationProject() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <button className="text-sm uppercase tracking-[0.2em] text-gray-700 hover:text-[#2A5C52] transition-colors">Home</button>
              <button className="text-sm uppercase tracking-[0.2em] text-gray-700 hover:text-[#2A5C52] transition-colors">About</button>
              <button className="text-sm uppercase tracking-[0.2em] text-[#2A5C52] transition-colors">Projects</button>
              <button className="text-sm uppercase tracking-[0.2em] text-gray-700 hover:text-[#2A5C52] transition-colors">Contact</button>
            </div>
            <a href="/portfolio/YvonneZhang_CV_Jan2026.pdf" target="_blank" rel="noopener noreferrer"
              className="hidden md:block text-sm uppercase tracking-[0.2em] text-gray-700 hover:text-[#2A5C52] transition-colors">Resume</a>
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
                State Estimation • Probabilistic Robotics • Sensor Fusion
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8 font-['Cormorant_Garamond']">
                Robot
                <br />
                Localization
                <br />
                Foundations
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mb-10 font-light">
                Implemented two complementary probabilistic localization systems: an Extended Kalman Filter
                fusing GPS and IMU for 3D terrain navigation, and a Particle Filter with laser beam modeling
                for indoor mapping, both deployed on real robot hardware in Gazebo/ROS2.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["C++ / ROS2", "Probabilistic Inference"].map((skill, idx) => (
                  <span key={idx} className="text-[11px] uppercase tracking-[0.18em] border border-white/30 text-blue-100 px-4 py-2">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="text-blue-100 text-lg">
                <span className="font-semibold text-white">Duration:</span>{" "}January – May 2026
              </div>
            </div>

            {/* RIGHT — abstract sensor visualization */}
            <div className="relative flex justify-center">
              <div className="bg-white p-4 shadow-2xl rotate-[-3deg] max-w-md w-full">
                <div className="w-full h-[420px] bg-[#0d1117] flex items-center justify-center relative overflow-hidden">
                  {/* Particle field visualization */}
                  <svg viewBox="0 0 400 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    {/* Grid */}
                    {Array.from({length: 9}).map((_, i) => (
                      <line key={`v${i}`} x1={i*50} y1="0" x2={i*50} y2="360" stroke="#1a2a1a" strokeWidth="0.5"/>
                    ))}
                    {Array.from({length: 8}).map((_, i) => (
                      <line key={`h${i}`} x1="0" y1={i*50} x2="400" y2={i*50} stroke="#1a2a1a" strokeWidth="0.5"/>
                    ))}
                    {/* Laser beams */}
                    {[15,30,45,60,75,90,105,120,135,150,165,180,195,210,225,240,255,270,285,300,315,330,345,360].map((angle, i) => {
                      const rad = (angle * Math.PI) / 180;
                      const len = 60 + (i % 5) * 18;
                      return (
                        <line key={`beam${i}`}
                          x1="200" y1="180"
                          x2={200 + Math.cos(rad) * len}
                          y2={180 + Math.sin(rad) * len}
                          stroke="#4ade80" strokeWidth="0.6" opacity="0.35"
                        />
                      );
                    })}
                    {/* Particles */}
                    {[
                      [185,165],[210,172],[195,190],[178,180],[205,185],[192,168],[218,178],
                      [175,190],[202,160],[188,195],[215,190],[170,175],[220,165],[198,200],
                      [182,158],[208,195],[193,175],[177,165],[212,182],[200,170]
                    ].map(([x, y], i) => (
                      <circle key={`p${i}`} cx={x} cy={y} r="2.5" fill="#4ade80" opacity={0.4 + (i%4)*0.12}/>
                    ))}
                    {/* Robot */}
                    <circle cx="200" cy="180" r="10" fill="none" stroke="#86efac" strokeWidth="2"/>
                    <circle cx="200" cy="180" r="4" fill="#86efac"/>
                    {/* Heading arrow */}
                    <line x1="200" y1="180" x2="200" y2="155" stroke="#86efac" strokeWidth="2"/>
                    <polygon points="200,148 196,158 204,158" fill="#86efac"/>
                    {/* Covariance ellipse */}
                    <ellipse cx="200" cy="180" rx="28" ry="18" fill="none" stroke="#86efac" strokeWidth="1" opacity="0.4" strokeDasharray="4 2"/>
                    {/* GPS dot */}
                    <circle cx="205" cy="174" r="3" fill="#facc15" opacity="0.8"/>
                    <text x="210" y="170" fill="#facc15" fontSize="8" opacity="0.8">GPS</text>
                    {/* Legend */}
                    <circle cx="18" cy="330" r="3" fill="#4ade80" opacity="0.7"/>
                    <text x="26" y="334" fill="#86efac" fontSize="9" opacity="0.8">particles</text>
                    <circle cx="90" cy="330" r="3" fill="#facc15" opacity="0.8"/>
                    <text x="98" y="334" fill="#facc15" fontSize="9" opacity="0.8">GPS fix</text>
                    <text x="160" y="334" fill="#4ade80" fontSize="9" opacity="0.5">— laser</text>
                  </svg>
                </div>
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
                This two-part project series built probabilistic localization systems from first principles, deriving
                the math, implementing it in C++ with ROS2, and validating against ground-truth simulation data.
                Assignment 4 targeted 3D outdoor navigation using an EKF; Assignment 5 tackled 2D indoor localization
                using a particle filter with laser sensing.
              </p>
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">Key Accomplishments</h3>
                  <ul className="space-y-4 text-gray-700 leading-relaxed">
                    <li>✓ Full 6-DOF EKF for a Jackal robot navigating rugged 3D terrain (roll, pitch, yaw + XYZ)</li>
                    <li>✓ GPS + IMU sensor fusion with hand-tuned covariance achieving &lt;0.5m XYZ error</li>
                    <li>✓ Beam model laser sensor implementation with four probabilistic components (hit, short, max, rand)</li>
                    <li>✓ Odometry sampling motion model with Gaussian noise for particle propagation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">Technical Highlights</h3>
                  <ul className="space-y-4 text-gray-700 leading-relaxed">
                    <li>✓ Analytic 6×6 Jacobian for EKF linearization using RPY rotation composition</li>
                    <li>✓ GPS-to-Cartesian flat-earth linear model calibrated against simulator ground truth</li>
                    <li>✓ Ray-cast expected range computation for laser beam likelihood scoring</li>
                    <li>✓ Particle filter convergence validated in RViz with purple covariance ellipse tracking</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ASSIGNMENT 4 — EKF */}
          <section>
            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Assignment 4</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">Extended Kalman Filter: 3D Terrain Localization</h2>
            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-14">
              <p>
                The Clearpath Robotics Jackal operates on a rugged simulated canyon, meaning a standard 2D
                planar model would fail. I extended the state to six dimensions: position (x, y, z) and orientation
                as roll, pitch, yaw. I then derived the full nonlinear process model driven by linear and angular
                velocity commands from the robot's body frame.
              </p>
              <p>
                The EKF runs inside the Orocos Bayesian Filtering Library (BFL), fusing asynchronous GPS fixes
                (converted from latitude/longitude/altitude via a flat-earth linear calibration) with IMU quaternion
                measurements (converted to RPY). All Jacobians were derived analytically using the RPY rotation
                composition R = R<sub>X</sub>(r)R<sub>Y</sub>(p)R<sub>Z</sub>(y), which keeps the linearization tractable.
              </p>
            </div>

            {/* EKF pipeline */}
            <div className="flex items-center justify-center gap-2 w-full mb-6 text-center">
              {[
                { title: "State sₜ", desc: "[x y z r p y], 6 DOF pose" },
                { title: "Process Model f", desc: "Velocity integration in world frame" },
                { title: "Jacobian A = ∂f/∂s", desc: "6×6 analytic linearization" },
                { title: "GPS + IMU Fusion", desc: "Lat/lon/alt + quaternion → RPY" },
                { title: "EKF Correction", desc: "Kalman gain & posterior update" },
                { title: "Posterior /posterior", desc: "Published state estimate" },
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
                    <div className="flex items-center justify-center px-1 text-[#2A5C52] text-xl">→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 tracking-wide mb-14">EKF Predict–Correct cycle, runs every timestep on incoming sensor data</p>

            {/* Sensor cards */}
            <div className="grid lg:grid-cols-3 gap-6">
              {[
                {
                  label: "System Model",
                  title: "3D Process Function f",
                  body: "Propagates pose using linear velocity vₜ along the Jackal's X axis and angular velocity ωₜ about its Z axis, integrated with the current RPY orientation to update world-frame position."
                },
                {
                  label: "GPS Observation",
                  title: "hGPS: Geographic → Cartesian",
                  body: "Mapped latitude, longitude, and altitude to simulation XYZ using a flat-earth linear model calibrated against ground-truth simulator pose. Implemented 3×3 Jacobian H_GPS."
                },
                {
                  label: "IMU Observation",
                  title: "hIMU: Quaternion → RPY",
                  body: "Converted ROS quaternion orientation messages to roll-pitch-yaw matching the EKF state convention. Implemented the 3×3 identity-structured Jacobian H_IMU."
                }
              ].map((card, idx) => (
                <div key={idx} className="bg-[#EFEAE0] border border-[#D9D3C7] p-8">
                  <p className="uppercase tracking-[0.25em] text-xs text-[#2A5C52] mb-2">{card.label}</p>
                  <h3 className="text-xl font-['Cormorant_Garamond'] text-[#18342E] mb-4">{card.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">{card.body}</p>
                </div>
              ))}
            </div>

            {/* Accuracy callout */}
            <div className="mt-10 bg-[#18342E] text-white p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-8">
              <div className="text-center lg:text-left">
                <p className="text-5xl font-['Cormorant_Garamond'] font-bold text-[#86efac]">&lt; 0.5 m</p>
                <p className="text-sm uppercase tracking-[0.2em] text-blue-100 mt-1">Average XYZ position error</p>
              </div>
              <div className="w-px bg-white/20 self-stretch hidden lg:block" />
              <p className="text-blue-100 leading-relaxed max-w-xl">
                Validated by driving the Jackal around the simulated canyon and comparing the
                <code className="bg-white/10 px-1 py-0.5 mx-1 text-sm font-mono">/posterior</code>
                topic against ground-truth pose from
                <code className="bg-white/10 px-1 py-0.5 mx-1 text-sm font-mono">ign topic -e -t /model/robot/pose</code>.
                Filter tuning of both process and sensor covariance matrices was iterated until the
                localization consistently met the accuracy threshold during extended teleoperation runs.
              </p>
            </div>
          </section>

          {/* ASSIGNMENT 5 — PARTICLE FILTER */}
          <section>
            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Assignment 5</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">Particle Filter: Indoor Laser Localization</h2>
            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-14">
              <p>
                A Husky robot navigates the simulated Wyman Building, armed with a laser range finder.
                The particle filter was pre-built except for the two core probabilistic components I implemented:
                the beam sensor model and the odometry motion model sampling function.
              </p>
              <p>
                The beam model scores each particle's likelihood by ray-casting expected ranges from its hypothesized
                position through the 35 MB building mesh and comparing them to actual laser measurements across
                hundreds of beams per scan. The motion model propagates particles forward by sampling Gaussian noise
                around the odometry-reported displacement, capturing real-world wheel slip and encoder error.
              </p>
            </div>

            {/* Beam model 4-component breakdown */}
            <div className="mb-12">
              <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-6">Beam Model: Four Probabilistic Components</h3>
              <div className="grid lg:grid-cols-4 gap-4">
                {[
                  {
                    label: "p_hit",
                    title: "Gaussian Hit",
                    body: "Normal distribution centered at expected range z*. Models accurate measurements when the beam hits an obstacle.",
                    color: "border-[#2A5C52]"
                  },
                  {
                    label: "p_short",
                    title: "Exponential Short",
                    body: "Exponential decay for unexpectedly short readings caused by unmodeled obstacles or dynamic objects in the scene.",
                    color: "border-[#5C4A2A]"
                  },
                  {
                    label: "p_max",
                    title: "Max Range",
                    body: "Point mass at z_max. Captures beams that miss all obstacles and return the sensor's maximum reportable range.",
                    color: "border-[#2A3A5C]"
                  },
                  {
                    label: "p_rand",
                    title: "Uniform Random",
                    body: "Flat distribution across [0, z_max]. Accounts for completely spurious or sensor-noise-driven measurements.",
                    color: "border-gray-400"
                  },
                ].map((card, idx) => (
                  <div key={idx} className={`bg-[#EFEAE0] border-t-4 ${card.color} border-x border-b border-[#D9D3C7] p-6`}>
                    <p className="uppercase tracking-[0.25em] text-xs text-[#2A5C52] mb-2">{card.label}</p>
                    <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-3">{card.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">{card.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-500 tracking-wide text-center">
                Final beam probability: P(z|s,m) = w_hit·p_hit + w_short·p_short + w_max·p_max + w_rand·p_rand, summed in log space to avoid floating-point underflow
              </p>
            </div>

            {/* Particle filter pipeline */}
            <div className="flex items-center justify-center gap-2 w-full mb-6 text-center">
              {[
                { title: "Prior Particles", desc: "Initialized via 2D Pose Estimate in RViz" },
                { title: "Odometry Δ", desc: "Noisy motion sample per particle" },
                { title: "Beam Likelihood", desc: "Ray-cast z* vs measured z" },
                { title: "Weight Update", desc: "P(z|s,m) per particle" },
                { title: "Resample", desc: "Low-variance resampling step" },
                { title: "EAP Pose", desc: "Purple ellipse + yellow frustum in RViz" },
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
                    <div className="flex items-center justify-center px-1 text-[#2A5C52] text-xl">→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 tracking-wide mb-14">Particle Filter loop, runs continuously as robot is teleoperated through the building</p>

            {/* Odometry model section */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52]">Motion Model</p>
                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E]">Odometry Sampling</h3>
                <p>
                  The odometry motion model propagates each particle by sampling from a Gaussian centered on
                  the wheel-encoder displacement Δ = [x′−xₜ₋₁, y′−yₜ₋₁, θ′−θₜ₋₁], with noise scaled by
                  four tunable alpha parameters. This captures the mismatch between commanded and actual motion
                  on real hardware.
                </p>
                <p>
                  Angle wrapping to ±π was enforced rigorously throughout, a subtle but critical implementation
                  detail that prevents particle divergence during turns. The
                  <code className="bg-[#EFEAE0] px-2 py-0.5 text-sm font-mono mx-1">pf_ran_gaussian(sigma)</code>
                  utility was used to draw noise samples, with sigma derived from the alpha parameters and
                  the magnitude of the motion increment.
                </p>
              </div>

              {/* Implementation detail callout */}
              <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-8 space-y-5">
                <p className="uppercase tracking-[0.25em] text-xs text-[#2A5C52]">Implementation Notes</p>
                <h3 className="text-xl font-['Cormorant_Garamond'] text-[#18342E]">Key Engineering Decisions</h3>
                <ul className="space-y-4 text-gray-700 text-sm leading-relaxed">
                  <li>
                    <span className="font-semibold text-[#18342E]">Log-space accumulation:</span>{" "}
                    Beam probabilities summed in log space to prevent numeric underflow with hundreds of beams.
                  </li>
                  <li>
                    <span className="font-semibold text-[#18342E]">Beam subsampling:</span>{" "}
                    Evaluated every Nth beam to maintain real-time performance given the building mesh scale.
                  </li>
                  <li>
                    <span className="font-semibold text-[#18342E]">Degenerate input guards:</span>{" "}
                    NaN, Inf, and out-of-range values explicitly skipped before beam likelihood computation.
                  </li>
                  <li>
                    <span className="font-semibold text-[#18342E]">Laser-to-world transform:</span>{" "}
                    Beam origins and bearings converted from sensor frame to world frame using{" "}
                    <code className="bg-white px-1 font-mono">laser_pose</code> before calling{" "}
                    <code className="bg-white px-1 font-mono">map_calc_range</code>.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* METHODOLOGY */}
          <section>
            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Methodology</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">Comparing the Two Approaches</h2>
            </div>
            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-14">
              <p>
                Both assignments tackle the same core problem (where is the robot?) but with different tradeoffs.
                The EKF is computationally efficient and provides a single Gaussian estimate, well-suited to the
                smooth outdoor terrain where sensor noise is roughly Gaussian. The particle filter handles arbitrary,
                multi-modal distributions and recovers from poor initialization, making it a better fit for the
                structured indoor environment with ambiguous corridors.
              </p>
              <p>
                Implementing both back-to-back gave a concrete sense of when each filter excels: EKFs for efficiency
                and continuous state estimation in relatively predictable environments; particle filters for robustness
                to initialization uncertainty and highly non-Gaussian observation models like the beam sensor.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {[
                {
                  label: "Assignment 4 · EKF",
                  title: "Jackal on Canyon Terrain",
                  items: [
                    "6-DOF state: position + roll/pitch/yaw",
                    "GPS + IMU sensor fusion",
                    "Analytic Jacobians, single Gaussian posterior",
                    "Orocos BFL engine, ROS2 Humble",
                    "Target: < 0.5 m average XYZ error"
                  ]
                },
                {
                  label: "Assignment 5 · Particle Filter",
                  title: "Husky in Wyman Building",
                  items: [
                    "3-DOF state: x, y, heading θ",
                    "Laser range finder beam model",
                    "Hundreds of weighted particles, resampling",
                    "Odometry motion model with noise sampling",
                    "Target: tight EAP ellipse convergence in RViz"
                  ]
                }
              ].map((card, idx) => (
                <div key={idx} className="bg-[#EFEAE0] border border-[#D9D3C7] p-8">
                  <p className="uppercase tracking-[0.25em] text-xs text-[#2A5C52] mb-2">{card.label}</p>
                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">{card.title}</h3>
                  <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
                    {card.items.map((item, i) => (
                      <li key={i}>✓ {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
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
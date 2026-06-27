// projects/HapticsTeleoperation.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HapticsTeleoperation() {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goToMainSection = (section) => {
    navigate(`/portfolio#${section}`);
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleHome = () => {
    navigate('/portfolio');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const modes = [
    {
      title: "1:1 Bilateral Teleoperation",
      description: "Proportional-derivative position exchange between two Hapkits with symmetric force feedback. A small displacement on the leader generates a restoring force on both devices, keeping them in sync.",
      equations: [
        "F\u2081 = k\u00b7(x\u2082 \u2212 x\u2081) + b\u00b7(\u1e8b\u2082 \u2212 \u1e8b\u2081)",
        "F\u2082 = k\u00b7(x\u2081 \u2212 x\u2082) + b\u00b7(\u1e8b\u2081 \u2212 \u1e8b\u2082)",
      ],
      embedId: "1N6wTEUW1nSfVNvIkv6XOVV9hdqbTQh99",
      link: "https://drive.google.com/file/d/1N6wTEUW1nSfVNvIkv6XOVV9hdqbTQh99/view?usp=sharing",
    },
    {
      title: "Position Scaling (2x)",
      description: "Leader motion is scaled up 2x at the follower, amplifying workspace range while preserving bilateral feedback. A small leader movement produces a larger follower displacement, useful for fine manipulation tasks.",
      equations: [
        "F\u2081 = k\u00b7(x\u2082 \u2212 s\u00b7x\u2081) + b\u00b7(\u1e8b\u2082 \u2212 s\u00b7\u1e8b\u2081)",
        "F\u2082 = k\u00b7(s\u00b7x\u2081 \u2212 x\u2082) + b\u00b7(s\u00b7\u1e8b\u2081 \u2212 \u1e8b\u2082)   [s = 2]",
      ],
      embedId: "1Uxp1csH06IF7A_A02YfJsuluFqpBhN3e",
      link: "https://drive.google.com/file/d/1Uxp1csH06IF7A_A02YfJsuluFqpBhN3e/view?usp=sharing",
    },
    {
      title: "Force Scaling (10x)",
      description: "Forces fed back to the leader are amplified 10x, enabling the operator to feel fine contact forces with greater sensitivity. The follower retains standard 1:1 coupling while the leader receives magnified feedback.",
      equations: [
        "F\u2081 = s\u00b7[k\u00b7(x\u2082 \u2212 x\u2081) + b\u00b7(\u1e8b\u2082 \u2212 \u1e8b\u2081)]   [s = 10]",
        "F\u2082 = k\u00b7(x\u2081 \u2212 x\u2082) + b\u00b7(\u1e8b\u2081 \u2212 \u1e8b\u2082)",
      ],
      embedId: "1M8nKo4P-TIAAPy5bm80YhKP64mhQWLC1",
      link: "https://drive.google.com/file/d/1M8nKo4P-TIAAPy5bm80YhKP64mhQWLC1/view?usp=sharing",
    },
  ];

  const pipeline = [
    { stage: "Leader Hapkit", desc: "Captures operator position and velocity (xh1, dxh_filt1)" },
    { stage: "Follower Sensor", desc: "A/D input reads follower position via analog pin on leader board" },
    { stage: "Control Law", desc: "PD force computed for both devices (teleop / position / force scale)" },
    { stage: "Motor Output", desc: "PWM signals drive both motors via single Hapkit board" },
    { stage: "Force Feedback", desc: "Bilateral forces rendered simultaneously to leader and follower" },
  ];

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
                Haptics · Robotics · Embedded Systems
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8 font-['Cormorant_Garamond']">
                Bilateral
                <br />
                Teleoperation
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mb-10 font-light">
                A dual-Hapkit bilateral teleoperation system implementing 1:1 position exchange,
                2x position scaling, and 10x force scaling, exploring the fundamental tradeoff
                between transparency and stability in haptic interfaces.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Arduino / C++", "PD Control", "Force Feedback"].map((skill, idx) => (
                  <span key={idx} className="text-[11px] uppercase tracking-[0.18em] border border-white/30 text-blue-100 px-4 py-2">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="text-blue-100 text-lg">
                <span className="font-semibold text-white">Project Duration:</span>{" "}
                August 2025 – December 2025
              </div>
            </div>

            {/* RIGHT — tilted photo card */}
            <div className="relative flex justify-center">
              <div className="bg-white p-4 shadow-2xl rotate-[3deg] max-w-md">
                <div className="bg-gray-100 flex items-center justify-center">
                  <img
                    src="/portfolio/hapkit-device.png"
                    alt="Hapkit bilateral teleoperation setup"
                    className="w-full h-[420px] object-contain"
                  />
                </div>
                <p className="text-center mt-4 text-sm tracking-wide text-gray-700">
                  Dual-Hapkit bilateral teleoperation setup
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
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Overview</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">Project Summary</h2>
            </div>
            <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-10 lg:p-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We built a bilateral teleoperation system using two Hapkit devices,
                a leader and a follower, controlled through a single Hapkit board running custom Arduino firmware.
                We successfully implemented and demonstrated three teleoperation modes: 1:1 proportional-derivative
                position exchange, 2x position scaling, and 10x force scaling, then tuned the control gains to
                find the optimal balance between transparency and stability.
              </p>
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">Key Features</h3>
                  <ul className="space-y-4 text-gray-700 leading-relaxed">
                    <li>✓ Single-board dual-motor control via analog A/D input bridging</li>
                    <li>✓ PD control law with tunable stiffness (k) and damping (b)</li>
                    <li>✓ Three teleoperation modes switchable via preprocessor flags</li>
                    <li>✓ Gain sweep study across k = 10-20 N/m and b = 0.1-1.0 N·s/m</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">Outcomes</h3>
                  <ul className="space-y-4 text-gray-700 leading-relaxed">
                    <li>✓ Stable bilateral teleoperation achieved at k = 12.5 N/m, b = 0.5 N·s/m</li>
                    <li>✓ 2x position scaling demonstrated with preserved force coupling</li>
                    <li>✓ 10x force amplification validated on follower contact tasks</li>
                    <li>✓ Characterized transparency-stability tradeoff empirically</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CONTEXT */}
          <section>
            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Background</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">Context and Motivation</h2>
            </div>
            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Bilateral teleoperation enables an operator to interact with a remote environment through
                a haptic interface, receiving force feedback that mirrors what the remote manipulator
                experiences. This is foundational to applications ranging from robotic surgery to
                deep-sea exploration, where direct human presence is impossible or dangerous.
              </p>
              <p>
                The core engineering challenge is balancing <strong>transparency</strong> (how faithfully
                the operator feels the remote environment) against <strong>stability</strong>. High
                stiffness coupling makes the system feel direct and responsive, but increases the risk
                of instability. High damping suppresses oscillation but introduces lag that degrades
                the sense of presence. Finding the optimal operating point requires careful empirical tuning.
              </p>
              <p>
                For this assignment, we used two Hapkit devices, one-DOF haptic paddles, wired so
                that a single Arduino-based Hapkit board controls both motors simultaneously, reading
                the follower's position sensor via an unused analog input. This architecture eliminates
                communication latency between boards and simplifies synchronization.
              </p>
            </div>
          </section>

          {/* SYSTEM ARCHITECTURE */}
          <section>
            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Pipeline</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">System Architecture</h2>
            </div>
            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-14">
              <p>
                Both Hapkits share a single control loop running on the leader board. The follower is
                powered via USB but its motor and position sensor are routed to the leader board,
                keeping all computation and motor driving centralized. Each control cycle reads both
                positions, computes the PD force law, and writes PWM outputs to both motors.
              </p>
            </div>
            <div className="flex flex-wrap items-stretch justify-center gap-3 lg:gap-4 text-center">
              {pipeline.map((step, i) => (
                <React.Fragment key={i}>
                  <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[160px] flex flex-col justify-between">
                    <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                      {step.stage}
                    </h3>
                    <p className="text-gray-600 text-[11px] uppercase tracking-[0.1em] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  {i < pipeline.length - 1 && (
                    <span className="text-3xl text-[#2A5C52] self-center">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </section>

          {/* TELEOPERATION MODES */}
          <section>
            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Implementation</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">Teleoperation Modes</h2>
            </div>

            <div className="space-y-10">
              {modes.map((mode, i) => (
                <div key={i} className="grid lg:grid-cols-2 gap-0 border border-[#D9D3C7] bg-white shadow-sm overflow-hidden">

                  {/* LEFT: description + equations */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#D9D3C7]">
                    <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-4">{mode.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{mode.description}</p>
                    <div className="bg-[#F5F3EE] border border-[#D9D3C7] px-5 py-4 font-mono text-sm text-[#2A5C52] space-y-1">
                      {mode.equations.map((eq, j) => (
                        <div key={j}>{eq}</div>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT: embedded video */}
                  <div className="bg-[#18342E] flex flex-col">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%', position: 'relative' }}>
                      <iframe
                        src={`https://drive.google.com/file/d/${mode.embedId}/preview`}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        allow="autoplay"
                        allowFullScreen
                        title={`Demo: ${mode.title}`}
                      />
                    </div>
                    <div className="flex items-center justify-between px-5 py-3 border-t border-white/10">
                      <span className="text-blue-100 text-[11px] uppercase tracking-[0.18em]">Demo</span>
                      <a
                        href={mode.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-100 text-[11px] uppercase tracking-[0.18em] hover:text-white transition-colors"
                      >
                        Open in Drive ↗
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </section>

          {/* STABILITY VS TRANSPARENCY */}
          <section>
            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Analysis</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">Stability vs. Transparency</h2>
            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-14">
              <p>
                Both Hapkits share a single control loop running on the leader board. The follower is
                powered via USB but its motor and position sensor are routed to the leader board,
                keeping all computation and motor driving centralized. Each control cycle reads both
                positions, computes the PD force law, and writes PWM outputs to both motors.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-8">
                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-4">Stability (k_tele)</h3>
                <p className="text-gray-700 leading-relaxed mb-5">
                  Stiffness determines how tightly the two Hapkits are coupled. Too low and the follower
                  lags and drifts; too high and the system becomes rigid and choppy.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="w-24 text-right font-mono text-[#2A5C52] font-semibold">10 N/m</span>
                    <div className="flex-1 bg-white border border-[#D9D3C7] px-3 py-2 text-gray-600">Smooth but quickly went unstable after a few oscillations</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-24 text-right font-mono text-[#18342E] font-bold">12.5 N/m ✓</span>
                    <div className="flex-1 bg-[#2A5C52] text-white px-3 py-2">Optimal: stable and transparent</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-24 text-right font-mono text-[#2A5C52] font-semibold">15-20 N/m</span>
                    <div className="flex-1 bg-white border border-[#D9D3C7] px-3 py-2 text-gray-600">Choppy, moved in discrete intermediate steps</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-8">
                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-4">Transparency (b_tele)</h3>
                <p className="text-gray-700 leading-relaxed mb-5">
                  Damping controls oscillation but introduces latency. Transparency describes how invisible
                  the haptic device feels: ideally the operator perceives only the remote environment, not the device itself.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="w-24 text-right font-mono text-[#2A5C52] font-semibold">Low b</span>
                    <div className="flex-1 bg-white border border-[#D9D3C7] px-3 py-2 text-gray-600">Follower oscillates, underdamped instability</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-24 text-right font-mono text-[#18342E] font-bold">0.5 N·s/m ✓</span>
                    <div className="flex-1 bg-[#2A5C52] text-white px-3 py-2">Optimal: smooth with minimal lag</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-24 text-right font-mono text-[#2A5C52] font-semibold">High b</span>
                    <div className="flex-1 bg-white border border-[#D9D3C7] px-3 py-2 text-gray-600">Perceptible delay between leader and follower motion</div>
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
  );
}
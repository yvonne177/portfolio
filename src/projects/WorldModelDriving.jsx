import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

export default function WorldModelsAutonomousDriving() {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goToMainSection = (section) => {
    navigate(`/portfolio#${section}`);
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleHome = () => {
    navigate('/portfolio');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
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
                World Models • Reinforcement Learning • Autonomous Driving
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8 font-['Cormorant_Garamond']">
                World Models
                <br />
                in Autonomous
                <br />
                Driving Systems
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mb-10 font-light">
                A controlled comparison of TD-MPC2 and DreamerV3 in CARLA, examining how
                world models support sample-efficient learning, generalization, and
                safety-relevant decision making under distribution shift.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["World Models", "Reinforcement Learning"].map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] uppercase tracking-[0.18em] border border-white/30 text-blue-100 px-4 py-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="text-blue-100 text-lg">
                <span className="font-semibold text-white">Authors:</span>{" "}
                Yvonne Zhang, Asma Almutairi (LCSR, Johns Hopkins University)
              </div>

            </div>

            {/* RIGHT: headline result card */}
            <div className="relative flex justify-center">
              <div className="bg-white p-8 shadow-2xl rotate-[2deg] max-w-md w-full">
                <p className="uppercase tracking-[0.2em] text-xs text-[#2A5C52] mb-6">
                  Final Result (Experiment 4)
                </p>
                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                  {[
                    ["100%", "Baseline"],
                    ["100%", "Rain"],
                    ["100%", "Sunset"],
                  ].map(([val, label], idx) => (
                    <div key={idx}>
                      <div className="text-3xl font-['Cormorant_Garamond'] text-[#18342E]">{val}</div>
                      <div className="text-[10px] uppercase tracking-[0.12em] text-gray-500 mt-1">{label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed border-t border-[#D9D3C7] pt-5">
                  TD-MPC2 success rate after architectural simplification and
                  validation-based checkpoint selection, matching or exceeding
                  DreamerV3 on every in-distribution condition.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* SUMMARY */}
          <section>

            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Overview</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Project Summary
              </h2>
            </div>

            <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-10 lg:p-12">

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                World models let an agent learn a compact internal representation of its
                environment and plan through latent dynamics, instead of relying on a
                modular perception, prediction, and planning pipeline. This project compares
                two state-of-the-art world model approaches, TD-MPC2 and DreamerV3, under
                identical training and evaluation conditions in the CARLA simulator using a
                zero-shot robustness protocol covering weather shift and task generalization.
              </p>

              <div className="grid lg:grid-cols-2 gap-12">

                <div>
                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                    Key Contributions
                  </h3>
                  <ul className="space-y-4 text-gray-700 leading-relaxed">
                    <li>✓ Controlled comparison of TD-MPC2 and DreamerV3 across four progressively refined experiments</li>
                    <li>✓ Zero-shot evaluation across weather shift, lighting shift, and a novel maneuver</li>
                    <li>✓ Identification of reward-shaping limits in safety-critical reinforcement learning</li>
                    <li>✓ Proposed layered safety architecture combining runtime, training, and objective-level guarantees</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                    Takeaways
                  </h3>
                  <ul className="space-y-4 text-gray-700 leading-relaxed">
                    <li>✓ TD-MPC2 reached 100% success on baseline, rain, and sunset, exceeding DreamerV3 in-distribution</li>
                    <li>✓ Observation modality and action discretization mattered more than training budget</li>
                    <li>✓ Validation-based checkpoint selection materially changed reported performance</li>
                    <li>✓ Neither method generalized to a left-turn task absent from training</li>
                  </ul>
                </div>

              </div>

            </div>
          </section>

          {/* CONTEXT */}
          <section>

            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Background</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Context & Motivation
              </h2>
            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Traditional autonomous driving stacks split the task into separate perception,
                prediction, and planning modules. This structure is easier to interpret, but
                errors in one stage propagate downstream, and these systems often degrade under
                distribution shift. Standard model-free reinforcement learning has its own
                limitations: low sample efficiency, weak generalization beyond the training
                distribution, and no explicit reasoning about the consequences of an action
                before it is taken.
              </p>
              <p>
                World models address these limitations directly. Agents learn compact latent
                representations of the environment, train policies on imagined rollouts
                generated from the learned dynamics, and plan by evaluating candidate action
                sequences before execution. This shifts the agent from reactive policy
                optimization to model-based decision making with explicit lookahead, which is
                particularly useful where safety, robustness, and data efficiency are all
                required at once.
              </p>
            </div>

          </section>

          {/* METHOD COMPARISON */}
          <section>

            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Methods</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Method Comparison
              </h2>
            </div>

            <div className="max-w-4xl text-lg leading-relaxed text-gray-700 mb-10">
              <p>
                TD-MPC2 and DreamerV3 both represent state-of-the-art world model approaches,
                but differ in how they learn representations, perform planning, and interact
                with observations.
              </p>
            </div>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm text-gray-700 border border-[#D9D3C7]">
                <thead>
                  <tr className="bg-[#EFEAE0] text-[#18342E] uppercase tracking-[0.1em] text-xs">
                    <th className="px-6 py-4 text-left border-b border-[#D9D3C7]">Feature</th>
                    <th className="px-6 py-4 text-left border-b border-[#D9D3C7]">DreamerV3</th>
                    <th className="px-6 py-4 text-left border-b border-[#D9D3C7]">TD-MPC2</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["World Model", "RSSM, latent dynamics with pixel decoder", "Decoder-free latent dynamics using SimNorm representation"],
                    ["Training Signal", "ELBO objective with pixel reconstruction loss", "TD loss on rewards, no pixel reconstruction"],
                    ["Policy Learning", "Actor-critic trained in imagined rollouts, reactive at test time", "MPPI planning at every step using learned dynamics"],
                    ["Decoder", "Required (transposed CNN for image reconstruction)", "None"],
                    ["Observation Input", "Flexible: RGB, BEV, LiDAR, camera", "State vectors or low-dimensional observations"],
                    ["Model Size", "12M to 400M parameters", "1M to 317M parameters"],
                    ["Latent Representation", "Stochastic categorical distributions", "Continuous normalized SimNorm latent space"],
                  ].map(([feature, dv3, tdmpc], idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#F9F7F3]"}>
                      <td className="px-6 py-4 border-b border-[#D9D3C7] font-medium">{feature}</td>
                      <td className="px-6 py-4 border-b border-[#D9D3C7]">{dv3}</td>
                      <td className="px-6 py-4 border-b border-[#D9D3C7]">{tdmpc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </section>

          {/* EVALUATION PROTOCOL */}
          <section>

            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Protocol</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Zero-Shot Robustness Evaluation
              </h2>
            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-12">
              <p>
                Trained policies are evaluated under conditions not encountered during
                training, with no fine-tuning or adaptation. Each condition is evaluated over
                15 episodes using identical settings, isolating robustness from in-distribution
                performance.
              </p>
            </div>

            {/* Process flow */}
            <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 text-center mb-14">

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Baseline
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  ClearNoon
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Rain
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  HardRainNoon
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Sunset
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  ClearSunset
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Left Turn
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Novel Maneuver
                </p>
              </div>

            </div>

            <div className="bg-[#EFEAE0] border border-[#D9D3C7] px-6 py-4 font-mono text-sm text-[#18342E] max-w-2xl mx-auto space-y-1">
              <div>Waypoint following: +2.0</div>
              <div>Speed tracking: +0.5 per m/s toward 4 m/s target</div>
              <div>Collision penalty: −30.0 (episode-ending)</div>
              <div>Out-of-lane penalty: −3.0</div>
              <div>Destination reached: +20.0</div>
            </div>

          </section>

          {/* EXPERIMENTAL PROGRESSION */}
          <section>

            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Results</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Experimental Progression
              </h2>
            </div>

            <div className="max-w-4xl text-lg leading-relaxed text-gray-700 mb-10">
              <p>
                TD-MPC2 was refined across four experiments, each isolating a different design
                axis: training hyperparameters, observation modality and action representation,
                and checkpoint selection.
              </p>
            </div>

            <div className="overflow-x-auto mb-14">
              <table className="w-full text-sm text-gray-700 border border-[#D9D3C7]">
                <thead>
                  <tr className="bg-[#EFEAE0] text-[#18342E] uppercase tracking-[0.1em] text-xs">
                    <th className="px-6 py-4 text-left border-b border-[#D9D3C7]">Experiment</th>
                    <th className="px-6 py-4 text-left border-b border-[#D9D3C7]">Key Change</th>
                    <th className="px-6 py-4 text-left border-b border-[#D9D3C7]">Baseline Success</th>
                    <th className="px-6 py-4 text-left border-b border-[#D9D3C7]">Baseline Out-of-Lane</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1. Initial Integration", "Default TD-MPC2 settings, multimodal BEV + camera input", "23.3%", "40.0%"],
                    ["2. Hyperparameter Tuning", "Extended planning horizon, rebalanced loss coefficients", "46.7%", "20.0%"],
                    ["3. Architectural Simplification", "BEV-only input, discretized action space, anti-stall bonus", "40.0%", "53.3%"],
                    ["4. Checkpoint Selection", "Validation-based checkpoint selection on Experiment 3 architecture", "100.0%", "0.0%"],
                  ].map(([exp, change, succ, ool], idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#F9F7F3]"}>
                      <td className="px-6 py-4 border-b border-[#D9D3C7] font-medium">{exp}</td>
                      <td className="px-6 py-4 border-b border-[#D9D3C7]">{change}</td>
                      <td className="px-6 py-4 border-b border-[#D9D3C7]">{succ}</td>
                      <td className="px-6 py-4 border-b border-[#D9D3C7]">{ool}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                Final Results (Experiment 4)
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl">
                With the best checkpoint from a single training run, TD-MPC2 matched or
                exceeded DreamerV3 on every in-distribution condition. Neither method
                generalized to the left-turn task.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-700 border border-[#D9D3C7]">
                <thead>
                  <tr className="bg-[#EFEAE0] text-[#18342E] uppercase tracking-[0.1em] text-xs">
                    <th className="px-6 py-4 text-left border-b border-[#D9D3C7]">Condition</th>
                    <th className="px-6 py-4 text-left border-b border-[#D9D3C7]">TD-MPC2 Success</th>
                    <th className="px-6 py-4 text-left border-b border-[#D9D3C7]">DreamerV3 Success</th>
                    <th className="px-6 py-4 text-left border-b border-[#D9D3C7]">TD-MPC2 Out-of-Lane</th>
                    <th className="px-6 py-4 text-left border-b border-[#D9D3C7]">DreamerV3 Out-of-Lane</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Baseline", "100.0%", "95.8%", "0.0%", "0.0%"],
                    ["Rain", "100.0%", "87.5%", "0.0%", "0.0%"],
                    ["Sunset", "100.0%", "54.2%", "0.0%", "20.8%"],
                    ["Left Turn", "0.0%", "0.0%", "100.0%", "45.8%"],
                  ].map(([cond, ts, ds, tool, dool], idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#F9F7F3]"}>
                      <td className="px-6 py-4 border-b border-[#D9D3C7] font-medium">{cond}</td>
                      <td className="px-6 py-4 border-b border-[#D9D3C7]">{ts}</td>
                      <td className="px-6 py-4 border-b border-[#D9D3C7]">{ds}</td>
                      <td className="px-6 py-4 border-b border-[#D9D3C7]">{tool}</td>
                      <td className="px-6 py-4 border-b border-[#D9D3C7]">{dool}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </section>

          {/* KEY OBSERVATIONS */}
          <section>

            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Analysis</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Key Observations
              </h2>
            </div>

            <div className="space-y-10">

              <div>
                <h3 className="text-xl font-['Cormorant_Garamond'] text-[#18342E] mb-3">
                  Asymmetric Safety Transfer
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Zero collisions were recorded across every configuration and condition for
                  both algorithms. The collision penalty, scaled by speed, exceeds the
                  cumulative positive reward from any plausible collision trajectory, so it
                  functions as a near-hard constraint even outside the training distribution.
                  The out-of-lane penalty is roughly two orders of magnitude smaller, and the
                  agents learned policies that disregard it once it competes with waypoint
                  progress. In-distribution, lane-keeping happens to hold; under the left-turn
                  shift, it fails completely while collision avoidance persists. Reward
                  magnitude relative to competing terms, not the structural form of the
                  constraint, determines which constraints survive distribution shift.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-['Cormorant_Garamond'] text-[#18342E] mb-3">
                  Distribution Shift Exposes the Limits of Reward Shaping
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Both methods perform well in-distribution but fail completely on the
                  left-turn task, where the only difference from training is the direction of
                  the maneuver. Neither method had any experience with left turns, and reward
                  shaping offers no mechanism for the agent to remain safe once its learned
                  model becomes irrelevant.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-['Cormorant_Garamond'] text-[#18342E] mb-3">
                  Observation Modality Affects Robustness More Than Model Capacity
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The largest single improvement came not from additional training budget or a
                  longer planning horizon, but from removing the front-camera observation. The
                  BEV channel carried enough information for the right-turn task on its own,
                  while the camera introduced weather and lighting dependencies that propagated
                  into the learned policy.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-['Cormorant_Garamond'] text-[#18342E] mb-3">
                  Checkpoint Selection Materially Affects Reported Performance
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The same training run produced 100% baseline success at the optimal
                  checkpoint and 86.7% at the final checkpoint. Conclusions drawn from a final
                  training step, without validation-based selection, can misstate the actual
                  performance of the policy.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-['Cormorant_Garamond'] text-[#18342E] mb-3">
                  Empirical Safety Is Not Principled Safety
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Zero collisions across 60 in-distribution episodes is the lowest tier of
                  safety claim available: it is empirical, not a guarantee. No shield, control
                  barrier function, reachability set, or safety filter is present in the
                  pipeline, so any unsafe action is executed without modification. The 100%
                  out-of-lane failure on the left-turn task makes this concrete: a safety
                  property that holds in-distribution does not necessarily hold outside it.
                </p>
              </div>

            </div>

          </section>

          {/* NEXT STEPS */}
          <section>

            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Future Work</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Toward a Layered Safety Architecture
              </h2>
            </div>

            <div className="max-w-4xl text-lg leading-relaxed text-gray-700 mb-12">
              <p>
                Closing the gap between empirical and principled safety calls for a layered
                architecture in which each layer contributes a different class of guarantee,
                so the layers complement rather than duplicate one another.
              </p>
            </div>

            <div className="space-y-10">

              <div className="grid lg:grid-cols-[0.3fr_1.7fr] gap-6 items-start border-l-4 border-[#2A5C52] pl-6">
                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E]">
                  Runtime Layer
                </h3>
                <div>
                  <p className="text-sm uppercase tracking-[0.15em] text-[#2A5C52] mb-3">Control Barrier Functions</p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A safety filter sits between the policy and the simulator actuators,
                    encoding the lane boundary as a safe set and a minimum time-to-collision as
                    a temporal constraint. Any proposed action that would leave the safe set is
                    projected onto the nearest action that maintains it, providing a
                    deterministic guarantee conditional on the accuracy of the dynamics model
                    used for the projection.
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-[0.3fr_1.7fr] gap-6 items-start border-l-4 border-[#2A5C52] pl-6">
                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E]">
                  Training Layer
                </h3>
                <div>
                  <p className="text-sm uppercase tracking-[0.15em] text-[#2A5C52] mb-3">Constrained Optimization</p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Collisions and lane departures are tracked as a separate cost signal rather
                    than folded into the scalar reward, using a Lagrangian formulation or
                    Constrained Policy Optimization. The Lagrangian multiplier auto-tunes the
                    effective safety penalty during training, removing the manual tuning of
                    penalty magnitudes that proved consequential in the experiments above, and
                    yields a probabilistic guarantee that the cost constraint holds in
                    expectation after training.
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-[0.3fr_1.7fr] gap-6 items-start border-l-4 border-[#2A5C52] pl-6">
                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E]">
                  Objective Layer
                </h3>
                <div>
                  <p className="text-sm uppercase tracking-[0.15em] text-[#2A5C52] mb-3">Risk-Aware Reward</p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The expected-return objective is replaced with Conditional Value-at-Risk
                    over the worst-performing fraction of episodes. Average-reward objectives
                    favor a policy that fails catastrophically in a small fraction of episodes
                    over one with a higher success rate but no catastrophic failures; a
                    risk-sensitive objective explicitly maximizes the lower tail of the return
                    distribution instead.
                  </p>
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
// projects/ScopePowerSupplyDesign.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ScopePowerSupplyDesign() {
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
                PCB & Power Electronics
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8 font-['Cormorant_Garamond']">
                Oscilloscope
                <br />
                PCB Design
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mb-10 font-light">
                A dual-rail ±18V power supply built from a boost and inverting regulator
                pair, paired with input and ADC protection circuitry, designed and laid out
                on a custom PCB for a dual-channel oscilloscope front end.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "Eagle CAD", "PCB Layout", "Circuit Simulation"
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
                September to December 2023
              </div>

            </div>

            {/* RIGHT — HERO IMAGE SPOT */}
            <div className="relative flex justify-center">

              <div className="bg-white p-4 shadow-2xl rotate-[3deg] max-w-md">

                {/* Fabricated PCB output */}
                <img
                  src="/portfolio/oscilloscope-pcb-output.png"
                  alt="Fabricated power supply PCB"
                  className="w-full h-[420px] object-contain"
                />

                <p className="text-center mt-4 text-sm tracking-wide text-gray-700">
                  Fabricated power supply PCB
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
                The design selected for the oscilloscope's analog supply was a
                boost-plus-inverting regulator pair, sourcing both rails from a single
                input. The boost regulator supplies the board with +18V and in turn sources
                the inverting regulator to provide -18V, a combination chosen for its lower
                complexity relative to adding a separate converter stage for the negative
                rail.
              </p>

            <div className="grid lg:grid-cols-2 gap-12">

                <div>

                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                    Key Features
                  </h3>

                  <ul className="space-y-4 text-gray-700 leading-relaxed">
                    <li>✓ Boost-plus-inverting topology generating a symmetric ±18V supply from one source</li>
                    <li>✓ Both regulator stages exceeding 85% efficiency</li>
                    <li>✓ Dedicated input and output/ADC protection stages guarding the board</li>
                  </ul>

                </div>

                <div>

                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                    Design Highlights
                  </h3>

                  <ul className="space-y-4 text-gray-700 leading-relaxed">
                    <li>✓ TPS61170 boost and LM25576 inverting converters as the core regulator ICs</li>
                    <li>✓ ADA4096-2 op-amp filtering stage ahead of the ADC input</li>
                    <li>✓ Full custom layout routed across top and bottom copper within the 3" x 4" footprint</li>
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
                The oscilloscope's analog front end required a clean, symmetric supply
                rail to power its signal conditioning and protection circuitry. A boost
                plus inverting regulator combination was selected over a more complex
                multi-stage topology, since it reaches both the positive and negative
                rails without adding an extra converter stage for the negative side.
              </p>

              <p>
                Efficiency was the primary selection criterion for the regulators, since the
                boost stage's output directly sources the inverting stage downstream. The
                focus was on maximizing efficiency above 85% for both stages, while taking
                cost, estimated board area, and parts availability in the Eagle component
                library into account alongside simulated performance.
              </p>

            </div>

          </section>

          {/* POWER FLOW */}
          <section>
            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Supply Chain
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Power Flow
              </h2>

            </div>
            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-14">
              <p>
                A single input source feeds the boost regulator, which steps the voltage
                up to +18V. That +18V rail then sources the inverting regulator, which
                produces -18V, completing the ±18V supply delivered to the scope's front
                end.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 text-center">
              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Input Source
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Single Supply Rail
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Boost Regulator
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  TPS61170 • +18V • 90.9%
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Inverting Regulator
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  LM25576 • -18V • 85.1%
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Protection Stage
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Input & ADC Guarding
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Scope Front End
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  ±18V Rail Delivered
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

              {/* BOOST REGULATOR */}
              <div>

                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-6">
                  1. Boost Regulator
                </h3>

                <div className="space-y-6 text-lg leading-relaxed text-gray-700 mb-8">

                  <p>
                    The boost stage was built around the TPS61170, simulated and tuned to
                    deliver +18V at 90.9% efficiency. Since the boost output directly feeds
                    the inverting stage, its efficiency was the higher-priority target of
                    the two regulators.
                  </p>

                  <p>
                    Transient load, input transient, and steady-state response were each
                    simulated to validate the regulator's behavior under varying conditions
                    before finalizing the schematic.
                  </p>

                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">

                  <div className="bg-white p-3 shadow-lg">
                    <img
                      src="/portfolio/oscilloscope-transient-load.png"
                      alt="Transient load response of the boost regulator"
                      className="w-full h-[220px] object-contain"
                    />
                    <p className="text-center mt-3 text-sm tracking-wide text-gray-700">
                      Transient load
                    </p>
                  </div>

                  <div className="bg-white p-3 shadow-lg">
                    <img
                      src="/portfolio/oscilloscope-input-transient.png"
                      alt="Input transient response of the boost regulator"
                      className="w-full h-[220px] object-contain"
                    />
                    <p className="text-center mt-3 text-sm tracking-wide text-gray-700">
                      Input transient
                    </p>
                  </div>

                  <div className="bg-white p-3 shadow-lg">
                    <img
                      src="/portfolio/oscilloscope-steady-state.png"
                      alt="Steady state response of the boost regulator"
                      className="w-full h-[220px] object-contain"
                    />
                    <p className="text-center mt-3 text-sm tracking-wide text-gray-700">
                      Steady state
                    </p>
                  </div>

                </div>

                <div className="bg-white p-3 shadow-lg">
                  <img
                    src="/portfolio/oscilloscope-boost-schematic.png"
                    alt="Schematic of TPS61170 boost regulator, Q1"
                    className="w-full h-[420px] object-contain"
                  />
                  <p className="text-center mt-3 text-sm tracking-wide text-gray-700">
                    Schematic of TPS61170 - Q1 boost
                  </p>
                </div>

              </div>

              {/* INVERTING REGULATOR */}
              <div>

                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-6">
                  2. Inverting Regulator
                </h3>

                <div className="space-y-6 text-lg leading-relaxed text-gray-700 mb-8">

                  <p>
                    The inverting stage uses the LM25576 sourced from the boost output to
                    generate -18V at 85.1% efficiency, completing the symmetric ±18V rail
                    needed by the scope's front end circuitry.
                  </p>

                </div>

                <div className="bg-white p-3 shadow-lg">
                  <img
                    src="/portfolio/oscilloscope-inverter-schematic.png"
                    alt="Schematic of LM25576MH inverter"
                    className="w-full h-[420px] object-contain"
                  />
                  <p className="text-center mt-3 text-sm tracking-wide text-gray-700">
                    Schematic of LM25576MH inverter
                  </p>
                </div>

              </div>

              {/* INPUT & ADC PROTECTION */}
              <div>

                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-6">
                  3. Input & ADC Protection
                </h3>

                <div className="space-y-6 text-lg leading-relaxed text-gray-700 mb-8">

                  <p>
                    Ahead of the regulators, an input protection stage was added to guard
                    the board against out-of-range input conditions, built around a
                    resistor network and clamping diode pair on the input rail.
                  </p>

                  <p>
                    On the output side, a dedicated filter stage built around an
                    ADA4096-2 op-amp, together with a second diode pair, protects the
                    downstream ADC from signal levels outside its safe input range. The
                    block diagram and updated schematic below capture how the protection
                    stages sit relative to the regulators on the board.
                  </p>

                </div>

                <div className="grid md:grid-cols-2 gap-6">

                  <div className="bg-white p-3 shadow-lg">
                    <img
                      src="/portfolio/oscilloscope-pcb-block-diagram.png"
                      alt="Block diagram of PCB layout"
                      className="w-full h-[320px] object-contain"
                    />
                    <p className="text-center mt-3 text-sm tracking-wide text-gray-700">
                      Block diagram of PCB layout
                    </p>
                  </div>

                  <div className="bg-white p-3 shadow-lg">
                    <img
                      src="/portfolio/oscilloscope-updated-schematic.png"
                      alt="Updated schematic diagram"
                      className="w-full h-[320px] object-contain"
                    />
                    <p className="text-center mt-3 text-sm tracking-wide text-gray-700">
                      Updated schematic diagram
                    </p>
                  </div>

                </div>

              </div>

              {/* PCB LAYOUT & FABRICATION */}
              <div>

                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-6">
                  4. PCB Layout & Fabrication
                </h3>

                <div className="space-y-6 text-lg leading-relaxed text-gray-700 mb-8">

                  <p>
                    The full board, including both regulator stages and the protection
                    circuitry, was laid out within the 3" x 4" target footprint, with an
                    estimated 30-40% of the available area utilized. Routing was split
                    across top and bottom copper layers to keep the boost, inverting, and
                    protection sections cleanly separated on the board.
                  </p>

                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">

                  <div className="bg-white p-3 shadow-lg">
                    <img
                      src="/portfolio/oscilloscope-top-copper.png"
                      alt="Top copper layer of PCB"
                      className="w-full h-[260px] object-contain"
                    />
                    <p className="text-center mt-3 text-sm tracking-wide text-gray-700">
                      Top copper layer
                    </p>
                  </div>

                  <div className="bg-white p-3 shadow-lg">
                    <img
                      src="/portfolio/oscilloscope-bottom-copper.png"
                      alt="Bottom copper layer of PCB"
                      className="w-full h-[260px] object-contain"
                    />
                    <p className="text-center mt-3 text-sm tracking-wide text-gray-700">
                      Bottom copper layer
                    </p>
                  </div>

                  <div className="bg-white p-3 shadow-lg">
                    <img
                      src="/portfolio/oscilloscope-combined-copper.png"
                      alt="Combined copper layers of PCB"
                      className="w-full h-[260px] object-contain"
                    />
                    <p className="text-center mt-3 text-sm tracking-wide text-gray-700">
                      Combined copper layers
                    </p>
                  </div>

                </div>

                <div className="bg-white p-3 shadow-lg">
                  <img
                    src="/portfolio/oscilloscope-pcb-output.png"
                    alt="PCB output"
                    className="w-full h-[420px] object-contain"
                  />
                  <p className="text-center mt-3 text-sm tracking-wide text-gray-700">
                    PCB output
                  </p>
                </div>

              </div>

            </div>

          </section>

          {/* OUTCOMES */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Evaluation
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Design Outcomes
              </h2>

            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-14">

              <p>
                The final design met its core targets: a ±18V supply generated from a
                single input through a two-stage boost-plus-inverting topology, both
                regulators clearing the 85% efficiency target, and the full protection and
                regulator circuitry fitting within the 3" x 4" board footprint.
              </p>

              <div className="grid md:grid-cols-2 gap-8">

                <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-8">
                  <h4 className="text-xl font-['Cormorant_Garamond'] text-[#18342E] mb-3">
                    Efficiency
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    The boost stage reached 90.9% efficiency and the inverting stage 85.1%,
                    both above the 85% target set during design selection, with the higher
                    boost efficiency helping preserve headroom for the inverting stage it
                    sources.
                  </p>
                </div>

                <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-8">
                  <h4 className="text-xl font-['Cormorant_Garamond'] text-[#18342E] mb-3">
                    Protection & Layout
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Dedicated input and output/ADC protection stages were integrated
                    alongside the regulators, with the complete layout routed across top
                    and bottom copper within the targeted board footprint.
                  </p>
                </div>

              </div>

            </div>

          </section>

          {/* NEXT STEPS */}
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
                <li>✓ Validate the protection circuitry against a wider range of fault and overvoltage conditions on bench hardware</li>
                <li>✓ Investigate further board area reduction given the 30-40% footprint utilization headroom</li>
                <li>✓ Characterize regulator efficiency across load and temperature ranges beyond the simulated conditions</li>
                <li>✓ Explore tighter integration between the protection stage and ADC input stage to reduce component count</li>
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
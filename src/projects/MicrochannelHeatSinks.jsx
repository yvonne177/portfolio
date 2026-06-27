// projects/HeatSinkProject.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HeatSinkProject() {
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
                Advanced Manufacturing
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8 font-['Cormorant_Garamond']">
                Microchannel
                <br />
                Heat Sinks via
                <br />
                Laser Powder Bed Fusion
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mb-10 font-light">
                A manufacturing proposal for a micro pin fin heat sink combining
                an aluminum-graphene composite feedstock, laser powder bed fusion,
                and a multi-layer boron nitride coating, aimed at improving CPU
                heat dissipation beyond conventional finned aluminum heat sinks.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "Advanced Manufacturing", "Materials Engineering", "Thermal Design"
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
                January to April 2025
              </div>

            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">

              <div className="bg-white p-4 shadow-2xl rotate-[3deg] max-w-md">

                <img
                  src="/portfolio/heatsink-pinfin-design.png"
                  alt="Cone-shaped pin fin heat sink configuration"
                  className="w-full h-[420px] object-contain"
                />

                <p className="text-center mt-4 text-sm tracking-wide text-gray-700">
                  Staggered cone pin fin configuration
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
                As a team of four, we proposed a redesigned CPU heat sink built from
                a graphene-reinforced aluminum composite, shaped into a micro pin fin
                geometry by laser powder bed fusion and finished with a boron nitride
                coating — aimed at outperforming a commercial aluminum baseline while
                cutting material volume.
              </p>

              <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <li>✓ Sized the micro pin fin array to match the baseline's surface area at roughly 23% of its volume (52.8 vs 230 cm³)</li>
                <li>✓ Mapped a complete, characterization-gated process chain using low-cost dry ball milling for the composite feedstock</li>
                <li>✓ Quantified the additive-versus-conventional cost tradeoff at roughly 12× capital and 1.5× material cost</li>
              </ul>

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
                As electronic devices push toward higher performance and smaller
                footprints, traditional air-cooled heat sinks struggle to keep up
                with the heat density of modern CPUs. Standard finned aluminum
                designs face a tradeoff between fin geometry, flow resistance, and
                manufacturability, while common heat sink materials such as
                aluminum and copper are limited by weight, cost, and corrosion.
              </p>

              <p>
                Our team set out to manufacture a heat sink with higher heat
                dissipation efficiency than a commercial baseline, while reducing
                or maintaining its overall size. Rather than relying on
                conventional forging or skiving, we explored{" "}
                <strong className="text-[#18342E]">laser powder bed fusion (LPBF)</strong>{" "}
                to manufacture micro pin fin geometries that are difficult to
                produce with traditional methods, combined with material and
                coating improvements to push thermal performance further.
              </p>

              <p>
                The benchmark we designed against was a commercial finned-aluminum
                heat sink that reduces temperatures by up to 12.8 °C under a heat
                flux of 12,000 W/m² — the performance target the new design had to
                meet or beat at a smaller size.
              </p>

            </div>

          </section>

          {/* PROCESS PIPELINE */}
          <section>
            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Manufacturing Chain
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Process Overview
              </h2>

            </div>
            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-14">
              <p>
                The proposed process moves from composite powder preparation
                through additive manufacturing to a final surface coating, with
                characterization steps built in at each stage to validate
                material quality before moving forward.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 text-center">
              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[190px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Ball Milling
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  AlSi10Mg + Graphene Nanoplatelet Feedstock
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[190px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  LPBF Build
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Micro Pin Fin Geometry
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[190px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Annealing
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Furnace Treatment + Water Quench
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[190px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  PE-CVD Coating
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Boron Nitride Surface Layer
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

              {/* GEOMETRY */}
              <div>

                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-6">
                  1. Heat Sink Geometry
                </h3>

                <div className="space-y-6 text-lg leading-relaxed text-gray-700">

                  <p>
                    Cone-shaped pins were selected for their sharp edges, which
                    literature identifies as the strongest performing geometry for
                    micro pin fin heat sinks, arranged in a staggered pattern to
                    increase the heat transfer coefficient. Pin density was set
                    between 0.5 and 0.6 to balance surface area against flow
                    resistance.
                  </p>

                  <p>
                    Sizing the array to match the surface area of a commercial
                    baseline heat sink, at a pin diameter of 0.58 mm and height of
                    2.5 mm, required roughly 40,000 pins arranged in a 200 by 200
                    grid. The derivation below sizes the array straight from a
                    target surface area:
                  </p>

                </div>

                {/* DERIVATION CALLOUT */}
                <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-8 lg:p-10 mt-8">

                  <p className="uppercase tracking-[0.2em] text-xs text-[#2A5C52] mb-7">
                    Sizing the Pin Array
                  </p>

                  <div className="space-y-6">

                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        Lateral surface area per cone pin&nbsp;&nbsp;(r = 0.29 mm, h = 2.5 mm)
                      </p>
                      <p className="font-['Cormorant_Garamond'] text-xl sm:text-2xl text-[#18342E]">
                        A = π · r · √(h² + r²) ≈ 0.0229 cm²
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        Pins needed to match the 886.8 cm² baseline surface area
                      </p>
                      <p className="font-['Cormorant_Garamond'] text-xl sm:text-2xl text-[#18342E]">
                        886.8 / 0.0229 ≈ 38,725 → 40,000&nbsp;&nbsp;(200 × 200)
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        Total floor area at a 0.5 pin density
                      </p>
                      <p className="font-['Cormorant_Garamond'] text-xl sm:text-2xl text-[#18342E]">
                        2 × (40,000 · π · r²) ≈ 211.4 cm²
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        Total heat sink volume
                      </p>
                      <p className="font-['Cormorant_Garamond'] text-xl sm:text-2xl text-[#18342E]">
                        211.4 cm² × 0.25 cm ≈ 52.8 cm³
                      </p>
                    </div>

                  </div>

                </div>

                {/* VOLUME COMPARISON */}
                <div className="bg-white border border-[#D9D3C7] shadow-lg p-8 lg:p-10 mt-6">

                  <p className="uppercase tracking-[0.2em] text-xs text-[#2A5C52] mb-7">
                    Volume vs. Baseline
                  </p>

                  <div className="space-y-5">

                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Conventional finned baseline</span>
                        <span className="text-[#18342E] font-medium">230 cm³</span>
                      </div>
                      <div className="h-7 bg-[#EFEAE0] border border-[#D9D3C7]">
                        <div className="h-full bg-[#18342E]" style={{ width: '100%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Proposed micro pin fin design</span>
                        <span className="text-[#18342E] font-medium">52.8 cm³</span>
                      </div>
                      <div className="h-7 bg-[#EFEAE0] border border-[#D9D3C7]">
                        <div className="h-full bg-[#2A5C52]" style={{ width: '23%' }} />
                      </div>
                    </div>

                  </div>

                  <p className="text-sm text-gray-600 mt-6">
                    Matched surface area (~887 cm²) at roughly 77% less volume.
                  </p>

                </div>

              </div>

              {/* BALL MILLING */}
              <div>

                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-6">
                  2. Composite Powder Feedstock
                </h3>

                <div className="space-y-6 text-lg leading-relaxed text-gray-700">

                  <p>
                    AlSi10Mg was chosen as the base alloy for its established use in
                    both LPBF and heat sink manufacturing, with a thermal
                    conductivity that improves further after heat treatment.
                    Graphene nanoplatelets at 0.5 and 1 weight percent were
                    incorporated into the powder feedstock using dry ball milling,
                    a lower-cost alternative to liquid-assisted mixing.
                  </p>

                  <p>
                    Mixing parameters, including ball-to-powder ratio, rotational
                    speed, and mixing time, were defined as a batch testing range to
                    optimize dispersion while limiting structural damage to the
                    graphene particles. Powder morphology and dispersion would be
                    verified using SEM, EDS elemental mapping, and Raman
                    spectroscopy.
                  </p>

                </div>

                {/* THERMAL STAT ROW */}
                <div className="grid sm:grid-cols-2 gap-4 mt-8">

                  <div className="bg-white border border-[#D9D3C7] shadow-lg p-6">
                    <p className="font-['Cormorant_Garamond'] text-3xl text-[#18342E]">
                      119 → 173 <span className="text-lg text-gray-500">W/m·K</span>
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      AlSi10Mg conductivity, before → after heat treatment
                    </p>
                  </div>

                  <div className="bg-white border border-[#D9D3C7] shadow-lg p-6">
                    <p className="font-['Cormorant_Garamond'] text-3xl text-[#18342E]">
                      {">"} 600 <span className="text-lg text-gray-500">W/m·K</span>
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Boron nitride coating, among the highest for non-carbon materials
                    </p>
                  </div>

                </div>

              </div>

              {/* LPBF */}
              <div>

                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-6">
                  3. Laser Powder Bed Fusion
                </h3>

                <div className="space-y-6 text-lg leading-relaxed text-gray-700">

                  <p>
                    The composite powder would be processed using LPBF, building the
                    pin fin geometry layer by layer with a heated build plate, a
                    laser power around 200 W, and scanning speeds tuned for aluminum
                    powders. Post-build annealing at an elevated furnace temperature
                    followed by a water quench was proposed to protect the
                    microstructure while improving thermal conductivity.
                  </p>

                  <p>
                    Process quality would be evaluated through optical microscopy for
                    porosity and discontinuities, alongside SEM and EDS to track
                    carbon distribution from the graphene reinforcement and check for
                    gas porosity from oxide reduction reactions during the print.
                  </p>

                </div>

                {/* LPBF SPEC BLOCK */}
                <div className="bg-white border border-[#D9D3C7] shadow-lg p-8 mt-8">

                  <p className="uppercase tracking-[0.2em] text-xs text-[#2A5C52] mb-6">
                    Key LPBF Parameters
                  </p>

                  <dl className="grid sm:grid-cols-2 gap-x-12 gap-y-4">

                    <div className="flex justify-between border-b border-[#E4DECF] pb-2">
                      <dt className="text-gray-600">Build plate</dt>
                      <dd className="text-[#18342E] font-medium">80 °C</dd>
                    </div>

                    <div className="flex justify-between border-b border-[#E4DECF] pb-2">
                      <dt className="text-gray-600">Laser power</dt>
                      <dd className="text-[#18342E] font-medium">~200 W</dd>
                    </div>

                    <div className="flex justify-between border-b border-[#E4DECF] pb-2">
                      <dt className="text-gray-600">Layer thickness</dt>
                      <dd className="text-[#18342E] font-medium">50 μm → ~30 μm</dd>
                    </div>

                    <div className="flex justify-between border-b border-[#E4DECF] pb-2">
                      <dt className="text-gray-600">Scan speed</dt>
                      <dd className="text-[#18342E] font-medium">50–3000 mm/s</dd>
                    </div>

                    <div className="flex justify-between border-b border-[#E4DECF] pb-2">
                      <dt className="text-gray-600">Anneal</dt>
                      <dd className="text-[#18342E] font-medium">520 °C + water quench</dd>
                    </div>

                    <div className="flex justify-between border-b border-[#E4DECF] pb-2">
                      <dt className="text-gray-600">Graphene loading</dt>
                      <dd className="text-[#18342E] font-medium">0.5–1 wt%</dd>
                    </div>

                  </dl>

                </div>

              </div>

              {/* COATING */}
              <div>

                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-6">
                  4. Boron Nitride Coating
                </h3>

                <div className="space-y-6 text-lg leading-relaxed text-gray-700">

                  <p>
                    Because aluminum's low melting point rules out conventional
                    high-temperature CVD, the design called for plasma-enhanced
                    chemical vapor deposition to apply a boron nitride coating at
                    around 350 to 400 degrees Celsius, well below the substrate's
                    melting point. A borazine and ammonia gas mixture under
                    microwave-generated plasma was proposed to form the coating,
                    with a multi-layer approach recommended to reduce oxidation-driven
                    degradation over time.
                  </p>

                </div>

                {/* PE-CVD SPEC BLOCK */}
                <div className="bg-white border border-[#D9D3C7] shadow-lg p-8 mt-8">

                  <p className="uppercase tracking-[0.2em] text-xs text-[#2A5C52] mb-6">
                    Key PE-CVD Parameters
                  </p>

                  <dl className="grid sm:grid-cols-2 gap-x-12 gap-y-4">

                    <div className="flex justify-between border-b border-[#E4DECF] pb-2">
                      <dt className="text-gray-600">Deposition temp.</dt>
                      <dd className="text-[#18342E] font-medium">350–400 °C</dd>
                    </div>

                    <div className="flex justify-between border-b border-[#E4DECF] pb-2">
                      <dt className="text-gray-600">Chamber pressure</dt>
                      <dd className="text-[#18342E] font-medium">0.01–10 Torr</dd>
                    </div>

                    <div className="flex justify-between border-b border-[#E4DECF] pb-2">
                      <dt className="text-gray-600">Precursors</dt>
                      <dd className="text-[#18342E] font-medium">Borazine + ammonia (1:1)</dd>
                    </div>

                    <div className="flex justify-between border-b border-[#E4DECF] pb-2">
                      <dt className="text-gray-600">Plasma source</dt>
                      <dd className="text-[#18342E] font-medium">40.68 MHz microwave</dd>
                    </div>

                  </dl>

                </div>

              </div>

            </div>

          </section>

          {/* COST ANALYSIS */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Evaluation
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Cost Analysis
              </h2>

            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-14">

              <p>
                A cost comparison was conducted between the proposed additively
                manufactured heat sink and a conventional extruded aluminum
                baseline, covering both capital equipment and variable material
                costs.
              </p>

              <div className="grid md:grid-cols-2 gap-8">

                <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-8">
                  <h4 className="text-xl font-['Cormorant_Garamond'] text-[#18342E] mb-3">
                    Conventional Baseline
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Aluminum extrusion, heat treatment, surface finishing, and
                    machining, with an estimated capital cost of $50,000 USD and
                    variable material and finishing costs of $3,400 USD.
                  </p>
                </div>

                <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-8">
                  <h4 className="text-xl font-['Cormorant_Garamond'] text-[#18342E] mb-3">
                    Proposed Design
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Ball milling, LPBF, and PE-CVD with graphene and boron nitride
                    feedstock, with an estimated capital cost of $610,000 USD and
                    variable material and gas costs of $5,076.95 USD, roughly 12
                    times the equipment cost and 1.5 times the material cost of the
                    baseline.
                  </p>
                </div>

              </div>

            </div>

          </section>

          {/* FUTURE WORK */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Next Steps
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Future Work
              </h2>

            </div>

            <div className="max-w-4xl">

              <ul className="space-y-4 text-lg leading-relaxed text-gray-700">
                <li>✓ Build a computational heat transfer model to validate the proposed geometry before manufacturing</li>
                <li>✓ Manufacture prototypes with and without the boron nitride coating for direct comparison</li>
                <li>✓ Evaluate surface roughness, microstructure, and residual stress using profilometry, SEM, and XRD</li>
                <li>✓ Test installed prototypes in real CPU operating conditions with thermal imaging and CFD/FEA modeling</li>
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
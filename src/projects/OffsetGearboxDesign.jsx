// projects/OffsetGearboxDesign.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function OffsetGearboxDesign() {
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
                Mechanical Design
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8 font-['Cormorant_Garamond']">
                Right-Angled
                <br />
                Offset Gearbox
                <br />
                Design
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mb-10 font-light">
                A fully 3D-printed, hand-driven gearbox that turns power through a right
                angle using a straight bevel gear pair and carries an offset output through
                spur gears, achieving a 3:1 reduction within a compact, two-part casing.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "SolidWorks", "CAD", "3D Printing"
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
                September to December 2021
              </div>

            </div>

            {/* RIGHT — HERO IMAGE SPOT */}
            <div className="relative flex justify-center">

              <div className="bg-white p-4 shadow-2xl rotate-[3deg] max-w-md">

                {/* IMAGE SPOT: hero render of the assembled gearbox */}
                <img
                  src="/portfolio/gearbox-casing.png"
                  alt="3D printed right-angled offset gearbox assembly"
                  className="w-full h-[420px] object-contain"
                />

                <p className="text-center mt-4 text-sm tracking-wide text-gray-700">
                  Assembled right-angled offset gearbox
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
                Designed and 3D printed a right-angled gearbox that transmits hand-driven
                input through a 90° turn while offsetting the output axis. A straight bevel
                gear pair handles the right-angle transmission and the required reduction,
                while spur gears carry the motion across to the offset output, all packaged
                inside a two-part pinned casing built for fast, reliable printing.
              </p>

              <div className="grid lg:grid-cols-2 gap-12">

                <div>

                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                    Key Features
                  </h3>

                  <ul className="space-y-4 text-gray-700 leading-relaxed">
                    <li>✓ Right-angle transmission via a straight bevel gear pair</li>
                    <li>✓ 3:1 reduction achieved in a single gear pair (36T / 12T)</li>
                    <li>✓ Offset output transmitted through spur gears</li>
                    <li>✓ Hexagonal shafts to eliminate gear slip</li>
                    <li>✓ Two-part casing joined with printed corner pins</li>
                  </ul>

                </div>

                <div>

                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                    Design Highlights
                  </h3>

                  <ul className="space-y-4 text-gray-700 leading-relaxed">
                    <li>✓ Cutouts in gears and casing to reduce print time and material</li>
                    <li>✓ Integrated bushings with adapters for smooth shaft rotation</li>
                    <li>✓ Lipped bushings at input and output to handle thrust loads</li>
                    <li>✓ Fillets and multiple pins to strengthen casing joints</li>
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
                The goal was to design a gearbox that redirects an input shaft through a
                right angle while achieving a{" "}
                <strong className="text-[#18342E]">3:1 reduction</strong>, with a bonus
                objective of offsetting the output axis away from the input. Because the
                gearbox is rotated by hand, it operates at low speed and torque, which
                shaped many of the design choices toward simplicity and printability.
              </p>

              <p>
                Straight bevel gears were chosen for the right-angle transmission, as their
                conical shape makes them the simplest way to turn power through 90° using
                gears. To achieve the offset, two spur gears were added, a practical choice
                given the low-speed, hand-driven application.
              </p>

            </div>

          </section>

          {/* POWER FLOW */}
          <section>
            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Drivetrain
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Power Flow
              </h2>

            </div>
            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-14">
              <p>
                Power enters at the input shaft, turns through a right angle and is reduced
                3:1 at the bevel pair, then is carried across to the offset output shaft
                through the spur gears.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 text-center">
              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Input Shaft
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Hand-Driven Rotation
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Bevel Pinion
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  12 Teeth • 90° Turn
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Bevel Gear
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  36 Teeth • 3:1 Reduction
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Spur Gears
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Idler • Offset Transfer
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Output Shaft
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Offset Axis Output
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

              {/* GEAR SELECTION */}
              <div>

                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-6">
                  1. Gear Selection & Reduction Ratio
                </h3>

                <div className="space-y-6 text-lg leading-relaxed text-gray-700 mb-8">

                  <p>
                    The required 3:1 reduction was achieved directly between the bevel gear
                    and the bevel pinion, with 36 and 12 teeth respectively. Because the
                    ratio was not too large, it could be realized in a single gear pair,
                    which simplified support and produced better meshing given the
                    orientation of the gearbox.
                  </p>

                  <p>
                    The larger bevel gear needed to reach this ratio forced the use of
                    larger idler spur gears to avoid contact between the output shaft and
                    the bevel gear. This increased print time, since both the spur gears
                    and the casing had to grow to accommodate the larger size. The added
                    cost was mitigated by adding cutouts to the gears and casing.
                  </p>

                </div>

                <div className="bg-white p-3 shadow-lg">
                  <img
                    src="/portfolio/gearbox-geartrain.png"
                    alt="Gear train showing input and output axes of rotation"
                    className="w-full h-[420px] object-contain"
                  />
                  <p className="text-center mt-3 text-sm tracking-wide text-gray-700">
                    Gear train showing input and output axes of rotation.
                  </p>
                </div>

              </div>

              {/* SHAFT DESIGN */}
              <div>

                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-6">
                  2. Shaft Design
                </h3>

                <div className="space-y-6 text-lg leading-relaxed text-gray-700 mb-8">

                  <p>
                    A cylindrical shaft was rejected over concerns about the effectiveness
                    of the press fit, if the shaft were too small for the gears, the gear
                    would slip rather than rotate with the shaft. Hexagonal shafts were
                    chosen instead, since their flat edges resist slipping.
                  </p>

                  <p>
                    The trade-off was that extra shaft adapters had to be printed to let the
                    hexagonal shafts rotate within the bushings, adding to print time. As
                    shown in Figure 2 (highlighted in pink, left), these adapters enable
                    smooth rotational motion of the shaft.
                  </p>

                </div>

                <div className="bg-white p-3 shadow-lg">
                  <img
                    src="/portfolio/gearbox-shaft-support.png"
                    alt="Shaft adapters and gear support elements, with thrust lip on input and output bushings"
                    className="w-full h-[420px] object-contain"
                  />
                  <p className="text-center mt-3 text-sm tracking-wide text-gray-700">
                    Shaft and gear support elements.
                  </p>
                </div>

              </div>

              {/* SUPPORTING ELEMENTS */}
              <div>

                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-6">
                  3. Supporting Elements
                </h3>

                <div className="space-y-6 text-lg leading-relaxed text-gray-700">

                  <p>
                    Bushings were built directly into the casing for support. Together with
                    the adapters, they sit on either side of most gears to keep the shafts
                    located and rotating smoothly (Figure 2, left).
                  </p>

                  <p>
                    At the input and output, a lip was added to the bushing to support
                    thrust forces along the shaft axis (Figure 2, right), preventing the
                    shafts from walking out of position under load.
                  </p>

                </div>

              </div>

              {/* CASING DESIGN */}
              <div>

                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-6">
                  4. Casing Design
                </h3>

                <div className="space-y-6 text-lg leading-relaxed text-gray-700 mb-8">

                  <p>
                    The casing was split into two parts that join at their four corners
                    using pins (Figure 3). Limiting the casing to two parts reduces the
                    number of joining components, which both decreases print time and
                    removes potential failure points at the joints.
                  </p>

                  <p>
                    Pins were selected for their simplicity and small size, making them easy
                    to connect at the corners. Using multiple pins increases the rigidity of
                    the assembled casing.
                  </p>

                  <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-6">
                    <p className="text-sm uppercase tracking-[0.15em] text-[#2A5C52] mb-3">
                      Design Trade-off
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      The two-part casing required the pins to be printed vertically, which
                      introduces a weakness along the layer boundary that could lead to
                      breakage. This was minimized by adding fillets to the pins and using
                      multiple joining points to distribute the load.
                    </p>
                  </div>

                </div>

                <div className="bg-white p-3 shadow-lg">
                  <img
                    src="/portfolio/gearbox-casing.png"
                    alt="Two-part gearbox casing joined with corner pins"
                    className="w-full h-[420px] object-contain"
                  />
                  <p className="text-center mt-3 text-sm tracking-wide text-gray-700">
                    Gearbox casing.
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
                The final gearbox met its core objectives: turning hand-driven input through
                a right angle, achieving the target 3:1 reduction in a single bevel pair,
                and offsetting the output axis through spur gears, all within a compact,
                pin-joined two-part casing.
              </p>

              <div className="grid md:grid-cols-2 gap-8">

                <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-8">
                  <h4 className="text-xl font-['Cormorant_Garamond'] text-[#18342E] mb-3">
                    Transmission
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    The straight bevel pair delivered the right-angle turn and the full 3:1
                    reduction in a single stage, with the orientation chosen for reliable
                    meshing and support.
                  </p>
                </div>

                <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-8">
                  <h4 className="text-xl font-['Cormorant_Garamond'] text-[#18342E] mb-3">
                    Manufacturability
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Hexagonal shafts, integrated bushings, and a two-part pinned casing kept
                    the design simple to assemble, while cutouts trimmed print time and
                    material on the larger components.
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
                <li>✓ Strengthen the corner pins by printing them horizontally or using a tougher joint to remove the layer-boundary weakness</li>
                <li>✓ Further reduce print time and material with additional gear and casing cutouts</li>
                <li>✓ Refine bushing and adapter tolerances to reduce friction and play</li>
                <li>✓ Explore a more compact layout to shrink the casing footprint around the larger bevel gear</li>
                <li>✓ Add bearings in place of plain bushings for smoother, longer-lasting rotation under higher loads</li>
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
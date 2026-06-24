// projects/CNCMillingProject.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

// Renders an image once a file exists at `src`; until then it shows a
// labeled placeholder so the layout stays clean. Drop renders into
// /public/portfolio/ using the paths below and they appear automatically.
function PhotoSpot({ src, alt, caption, ratio = "aspect-[4/3]" }) {
  const [loaded, setLoaded] = React.useState(true);

  return (
    <figure>
      <div className={`relative ${ratio} bg-[#EFEAE0] border border-[#D9D3C7] shadow-lg overflow-hidden`}>
        {loaded ? (
          <img
            src={src}
            alt={alt}
            onError={() => setLoaded(false)}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <span className="text-3xl text-[#2A5C52] mb-3 leading-none">+</span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-gray-500">{alt}</span>
            <span className="text-[10px] tracking-wide text-gray-400 mt-2 break-all">{src}</span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="text-center mt-3 text-sm text-gray-600">{caption}</figcaption>
      )}
    </figure>
  );
}

export default function CNCMillingProject() {
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

  const specs = [
    { label: "Motion axes", value: "4  (X · Y · Z + bed)" },
    { label: "Work envelope", value: "< 1 m³" },
    { label: "Spindle speed", value: "9,000–24,000 RPM" },
    { label: "Sound level", value: "< 85 dB" },
    { label: "Tool capacity", value: "6-slot rotary ATC" },
    { label: "Estimated cost", value: "~$6,200 USD" },
  ];

  const decisions = [
    {
      part: "Linear axes",
      choice: "Ball screw",
      over: "Rack & pinion, lead screw",
      why: "Near-zero backlash and friction for the highest positioning precision, the design's top priority, which justified the higher cost.",
    },
    {
      part: "Linear guides",
      choice: "Guide rods",
      over: "Guide rails",
      why: "The ball screws already carry the precision, so rods kept cost down without compromising overall accuracy.",
    },
    {
      part: "Rotational support",
      choice: "Ball bearings",
      over: "Roller bearings",
      why: "Cheaper and sufficient for the mostly-radial loads; the lower axial tolerance was handled by press-fitting.",
    },
    {
      part: "Drive motors",
      choice: "Stepper motors",
      over: "Servo motors",
      why: "Ample torque and speed for desktop milling, while being more compact and lower cost than servos.",
    },
    {
      part: "Motor coupling",
      choice: "Keyed shaft",
      over: "Beam coupling",
      why: "The large motor-to-screw size mismatch would have forced costly custom couplings, so a keyed connection was used instead.",
    },
    {
      part: "4th-axis drive",
      choice: "Worm gear",
      over: "Rack & pinion, bevel gears",
      why: "Low backlash, high reduction (up to 100:1), and compact. Being non-back-drivable, it also doubles as the bed's locking mechanism.",
    },
    {
      part: "Tool changer",
      choice: "Geneva-driven rotary carrier",
      over: "Linear tool rack",
      why: "Indexes in fixed steps to a single pickup point, fitting more tools (up to 8 vs 3) within a tight length budget.",
    },
    {
      part: "Spindle interface",
      choice: "Steep taper + collet",
      over: "HSK-A, Coromant Capto®",
      why: "Met the torque and auto-tool-change needs at roughly $250, versus $650–$1,000 for the alternatives.",
    },
    {
      part: "Coolant / filtration",
      choice: "Omitted, user-ready casing",
      over: "Flood cooling + filtration",
      why: "Integration hurt the efficiency of other mechanisms; the casing is instead built so a user can add their own system.",
    },
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
                Machine Design
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8 font-['Cormorant_Garamond']">
                Desktop
                <br />
                CNC Milling
                <br />
                Machine Design
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mb-10 font-light">
                A team design of a professional desktop CNC mill, combining
                interconnected ball-screw linear axes with a worm-gear-driven
                rotating bed, an automatic tool changer, and an enclosed safety
                casing, developed through systematic mechanism trade studies and
                modeled in SolidWorks.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "Mechanical Design", "Mechanism Selection", "CAD / SolidWorks"
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

            {/* RIGHT */}
            <div className="relative flex justify-center">

              <div className="bg-white p-4 shadow-2xl rotate-[3deg] max-w-md">

                <img
                  src="/portfolio/cnc-milling-render.png"
                  alt="SolidWorks render of the desktop CNC milling machine"
                  className="w-full h-[420px] object-contain"
                />

                <p className="text-center mt-4 text-sm tracking-wide text-gray-700">
                  Final design — isometric SolidWorks render
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
                As a team of four, we designed a professional desktop CNC milling
                machine for medium-sized firms needing on-site rapid prototyping,
                a 4-axis mill modeled in SolidWorks, with every mechanism chosen
                through a structured trade study weighing precision against cost
                and size.
              </p>

              <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <li>✓ Specified a 4-axis architecture (interconnected X/Y/Z ball-screw axes plus a worm-gear bed rotating ±10°) that adds a rotational degree of freedom without much added complexity</li>
                <li>✓ Selected each subsystem (drives, guides, bearings, coupling, tool changer, spindle) through documented trade studies against precision, cost, and footprint</li>
                <li>✓ Reached an estimated build cost of roughly $6,200, under a third of the $20,000 budget, by standardizing on off-the-shelf McMaster-Carr parts</li>
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
                The brief was to design a "professional" desktop CNC mill:
                capable enough for entry-level professional use in a medium-sized
                firm doing on-site rapid prototyping, yet compact and affordable
                enough to run in a small shop or office. That framing set hard
                constraints: a sub-1 m³ envelope, a 9,000–24,000 RPM spindle,
                operation under 85 dB, OSHA-compliant guarding, metal cutting in
                at least three dimensions, and a total cost under $20,000.
              </p>

              <p>
                Working from four candidate concepts that traded off axis layout
                against feature complexity, we converged on a hybrid of the
                simplest and most capable designs: a 4-axis machine with
                interconnected linear axes and a rotating cutting bed. From there,
                the bulk of the work was selecting and justifying each individual
                mechanism.
              </p>

            </div>

          </section>

          {/* FINAL DESIGN */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Final Design
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Machine Overview
              </h2>

            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-12">

              <p>
                The spindle moves through three interconnected linear axes, each a
                ball-screw assembly driven by its own stepper motor and guided by
                cylindrical rods, with ball bearings providing rotational support.
                The cutting bed adds the fourth axis: a stepper-driven worm gear
                rotates it about the X-axis, with the worm's self-locking nature
                holding the bed in place. Tool changes are handled by a Geneva
                mechanism that indexes a rotary carrier to a fixed pickup point,
                where a drawbar-and-collet system in the steep-taper spindle
                releases and clamps each tool.
              </p>

            </div>

            {/* RENDERS */}
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mb-12">
              <PhotoSpot
                src="/portfolio/cnc-isometric.png"
                alt="Isometric render"
                caption="Isometric view of the final design"
              />
              <PhotoSpot
                src="/portfolio/cnc-back-view.png"
                alt="Back view render"
                caption="Back view: rotating bed and worm-gear drive"
              />
            </div>

            {/* SPEC GRID */}
            <div className="bg-white border border-[#D9D3C7] shadow-lg p-8 max-w-4xl">

              <p className="uppercase tracking-[0.2em] text-xs text-[#2A5C52] mb-6">
                Design Specifications
              </p>

              <dl className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
                {specs.map((s, idx) => (
                  <div key={idx} className="flex justify-between border-b border-[#E4DECF] pb-2">
                    <dt className="text-gray-600">{s.label}</dt>
                    <dd className="text-[#18342E] font-medium">{s.value}</dd>
                  </div>
                ))}
              </dl>

            </div>

          </section>

          {/* KEY DECISIONS */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Methods
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Key Engineering Decisions
              </h2>

            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-12">
              <p>
                Almost every subsystem was the outcome of a trade study: a set of
                candidate mechanisms scored against precision, cost, customizability,
                and footprint. The table below captures what was chosen and why.
              </p>
            </div>

            <div className="border border-[#D9D3C7] bg-white shadow-lg divide-y divide-[#E4DECF] max-w-4xl">
              {decisions.map((d, idx) => (
                <div key={idx} className="grid md:grid-cols-[210px_1fr] gap-2 md:gap-8 p-6 lg:p-7">
                  <div>
                    <p className="font-['Cormorant_Garamond'] text-xl text-[#18342E] leading-tight">
                      {d.part}
                    </p>
                    <p className="text-sm text-[#2A5C52] mt-1 font-medium">
                      {d.choice}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed">{d.why}</p>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-gray-400 mt-3">
                      Chosen over {d.over}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* FEATURED CALLOUTS */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mt-10">

              <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-8">
                <p className="font-['Cormorant_Garamond'] text-4xl text-[#18342E]">
                  up to 100:1
                </p>
                <p className="text-sm text-[#2A5C52] uppercase tracking-[0.14em] mt-1 mb-4">
                  Worm-gear reduction
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The worm gear gives fine, accurate control over the bed's ±10°
                  rotation in a confined space, and because it cannot be back-driven,
                  it locks the bed in position without a separate brake.
                </p>
              </div>

              <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-8">
                <p className="font-['Cormorant_Garamond'] text-4xl text-[#18342E]">
                  8 tools · ⌀ 280 mm
                </p>
                <p className="text-sm text-[#2A5C52] uppercase tracking-[0.14em] mt-1 mb-4">
                  Geneva rotary tool changer
                </p>
                <p className="text-gray-700 leading-relaxed">
                  A 140 mm-radius carrier holds far more tools than a linear rack
                  (8 vs 3) within the same length budget. The Geneva drive converts
                  continuous motor rotation into precise, repeatable indexing steps
                  so each tool returns to the same pickup coordinate.
                </p>
              </div>

            </div>

            {/* SUBSYSTEM RENDERS */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mt-10">
              <PhotoSpot
                src="/portfolio/cnc-linear-axes.png"
                alt="Linear axes render"
                caption="Ball-screw linear axes"
                ratio="aspect-square"
              />
              <PhotoSpot
                src="/portfolio/cnc-worm-gear.png"
                alt="Worm gear render"
                caption="Worm-gear 4th axis"
                ratio="aspect-square"
              />
              <PhotoSpot
                src="/portfolio/cnc-tool-changer.png"
                alt="Tool changer render"
                caption="Geneva tool changer"
                ratio="aspect-square"
              />
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

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-12">
              <p>
                Standardized parts were priced from McMaster-Carr; custom aluminum
                components were estimated from volume, material, and comparable
                market parts. The resulting build came in well under the project's
                cost ceiling.
              </p>
            </div>

            <div className="bg-white border border-[#D9D3C7] shadow-lg p-8 lg:p-10 max-w-4xl">

              <p className="uppercase tracking-[0.2em] text-xs text-[#2A5C52] mb-7">
                Estimated Cost vs. Budget
              </p>

              <div className="space-y-5">

                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Project budget ceiling</span>
                    <span className="text-[#18342E] font-medium">$20,000</span>
                  </div>
                  <div className="h-7 bg-[#EFEAE0] border border-[#D9D3C7]">
                    <div className="h-full bg-[#18342E]" style={{ width: '100%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Estimated build cost</span>
                    <span className="text-[#18342E] font-medium">$6,184</span>
                  </div>
                  <div className="h-7 bg-[#EFEAE0] border border-[#D9D3C7]">
                    <div className="h-full bg-[#2A5C52]" style={{ width: '31%' }} />
                  </div>
                </div>

              </div>

              <p className="text-sm text-gray-600 mt-6">
                Roughly 31% of the budget, leaning on standardized parts for the
                complex ball-screw and spindle assemblies.
              </p>

            </div>

          </section>

          {/* STRENGTHS & LIMITATIONS */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Reflection
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Strengths & Limitations
              </h2>

            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">

              <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-8">
                <h4 className="text-xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                  Strengths
                </h4>
                <ul className="space-y-4 text-gray-700 leading-relaxed">
                  <li>✓ High linear precision from the interconnected ball-screw axes</li>
                  <li>✓ 4-axis capability achieved with relatively low mechanical complexity</li>
                  <li>✓ Reliable automatic tool changing from the steep-taper, collet, and Geneva-carrier pairing</li>
                </ul>
              </div>

              <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-8">
                <h4 className="text-xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                  Limitations
                </h4>
                <ul className="space-y-4 text-gray-700 leading-relaxed">
                  <li>• Bulky ball-nut mounts and supports add mass that can affect rigidity and precision</li>
                  <li>• The keyed motor-to-screw coupling leaves some room for angular misalignment</li>
                  <li>• The footprint, while within spec, has room to shrink for better space efficiency</li>
                </ul>
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
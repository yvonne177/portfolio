import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

// Renders an image once a file exists at `src`; until then it shows a labeled
// placeholder (a +, the slot label, and the expected file path) so the layout
// stays clean. Drop exported report figures into /public/portfolio/ using the
// paths below and they appear automatically. `ratio` controls placeholder
// height only (e.g. aspect-[4/3], aspect-square, aspect-[3/4]); a loaded image
// sizes itself via h-auto so nothing gets cropped.
function PhotoSpot({ src, alt, caption, ratio = "aspect-[4/3]" }) {
  const [loaded, setLoaded] = React.useState(true);

  return (
    <figure>
      {loaded ? (
        <div className="bg-[#EFEAE0] border border-[#D9D3C7] shadow-lg overflow-hidden">
          <img
            src={src}
            alt={alt}
            onError={() => setLoaded(false)}
            className="block w-full h-auto"
          />
        </div>
      ) : (
        <div className={`relative w-full ${ratio} bg-[#EFEAE0] border border-[#D9D3C7] shadow-lg overflow-hidden`}>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <div className="text-4xl text-[#2A5C52] mb-3">+</div>
            <div className="text-sm uppercase tracking-[0.15em] text-[#18342E] mb-1">{alt}</div>
            <div className="text-xs text-gray-500 font-mono break-all">{src}</div>
          </div>
        </div>
      )}
      {caption && (
        <figcaption className="text-sm text-gray-500 mt-3 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function AutomatedChairCasterAssembly() {
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
                Workcell Design • Process Planning • Automation
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8 font-['Cormorant_Garamond']">
                Automated
                <br />
                Chair Caster
                <br />
                Assembly System
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mb-10 font-light">
                A fully automated, mass-production workcell for assembling 2-inch chair
                casters, covering sorting, orientation, positioner design, fixturing, and
                quality control end to end.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["Manufacturing", "Cost Analysis"].map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] uppercase tracking-[0.18em] border border-white/30 text-blue-100 px-4 py-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="text-blue-100 text-lg">
                <span className="font-semibold text-white">Project Duration:</span>{" "}
                September to December 2023
              </div>

            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">
              <div className="bg-white p-4 shadow-2xl rotate-[3deg] max-w-md">
                <div className="bg-gray-100 flex items-center justify-center">
                  <img
                    src="/portfolio/caster-hero.png"
                    alt="Assembled 2-inch chair caster"
                    className="w-full h-[420px] object-contain"
                  />
                </div>

                <p className="text-center mt-4 text-sm tracking-wide text-gray-700">
                  Fully assembled 2-inch chair caster
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
                We designed a pallet conveyor system for the fully automated, mass-production
                assembly of a 2-inch chair caster, with no modification permitted to the part
                design itself. The system uses three non-vibratory bowls, four vibratory
                bowls, and seven positioners with two to three degrees of freedom each, along
                with supporting cameras, fixtures, AGVs, and sensors. The process was optimized
                to minimize cost while holding the consistency and throughput required of a
                mass-produced product.
              </p>

              <div className="grid lg:grid-cols-2 gap-12">

                <div>
                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                    Key Design Decisions
                  </h3>
                  <ul className="space-y-4 text-gray-700 leading-relaxed">
                    <li>✓ Vibratory bowl sorting for the housing, bolt, and wheels; non-vibratory sorting for symmetrical parts</li>
                    <li>✓ Four-section pallet conveyor layout, each producing a subassembly (Compound A through D)</li>
                    <li>✓ Track-flipping stations to reorient subassemblies between sections</li>
                    <li>✓ Motion-sensor and gate-based process control to prevent part crowding</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                    Takeaways
                  </h3>
                  <ul className="space-y-4 text-gray-700 leading-relaxed">
                    <li>✓ Total estimated system cost of $77,500 to $265,000</li>
                    <li>✓ Final positioner performs both quality testing and packaging</li>
                    <li>✓ Failed parts are identified by roll testing and removed before packaging</li>
                    <li>✓ Combining the bolt, washer, nut, and housing into one part would remove an entire section of the line</li>
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
                Context & Constraints
              </h2>
            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                The brief was to design the automatic assembly process for a 2-inch chair
                caster made up of six parts: a housing, two wheel orientations, an axel, a
                bolt, a washer, and a nut. The entire process had to be fully automated, and no
                part of the chair caster could be modified to simplify assembly. Suggestions
                for redesigning the part itself were instead reserved for future iterations.
              </p>
              <p>
                Given these constraints, the workcell layout and process plan were driven by
                minimizing cost while maintaining the consistency and speed required of a
                mass-produced product. Space was assumed not to be a limiting factor.
              </p>
            </div>

            {/* Figure 1 — exploded view of the six caster parts */}
            <div className="max-w-3xl mt-12">
              <PhotoSpot
                src="/portfolio/caster-parts.png" {/* Fig 1 */}
                alt="Chair Caster Parts"
                caption="The six parts of the 2-inch chair caster: housing, two wheels, axel, bolt, washer, and nut."
                ratio="aspect-[3/2]"
              />
            </div>

          </section>

          {/* WORKCELL LAYOUT & PROCESS PLAN */}
          <section>

            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Layout</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Workcell Layout & Process Plan
              </h2>
            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-14">
              <p>
                Unsorted parts are transported from supply trucks to their sorting systems by
                AGVs. The assembly line is then divided into four sections, each producing one
                subassembly before being combined into the final part.
              </p>
            </div>

            {/* Figure 2 — annotated workcell layout */}
            <div className="mb-16">
              <PhotoSpot
                src="/portfolio/caster-workcell.png" {/* Fig 2 */}
                alt="Workcell Layout"
                caption="Workcell layout with the four assembly sections marked. Blue circles are sorting bowls, green tracks are flip stations, red boxes are positioners."
                ratio="aspect-[16/9]"
              />
            </div>

            {/* Process flow */}
            <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 text-center mb-14">

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Compound A
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Bolt + Washer + Nut
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Compound B
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  + Housing
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Compound C
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Wheel 2A + Axel
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Compound D
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  B + C Combined
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Final Part
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  + Wheel 2B, QC, Pack
                </p>
              </div>

            </div>

            <div className="grid lg:grid-cols-2 gap-10">

              <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-8">
                <h3 className="text-xl font-['Cormorant_Garamond'] text-[#18342E] mb-3">
                  Section 1: Compound A
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The bolt track is flipped so the head faces downward. A positioner places
                  the washer on the bolt, where gravity holds it in place while a second
                  positioner screws on the nut. The subassembly is then flipped again so the
                  bolt head faces upward.
                </p>
              </div>

              <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-8">
                <h3 className="text-xl font-['Cormorant_Garamond'] text-[#18342E] mb-3">
                  Section 2: Compound B
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  On a separate conveyor, the housing reaches a positioner that picks up
                  Compound A and screws it into the housing. Further down the line, another
                  positioner flips this subassembly on its side onto Compound C.
                </p>
              </div>

              <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-8">
                <h3 className="text-xl font-['Cormorant_Garamond'] text-[#18342E] mb-3">
                  Section 3: Compound C
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Wheel 2A moves down its own conveyor, where a positioner press-fits the axel
                  into it. It continues into Section 4, where Compound B is flipped on top of
                  it to form Compound D.
                </p>
              </div>

              <div className="bg-[#EFEAE0] border border-[#D9D3C7] p-8">
                <h3 className="text-xl font-['Cormorant_Garamond'] text-[#18342E] mb-3">
                  Section 4: Compound D & Final Part
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A positioner press-fits wheel 2B onto Compound D, completing the caster. At
                  the end of the conveyor, a final positioner performs quality testing and
                  packages units that pass onto pallets for AGV transport to storage.
                </p>
              </div>

            </div>

          </section>

          {/* SORTING / ORIENTATION / FEEDING */}
          <section>

            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Feeding</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Sorting, Orientation & Feeding
              </h2>
            </div>

            <div className="max-w-4xl text-lg leading-relaxed text-gray-700 mb-12">
              <p>
                Sorting begins once AGVs deposit each part into the hopper of its respective
                sorting bowl. Asymmetric parts are sorted with vibratory bowls and mechanical
                rejection features; symmetrical parts use slower, quieter non-vibratory
                bowls to reduce jamming.
              </p>
            </div>

            <div className="space-y-12">

              <div className="grid lg:grid-cols-[0.3fr_1.7fr] gap-6 items-start">
                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E]">
                  Housing
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A vibratory bowl rejects all components lying perpendicular to the bowl
                  walls. Because the knob where the bolt assembly is inserted is taller than
                  the rest of the housing, a gate near the end of the feed isolates a single
                  housing, and a knob protruding from the wall pushes back any unit in the
                  wrong orientation, leaving only correctly oriented housings to pass through.
                </p>
              </div>

              <div className="grid lg:grid-cols-[0.3fr_1.7fr] gap-6 items-start">
                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E]">
                  Wheels (2A / 2B)
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Two wheel orientations are sorted in separate vibratory bowls. For 2A, a
                  wiper blade removes all upward-standing orientations, and a scallop rejects
                  any wheel whose central axis is not facing upward. For 2B, the process is
                  nearly identical, but a sorting wheel picks the components off the track
                  after the scallop stage and reorients them to the opposite orientation.
                </p>
              </div>

              <div className="grid lg:grid-cols-[0.3fr_1.7fr] gap-6 items-start">
                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E]">
                  Bolts
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Bolts are sorted in a vibratory bowl so the head faces upward. Two
                  orientations are acceptable since both can be corrected at the final
                  attachment step. A wiper blade and blockage wall reject any bolt standing
                  vertically or perpendicular to the bowl wall.
                </p>
              </div>

              <div className="grid lg:grid-cols-[0.3fr_1.7fr] gap-6 items-start">
                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E]">
                  Washer, Nut & Axel
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  These parts are fully symmetrical and are sorted using non-vibratory bowls.
                  Reciprocating mechanisms pick up each component and place it directly on the
                  feeder track, which reduces sorting noise and the chance of jamming compared
                  to vibratory feeding.
                </p>
              </div>

            </div>

            {/* Figures 4-6 — vibratory feeding diagrams */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
              <PhotoSpot
                src="/portfolio/caster-housing-feed.png" {/* Fig 4 */}
                alt="Housing Feeding"
                caption="Top view of vibratory feeding for the housing."
              />
              <PhotoSpot
                src="/portfolio/caster-wheel-feed.png" {/* Fig 5 */}
                alt="Wheel 2A Feeding"
                caption="Vibratory feeding and orientation of the 2A wheels."
              />
              <PhotoSpot
                src="/portfolio/caster-bolt-feed.png" {/* Fig 6 */}
                alt="Bolt Feeding"
                caption="Vibratory feeding of the bolts."
              />
            </div>

          </section>

          {/* PROCESS & QUALITY CONTROL */}
          <section>

            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Controls</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Process & Quality Control
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">

              <div>
                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                  Process Control
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Motion sensors at each positioner detect when a component has arrived,
                  triggering the pallet to raise for assembly and lower once work is complete.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  For parts fed from a vibratory bowl, gates work alongside motion sensors:
                  the sensor detects when a part leaves a positioner and signals the gate to
                  release the next component, preventing crowding on the approach track.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                  Quality Control
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Cameras inspect subassemblies at intermediate steps along the line. Final
                  testing is performed by the positioner stationed at the end of Section 4,
                  which applies vertical and rolling forces to the assembled caster while
                  sensors check that it remains intact.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Units that pass are placed directly into shipping boxes by the same
                  positioner; units that fail are disposed of before reaching packaging.
                </p>
              </div>

            </div>

          </section>

          {/* POSITIONERS */}
          <section>

            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Robotics</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Positioners & Degrees of Freedom
              </h2>
            </div>

            <div className="max-w-4xl text-lg leading-relaxed text-gray-700 mb-10">
              <p>
                Seven positioners carry out the assembly: three install the bolt, washer, and
                nut into the housing; three attach the wheels and axel; and one performs
                quality testing and packaging.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-700 border border-[#D9D3C7]">
                <thead>
                  <tr className="bg-[#EFEAE0] text-[#18342E] uppercase tracking-[0.1em] text-xs">
                    <th className="px-6 py-4 text-left border-b border-[#D9D3C7]">Task</th>
                    <th className="px-6 py-4 text-left border-b border-[#D9D3C7]">DOF</th>
                    <th className="px-6 py-4 text-left border-b border-[#D9D3C7]">Motion</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Place washer on bolt", "2", "Z-axis to pick up, X-axis to place"],
                    ["Screw on nut", "3", "Z-axis, X-axis, plus rotation to screw"],
                    ["Screw Compound A into housing", "3", "Z-axis, X-axis, plus rotation to screw"],
                    ["Flip housing assembly onto wheel 2A", "3", "Z-axis to pick up, two rotation axes to flip and swivel"],
                    ["Place wheel 2A / 2B onto assembly", "2", "Z-axis to pick up, X-axis to place (one positioner per wheel)"],
                    ["Quality test and package", "2", "Z-axis to roll, X-axis to push into box"],
                  ].map(([task, dof, motion], idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#F9F7F3]"}>
                      <td className="px-6 py-4 border-b border-[#D9D3C7] font-medium">{task}</td>
                      <td className="px-6 py-4 border-b border-[#D9D3C7]">{dof}</td>
                      <td className="px-6 py-4 border-b border-[#D9D3C7]">{motion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Figures 7 & Appendix — representative positioner configurations */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12 max-w-3xl">
              <PhotoSpot
                src="/portfolio/caster-positioner-2dof.png" {/* Fig 7 */}
                alt="2-DOF Positioner"
                caption="Two-DOF positioner that lowers along Z to pick up the washer and reaches along X to place it."
                ratio="aspect-[3/4]"
              />
              <PhotoSpot
                src="/portfolio/caster-positioner-3dof.png" {/* Fig 8 */}
                alt="3-DOF Positioner"
                caption="Three-DOF positioner with an added rotation axis for the nut and Compound A screwing steps."
                ratio="aspect-[3/4]"
              />
            </div>

          </section>

          {/* FIXTURES & GRIPPERS */}
          <section>

            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Tooling</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Fixtures & Grippers
              </h2>
            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Every positioner uses an assembly gripper sized for the part it handles. For
                smaller parts like the washer and nut, finger length is reduced to minimize
                deflection and maintain a secure hold without deforming the part, which is
                also supported by keeping gripper weight low.
              </p>
              <p>
                In Section 2, each pallet has a concave indentation roughly three-quarters
                the height of the housing, with locators protruding from the indentation walls
                to keep the housing stable in transit and during the Compound A attachment
                step. In Sections 3 and 4, the pallets carry a wheel-shaped indentation with
                similar locators to hold wheel 2A in place while the axel, housing assembly,
                and second wheel are added. Retractable prongs extend from the conveyor at each
                assembly step to prevent the pallet from overshooting its position.
              </p>
            </div>

            {/* Figures 8-10 — fixture diagrams */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
              <PhotoSpot
                src="/portfolio/caster-housing-fixture.png" {/* Fig 9 */}
                alt="Housing Fixture"
                caption="Housing fixture with locators on the indentation walls."
              />
              <PhotoSpot
                src="/portfolio/caster-assembly-fixture.png" {/* Fig 10 */}
                alt="Final Assembly Fixture"
                caption="Final assembly fixture holding wheel 2A in a wheel-shaped indentation."
              />
              <PhotoSpot
                src="/portfolio/caster-fixture-topview.png" {/* Fig 11 */}
                alt="Assembly Fixture Top View"
                caption="Top view showing the retractable prongs that stop the pallet at each step."
              />
            </div>

          </section>

          {/* COST ANALYSIS */}
          <section>

            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Budget</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Cost Analysis
              </h2>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-gray-700 border border-[#D9D3C7]">
                <thead>
                  <tr className="bg-[#EFEAE0] text-[#18342E] uppercase tracking-[0.1em] text-xs">
                    <th className="px-6 py-4 text-left border-b border-[#D9D3C7]">Component</th>
                    <th className="px-6 py-4 text-left border-b border-[#D9D3C7]">Cost Range ($)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["AGV", "30,000 – 150,000"],
                    ["Vibratory Bowls (x4)", "2,000 – 6,000"],
                    ["Non-Vibratory Bowls (x3)", "~ 2,000"],
                    ["Positioners (x7)", "4,000 – 10,000 (depending on DOF)"],
                    ["Fixtures", "1,500 – 3,000"],
                    ["Cameras", "2,000 – 5,000"],
                    ["Motion Sensors", "2,000 – 7,000"],
                  ].map(([component, cost], idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#F9F7F3]"}>
                      <td className="px-6 py-4 border-b border-[#D9D3C7] font-medium">{component}</td>
                      <td className="px-6 py-4 border-b border-[#D9D3C7]">{cost}</td>
                    </tr>
                  ))}
                  <tr className="bg-[#2A5C52] text-white">
                    <td className="px-6 py-4 font-semibold">Total Cost</td>
                    <td className="px-6 py-4 font-semibold">77,500 – 265,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 text-base leading-relaxed">
              Future redesigns of the chair caster itself could reduce this range further by
              removing entire sorting and assembly sections.
            </p>

          </section>

          {/* REDESIGN SUGGESTIONS */}
          <section>

            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Future Work</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Redesign Suggestions
              </h2>
            </div>

            <div className="space-y-10">

              <div className="grid lg:grid-cols-[0.3fr_1.7fr] gap-6 items-start border-l-4 border-[#2A5C52] pl-6">
                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E]">
                  Combine Bolt, Washer, Nut & Housing
                </h3>
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Merging these four parts into a single asymmetrical housing unit would
                    eliminate Section 1 of the assembly process along with its associated
                    vibratory bowls and positioners, saving on cost, time, and space. Fewer
                    stable orientations would also simplify sorting. The tradeoff is losing the
                    height adjustability that the bolt-and-housing connection currently allows.
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-[0.3fr_1.7fr] gap-6 items-start border-l-4 border-[#2A5C52] pl-6">
                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E]">
                  Combine Axel with One Wheel
                </h3>
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Integrating the axel into one of the wheels would remove Section 3 of the
                    assembly process and make sorting parts 2A and 2B easier, since the wheel
                    with the integrated axel would be visually and geometrically distinct. This
                    would require the axel to be molded from the same plastic as the wheel
                    rather than metal, reducing the load the caster can sustain unless a
                    higher-strength plastic is used.
                  </p>
                </div>
              </div>

            </div>

            {/* Figures 11-12 — redesign concepts */}
            <div className="grid sm:grid-cols-2 gap-6 mt-14">
              <PhotoSpot
                src="/portfolio/caster-housing-redesign.png" {/* Fig 12 */}
                alt="Housing Redesign"
                caption="Housing redesign combining the bolt, washer, nut, and housing into one part."
              />
              <PhotoSpot
                src="/portfolio/caster-wheel-redesign.png" {/* Fig 13 */}
                alt="Wheel Redesign"
                caption="Wheel redesign integrating the axel into a single wheel."
              />
            </div>

          </section>

          {/* CONCLUSION */}
          <section>

            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Summary</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Conclusion
              </h2>
            </div>

            <div className="max-w-4xl text-lg leading-relaxed text-gray-700">
              <p>
                The automated assembly process for the chair caster uses a pallet conveyor
                system with four vibratory bowls, three non-vibratory bowls, and seven
                positioners ranging from two to three degrees of freedom, at an estimated
                total cost of $77,500 to $265,000. Simplifying the bolt and housing connection
                and the wheel and axel connection are the most direct paths to reducing
                assembly complexity and cost in future iterations of the part.
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
  );
}
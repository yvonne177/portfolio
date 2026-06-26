import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

export default function AutonomousBleedingControl() {
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
                Surgical Robotics • Perfused Phantoms • Bleeding Perception
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8 font-['Cormorant_Garamond']">
                Autonomous
                <br />
                Bleeding
                <br />
                Control
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mb-10 font-light">
                A perfused hydrogel kidney phantom platform and vision-based perception pipeline for autonomous bleeding detection in robot-assisted partial nephrectomy.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["Hydrogel Phantoms", "3D-Printed Molds", "Perfusion Systems", "Surgical Simulation"].map((skill, idx) => (
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
                February 2026 – May 2026
              </div>

            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">
              <div className="bg-white p-4 shadow-2xl rotate-[3deg] max-w-md">
                <div className="bg-gray-100 flex items-center justify-center">
                  <img
                    src="/portfolio/lpn-1.jpg"
                    alt="Perfused kidney phantom with embedded tumors"
                    className="w-full h-[420px] object-contain"
                  />
                </div>

                <p className="text-center mt-4 text-sm tracking-wide text-gray-700">
                  Perfused kidney phantom with embedded renal cavity pump
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
                Built a perfused hydrogel phantom platform to simulate intraoperative bleeding during
                robot-assisted partial nephrectomy, then used it to generate training data for a
                two-stage perception pipeline that detects and localizes bleeding sources in real time.
              </p>

              <div className="grid lg:grid-cols-2 gap-12">

                <div>
                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                    Key Features
                  </h3>
                  <ul className="space-y-4 text-gray-700 leading-relaxed">
                    <li>✓ Modular 3D-printed mold for repeatable renal cavity pump fabrication</li>
                    <li>✓ Closed-loop perfusion system mimicking venous pressure dynamics</li>
                    <li>✓ Two patient-specific hydrogel phantoms cast from CT-derived tumor geometry</li>
                    <li>✓ Calibrated synthetic blood mixture matched to real blood color and viscosity</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                    Takeaways
                  </h3>
                  <ul className="space-y-4 text-gray-700 leading-relaxed">
                    <li>✓ Fabricated two working kidney phantoms with embedded silicone pump systems</li>
                    <li>✓ Validated proportional inlet–outlet flow for repeatable bleeding generation</li>
                    <li>✓ Supported a multi-phantom dataset of 83 surgical video sequences</li>
                    <li>✓ Enabled a YOLO + UNet++ pipeline reaching a 0.943 peak-in-mask rate</li>
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
                Partial nephrectomy removes renal tumors while preserving healthy kidney tissue, but the
                kidney's dense vascular structure makes intraoperative bleeding frequent and often
                unavoidable. Even minor bleeding degrades endoscopic visibility within seconds, forcing
                surgeons to repeatedly stop resection for manual suction and irrigation.
              </p>
              <p>
                Current robotic surgical systems offer no autonomous way to detect bleeding or maintain a
                clear field of view. Closing that gap requires two things that did not exist together
                before this project: a physically realistic, repeatable way to generate bleeding for
                training data, and a perception system that can localize it. Our team, working in the
                CIS II practicum at Johns Hopkins under mentorship from the IMERSE lab, built both.
              </p>
            </div>

          </section>

          {/* SYSTEM WORKFLOW */}
          <section>

            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Pipeline</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                System Workflow
              </h2>
            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-14">
              <p>
                The pipeline runs from patient CT data through phantom fabrication, controlled bleeding
                generation, and data collection, into a perception model that localizes bleeding sources
                for downstream robotic suction.
              </p>
            </div>

            {/* Block Diagram */}
            <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 text-center">

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  CT Segmentation
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Patient Anatomy
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Mold & Casting
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  3D-Printed Mold
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Perfused Phantom
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Controlled Bleeding
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Data Collection
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  RGB Video + Annotation
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Perception Pipeline
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  YOLO + UNet++
                </p>
              </div>

            </div>

          </section>

          {/* PHANTOM DEVELOPMENT — MAIN FOCUS */}
          <section>

            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">My Contribution</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Phantom Development
              </h2>
            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-14">
              <p>
                Existing hydrogel kidney phantoms support realistic tumor resection but have no way to
                generate bleeding, which limits their use for hemostasis training and perception research.
                My work extended these phantoms with a perfusion system that simulates localized venous
                bleeding around tumor regions, then carried that design through mold fabrication, casting,
                and validated data collection.
              </p>
            </div>

            <div className="space-y-16">

              {/* 1 */}
              <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 items-start">
                <div className="space-y-4">
                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E]">
                    1. Perfusion System Design
                  </h3>
                  <p className="text-sm uppercase tracking-[0.15em] text-[#2A5C52]">Renal Anatomy-Inspired Flow</p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Designed a closed-loop perfusion system embedded in the hydrogel phantom, with an
                    inlet vein, outlet artery, and an internal cavity analogous to the renal pelvis. The
                    layout enables pressure-driven fluid flow and controlled bleeding release at
                    tumor-adjacent cut sites, reproducing the vascular pressure dynamics that drive
                    bleeding during tumor resection.
                  </p>
                  <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
                    <li>
                      <span className="font-semibold text-[#18342E]">Inlet / outlet pathways:</span>{" "}
                      Mimic vascular pressure dynamics within the kidney while maintaining a closed fluid loop.
                    </li>
                    <li>
                      <span className="font-semibold text-[#18342E]">Renal pelvis cavity:</span>{" "}
                      Provides the internal volume that drives pressure-fed bleeding at the incision site.
                    </li>
                    <li>
                      <span className="font-semibold text-[#18342E]">Clamp simulation:</span>{" "}
                      Flow is proportional between inlet and outlet, requiring on-clamp simulation during operation, the same way a surgeon would clamp the renal artery.
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 shadow-xl">
                  <img src="/portfolio/lpn-2.png" alt="Annotated kidney perfusion design schematic" className="w-full h-[240px] object-contain" />
                  <p className="text-center mt-3 text-xs uppercase tracking-[0.12em] text-gray-500">Inlet vein, outlet artery, and renal pelvis cavity</p>
                </div>
              </div>

              {/* 2 */}
              <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 items-start">
                <div className="space-y-4">
                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E]">
                    2. Mold Design for the Renal Cavity
                  </h3>
                  <p className="text-sm uppercase tracking-[0.15em] text-[#2A5C52]">Modular 3D-Printed Casting</p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Developed a fully 3D-printed, modular mold to repeatably fabricate the silicone pump
                    system inside each phantom. Dragon Skin 20 silicone is poured in from the top, with
                    bottom and lateral outlet holes acting as fill indicators. A positioning peg fixes the
                    core within the mold cavity to keep wall thickness uniform across casts.
                  </p>
                  <div className="bg-[#EFEAE0] border border-[#D9D3C7] px-6 py-4 font-mono text-sm text-[#18342E] space-y-1">
                    <div>Top pour → silicone fills core/cavity gap</div>
                    <div>Bottom + lateral outlets confirm full fill</div>
                    <div>Lateral holes sealed with 3D-printed pins</div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    After demolding, the silicone component is released by cutting a slit at the top of
                    the cavity, then resealed with Sil-Poxy adhesive, formulated specifically for bonding
                    RTV silicone to silicone substrates.
                  </p>
                </div>
                <div className="bg-white p-4 shadow-xl">
                  <img src="/portfolio/lpn-3.png" alt="3D-printed mold for the renal cavity pump system" className="w-full h-[240px] object-contain" />
                  <p className="text-center mt-3 text-xs uppercase tracking-[0.12em] text-gray-500">Mold fill points and positioning peg</p>
                </div>
              </div>

              {/* 3 */}
              <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 items-start">
                <div className="space-y-4">
                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E]">
                    3. Resultant Phantoms
                  </h3>
                  <p className="text-sm uppercase tracking-[0.15em] text-[#2A5C52]">Fabrication & Validation</p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Fabricated two kidney phantoms at the IMERSE lab using the mold system above, with
                    tumor placements accessible from the superior and anterior aspects of the kidney.
                    Each phantom was validated by confirming proportional inlet-outlet flow and comparing
                    the resulting bleeding behavior against intraoperative clinical video for visual
                    realism.
                  </p>
                  <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
                    <li>
                      <span className="font-semibold text-[#18342E]">Flow validation:</span>{" "}
                      Confirmed proportional blood flow between inlet and outlet under clamp conditions.
                    </li>
                    <li>
                      <span className="font-semibold text-[#18342E]">Bleeding realism:</span>{" "}
                      Incisions around the tumor regions produced bleeding patterns comparable to perfused phantom benchmarks and clinical footage.
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 shadow-xl">
                  <img src="/portfolio/lpn-4.jpg" alt="Final two kidney phantoms with embedded pump systems" className="w-full h-[240px] object-contain" />
                  <p className="text-center mt-3 text-xs uppercase tracking-[0.12em] text-gray-500">Two completed kidney phantoms</p>
                </div>
              </div>

              {/* 4 */}
              <div className="space-y-6">
                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E]">
                  4. Blood Calibration & Data Collection
                </h3>
                <p className="text-sm uppercase tracking-[0.15em] text-[#2A5C52]">Training Data Generation</p>

                <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 items-start">
                  <div className="space-y-6">
                    <div>
                      <p className="font-semibold text-[#18342E] mb-2">Synthetic Blood Calibration</p>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Tested ratios of synthetic blood to water to match the color and viscosity of real
                        blood. An 11:10 ratio gave the best match for both visual appearance and fluid
                        dynamics, and was used for all subsequent data collection.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#18342E] mb-2">Data Collection Setup</p>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Connected an Olympus OFP-2 flushing pump to the perfused phantom and recorded RGB
                        video at both local (close, fine-detail) and global (wide, full-distribution)
                        camera views. The setup was extended to three additional custom phantoms with
                        unique tumor geometries, plus manual on-clamp procedures, producing 83 annotated
                        video sequences for model training and testing.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-4 shadow-xl">
                      <img src="/portfolio/lpn-5.png" alt="Blood-to-water ratio calibration test" className="w-full h-[200px] object-contain" />
                      <p className="text-center mt-2 text-xs uppercase tracking-[0.12em] text-gray-500">Blood mixture calibration (11:10)</p>
                    </div>
                    <div className="bg-white p-4 shadow-xl">
                      <img src="/portfolio/lpn-6.jpg" alt="Data collection setup with perfusion pump" className="w-full h-[200px] object-contain" />
                      <p className="text-center mt-2 text-xs uppercase tracking-[0.12em] text-gray-500">Perfused phantom data collection setup</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </section>

          {/* PERCEPTION — KEPT BRIEF */}
          <section>

            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Team Contribution</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Perception Pipeline
              </h2>
            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-10">
              <p>
                The phantom-derived video data fed a two-stage perception pipeline built by the team: a
                YOLO detector proposes candidate bleeding regions in the full endoscopic frame, then a
                UNet++ heatmap model localizes the precise bleeding source within each cropped region.
                Compared against a single-stage U-Net baseline, this approach traded a small amount of
                binary mask overlap for a far more reliable suction target, reaching a 0.943 peak-in-mask
                rate on held-out test data versus 0.762 for the baseline.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-700 border border-[#D9D3C7]">
                <thead>
                  <tr className="bg-[#EFEAE0] text-[#18342E] uppercase tracking-[0.1em] text-xs">
                    <th className="px-6 py-4 text-left border-b border-[#D9D3C7]">Model</th>
                    <th className="px-6 py-4 text-left border-b border-[#D9D3C7]">Output</th>
                    <th className="px-6 py-4 text-left border-b border-[#D9D3C7]">Best Dice</th>
                    <th className="px-6 py-4 text-left border-b border-[#D9D3C7]">Peak-in-Mask</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Baseline U-Net", "Source-only mask", "0.796", "0.762"],
                    ["Dual U-Net", "Region + source", "0.740", "0.804"],
                    ["UNet++ (final)", "Bleeding heatmap", "0.761", "0.943"],
                  ].map(([model, out, dice, peak], idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#F9F7F3]"}>
                      <td className="px-6 py-4 border-b border-[#D9D3C7] font-medium">{model}</td>
                      <td className="px-6 py-4 border-b border-[#D9D3C7]">{out}</td>
                      <td className="px-6 py-4 border-b border-[#D9D3C7]">{dice}</td>
                      <td className="px-6 py-4 border-b border-[#D9D3C7]">{peak}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </section>

          {/* RESULTS */}
          <section>

            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Validation</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Results & Impact
              </h2>
            </div>

            <ul className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <li>
                <span className="font-semibold text-[#18342E]">Repeatable fabrication:</span>{" "}
                The modular mold produced consistent renal cavity geometry across casts while remaining
                adaptable to different tumor placements and phantom sizes.
              </li>
              <li>
                <span className="font-semibold text-[#18342E]">Validated bleeding behavior:</span>{" "}
                Both phantoms maintained proportional inlet–outlet flow under clamp conditions, and
                produced bleeding patterns comparable to clinical footage for the intended use case.
              </li>
              <li>
                <span className="font-semibold text-[#18342E]">Dataset scale:</span>{" "}
                The perfusion and casting work supported a dataset of 83 surgical video sequences across
                one standard phantom and three custom phantoms.
              </li>
              <li>
                <span className="font-semibold text-[#18342E]">Downstream perception performance:</span>{" "}
                Phantom-derived training data enabled the UNet++ stage to reach a 0.943 peak-in-mask rate
                on held-out cross-tumor test data, supporting reliable suction-target generation.
              </li>
            </ul>

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
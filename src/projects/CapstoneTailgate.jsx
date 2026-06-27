// projects/CapstoneTailgate.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CapstoneTailgate() {

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
      window.scrollTo({top:0,behavior:"smooth"});
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
                Mechanical Design • Automotive • Product Engineering
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8 font-['Cormorant_Garamond']">
                Multifunction
                <br />
                Tailgate
                <br />
                System
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mb-10 font-light">
                Designed and prototyped a 2-in-1 multifunction tailgate system for the Ford F-150 to improve truck bed accessibility while maintaining manufacturability, structural integrity, and retrofit compatibility.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                {[
                  "SolidWorks",
                  "ANSYS FEA",
                  "Machine Shop"
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
                <span className="font-semibold text-white">
                  Project Duration:
                </span>{" "}
                September 2024 – May 2025
              </div>

            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">

              <div className="bg-white p-4 shadow-2xl rotate-[3deg] max-w-md">

                <img
                  src="/portfolio/tailgate-prototype-integration.png"
                  alt="Tailgate Prototype"
                  className="w-full h-[420px] object-cover"
                />

                <p className="text-center mt-4 text-sm tracking-wide text-gray-700">
                  Tailgate Prototype Integration
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
                Developed a multifunction truck tailgate system capable of operating in two configurations to improve accessibility to the truck bed while maintaining compatibility with existing Ford F-150 mounting hardware and manufacturing constraints.
              </p>

              <div className="grid lg:grid-cols-2 gap-12">

                <div>

                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                    Key Features
                  </h3>

                  <ul className="space-y-4 text-gray-700 leading-relaxed">

                    <li>✓ Vertical guide rail system enabling lowered tailgate access</li>

                    <li>✓ Constant force spring mechanism to offset tailgate weight</li>

                    <li>✓ Retrofit-compatible integration using existing F-150 mounting points</li>

                    <li>✓ Cable support system preventing excessive loading on guide rails</li>

                  </ul>

                </div>

                <div>

                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                    Engineering Outcomes
                  </h3>

                  <ul className="space-y-4 text-gray-700 leading-relaxed">

                    <li>✓ Full-scale prototype fabricated under CAD $1100 budget</li>

                    <li>✓ FEA validated structural safety with high safety factors</li>

                    <li>✓ Achieved operational functionality in both tailgate configurations</li>

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
                Problem Context
              </h2>

            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700">

              <p>
                Traditional pickup truck tailgates extend horizontally behind the vehicle when opened, limiting direct access to the truck bed and increasing the reach distance required to load or unload cargo. Existing multifunction tailgates on the market improve accessibility but often rely on complex mechanisms that increase manufacturing cost and assembly complexity.
              </p>

              <p>
                This project aimed to develop a mechanically simpler alternative for the Ford F-150 that preserves standard tailgate functionality while introducing a secondary lowered-access configuration. The system was designed around retrofit compatibility, structural integrity, manufacturability, and user accessibility.
              </p>

            </div>

          </section>

          {/* CONCEPT DEVELOPMENT */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Development
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Concept Exploration
              </h2>

            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-14">

              <p>
                Multiple concepts were evaluated during the early design phase, including hinge-folding systems, retractable storage mechanisms, and vertically translating guide rail systems. Each concept was assessed based on manufacturability, simplicity, accessibility improvement, structural performance, and integration with existing F-150 geometry.
              </p>

              <p>
                A weighted decision matrix identified the vertical guide rail approach as the strongest solution due to its relatively low mechanical complexity, ease of retrofit integration, and ability to provide unobstructed access to the truck bed while maintaining standard operation.
              </p>

            </div>

            <div className="grid md:grid-cols-2 gap-8">

              <div className="bg-white p-4 shadow-xl">

                <img
                  src="/portfolio/tailgate-configs.png"
                  alt="Tailgate Concepts"
                  className="w-full h-[320px] object-contain"
                />

              </div>

              <div className="bg-white p-4 shadow-xl">

                <img
                  src="/portfolio/tailgate-cad-configs.png"
                  alt="Tailgate CAD Concepts"
                  className="w-full h-[320px] object-contain"
                />

              </div>

            </div>

          </section>

          {/* SYSTEM */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Architecture
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Mechanical System
              </h2>

            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-14">

              <p>
                The final design integrates guide rails, structural support posts, support cables, and constant force springs to create a multifunction tailgate capable of operating in both standard and lowered-access configurations.
              </p>

            </div>

            {/* System Blocks */}
            <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 text-center">

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">

                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Tailgate
                </h3>

                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Existing F-150
                </p>

              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">
                →
              </span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">

                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Guide Rails
                </h3>

                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Vertical Translation
                </p>

              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">
                →
              </span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">

                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Spring System
                </h3>

                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Weight Compensation
                </p>

              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">
                →
              </span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">

                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Cable Supports
                </h3>

                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Load Transfer
                </p>

              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">
                →
              </span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">

                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Lowered Access
                </h3>

                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Enhanced Accessibility
                </p>

              </div>

            </div>

          </section>

          {/* MECHANICAL DESIGN */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Design
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Mechanical Design
              </h2>

            </div>

            <ul className="space-y-6 text-gray-700 leading-relaxed mb-14 text-lg">

              <li>
                <span className="font-semibold text-[#18342E]">
                  Guide Rail System:
                </span>{" "}
                Telescopic guide rails allow the tailgate to translate vertically beneath the truck bed, reducing reach distance and improving direct access to cargo.
              </li>

              <li>
                <span className="font-semibold text-[#18342E]">
                  Double Post Structure:
                </span>{" "}
                Stainless steel support posts provide structural rigidity while enabling rotational and translational movement between the tailgate and guide rail assembly.
              </li>

              <li>
                <span className="font-semibold text-[#18342E]">
                  Constant Force Springs:
                </span>{" "}
                Spring assemblies counterbalance the tailgate weight to reduce lifting effort and minimize load transfer onto the guide rails during operation.
              </li>

              <li>
                <span className="font-semibold text-[#18342E]">
                  Cable Support Mechanism:
                </span>{" "}
                Support cables preserve traditional horizontal load paths while preventing excessive bending and stress on the vertical guide rail system.
              </li>

            </ul>

            <div className="grid md:grid-cols-2 gap-8">

              {[
                "/portfolio/tailgate-guide-rails.png",
                "/portfolio/tailgate-double-post-system.png",
                "/portfolio/tailgate-constant-force-springs.png",
                "/portfolio/tailgate-sideview-tabs.png"
              ].map((image, idx) => (

                <div
                  key={idx}
                  className="bg-white p-4 shadow-xl"
                >

                  <img
                    src={image}
                    alt=""
                    className="w-full h-[320px] object-contain"
                  />

                </div>

              ))}

            </div>

          </section>

          {/* ANALYSIS */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Validation
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Engineering Analysis
              </h2>

            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-10">

              <p>
                Finite element analysis (FEA) was conducted on critical structural components to validate load-bearing performance, structural rigidity, and operational safety under realistic loading conditions.
              </p>

            </div>

            <ul className="space-y-6 text-gray-700 leading-relaxed mb-14 text-lg">

              <li>
                <span className="font-semibold text-[#18342E]">
                  Guide Rail Analysis:
                </span>{" "}
                Maximum Von Mises stress remained significantly below material yield limits, resulting in a safety factor exceeding 90 under operational loading.
              </li>

              <li>
                <span className="font-semibold text-[#18342E]">
                  Double Post Frame:
                </span>{" "}
                Structural analysis confirmed minimal deformation and high rigidity under combined vertical and rotational loading scenarios.
              </li>

              <li>
                <span className="font-semibold text-[#18342E]">
                  Cable System:
                </span>{" "}
                Support cable loading remained within allowable limits while maintaining minimal deformation in the horizontal tailgate configuration.
              </li>

              <li>
                <span className="font-semibold text-[#18342E]">
                  Spring Assemblies:
                </span>{" "}
                Constant force springs successfully counterbalanced the tailgate weight while maintaining safe stress levels throughout operation.
              </li>

            </ul>

            <div className="grid md:grid-cols-2 gap-8">

              <div className="bg-white p-4 shadow-xl">

                <img
                  src="/portfolio/tailgate-fea-double-post.png"
                  alt="FEA Double Post"
                  className="w-full h-[320px] object-contain"
                />

              </div>

              <div className="bg-white p-4 shadow-xl">

                <img
                  src="/portfolio/tailgate-fea-hinges.png"
                  alt="FEA Hinges"
                  className="w-full h-[320px] object-contain"
                />

              </div>

            </div>

          </section>

          {/* PROTOTYPE */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Prototype
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Fabrication & Testing
              </h2>

            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-14">

              <p>
                A full-scale prototype was fabricated and installed onto a 2015 Ford F-150 to validate manufacturability, integration, motion functionality, and structural performance. The system was designed using commercially available components and required no permanent modifications to the vehicle.
              </p>

              <p>
                Testing confirmed successful operation in both configurations while maintaining accessibility improvements, structural integrity, and compatibility with the truck’s original mounting system.
              </p>

            </div>

            <div className="grid md:grid-cols-2 gap-8">

              <div className="bg-white p-4 shadow-xl">

                <img
                  src="/portfolio/tailgate-prototype-integration.png"
                  alt="Prototype Integration"
                  className="w-full h-[320px] object-contain"
                />

              </div>

              <div className="bg-white p-4 shadow-xl">

                <img
                  src="/portfolio/tailgate-spring-installation.png"
                  alt="Spring Installation"
                  className="w-full h-[320px] object-contain"
                />

              </div>

            </div>

          </section>

          {/* FUTURE WORK */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Reflection
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Future Improvements
              </h2>

            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700">

              <p>
                Future iterations will focus on improving visual integration, reducing system weight, and refining the latching mechanism for smoother operation and easier installation. Additional design refinements may include enclosed guide rail housings, lighter structural members, and automated latch engagement systems integrated into the existing tailgate handle.
              </p>

              <p>
                Overall, the project successfully demonstrated a practical and manufacturable approach to improving truck bed accessibility through a mechanically-driven multifunction tailgate system.
              </p>

            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-14">

              <div className="bg-white p-4 shadow-xl">

                <img
                  src="/portfolio/tailgate-latching-system.png"
                  alt="Latching System"
                  className="w-full h-[320px] object-contain"
                />

              </div>

              <div className="bg-white p-4 shadow-xl">

                <img
                  src="/portfolio/tailgate-cad-configs.png"
                  alt="Future CAD"
                  className="w-full h-[320px] object-contain"
                />

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
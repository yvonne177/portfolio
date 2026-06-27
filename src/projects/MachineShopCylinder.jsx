import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

export default function MachineShopPneumaticCylinder() {
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
                Basic Machining • Lathe • Mill • Drill Press
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8 font-['Cormorant_Garamond']">
                Pneumatic
                <br />
                Air Pump
                <br />
                Cylinder Motor
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mb-10 font-light">
                An introductory machine shop course covering shop safety, lathe operation,
                milling, and drill press work, culminating in machining a working pneumatic
                air pump cylinder motor by hand.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["Lathe", "Mill", "Drill Press", "Shop Safety"].map((skill, idx) => (
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
                Summer 2023
              </div>

            </div>

            {/* RIGHT: skills card */}
            <div className="relative flex justify-center">
              <div className="bg-white p-8 shadow-2xl rotate-[2deg] max-w-md w-full">
                <p className="uppercase tracking-[0.2em] text-xs text-[#2A5C52] mb-6">
                  Machines Used
                </p>
                <ul className="space-y-4 text-gray-700">
                  {[
                    ["Drill Press", "Hole drilling and reaming"],
                    ["Lathe", "Turning, facing, boring"],
                    ["Mill", "Slotting and port machining"],
                  ].map(([machine, use], idx) => (
                    <li key={idx} className="flex justify-between items-baseline border-b border-[#D9D3C7] pb-3 last:border-0 last:pb-0">
                      <span className="font-['Cormorant_Garamond'] text-xl text-[#18342E]">{machine}</span>
                      <span className="text-xs text-gray-500 text-right ml-4">{use}</span>
                    </li>
                  ))}
                </ul>
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
                This course built fundamental manual machining skills from the ground up,
                starting with shop safety and basic measurement, then moving through drill
                press, lathe, and mill operations. Each skill was applied in the final
                project: a working pneumatic air pump cylinder motor, machined entirely by
                hand.
              </p>

              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                    Skills Covered
                  </h3>
                  <ul className="space-y-3 text-gray-700 leading-relaxed">
                    <li>✓ Shop safety practices and proper machine setup</li>
                    <li>✓ Drill press operation, hole placement, and reaming</li>
                    <li>✓ Lathe turning, facing, and boring</li>
                    <li>✓ Mill operation for slots and ports</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                    Takeaways
                  </h3>
                  <ul className="space-y-3 text-gray-700 leading-relaxed">
                    <li>✓ Hands-on experience with fit and tolerance between mating parts</li>
                    <li>✓ Comfort reading and following manual machining setups</li>
                    <li>✓ A working, hand-machined pneumatic cylinder motor</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* PROCESS */}
          <section>

            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Process</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                From Safety Training to Final Assembly
              </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 text-center">

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Shop Safety
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  PPE & Setup
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Drill Press
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Hole Drilling
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Lathe
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Cylinder & Piston
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Mill
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Ports & End Caps
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Final Assembly
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Fit & Test
                </p>
              </div>

            </div>

          </section>

          {/* FINAL PROJECT */}
          <section>

            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Build</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Final Project: Pneumatic Cylinder Motor
              </h2>
            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                The final project combined every machine introduced over the course into one
                build: a pneumatic air pump cylinder motor machined entirely by hand. Turning
                the cylinder and piston on the lathe, drilling and facing the end caps, and
                milling the air ports each drew directly on the skills built up earlier in the
                course. Getting the parts to fit and move together was the real test of
                whether each operation had been done correctly.
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
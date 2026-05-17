import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function ComputerIntegratedSurgery() {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToProjects = () => {
    navigate('/portfolio');
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleHome = () => {
    navigate('/portfolio');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  return (
    <div className="min-h-screen bg-[#F5F3EE] text-gray-900 overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#F5F3EE]/95 backdrop-blur-md border-b border-[#D9D3C7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex justify-between items-center h-16">

            <button onClick={handleBackToProjects}
              className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#2A5C52]">
              <ArrowLeft size={16} />
              Projects
            </button>

            <div className="hidden md:flex space-x-10">
              <button onClick={handleHome} className="text-sm uppercase tracking-[0.2em]">Home</button>
              <button onClick={handleBackToProjects} className="text-sm uppercase tracking-[0.2em]">Projects</button>
              <button onClick={handleHome} className="text-sm uppercase tracking-[0.2em]">Contact</button>
            </div>

            <a
              href="/portfolio/YvonneZhang_CV_Jan2026.pdf"
              className="text-sm uppercase tracking-[0.2em]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>

          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-28 pb-20 bg-[#2A5C52]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center">

          <div className="text-white">

            <p className="uppercase tracking-[0.35em] text-sm text-blue-100 mb-5">
              Medical Robotics • Registration • Computational Geometry • MATLAB
            </p>

            <h1 className="text-6xl lg:text-7xl font-['Cormorant_Garamond'] leading-[0.95] mb-8">
              Stereotactic<br />
              Navigation System
            </h1>

            <p className="text-xl text-blue-100 max-w-2xl">
              A full surgical navigation pipeline designed to solve rigid-body registration,
              distortion correction, and real-time spatial alignment for image-guided procedures.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {["SVD", "ICP", "GICP", "EM Distortion", "Spatial Trees"].map(t => (
                <span key={t} className="text-[11px] uppercase border border-white/30 px-4 py-2 text-blue-100">
                  {t}
                </span>
              ))}
            </div>

          </div>

          <div className="bg-white p-4 shadow-2xl rotate-[3deg]">
            <img
              src="/portfolio/stereotactic-hero.jpeg"
              className="w-full h-[420px] object-cover"
              alt="System overview"
            />
            <p className="text-center mt-3 text-sm text-gray-700">
              End-to-end surgical navigation pipeline
            </p>
          </div>

        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto space-y-28">

          {/* PROBLEM */}
          <section>
            <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
              Motivation
            </p>

            <h2 className="text-4xl font-['Cormorant_Garamond'] text-[#18342E] mb-6">
              Why Stereotactic Navigation Fails in Practice
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">

              <p>
                Surgical navigation systems depend on precise registration between preoperative models
                and intraoperative tracking data. In practice, accuracy degrades due to sensor noise,
                electromagnetic distortion, and geometric misalignment.
              </p>

              <p>
                The challenge is not only accuracy, but also computational stability — real-time systems
                must maintain convergence under noisy, incomplete, and dynamically shifting point clouds.
              </p>

            </div>
          </section>

          {/* SYSTEM OVERVIEW */}
          <section>
            <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
              System
            </p>

            <h2 className="text-4xl font-['Cormorant_Garamond'] text-[#18342E] mb-8">
              End-to-End Pipeline
            </h2>

            <div className="grid md:grid-cols-4 gap-4 text-center">

              {[
                "Tracking Acquisition",
                "Rigid Registration (SVD)",
                "Distortion Correction",
                "ICP Refinement"
              ].map(step => (
                <div key={step} className="bg-white border border-[#D9D3C7] p-4 text-sm">
                  {step}
                </div>
              ))}

            </div>
          </section>

          {/* METHODS */}
          <section>
            <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
              Methods
            </p>

            <h2 className="text-4xl font-['Cormorant_Garamond'] text-[#18342E] mb-8">
              Algorithmic Components
            </h2>

            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">

              <div>
                <h3 className="text-[#18342E] font-semibold mb-2">
                  1. SVD-Based Rigid Registration
                </h3>
                <p>
                  Implemented Arun’s closed-form solution using Singular Value Decomposition to compute
                  optimal rotation and translation between corresponding point sets.
                </p>
              </div>

              <div>
                <h3 className="text-[#18342E] font-semibold mb-2">
                  2. EM Distortion Modeling
                </h3>
                <p>
                  Modeled electromagnetic tracking distortion using polynomial regression to correct
                  spatial drift and improve alignment stability.
                </p>
              </div>

              <div>
                <h3 className="text-[#18342E] font-semibold mb-2">
                  3. Spatial Acceleration Structures
                </h3>
                <p>
                  Introduced covariance tree search structures to accelerate nearest-neighbor queries,
                  reducing ICP runtime complexity significantly.
                </p>
              </div>

              <div>
                <h3 className="text-[#18342E] font-semibold mb-2">
                  4. ICP + Generalized ICP
                </h3>
                <p>
                  Combined point-to-point ICP with Generalized ICP to improve robustness under partial
                  and noisy surface observations.
                </p>
              </div>

            </div>
          </section>

          {/* RESULTS */}
          <section>
            <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
              Results
            </p>

            <h2 className="text-4xl font-['Cormorant_Garamond'] text-[#18342E] mb-8">
              System Performance
            </h2>

            <ul className="space-y-5 text-lg text-gray-700">
              <li>✓ Achieved sub-millimeter registration accuracy</li>
              <li>✓ ~20× speedup using spatial acceleration structures</li>
              <li>✓ Stable convergence under high noise conditions</li>
              <li>✓ Robust performance across partial point cloud overlap</li>
            </ul>
          </section>

          {/* VISUALS */}
          <section>
            <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
              Implementation
            </p>

            <h2 className="text-4xl font-['Cormorant_Garamond'] text-[#18342E] mb-10">
              System Outputs
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              {[
                "/portfolio/stereo-1.jpeg",
                "/portfolio/stereo-2.jpeg",
                "/portfolio/stereo-3.jpeg",
                "/portfolio/stereo-4.jpeg"
              ].map(img => (
                <div key={img} className="bg-white p-4 shadow-xl">
                  <img src={img} className="w-full h-[320px] object-contain" />
                </div>
              ))}

            </div>
          </section>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 bg-[#102521] text-center text-gray-400 text-sm">
        © 2026 Yvonne Zhang
      </footer>

    </div>
  );
}
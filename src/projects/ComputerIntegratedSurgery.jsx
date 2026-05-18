import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

export default function ComputerIntegratedSurgery() {
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
                Medical Robotics • Registration • Computational Geometry
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8 font-['Cormorant_Garamond']">
                Stereotactic
                <br />
                Navigation
                <br />
                System
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mb-10 font-light">
                A full surgical navigation pipeline for solving rigid-body registration, EM distortion correction, and surface alignment.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["MATLAB", "Linear Algebra", "Algorithm Design"].map((skill, idx) => (
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
                August 2025 – December 2025
              </div>

            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">
              <div className="bg-white p-4 shadow-2xl rotate-[3deg] max-w-md">
                <div className="bg-gray-100 flex items-center justify-center">
                  <img
                    src="/portfolio/stereo-2.jpg"
                    alt="Stereotactic Navigation System"
                    className="w-full h-[420px] object-contain"
                  />
                </div>

                <p className="text-center mt-4 text-sm tracking-wide text-gray-700">
                  End-to-end surgical navigation pipeline
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
                Built a complete stereotactic navigation system to translate preoperative
                imaging (CT/MRI) into real-time surgical guidance, addressing the full interventional
                loop: tracking, calibration, distortion correction, and registration.
              </p>

              <div className="grid lg:grid-cols-2 gap-12">

                <div>
                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                    Key Features
                  </h3>
                  <ul className="space-y-4 text-gray-700 leading-relaxed">
                    <li>✓ Rigid Body Registration via Arun's Method (SVD) for coordinate alignment</li>
                    <li>✓ Pivot Calibration using linear least-squares to solve for tool tip offset</li>
                    <li>✓ 5th-order 3D Bernstein polynomial correction for EM field distortion</li>
                    <li>✓ Generalized ICP and Covariance Trees for real-time surface registration</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                    Takeaways
                  </h3>
                  <ul className="space-y-4 text-gray-700 leading-relaxed">
                    <li>✓ Mitigated &gt;3mm EM distortion error to clinical standards (&lt;0.5mm)</li>
                    <li>✓ Reduced point-to-mesh query complexity from O(N) to O(log N)</li>
                    <li>✓ Validated system against multiple noise models for robustness</li>
                    <li>✓ Generalized ICP improved convergence speed by ~50% over standard ICP</li>
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
                In modern robotic surgery, sub-millimeter precision is required for performing any surgical tasks. During the
                "Computer Integrated Surgery I" course at Johns Hopkins, our team built a
                registration system for stereotactic navigation through various assignment progressions. This project
                addresses the critical interventional loops of tracking, calibration, registration,
                and error correction, allowing calibration of preoperative imaging data to the surgical Operating Room (OR) workspace.
              </p>
              <p>
                Surgical navigation systems degrade in accuracy due to sensor noise, electromagnetic
                distortion, and geometric misalignment. The challenge is in accuracy and
                computational stability, such that real-time systems must maintain convergence under noisy,
                incomplete, and dynamically shifting point clouds.
              </p>
            </div>

          </section>

          {/* SYSTEM ARCHITECTURE */}
          <section>

            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Pipeline</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                System Architecture
              </h2>
            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-14">
              <p>
                The full pipeline maps from preoperative CT/MRI data through tracking, calibration,
                and registration to produce real-time navigated tool guidance in the surgical workspace.
              </p>
            </div>

            {/* Block Diagram */}
            <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 text-center">

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[160px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Pre-Op Imaging
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  CT / MRI
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[160px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Pivot Calibration
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Tool Tip Offset
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[160px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  EM Distortion Correction
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Bernstein Polynomials
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[160px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Rigid Registration
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  SVD / Arun's Method
                </p>
              </div>

              <span className="text-3xl text-[#2A5C52] -mt-2">→</span>

              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[160px]">
                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Surface Registration
                </h3>
                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  ICP + Cov. Trees
                </p>
              </div>

            </div>

          </section>

          {/* MATHEMATICAL METHODS */}
          <section>
 
            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">Implementation</p>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Algorithmic Components
              </h2>
            </div>
 
            <div className="space-y-16">
 
              {/* 1 */}
              <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 items-start">
                <div className="space-y-4">
                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E]">
                    1. Rigid Body Registration
                  </h3>
                  <p className="text-sm uppercase tracking-[0.15em] text-[#2A5C52]">Arun's Method — SVD</p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Implemented a 3D Point Set Registration algorithm using SVD to align coordinate systems
                    between the calibration frame and tracker frames.
                  </p>
                  <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
                    <li>
                      <span className="font-semibold text-[#18342E]">Centroid Alignment:</span>{" "}
                      Compute centroids x̄ and X̄ and center the points to remove translation.
                    </li>
                    <li>
                      <span className="font-semibold text-[#18342E]">SVD:</span>{" "}
                      Compute the cross-covariance matrix H = Σ xᵢ′(Xᵢ′)ᵀ and its Singular Value Decomposition [U, S, V] = svd(H).
                    </li>
                    <li>
                      <span className="font-semibold text-[#18342E]">Rotation:</span>{" "}
                      Solve R = VUᵀ. Ensure det(R) = +1 to prevent reflection artifacts.
                    </li>
                    <li>
                      <span className="font-semibold text-[#18342E]">Translation:</span>{" "}
                      Recalculate t = X̄ − Rx̄.
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 shadow-xl">
                  <img src="/portfolio/stereo-1.png" alt="Registration Reference Frames" className="w-full h-[240px] object-contain" />
                  <p className="text-center mt-3 text-xs uppercase tracking-[0.12em] text-gray-500">Registration Reference Frames</p>
                </div>
              </div>
 
              {/* 2 */}
              <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 items-start">
                <div className="space-y-4">
                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E]">
                    2. Pivot Calibration
                  </h3>
                  <p className="text-sm uppercase tracking-[0.15em] text-[#2A5C52]">Linear Least-Squares</p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Solved for the unknown tool tip offset t<sub>tip</sub> and fixed pivot point p<sub>dimple</sub> 
                    as a linear least-squares problem. By stacking rotation matrices across N frames,
                    the system Ax = b is solved via LSQR to recover 6 unknowns: 3 for tip position,
                    3 for the pivot point in space.
                  </p>
                  <div className="bg-[#EFEAE0] border border-[#D9D3C7] px-6 py-4 font-mono text-sm text-[#18342E] space-y-1">
                    <div>[Rᵢ | −I] · [t_tip ; p_dimple] = −tᵢ</div>
                    <div>Stack N frames → Ax = b (LSQR)</div>
                    <div>6 unknowns: 3 tip + 3 pivot</div>
                  </div>
                </div>
                <div className="bg-white p-4 shadow-xl">
                  <img src="/portfolio/stereo-2.jpg" alt="Pivot Calibration Setup" className="w-full h-[240px] object-contain" />
                  <p className="text-center mt-3 text-xs uppercase tracking-[0.12em] text-gray-500">Pivot Calibration Setup</p>
                </div>
              </div>
 
              {/* 3 */}
              <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 items-start">
                <div className="space-y-4">
                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E]">
                    3. EM Distortion Correction
                  </h3>
                  <p className="text-sm uppercase tracking-[0.15em] text-[#2A5C52]">5th-Order Bernstein Polynomials</p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    EM field distortion can introduce over 3mm of spatial error. A 5th-order 3D Bernstein
                    polynomial correction map was implemented, solving for 216 coefficients (6³) to remap
                    distorted readings back to ground-truth optical coordinates. This correction reduced
                    worst-case error from 7.09mm down to ~1.10mm, meeting clinical accuracy standards.
                  </p>
                </div>
                <div className="bg-white p-4 shadow-xl">
                  <img src="/portfolio/stereo-3.jpg" alt="Distortion Correction Mapping" className="w-full h-[240px] object-contain" />
                  <p className="text-center mt-3 text-xs uppercase tracking-[0.12em] text-gray-500">Distortion Correction Mapping</p>
                </div>
              </div>
 
              {/* 4 */}
              <div className="space-y-6">
                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E]">
                  4. Generalized ICP + Covariance Trees
                </h3>
                <p className="text-sm uppercase tracking-[0.15em] text-[#2A5C52]">Surface Registration</p>
 
                <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 items-start">
                  <div className="space-y-6">
                    <div>
                      <p className="font-semibold text-[#18342E] mb-2">Iterative Closest Point (ICP)</p>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        For surface registration, a Generalized ICP algorithm was implemented with anisotropic
                        covariance weighting to handle noise in both source and target point sets. This improved
                        convergence speed by ~50% (11.0s vs 37.2s) compared to standard point-to-point ICP,
                        and provided greater robustness under partial and noisy surface observations.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#18342E] mb-2">Covariance Trees</p>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        To support real-time interaction with high-resolution anatomical meshes, spatial search
                        trees were constructed using bounding covariance structures. This reduced the
                        closest-point query complexity from linear O(N) to logarithmic O(log N), enabling
                        significantly faster nearest-neighbor lookups across large mesh datasets.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-4 shadow-xl">
                      <img src="/portfolio/stereo-4.jpg" alt="ICP Convergence" className="w-full h-[200px] object-contain" />
                      <p className="text-center mt-2 text-xs uppercase tracking-[0.12em] text-gray-500">ICP Convergence</p>
                    </div>
                    <div className="bg-white p-4 shadow-xl">
                      <img src="/portfolio/stereo-5.png" alt="Covariance Tree Structure" className="w-full h-[200px] object-contain" />
                      <p className="text-center mt-2 text-xs uppercase tracking-[0.12em] text-gray-500">Covariance Tree Structure</p>
                    </div>
                  </div>
                </div>
              </div>
 
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

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-10">
              <p>
                The system was validated against three noise models to quantify registration error
                across realistic surgical conditions. The Bernstein polynomial correction proved
                critical as raw EM distortion introduced up to 7mm of error, which was reduced to
                clinical standards after correction.
              </p>
            </div>

            {/* Results Table */}
            <div className="overflow-x-auto mb-14">
              <table className="w-full text-sm text-gray-700 border border-[#D9D3C7]">
                <thead>
                  <tr className="bg-[#EFEAE0] text-[#18342E] uppercase tracking-[0.1em] text-xs">
                    <th className="px-6 py-4 text-left border-b border-[#D9D3C7]">Noise Condition</th>
                    <th className="px-6 py-4 text-left border-b border-[#D9D3C7]">Mean Error (mm)</th>
                    <th className="px-6 py-4 text-left border-b border-[#D9D3C7]">Max Error (mm)</th>
                    <th className="px-6 py-4 text-left border-b border-[#D9D3C7]">Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Baseline (None)", "0.00", "0.01", "Ideal"],
                    ["Optical Tracker Jitter", "0.01", "0.03", "Negligible"],
                    ["EM Noise", "0.46", "0.79", "Minor"],
                    ["EM Distortion (Uncorrected)", "3.51", "7.09", "Critical"],
                    ["EM Distortion + Correction", "< 0.50", "~ 1.10", "Clinical Standard Met"],
                  ].map(([cond, mean, max, impact], idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#F9F7F3]"}>
                      <td className="px-6 py-4 border-b border-[#D9D3C7] font-medium">{cond}</td>
                      <td className="px-6 py-4 border-b border-[#D9D3C7]">{mean}</td>
                      <td className="px-6 py-4 border-b border-[#D9D3C7]">{max}</td>
                      <td className="px-6 py-4 border-b border-[#D9D3C7]">{impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ul className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <li>
                <span className="font-semibold text-[#18342E]">Registration Accuracy:</span>{" "}
                Unit tests confirmed rotation and translation recovery errors below 1×10⁻⁶, validating
                the numerical precision of the SVD-based implementation.
              </li>
              <li>
                <span className="font-semibold text-[#18342E]">Search Efficiency:</span>{" "}
                Covariance Trees reduced point-to-mesh query times from O(N) linear to O(log N)
                logarithmic complexity, enabling real-time performance on high-resolution anatomical surfaces.
              </li>
              <li>
                <span className="font-semibold text-[#18342E]">Distortion Mitigation:</span>{" "}
                The Bernstein polynomial correction reduced worst-case EM distortion error from
                7.09mm down to approximately 1.10mm, meeting clinical accuracy standards for
                navigated surgical procedures.
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
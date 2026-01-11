import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function StereotacticNavigationSystem() {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const handleBackToProjects = () => {
    navigate('/portfolio');
    // Scroll to projects section after navigation
    setTimeout(() => {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleHome = () => {
    navigate('/portfolio');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={handleBackToProjects}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors cursor-pointer"
            >
              <ArrowLeft size={20} />
              Back to All Projects
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={handleHome}
                className="hover:text-blue-600 transition-colors font-medium text-gray-700 cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={handleHome}
                className="hover:text-blue-600 transition-colors font-medium text-gray-700 cursor-pointer"
              >
                About
              </button>
              <button
                onClick={handleBackToProjects}
                className="hover:text-blue-600 transition-colors font-medium text-gray-700 cursor-pointer"
              >
                Projects
              </button>
              <button
                onClick={handleHome}
                className="hover:text-blue-600 transition-colors font-medium text-gray-700 cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 pb-12 px-4 bg-gradient-to-br from-blue-50 to-blue-100 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            Stereotactic Navigation System
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Medical image registration for surgical guidance through advanced 3D geometry and signal processing
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">Computational Geometry</span>
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">Image Registration</span>
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">Algorithm Design</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Overview */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              A four-part MATLAB project implementing a complete surgical navigation system that aligns tracked instruments to pre-operative CT imaging. The system integrates optical and electromagnetic tracking, distortion correction, 3D spatial search, and iterative point cloud registration to enable real-time surgical guidance with sub-millimeter accuracy.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The project demonstrates mastery of computational geometry, numerical methods, and algorithm, from foundational calibration techniques (PA1-2) through advanced spatial indexing (PA3) to production-ready iterative registration (PA4). Across four interconnected assignments, this work showcases the ability to design, implement, validate, and optimize complex algorithms for high-precision applications.
            </p>
          </div>

          {/* Project Progression */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Project Progression</h2>
            <div className="space-y-6">
              {/* PA1 & PA2 */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">PA1 & PA2: Calibration & System Registration</h3>
                <p className="text-gray-700 mb-3">
                  Established the foundational infrastructure for a complete stereotactic navigation system. Implemented core algorithms for registering optical and electromagnetic tracking systems to surgical workspace coordinates.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Algorithms:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Point Cloud Registration (Arun's Method):</strong> SVD-based rigid body transformation achieving &lt;1×10⁻⁶ norm error on synthetic tests. Used to align corresponding 3D marker sets across optical/EM frames.</li>
                    <li><strong>Pivot Calibration:</strong> Least-squares solution determining fixed probe pivot points. Demonstrated &lt;1×10⁻¹² numerical stability across randomized trials.</li>
                    <li><strong>Distortion Correction:</strong> 5th-order 3D Bernstein polynomial fitting for nonlinear EM field correction. Successfully isolated three error types (EM noise, EM distortion, optical jitter) achieving &lt;10⁻³ mm edge-case accuracy.</li>
                    <li><strong>CT Registration:</strong> Frame transformation mapping between EM tracker and CT scan space, enabling surgical guidance.</li>
                  </ul>
                </div>
              </div>

              {/* PA3 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">PA3: Spatial Search & Mesh Registration</h3>
                <p className="text-gray-700 mb-3">
                  Developed two complementary algorithms for point-to-mesh projection, balancing accuracy and speed. Implemented hierarchical spatial data structures for efficient nearest-neighbor queries.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Linear Search (Brute Force)</h4>
                  <p className="text-gray-700">Iterative projection onto all triangles with guaranteed correctness. Time: O(N_samples × N_triangles) = 0.36 seconds.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Covariance Tree Search (Accelerated)</h4>
                  <p className="text-gray-700 mb-2">Hierarchical spatial decomposition with bounding sphere pruning. Achieved <strong>20× speedup</strong> (0.018 seconds) while maintaining ±0.25mm accuracy.</p>
                </div>
              </div>

              {/* PA4 */}
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">PA4: Iterative Point Cloud Registration (ICP)</h3>
                <p className="text-gray-700 mb-3">
                  Integrated spatial search algorithms with two sophisticated registration methods. Demonstrated the engineering trade-off between computational speed and registration robustness.
                </p>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Standard ICP (Point-to-Point)</h4>
                  <p className="text-gray-700">Direct Euclidean distance minimization through iterative closest-point correspondence and rigid transformation. Robust but prone to local minima.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Generalized ICP (Surface-Aware)</h4>
                  <p className="text-gray-700 mb-2">Covariance-weighted residuals incorporating local surface geometry and anisotropic uncertainty. <strong>50% faster convergence</strong> (11.0s vs 37.2s) with improved stability.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Technical Competencies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Linear Algebra & Numerical Methods</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Singular Value Decomposition (SVD) for optimal rotation computation</li>
                  <li>✓ Iterative least-squares solvers (LSQR, LSQMINNORM)</li>
                  <li>✓ Eigenvalue decomposition & principal component analysis</li>
                  <li>✓ Rank-deficient case handling & numerical stability</li>
                  <li>✓ Reflection correction in rotation matrices</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Computational Geometry</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ 3D rigid transformations (SO(3), SE(3))</li>
                  <li>✓ Barycentric coordinates & triangle projection</li>
                  <li>✓ Point-on-segment projection with clamping</li>
                  <li>✓ Normal vector computation & surface analysis</li>
                  <li>✓ Spatial partitioning & bounding volume hierarchies</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Algorithm Design & Optimization</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Multiple algorithmic approaches with rigorous validation</li>
                  <li>✓ Performance profiling & complexity analysis</li>
                  <li>✓ Accuracy vs. speed trade-off engineering</li>
                  <li>✓ Degenerate case detection & handling</li>
                  <li>✓ Empirical validation across diverse datasets</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Software Engineering</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Modular function design with clear contracts</li>
                  <li>✓ Comprehensive unit testing (25+ trials/algorithm)</li>
                  <li>✓ Synthetic ground-truth data generation</li>
                  <li>✓ Error analysis & metrics reporting</li>
                  <li>✓ Code organization & documentation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Results & Validation */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Results & Validation</h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Accuracy Metrics</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100 border border-gray-300">
                      <th className="px-4 py-2 text-left font-semibold">Algorithm</th>
                      <th className="px-4 py-2 text-left font-semibold">Accuracy</th>
                      <th className="px-4 py-2 text-left font-semibold">Validation Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border border-gray-300">
                      <td className="px-4 py-2 font-medium">Point Cloud Registration</td>
                      <td className="px-4 py-2">&lt;1×10⁻⁶ norm error</td>
                      <td className="px-4 py-2">Synthetic tests (3+ markers)</td>
                    </tr>
                    <tr className="border border-gray-300 bg-gray-50">
                      <td className="px-4 py-2 font-medium">Pivot Calibration</td>
                      <td className="px-4 py-2">&lt;1×10⁻¹² norm error</td>
                      <td className="px-4 py-2">5+ random trials</td>
                    </tr>
                    <tr className="border border-gray-300">
                      <td className="px-4 py-2 font-medium">Distortion Correction</td>
                      <td className="px-4 py-2">&lt;10⁻³ mm max error</td>
                      <td className="px-4 py-2">Edge-case stability testing</td>
                    </tr>
                    <tr className="border border-gray-300 bg-gray-50">
                      <td className="px-4 py-2 font-medium">ICP Registration</td>
                      <td className="px-4 py-2">&lt;0.03 mm final error</td>
                      <td className="px-4 py-2">10+ debug & unknown datasets</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100 border border-gray-300">
                      <th className="px-4 py-2 text-left font-semibold">Approach</th>
                      <th className="px-4 py-2 text-left font-semibold">Execution Time</th>
                      <th className="px-4 py-2 text-left font-semibold">Accuracy</th>
                      <th className="px-4 py-2 text-left font-semibold">Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border border-gray-300">
                      <td className="px-4 py-2 font-medium">Linear Search</td>
                      <td className="px-4 py-2">0.36s</td>
                      <td className="px-4 py-2">±0.002 mm</td>
                      <td className="px-4 py-2">Validation baseline</td>
                    </tr>
                    <tr className="border border-gray-300 bg-gray-50">
                      <td className="px-4 py-2 font-medium">Covariance Tree</td>
                      <td className="px-4 py-2">0.018s <span className="text-green-600 font-bold">(20×)</span></td>
                      <td className="px-4 py-2">±0.007 mm</td>
                      <td className="px-4 py-2">Real-time guidance</td>
                    </tr>
                    <tr className="border border-gray-300">
                      <td className="px-4 py-2 font-medium">Standard ICP</td>
                      <td className="px-4 py-2">37.2s avg</td>
                      <td className="px-4 py-2">0.028 mm</td>
                      <td className="px-4 py-2">Robust initialization</td>
                    </tr>
                    <tr className="border border-gray-300 bg-gray-50">
                      <td className="px-4 py-2 font-medium">Generalized ICP</td>
                      <td className="px-4 py-2">11.0s avg <span className="text-green-600 font-bold">(3.4×)</span></td>
                      <td className="px-4 py-2">0.028 mm</td>
                      <td className="px-4 py-2">Clinical settings</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Robustness Testing</h3>
              <p className="text-gray-700 mb-4">
                Systematically isolated and characterized three independent error sources:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-gray-900 mb-2">EM Noise</h4>
                  <p className="text-gray-700 text-sm">Random fluctuations per axis. Distortion correction effective but limited to 0.46 mm residual error.</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-gray-900 mb-2">EM Distortion</h4>
                  <p className="text-gray-700 text-sm">Position-dependent systematic error. Bernstein polynomial correction reduced 3.51 mm distortion to &lt;0.03 mm.</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Optical Jitter</h4>
                  <p className="text-gray-700 text-sm">Base unit vibration. Minimal impact (0.01 mm) on system; successfully isolated and characterized.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Technologies & Tools</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Language & Environment</h3>
                <p className="text-gray-700">MATLAB with Symbolic Math Toolbox, core numerical linear algebra libraries</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Key Functions</h3>
                <p className="text-gray-700">SVD, LSQR, LSQMINNORM, Eigenvalue decomposition, Rigid transformations (rigidtform3d, transformPointsInverse)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Testing Framework</h3>
                <p className="text-gray-700">MATLAB Unit Test (TestCase subclassing), synthetic ground-truth generation, empirical validation</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Documentation</h3>
                <p className="text-gray-700">Technical reports with pseudocode, mathematical derivations, performance analysis, error metrics</p>
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Key Learnings</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-blue-600 text-2xl flex-shrink-0">→</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Problem Decomposition</h3>
                  <p className="text-gray-700">Breaking a complex navigation system into modular components (registration → search → iteration) enables incremental validation and debugging while allowing each component to be optimized independently.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 text-2xl flex-shrink-0">→</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Geometric Insight Drives Performance</h3>
                  <p className="text-gray-700">A 20× speedup via covariance trees demonstrates the value of domain-specific optimization: understanding the geometric structure of your data can unlock efficiency gains that algorithmic improvements alone cannot achieve.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 text-2xl flex-shrink-0">→</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Numerical Stability Matters</h3>
                  <p className="text-gray-700">Careful handling of edge cases (zero singular values, reflections, degenerate point sets, ill-conditioned systems) is not optional—it is essential for robust scientific computing in production environments.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 text-2xl flex-shrink-0">→</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Backward Compatibility in Iterative Development</h3>
                  <p className="text-gray-700">Each assignment built on previous code while introducing new capabilities. Designing reusable, well-documented functions from the start prevents technical debt and enables confident refactoring.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 text-2xl flex-shrink-0">→</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Validation Strategy is Paramount</h3>
                  <p className="text-gray-700">Synthetic ground-truth data, comprehensive unit tests, and empirical error analysis across diverse real-world conditions provide confidence that algorithms are correct—not just that they run without crashing.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-50 p-8 rounded-lg border-2 border-blue-200">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Summary</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              This project demonstrates advanced proficiency in computational geometry, numerical methods, and algorithm design applied to a real-world surgical guidance challenge. The progression through four interconnected assignments showcases the ability to:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>✓ Master complex mathematical concepts and implement them robustly</li>
              <li>✓ Design multiple algorithmic approaches and validate them rigorously</li>
              <li>✓ Balance competing engineering concerns: accuracy, speed, and robustness</li>
              <li>✓ Achieve significant performance gains through geometric insight</li>
              <li>✓ Build production-quality code with systematic testing and documentation</li>
            </ul>
            <p className="text-lg text-gray-700">
              The covariance tree implementation exemplifies engineering mindset: achieving 20× performance improvement through geometric understanding while maintaining algorithmic correctness—a capability highly valued in performance-critical applications across robotics, medical devices, and scientific computing.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-200 bg-gray-50">
        <p>© 2025 Yvonne Zhang.</p>
      </footer>
    </div>
  )
}
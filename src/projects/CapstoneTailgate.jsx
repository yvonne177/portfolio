// projects/TailgateSystem.jsx
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

  const handleBackToProjects = () => {
    goToMainSection("projects");
  };

  const handleHome = () => {
    navigate('/portfolio');

    setTimeout(() => {
      window.scrollTo({top:0,behavior:"smooth"});
    },100);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            <div className="flex-shrink-0 text-2xl font-bold text-gray-900">
              Yvonne Zhang
            </div>

            <div className="hidden md:flex space-x-8 mx-auto">
              <button onClick={handleHome} className="hover:text-blue-600 font-medium text-gray-700">Home</button>
              <button onClick={() => goToMainSection("about me")} className="hover:text-blue-600 font-medium text-gray-700">About Me</button>
              <button onClick={() => goToMainSection("projects")} className="hover:text-blue-600 font-medium text-gray-700">Projects</button>
              <button onClick={() => goToMainSection("contact")} className="hover:text-blue-600 font-medium text-gray-700">Contact</button>
            </div>

            <div>
              <a
                href="/portfolio/YvonneZhang_CV_Jan2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
              >
                Resume
              </a>
            </div>

          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-12 pb-12 px-4 bg-gradient-to-br from-blue-50 to-blue-100 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            Multifunction Tailgate System
          </h1>

          <p className="text-xl text-gray-700 mb-6">
            Designed and prototyped a 2-in-1 multifunction tailgate for the
            Ford F-150 to improve truck bed accessibility while maintaining
            manufacturability and compatibility with existing vehicles.
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">SolidWorks</span>
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">ANSYS FEA</span>
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">Machine Shop</span>
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">Mechanical Design</span>
          </div>

          <div className="mt-4 mb-4 text-gray-600 text-lg">
            <span className="font-semibold">Project Duration:</span> September 2024 – May 2025
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-0 px-4">
        <div className="max-w-4xl mx-auto space-y-12">

        {/* Summary */}
        <section className="flex justify-center mb-16">
          <div className="max-w-4xl w-full bg-gradient-to-br from-blue-50 to-blue-50 p-8 rounded-lg border-2 border-blue-200">

            <h2 className="text-3xl font-bold mb-4 text-gray-900">Project Summary</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Existing multifunction truck tailgates provide improved bed
              accessibility but introduce complex mechanisms and high
              manufacturing costs. This project aimed to design a simpler
              mechanical system that enables a tailgate to operate in two
              configurations while maintaining compatibility with standard
              Ford F-150 mounting points.
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Key Features</h3>

              <li>✓ Vertical sliding guide rail system enabling lowered access configuration</li>
              <li>✓ Constant force spring system to offset tailgate weight</li>
              <li>✓ Cable support system preventing guide rail load</li>
              <li>✓ Retrofit design compatible with existing F-150 hinges and cables</li>
            </ul>

            <ul className="space-y-2 text-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Engineering Outcomes</h3>

              <li>✓ Functional prototype built under $1100 CAD</li>
              <li>✓ Achieved load capacity targets for both configurations</li>
              <li>✓ FEA validated structural safety with high safety factors</li>
            </ul>

          </div>
        </section>

        {/* Problem */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Problem Context</h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Standard F-150 tailgates extend beyond the truck bed when opened, limiting accessibility and making loading difficult. Existing multifunction tailgates on the market improve access but are complex and costly to manufacture. Our design goal was to create a simpler, mechanically-driven solution that preserves the standard opening while allowing direct access to the truck bed.
          </p>
        </div>

        {/* Concept Development */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Concept Development</h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The team explored multiple design concepts, including hinge-based folding designs, sliding guide rails, and integrated retractable storage mechanisms. A weighted decision matrix identified the guide rail system as the most effective option due to its simplicity, low manufacturing complexity, and compatibility with existing tailgate components. This approach enables a 2-in-1 configuration without major modifications to the truck.
          </p>
        </div>
        <img
            src="/portfolio/tailgate_configs.png"
            alt="Tailgate configuration options"
            className="w-full max-w-xl mx-auto my-8"
        />
         <img
            src="/portfolio/tailgatecad_configs.png"
            alt="Tailgate configuration CAD demo"
            className="w-full max-w-xl mx-auto my-8"
        />

        {/* Mechanical System */}
        <div>
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Mechanical System</h2>

        <ul className="space-y-3 text-gray-700 list-disc pl-6 mb-8">
            <li>
            <span className="font-semibold text-gray-900">Guide Rails:</span>{" "}
            Telescopic rails allow the tailgate to translate vertically,
            lowering it beneath the truck bed to create unobstructed access.
            </li>
            <li>
            <span className="font-semibold text-gray-900">Double Post Frame:</span>{" "}
            Stainless steel posts mount the guide rails while maintaining
            structural rigidity and enabling rotational movement.
            </li>
            <li>
            <span className="font-semibold text-gray-900">Constant Force Springs:</span>{" "}
            Spring assemblies counteract the tailgate weight, reducing lifting
            effort and preventing guide rails from carrying load.
            </li>
            <li>
            <span className="font-semibold text-gray-900">Cable System:</span>{" "}
            Support cables maintain load in the horizontal configuration
            and preserve existing F-150 cable functionality.
            </li>
        </ul>

        <div className="grid grid-cols-3 gap-4">
        <div className="w-full h-64 overflow-hidden rounded-lg border bg-white">
            <img
            src="/portfolio/guide_rails.png"
            alt="Guide rails for tailgate"
            className="w-full h-full object-contain"
            />
        </div>
        <div className="w-full h-64 overflow-hidden rounded-lg border bg-white">
            <img
            src="/portfolio/double_post_system.png"
            alt="Double post system for tailgate"
            className="w-full h-full object-contain"
            />
        </div>
        <div className="w-full h-64 overflow-hidden rounded-lg border bg-white">
            <img
            src="/portfolio/constant_force_springs.png"
            alt="Constant force springs installed"
            className="w-full h-full object-contain"
            />
        </div>
        </div>

        </div>
        {/* Engineering Analysis */}
        <div>
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Engineering Analysis</h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Finite element analysis (FEA) was performed on critical structural components to ensure the tailgate system is safe, rigid, and capable of supporting operational loads. Components analyzed include the double-post frame and hinge assemblies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
        {/* Double Post Frame FEA */}
        <div className="flex flex-col items-center h-96">
            <div className="w-full h-full overflow-hidden rounded-lg border bg-white">
            <img
                src="/portfolio/fea_double_post.png"
                alt="FEA of double post frame showing Von Mises stress"
                className="w-full h-full object-contain"
            />
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">
            Von Mises stress distribution of the double-post frame under vertical and rotational loads.
            </p>
        </div>

        {/* Hinge FEA */}
        <div className="flex flex-col items-center h-96">
            <div className="w-full h-full overflow-hidden rounded-lg border bg-white">
            <img
                src="/portfolio/fea_hinges.png"
                alt="FEA of hinge assemblies supporting the tailgate"
                className="w-full h-full object-contain"
            />
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">
            Von Mises stress on hinge assemblies supporting the full tailgate system.
            </p>
        </div>
        </div>

        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
            <li>
            <span className="font-semibold text-gray-900">Guide Rails:</span> Maximum Von Mises stress ~2.3 MPa <br/>
            Material yield: 215 MPa → Safety factor ≈ 93.
            </li>
            <li>
            <span className="font-semibold text-gray-900">Double Post Frame:</span> Maximum Von Mises stress ~0.9 MPa <br/>
            Material yield: 215 MPa → Safety factor ≈ 239. Satisfies structural rigidity under combined vertical and rotational loading.
            </li>
            <li>
            <span className="font-semibold text-gray-900">Cable System:</span> Maximum tension load ~150 N <br/>
            Deformation less than 0.5 mm. Ensures horizontal configuration supports the tailgate without overloading the rails.
            </li>
            <li>
            <span className="font-semibold text-gray-900">Constant Force Springs:</span> Peak stress in spring coils ~50 MPa <br/>
            Safety factor ≈ 4. Confirms the spring counterbalances tailgate weight during lifting.
            </li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed">
            Overall, all components exceed recommended safety factors, confirming that the mechanical system is robust, safe, and capable of handling operational loads without permanent deformation. The FEA results also guided minor design adjustments, such as optimizing rail thickness and spring mounting points to further improve performance.
        </p>
        </div>

        {/* Prototype & Testing */}
        <div>
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Prototype & Testing</h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
            A full-scale prototype of the 2-in-1 tailgate was fabricated and installed on a 2015 Ford F-150 to validate motion, installation feasibility, and structural performance. The prototype requires no modifications to the truck, using only additions that can be purchased off-the-shelf, and remained within the project’s CAD $1,500 budget.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Initial testing verified that the tailgate achieves both operational configurations, meets load requirements, and maintains structural safety. While functional, the prototype revealed opportunities for refinement in aesthetics, weight reduction, and the latching mechanism.
        </p>


        <div className="space-y-6 mb-6 flex flex-col items-center">
        <div className="w-full flex flex-col items-center">
            <img
            src="/portfolio/tailgate_prototype_integration.png"
            alt="Tailgate prototype installed on Ford F-150"
            className="max-w-2xl w-full object-contain rounded-lg border"
            />
            <p className="text-sm text-gray-500 mt-2 text-center">
            Prototype integration with the tailgate.
            </p>
        </div>

        <div className="w-full flex flex-col items-center">
            <img
            src="/portfolio/sideview_tabs.png"
            alt="Side view of installation"
            className="max-w-lg w-full object-contain rounded-lg border"
            />
            <p className="text-sm text-gray-500 mt-2 text-center">
            Side view of tailgate installation showing tab placement access to vertical guide rails and double post system.
            </p>
        </div>

        </div>

        {/* Future Work */}
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Future Work</h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Future iterations will focus on enhancing visual aesthetics, reducing weight, and further integrating the tailgate’s latching and installation mechanisms. For example, the current guide rails and double-post system, while structurally sound, add significant weight and slightly alter the truck’s appearance.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Improvements may include replacing carabiners with spring-loaded latches actuated by the existing tailgate handle, adding covers for guide rails and posts to improve aesthetics and protect components from the elements, and refining the constant force springs to reduce installation effort while maintaining load capacity.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-12">
            Overall, the prototype successfully improves truck bed accessibility while meeting key objectives and constraints. Future design refinements will further enhance usability, appearance, and ease of installation.
        </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {/* Constant Force Spring Installation */}
            <div className="flex flex-col items-center">
                <img
                src="/portfolio/spring_installation.png"
                alt="Constant force springs installed"
                className="w-full h-auto object-contain rounded-lg border"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">
                Installation of constant force springs to counteract tailgate weight.
                </p>
            </div>

            {/* Latching System */}
            <div className="flex flex-col items-center">
                <img
                src="/portfolio/latching_system.png"
                alt="Tailgate spring-loaded latching system"
                className="w-full h-auto object-contain rounded-lg border"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">
                Proposed spring-loaded latching system for improved accessibility.
                </p>
            </div>
            </div>

        </div>
      </section>

      {/* Extra spacing before footer */}
      <div className="h-24"></div>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-200 bg-gray-50">
        <p>© 2026 Yvonne Zhang.</p>
      </footer>

    </div>
  )
}
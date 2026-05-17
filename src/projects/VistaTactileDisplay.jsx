// projects/VistaTactileDisplay.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

export default function VistaTactileDisplay() {

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
                Haptics • Accessibility • Robotics Research
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8 font-['Cormorant_Garamond']">
                VISTA —
                <br />
                Haptic Museum
                <br />
                Display
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mb-10 font-light">
                Visual Information through Sensory Tactile Array (VISTA) for museum display accessibility and exploring the correlation between haptic feedback to colors and shape.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                {[
                  "Fusion 360",
                  "Arduino",
                  "Python"
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
                September 2025 – December 2025
              </div>

            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">

              <div className="bg-white p-4 shadow-2xl rotate-[3deg] max-w-md">

                <img
                  src="/portfolio/vista-cad-v1.jpeg"
                  alt="VISTA CAD"
                  className="w-full h-[420px] object-cover"
                />

                <p className="text-center mt-4 text-sm tracking-wide text-gray-700">
                  VISTA Prototype
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
                Designed a fully functional prototype of a pin array tactile display to explore the connection between haptic feedback and information translation of color and shape.
              </p>

              <div className="grid lg:grid-cols-2 gap-12">

                <div>

                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                    Key Features
                  </h3>

                  <ul className="space-y-4 text-gray-700 leading-relaxed">

                    <li>✓ 7x5 pin array with independently actuated cam to pin height controls</li>

                    <li>✓ Color-to-Height mapping algorithm between yellow, red, blue and white</li>

                    <li>✓ Silicone overlay Ecoflex™ 00-30 for tactile interface</li>

                    <li>✓ Arduino to Python pipeline for image processing, height encoding, and synchronized multi-actuator control</li>

                  </ul>

                </div>

                <div>

                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-5">
                    Takeaways
                  </h3>

                  <ul className="space-y-4 text-gray-700 leading-relaxed">

                    <li>✓ Achieved 100% success rate in shape recognition through Flag Identification Study</li>

                    <li>✓ Demonstrated feasibility of multi-modal encoding between shape and color through height</li>

                    <li>✓ Submission of Work-In-Progress paper to the Haptics Symposium 2026</li>

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
                Context & Overview
              </h2>

            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700">

              <p>
                According to the American Alliance of Museums, 7 million visually impaired individuals in the US face a largely inaccessible cultural landscape. VISTA (Visual Information through Sensory Tactile Array) is a handheld tactile display designed to make visual art accessible to blind and visually-impaired museum visitors.
              </p>

              <p>
                The device uses a 7×5 actuated pin array contained by a soft silicone interface that aims to render both shape and color through touch. Each pin’s height encodes visual information, allowing users to feel contours, regions, and color boundaries of paintings or flags using their palm. The system bridges human haptic perception, mechanical actuation, and image processing to create a scalable, refreshable tactile interface for museum exhibits.
              </p>

            </div>

          </section>

          {/* SYMPOSIUM */}
          <section className="mb-24">

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Conference
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Haptics Symposium 2026
              </h2>

            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-10">

              <p>
                Presented VISTA as a Work-In-Progress paper at the 2026 Haptics Symposium in Reno, Nevada. This included a poster session covering the preliminary user study results exploring shape and color recognition through tactile feedback.
              </p>

            </div>

            {/* IMAGE CENTERED */}
            <div className="flex justify-center mt-6 mb-16">

              <div className="bg-white p-4 shadow-xl max-w-md w-full">

                <img
                  src="/portfolio/haptics-reno.jpeg"
                  alt="Haptics Symposium 2026 presentation"
                  className="w-full h-[280px] object-cover"
                />

              </div>

            </div>

          </section>

          {/* SYSTEM */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Pipeline
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                System Architecture
              </h2>

            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-14">

              <p>
                The research question for this project was: How can pin height differentiation in a mechanically actuated tactile array be used to encode both geometric structure (shape) and chromatic information (color) for non-visual perception?
              </p>

              <p>
                The following is our main pipeline from flag images translated into tactile feedback on the display surface.
              </p>

            </div>
            {/* Block Diagram */}
            <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 text-center">

              {/* INPUT */}
              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">

                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Input Image
                </h3>

                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Processing / Python
                </p>

              </div>

              {/* ARROW */}
              <span className="text-3xl text-[#2A5C52] -mt-2">
                →
              </span>

              {/* MAPPING */}
              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">

                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Mapping Logic
                </h3>

                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Color → Height → Angle
                </p>

              </div>

              {/* ARROW */}
              <span className="text-3xl text-[#2A5C52] -mt-2">
                →
              </span>

              {/* ACTUATION */}
              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">

                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Servo Actuation
                </h3>

                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Signal Distribution
                </p>

              </div>

              {/* ARROW */}
              <span className="text-3xl text-[#2A5C52] -mt-2">
                →
              </span>

              {/* CAM SYSTEM */}
              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">

                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Cam System
                </h3>

                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  Mechanical Translation
                </p>

              </div>

              {/* ARROW */}
              <span className="text-3xl text-[#2A5C52] -mt-2">
                →
              </span>

              {/* OUTPUT */}
              <div className="bg-white border border-[#D9D3C7] shadow-lg px-5 py-5 w-[170px]">

                <h3 className="text-lg font-['Cormorant_Garamond'] text-[#18342E] mb-2 leading-tight">
                  Physical Array
                </h3>

                <p className="text-gray-600 text-[11px] uppercase tracking-[0.12em] leading-relaxed">
                  35× Pin Output
                </p>

              </div>

            </div>

          </section>

          {/* MECHANICAL */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Design
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Mechanical Design
              </h2>

            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-10">

              <p>
                The device requires the control of 35 pins, all individually actuated using servo motors. The mechanical design of the cam-to-pin mechanism was optimized as closely possible while ensuring differentiable height differences to correlate to the color legend.
              </p>

            </div>

            <ul className="space-y-6 text-gray-700 leading-relaxed mb-14 text-lg">

              <li>
                <span className="font-semibold text-[#18342E]">
                  Cam Mechanism Design:
                </span>{" "}
                The cam profiles were designed with a 1.5-inch pitch radius to generate four discrete pin height levels. This geometry required approximately 1.6 inches of spacing between pins, resulting in a larger spaced but still interpretable tactile grid suitable for palm-based exploration.
              </li>

              <li>
                <span className="font-semibold text-[#18342E]">
                  Silicone Tactile Interface:
                </span>{" "}
                A custom overlay made from Smooth-On Ecoflex™ 00-30 silicone was fabricated to create a continuous tactile surface above the discrete pin array. The membrane was lightly coated with cornstarch to reduce friction and used a three-level tensioning system to improve tactile clarity and transmission of height variations.
              </li>

            </ul>

            <div className="grid md:grid-cols-2 gap-8">

              {[
                "/portfolio/vista-cad.jpeg",
                "/portfolio/vista-key.jpeg",
                "/portfolio/VISTA Cam System.jpeg",
                "/portfolio/VISTA Silicone Overlay.jpeg"
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

          {/* ELECTRONICS */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Controls
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Electronics & Pipeline
              </h2>

            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700 mb-10">

              <p>
                The control system is respnsible for the actuation of all 35 servo motors to translate pixel data into physical topogrpahy using the mapping algorithm.
              </p>

            </div>

            <ul className="space-y-6 text-gray-700 leading-relaxed mb-14 text-lg">

              <li>
                <span className="font-semibold text-[#18342E]">
                  Color-to-Height Mapping:
                </span>{" "}
                Colors were converted into four distinguishable height levels to convey tactile depth: Yellow (17.5 mm), Red (9.8 mm), Blue (6.3 mm) and White (2.7 mm), allowing users to differentiate regions of an image by touch.
              </li>

              <li>
                <span className="font-semibold text-[#18342E]">
                  Distributed Servo Control:
                </span>{" "}
                Two Arduino boards were used to manage 35 servo motors (one per pin) to avoid exceeding current limits and ensure precise, independent actuation of each pin for accurate image rendering.
              </li>

            </ul>

            <div className="grid md:grid-cols-2 gap-8">

              <div className="bg-white p-4 shadow-xl">

                <img
                  src="/portfolio/vista-electronics.jpeg"
                  alt="VISTA Electronics"
                  className="w-full h-[320px] object-contain"
                />

              </div>

              <div className="bg-white p-4 shadow-xl">

                <img
                  src="/portfolio/vista-controls.jpeg"
                  alt="VISTA Controls"
                  className="w-full h-[320px] object-contain"
                />

              </div>

            </div>

          </section>

          {/* RESULTS */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Validation
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Results & Impact
              </h2>

            </div>

            <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700">

              <p>
                The VISTA prototype was validated through a “Flag Identification” study using Japan, Sweden, and Denmark flags to test shape and color recognition through touch alone.
              </p>

            </div>

            <ul className="space-y-6 text-gray-700 leading-relaxed mt-10 text-lg">

              <li>
                <span className="font-semibold text-[#18342E]">
                  Shape Recognition:
                </span>{" "}
                100% of participants correctly distinguished flags with differing geometries, such as Japan vs. Sweden.
              </li>

              <li>
                <span className="font-semibold text-[#18342E]">
                  Color Distinguishability:
                </span>{" "}
                Differentiating flags that only varied in color (Sweden vs. Denmark) was more challenging, with an initial 35% error rate. Adding a tactile legend enabled accurate mapping of pin height to color.
              </li>

              <li>
                <span className="font-semibold text-[#18342E]">
                  Tactile Encoding Feasibility:
                </span>{" "}
                Results indicate that mechanically actuated pin heights can effectively convey both shape and color, supporting accessible museum interactions.
              </li>

              <li>
                <span className="font-semibold text-[#18342E]">
                  Future Potential:
                </span>{" "}
                Establishes a foundation for higher-resolution tactile displays capable of representing more complex artworks in future iterations.
              </li>

            </ul>

          </section>

          {/* VIDEOS */}
          <section>

            <div className="mb-10">

              <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                Media
              </p>

              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-[#18342E]">
                Demo Videos
              </h2>

            </div>

            <div className="grid lg:grid-cols-2 gap-10">

              <div className="bg-white shadow-xl overflow-hidden">

                <video
                  className="w-full h-80 object-contain bg-black"
                  controls
                  muted
                  loop
                  playsInline
                >
                  <source src="/portfolio/vista-japan.mp4" type="video/mp4" />
                </video>

                <div className="p-6">

                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-2">
                    Japan Flag
                  </h3>

                  <p className="text-gray-600">
                    Shape-based tactile rendering (circle vs background)
                  </p>

                </div>

              </div>

              <div className="bg-white shadow-xl overflow-hidden">

                <video
                  className="w-full h-80 object-contain bg-black"
                  controls
                  muted
                  loop
                  playsInline
                >
                  <source src="/portfolio/vista-cam.mp4" type="video/mp4" />
                </video>

                <div className="p-6">

                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#18342E] mb-2">
                    Cam and Pin System
                  </h3>

                  <p className="text-gray-600">
                    Demonstration of cam and pin system
                  </p>

                </div>

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
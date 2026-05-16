import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Portfolio() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(70);

  const roles = [
    "Student",
    "Robotics Engineer",
    "CAD Prototyper",
    "Machine Shop Enthusiast",
    "Mechatronics Engineer",
    "Haptic Interface Designer",
    "Outdoors Enthusiast"
  ];

  const projects = [
    { 
      id: 1,
      title: "VISTA - Haptic Museum Display", 
      subtitle: "Visual Information through Sensory Tactile Array (VISTA) designed for museum display accessibility", 
      image: "/portfolio/vista-cad-v1.jpeg",
      skills: ["Fusion 360", "Arduino", "Python", "Haptic Research"],
      description: "Tactile pin-based museum display to create refreshable images, and explore the relationship between haptic feedback to shape and color.",
      slug: "vista-tactile-display",
    },

    { 
      id: 2,
      title: "Autonomous Maze-Solving Rover", 
      subtitle: "Autonomous localization and block retrieval in predefined maze environment", 
      image: "/portfolio/autonomous-rover-cad.jpeg",
      skills: ["SolidWorks", "Arduino", "Python", "Autonomous Systems"],
      description: "Orientation, localization, object pick-up and drop-off to designated spot with full maze navigation in 5 minutes.",
      slug: "autonomous-rover"
    },

    {
      id: 3,
      title: "Capstone Tailgate System",
      subtitle: "Purely mechanical design of a 2-in-1 multifunction tailgate for Ford F-150",
      image: "/portfolio/tailgate-cad.png",
      skills: ["SolidWorks", "ANSYS FEA", "Machine Shop", "Mechanical Design"],
      description: "Design and prototyping of a 2-in-1 multifunction tailgate system.",
      slug: "capstone-tailgate",
    },

    // KEEP ALL YOUR COMMENTED OUT PROJECTS HERE
  ];

  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(window.scrollY > 50);

      const sections = ['about me', 'projects', 'contact'];

      for (let section of sections) {

        const element = document.getElementById(section);

        if (element) {

          const rect = element.getBoundingClientRect();

          if (rect.top <= 200) {
            setActiveSection(section);
          }
        }
      }

      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  useEffect(() => {

    const handleTyping = () => {

      const currentRole = roles[loopNum % roles.length];
      const isComplete = typedText === currentRole;

      if (!isDeleting && isComplete) {

        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }

      if (isDeleting && typedText === '') {

        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(70);
        return;
      }

      if (isDeleting) {

        setTypedText(currentRole.substring(0, typedText.length - 1));
        setTypingSpeed(50);

      } else {

        setTypedText(currentRole.substring(0, typedText.length + 1));
        setTypingSpeed(70);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);

  }, [typedText, isDeleting, loopNum, typingSpeed]);

  const scrollToSection = (id) => {

    const element = document.getElementById(id);

    if (element) {

      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  return (

    <div className="min-h-screen bg-[#F5F3EE] text-gray-900 font-sans overflow-x-hidden">

      {/* NAVIGATION */}
      {isScrolled && (

        <>
          <nav className="fixed top-0 w-full z-50 bg-[#F5F3EE]/95 backdrop-blur-md border-b border-[#D9D3C7]">

            <div className="max-w-7xl mx-auto px-6 lg:px-10">

              <div className="flex justify-between items-center h-16">

                {/* LEFT */}
                <div className="text-2xl font-bold tracking-tight font-['Cormorant_Garamond'] text-[#18342E]">
                  Yvonne Zhang
                </div>

                {/* CENTER */}
                <div className="hidden md:flex space-x-10">

                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-sm uppercase tracking-[0.2em] text-gray-700 hover:text-[#2A5C52] transition-colors"
                  >
                    Home
                  </button>

                  <button
                    onClick={() => scrollToSection('about me')}
                    className="text-sm uppercase tracking-[0.2em] text-gray-700 hover:text-[#2A5C52] transition-colors"
                  >
                    About
                  </button>

                  <button
                    onClick={() => scrollToSection('projects')}
                    className="text-sm uppercase tracking-[0.2em] text-gray-700 hover:text-[#2A5C52] transition-colors"
                  >
                    Projects
                  </button>

                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-sm uppercase tracking-[0.2em] text-gray-700 hover:text-[#2A5C52] transition-colors"
                  >
                    Contact
                  </button>

                </div>

                {/* RIGHT */}
                <a
                  href="/portfolio/YvonneZhang_CV_Jan2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:block text-sm uppercase tracking-[0.2em] text-gray-700 hover:text-[#2A5C52] transition-colors"
                >
                  Resume
                </a>

                {/* MOBILE */}
                <button
                  className="md:hidden text-[#18342E]"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

              </div>
            </div>
          </nav>

          {/* MOBILE MENU */}
          {isMenuOpen && (

            <div className="fixed top-16 left-0 w-full bg-[#F5F3EE] border-b border-[#D9D3C7] shadow-lg z-40 md:hidden">

              <div className="flex flex-col p-6 space-y-6">

                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-left uppercase tracking-[0.2em] text-gray-700"
                >
                  Home
                </button>

                <button
                  onClick={() => scrollToSection('about me')}
                  className="text-left uppercase tracking-[0.2em] text-gray-700"
                >
                  About
                </button>

                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-left uppercase tracking-[0.2em] text-gray-700"
                >
                  Projects
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-left uppercase tracking-[0.2em] text-gray-700"
                >
                  Contact
                </button>

              </div>
            </div>
          )}
        </>
      )}

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">

        {/* BACKGROUND */}
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

        {/* CONTENT */}
        <div className="relative z-10 min-h-screen flex items-center px-6 sm:px-10 lg:px-20">

          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}
            <div className="text-white">

              <p className="uppercase tracking-[0.35em] text-sm mb-8 text-blue-100 font-medium">
                Robotics • Mechanical Design • Research
              </p>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl leading-[0.9] mb-10 font-['Cormorant_Garamond']">
                Yvonne
                <br />
                Zhang
              </h1>

              <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed max-w-xl mb-10 font-light">
                Designing autonomous systems and human-centered engineering experiences through robotics, prototyping, and research.
              </p>

              <div className="text-2xl sm:text-3xl mb-12 font-semibold">

                <span className="text-white/90">
                  I am a
                </span>

                <span className="text-blue-200 ml-3">
                  {typedText}
                </span>

                <span className="animate-pulse">
                  |
                </span>

              </div>

              <button
                onClick={() => scrollToSection('about me')}
                className="group flex items-center gap-5 text-blue-100 hover:text-white transition-colors"
              >

                <span className="uppercase tracking-[0.3em] text-sm">
                  See More
                </span>

                <div className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center group-hover:translate-y-1 transition-transform">
                  <ChevronDown size={20} />
                </div>

              </button>

            </div>

            {/* RIGHT */}
            <div className="relative hidden lg:flex justify-center items-center min-h-[620px]">

              <div className="relative w-[520px] h-[520px]">

                {/* ABOUT */}
                <button
                  onClick={() => scrollToSection('about me')}
                  className="absolute top-0 left-10 bg-white p-3 shadow-2xl rotate-[-8deg] w-48 hover:scale-105 transition-all duration-300 cursor-pointer"
                >

                  <img
                    src="/portfolio/Banff_lakelouise.jpg"
                    alt=""
                    className="w-full h-52 object-cover"
                  />

                  <p className="text-center mt-3 text-sm tracking-wide text-gray-700">
                    About Me
                  </p>

                </button>

                {/* PROJECTS */}
                <button
                  onClick={() => scrollToSection('projects')}
                  className="absolute top-20 right-0 bg-white p-3 shadow-2xl rotate-[6deg] w-52 hover:scale-105 transition-all duration-300 cursor-pointer"
                >

                  <img
                    src="/portfolio/vista-cad-v1.jpeg"
                    alt=""
                    className="w-full h-56 object-cover"
                  />

                  <p className="text-center mt-3 text-sm tracking-wide text-gray-700">
                    Projects
                  </p>

                </button>

                {/* ROBOTICS */}
                <button
                  onClick={() => scrollToSection('projects')}
                  className="absolute bottom-12 left-0 bg-white p-3 shadow-2xl rotate-[4deg] w-52 hover:scale-105 transition-all duration-300 cursor-pointer"
                >

                  <img
                    src="/portfolio/autonomous-rover-cad.jpeg"
                    alt=""
                    className="w-full h-56 object-cover"
                  />

                  <p className="text-center mt-3 text-sm tracking-wide text-gray-700">
                    Robotics
                  </p>

                </button>

                {/* CONTACT */}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="absolute bottom-0 right-8 bg-white p-3 shadow-2xl rotate-[-5deg] w-48 hover:scale-105 transition-all duration-300 cursor-pointer"
                >

                  <img
                    src="/portfolio/tailgate-cad.png"
                    alt=""
                    className="w-full h-52 object-cover"
                  />

                  <p className="text-center mt-3 text-sm tracking-wide text-gray-700">
                    Contact
                  </p>

                </button>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about me" className="py-32 px-6 lg:px-10 bg-[#F5F3EE]">

        <div className="max-w-6xl mx-auto">

          <div className="mb-20">

            <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-4">
              About
            </p>

            <h2 className="text-5xl md:text-6xl font-['Cormorant_Garamond'] text-[#18342E]">
              Engineering Through
              <br />
              Curiosity & Iteration
            </h2>

          </div>

          <div className="grid lg:grid-cols-[320px_1fr] gap-20 items-start">

            <div className="flex flex-col items-center">

              <div className="w-72 aspect-square overflow-hidden shadow-2xl border-[10px] border-white rotate-[-3deg]">

                <img 
                  src="/portfolio/YvonneZhang_Profile.jpg" 
                  alt="Yvonne Zhang"
                  className="w-full h-full object-cover"
                />

              </div>

              <a 
                href="https://www.linkedin.com/in/yvonnezhang177" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-10 border border-[#2A5C52] px-8 py-3 uppercase tracking-[0.2em] text-sm hover:bg-[#2A5C52] hover:text-white transition-all duration-300"
              >
                Connect
              </a>

            </div>

            <div className="space-y-8 text-lg leading-relaxed text-gray-700">

              <p>
                <strong>Welcome to my portfolio.</strong> I am a Robotics and Mechanical Engineer passionate about the interdisciplinary intersection of autonomous systems development and mechanically robust solutions.
              </p>

              <p>
                As a Robotics Master's student at Johns Hopkins University, I engage in cutting-edge projects through the Laboratory for Computational Sensing and Robotics (LCSR), applying engineering approaches to haptic device development and surgical robotics.
              </p>

              <p>
                I hold an honors degree in Mechanical Engineering from the University of Toronto, with minors in Robotics & Mechatronics and Engineering Business.
              </p>

              <p>
                My work spans advanced manufacturing, finite element analysis, prototyping, robotics, and human-centered engineering systems.
              </p>

              <p>
                Curiosity guides me in everything I do — from engineering design and laboratory iteration to skiing, photography, climbing, and painting.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="py-32 px-6 lg:px-10 bg-[#EFEAE0]">

        <div className="max-w-6xl mx-auto">

          <div className="mb-20">

            <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-4">
              Education
            </p>

            <h2 className="text-5xl md:text-6xl font-['Cormorant_Garamond'] text-[#18342E]">
              Academic Background
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                image: "/portfolio/JHU_logo.png",
                title: "Johns Hopkins University",
                subtitle: "Master of Science in Robotics",
                date: "Expected June 2027"
              },

              {
                image: "/portfolio/UofT_logo.jpg",
                title: "University of Toronto",
                subtitle: "B.A.Sc. in Mechanical Engineering",
                date: "Graduated June 2025"
              },

              {
                image: "/portfolio/ETH_logo.png",
                title: "ETH Zurich Research",
                subtitle: "Undergraduate Student Researcher",
                date: "Summer 2024"
              }

            ].map((school, idx) => (

              <div
                key={idx}
                className="bg-white p-10 shadow-lg hover:-translate-y-2 transition-all duration-300"
              >

                <div className="flex justify-center mb-8">

                  <img
                    src={school.image}
                    alt=""
                    className="w-20 h-20 object-contain"
                  />

                </div>

                <h3 className="text-2xl text-center font-['Cormorant_Garamond'] text-[#18342E] mb-3">
                  {school.title}
                </h3>

                <p className="text-center text-gray-600 mb-3">
                  {school.subtitle}
                </p>

                <p className="text-center uppercase tracking-[0.15em] text-sm text-[#2A5C52]">
                  {school.date}
                </p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-32 px-6 lg:px-10 bg-[#F5F3EE]">

        <div className="max-w-7xl mx-auto">

          <div className="mb-20">

            <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-4">
              Selected Work
            </p>

            <h2 className="text-5xl md:text-6xl font-['Cormorant_Garamond'] text-[#18342E]">
              Projects & Research
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

            {projects.map((project) => (

              <Link 
                key={project.slug}
                to={`/portfolio/${project.slug}`}
                className="group bg-white overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300"
              >

                <div className="h-64 overflow-hidden bg-[#E7E1D5]">

                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                </div>

                <div className="p-8">

                  <h3 className="text-3xl font-['Cormorant_Garamond'] text-[#18342E] mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">

                    {project.skills.map((skill, idx) => (

                      <span
                        key={idx}
                        className="text-xs uppercase tracking-wide border border-[#2A5C52]/30 text-[#2A5C52] px-3 py-1"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                  <div className="flex items-center gap-2 uppercase tracking-[0.2em] text-sm text-[#2A5C52]">

                    View Project

                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />

                  </div>

                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 lg:px-10 bg-[#18342E] text-white">

        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[0.35em] text-sm text-blue-100 mb-4">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-['Cormorant_Garamond'] mb-10">
            Let's Connect!
          </h2>

          <p className="text-xl text-blue-100 mb-12">
            Interested in talking about robotics, engineering collaboration, or research opportunities?
          </p>

          <a
            href="mailto:yzhan874@jh.edu"
            className="inline-block border border-white px-10 py-4 uppercase tracking-[0.25em] text-sm hover:bg-white hover:text-[#18342E] transition-all duration-300 mb-14"
          >
            yzhan874@jh.edu
          </a>

          <div className="flex justify-center gap-8">

            <a
              href="https://www.linkedin.com/in/yvonnezhang177"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Linkedin size={30} />
            </a>

            <a
              href="https://github.com/yvonne177"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Github size={30} />
            </a>

            <a
              href="mailto:yzhan874@jh.edu"
              className="hover:scale-110 transition-transform"
            >
              <Mail size={30} />
            </a>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-[#102521] text-center text-gray-400 text-sm tracking-wide">

        © 2026 Yvonne Zhang

      </footer>

    </div>
  );
}
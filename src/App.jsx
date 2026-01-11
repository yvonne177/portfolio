import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Menu, X, ExternalLink, Download, Code, Cpu, Wrench, Camera, Car, Hand, Bot, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'

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
      title: "Visual Information through Sensory Tactile Array (VISTA)", 
      subtitle: "Tactile museum display for accessibility", 
      color: "from-pink-400 to-pink-600",
      image: "/portfolio/vista-cad-v1.jpeg",
      skills: ["Mechatronics", "Hardware Design", "Haptic Feedback"],
      description: "Tactile pin-based museum display to create refreshable images, and explore the relationship between haptic feedback to shape and color.",
      slug: "vista-tactile-display",
    },
    { 
      id: 2,
      title: "Autonomous Rover Design Challenge", 
      subtitle: "Complete maze navigation", 
      color: "from-blue-400 to-blue-600",
      image: "/portfolio/autonomous-rover-cad.jpeg",
      skills: ["ROS2", "Python", "Autonomous Systems"],
      description: "Orientation, localization, object pick-up and drop-off to designated spot with full maze navigation in 5 minutes.",
      slug: "autonomous-rover"
    },
    { 
      id: 3,
      title: "Stereotactic Navigation System", 
      subtitle: "Medical image registration for surgical guidance through advanced 3D geometry and signal processing", 
      color: "from-blue-400 to-blue-600",
      image: "/portfolio/pa3-icp.jpg",
      skills: ["Computational Geometry", "Image Registration", "Algorithm Design"],
      description: "Computer-Integrated Surgery applications exploring robotic control and surgical workflow integration.",
      slug: "stereotactic-navigation-system"
    },
    // { 
    //   id: 4,
    //   title: "UR5e Robotic Arm Controls", 
    //   subtitle: "Inverse kinematics and RTDE in ROS", 
    //   color: "from-purple-400 to-purple-600",
    //   image: "/portfolio/Banff_lakelouise.jpg",
    //   skills: ["ROS2", "Inverse Kinematics", "RTDE", "Python"],
    //   description: "Developed advanced control algorithms for UR5e robotic arm using inverse kinematics and real-time data exchange in ROS environment.",
    //   slug: "ur5e-controls"
    // },
    // { 
    //   id: 5,
    //   title: "Hand Tracking System", 
    //   subtitle: "ROS2 + MediaPipe integration", 
    //   color: "from-purple-400 to-purple-600",
    //   image: "/portfolio/Banff_lakelouise.jpg",
    //   skills: ["MediaPipe", "ROS2", "OpenCV", "Python"],
    //   description: "Developed a real-time hand gesture recognition and tracking system using computer vision for robotic control.",
    //   slug: "hand-tracking"
    // },
    // { 
    //   id: 6,
    //   title: "Window Cable Tensioner", 
    //   subtitle: "Magna International collaboration", 
    //   color: "from-blue-400 to-blue-600",
    //   image: "/portfolio/Banff_lakelouise.jpg",
    //   skills: ["SolidWorks", "FEA", "Manufacturing"],
    //   description: "Designed and prototyped a precision cable tensioning mechanism for automotive applications in collaboration with Magna International.",
    //   slug: "window-cable-tensioner"
    // },
    // { 
    //   id: 7,
    //   title: "Microchannel Heat Sinks via Advanced Manufacturing", 
    //   subtitle: "Laser Powder Bed Fusion with Al-Graphene composite", 
    //   color: "from-orange-400 to-orange-600",
    //   image: "/portfolio/Banff_lakelouise.jpg",
    //   skills: ["ANSYS CFD", "Advanced Manufacturing", "FEA", "Materials Science"],
    //   description: "Research paper on optimized microchannel heat sinks utilizing Laser Powder Bed Fusion with Aluminum-Graphene material composite and Boron Nitride coating for enhanced thermal performance.",
    //   slug: "microchannel-heat-sinks"
    // },
    // { 
    //   id: 8,
    //   title: "Train Fire Spread Thermal Characterization", 
    //   subtitle: "Material testing methodology for CFD boundary conditions", 
    //   color: "from-red-400 to-red-600",
    //   image: "/portfolio/Banff_lakelouise.jpg",
    //   skills: ["Material Testing", "CFD Modeling", "ANSYS", "Data Analysis"],
    //   description: "Authored a new methodology for characterizing thermal properties of train fire spread through material testing results. Influenced determining boundary conditions of CFD models adopted within three upcoming mass transportation projects.",
    //   slug: "train-fire-characterization"
    // },
  ];

  useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
    
    // Track active section
    const sections = ['about', 'projects', 'contact'];
    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 200) {
          setActiveSection(section);
        }
      }
    }
    
    // Reset to home if at top
    if (window.scrollY < 100) {
      setActiveSection('home');
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a 
            href="/portfolio/Yvonne_Zhang_CV_Jan_2026_ver_.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
          >
            Resume
          </a>
            
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  if (item === 'Home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    scrollToSection(item.toLowerCase());
                  }
                }}
                className={`hover:text-blue-600 transition-colors font-medium ${activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-700'}`}
              >
                {item}
              </button>
            ))}
          </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    if (item === 'Home') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      scrollToSection(item.toLowerCase());
                    }
                  }}
                  className="block w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md text-gray-700"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative">
        {/* Full-width image - taller on mobile */}
        <div className="relative w-full h-96 sm:h-[500px] md:h-[600px]">
          <img
            src="/portfolio/Banff_lakelouise.jpg"
            alt="Lake Louise"
            className="w-full h-full object-cover"
          />

          {/* Overlay content */}
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-end px-4 pb-8 sm:pb-12 md:pb-16">
            <div className="text-center">
              {/* Main heading */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4 sm:mb-6 md:mb-8 leading-tight">
                Hi, I'm <span className="text-blue-500">Yvonne Zhang</span>
              </h1>

              {/* Subtitle */}
              <p className="text-2xl sm:text-2xl md:text-3xl text-white font-semibold drop-shadow-lg mb-4 sm:mb-6 md:mb-8">
                I am a <span className="text-blue-200">{typedText}</span>
                <span className="animate-pulse">|</span>
              </p>

              {/* Tagline */}
              <h2 className="text-sm sm:text-base md:text-lg text-white drop-shadow-lg">
                Curiosity-driven engineering through design, testing, and iteration.
              </h2>
            </div>
          </div>
        </div>

        {/* Scroll Down Arrow - part of hero section */}
        <div className="flex justify-center pt-12 pb-9 bg-white">
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce cursor-pointer"
            aria-label="Scroll to About section"
          >
            <ChevronDown size={32} className="text-gray-400 hover:text-gray-600 transition-colors" />
          </button>
        </div>
      </section>

    {/* About Section */}
      <section id="about" className="pt-4 px-4 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">About</h2>
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex flex-col items-center flex-shrink-0 order-first lg:order-none w-full lg:w-auto">
            <div className="w-56 aspect-square rounded-2xl overflow-hidden border-4 border-gray-100 shadow-xl">
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
                className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
            >
                Connect with me!
            </a>
            </div>
            <div className="space-y-6 w-full order-last lg:order-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                <strong>Welcome to my portfolio!</strong> I am a Robotics and Mechanical Engineer passionate about the interdisciplinary intersection of autonomous systems development and mechanically robust solutions. My portfolio showcases projects spanning mechatronics, robotics, and medical device engineering.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                As a Robotics Master's student at Johns Hopkins University, I engage in cutting-edge projects through the Laboratory for Computational Sensing and Robotics (LCSR), applying engineering, scientific, and approaches to areas including haptic device development and surgical robotics. 
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                I hold an honors degree in Mechanical Engineering from the University of Toronto, with minors in Robotics & Mechatronics and Engineering Business. My foundation lies in rigorous mechanical design, leveraging Finite Element Analysis (FEA), Computational Fluid Dynamics (CFD) and advanced manufacturing (AM) techniques across the rail and transit, aerospace, electronics and biomedical sectors. I also conducted research at ETH Zurich's Product Development Group, designing surgical-assistance robotic end-effector mounts that interface with depth-sensing cameras to interpret hand gestures and translate them into coordinated robotic actions.              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Curiosity guides me in everything I do: iterating on designs in the lab, tackling new projects, or seeking adventure outdoors through skiing and rock climbing or in the arts through photography and painting.
              </p>
            </div>
          </div>
        </div>
      </section>

    {/* Education */}
    <section className="pt-24 pb-25 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Education</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="mb-4 mx-auto flex justify-center">
            <img 
                src="\portfolio\JHU_logo.png"
                alt="JHU Logo"
                className="w-20 h-20 object-contain"
            />
            </div>
              <h3 className="text-xl font-bold text-center mb-2 text-gray-900">Johns Hopkins University</h3>
              <p className="text-center text-gray-600 mb-2">Master of Science in Robotics</p>
              <p className="text-center text-sm text-blue-600 font-semibold">Expected June 2027</p>
              <div className="mt-4 text-center">
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="mb-4 mx-auto flex justify-center">
            <img 
                src="\portfolio\UofT_logo.jpg"
                alt="University of Toronto logo"
                className="w-20 h-20 object-contain"
            />
            </div>
              <h3 className="text-xl font-bold text-center mb-2 text-gray-900">University of Toronto</h3>
              <p className="text-center text-gray-600 mb-2">B.A.Sc. in Mechanical Engineering</p>
              <p className="text-center text-sm text-blue-600 font-semibold">Graduated June 2025</p>
              <div className="mt-4 text-center">
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="mb-4 mx-auto flex justify-center">
            <img 
                src="\portfolio\ETH_logo.png"
                alt="ETH Zurich Logo"
                className="w-20 h-20 object-contain"
            />
            </div>
              <h3 className="text-xl font-bold text-center mb-2 text-gray-900">ETH Zurich Research</h3>
              <p className="text-center text-gray-600 mb-2">Undergraduate Student Researcher</p>
              <p className="text-center text-sm text-blue-600 font-semibold">Summer 2024</p>
              <div className="mt-4 text-center">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">Projects</h2>
          <p className="text-center text-gray-600 mb-8 text-base">
            Explore my work across robotics, mechanical engineering, and design.
          </p>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {projects.map((project) => (
              <Link 
                key={project.slug}
                to={`/portfolio/${project.slug}`}
                className="group cursor-pointer overflow-hidden rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 block flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-gray-200 flex items-center justify-center flex-shrink-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Content Container */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{project.subtitle}</p>
                    
                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skills.map((skill, idx) => (
                        <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <span className="text-blue-600 text-sm font-medium flex items-center gap-2 group-hover:text-blue-700 transition-colors">
                    View Project
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Contact Me</h2>          
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 inline-block">
            <div className="mb-6">
              <a href="mailto:yzhan874@jh.edu" className="text-lg text-gray-900 hover:text-blue-600 font-medium">
                yzhan874@jh.edu
              </a>
            </div>
            <div className="flex gap-6 justify-center">
              <a href="https://www.linkedin.com/in/yvonnezhang177" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors text-gray-700">
                <Linkedin size={32} />
              </a>
              <a href="https://github.com/yvonne177" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors text-gray-700">
                <Github size={32} />
              </a>
              <a href="mailto:yzhan874@jh.edu" className="hover:text-blue-600 transition-colors text-gray-700">
                <Mail size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-200 bg-gray-50">
        <p>© 2025 Yvonne Zhang.</p>
      </footer>
    </div>
  );
}
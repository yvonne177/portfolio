import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Menu, X, ExternalLink, Download, Code, Cpu, Wrench, Camera, Car, Hand, Bot } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(70);

  const roles = [
    "Student",
    "Robotics Engineer",
    "Mechatronics Engineer",
    "CAD Prototyper",
    "Haptic Interface Designer",
    "Outdoors Enthusiast"
  ];

  const experienceSlides = [
    { title: "Haptic Display Device", icon: "👆", description: "Tactile display for visually impaired" },
    { title: "Arduino Integration", icon: "🔌", description: "Real-time haptic control systems" },
    { title: "3D Printing & Molding", icon: "🖨️", description: "Pin-array mechanism prototyping" },
    { title: "Computer Vision System", icon: "📷", description: "Dual RealSense camera integration" },
    { title: "ROS2 Development", icon: "🤖", description: "Image processing & gesture recognition" },
    { title: "Research Publication", icon: "📄", description: "Foundational thesis work" },
    { title: "CFD Analysis", icon: "💨", description: "Aerodynamic optimization" },
    { title: "Carbon Fiber Fabrication", icon: "🏎️", description: "Vacuum infusion process" },
  ];

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % experienceSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + experienceSlides.length) % experienceSlides.length);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a 
            href="/portfolio/Yvonne_Zhang_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
          >
            Resume
          </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
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
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
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
      <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        
        {/* Full-width image with text overlay */}
        <div className="relative w-full h-96 md:h-[600px] mb-12">
          <img 
            src="/portfolio/Banff_lakelouise.jpg" 
            alt="Lake Louise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-end py-8 px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
                Hi, I'm <span className="text-blue-600">Yvonne Zhang</span>
              </h1>
              <p className="text-2xl md:text-4xl text-white font-semibold drop-shadow-lg px-4">
                I am a <span className="text-blue-300">{typedText}</span>
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center max-w-4xl mx-auto px-4">
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed text-justify -mt-8">
            I am inspired to design and build intelligent systems that bridge the physical and digital worlds.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="https://www.linkedin.com/in/yvonnezhang177"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md inline-block"
            >
              CONNECT WITH ME!
            </a>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">About</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                I am a robotics engineer with expertise in haptic interface design, computer vision, and autonomous systems development. My work focuses on creating accessible technology and advancing human-robot interaction.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                I earned my Bachelor's degree in Mechanical Engineering from the University of Toronto with minors in Robotics & Mechatronics and Engineering Business. Currently pursuing my Master's in Robotics at Johns Hopkins University, I conducted research at ETH Zurich's Product Development Group and contributed to competitive racing vehicle design.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                When I'm not building robots or optimizing systems, you can find me exploring new technologies, working on personal projects, or contributing to open-source robotics initiatives.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-square rounded-2xl overflow-hidden border-4 border-gray-100 shadow-xl">
                <img 
                  src="/portfolio/YvonneZhang_Profile.jpg" 
                  alt="Yvonne Zhang"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section with Carousel */}
      <section id="experience" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">Johns Hopkins University</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">2025 to Present</p>
          
          {/* Carousel */}
          <div className="relative mb-20">
            <div className="overflow-hidden rounded-xl">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {experienceSlides.map((slide, idx) => (
                  <div key={idx} className="min-w-full">
                    <div className="bg-white rounded-xl p-12 mx-2 border border-gray-200 flex flex-col items-center justify-center" style={{ minHeight: '400px' }}>
                      <div className="text-8xl mb-6">{slide.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{slide.title}</h3>
                      <p className="text-gray-600 text-center text-lg">{slide.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors border border-gray-200"
            >
              <ChevronDown size={24} className="rotate-90 text-gray-700" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors border border-gray-200"
            >
              <ChevronDown size={24} className="-rotate-90 text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {experienceSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
            At Johns Hopkins University, I work on haptic interface design for accessibility, developing tactile displays that convert visual art into interactive textured surfaces. At ETH Zurich, I integrated computer vision systems with robotic arms using ROS2. With University of Toronto Formula Racing, I optimized aerodynamics through CFD analysis and manufactured carbon fiber components for high-performance racing.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Education</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-gray-900">Johns Hopkins University</h3>
              <p className="text-center text-gray-600 mb-2">Master of Science in Robotics</p>
              <p className="text-center text-sm text-blue-600 font-semibold">Expected June 2027</p>
              <div className="mt-4 text-center">
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-gray-900">ETH Zurich Research</h3>
              <p className="text-center text-gray-600 mb-2">Undergraduate Student Researcher</p>
              <p className="text-center text-sm text-blue-600 font-semibold">Summer 2024</p>
              <div className="mt-4 text-center">
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-gray-900">University of Toronto</h3>
              <p className="text-center text-gray-600 mb-2">B.A.Sc. in Mechanical Engineering</p>
              <p className="text-center text-sm text-blue-600 font-semibold">Graduated June 2025</p>
              <div className="mt-4 text-center">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*{/* Publications
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Publications</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-6xl">📄</span>
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-blue-600 mb-2">ETH Zurich</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Computer Vision for Hand Tracking on Robotic Manipulators</h3>
                <p className="text-sm text-gray-600 mb-4">Research Paper, 2024</p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-2">
                  View Publication <ExternalLink size={16} />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-6xl">👆</span>
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-blue-600 mb-2">Johns Hopkins University</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Haptic Interface Design for Visual Art Accessibility</h3>
                <p className="text-sm text-gray-600 mb-4">Course Project, 2025</p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-2">
                  View Publication <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Projects */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Autonomous Rover Navigation", subtitle: "Complete maze navigation in 5 minutes", icon: "🤖", color: "from-blue-400 to-blue-600" },
              { title: "Window Cable Tensioner", subtitle: "Magna International collaboration", icon: "🚗", color: "from-blue-400 to-blue-600" },
              { title: "Hand Tracking System", subtitle: "ROS2 + MediaPipe integration", icon: "👁️", color: "from-purple-400 to-purple-600" },
              { title: "Formula Racing Aero", subtitle: "CFD optimization & carbon fiber", icon: "🏎️", color: "from-green-400 to-green-600" },
              { title: "Haptic Display Device", subtitle: "Tactile art for accessibility", icon: "👆", color: "from-pink-400 to-pink-600" },
              { title: "ROS2 Vision Pipeline", subtitle: "Real-time depth & gesture recognition", icon: "📷", color: "from-orange-400 to-orange-600" },
            ].map((project, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all hover:transform hover:-translate-y-1 cursor-pointer">
                <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <span className="text-5xl">{project.icon}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1 text-gray-900">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{project.subtitle}</p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Code size={32} />, title: "Python, C, C++", subtitle: "Programming Languages" },
              { icon: "📊", title: "MATLAB, Excel", subtitle: "Data Analysis" },
              { icon: <Cpu size={32} />, title: "Arduino, ROS2", subtitle: "Embedded Systems" },
              { icon: <Wrench size={32} />, title: "SolidWorks, ANSYS", subtitle: "CAD & Analysis" },
              { icon: <Camera size={32} />, title: "MediaPipe, OpenCV", subtitle: "Computer Vision" },
              { icon: "🔬", title: "CFD, FEA", subtitle: "Simulation" },
              { icon: "🖨️", title: "3D Printing, Manual Machining Skills", subtitle: "Rapid Prototyping" },
              { icon: "🎨", title: "FIGMA", subtitle: "UI/UX Design" },
            ].map((skill, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow text-center">
                <div className="flex justify-center mb-3 text-blue-600">
                  {typeof skill.icon === 'string' ? <span className="text-4xl">{skill.icon}</span> : skill.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{skill.title}</h3>
                <p className="text-xs text-gray-500">{skill.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Contact</h2>
          <p className="text-2xl text-gray-900 font-semibold mb-12">Let's chat about robots!</p>
          
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 inline-block">
            <div className="mb-6">
              <a href="mailto:yzhan874@jh.edu" className="text-lg text-gray-900 hover:text-blue-600 font-medium">
                yzhan874@jh.edu
              </a>
            </div>
            <div className="flex gap-6 justify-center">
              <a href="www.linkedin.com/in/yvonnezhang177" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors text-gray-700">
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
        <p>© 2025 Yvonne Zhang. Designed with passion for robotics.</p>
      </footer>
    </div>
  );
}
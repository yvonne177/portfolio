import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Portfolio() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(70);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const roles = [
    "Student",
    "Robotics Engineer",
    "CAD Prototyper",
    "Machine Shop Enthusiast",
    "Mechatronics Engineer",
    "Haptic Interface Designer",
    "Outdoors Enthusiast"
  ];

  const categories = [
    "All",
    "Robotics",
    "Mechanical Design",
    "Controls",
    "Electronics",
    "Research",
  ];

  const projects = [
    {
      title: "Autonomous Bleeding Control",
      subtitle:
        "Perfused hydrogel kidney phantom platform and vision-based perception pipeline for autonomous bleeding detection in partial nephrectomy.",
      image: "/portfolio/lpn-1.jpg",
      skills: ["SolidWorks", "Surgical Robotics"],
      categories: ["Robotics", "Research"],
      slug: "autonomous-bleed-control",
    },

    {
      title: "VISTA - Haptic Museum Display",
      subtitle:
        "Visual Information through Sensory Tactile Array for museum display accessibility.",
      image: "/portfolio/vista-cad-v1.jpeg",
      skills: ["Fusion 360", "Arduino", "Python"],
      categories: ["Mechanical Design", "Research"],
      slug: "vista-tactile-display",
    },

    {
      title: "Robot Localization Foundations",
      subtitle:
        "Implemented probabilistic localization systems Extended Kalman Filter and Particle Filter.",
      image: "/portfolio/ekf-localization.png",
      skills: ["C++ / ROS2", "Probabilistic Inference"],
      categories: ["Robotics", "Controls"],
      slug: "robot-localization",
    },

    {
      title: "UR5 Manipulation Foundations",
      subtitle:
        "Built the mathematical foundations for autonomous robot manipulation: kinematics, hand-eye calibration, and collision-free path planning.",
      image: "/portfolio/car_mesh.png",
      skills: ["C++ / ROS2", "Simulation to Hardware"],
      categories: ["Robotics", "Controls"],
      slug: "ur5-manipulation",
    },

    {
      title: "UR5e Robotic Arm Controls",
      subtitle:
        "Comparison of Resolved-Rate and Inverse Kinematics control methods for a UR5e manipulator Push-and-Place task.",
      image: "/portfolio/rdkdc-ur5e.png",
      skills: ["MATLAB", "ROS2", "Kinematics", "Controls"],
      categories: ["Robotics", "Controls"],
      slug: "ur5e-controls",
    },

    {
      title: "Stereotactic Navigation System",
      subtitle:
        "Developed a surgical navigation pipeline for solving rigid-body registration, EM distortion correction, and surface alignment.",
      image: "/portfolio/pa3-icp.jpg",
      skills: ["MATLAB", "Linear Algebra", "Algorithm Design"],
      categories: ["Robotics"],
      slug: "computer-integrated-surgery",
    },

    {
      title: "Hapkit Bilateral Teleoperation",
      subtitle:
        "Dual-Hapkit bilateral teleoperation system implementing position exchange, position scaling, and force scaling.",
      image: "/portfolio/hapkit.png",
      skills: ["Arduino / C++", "PD Control", "Force Feedback"],
      categories: ["Robotics", "Controls"],
      slug: "hapkit",
    },

    {
      title: "World Models in Autonomous Driving",
      subtitle:
        "Controlled comparison of TD-MPC2 and DreamerV3 in CARLA examining sample-efficient learning and safety-relevant decision.",
      image: "/portfolio/carla-world-model.png",
      skills: ["World Models", "Reinforcement Learning"],
      categories: ["Robotics", "Research"],
      slug: "world-model-driving",
    },

    {
      title: "Autonomous Maze-Solving Rover",
      subtitle:
        "Autonomous localization and block retrieval in predefined maze environment.",
      image: "/portfolio/autonomous-rover-cad.jpeg",
      skills: ["SolidWorks", "Arduino", "Python"],
      categories: ["Robotics", "Mechanical Design", "Electronics"],
      slug: "autonomous-rover",
    },

    {
      title: "Hand Tracking Surgical Robotic Assistance System",
      subtitle:
        "ROS2 + MediaPipe integration developed for real-time hand gesture recognition and tracking system using computer vision for robotic control.",
      image: "/portfolio/franka-dual-mount.png",
      skills: ["SolidWorks", "Computer Vision", "ROS2", "Python"],
      categories: ["Robotics", "Research"],
      slug: "hand-tracking-assistance",
    },

    {
      title: "Capstone Tailgate System",
      subtitle:
        "Purely mechanical design of a 2-in-1 multifunction tailgate for Ford F-150.",
      image: "/portfolio/tailgate-cad.png",
      skills: ["SolidWorks", "ANSYS FEA", "Machine Shop"],
      categories: ["Mechanical Design"],
      slug: "capstone-tailgate",
    },

    {
      title: "Microchannel Heat Sinks via Advanced Manufacturing",
      subtitle:
        "Developed a manufacturing concept for a graphene-enhanced micro pin fin heat sink.",
      image: "/portfolio/heatsink-pinfin-design.png",
      skills: [
        "Advanced Manufacturing",
        "Materials Engineering",
        "Thermal Design",
      ],
      categories: ["Research"],
      slug: "microchannel-heat-sinks",
    },

    {
      title: "Desktop CNC Milling Machine Design",
      subtitle:
        "Conceptual design and simulation of a desktop CNC milling machine for precision prototyping applications.",
      image: "/portfolio/cnc-milling-render.png",
      skills: [
        "Mechanical Design",
        "Mechanism Selection",
        "CAD / SolidWorks",
      ],
      categories: ["Mechanical Design"],
      slug: "desktop-cnc-design",
    },

    {
      title: "Automated Chair Caster Assembly System",
      subtitle:
        "Fully automated mass-production workcell for assembling 2-inch chair casters, covering sorting, orientation, positioner design, fixturing, and quality control.",
      image: "/portfolio/castor-wheel-assembly.png",
      skills: ["Manufacturing", "Cost Analysis"],
      categories: ["Mechanical Design"],
      slug: "castor-wheel-assembly",
    },

    {
      title: "Oscilloscope PCB Design",
      subtitle:
        "Design and simulation of an oscilloscope PCB for signal analysis and measurement applications.",
      image: "/portfolio/oscilloscope-pcb-output.png",
      skills: ["Eagle CAD", "PCB Layout", "Circuit Simulation"],
      categories: ["Electronics"],
      slug: "oscilloscope-pcb-design",
    },

    {
      title: "Machine Shop: Pneumatic Air Pump Cylinder",
      subtitle:
        "Introductory machine shop course culminating in machining a working pneumatic air pump cylinder motor by hand using lathe, mill, and drill press.",
      image: "/portfolio/machineshop-cylinder.png",
      skills: ["Lathe", "Mill", "Drill Press", "Shop Safety"],
      categories: ["Mechanical Design"],
      slug: "machineshop-cylinder",
    },

    {
      title: "Offset Gearbox Design",
      subtitle:
        "Conceptual design to 3D printing of an offset gearbox for automotive applications.",
      image: "/portfolio/gearbox-casing.png",
      skills: ["SolidWorks", "CAD", "3D Printing"],
      categories: ["Mechanical Design"],
      slug: "offset-gearbox-design",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(project =>
          project.categories.includes(selectedCategory)
        );

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
                <div className="text-2xl font-bold tracking-tight font-['Cormorant_Garamond'] text-[#18342E]">
                  Yvonne Zhang
                </div>
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
                <a
                  href="/portfolio/YvonneZhang_CV_Jan2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:block text-sm uppercase tracking-[0.2em] text-gray-700 hover:text-[#2A5C52] transition-colors"
                >
                  Resume
                </a>
                <button
                  className="md:hidden text-[#18342E]"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </nav>

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

        <div className="relative z-10 min-h-screen flex items-center px-6 sm:px-10 lg:px-20">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div className="text-white">
              <p className="uppercase tracking-[0.35em] text-sm mb-6 text-blue-100 font-medium">
                Robotics • Mechanical Design • Research
              </p>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl leading-[0.9] mb-8 font-['Cormorant_Garamond'] whitespace-nowrap">
                Yvonne Zhang
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed max-w-xl mb-8 font-light">
                Designing autonomous systems and human-centered engineering experiences through robotics, prototyping, and research.
              </p>
              <div className="text-2xl sm:text-3xl mb-10 font-semibold">
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
              <div className="relative w-[620px] h-[620px]">
                {/* ABOUT */}
                <button
                  onClick={() => scrollToSection('about me')}
                  className="absolute top-0 left-6 bg-white p-3 shadow-2xl rotate-[-8deg] w-48 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src="/portfolio/Banff_lakelouise.png"
                    alt=""
                    className="w-full h-52 object-cover"
                  />
                  <p className="text-center mt-4 text-sm tracking-wide text-gray-700">
                    About Me
                  </p>
                </button>

                {/* PROJECTS */}
                <button
                  onClick={() => scrollToSection('projects')}
                  className="absolute top-10 right-6 bg-white p-3 shadow-2xl rotate-[6deg] w-52 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src="/portfolio/benchy.jpeg"
                    alt=""
                    className="w-full h-56 object-cover"
                  />
                  <p className="text-center mt-4 text-sm tracking-wide text-gray-700">
                    Projects
                  </p>

                </button>

                {/* RESUME */}
                <a
                  href="/portfolio/YvonneZhang_CV_Jan2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-16 left-0 bg-white p-3 shadow-2xl rotate-[4deg] w-52 hover:scale-105 transition-all duration-300 cursor-pointer block"
                >
                  <img
                    src="/portfolio/iron-ring.png"
                    alt=""
                    className="w-full h-56 object-cover"
                  />
                  <p className="text-center mt-4 text-sm tracking-wide text-gray-700">
                    Resume
                  </p>
                </a>

                {/* CONTACT */}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="absolute bottom-0 right-0 bg-white p-3 shadow-2xl rotate-[-5deg] w-48 hover:scale-105 transition-all duration-300 cursor-pointer"
                >

                  <img
                    src="/portfolio/swiss-alps.png"
                    alt=""
                    className="w-full h-52 object-cover"
                  />

                  <p className="text-center mt-4 text-sm tracking-wide text-gray-700">
                    Contact
                  </p>

                </button>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about me" className="py-24 px-6 lg:px-10 bg-[#F5F3EE]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
              About
            </p>
            <h2 className="text-5xl md:text-6xl font-['Cormorant_Garamond'] text-[#18342E] leading-tight">
              Engineering Through Curiosity & Iteration
            </h2>
          </div>

          <div className="grid lg:grid-cols-[300px_1fr] gap-14 items-start">
            <div className="flex flex-col items-center">
              <div className="w-64 aspect-square overflow-hidden shadow-2xl border-[10px] border-white rotate-[-3deg]">
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
                className="mt-8 border border-[#2A5C52] px-8 py-3 uppercase tracking-[0.2em] text-sm hover:bg-[#2A5C52] hover:text-white transition-all duration-300"
              >
                Connect on LinkedIn
              </a>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700 max-w-3xl">
              <p>
                <strong>Welcome to my portfolio!</strong> I’m a Robotics and Mechanical Engineer focused on building systems that move, sense, and interact with the physical world.
              </p>
              <p>
                My work sits at the intersection of mechanical design and autonomy, where CAD, control systems, and real-world constraints meet. I’m especially interested in building machines that do not just function, but respond: haptic interfaces, assistive robotics, and systems that extend human capability.
              </p>
              <p>
                I am currently focused on computational sensing and robotics research, with an emphasis on human-centered interaction and surgical applications. I enjoy working across the full stack of physical systems from early-stage design and simulation to embedded implementation and iterative prototyping.
              </p>
              <p>
                My hoddies include bouldering, running, painting, traveling, and getting lost in a good book.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="py-20 px-6 lg:px-10 bg-[#EFEAE0]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
              Education
            </p>
            <h2 className="text-5xl md:text-6xl font-['Cormorant_Garamond'] text-[#18342E]">
              Academic Background
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                className="bg-white p-8 shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <img
                    src={school.image}
                    alt=""
                    className="w-20 h-20 object-contain"
                  />
                </div>

                <h3 className="text-2xl text-center font-['Cormorant_Garamond'] text-[#18342E] mb-3">
                  {school.title}
                </h3>
                <p className="text-center text-gray-600 mb-3 leading-relaxed">
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
      <section id="projects" className="py-20 px-6 lg:px-10 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
              Featured Work
            </p>
            <h2 className="text-5xl md:text-6xl font-['Cormorant_Garamond'] text-[#18342E]">
              Projects & Research
            </h2>

            <div className="flex flex-wrap gap-3 mt-10 mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 border transition-all duration-300 text-sm uppercase tracking-[0.15em]
                    ${
                      selectedCategory === category
                        ? "bg-[#2A5C52] text-white border-[#2A5C52]"
                        : "border-[#2A5C52]/30 text-[#2A5C52] hover:bg-[#2A5C52] hover:text-white"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {filteredProjects.map((project) => (
              <Link 
                key={project.slug}
                to={`/portfolio/${project.slug}`}
                className="group bg-white overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300 h-full"
              >
                <div className="h-56 overflow-hidden bg-[#E7E1D5]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-7 flex flex-col">
                  <h3 className="text-xl font-['Cormorant_Garamond'] text-[#18342E] mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-5 leading-relaxed text-[15px]">
                    {project.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] uppercase tracking-[0.15em] border border-[#2A5C52]/30 text-[#2A5C52] px-3 py-1"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 lg:px-10 bg-[#18342E] text-white">

        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.35em] text-sm text-blue-100 mb-4">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-['Cormorant_Garamond'] mb-8">
            Let's Connect
          </h2>

          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Interested in robotics, engineering collaboration, or research opportunities?
          </p>

          <a
            href="mailto:yzhan874@jh.edu"
            className="inline-block border border-white px-10 py-4 uppercase tracking-[0.25em] text-sm hover:bg-white hover:text-[#18342E] transition-all duration-300 mb-12"
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
      <footer className="py-6 bg-[#102521] text-center text-gray-400 text-sm tracking-wide">
        © 2026 Yvonne Zhang
      </footer>

    </div>
  );
}
// ProjectTemplate.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProjectTemplate({
  title = "Project Title",
  subtitle = "Short project tagline",
  description = "Project description goes here.",
  skills = [],
  duration = "",
  heroImage = "",
  sections = [],
  media = [],
  links = {
    resume: "",
  }
}) {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goToMainSection = (section) => {
    navigate(`/portfolio#${section}`);

    setTimeout(() => {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleHome = () => {
    navigate('/portfolio');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#F5F3EE] text-gray-900 overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#F5F3EE]/95 backdrop-blur-md border-b border-[#D9D3C7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">

          <div className="text-2xl font-bold text-[#18342E]">
            Your Name
          </div>

          <div className="hidden md:flex space-x-10 text-sm uppercase tracking-[0.2em]">
            <button onClick={handleHome}>Home</button>
            <button onClick={() => goToMainSection('about')}>About</button>
            <button onClick={() => goToMainSection('projects')}>Projects</button>
            <button onClick={() => goToMainSection('contact')}>Contact</button>
          </div>

          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-sm uppercase tracking-[0.2em]"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-28 pb-24 overflow-hidden bg-[#2A5C52] text-white">

        <div className="absolute inset-0 opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="uppercase tracking-[0.35em] text-sm mb-5 text-blue-100">
              {subtitle}
            </p>

            <h1 className="text-5xl lg:text-7xl font-serif leading-[0.95] mb-6">
              {title}
            </h1>

            <p className="text-lg text-blue-100 mb-8">
              {description}
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {skills.map((s, i) => (
                <span
                  key={i}
                  className="text-xs uppercase border border-white/30 px-3 py-1"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="text-blue-100">
              <span className="font-semibold text-white">Duration:</span>{" "}
              {duration}
            </div>
          </div>

          <div className="flex justify-center">
            {heroImage && (
              <div className="bg-white p-4 shadow-2xl rotate-[3deg] max-w-md">
                <img
                  src={heroImage}
                  alt="hero"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto space-y-28">

          {sections.map((sec, i) => (
            <section key={i} id={sec.id || undefined}>

              <div className="mb-10">
                <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                  {sec.kicker}
                </p>

                <h2 className="text-5xl font-serif text-[#18342E]">
                  {sec.title}
                </h2>
              </div>

              {sec.text && (
                <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl">
                  {sec.text}
                </p>
              )}

              {sec.bullets && (
                <ul className="space-y-4 text-lg text-gray-700">
                  {sec.bullets.map((b, idx) => (
                    <li key={idx}>✓ {b}</li>
                  ))}
                </ul>
              )}

              {sec.gridImages && (
                <div className="grid md:grid-cols-2 gap-8 mt-10">
                  {sec.gridImages.map((img, idx) => (
                    <div key={idx} className="bg-white p-4 shadow-xl">
                      <img src={img} className="w-full h-[320px] object-contain" />
                    </div>
                  ))}
                </div>
              )}

            </section>
          ))}

          {/* MEDIA */}
          {media.length > 0 && (
            <section>
              <div className="mb-10">
                <p className="uppercase tracking-[0.35em] text-sm text-[#2A5C52] mb-3">
                  Media
                </p>
                <h2 className="text-5xl font-serif text-[#18342E]">
                  Demo
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-10">
                {media.map((m, i) => (
                  <div key={i} className="bg-white shadow-xl overflow-hidden">
                    {m.type === "video" ? (
                      <video controls className="w-full h-80 bg-black object-contain">
                        <source src={m.src} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={m.src} className="w-full h-80 object-contain" />
                    )}

                    <div className="p-6">
                      <h3 className="text-2xl font-serif">{m.title}</h3>
                      <p className="text-gray-600">{m.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 bg-[#102521] text-center text-gray-400 text-sm">
        © 2026 Yvonne Zhang
      </footer>
    </div>
  );
}
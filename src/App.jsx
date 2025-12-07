import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Award, Briefcase, Download, Menu, X, Cloud, Database, Layers, ChevronRight } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "ShieldHer",
      description: "Platform combating online gender-based violence with real-time emergency alerting and safety features",
      tech: ["JavaScript", "Real-time Features", "Safety by Design"],
      score: "Scored 42/50 (Good Rating) - PLP Power Hacks",
      link: "https://github.com/Vimutai/ShieldHer",
      featured: true
    },
    {
      title: "TaskMaster React App",
      description: "Modern task management application with clean UI and smooth user experience",
      tech: ["React", "Vite", "Tailwind CSS"],
      link: "https://github.com/Vimutai/taskmaster-react-app"
    },
    {
      title: "Personal Portfolio",
      description: "Professional developer portfolio showcasing projects and technical skills",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Vimutai/VivianMutai_Portfolio"
    },
    {
      title: "Learn Link App",
      description: "Educational platform built with TypeScript for type-safe development",
      tech: ["TypeScript", "React"],
      link: "https://github.com/Vimutai/learn-link-app"
    }
  ];

  const skills = {
    "Frontend": ["React.js", "Vite", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
    "Backend": ["Node.js", "Express.js", "REST APIs", "MongoDB", "SQL"],
    "Cloud & DevOps": ["AWS Solutions Architect", "EC2", "S3", "Lambda", "VPC", "CloudFormation"],
    "Data Science": ["Python", "Pandas", "NumPy", "Machine Learning", "Data Visualization"]
  };

  const achievements = [
    { icon: Award, title: "AWS Solutions Architect Certified", desc: "Earned sponsorship for top performance" },
    { icon: Code, title: "PLP MERN Stack Graduate", desc: "5-month intensive bootcamp (July-Dec 2025)" },
    { icon: Award, title: "Hackathon Participant", desc: "Scored 42/50 (Good Rating) in PLP Power Hacks" },
    { icon: Github, title: "168+ GitHub Contributions", desc: "41+ repositories showcasing diverse projects" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Vivian Mutai
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-purple-400 transition-colors ${activeSection === item ? 'text-purple-400' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-purple-900/50 rounded"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm">
              🚀 Available for Opportunities
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Vivian Mutai
          </h1>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-gray-300">
            MERN Stack Full-Stack Developer
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            AWS Certified Solutions Architect | Data Science Enthusiast | Building user-centered digital solutions
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:scale-105 transition-transform flex items-center gap-2"
            >
              View My Work <ChevronRight size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400/10 transition-colors"
            >
              Hire Me
            </button>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/Vimutai" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/vivian-mutai-245715186" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="mailto:vivyearnjepkorir@gmail.com" className="hover:text-purple-400 transition-colors">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg mb-6">
                MERN Stack Full-Stack Developer with specialized training in modern JavaScript development. Recent graduate of Power Learn Project (PLP) with proven ability to build scalable web applications.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                I combine full-stack development expertise with cloud architecture (AWS Solutions Architect) and data science skills (WorldQuant University) to create data-driven, scalable solutions.
              </p>
              <div className="flex gap-4">
                <a 
  href="/cv.pdf" 
  download="Vivian_Mutai_CV.pdf"
  className="px-6 py-3 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2 inline-flex"
>
  <Download size={20} /> Download CV
</a>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 border border-purple-400 rounded-lg font-semibold hover:bg-purple-400/10 transition-colors"
                >
                  Contact Me
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, idx) => (
                <div key={idx} className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105">
                  <achievement.icon className="text-purple-400 mb-3" size={32} />
                  <h3 className="font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-400">{achievement.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105">
                {project.featured && (
                  <div className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-400 mb-4">
                    ⭐ Featured Project
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                {project.score && (
                  <p className="text-purple-400 font-semibold mb-4">{project.score}</p>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://github.com/Vimutai?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400/10 transition-colors"
            >
              View All 41+ Projects on GitHub <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  {category === "Frontend" && <Layers className="text-purple-400" />}
                  {category === "Backend" && <Code className="text-purple-400" />}
                  {category === "Cloud & DevOps" && <Cloud className="text-purple-400" />}
                  {category === "Data Science" && <Database className="text-purple-400" />}
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-purple-500/20 rounded-lg text-sm hover:bg-purple-500/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            What I Offer
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105">
              <Code className="text-purple-400 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Full-Stack Development</h3>
              <p className="text-gray-400">Modern MERN stack applications with responsive design and clean code</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105">
              <Cloud className="text-purple-400 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Cloud Solutions</h3>
              <p className="text-gray-400">AWS deployment, architecture, and cloud infrastructure setup</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105">
              <Database className="text-purple-400 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Data Analytics</h3>
              <p className="text-gray-400">Python-based data analysis, visualization, and insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Available for full-time positions, freelance projects, and collaborations
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-purple-500/20">
              <Mail className="text-purple-400 mx-auto mb-3" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:vivyearnjepkorir@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                vivyearnjepkorir@gmail.com
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-purple-500/20">
              <Linkedin className="text-purple-400 mx-auto mb-3" size={32} />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/vivian-mutai-245715186" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                Connect with me
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-purple-500/20">
              <Github className="text-purple-400 mx-auto mb-3" size={32} />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <a href="https://github.com/Vimutai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                View my code
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to start a project?</h3>
            <p className="mb-6">Let's discuss how I can help bring your ideas to life</p>
            <a 
              href="mailto:vivyearnjepkorir@gmail.com"
              className="inline-block px-8 py-3 bg-white text-purple-900 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 Vivian Mutai. Built with React & Tailwind CSS.</p>
          <p className="mt-2">Nairobi, Kenya | Available Immediately</p>
        </div>
      </footer>
    </div>
  );
}
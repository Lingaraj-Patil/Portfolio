import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ArrowRight, ExternalLink } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';
import myImage from "./assets/Untitled design (5).png"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container flex items-center justify-between px-6 py-4 mx-auto">
          <a href="#home" className="text-2xl font-bold tracking-tighter">
            <span className="text-white">Lingaraj</span>
            <span className="text-blue-500">Patil</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize text-sm font-medium transition-colors ${
                  activeSection === item ? 'text-blue-500' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="text-gray-300 md:hidden hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0a0a0a] pt-20">
          <div className="container flex flex-col px-6 py-8 mx-auto space-y-8">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="pb-2 text-2xl font-medium text-left capitalize border-b border-gray-800"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <section 
        id="home" 
        className="flex items-center min-h-screen pt-20"
      >
        <div className="container px-6 mx-auto">
          <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-7xl">
              <span className="block">Hi, I'm Lingaraj Patil</span>
              <span className="block text-blue-500">MERN Developer</span>
            </h1>
            <p className="max-w-2xl mb-8 text-xl text-gray-400 md:text-2xl">
            I develop robust full-stack web applications that are scalable, efficient, responsive, and user-friendly, leveraging modern technologies like React, Node.js, Express.js, and MongoDB.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button 
                onClick={() => scrollToSection('projects')}
                className="flex items-center justify-center gap-2 px-8 py-3 text-white transition-all bg-blue-600 rounded-full hover:bg-blue-700"
              >
                View Projects <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 text-white transition-all border border-gray-700 rounded-full hover:border-blue-500"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-[#0f0f0f]">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="relative mb-12 text-3xl font-bold md:text-5xl">
              <span className="text-blue-500">#</span> About Me
              <span className="absolute bottom-0 left-0 w-24 h-1 bg-blue-500"></span>
            </h2>
            
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <img 
                  src= {myImage}   
                  alt="Lingaraj Patil" 
                  className="object-cover w-full h-auto rounded-lg shadow-xl"
                />
              </div>
              <div>
                <p className="mb-6 leading-relaxed text-gray-300">
                I am a dedicated MERN stack developer with a strong foundation in building dynamic, scalable, and user-focused web applications. Proficient in React, Node.js, Express.js, and MongoDB, I specialize in creating seamless full-stack solutions that balance performance and usability.
                </p>
                <p className="mb-6 leading-relaxed text-gray-300">
                With experience in both frontend design and backend development, I aim to deliver clean code, intuitive interfaces, and efficient architectures. My passion lies in leveraging technology to solve real-world problems, and I’m constantly exploring innovative approaches to enhance user experiences and streamline workflows.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <h3 className="mb-3 text-xl font-semibold">Skills</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>Frontend:React, Tailwind CSS, HTML, CSS, JavaScript, Bootstrap</li>
                      <li>Backend: Node.js, Express.js</li>
                      <li>Database: MongoDB</li>
                      <li>Tools: Git/GitHub</li>
                      <li>Programming Languages: JavaScript, Python, TypeScript, C</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-semibold">Experience</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>Hackathons</li>
                      <li>Currently Working as Communication & Marketing Intern at GNEC</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container px-6 mx-auto">
          <h2 className="relative max-w-4xl mx-auto mb-12 text-3xl font-bold md:text-5xl">
            <span className="text-blue-500">#</span> My Projects
            <span className="absolute bottom-0 left-0 w-24 h-1 bg-blue-500"></span>
          </h2>
          
          <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#0f0f0f]">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="relative mb-12 text-3xl font-bold md:text-5xl">
              <span className="text-blue-500">#</span> Get In Touch
              <span className="absolute bottom-0 left-0 w-24 h-1 bg-blue-500"></span>
            </h2>
            
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <p className="mb-8 leading-relaxed text-gray-300">
                  I'm currently available for freelance work and full-time positions. If you have a project that needs some creative touch, or if you're looking for a developer to join your team, feel free to reach out.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:lingaraj.v.patil@gmail.com" 
                    className="flex items-center text-gray-300 transition-colors hover:text-blue-500"
                  >
                    <Mail size={20} className="mr-3" />
                    lingaraj.v.patil@gmail.com
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-300 transition-colors hover:text-blue-500"
                  >
                    <Github size={20} className="mr-3" />
                    github.com/Lingaraj-Patil
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-300 transition-colors hover:text-blue-500"
                  >
                    <Linkedin size={20} className="mr-3" />
                    linkedin.com/in/lingaraj-patil-771bb1255/
                  </a>
                </div>
              </div>
              
              <div>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-400">
                      Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-400">
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-400">
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="mb-4 text-gray-500 md:mb-0">
              © {new Date().getFullYear()} Lingaraj Patil. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Lingaraj-Patil" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 transition-colors hover:text-white"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/lingaraj-patil-771bb1255/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 transition-colors hover:text-white"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto: lingaraj.v.patil@gmail.com" 
                className="text-gray-500 transition-colors hover:text-white"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
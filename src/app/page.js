"use client";
import { useState, useEffect, useRef } from 'react';
import { Club, ChevronDown, Code, Monitor, Users, Award, ArrowRight, Github, Linkedin, Mail, Globe, Zap, Clock, Disc, Sparkles, Check, X, ArrowUpRight } from 'lucide-react';
import * as THREE from 'three';
import { motion } from 'framer-motion'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isContactFormSubmitted, setIsContactFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [typedText, setTypedText] = useState('');
  const fullText = "Turning Ideas into Digital Reality";
  const typingSpeed = 100;
  const cursorRef = useRef(null);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const [isCertificateVisible, setIsCertificateVisible] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const skillsRef = useRef(null);
  const certificateRef = useRef(null);

  // Enhanced projects data
  const projects = [
    {
      title: "Sure Success Classes",
      description: "A coaching center for a launchpad for students to dream big, work hard, and achieve their full potential.",
      tech: ["React", "Node.js", "Firebase", "Shadcn"],
      highlight: "Increased client's sales by 45% in the first quarter",
      color: "from-blue-500 to-indigo-600",
      icon: <Monitor size={64} className="text-white opacity-75" />,
      details: "This e-commerce solution included customer account management, product categorization, wishlist functionality, secure payment processing, and a robust admin dashboard for inventory and order management."
    },
    {
      title: "All Ipu Community",
      description: "Connecting 20k+ students across IPU. Be a part of the largest student community today!",
      tech: ["React.js", "Firebase", "shadcn"],
      highlight: "Reduced data processing time by 60% for medical staff",
      color: "from-green-500 to-emerald-600",
      icon: <Disc size={64} className="text-white opacity-75" />,
      details: "The dashboard featured real-time patient monitoring, customizable reporting tools, HIPAA-compliant data storage, and interactive visualizations for treatment outcomes and resource allocation."
    },
    {
      title: "Gym Website",
      description: "A gym website for Helping you in the doing workout in home ",
      tech: ["React Js", "Firebase","Tailwind", "Gym Api"],
      highlight: "Featured in Product Hunt's top 10 apps of the month",
      color: "from-purple-500 to-fuchsia-600",
      icon: <Zap size={64} className="text-white opacity-75" />,
      details: "This mobile application included 3D property tours, location-based searches, integrated mortgage calculator, automated appointment scheduling, and real-time chat with property agents."
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Ambrish Shukla",
      position: "Founder, Sure Success Classes",
      text: "Working with this developer was the best decision for our business.",
      image: "/Ambrish.jpg"
    },
    {
      name: "Satyam Srivastava",
      position: "Cto, CollegexConnect",
      text: "I engaged him for company for web design services. They delivered outstanding results with creativity, professionalism, and timely communication. The project was completed on schedule and exceeded my expectations.",
      image: "/Satyam.jpeg"
    },
    {
      name: "Vishwajit",
      position: "Founder, Ani69",
      text: "His technical skills are exceptional, and he has a deep understanding of web development technologies and frameworks. He was able to incorporate the latest design trends and ensure that the website was fully responsive and accessible across different platforms.",
      image: "/vishwa.jpg"
    }
  ];

  // Enhanced skills data
  const skills = [
    { 
      name: "Frontend", 
      items: ["React", "Vue.js", "JavaScript/TypeScript", "HTML5/CSS3", "Tailwind CSS", "Three.js"],
      icon: <Monitor size={24} className="text-blue-400" />,
      color: "border-blue-500"
    },
    { 
      name: "Backend", 
      items: ["Node.js", "Express", "Django", "GraphQL", "RESTful APIs"],
      icon: <Code size={24} className="text-green-400" />,
      color: "border-green-500"
    },
    { 
      name: "Database", 
      items: ["MongoDB", "PostgreSQL", "Firebase", "Redis"],
      icon: <Disc size={24} className="text-yellow-400" />,
      color: "border-yellow-500"
    },
    { 
      name: "Other", 
      items: ["Git/GitHub", "Docker", "AWS", "CI/CD", "Agile/Scrum"],
      icon: <Zap size={24} className="text-purple-400" />,
      color: "border-purple-500"
    }
  ];

  // Certificates data
  const certificates = [
    { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: 2024 },
    { name: "Professional Frontend Developer", issuer: "Meta", year: 2023 },
    { name: "Certified Kubernetes Administrator", issuer: "Cloud Native Computing Foundation", year: 2023 }
  ];

  // Animation effect for 3D cube
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.01);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  // Typing effect for hero text
  useEffect(() => {
    let currentIndex = 0;
    const type = () => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
        setTimeout(type, typingSpeed);
      }
    };
    type();
    
    return () => clearTimeout(type);
  }, []);

  // Track mouse position for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Handle scroll for section detection and animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      const heroSection = document.getElementById('hero');
      const projectsSection = document.getElementById('projects');
      const skillsSection = document.getElementById('skills');
      const aboutSection = document.getElementById('about');
      const contactSection = document.getElementById('contact');
      
      if (heroSection && scrollPosition < heroSection.offsetHeight - 100) {
        setActiveSection('hero');
      } else if (projectsSection && 
                scrollPosition >= projectsSection.offsetTop - 300 && 
                scrollPosition < projectsSection.offsetTop + projectsSection.offsetHeight - 300) {
        setActiveSection('projects');
      } else if (skillsSection && 
                scrollPosition >= skillsSection.offsetTop - 300 && 
                scrollPosition < skillsSection.offsetTop + skillsSection.offsetHeight - 300) {
        setActiveSection('skills');
        setIsSkillsVisible(true);
      } else if (aboutSection && 
                scrollPosition >= aboutSection.offsetTop - 300 && 
                scrollPosition < aboutSection.offsetTop + aboutSection.offsetHeight - 300) {
        setActiveSection('about');
        setIsCertificateVisible(true);
      } else if (contactSection && 
                scrollPosition >= contactSection.offsetTop - 300) {
        setActiveSection('contact');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // 3D Cube component
  const ThreeDCube = () => {
    return (
      <div className="relative w-32 h-32 transform transition-transform duration-300" 
        style={{ 
          transform: `rotateX(${rotation * 30 + mousePosition.y * 10}deg) rotateY(${rotation * 30 + mousePosition.x * 10}deg)`, 
          perspective: "1000px",
          transformStyle: "preserve-3d" 
        }}>
        <div className="absolute w-full h-full bg-blue-500 opacity-70 rounded-md transform" style={{ transform: 'translateZ(4rem)' }}>
          <div className="flex items-center justify-center h-full text-white font-bold">FRONT</div>
        </div>
        <div className="absolute w-full h-full bg-purple-500 opacity-70 rounded-md transform" style={{ transform: 'translateZ(-4rem) rotateY(180deg)' }}>
          <div className="flex items-center justify-center h-full text-white font-bold">BACK</div>
        </div>
        <div className="absolute w-full h-full bg-green-500 opacity-70 rounded-md transform" style={{ transform: 'translateY(-4rem) rotateX(90deg)' }}>
          <div className="flex items-center justify-center h-full text-white font-bold">DevOps</div>
        </div>
        <div className="absolute w-full h-full bg-yellow-500 opacity-70 rounded-md transform" style={{ transform: 'translateY(4rem) rotateX(-90deg)' }}>
          <div className="flex items-center justify-center h-full text-white font-bold">Automation</div>
        </div>
        <div className="absolute w-full h-full bg-red-500 opacity-70 rounded-md transform" style={{ transform: 'translateX(4rem) rotateY(90deg)' }}>
          <div className="flex items-center justify-center h-full text-white font-bold">AI</div>
        </div>
        <div className="absolute w-full h-full bg-pink-500 opacity-70 rounded-md transform" style={{ transform: 'translateX(-4rem) rotateY(-90deg)' }}>
          <div className="flex items-center justify-center h-full text-white font-bold">DB</div>
        </div>
      </div>
    );
  };

  // Notification component
  const Notification = ({ message, success = true }) => {
    return (
      <div className={`fixed top-24 right-4 z-50 p-4 rounded-lg shadow-lg flex items-center ${success ? 'bg-green-500' : 'bg-red-500'} animate-slide-in-right`}>
        <div className="mr-3">
          {success ? <Check className="text-white" size={24} /> : <X className="text-white" size={24} />}
        </div>
        <p className="text-white">{message}</p>
      </div>
    );
  };

  // Modal component for project details
  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
        <div className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
          <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center relative`}>
            {project.icon}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 transition"
            >
              <X size={20} className="text-white" />
            </button>
          </div>
          
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Project Details</h4>
              <p className="text-gray-300">{project.details}</p>
            </div>
            
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm hover:bg-gray-600 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-700">
              <p className="text-green-400 flex items-center mb-4">
                <Award size={18} className="mr-2" /> {project.highlight}
              </p>
              
              <button 
                onClick={onClose}
                className="px-6 py-3 w-full bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg font-semibold hover:from-blue-500 hover:to-blue-700 transition flex items-center justify-center gap-2"
              >
                Contact Me About This Project <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      setIsContactFormSubmitted(true);
      setNotificationMessage('Thanks for your message! I\'ll be in touch soon.');
      setShowNotification(true);
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
      // Hide notification after 5 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-blue-500 opacity-5 animate-pulse"></div>
        <div className="absolute top-2/3 left-1/3 w-56 h-56 rounded-full bg-purple-500 opacity-5 animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-cyan-500 opacity-5 animate-pulse-slower"></div>
        <div className="absolute bottom-1/4 right-1/3 w-32 h-32 rounded-full bg-pink-500 opacity-5 animate-pulse"></div>
        
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
      </div>
      
      {/* Notification */}
      {showNotification && <Notification message={notificationMessage} />}
      
      {/* Project Details Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-lg shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 group">
            <Club className="text-blue-500 group-hover:rotate-180 transition-transform duration-700" size={28} />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">DevShiv</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['hero', 'projects', 'skills', 'about', 'contact'].map((section) => (
              <button 
                key={section}
                onClick={() => scrollToSection(section)}
                className={`hover:text-blue-400 transition relative py-2 ${activeSection === section ? 'text-blue-500 font-semibold' : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 animate-expand-width"></span>
                )}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-blue-500 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 py-4 px-4 absolute w-full border-t border-gray-800 animate-slide-in-top">
            <div className="flex flex-col space-y-4">
              {['hero', 'projects', 'skills', 'about', 'contact'].map((section) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`hover:text-blue-400 transition ${activeSection === section ? 'text-blue-500 font-semibold' : ''}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center pt-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20"></div>
        
        <div className="container mx-auto z-10">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="md:w-3/5 text-center md:text-left mt-8 md:mt-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="inline-block">{typedText}</span>
                <span 
                  ref={cursorRef} 
                  className="inline-block w-1 h-10 bg-blue-500 ml-1 animate-blink"
                ></span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
                Freelance Full-Stack Developer specializing in creating immersive web experiences that drive results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-slide-in-bottom">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition flex items-center justify-center gap-2 shadow-lg shadow-blue-700/30 hover:shadow-blue-700/50 transform hover:-translate-y-1"
                >
                  View My Work <ArrowRight size={16} />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-transparent border-2 border-blue-500 rounded-lg font-semibold hover:bg-blue-900/30 transition transform hover:-translate-y-1"
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className="md:w-2/5 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 opacity-50">
                  <div className="w-64 h-64 rounded-full bg-blue-500 blur-3xl"></div>
                </div>
                <div className="animate-float">
                  <ThreeDCube />
                </div>
              </div>
            </div>
          </div>
          
          {/* Tech icons */}
        <div className="mt-8 md:mt-16 flex flex-wrap justify-center md:justify-start gap-3 md:gap-6 opacity-60 animate-slide-in-bottom" style={{ animationDelay: '0.5s' }}>
          {["React", "Node.js", "MongoDB", "Three.js", "AWS"].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gray-800 flex items-center justify-center mb-1 md:mb-2 group-hover:bg-gray-700 transition">
                <span className="text-lg md:text-xl font-mono text-blue-400">{tech.charAt(0)}</span>
              </div>
              <span className="text-xs text-gray-400 group-hover:text-white transition">{tech}</span>
            </div>
          ))}
        </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <button onClick={() => scrollToSection('projects')} className="text-gray-400 hover:text-white">
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-in-bottom">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 animate-expand-width"></div>
            <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in">
              Explore some of my recent work that demonstrates my expertise in creating responsive, high-performance web applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:shadow-xl hover:shadow-blue-900/30 transition-all duration-300 group cursor-pointer"
            >
              <a href={project.title === "Sure Success Classes" ? "http://sure-success.netlify.app/" : 
                        project.title === "Gym Website" ? "https://flexigym.netlify.app/" : "https://allipucommunity.vercel.app/"}
                target="_blank" rel="noopener noreferrer">
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <div className="z-10 transform transition-transform duration-500 group-hover:scale-110">
                    {project.icon}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
                      {project.title}
                    </h3>
                    <ArrowUpRight size={18} className="text-gray-400 group-hover:text-blue-400 transition" />
                  </div>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs bg-gray-700 px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-blue-400">View Project →</span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
          </div>
          
          {/* Testimonials */}
          <div className="mt-20 bg-gray-800/30 border border-gray-700 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-8 text-center">Client Testimonials</h3>
            
            <div className="relative overflow-hidden h-64">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 flex flex-col items-center transition-opacity duration-1000 ${index === testimonialIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                  <div className="mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-20 h-20 rounded-full border-4 border-blue-500 object-cover mx-auto"
                    />
                  </div>
                  <p className="text-gray-300 text-center mb-4 max-w-2xl">
                    <span className="text-5xl text-blue-500 leading-none mr-2">"</span>
                    {testimonial.text}
                    <span className="text-5xl text-blue-500 leading-none ml-2">"</span>
                  </p>
                  <div className="text-center">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-4">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full mx-1 ${index === testimonialIndex ? 'bg-blue-500' : 'bg-gray-600'}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      
     {/* Skills Section */}
        <section id="skills" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')]"></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Technical Expertise
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                I wield these technologies to craft digital experiences that convert visitors into customers
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((category, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:shadow-lg hover:shadow-blue-900/30 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-full bg-gray-700/50 border ${category.color} mr-3`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.name}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                        <span className="text-gray-300 hover:text-white transition">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Skill Meter Visualization */}
            <div className="mt-16 bg-gray-800/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-center">Skill Proficiency</h3>
              <div className="space-y-6">
                {[
                  { name: "React/Next.js", level: 95, color: "bg-blue-500" },
                  { name: "Node.js/Express", level: 90, color: "bg-green-500" },
                  { name: "UI/UX Design", level: 85, color: "bg-purple-500" },
                  { name: "Database", level: 88, color: "bg-yellow-500" },
                  { name: "DevOps", level: 80, color: "bg-pink-500" },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className={`h-2.5 rounded-full ${skill.color}`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

          {/* About Section */}
        <section id="about" className="py-20 px-4 relative overflow-hidden bg-[url('/grid-pattern-dark.svg')]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>
          <div className="container mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:w-2/5 flex justify-center"
              >
                <div className="relative group">
                  <div className="w-72 h-72 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center overflow-hidden shadow-2xl">
                    <img 
                      src="/shivanshu.jpeg" 
                      alt="Developer" 
                      className="w-full h-full object-cover mix-blend-luminosity opacity-90"
                    />
                  </div>
                  <div className="absolute -bottom-5 -right-5 bg-blue-600 text-white rounded-full p-4 shadow-xl group-hover:rotate-12 transition-transform">
                    <Code size={28} />
                  </div>
                </div>
              </motion.div>
              
              <div className="lg:w-3/5">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    Why Work With Me?
                  </span>
                </h2>
                
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  I'm not just a developer - I'm your digital partner. With 2+ years transforming ideas into high-converting web experiences, I bring both technical expertise and business acumen to every project.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { icon: <Users size={20} />, title: "5+", subtitle: "Happy Clients" },
                    { icon: <Award size={20} />, title: "100%", subtitle: "Satisfaction" },
                    { icon: <Clock size={20} />, title: "Fast", subtitle: "Delivery" },
                    { icon: <Sparkles size={20} />, title: "Premium", subtitle: "Quality" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 text-center"
                    >
                      <div className="text-blue-400 mb-2 flex justify-center">{stat.icon}</div>
                      <h4 className="text-2xl font-bold">{stat.title}</h4>
                      <p className="text-gray-400 text-sm">{stat.subtitle}</p>
                    </motion.div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-blue-500/30 flex items-center gap-3"
                >
                  Let's Build Something Amazing <ArrowRight size={20} />
                </motion.button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 px-4 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')]"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-5xl font-bold mb-4">
              Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Start Your Project?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
              Fill out the form and I'll get back to you within 24 hours to discuss how we can bring your vision to life.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 md:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-5 md:p-8 shadow-xl w-full"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 md:px-5 md:py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 transition placeholder-gray-500"
                    placeholder="John Doe"
                  />
                  {formErrors.name && <p className="text-red-400 text-sm mt-1">{formErrors.name}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 md:px-5 md:py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 transition placeholder-gray-500"
                    placeholder="your@email.com"
                  />
                  {formErrors.email && <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Project Details</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 md:px-5 md:py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 transition h-32 md:h-40 placeholder-gray-500"
                    placeholder="Tell me about your project, timeline, and budget..."
                  ></textarea>
                  {formErrors.message && <p className="text-red-400 text-sm mt-1">{formErrors.message}</p>}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-blue-500/30"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
            
            <div className="space-y-6 md:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-5 md:p-8 shadow-xl h-full"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Contact Information</h3>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-3 md:gap-5">
                    <div className="p-2 md:p-3 bg-blue-500/10 rounded-lg">
                      <Mail className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg mb-1">Email</h4>
                      <a href="mailto:shivanshushukla2022@gmail.com" className="text-gray-300 text-sm md:text-base hover:text-blue-400 transition break-all">
                        shivanshushukla2022@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 md:gap-5">
                    <div className="p-2 md:p-3 bg-blue-500/10 rounded-lg">
                      <Globe className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg mb-1">Availability</h4>
                      <p className="text-gray-300 text-sm md:text-base">
                        Currently accepting new projects. Response time: within 24 hours
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4 md:pt-6 mt-4 md:mt-6 border-t border-gray-700">
                    <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6">Connect With Me</h4>
                    <div className="flex gap-3 md:gap-4">
                      {[
                        { icon: <Github size={20} />, url: "#", color: "hover:bg-gray-700" },
                        { icon: <Linkedin size={20} />, url: "#", color: "hover:bg-blue-700" },
                        { icon: <Mail size={20} />, url: "#", color: "hover:bg-red-700" },
                        { icon: <Globe size={20} />, url: "#", color: "hover:bg-green-700" },
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          whileHover={{ y: -3 }}
                          href={social.url}
                          className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center transition ${social.color}`}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-4 md:p-6 text-center"
              >
                <div className="flex items-center justify-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <Clock className="text-blue-400" size={18} />
                  <h4 className="font-bold text-sm md:text-base">Quick Response Guarantee</h4>
                </div>
                <p className="text-gray-300 text-xs md:text-sm">
                  I understand time is money in business. That's why I guarantee a response within 24 hours to discuss your project needs.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

       {/* Footer */}
    <footer className="py-12 px-4 border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <Club className="text-blue-500" size={24} />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                DevShiv
              </span>
            </div>
            <p className="text-gray-400 text-center md:text-left max-w-md">
              Crafting high-performance web experiences that drive results and exceed expectations.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-6 mb-6">
              {['hero', 'projects', 'skills', 'contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-400 hover:text-white transition capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
            
            <div className="flex gap-5">
              {[
                { icon: <Github size={20} />, url: "#" },
                { icon: <Linkedin size={20} />, url: "#" },
                { icon: <Mail size={20} />, url: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -3 }}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} All rights reserved. Built with ❤️ using Next.js, Three.js & Framer Motion</p>
        </div>
      </div>
    </footer>
    </div>
  );
}
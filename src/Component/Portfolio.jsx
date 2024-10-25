import { useState , useEffect} from "react";
import { Menu, X, ArrowRight } from "lucide-react";
// import {Timeline} from '../assets/';  // Changed Timeline to timeline
import { ExternalLink, Sparkles, Workflow } from "lucide-react";
import { HeroParallax } from "./paralelspace";
import story1 from "../assets/story1.mp4";
import story2 from "../assets/story2.mp4";
import alien from "../assets/alien.mp4";
import alien1 from "../assets/alien1.mov";
import profile from "../assets/my_img.jpg";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import img5 from "../assets/img5.webp";
import img6 from "../assets/img6.webp";
import img7 from "../assets/img67.webp";
import img8 from "../assets/img8.webp";
import img9 from "../assets/img9.webp";
import img10 from "../assets/img10.jpg";
import { TimelineDemo } from "./timeline1";
import { TextHoverEffect } from "./textEffect";
import { Github, Globe, ArrowUpRight, Construction } from "lucide-react";
import { Mail, Phone, Linkedin, nalLink } from "lucide-react";


const ProjectsSection = () => {
  const projects = [
    {
      title: "Zan Art",
      description:
        "A dynamic marketplace connecting artists and art enthusiasts. Artists can showcase and sell their artwork while buyers can discover unique pieces.",
      technologies: ["HTML", "JavaScript", "MySQL", "CSS"],
      features: [
        "Secure artist authentication",
        "Art upload & management",
        "Payment integration",
        "Art gallery view",
        "Artist profiles",
      ],
      links: {
        live: "https://deploy-preview-1--zan-arts.netlify.app/",
        github: "https://github.com/santhanam13/ZanArts",
        underConstruction: false,
      },
    },
    {
      title: "Omget",
      description:
        "A real-time chat application enabling random video and text conversations between strangers, similar to Omegle.",
      technologies: ["HTML", "CSS", "Node.js", "Express"],
      features: [
        "Random user matching",
        "Real-time video chat",
        "Text messaging",
        "User filtering",
        "Connection management",
      ],
      links: {
        live: "",
        github: "https://github.com/santhanam13/Omget",
        underConstruction: true,
      },
    },
  ];

  return (
    <section className="min-h-screen text-left bg-black text-white py-16">
      <h2 className="text-4xl font-bold mb-12 relative max-w-6xl mx-20">
        <span className="text-white">Featured Projects</span>
      </h2>
      <div className="max-w-6xl  px-5 mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-zinc-900 rounded-xl p-6 hover:bg-zinc-800 transition-all duration-300 border border-zinc-800"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-0 group-hover:opacity-0 transition duration-300"></div>

              <div className="relative">
                <h3 className="text-2xl font-bold mb-3 text-purple-400">
                  {project.title}
                </h3>

                <p className="text-zinc-400 mb-4">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zinc-500 mb-2">
                    Key Features:
                  </h4>
                  <ul className="text-zinc-400 text-sm space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <ArrowUpRight className="w-4 h-4 mr-2 text-purple-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-zinc-800 text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.links.underConstruction ? (
                    <span className="flex items-center gap-2 text-sm text-zinc-500 cursor-not-allowed">
                      <Construction className="w-4 h-4" />
                      Under Construction
                    </span>
                  ) : (
                    <a
                      href={project.links.live}
                      className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.links.github}
                    className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
;


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white relative">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 pt-20 pb-12 relative">
        {/* Main Content */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
              Let's Connect
            </span>
          </h2>

          <p className="text-zinc-400 max-w-xl mb-12 text-lg">
            I'm always excited to collaborate on new projects and opportunities.
            Feel free to reach out!
          </p>

          {/* Contact Cards */}
          <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl mb-16">
            {/* Email Card */}
            <a
              href="mailto:bharchan90@gmail.com"
              className="group flex-1 p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] backdrop-blur-sm"
            >
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-xl bg-purple-500/10 mb-4">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-zinc-300 font-medium mb-2">Email</h3>
                <p className="text-zinc-400 mb-4 break-all">
                  bharchan90@gmail.com
                </p>
                <span className="flex items-center gap-2 text-purple-400 text-sm">
                  Write Me{" "}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+919095297688"
              className="group flex-1 p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] backdrop-blur-sm"
            >
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-xl bg-purple-500/10 mb-4">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-zinc-300 font-medium mb-2">Phone</h3>
                <p className="text-zinc-400 mb-4">+91 909 529 7688</p>
                <span className="flex items-center gap-2 text-purple-400 text-sm">
                  Call Me{" "}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mb-16">
            <a
              href="https://github.com/santhanam13"
              className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] backdrop-blur-sm group"
            >
              <Github className="w-6 h-6 text-zinc-400 group-hover:text-purple-400 transition-colors" />
            </a>
            <a
              href="#"
              className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] backdrop-blur-sm group"
            >
              <Linkedin className="w-6 h-6 text-zinc-400 group-hover:text-purple-400 transition-colors" />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="relative">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
          <div className="pt-8 text-center text-zinc-500 text-sm">
            © {currentYear} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};



const VideoSection = () => {
  return (
    <div className="w-full overflow-hidden 0">
      {/* Background Overlay with Gradient */}
      <div className="absolute inset-0   opacity-5 bg-cover bg-center" />

      {/* Content Container */}
      <div className="relative w-full h-full flex flex-col items-center justify-center px-4">
        {/* Video Container with Glow Effect */}
        <div className="w-full  px-2  md:px-10  o relative rounded-xl overflow-hidden shadow-2xl">
          {/* <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 blur-lg" /> */}
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <h2 className="text-xl  md:text-5xl pt-5 text-left font-bold text-white">
              Moive Trailer using AI
            </h2>
            <div className="flex flex-wrap gap-3 py-3">
              <span className="pr-3 py-1 bg-purple-500/10 rounded-full text-purple-300 text-sm">
                #StableDiffusion
              </span>
              <span className="px-3 py-1 bg-blue-500/10 rounded-full text-blue-300 text-sm">
                #OpenSourceAI
              </span>
              <span className="px-3 py-1 bg-purple-500/10 rounded-full text-purple-300 text-sm">
                #AIArt
              </span>
            </div>
            <p className="text-gray-300 text-left pb-10  md:w-2/4 leading-relaxed">
              Using open-source Stable Diffusion tools, I crafted a cinematic
              trailer by scripting scenes, generating AI-driven visuals,
              animating with Stable Diffusion workflows, and finalizing in
              DaVinci Resolve. Enhanced with sound effects and seamless
              transitions, this trailer showcases the power of AI in
              storytelling.
            </p>
            <div className="h-screen">
              {" "}
              <video
                className="w-full h-full object-cover"
                src={story1}
                title="Portfolio Video"
                controls
                muted
                autoPlay
                loop
                playsInline
                style={{ scrollbar: "none", msOverflowStyle: "none" }}
              />
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center my-5 md:my-10  md:mr-20 justify-around  mx-auto">
              <video
                className="w-96 border rounded border-pink-300 h-[26rem]"
                title="Portfolio1"
                controls
                muted
                autoPlay
                loop
                playsInline
                style={{ scrollbar: "none", msOverflowStyle: "none" }}
                src={story2}
              ></video>
              <div className="text-base  max-w-96 font-semibold text-gray-300 text-left">
                <p className="text-pink-500 text-2xl py-5">Story Telling</p>
                Dive into a world of imagination where a young boy dreams of
                becoming a brave king in the enchanting kingdom of Nellai. Faced
                with a daunting monster threatening his people, the king embarks
                on a courageous journey, overcoming challenges and ultimately
                triumphing over evil. A reminder that courage and determination
                can pave the way for victory, even in the most challenging of
                circumstances.
              </div>
            </div>

            <div className="flex flex-wrap items-center my-5 md:my-10  md:mr-52 justify-around  mx-auto">
              <video
                className="w-96 border rounded border-pink-300 h-[26rem]"
                title="Portfolio1"
                controls
                muted
                autoPlay
                loop
                playsInline
                style={{ scrollbar: "none", msOverflowStyle: "none" }}
                src={alien}
              ></video>
              <div className="text-base  max-w-96 font-semibold text-gray-300 text-left">
                <p className="text-pink-500 text-2xl py-5">Video Generation</p>
                Created this video using ComfyUI.
              </div>
            </div>

            <div className="flex flex-wrap items-center my-5 md:my-10  md:mr-52 justify-around  mx-auto">
              <video
                className="w-96 border rounded border-pink-300 h-[26rem]"
                title="Portfolio1"
                controls
                muted
                autoPlay
                loop
                playsInline
                style={{ scrollbar: "none", msOverflowStyle: "none" }}
                src={alien1}
              ></video>
              <div className="text-base  max-w-96 font-semibold text-gray-300 text-left">
                <p className="text-pink-500 text-2xl py-5">Video Generation</p>
                Created this video using ComfyUI.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradient {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-gradient {
          animation: gradient 8s linear infinite;
        }
        ::-webkit-scrollbar {
          display: none;
        }
        * {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};


 const products = [
   {
     thumbnail: img1,
   },
   {
     thumbnail: img2,
   },
   {
     thumbnail: img3,
   },

   {
     thumbnail: img4,
   },
   {
     thumbnail: img5,
   },
   {
     thumbnail: img6,
   },

   {
     thumbnail: img7,
   },
   {
     thumbnail: img8,
   },
   {
     thumbnail: img9,
   },
   {
     thumbnail: img10,
   },
 ];


const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "About me", href: "#aboutme" },
    { name: "Freelancing", href: "#education" },
    { name: "Art works", href: "#artwork" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle smooth scrolling when clicking navigation links
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => ({
        id: link.href.slice(1),
        element: document.querySelector(link.href),
      }));

      const currentSection = sections.find((section) => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed left-1/2 -translate-x-1/2 top-6 z-50">
        <div className="bg-black/95 backdrop-blur-sm border border-gray-700/50 rounded-full px-12 shadow-lg">
          <div className="flex items-center justify-center h-14">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-16">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-medium text-sm uppercase tracking-wider transition-colors ${
                    activeSection === link.href.slice(1)
                      ? "text-pink-500"
                      : "text-gray-400 hover:text-pink-500"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-3 bg-black/95 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block w-full text-center py-3 text-sm uppercase tracking-wider transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-pink-500"
                    : "text-gray-400 hover:text-pink-500"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </header>
      {/* Main Content */}
      <main>
        <section
          id="aboutme"
          className="min-h-screen bg-gradient-to-b from-black via-black to-purple-900/30 flex items-center px-6"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-16 pt-20">
            {/* Image Container */}
            <div className="w-full md:w-1/2 max-w-lg mx-auto">
              <div className="relative group">
                <div className="aspect-square overflow-hidden rounded-2xl ">
                  <img
                    src={profile} // Replace with your image path
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-transparent rounded-2xl opacity-75 transition-opacity duration-300" />
              </div>
            </div>

            {/* Content Container */}
            <div className="w-full md:w-1/2 space-y-8">
              <div className="space-y-6  text-left">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text">
                    Santhanam M
                  </span>
                </h1>
                <h2 className="text-lg  font-bold text-white">
                  Full Stack Developer | Front End Engineer | AI Artist
                </h2>
              </div>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed  text-left max-w-2xl">
                I'm a passionate developer focused on crafting clean &
                user-friendly experiences. I specialize in building innovative
                solutions that combine cutting-edge technology with creative
                design, always striving to push the boundaries of what's
                possible in web development and AI-driven art.
              </p>

              <button className="group relative flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wider overflow-hidden transition-all hover:scale-105">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 opacity-90 hover:opacity-100 transition-opacity" />

                {/* Button content */}
                <span className="relative z-10 text-white">More About Me</span>
                <ArrowRight className="relative z-10 w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <div id="education">
        <TimelineDemo />
      </div>

      <div id="artwork">
        <HeroParallax products={products} />
        <VideoSection />
      </div>

      <div id="projects">
        {" "}
        <ProjectsSection />
      </div>

      <div className="h-[10rem] flex items-center px-5 justify-center">
        <TextHoverEffect text="Santta  ❤︎" />
      </div>

      <div id="contact">
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
// import {Timeline} from './timeline';  // Changed Timeline to timeline

import { HeroParallax } from "./paralelspace";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About me", href: "#aboutme" },
    { name: "Art works", href: "#artwork" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

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
                  className="font-medium text-sm uppercase tracking-wider transition-colors hover:text-violet-500"
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
                className="block w-full text-center py-3 text-sm uppercase tracking-wider hover:text-violet-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main>
        <section className="min-h-screen bg-gradient-to-b from-black via-black to-purple-900/30 flex items-center px-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-16 pt-20">
            {/* Image Container */}
            <div className="w-full md:w-1/2 max-w-lg mx-auto">
              <div className="relative group">
                <div className="aspect-square overflow-hidden rounded-2xl ">
                  <img
                    src="https://iili.io/2fR8kkN.jpg" // Replace with your image path
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

      <HeroParallax products={products} />
    </div>
  );
};

export default Portfolio;

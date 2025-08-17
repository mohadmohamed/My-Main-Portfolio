  'use client';

  import { motion, AnimatePresence } from 'framer-motion';
  import Link from 'next/link';
  import { useState } from 'react';

  export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Smooth scroll function
    const smoothScrollTo = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 120; // Offset for navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    return (
      <>
        <style jsx global>{`
          .animated-gradient-text {
            background: linear-gradient(90deg, #BF5AF2, #0A84FF, #ff00ff, #00ffff, #ffff00, #BF5AF2);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: gradientFlow 15s cubic-bezier(0.45, 0, 0.55, 1) infinite;
            background-size: 600% 100%;
          }

          @keyframes gradientFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .animated-gradient-bg {
            background: linear-gradient(90deg, #BF5AF2, #0A84FF, #8B5CF6, #3B82F6, #6366F1, #BF5AF2);
            background-size: 600% 100%;
            animation: gradientFlow 15s cubic-bezier(0.45, 0, 0.55, 1) infinite;
          }

          /* Modal styles */
          .modal-overlay {
            position: fixed;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(8px);
            z-index: 99999;
          }

          .modal-container {
            position: fixed;
      
            z-index: 99999;
            width: min(90vw, 500px);
            height: min(90vh, 500px);
            max-height: 80vh;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            overflow: hidden;
            left:35%;
          
          
    
          }

          /* Media queries for modal */
          @media (max-width: 640px) {
            .modal-container {
              width: 95vw;
              height: auto;
              max-height: 80vh;
              aspect-ratio: 1;
              left:10%;         
            }
          }

          @media (max-height: 700px) {
            .modal-container {
              height: 80vh;
              width: auto;
              max-height: 80vh;
              aspect-ratio: 1;
        
          
          
            }
          }

          /* Mobile menu styles */
          .mobile-menu {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            max-width: 250px;
            background: rgba(10, 10, 15, 0.95);
            backdrop-filter: blur(10px);
            z-index: 60;
            padding: 4rem 1.5rem 2rem;
          }

          @media (max-width: 768px) {
            .desktop-nav {
              display: none;
            }
            .mobile-nav {
              display: block;
            }
          }

          @media (min-width: 769px) {
            .mobile-nav {
              display: none;
            }
          }
        `}</style>

        <header className="fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 rounded-2xl bg-[#0A0A0F]/60 backdrop-blur-xl border border-white/5">
          <nav className="relative mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div 
                className="w-10 h-10 rounded-full overflow-hidden cursor-pointer hover:ring-2 hover:ring-[#BF5AF2] transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  setIsModalOpen(true);
                }}
              >
                <img 
                  src="/head.jpg" 
                  alt="Mohad Mohamed" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-base sm:text-xl font-bold text-white tracking-wide" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>Mohad Mohamed</span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              <button 
                onClick={() => smoothScrollTo('about')}
                className="text-white/90 hover:text-white transition-colors cursor-pointer"
              >
                About
              </button>
              <button 
                onClick={() => smoothScrollTo('skills')}
                className="text-white/90 hover:text-white transition-colors cursor-pointer"
              >
                Skills
              </button>
              <button 
                onClick={() => smoothScrollTo('projects')}
                className="text-white/90 hover:text-white transition-colors cursor-pointer"
              >
                Projects
              </button>
              <button 
                onClick={() => smoothScrollTo('contact')}
                className="text-white/90 hover:text-white transition-colors cursor-pointer"
              >
                Contact
              </button>
            </div>

            {/* Social Links - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://github.com/mohadmohamed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#0A84FF] transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/mohad-mohamed-38b901261/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#0077b5] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/+201093758143"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#25D366] transition-colors"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <a
                href="mailto:mohadm756@gmail.com"
                className="text-white/80 hover:text-[#FFA500] transition-colors"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <Link
                href="tel:+201093758143"
                className="ml-2 px-6 py-2 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors"
              >
                Call Me
              </Link>
              <a
                href="https://drive.google.com/file/d/1nNOInhwmi8vhwKdagQ-tOs-gRpik3mK9/view"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-6 py-2 rounded-full animated-gradient-bg text-white font-medium hover:scale-105 hover:shadow-lg hover:shadow-[#BF5AF2]/25 transition-all duration-300 transform"
              >
                My Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="block lg:hidden p-2 text-white/80 hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </nav>
        </header>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div 
                className="mobile-menu"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ 
                  type: "tween",
                  duration: 0.3,
                  ease: "easeInOut"
                }}
              >
                <div className="flex flex-col h-full items-center">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10">
                      <img 
                        src="/head.jpg" 
                        alt="Mohad Mohamed" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mt-3 text-center text-white tracking-wide" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>Mohad Mohamed</h3>
                  </div>
                  
                  <button
                    onClick={() => {
                      smoothScrollTo('about');
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-base sm:text-lg text-white/90 hover:text-white transition-colors py-3 text-center w-auto cursor-pointer"
                  >
                    About
                  </button>
                  <button
                    onClick={() => {
                      smoothScrollTo('skills');
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-base sm:text-lg text-white/90 hover:text-white transition-colors py-3 text-center w-auto cursor-pointer"
                  >
                    Skills
                  </button>
                  <button
                    onClick={() => {
                      smoothScrollTo('projects');
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-base sm:text-lg text-white/90 hover:text-white transition-colors py-3 text-center w-auto cursor-pointer"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => {
                      smoothScrollTo('contact');
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-base sm:text-lg text-white/90 hover:text-white transition-colors py-3 text-center w-auto cursor-pointer"
                  >
                    Contact
                  </button>

                  <div className="flex gap-4 mt-6 justify-center">
                    <a
                      href="https://github.com/mohadmohamed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-[#0A84FF] transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mohad-mohamed-38b901261/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-[#0077b5] transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a
                      href="https://wa.me/+201093758143"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-[#25D366] transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </a>
                    <a
                      href="mailto:mohadm756@gmail.com"
                      className="text-white/80 hover:text-[#FFA500] transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </a>
                  </div>
                  <Link
                    href="tel:+201093758143"
                    className="mt-8 inline-block px-6 py-2 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Call me
                  </Link>
                  <a
                    href="https://drive.google.com/file/d/1nNOInhwmi8vhwKdagQ-tOs-gRpik3mK9/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block px-6 py-2 rounded-full animated-gradient-bg text-white font-medium hover:scale-105 hover:shadow-lg hover:shadow-[#BF5AF2]/25 transition-all duration-300 text-center transform"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Resume
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            </>
          )}
        </AnimatePresence>

        {/* Profile Picture Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="modal-overlay"
              />
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                className="modal-container"
              >
                              <div className="relative w-full h-full flex items-center justify-center p-4">
                  <img
                    src="/head.jpg"
                    alt="Mohad Mohamed"
                    className="max-w-full max-h-full object-contain"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsModalOpen(false);
                    }}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 transition-colors flex items-center justify-center text-white"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    );
  } 
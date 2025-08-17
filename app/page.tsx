'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Background3D from './components/Background3D';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import CTASection from '@/app/components/CTASection';
import Navbar from '@/app/components/Navbar';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <style jsx global>{`
        .animated-gradient-text {
          background: linear-gradient(90deg, #BF5AF2, #0A84FF, #BF5AF2);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradientFlow 8s ease infinite;
          background-size: 300% 100%;
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
      `}</style>

      <main className="min-h-screen pt-20 sm:pt-32 mt-8 sm:mt-16">
        <Navbar />
        
        {/* Hero Section */}
        <section className="min-h-[600px] h-[75vh] sm:h-[85vh] relative flex items-center justify-center overflow-hidden">
          {/* Dark blurry background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#050505]/80 backdrop-blur-xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F]/70 via-[#0A0A0F]/60 to-[#050505]/70" />
          </div>

          {/* 3D Background */}
          <div className="absolute inset-0 z-[1]">
            <Background3D />
          </div>

          {/* Content */}
          <div className="relative z-[2] text-center px-4 max-w-5xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
            >
              <span className="gradient-text !important">
                Empowering Web Development
              </span>
              <br />
              <span className="text-white">with Innovation</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto"
            >
              Building modern, responsive, and user-friendly web applications
              with cutting-edge technologies and creative solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button className="w-auto px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors">
                <a href="https://www.upwork.com/freelancers/~017b1b76aed76cf690" target="_blank" rel="noopener noreferrer">
                  View My Work →
                </a>
              </button>
              <a 
                href="https://wa.me/+201093758143"
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto group relative inline-flex items-center px-8 py-3 rounded-full overflow-hidden animated-gradient-bg hover:scale-105 hover:shadow-lg hover:shadow-[#BF5AF2]/25 transition-all duration-300 transform"
              >
                <span className="relative font-medium text-white z-10">Contact Me</span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* CTA Section */}
        <CTASection />

        {/* Contact Section */}
        <ContactSection />
      </main>
    </>
  );
} 
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
      `}</style>

      <main className="min-h-screen pt-32">
        <Navbar />
        
        {/* Hero Section */}
        <section className="h-[85vh] relative flex items-center justify-center overflow-hidden">
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
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              <span className="animated-gradient-text">
                Empowering Web Development
              </span>
              <br />
              <span className="text-white">with Innovation</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
            >
              Crafting intuitive, cutting-edge digital experiences that transform ideas into reality
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors">
                View My Work →
              </button>
              <button className="px-8 py-3 rounded-full bg-transparent border border-[#0A84FF] text-white font-medium hover:bg-[#0A84FF]/10 transition-colors">
                Contact Me
              </button>
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
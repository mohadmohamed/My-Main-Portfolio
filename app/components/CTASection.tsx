'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section id="cta" className="pt-48 pb-32 relative overflow-hidden bg-[#050505]">
      {/* Enhanced gradient background effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_70%_30%,_#0A84FF_0%,_transparent_40%)]" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_60%,_#BF5AF2_0%,_transparent_40%)]" />
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_50%_70%,_#0A84FF_0%,_transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#050505] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      {/* 3D Rotating Element */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ 
            rotateY: 360,
            y: [0, -20, 0]
          }}
          initial={{ rotateY: 0, y: 0 }}
          transition={{ 
            rotateY: {
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            },
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          style={{
            width: '400px',
            height: '400px',
            position: 'relative',
            transformStyle: 'preserve-3d',
            transform: 'rotateX(60deg)',
          }}
        >
          {/* Main shape */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, #BF5AF2, #0A84FF)',
              borderRadius: '50%',
              transform: 'translateZ(20px)',
              opacity: 0.8,
              boxShadow: '0 0 30px rgba(191, 90, 242, 0.3)',
            }}
          />
          
          {/* Bottom shape for depth */}
          <div 
            className="absolute inset-0"
            style={{
              background: '#0A0A0F',
              borderRadius: '50%',
              transform: 'translateZ(-20px)',
              opacity: 0.5,
            }}
          />

          {/* Glowing edge */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, #BF5AF2, #0A84FF)',
              borderRadius: '50%',
              transform: 'translateZ(0)',
              opacity: 0.3,
              filter: 'blur(8px)',
            }}
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold mb-16"
          >
            <span className="text-white">The future of your industry </span>
            <span className="gradient-text !important">
              starts here.
            </span>
          </motion.h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full mt-8">
            <Link
              href="#contact"
              className="w-auto group relative inline-flex items-center justify-center px-8 py-4 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff]/75 via-[#00ffff]/75 to-[#ffff00]/75 transition-transform duration-500 group-hover:scale-[1.1] opacity-90 animate-gradient bg-[length:300%_100%]"></div>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500"></div>
              <span className="relative text-white font-medium z-10">
                Book a Demo
              </span>
              <svg
                className="relative w-5 h-5 ml-2 text-white transition-transform duration-500 group-hover:translate-x-1 z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <a
              href="https://wa.me/+201093758143"
              target="_blank"
              rel="noopener noreferrer"
              className="w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-all duration-300 group"
            >
              <span>Build Website</span>
              <svg
                className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
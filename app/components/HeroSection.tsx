'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#050505] pt-32 pb-20 px-4">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_70%_30%,_#0A84FF_0%,_transparent_40%)]" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_70%,_#BF5AF2_0%,_transparent_40%)]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_#0A84FF_0%,_transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-white">Empowering </span>
            <span className="gradient-text">Web Development</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-12 px-4"
          >
            Building modern, responsive, and user-friendly web applications
            with cutting-edge technologies and creative solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap px-4"
          >
            <a
              href="https://wa.me/+201093758143"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#BF5AF2] to-[#0A84FF] transition-transform duration-500 group-hover:scale-[1.1]" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A84FF] to-[#BF5AF2] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative text-white font-medium z-10 text-sm sm:text-base">
                Build Website
              </span>
              <svg
                className="relative w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-500 group-hover:translate-x-1 z-10"
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

            <a
              href="https://www.upwork.com/freelancers/~017b1b76aed76cf690"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full overflow-hidden group bg-white/10 hover:bg-white/20 transition-colors"
            >
              <span className="relative text-white font-medium z-10 text-sm sm:text-base">View My Work</span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-500 group-hover:translate-x-1 z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
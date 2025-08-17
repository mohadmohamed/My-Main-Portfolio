'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  const skills = [
    { name: 'Web Development', level: 90 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'React/Next.js', level: 95 },
    { name: 'TypeScript', level: 88 },
    { name: 'Node.js', level: 82 },
    { name: 'AI/ML', level: 75 },
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#050505]">
        {/* Gradient orbs */}
        <div className="absolute top-0 -left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#BF5AF2] to-transparent opacity-30" />
        <div className="absolute top-0 -right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#0A84FF] to-transparent opacity-30" />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            <span className="text-white">About </span>
            <span className="gradient-text !important">Me</span>
          </motion.h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto about-container">
          <div className="lg:w-2/5 px-4">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#BF5AF2] to-[#0A84FF] animate-pulse blur-lg opacity-30" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10">
                <Image
                  src="/about-me.jpg"
                  alt="Mohad Mohamed"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-3/5 max-w-3xl space-y-6 px-6 md:px-8"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Web Developer & AI Enthusiast
            </h3>
            
            <p className="text-white/80 text-lg max-w-2xl">
              I'm a passionate developer focused on creating modern, responsive,
              and intuitive web applications. With expertise in front-end and back-end
              technologies, I bring creative solutions to complex problems.
            </p>

            <p className="text-white/80 text-lg max-w-2xl">
              My approach combines technical excellence with design thinking,
              ensuring that every project not only functions flawlessly but also
              delivers an exceptional user experience.
            </p>

            <p className="text-white/80 text-lg max-w-2xl">
              I specialize in Html, Css, JavaScript, Php, Wordpress, and emerging AI technologies,
              constantly pushing the boundaries of what's possible in web
              development.
            </p>

                         <div className="flex gap-4 pt-4">
               <a
                 href="https://github.com/mohadmohamed"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
               >
                                   <svg className="w-7 h-7 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                 GitHub
               </a>
               <a
                 href="https://www.linkedin.com/in/mohad-mohamed-38b901261/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
               >
                 <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                 </svg>
                 LinkedIn
               </a>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
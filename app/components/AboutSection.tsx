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

        @media (max-width: 1024px) {
          .about-container {
            padding-left: 2rem !important;
            padding-right: 2rem !important;
          }
        }

        @media (max-width: 640px) {
          .about-container {
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
        }
      `}</style>

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
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-white">About </span>
              <span className="animated-gradient-text">
                Me
              </span>
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto about-container">
            <div className="lg:w-2/5">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#BF5AF2] to-[#0A84FF] animate-pulse blur-xl opacity-50" />
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
              className="lg:w-3/5 max-w-3xl space-y-6"
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
                I specialize in React, Node.js, and emerging AI technologies,
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
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/mohad-mohamed-38b901261/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "Responsive Dynamic Pest Control Website",
    description: "A modern, responsive website for a pest control company featuring dynamic content management, service booking, and customer testimonials.",
    skills: ["HTML5", "CSS3", "JavaScript","wordpress"],
    link: "https://yegpest.com/",
    image: "/projects/pest-control.jpg"
  },
  {
    id: 2,
    title: "Dynamic Responsive Coffee Shop Website",
    description: "A full-stack coffee shop website with user authentication, product management, and online ordering system.",
    skills: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"],
    link: "https://www.upwork.com/freelancers/~017b1b76aed76cf690?p=1893109055478996992",
    image: "/projects/coffee-shop.jpg"
  },
  {
    id: 3,
    title: "My Portfolio Responsive Website",
    description: "A personal portfolio website showcasing my work, skills, and experience with a clean, modern design.",
    skills: ["HTML", "CSS"],
    link: "https://mohadmohamed.github.io/My-Portfolio/My%20Portfolio%20HTML%2BCSS/portfolio.html",
    image: "/projects/portfolio.jpg"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-[#050505]">
      <style jsx global>{`
        @keyframes borderAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .project-card {
          position: relative;
          background: linear-gradient(90deg, #BF5AF2, #0A84FF, #BF5AF2);
          background-size: 200% 100%;
          animation: borderAnimation 8s linear infinite;
          padding: 1px;
          border-radius: 1rem;
          transition: all 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 20px rgba(191, 90, 242, 0.2);
        }

        .project-content {
          background: rgba(5, 5, 5, 0.95);
          border-radius: 1rem;
          height: 100%;
        }

        .project-image {
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }
      `}</style>

      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_70%_30%,_#0A84FF_0%,_transparent_40%)]" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_60%,_#BF5AF2_0%,_transparent_40%)]" />
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_50%_70%,_#0A84FF_0%,_transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#050505] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="text-white">Featured </span>
          <span className="gradient-text !important">Projects</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="project-card max-w-sm mx-auto"
            >
              <div className="project-content">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative h-40 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={320}
                      height={180}
                      className="project-image w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-white/70 mb-3 text-sm line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-0.5 text-xs font-medium text-white/80 bg-white/5 rounded-full border border-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.upwork.com/freelancers/~017b1b76aed76cf690"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white font-medium group"
          >
            More Projects
            <svg
              className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1"
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
    </section>
  );
} 
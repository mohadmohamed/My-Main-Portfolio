interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "Responsive Dynamic Pest Control Website",
    description: "A modern, responsive website for a pest control company featuring dynamic content management and booking system",
    image: "/pest-control.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "wordpress"]
  },
  {
    title: "Dynamic Responsive Coffee Shop Website",
    description: "A full-stack coffee shop website with user authentication, product management, and ordering system",
    image: "/coffee-shop.png",
    technologies: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"]
  },
  {
    title: "My Portfolio Responsive Website",
    description: "A personal portfolio website showcasing my work, skills, and experience with a clean, modern design",
    image: "/portfolio.png",
    technologies: ["HTML", "CSS"]
  }
];

export default function ProjectSection() {
  return (
    <section className="py-20">
      <style jsx>{`
        .project-card {
          position: relative;
          border-radius: 24px;
          padding: 1px;
          background: linear-gradient(135deg, #BF5AF2, #0A84FF);
          transition: all 0.3s ease;
        }

        .project-card:hover {
          box-shadow: 0 0 20px rgba(191, 90, 242, 0.3);
        }

        .project-card-content {
          background: rgba(10, 10, 15, 0.95);
          border-radius: 23px;
          height: 100%;
          backdrop-filter: blur(10px);
        }
      `}</style>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card-content p-4">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-white/60 mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-white/5 text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 
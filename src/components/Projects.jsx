import Section from './Section';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

export default function Projects() {
  return (
    <Section id="projects" background="soft">
      {/* Section Header */}
      <div className="max-w-2xl mb-12 lg:mb-16">
        <p className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3">
          Selected Work
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-primary mb-4 leading-tight">
          Featured Projects
        </h2>
        <p className="text-base sm:text-lg text-secondary leading-relaxed">
          A selection of projects that reflect my skills in building responsive,
          functional web applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}

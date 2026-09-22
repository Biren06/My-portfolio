import { useState } from 'react';

export default function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);

  const hasLiveUrl = project.liveUrl && project.liveUrl !== '#';
  const hasGithubUrl = project.githubUrl && project.githubUrl !== '#';

  return (
    <article className="group bg-bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-accent/30 hover:-translate-y-1 flex flex-col">
      {/* Project Image */}
      <div className="relative aspect-video bg-bg-secondary overflow-hidden flex items-center justify-center">
        {!imgError ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center bg-bg-secondary"
            aria-hidden="true"
          >
            <div className="text-center p-6">
              <div className="text-3xl mb-2 font-heading font-bold text-accent/30">
                {project.title.split(' ').map((w) => w[0]).join('')}
              </div>
              <p className="text-xs text-muted">Add image to public{project.image}</p>
            </div>
          </div>
        )}

        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-bg-card/95 backdrop-blur-sm text-xs font-medium text-secondary px-3 py-1 rounded-full border border-border/60 shadow-2xs">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h3 className="font-heading text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-secondary leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-4 pt-3 border-t border-border/50">
            <p className="text-[11px] font-semibold text-secondary uppercase tracking-wider mb-2">
              Key Highlights
            </p>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-secondary/80">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-1.5 truncate">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                  <span className="truncate">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium text-accent bg-accent-light px-2.5 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-border mt-auto">
          {hasLiveUrl ? (
            <a
              href={project.liveUrl}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live demo`}
            >
              <span>View Project</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M5 2h7v7M12 2L2 12" />
              </svg>
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted cursor-default"
              title="Live demo link can be configured in src/data/projects.js"
            >
              <span>View Project</span>
              <span className="text-[10px] bg-bg-secondary text-secondary px-1.5 py-0.5 rounded border border-border">
                Demo
              </span>
            </span>
          )}

          {hasGithubUrl ? (
            <a
              href={project.githubUrl}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-accent transition-colors ml-auto"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted cursor-default ml-auto"
              title="GitHub link can be configured in src/data/projects.js"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

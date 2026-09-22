export default function ExperienceItem({ item, isLast }) {
  return (
    <div className="relative pl-8 sm:pl-10 pb-10 last:pb-0 group">
      {/* Timeline line */}
      {!isLast && (
        <div
          className="absolute left-[11px] sm:left-[15px] top-8 bottom-0 w-px bg-border group-hover:bg-accent/30 transition-colors"
          aria-hidden="true"
        />
      )}

      {/* Timeline dot */}
      <div
        className="absolute left-0 sm:left-1 top-1.5 w-[23px] h-[23px] sm:w-[27px] sm:h-[27px] rounded-full border-2 border-border bg-bg-card flex items-center justify-center group-hover:border-accent transition-colors"
        aria-hidden="true"
      >
        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
      </div>

      {/* Content */}
      <div className="bg-bg-card border border-border rounded-xl p-5 sm:p-6 hover:border-accent/30 hover:shadow-sm transition-all duration-300">
        {/* Period and Location */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3">
          <span className="text-xs font-medium text-accent bg-accent-light px-2.5 py-1 rounded-md w-fit">
            {item.period}
          </span>
          <span className="text-xs text-muted">
            {item.location}
          </span>
        </div>

        {/* Role & Company */}
        <h3 className="font-heading text-lg sm:text-xl font-bold text-primary mb-1">
          {item.role}
        </h3>
        <p className="text-sm font-medium text-secondary mb-4">
          {item.company}
        </p>

        {/* Description */}
        <ul className="space-y-2 mb-4" role="list">
          {item.description.map((point, i) => (
            <li key={`${item.id}-${i}`} className="flex gap-2.5 text-sm text-secondary leading-relaxed">
              <span className="text-accent/60 mt-1.5 shrink-0" aria-hidden="true">
                <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                  <circle cx="3" cy="3" r="3" />
                </svg>
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs text-muted bg-bg-secondary px-2 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

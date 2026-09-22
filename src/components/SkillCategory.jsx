export default function SkillCategory({ category }) {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-5 sm:p-6 hover:border-accent/30 hover:shadow-sm transition-all duration-300">
      {/* Category Header */}
      <div className="flex items-center gap-2.5 mb-4">
        <span className="text-accent text-xs" aria-hidden="true">
          {category.icon || '◆'}
        </span>
        <h3 className="font-heading text-lg font-bold text-primary">
          {category.category}
        </h3>
      </div>

      {/* Skills Tags */}
      <div className="flex flex-wrap gap-2">
        {category.items.map((skill) => (
          <span
            key={skill}
            className="text-sm text-secondary bg-bg-secondary px-3 py-1.5 rounded-lg border border-transparent hover:border-accent/30 hover:text-accent transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

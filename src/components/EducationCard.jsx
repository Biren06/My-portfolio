export default function EducationCard({ item }) {
  const isPrimary = item.primary;

  return (
    <div
      className={`border rounded-xl p-5 sm:p-6 transition-all duration-300 hover:shadow-sm ${
        isPrimary
          ? 'bg-bg-card border-border hover:border-accent/30'
          : 'bg-bg-secondary border-border/60'
      }`}
    >
      {/* Period */}
      <span className="text-xs font-medium text-accent mb-3 block">
        {item.period}
      </span>

      {/* Degree */}
      <h3
        className={`font-heading font-bold text-primary mb-1 leading-snug ${
          isPrimary ? 'text-lg sm:text-xl' : 'text-base'
        }`}
      >
        {item.degree}
      </h3>

      {/* Institution */}
      <p className={`font-medium text-secondary mb-3 ${isPrimary ? 'text-sm' : 'text-xs'}`}>
        {item.institution}
      </p>

      {/* Status or Grade */}
      <div className="flex flex-wrap gap-2">
        {item.status && (
          <span className="text-xs font-medium text-accent bg-accent-light px-2.5 py-1 rounded-md">
            {item.status}
          </span>
        )}
        {item.grade && (
          <span className="text-xs font-medium text-secondary bg-bg-secondary px-2.5 py-1 rounded-md border border-border/60">
            {item.grade}
          </span>
        )}
      </div>
    </div>
  );
}

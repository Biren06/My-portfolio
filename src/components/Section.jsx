export default function Section({
  id,
  children,
  className = '',
  background = 'white',
}) {
  const bgClass = background === 'soft' ? 'bg-bg-secondary' : 'bg-bg-primary';

  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${bgClass} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

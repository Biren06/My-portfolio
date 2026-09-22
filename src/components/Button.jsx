export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  type = 'button',
  className = '',
  download,
  target,
  rel,
  disabled = false,
  'aria-label': ariaLabel,
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-body font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

  const variants = {
    primary:
      'bg-accent text-btn-accent-text px-6 py-3 text-sm rounded-lg hover:bg-accent-hover active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-xs',
    secondary:
      'border border-border text-primary px-6 py-3 text-sm rounded-lg hover:border-secondary hover:bg-bg-secondary active:scale-[0.98]',
    ghost:
      'text-secondary text-sm hover:text-accent px-3 py-2',
  };

  const resolvedRel = target === '_blank' ? (rel || 'noopener noreferrer') : rel;
  const disabledClasses = disabled ? 'opacity-50 pointer-events-none cursor-not-allowed' : '';
  const classes = `${base} ${variants[variant]} ${disabledClasses} ${className}`;

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        className={classes}
        download={download}
        target={target}
        rel={resolvedRel}
        aria-label={ariaLabel}
        aria-disabled={disabled ? 'true' : undefined}
        tabIndex={disabled ? -1 : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

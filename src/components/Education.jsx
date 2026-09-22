import Section from './Section';
import EducationCard from './EducationCard';
import education from '../data/education';

export default function Education() {
  const primaryEdu = education.filter((e) => e.primary);
  const secondaryEdu = education.filter((e) => !e.primary);

  return (
    <Section id="education" background="white">
      {/* Section Header */}
      <div className="max-w-2xl mb-12 lg:mb-16">
        <p className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3">
          Academic Background
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-primary mb-4 leading-tight">
          Education
        </h2>
      </div>

      {/* Primary Education */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 max-w-3xl mb-5">
        {primaryEdu.map((item) => (
          <EducationCard key={item.id} item={item} />
        ))}
      </div>

      {/* Secondary Education */}
      {secondaryEdu.length > 0 && (
        <div className="max-w-sm">
          {secondaryEdu.map((item) => (
            <EducationCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </Section>
  );
}

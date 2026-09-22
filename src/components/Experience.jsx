import Section from './Section';
import ExperienceItem from './ExperienceItem';
import experience from '../data/experience';

export default function Experience() {
  return (
    <Section id="experience" background="soft">
      {/* Section Header */}
      <div className="max-w-2xl mb-12 lg:mb-16">
        <p className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3">
          Career
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-primary mb-4 leading-tight">
          Experience
        </h2>
        <p className="text-base sm:text-lg text-secondary leading-relaxed">
          Internships and professional roles where I've applied and expanded my
          technical skills.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-2xl lg:max-w-3xl">
        {experience.map((item, index) => (
          <ExperienceItem
            key={item.id}
            item={item}
            isLast={index === experience.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}

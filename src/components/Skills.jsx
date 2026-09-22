import Section from './Section';
import SkillCategory from './SkillCategory';
import skills from '../data/skills';

export default function Skills() {
  return (
    <Section id="skills" background="white">
      {/* Section Header */}
      <div className="max-w-2xl mb-12 lg:mb-16">
        <p className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3">
          Technologies
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-primary mb-4 leading-tight">
          Skills & Tools
        </h2>
        <p className="text-base sm:text-lg text-secondary leading-relaxed">
          Technologies and tools I've worked with through academic projects,
          internships, and personal learning.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {skills.map((category) => (
          <SkillCategory key={category.category} category={category} />
        ))}
      </div>
    </Section>
  );
}

import { useState } from 'react';
import Button from './Button';
import resume from '../assets/Resume.pdf';
import profilePhoto from '../assets/Profilephoto.jpeg';

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-bg-primary pt-16 lg:pt-18"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content — 60% on desktop */}
          <div className="w-full lg:w-[58%] text-center lg:text-left order-2 lg:order-1">
            {/* Eyebrow */}
            <p className="animate-fade-in-up text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4 lg:mb-5">
              Final-Year Computer Engineering Student
            </p>

            {/* Name */}
            <h1 className="animate-fade-in-up animate-delay-100 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-primary leading-[1.1] tracking-tight mb-4 lg:mb-5">
              Biren
              <br />
              Badrakiya
            </h1>

            {/* Role */}
            <p className="animate-fade-in-up animate-delay-200 text-lg sm:text-xl lg:text-2xl font-heading font-medium text-secondary mb-5 lg:mb-6">
              Junior Full-Stack Developer
            </p>

            {/* Description */}
            <p className="animate-fade-in-up animate-delay-200 text-base sm:text-lg text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Final-year Computer Engineering student with hands-on internship
              exposure to DevOps and cloud-native workflows, including Docker,
              Linux, and automation, alongside solid full-stack development
              skills in JavaScript, Node.js, React, and SQL databases.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button href="#projects" variant="primary">
                <span>View Projects</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M8 3v10M3 8l5 5 5-5" />
                </svg>
              </Button>
              <Button
                href={resume}
                variant="secondary"
                download
                aria-label="Download resume PDF"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M2 11v2a1 1 0 001 1h10a1 1 0 001-1v-2M8 2v9M5 8l3 3 3-3" />
                </svg>
                <span>Download Resume</span>
              </Button>
            </div>

            {/* Tech stack hint */}
            <div className="animate-fade-in-up animate-delay-400 mt-10 lg:mt-12 flex items-center gap-3 justify-center lg:justify-start text-muted text-xs tracking-wide">
              <span className="w-8 h-px bg-border" aria-hidden="true" />
              <span>React · Docker · Linux · DevOps</span>
              <span className="w-8 h-px bg-border" aria-hidden="true" />
            </div>
          </div>

          {/* Profile Image — 40% on desktop */}
          <div className="w-full lg:w-[42%] flex justify-center order-1 lg:order-2 animate-fade-in-up">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-full lg:max-w-sm lg:h-auto lg:aspect-[4/5]">
              {/* Decorative accent */}
              <div className="absolute -inset-3 bg-accent/5 rounded-2xl -rotate-3" aria-hidden="true" />
              <div className="absolute -inset-1 bg-accent/10 rounded-2xl rotate-1" aria-hidden="true" />

              {/* Image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-bg-card border border-border flex items-center justify-center">
                {!imageError ? (
                  <img
                    src={profilePhoto}
                    alt="Biren Badrakiya — Junior Full-Stack Developer"
                    className="w-full h-full object-cover"
                    loading="eager"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center bg-bg-card text-muted"
                    aria-hidden="true"
                  >
                    <div className="text-center p-6">
                      <div className="text-5xl mb-3 font-heading font-bold text-accent/30">BB</div>
                      <p className="text-xs text-muted">Add profile.jpg to<br />public/assets/</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

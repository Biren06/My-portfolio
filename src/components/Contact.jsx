import { useState, useCallback, useEffect } from 'react';
import Section from './Section';
import Button from './Button';
import resume from '../assets/Resume.pdf';

const initialFormState = { name: '', email: '', message: '' };

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | success | sending

  useEffect(() => {
    if (status === 'sending') {
      const sendTimer = setTimeout(() => {
        setStatus('success');
        setForm(initialFormState);
        setErrors({});
      }, 400);
      return () => clearTimeout(sendTimer);
    }
    if (status === 'success') {
      const resetTimer = setTimeout(() => {
        setStatus('idle');
      }, 6000);
      return () => clearTimeout(resetTimer);
    }
  }, [status]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    setErrors((prev) => {
      if (prev[name]) {
        const next = { ...prev };
        delete next[name];
        return next;
      }
      return prev;
    });
  }, []);

  const validate = useCallback(() => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  }, [form]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const newErrors = validate();

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      setStatus('sending');

      // Log to console — structured so an API / EmailJS / Formspree can be connected later
      console.log('Contact form submitted:', {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        timestamp: new Date().toISOString(),
      });
    },
    [form, validate]
  );

  return (
    <Section id="contact" background="soft">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        {/* Left: Contact Info */}
        <div className="lg:col-span-2">
          <p className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3">
            Get in Touch
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-primary mb-4 leading-tight">
            Let's Build
            <br className="hidden sm:block" />
            Something
          </h2>
          <p className="text-base sm:text-lg text-secondary leading-relaxed mb-8">
            Have a project, opportunity, or idea worth discussing? Feel free to
            get in touch.
          </p>

          {/* Contact Details */}
          <div className="space-y-3.5">
            <a
              href="mailto:biren.badrakiya06@gmail.com"
              className="flex items-center gap-3 text-sm text-secondary hover:text-accent transition-colors group"
            >
              <span className="w-10 h-10 rounded-lg bg-bg-card border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors shrink-0 shadow-2xs">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <span className="truncate">biren.badrakiya06@gmail.com</span>
            </a>

            <a
              href="tel:+919054520264"
              className="flex items-center gap-3 text-sm text-secondary hover:text-accent transition-colors group"
            >
              <span className="w-10 h-10 rounded-lg bg-bg-card border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors shrink-0 shadow-2xs">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span>+91 90545 20264</span>
            </a>

            <div className="flex items-center gap-3 text-sm text-secondary">
              <span className="w-10 h-10 rounded-lg bg-bg-card border border-border flex items-center justify-center shrink-0 shadow-2xs">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span>Rajkot, Gujarat, India</span>
            </div>

            <a
              href="https://github.com/Biren06"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-secondary hover:text-accent transition-colors group"
            >
              <span className="w-10 h-10 rounded-lg bg-bg-card border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors shrink-0 shadow-2xs">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </span>
              <span>github.com/Biren06</span>
            </a>

            <a
              href="https://www.linkedin.com/in/biren-badrakiya-b724b8265/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-secondary hover:text-accent transition-colors group"
            >
              <span className="w-10 h-10 rounded-lg bg-bg-card border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors shrink-0 shadow-2xs">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </span>
              <span>LinkedIn Profile</span>
            </a>

            <a
              href={resume}
              download
              className="flex items-center gap-3 text-sm text-secondary hover:text-accent transition-colors group"
            >
              <span className="w-10 h-10 rounded-lg bg-bg-card border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors shrink-0 shadow-2xs">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14,2 14,8 20,8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </span>
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-3">
          <div className="bg-bg-card border border-border rounded-xl p-6 sm:p-8 shadow-xs">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center" role="status">
                <div className="w-14 h-14 rounded-full bg-accent-light flex items-center justify-center mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="text-accent">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  Message Sent
                </h3>
                <p className="text-sm text-secondary max-w-sm">
                  Thank you for reaching out! I will review your message and reply as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-primary mb-1.5"
                    >
                      Name <span className="text-accent" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 text-sm bg-bg-secondary border rounded-lg placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors ${
                        errors.name ? 'border-red-400' : 'border-border'
                      }`}
                      aria-invalid={errors.name ? 'true' : undefined}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-red-500" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-primary mb-1.5"
                    >
                      Email <span className="text-accent" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      placeholder="your.email@example.com"
                      className={`w-full px-4 py-3 text-sm bg-bg-secondary border rounded-lg placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors ${
                        errors.email ? 'border-red-400' : 'border-border'
                      }`}
                      aria-invalid={errors.email ? 'true' : undefined}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-red-500" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-primary mb-1.5"
                    >
                      Message <span className="text-accent" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project, team opportunity, or idea..."
                      className={`w-full px-4 py-3 text-sm bg-bg-secondary border rounded-lg placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-y min-h-[120px] ${
                        errors.message ? 'border-red-400' : 'border-border'
                      }`}
                      aria-invalid={errors.message ? 'true' : undefined}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-xs text-red-500" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full sm:w-auto"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <circle cx="12" cy="12" r="10" opacity="0.25" />
                          <path d="M12 2a10 10 0 019.95 9" opacity="0.75" />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

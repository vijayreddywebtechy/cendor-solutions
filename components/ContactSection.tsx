"use client";
import { useState } from "react";
import AnimateIn from "@/components/common/AnimateIn";

type Props = {};

function ContactSection({}: Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    // 👉 integrate API here later
  };

  return (
    <section className="py-32 bg-obsidian">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2">
            {/* Header */}
            <AnimateIn animationClass="animate-fade-in" delay="animation-delay-100">
              <div className="w-12 h-px bg-gold mb-12" />
            </AnimateIn>

            <AnimateIn delay="animation-delay-200">
              <h2 className="font-bodoni text-4xl lg:text-5xl text-ivory mb-6">
                Book a Discovery Conversation
              </h2>
            </AnimateIn>

            <AnimateIn delay="animation-delay-300">
              <p className="text-lg text-stone mb-12 font-light">
                Complete the form below and we'll get back to you within one
                business day.
              </p>
            </AnimateIn>

            {/* Form */}
            <AnimateIn delay="animation-delay-400">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormInput
                  label="Name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />

                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormInput
                  label="Company"
                  name="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={handleChange}
                />

                <FormInput
                  label="Phone (optional)"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-gold mb-4 uppercase tracking-widest">
                  Tell us about your needs
                </label>

                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about your Salesforce project, challenges, or requirements..."
                  className="w-full px-0 py-4 bg-transparent border-b border-stone/30 text-ivory focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-stone/50"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="bg-gold text-obsidian px-12 py-5 hover:bg-gold-dark transition-all duration-300 text-sm tracking-widest uppercase !mt-16"
              >
                Send Message
              </button>
            </form>
            </AnimateIn>
          </div>

          <AnimateIn className="lg:col-span-1" delay="animation-delay-300">
            <div className="bg-charcoal p-10 lg:p-12 sticky top-32">
              <h3 className="font-bodoni text-2xl text-ivory mb-10">
                Contact Information
              </h3>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border border-gold/30 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-mail w-5 h-5 text-gold"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gold mb-2 uppercase tracking-widest">
                      Email
                    </div>
                    <a
                      href="mailto:hello@cendor.com"
                      className="text-stone hover:text-ivory transition-colors font-light"
                    >
                      hello@cendor.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border border-gold/30 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-map-pin w-5 h-5 text-gold"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gold mb-2 uppercase tracking-widest">
                      Location
                    </div>
                    <div className="text-stone font-light">
                      Serving clients globally
                    </div>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border border-gold/30 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-linkedin w-5 h-5 text-gold"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gold mb-2 uppercase tracking-widest">
                      LinkedIn
                    </div>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone hover:text-ivory transition-colors font-light"
                    >
                      Follow us on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-12 border-t border-border">
                <h4 className="text-xs font-medium text-gold mb-6 uppercase tracking-widest">
                  What to Expect
                </h4>
                <ul className="space-y-4 text-sm text-stone font-light">
                  <li className="flex gap-3">
                    <span className="text-gold">—</span>
                    <span>Response within one business day</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold">—</span>
                    <span>Initial discovery conversation (30-45 minutes)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold">—</span>
                    <span>
                      Proposal and approach recommendation if there's a fit
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

type InputProps = {
  label: string;
  name: string;
  type: string;
  value?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function FormInput({
  label,
  name,
  type,
  value,
  required,
  onChange,
}: InputProps) {
  return (
    <div>
      <label className="block text-xs font-medium text-gold mb-4 uppercase tracking-widest">
        {label}
      </label>

      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-0 py-4 bg-transparent border-b border-stone/30 text-ivory focus:outline-none focus:border-gold transition-colors placeholder:text-stone/50"
      />
    </div>
  );
}

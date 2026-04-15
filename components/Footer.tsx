import Link from "next/link";

type LinkItem = {
  label: string;
  href: string;
};

const services: LinkItem[] = [
  { label: "Implementation", href: "/services" },
  { label: "Managed Services", href: "/services" },
  { label: "Platform Assessment", href: "/services" },
  { label: "Architecture", href: "/services" },
];

const company: LinkItem[] = [
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

function Footer() {
  return (
    <footer className="bg-obsidian border-t border-border">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gold"></div>
              <span className="text-lg tracking-[0.05em] text-ivory font-light uppercase">
                Cendor Solutions
              </span>
            </div>

            <p className="text-stone leading-relaxed max-w-md">
              Premium Salesforce consulting, delivery, and managed services for
              discerning enterprise organisations.
            </p>
          </div>

          {/* Services */}
          <FooterColumn title="Services" links={services} />

          {/* Company */}
          <FooterColumn title="Company" links={company} />

          {/* Connect */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-medium text-gold mb-6 uppercase tracking-widest">
              Connect
            </h4>

            <div className="flex gap-6 mb-8">
              <SocialLink href="https://linkedin.com">
                <LinkedInIcon />
              </SocialLink>

              <SocialLink href="mailto:hello@cendor.com">
                <MailIcon />
              </SocialLink>
            </div>
            <a
              href="mailto:hello@cendor.com"
              className="text-sm text-stone hover:text-gold transition-colors duration-300"
            >
              hello@cendor.com
            </a>
          </div>
        </div>

        <div className="pt-12 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-stone tracking-wide">
              © 2026 Cendor Solutions. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link 
                href="/"
                className="text-xs text-stone hover:text-gold transition-colors duration-300 tracking-wide"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-xs text-stone hover:text-gold transition-colors duration-300 tracking-wide"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="md:col-span-2">
      <h4 className="text-xs font-medium text-gold mb-6 uppercase tracking-widest">
        {title}
      </h4>

      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-stone hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
function SocialLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-stone hover:text-gold transition-colors duration-300"
    >
      <span className="w-5 h-5 block">{children}</span>
    </a>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

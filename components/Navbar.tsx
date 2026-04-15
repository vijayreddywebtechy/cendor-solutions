"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicator, setIndicator] = useState<{
    left: number;
    width: number;
  } | null>(null);

  useEffect(() => {
    const activeIndex = navLinks.findIndex((l) => l.href === pathname);
    const activeEl = linkRefs.current[activeIndex];
    const container = navRef.current;
    if (activeEl && container) {
      const containerLeft = container.getBoundingClientRect().left;
      const elRect = activeEl.getBoundingClientRect();
      setIndicator({ left: elRect.left - containerLeft, width: elRect.width });
    } else {
      setIndicator(null);
    }
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-obsidian/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-[1600px] mx-auto px-8 lg:px-16 h-24 flex items-center justify-between">
        {/* Logo — vertical gold bar + wordmark */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-1 h-8 bg-gold" />
          <span className="text-xl tracking-[0.05em] text-ivory font-light uppercase">
            Cendor Solutions
          </span>
        </Link>

        <div className="flex items-center gap-12">
          {/* Desktop nav links */}
          <div
            ref={navRef}
            className="hidden md:flex items-center gap-10 relative"
          >
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  ref={(el) => {
                    linkRefs.current[i] = el;
                  }}
                  className={`font-manrope text-sm tracking-wide transition-colors duration-300 py-3 ${isActive ? "text-gold" : "text-stone hover:text-ivory"}`}
                >
                  {link.label}
                </Link>
              );
            })}
            {/* Sliding bottom indicator */}
            {indicator && (
              <span
                className="absolute bottom-0 h-px bg-gold transition-all duration-300 ease-in-out"
                style={{ left: indicator.left, width: indicator.width }}
              />
            )}
          </div>

          {/* INQUIRE button — gold outline */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="border border-gold text-gold px-8 py-3 hover:bg-gold hover:text-obsidian transition-all duration-300 text-sm tracking-wider uppercase"
            >
              Inquire
            </Link>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-foreground transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6px]" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-foreground transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-foreground transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6px]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-card border-t border-white/[0.06] overflow-hidden transition-all duration-300 ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-8 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-body text-sm tracking-[0.1em] uppercase text-ivory hover:text-gold transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="font-body text-[11px] tracking-[0.25em] uppercase px-6 py-3 border border-gold text-gold text-center"
            onClick={() => setOpen(false)}
          >
            Inquire
          </Link>
        </div>
      </div>
    </header>
  );
}

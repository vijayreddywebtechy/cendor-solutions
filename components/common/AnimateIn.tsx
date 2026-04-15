"use client";

import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Extra CSS classes applied once element is visible */
  animationClass?: string;
  /** Delay class e.g. "animation-delay-200" */
  delay?: string;
  /** Fraction of the element that must be visible before triggering (0–1) */
  threshold?: number;
  /** Trigger only once (default: true) */
  once?: boolean;
  as?: keyof React.JSX.IntrinsicElements;
};

export default function AnimateIn({
  children,
  className,
  animationClass = "animate-fade-in-up",
  delay,
  threshold = 0.15,
  once = true,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const Comp = Tag as React.ElementType;

  return (
    <Comp
      ref={ref}
      className={twMerge(
        "pre-animate",
        visible && animationClass,
        visible && delay,
        className
      )}
    >
      {children}
    </Comp>
  );
}

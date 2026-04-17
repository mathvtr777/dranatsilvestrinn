import { useEffect, useRef, ReactNode } from "react";

type Variant = "up" | "down" | "left" | "right" | "scale" | "fade" | "blur";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: Variant;
  duration?: number;
}

const Reveal = ({
  children,
  delay = 0,
  className = "",
  variant = "up",
  duration = 1000,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;

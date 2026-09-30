import { useEffect, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

export function PageShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="snap-page min-h-screen overflow-x-hidden bg-background">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" key={pathname} className="page-enter">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

export function Hero({
  image,
  eyebrow,
  title,
  subtitle,
  children,
  alt,
}: {
  image: string;
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  children?: ReactNode;
  alt: string;
}) {
  return (
    <section
      className="snap-section relative flex min-h-[100svh] items-center justify-center overflow-hidden"
      aria-labelledby="page-hero-heading"
    >
      <div className="media-frame absolute inset-0">
        <img
          src={image}
          alt={alt}
          width={1920}
          height={1088}
          fetchPriority="high"
          decoding="async"
          className="media-zoom absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-ink/72" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink opacity-80"
        aria-hidden="true"
      />

      <div className="hero-shell relative z-10 pt-24 pb-16">
        <p className="fade-up text-xs uppercase tracking-[0.4em] text-signal">{eyebrow}</p>
        <h1
          id="page-hero-heading"
          className="fade-up mx-auto mt-7 max-w-4xl text-balance-tight font-display text-[clamp(2.15rem,6vw,4.5rem)] leading-[1.05] font-semibold"
          style={{ animationDelay: "80ms" }}
        >
          {title}
        </h1>
        <p
          className="fade-up mx-auto mt-7 max-w-2xl text-base text-muted-foreground sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          {subtitle}
        </p>
        {children ? (
          <div
            className="fade-up mt-10 flex w-full flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "240ms" }}
          >
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  ariaLabelledBy,
}: {
  children: ReactNode;
  className?: string;
  ariaLabelledBy?: string;
}) {
  return (
    <section
      className={cn(
        "snap-section flex min-h-[100svh] items-center border-t border-border py-20 sm:py-24",
        className,
      )}
      aria-labelledby={ariaLabelledBy}
    >
      <div className="shell w-full">{children}</div>
    </section>
  );
}

export function SectionImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("media-frame", className)}>
      <img
        src={src}
        alt={alt}
        width={1600}
        height={1104}
        loading="lazy"
        decoding="async"
        className={cn(
          "media-zoom h-[280px] w-full object-cover sm:h-[380px] lg:h-[520px]",
        )}
      />
    </Reveal>
  );
}

export function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

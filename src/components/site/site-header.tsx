import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CtaLink } from "./cta-link";
import { SiteLogo } from "./site-logo";
import { useScrolled } from "./page-shell";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Dan" },
  { to: "/how-i-work", label: "How I Work" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={cn(
        "site-header fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl",
        scrolled && "is-scrolled",
      )}
    >
      <div className="shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 sm:py-3.5">
        <Link
          to="/"
          className="group flex min-w-0 items-center"
          onClick={() => setOpen(false)}
          aria-label="TTN Talent home"
        >
          <SiteLogo className="transition-opacity duration-300 group-hover:opacity-90" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "nav-link text-foreground" }}
              inactiveProps={{ className: "nav-link text-muted-foreground" }}
              className="text-sm"
            >
              {item.label}
            </Link>
          ))}
          <CtaLink to="/contact" className="px-5 py-2.5">
            Start a Search
          </CtaLink>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 shrink-0 place-items-center border border-border transition-colors hover:bg-accent md:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-navigation"
          className="mobile-drawer border-t border-border bg-background md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="shell flex max-h-[calc(100svh-4.5rem)] flex-col overflow-y-auto py-6" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 font-display text-2xl tracking-tight transition-colors hover:text-signal"
              >
                {item.label}
              </Link>
            ))}
            <CtaLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 px-5 py-3.5 text-center"
            >
              Start a Search
            </CtaLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

import { Link } from "@tanstack/react-router";
import { Mail, Linkedin, Share2, Clock } from "lucide-react";
import { SiteLogo } from "./site-logo";
import { SITE, hasContactEmail, mailtoHref } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="snap-section border-t border-border bg-background py-14">
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_auto_auto]">
          <div className="min-w-0">
            <Link to="/" className="group inline-flex items-center" aria-label="TTN Talent home">
              <SiteLogo
                className="transition-opacity duration-300 group-hover:opacity-90"
                imgClassName="h-10 sm:h-11"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Through the noise. To the right hire. Specialist search across AI, machine learning
              and frontier research.
            </p>
          </div>

          <nav className="flex flex-col gap-3 text-sm text-muted-foreground" aria-label="Footer">
            <Link to="/" className="footer-link">
              Home
            </Link>
            <Link to="/about" className="footer-link">
              About Dan
            </Link>
            <Link to="/how-i-work" className="footer-link">
              How I Work
            </Link>
            <Link to="/contact" className="footer-link">
              Contact
            </Link>
          </nav>

          <div className="flex flex-col gap-3 text-sm">
            {hasContactEmail() ? (
              <a
                href={mailtoHref()}
                className="footer-link flex items-center gap-2 text-muted-foreground"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                {SITE.email}
              </a>
            ) : (
              <p className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                {SITE.email}
              </p>
            )}
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="footer-link flex items-center gap-2 text-muted-foreground"
            >
              <Linkedin className="h-4 w-4 shrink-0" aria-hidden="true" />
              LinkedIn
            </a>
            <p className="flex items-center gap-2 text-muted-foreground">
              <Share2 className="h-4 w-4 shrink-0" aria-hidden="true" />
              {SITE.otherSocial}
            </p>
            <p className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
              {SITE.availability}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} TTN Talent. All rights reserved.</p>
          <p>
            This website is powered by{" "}
            <a
              href={SITE.poweredBy.url}
              target="_blank"
              rel="noreferrer"
              className="text-signal transition-opacity hover:opacity-80"
            >
              {SITE.poweredBy.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

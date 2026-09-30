import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, Linkedin, Clock, Share2 } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { PageShell, Hero, Section } from "@/components/site/page-shell";
import { CtaAnchor, CtaLink } from "@/components/site/cta-link";
import { Reveal } from "@/components/site/reveal";
import { buildPageHead, SITE, hasContactEmail, mailtoHref } from "@/lib/site";
import heroContact from "@/assets/hero-contact.jpg";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildPageHead({
      title: "Contact TTN Talent — Start a Search",
      description:
        "Start a search with Dan Kirkpatrick at TTN Talent. Specialist AI, machine learning and frontier research hiring.",
      path: "/contact",
      keywords:
        "contact TTN Talent, start AI search, Dan Kirkpatrick email, machine learning recruitment enquiry, hire AI talent",
    }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const formId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Search enquiry — ${String(data.get("company") || "")}`;
    const body = [
      `Name: ${String(data.get("name") || "")}`,
      `Company: ${String(data.get("company") || "")}`,
      `Email: ${String(data.get("email") || "")}`,
      `Role(s): ${String(data.get("role") || "")}`,
      "",
      String(data.get("message") || ""),
    ].join("\n");

    if (hasContactEmail()) {
      window.location.href = mailtoHref(subject, body);
    }
    setSent(true);
  }

  return (
    <PageShell>
      <Hero
        image={heroContact}
        alt="A quiet, empty meeting room lit by daylight"
        eyebrow="Start a search"
        title="Let's talk"
        subtitle="Tell me what you're building and who you need. If it's a fit, we'll start."
      >
        {hasContactEmail() ? (
          <CtaAnchor href={mailtoHref()}>
            {SITE.email} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </CtaAnchor>
        ) : (
          <CtaLink to="/contact">
            {SITE.email} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </CtaLink>
        )}
      </Hero>

      <Section ariaLabelledBy="contact-heading">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <Reveal>
            <p className="rule-signal text-xs uppercase tracking-[0.32em] text-signal">
              Get in touch
            </p>
            <h2
              id="contact-heading"
              className="mt-8 text-3xl leading-tight font-semibold sm:text-4xl"
            >
              Direct to Dan. No account managers.
            </h2>
            <div className="mt-10 space-y-5 text-sm">
              {hasContactEmail() ? (
                <a
                  href={mailtoHref()}
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                  {SITE.email}
                </a>
              ) : (
                <p className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                  {SITE.email}
                </p>
              )}
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                Connect on LinkedIn
              </a>
              <p className="flex items-center gap-3 text-muted-foreground">
                <Share2 className="h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                {SITE.otherSocial}
              </p>
              <p className="flex items-center gap-3 text-muted-foreground">
                <Clock className="h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                {SITE.availability}
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={handleSubmit}
              className="grid gap-4"
              aria-describedby={sent ? `${formId}-status` : undefined}
              noValidate={false}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${formId}-name`} className="sr-only">
                    Your name
                  </label>
                  <input
                    id={`${formId}-name`}
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="form-field"
                  />
                </div>
                <div>
                  <label htmlFor={`${formId}-company`} className="sr-only">
                    Company
                  </label>
                  <input
                    id={`${formId}-company`}
                    name="company"
                    required
                    autoComplete="organization"
                    placeholder="Company"
                    className="form-field"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${formId}-email`} className="sr-only">
                    Work email
                  </label>
                  <input
                    id={`${formId}-email`}
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Work email"
                    className="form-field"
                  />
                </div>
                <div>
                  <label htmlFor={`${formId}-role`} className="sr-only">
                    Role(s) you're hiring
                  </label>
                  <input
                    id={`${formId}-role`}
                    name="role"
                    placeholder="Role(s) you're hiring"
                    className="form-field"
                  />
                </div>
              </div>
              <div>
                <label htmlFor={`${formId}-message`} className="sr-only">
                  What are you building, and who do you need?
                </label>
                <textarea
                  id={`${formId}-message`}
                  name="message"
                  rows={5}
                  required
                  placeholder="What are you building, and who do you need?"
                  className="form-field resize-y"
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Start a Search <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              {sent ? (
                <p id={`${formId}-status`} className="text-sm text-muted-foreground" role="status">
                  {hasContactEmail()
                    ? "Your email client should now be open with the details ready to send."
                    : "Thanks — your enquiry details are ready. Contact email will be added here."}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </Section>
    </PageShell>
  );
}

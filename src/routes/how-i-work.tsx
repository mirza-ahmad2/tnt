import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Compass, Users, FileSearch, Handshake, Cpu, LineChart, Atom } from "lucide-react";
import { PageShell, Hero, Section, SectionImage } from "@/components/site/page-shell";
import { CtaLink } from "@/components/site/cta-link";
import { Reveal } from "@/components/site/reveal";
import { buildPageHead } from "@/lib/site";
import heroWork from "@/assets/hero-work.jpg";
import sectionSignal from "@/assets/section-signal.jpg";

export const Route = createFileRoute("/how-i-work")({
  head: () =>
    buildPageHead({
      title: "How I Work — TTN Talent Search Process",
      description:
        "The TTN Talent search model: 3-5 assignments at a time, every resume reviewed by a human, focused on AI, machine learning and frontier research roles.",
      path: "/how-i-work",
      keywords:
        "TTN Talent process, AI search process, human-reviewed recruitment, low-volume executive search, machine learning hiring process",
    }),
  component: HowIWork,
});

const steps = [
  {
    icon: Compass,
    step: "01",
    title: "Scope the search",
    body: "We start with the work, not the job title — what the team is building, what the first six months look like, and what 'right' actually means here.",
  },
  {
    icon: Users,
    step: "02",
    title: "Work the network",
    body: "Two decades of relationships across AI, ML and data science, approached directly and personally rather than broadcast to a list.",
  },
  {
    icon: FileSearch,
    step: "03",
    title: "Human review, every time",
    body: "Every resume is read by a human. No automated or algorithmic screening decides who you see.",
  },
  {
    icon: Handshake,
    step: "04",
    title: "Shortlist and close",
    body: "A short, considered shortlist with context on each person, then hands-on support through process, offer and close.",
  },
];

const focus = [
  {
    icon: Cpu,
    title: "Artificial intelligence",
    body: "Applied AI engineers, AI platform leadership and the people who put models into production.",
  },
  {
    icon: LineChart,
    title: "Machine learning",
    body: "ML engineering and data science across the full lifecycle, from individual contributors to functional leads.",
  },
  {
    icon: Atom,
    title: "Frontier research",
    body: "Research scientists and research leadership working at the edge of what is currently possible.",
  },
];

function HowIWork() {
  return (
    <PageShell>
      <Hero
        image={heroWork}
        alt="Two people in a focused one-on-one conversation"
        eyebrow="The search model"
        title="How I work"
        subtitle="Only 3–5 assignments at a time, so every search gets focused, dedicated attention."
      >
        <CtaLink to="/contact">
          Start a Search <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </CtaLink>
      </Hero>

      <Section ariaLabelledBy="work-model">
        <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-2">
          <Reveal className="min-w-0">
            <p className="rule-signal text-xs uppercase tracking-[0.32em] text-signal">
              The model
            </p>
            <h2
              id="work-model"
              className="mt-8 max-w-xl text-3xl leading-tight font-semibold sm:text-5xl"
            >
              Three to five searches. Not thirty.
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground">
              High-volume recruitment optimises for throughput. This practice optimises for the
              hire. Capping live assignments is what makes it possible to read every resume, know
              every candidate and stay genuinely close to your process.
            </p>
          </Reveal>
          <SectionImage
            src={sectionSignal}
            alt="A single blue signal line through dark noise"
          />
        </div>
      </Section>

      <Section ariaLabelledBy="work-process">
        <Reveal>
          <p id="work-process" className="rule-signal text-xs uppercase tracking-[0.32em] text-signal">
            The process
          </p>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, index) => (
              <Reveal key={item.step} delay={index * 70} className="surface-card">
                <div className="flex items-center justify-between">
                  <item.icon className="h-6 w-6 text-signal" aria-hidden="true" />
                  <span className="font-display text-sm text-muted-foreground">{item.step}</span>
                </div>
                <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section ariaLabelledBy="work-focus">
        <Reveal>
          <p className="rule-signal text-xs uppercase tracking-[0.32em] text-signal">Focus areas</p>
          <h2
            id="work-focus"
            className="mt-8 max-w-2xl text-3xl leading-tight font-semibold sm:text-5xl"
          >
            Where the searches happen.
          </h2>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-3">
            {focus.map((item, index) => (
              <Reveal key={item.title} delay={index * 80} className="surface-card">
                <item.icon className="h-6 w-6 text-signal" aria-hidden="true" />
                <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <CtaLink to="/contact">
              Let's Talk <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </CtaLink>
          </div>
        </Reveal>
      </Section>
    </PageShell>
  );
}

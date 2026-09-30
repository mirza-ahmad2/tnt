import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, Hero, Section } from "@/components/site/page-shell";
import { CtaLink } from "@/components/site/cta-link";
import { Reveal } from "@/components/site/reveal";
import { buildPageHead } from "@/lib/site";
import heroAbout from "@/assets/hero-about.jpg";
import sectionTeam from "@/assets/section-team.jpg";
import danKirkpatrick from "@/assets/dan-kirkpatrick.jpg";

export const Route = createFileRoute("/about")({
  head: () =>
    buildPageHead({
      title: "About Dan Kirkpatrick — Founder, TTN Talent",
      description:
        "Dan Kirkpatrick has been hiring AI talent since 2005, including 22+ years at JAM Recruitment as VP of Data Science and Machine Learning Recruitment.",
      path: "/about",
      keywords:
        "Dan Kirkpatrick, TTN Talent founder, AI recruitment expert, machine learning hiring, JAM Recruitment, executive search partner",
    }),
  component: About,
});

const timeline = [
  {
    marker: "2005",
    title: "Before the category existed",
    body: "Dan started placing AI and machine learning talent in 2005 — years before 'AI hiring' was something firms advertised.",
  },
  {
    marker: "22+ yrs",
    title: "JAM Recruitment",
    body: "Over two decades with one firm, most recently as VP, Data Science and Machine Learning Recruitment, and previously as Group Director.",
  },
  {
    marker: "Now",
    title: "TTN Talent",
    body: "Launched as his own specialist practice after that 22-year run — built around focus, human judgement and deep relationships.",
  },
];

function About() {
  return (
    <PageShell>
      <Hero
        image={heroAbout}
        alt="Portrait of an experienced search partner in a dark office"
        eyebrow="Founder & Search Partner"
        title="Dan Kirkpatrick"
        subtitle="Hiring AI talent since 2005 — before 'AI hiring' existed as a category."
      >
        <CtaLink to="/contact">
          Start a Search <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </CtaLink>
      </Hero>

      <Section ariaLabelledBy="about-story">
        <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <Reveal className="media-frame mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
            <img
              src={danKirkpatrick}
              alt="Dan Kirkpatrick, Founder of TTN Talent"
              width={450}
              height={450}
              loading="lazy"
              decoding="async"
              className="media-zoom aspect-square h-auto w-full object-cover object-top"
            />
          </Reveal>
          <div className="min-w-0">
            <Reveal>
              <p className="rule-signal text-xs uppercase tracking-[0.32em] text-signal">The story</p>
              <h2
                id="about-story"
                className="mt-8 text-3xl leading-tight font-semibold sm:text-5xl"
              >
                A specialist, not a generalist with a specialism.
              </h2>
            </Reveal>
            <Reveal delay={100} className="mt-6 space-y-6 text-muted-foreground">
              <p>
                Dan has spent his entire career in one place on the map: AI, machine learning and data
                science hiring. That started in 2005, long before the market discovered the category,
                and it continued through 22+ years at JAM Recruitment — first building teams as Group
                Director, later as VP, Data Science and Machine Learning Recruitment.
              </p>
              <p>
                TTN Talent is what came next. Not a bigger machine, but a smaller, sharper one: a
                single search partner, a handful of assignments, and relationships across the AI and
                ML landscape that took two decades to build.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section ariaLabelledBy="about-track">
        <Reveal>
          <p id="about-track" className="rule-signal text-xs uppercase tracking-[0.32em] text-signal">
            The track
          </p>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-3">
            {timeline.map((item, index) => (
              <Reveal key={item.marker} delay={index * 80} className="surface-card">
                <p className="font-display text-4xl font-semibold text-signal">{item.marker}</p>
                <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section ariaLabelledBy="about-pov">
        <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-2">
          <Reveal className="min-w-0">
            <p className="rule-signal text-xs uppercase tracking-[0.32em] text-signal">
              The point of view
            </p>
            <h2
              id="about-pov"
              className="mt-8 max-w-xl text-3xl leading-tight font-semibold sm:text-5xl"
            >
              Human judgement is the differentiator.
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground">
              Algorithmic screening and one-click applications made application volume explode while
              making the right match harder to find. Dan's answer is the opposite of scale: fewer
              searches, every resume read by a human, and a shortlist that reflects genuine
              understanding of the work rather than keyword overlap.
            </p>
          </Reveal>
          <Reveal className="media-frame">
            <img
              src={sectionTeam}
              alt="A team collaborating in a dark modern workspace"
              width={1600}
              height={1104}
              loading="lazy"
              decoding="async"
              className="media-zoom h-[280px] w-full object-cover sm:h-[380px] lg:h-[520px]"
            />
          </Reveal>
        </div>
      </Section>
    </PageShell>
  );
}

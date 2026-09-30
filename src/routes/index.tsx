import { createFileRoute } from "@tanstack/react-router";
import { ScanSearch, UserCheck, Layers, ArrowRight } from "lucide-react";
import { PageShell, Hero, Section, SectionImage } from "@/components/site/page-shell";
import { CtaLink } from "@/components/site/cta-link";
import { Reveal } from "@/components/site/reveal";
import { buildPageHead } from "@/lib/site";
import { SITE } from "@/lib/site";
import heroHome from "@/assets/hero-home.jpg";
import sectionSignal from "@/assets/section-signal.jpg";
import danKirkpatrick from "@/assets/dan-kirkpatrick.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    buildPageHead({
      title: "TTN Talent — Through the noise. To the right hire.",
      description:
        "Specialist executive search for AI, machine learning and frontier research roles. Human-reviewed, low-volume, high-attention hiring led by Dan Kirkpatrick.",
      path: "/",
      keywords:
        "TTN Talent, AI executive search, machine learning recruitment, frontier research hiring, Dan Kirkpatrick, specialist AI talent",
    }),
  component: Home,
});

const differentiators = [
  {
    icon: Layers,
    title: "3–5 assignments at a time",
    body: "A deliberate departure from high-volume recruitment. Every search gets focused, dedicated attention rather than a place in a queue.",
  },
  {
    icon: UserCheck,
    title: "Every resume read by a human",
    body: "No automated or algorithmic screening. Judgement, context and nuance decide who reaches your shortlist.",
  },
  {
    icon: ScanSearch,
    title: "Hiring AI talent since 2005",
    body: "Two decades of relationships across AI, machine learning and data science — built long before AI hiring became a category.",
  },
];

function Home() {
  return (
    <PageShell>
      <Hero
        image={heroHome}
        alt="A researcher working late in a darkened AI lab"
        eyebrow="AI · Machine Learning · Frontier Research"
        title={
          <>
            Through the noise.
            <br />
            To the right hire.
          </>
        }
        subtitle="A specialist executive search partner helping startups and scale-ups hire across AI, machine learning and frontier research."
      >
        <CtaLink to="/contact">
          Start a Search <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </CtaLink>
        <CtaLink to="/how-i-work" variant="secondary">
          How I work
        </CtaLink>
      </Hero>

      <Section ariaLabelledBy="home-problem">
        <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-2">
          <Reveal className="min-w-0">
            <p className="rule-signal text-xs uppercase tracking-[0.32em] text-signal">
              The problem
            </p>
            <h2
              id="home-problem"
              className="mt-8 max-w-xl text-3xl leading-tight font-semibold sm:text-5xl"
            >
              One-click applications made volume explode. They didn't make matching easier.
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground">
              Algorithmic resume screening filters for keywords, not for the researcher who will
              actually change the trajectory of your team. Authenticity and human judgement are the
              differentiator in AI-era hiring — so that's what TTN Talent is built on.
            </p>
          </Reveal>
          <SectionImage
            src={sectionSignal}
            alt="A single line of blue light cutting through dark visual noise"
          />
        </div>
      </Section>

      <Section ariaLabelledBy="home-difference">
        <Reveal>
          <p className="rule-signal text-xs uppercase tracking-[0.32em] text-signal">
            The difference
          </p>
          <h2
            id="home-difference"
            className="mt-8 max-w-2xl text-3xl leading-tight font-semibold sm:text-5xl"
          >
            Low volume. High attention. Human throughout.
          </h2>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-3">
            {differentiators.map((item, index) => (
              <Reveal key={item.title} delay={index * 80} className="surface-card">
                <item.icon className="h-6 w-6 text-signal" aria-hidden="true" />
                <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section ariaLabelledBy="home-credibility">
        <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-2">
          <Reveal className="order-2 media-frame mx-auto w-full max-w-md lg:order-1 lg:mx-0 lg:max-w-none">
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
          <Reveal className="order-1 min-w-0 lg:order-2">
            <p className="rule-signal text-xs uppercase tracking-[0.32em] text-signal">
              The credibility
            </p>
            <h2
              id="home-credibility"
              className="mt-8 max-w-xl text-3xl leading-tight font-semibold sm:text-5xl"
            >
              Twenty-two years, one specialism.
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground">
              Dan Kirkpatrick spent 22+ years at JAM Recruitment, most recently as VP, Data Science
              and Machine Learning Recruitment, and previously as Group Director. TTN Talent is the
              specialist practice built on that run.
            </p>
            <CtaLink to="/about" variant="ghost" className="mt-8">
              Read Dan's story <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </CtaLink>
          </Reveal>
        </div>
      </Section>

      <Section className="justify-center text-center" ariaLabelledBy="home-cta">
        <Reveal>
          <h2
            id="home-cta"
            className="mx-auto max-w-3xl text-3xl leading-tight font-semibold sm:text-6xl"
          >
            Hiring for AI, ML or frontier research?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Tell me what you're building and who you need. If it's a fit, we'll start.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <CtaLink to="/contact">
              Let's Talk <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </CtaLink>
            <CtaLink to="/contact" variant="secondary">
              {SITE.email}
            </CtaLink>
          </div>
        </Reveal>
      </Section>
    </PageShell>
  );
}

export const SITE = {
  name: "TTN Talent",
  tagline: "Through the noise. To the right hire.",
  url: "https://ttn-talent.com",
  email: "Add here",
  author: "Dan Kirkpatrick",
  linkedin: "https://www.linkedin.com/company/ttn-talent/",
  otherSocial: "Add here",
  availability: "Add here",
  poweredBy: {
    name: "Involiq",
    url: "https://www.involiq.tech/",
  },
  description:
    "Specialist executive search for AI, machine learning and frontier research roles, led by Dan Kirkpatrick.",
  keywords:
    "TTN Talent, Dan Kirkpatrick, AI recruitment, machine learning hiring, executive search, frontier research, AI talent, ML recruitment, specialist search, startup hiring",
  ogImage: "/og-image.jpg",
  locale: "en_GB",
} as const;

export function hasContactEmail() {
  return SITE.email.includes("@");
}

export function mailtoHref(subject?: string, body?: string) {
  if (!hasContactEmail()) return "#";
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${SITE.email}${query ? `?${query}` : ""}`;
}

export type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  ogImage?: string;
  type?: "website" | "article";
};

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalized === "/" ? "" : normalized}`;
}

export function buildPageHead({
  title,
  description,
  path,
  keywords = SITE.keywords,
  ogImage = SITE.ogImage,
  type = "website",
}: PageSeoInput) {
  const url = absoluteUrl(path);
  const image = ogImage.startsWith("http") ? ogImage : absoluteUrl(ogImage);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "author", content: SITE.name },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:site_name", content: SITE.name },
      { property: "og:locale", content: SITE.locale },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: `${SITE.name} — ${SITE.tagline}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      { name: "twitter:image:alt", content: `${SITE.name} — ${SITE.tagline}` },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    ...(hasContactEmail() ? { email: SITE.email } : {}),
    sameAs: [SITE.linkedin],
    image: absoluteUrl(SITE.ogImage),
    slogan: SITE.tagline,
    founder: {
      "@type": "Person",
      name: SITE.author,
    },
    areaServed: "Worldwide",
    serviceType: [
      "Executive search",
      "AI talent recruitment",
      "Machine learning hiring",
      "Frontier research recruitment",
    ],
  };
}

import type { Metadata } from "next";
import Link from "next/link";
import { env } from "@/lib/env";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  title: "Eggy Tech Stack Docs",
  description:
    "Internal documentation for the Eggy engineering stack. Learn how our backend, tooling, and workflows fit together to ship features consistently.",
  keywords: [
    "Eggy",
    "tech stack",
    "internal docs",
    "NestJS",
    "MongoDB",
    "developer onboarding",
  ],
  openGraph: {
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "/twitter-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const navSections = [
  {
    title: "Backend Overview",
    description:
      "Architecture, deployment model, and core patterns for the Eggy API.",
    href: "/docs/backend",
  },
  {
    title: "Tutorial",
    description:
      "Step-by-step guide to build the NestJS + MongoDB task service used in production.",
    href: "/docs/tutorial",
  },
];

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 space-y-16">
      <header className="space-y-4 text-center">
        <h1 className="text-4xl font-bold text-fd-foreground">
          Eggy Tech Stack Documentation
        </h1>
        <p className="text-lg text-fd-muted-foreground">
          A single source of truth for internal developers. Learn how our
          services are built, how to get set up locally, and the practices we
          follow to ship reliably.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {navSections.map(({ title, description, href }) => (
          <Link
            key={title}
            href={href}
            className="group block rounded-xl border border-fd-border bg-fd-card/60 p-5 transition hover:border-fd-primary"
          >
            <h2 className="text-xl font-semibold text-fd-foreground group-hover:text-fd-primary">
              {title}
            </h2>
            <p className="mt-2 text-sm text-fd-muted-foreground">
              {description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-fd-primary">
              Explore
              <span aria-hidden>→</span>
            </span>
          </Link>
        ))}
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-fd-foreground">
          How to use these docs
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-fd-muted-foreground">
          <li>
            New to Eggy? Start with the tutorial to build the reference Task API
            and learn the controller/service pattern we use everywhere.
          </li>
          <li>
            Touching production code? Review the backend overview and deployment
            sections so you understand lambda packaging, environment management,
            and monitoring.
          </li>
          <li>
            Need a refresher? Use the search or sidebar to jump directly to DTO
            guidelines, testing practices, or troubleshooting tips.
          </li>
        </ul>
      </section>
    </main>
  );
}

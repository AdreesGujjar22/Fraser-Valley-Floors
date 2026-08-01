import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingQuote } from "@/components/FloatingQuote";
import { Toaster } from "@/components/ui/sonner";
import { site } from "@/data/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const localBusinessLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["HomeAndConstructionBusiness", "FlooringContractor"],
      "@id": `${site.url}/#organization`,
      name: site.name,
      description:
        "Residential and commercial flooring, epoxy floor coatings, and concrete resurfacing across Fraser Valley, BC.",
      telephone: site.phone,
      email: site.email,
      url: site.url,
      priceRange: "$$",
      image: `${site.url}/Fraser-Valley-Floors.png`,
      logo: `${site.url}/Fraser-Valley-Floors.png`,
      areaServed: [
        "Abbotsford",
        "Surrey",
        "Delta",
        "Langley",
        "Chilliwack",
        "Maple Ridge",
        "Mission",
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 49.0504,
        longitude: -122.3045,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "20253 72 Ave",
        addressLocality: "Langley",
        addressRegion: "BC",
        postalCode: "V2Y 1S8",
        addressCountry: "CA",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.phone,
        contactType: "customer service",
        areaServed: "CA-BC",
        availableLanguage: "English",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Flooring & Coating Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Epoxy Floor Coatings",
              description:
                "Durable epoxy coatings for garage floors, commercial & industrial spaces.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Polyaspartic Floor Coatings",
              description:
                "One-day UV-stable polyaspartic coatings for residential & commercial floors.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Hardwood & Vinyl Flooring Installation",
              description:
                "Expert installation of hardwood, engineered, luxury vinyl plank, and laminate flooring.",
            },
          },
        ],
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "07:00",
          closes: "18:00",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      alternateName: "Fraser Valley Floors Ltd.",
      description: "Fraser Valley's premier flooring contractor and concrete coating specialist.",
      publisher: {
        "@id": `${site.url}/#organization`,
      },
    },
    {
      "@type": "ItemList",
      "@id": `${site.url}/#sitenavigation`,
      name: "Main Site Navigation",
      itemListElement: [
        {
          "@type": "SiteNavigationElement",
          position: 1,
          name: "Services | Epoxy & Polyaspartic Coatings",
          description:
            "Explore garage coatings, commercial epoxy, polyaspartic, hardwood, and vinyl flooring.",
          url: `${site.url}/services`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 2,
          name: "Projects & Portfolio",
          description:
            "Browse completed epoxy floor coating and custom flooring installations across Fraser Valley.",
          url: `${site.url}/projects`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 3,
          name: "About Fraser Valley Floors",
          description:
            "Learn about Fraser Valley's premier flooring contractor and concrete coating specialist.",
          url: `${site.url}/about`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 4,
          name: "Contact Us | Free Estimate",
          description:
            "Get a fast, free written estimate for your garage coating or flooring project.",
          url: `${site.url}/contact`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 5,
          name: "Flooring & Coating Guides | Blog",
          description:
            "Read expert tips, care guides, and comparison articles on epoxy coatings and flooring.",
          url: `${site.url}/blog`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 6,
          name: "Service Locations Across Fraser Valley",
          description:
            "Flooring and epoxy coating services in Abbotsford, Surrey, Langley, Chilliwack, and more.",
          url: `${site.url}/locations`,
        },
      ],
    },
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Fraser Valley Floors: Flooring & Epoxy Coating Specialist" },
      {
        name: "description",
        content:
          "Fraser Valley Floors offers residential & commercial flooring, epoxy garage coatings, polyaspartic systems, and hardwood installation across Fraser Valley, BC. Get a free quote today!",
      },
      { name: "author", content: site.name },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "googlebot", content: "index, follow" },
      { name: "geo.region", content: "CA-BC" },
      { name: "geo.placename", content: "Fraser Valley, British Columbia" },
      { property: "og:site_name", content: site.name },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_CA" },
      { property: "og:url", content: site.url },
      { property: "og:image", content: `${site.url}/Fraser-Valley-Floors.png` },
      { property: "og:image:alt", content: `${site.name} logo` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${site.url}/Fraser-Valley-Floors.png` },
      { name: "twitter:image:alt", content: `${site.name} logo` },
    ],
    links: [
      { rel: "canonical", href: site.url },
      {
        rel: "alternate",
        type: "text/markdown",
        href: "/llms.txt",
        title: "Clean Markdown Content for AI Assistants",
      },
      { rel: "icon", type: "image/png", href: "/Fraser-Valley-Floors.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800;900&family=Inter:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-D8YJ6WSGHW",
      },
      {
        children: `window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'G-D8YJ6WSGHW');`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <FloatingQuote />
      </div>
      <Toaster richColors position="top-center" />
    </QueryClientProvider>
  );
}

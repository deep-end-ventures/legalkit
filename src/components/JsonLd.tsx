export function WebsiteJsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://legalkit.vercel.app";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "LegalKit",
        description: "Generate professional privacy policies, terms of service, and cookie policies for your business in minutes.",
        publisher: {
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "LegalKit",
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
        },
        parentOrganization: {
          "@type": "Organization",
          name: "Deep End Ventures",
          url: "https://deependventures.com",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "LegalKit",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Free tier available — AI-powered legal document generation",
        },
        description: "AI-powered privacy policy, terms of service, and cookie policy generator. Not a law firm.",
        url: baseUrl,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BlogPostJsonLd({
  title,
  description,
  date,
  slug,
}: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://legalkit.vercel.app";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    url: `${baseUrl}/blog/${slug}`,
    publisher: {
      "@type": "Organization",
      name: "LegalKit",
      url: baseUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

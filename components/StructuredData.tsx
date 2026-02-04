export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Simprint',
    url: 'https://www.simprint.cc',
    logo: 'https://www.simprint.cc/logo.png',
    description:
      'Professional anti-detect browser for teams. Create unique browser fingerprints and eliminate account correlation risks.',
    sameAs: [
      // 可以添加社交媒体链接
      // 'https://twitter.com/simprint',
      // 'https://github.com/simprint',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      // email: 'support@simprint.com',
    },
  };

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Simprint',
    applicationCategory: 'BrowserApplication',
    operatingSystem: 'Windows, macOS, Linux',
    description:
      'Professional anti-detect browser for teams. Create unique browser fingerprints for each profile and eliminate account correlation risks entirely.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Simprint',
    url: 'https://www.simprint.cc',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.simprint.cc/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, faqSchema, serviceSchema, breadcrumbSchema, itemListSchema }) {
  const defaultTitle = "Yotvis — Building Digital Presence | Web Design & Development";
  const defaultDescription = "Most businesses struggle to stand out online. Yotvis helps you build a stronger digital presence through branding, high-performance websites, AI automation, and cloud systems.";
  const defaultKeywords = "Yotvis, Web Design, Web Development, App Development, UI/UX Design, Branding, AI Automation, Cloud Solutions, Digital Agency";

  const seoTitle = title ? `${title} | Yotvis` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  
  // Calculate canonical URL based on window.location if not provided
  const canonicalUrl = ogUrl || (typeof window !== 'undefined' ? `https://yotvis.com${window.location.pathname}` : "https://yotvis.com");
  
  // Generate FAQ Schema JSON-LD if provided
  const schemaMarkup = faqSchema ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqSchema.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const globalSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Yotvis",
      "url": "https://yotvis.com",
      "logo": "https://yotvis.com/logo.png",
      "description": "Yotvis is a digital service studio. We are the creators of vision into digital presence, offering premium web design, app development, and AI automation.",
      "sameAs": [
        "https://www.linkedin.com/company/yotvis/",
        "https://www.instagram.com/yotvis_tech"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://yotvis.com",
      "name": "Yotvis",
      "description": "Yotvis is a digital service studio. We are the creators of vision into digital presence.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://yotvis.com/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Yotvis",
      "image": "https://yotvis.com/og-image.jpg",
      "url": "https://yotvis.com",
      "telephone": "+91-9876543210", 
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600000", 
        "addressCountry": "IN"
      },
      "areaServed": "Chennai, Tamil Nadu, India, and Global"
    }
  ];

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl || "https://yotvis.com"} />
      <meta property="og:title" content={ogTitle || seoTitle} />
      <meta property="og:description" content={ogDescription || seoDescription} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={ogUrl || "https://yotvis.com"} />
      <meta name="twitter:title" content={ogTitle || seoTitle} />
      <meta name="twitter:description" content={ogDescription || seoDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Global JSON-LD Schemas */}
      {globalSchema.map((schema, index) => (
        <script key={`global-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}

      {/* Dynamic JSON-LD Schemas */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      {itemListSchema && (
        <script type="application/ld+json">
          {JSON.stringify(itemListSchema)}
        </script>
      )}
    </Helmet>
  );
}

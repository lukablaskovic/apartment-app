import { useHead } from "@vueuse/head";

/**
 * Comprehensive SEO composable for apartment rental app
 * Provides dynamic meta tag management using VueUse Head
 */
export function useSEO(options = {}) {
  const {
    title = "Apartment Luka - Luxury Vacation Rental in Pula, Croatia",
    description = "Modern & elegant 2-bedroom apartment in Pula, Croatia. 100m² with garden, WiFi, parking. Perfect for families. Book direct and save on booking fees!",
    keywords = "apartment rental, Pula Croatia, vacation rental, holiday apartment, Istria, Adriatic coast, family accommodation, luxury vacation rental",
    image = "https://apartment-luka.eu/og-image.jpg",
    url = "https://apartment-luka.eu/",
    type = "website",
    locale = "en_US",
    siteName = "Apartment Luka",
    twitterHandle = "@apartmentluka",
    author = "Apartment Luka",
    robots = "index, follow",
    canonical = null,
    structuredData = null,
  } = options;

  // Generate canonical URL
  const canonicalUrl = canonical || url;

  // Structured data for rich snippets
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    name: "Apartment Luka",
    description: description,
    url: url,
    image: image,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pula",
      addressCountry: "HR",
      addressRegion: "Istria",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "44.8666",
      longitude: "13.8496",
    },
    priceRange: "€€",
    numberOfBedrooms: 2,
    floorSize: {
      "@type": "QuantitativeValue",
      value: "100",
      unitCode: "MTK",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "WiFi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Parking",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Garden",
        value: true,
      },
    ],
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  // Set comprehensive meta tags
  useHead({
    title,
    meta: [
      // Basic SEO
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "author", content: author },
      { name: "robots", content: robots },
      { name: "language", content: "English" },
      { name: "geo.region", content: "HR" },
      { name: "geo.placename", content: "Pula, Croatia" },

      // Open Graph / Facebook
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: siteName },
      { property: "og:locale", content: locale },

      // Twitter Card
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:url", content: url },
      { property: "twitter:title", content: title },
      { property: "twitter:description", content: description },
      { property: "twitter:image", content: image },
      { property: "twitter:site", content: twitterHandle },
      { property: "twitter:creator", content: twitterHandle },

      // Additional SEO
      { name: "theme-color", content: "#FFC107" },
      { name: "msapplication-TileColor", content: "#FFC107" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { name: "apple-mobile-web-app-title", content: siteName },
      { name: "application-name", content: siteName },
      { name: "mobile-web-app-capable", content: "yes" },

      // Viewport and performance
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, viewport-fit=cover",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      // Canonical URL
      { rel: "canonical", href: canonicalUrl },

      // Preconnect for performance
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },

      // Favicons (already in index.html, but can be overridden)
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#FFC107" },
    ],
    script: [
      // Structured data
      {
        type: "application/ld+json",
        children: JSON.stringify(finalStructuredData),
      },
    ],
  });

  // Return reactive title for dynamic updates
  return {
    title,
    description,
    updateTitle: (newTitle) => {
      useHead({ title: newTitle });
    },
    updateDescription: (newDescription) => {
      useHead({
        meta: [
          { name: "description", content: newDescription },
          { property: "og:description", content: newDescription },
          { property: "twitter:description", content: newDescription },
        ],
      });
    },
    updateImage: (newImage) => {
      useHead({
        meta: [
          { property: "og:image", content: newImage },
          { property: "twitter:image", content: newImage },
        ],
      });
    },
  };
}

/**
 * SEO composable for specific pages
 */
export function usePageSEO(pageOptions = {}) {
  const defaultOptions = {
    title: "Apartment Luka - Luxury Vacation Rental in Pula, Croatia",
    description:
      "Modern & elegant 2-bedroom apartment in Pula, Croatia. 100m² with garden, WiFi, parking. Perfect for families. Book direct and save on booking fees!",
    keywords:
      "apartment rental, Pula Croatia, vacation rental, holiday apartment, Istria, Adriatic coast, family accommodation",
    image: "https://apartment-luka.eu/og-image.jpg",
    url: "https://apartment-luka.eu/",
    type: "website",
  };

  return useSEO({ ...defaultOptions, ...pageOptions });
}

/**
 * SEO composable for gallery page
 */
export function useGallerySEO() {
  return usePageSEO({
    title: "Photo Gallery - Apartment Luka, Pula Croatia",
    description:
      "Explore our beautiful apartment through our photo gallery. See the modern interiors, comfortable bedrooms, fully equipped kitchen, and private garden.",
    keywords:
      "apartment photos, Pula apartment gallery, vacation rental photos, Istria accommodation images",
    type: "website",
  });
}

/**
 * SEO composable for contact page
 */
export function useContactSEO() {
  return usePageSEO({
    title: "Contact Us - Apartment Luka, Pula Croatia",
    description:
      "Get in touch with us to book your stay at Apartment Luka in Pula, Croatia. Direct booking available with no booking fees.",
    keywords:
      "contact apartment Luka, book Pula apartment, vacation rental contact, Istria accommodation booking",
    type: "website",
  });
}

/**
 * SEO composable for amenities page
 */
export function useAmenitiesSEO() {
  return usePageSEO({
    title: "Amenities & Services - Apartment Luka, Pula Croatia",
    description:
      "Discover all the amenities and services available at Apartment Luka. WiFi, parking, garden, fully equipped kitchen, and more.",
    keywords:
      "apartment amenities, Pula apartment facilities, vacation rental services, Istria accommodation features",
    type: "website",
  });
}

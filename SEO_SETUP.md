# SEO Setup for Apartment Luka Vue.js App

This document explains the comprehensive SEO setup implemented using VueUse Head utilities.

## 🚀 What's Been Implemented

### 1. VueUse Head Integration

- Added `@vueuse/head` to `main.js`
- Created comprehensive SEO composables
- Dynamic meta tag management

### 2. SEO Composables (`src/composables/useSEO.js`)

#### Main Functions:

- `useSEO()` - Comprehensive SEO setup with all meta tags
- `usePageSEO()` - Simplified page-specific SEO
- `useGallerySEO()` - Gallery page SEO
- `useContactSEO()` - Contact page SEO
- `useAmenitiesSEO()` - Amenities page SEO

#### Features:

- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ Structured data (JSON-LD)
- ✅ Canonical URLs
- ✅ Meta robots
- ✅ Geo-location tags
- ✅ Mobile optimization tags
- ✅ Performance optimization (preconnect)

### 3. Structured Data

Implemented Schema.org markup for:

- VacationRental type
- Address information
- Geo-coordinates
- Amenities
- Pricing information

### 4. Sitemap & Robots

- `public/sitemap.xml` - XML sitemap for search engines
- `public/robots.txt` - Crawling instructions

## 📝 How to Use

### Basic Usage in Components:

```javascript
import { usePageSEO } from "@/composables/useSEO";

export default {
  setup() {
    usePageSEO({
      title: "Your Page Title",
      description: "Your page description",
      keywords: "your, keywords, here",
      url: "https://apartment-luka.eu/your-page",
    });
  },
};
```

### Advanced Usage:

```javascript
import { useSEO } from "@/composables/useSEO";

export default {
  setup() {
    const { updateTitle, updateDescription } = useSEO({
      title: "Dynamic Title",
      description: "Dynamic description",
      structuredData: {
        // Custom structured data
      },
    });

    // Update meta tags dynamically
    updateTitle("New Title");
    updateDescription("New description");
  },
};
```

### Page-Specific SEO:

```javascript
// Gallery page
import { useGallerySEO } from "@/composables/useSEO";

export default {
  setup() {
    useGallerySEO();
  }
}

// Contact page
import { useContactSEO } from "@/composables/useSEO";

export default {
  setup() {
    useContactSEO();
  }
}
```

## 🔧 Meta Tags Included

### Basic SEO:

- `title` - Page title
- `description` - Page description
- `keywords` - Page keywords
- `author` - Content author
- `robots` - Search engine crawling instructions
- `language` - Page language
- `geo.region` - Geographic region
- `geo.placename` - Geographic location

### Open Graph (Facebook/LinkedIn):

- `og:type` - Content type
- `og:url` - Page URL
- `og:title` - Page title
- `og:description` - Page description
- `og:image` - Featured image
- `og:image:width` - Image width
- `og:image:height` - Image height
- `og:site_name` - Site name
- `og:locale` - Language/locale

### Twitter Card:

- `twitter:card` - Card type
- `twitter:url` - Page URL
- `twitter:title` - Page title
- `twitter:description` - Page description
- `twitter:image` - Featured image
- `twitter:site` - Twitter handle
- `twitter:creator` - Content creator

### Mobile & Performance:

- `viewport` - Mobile viewport settings
- `theme-color` - Browser theme color
- `apple-mobile-web-app-capable` - iOS web app support
- `format-detection` - Disable phone number detection

## 📊 Structured Data (JSON-LD)

The app includes structured data for:

- **VacationRental** type
- **Address** information
- **GeoCoordinates** for location
- **AmenityFeature** for facilities
- **QuantitativeValue** for apartment size

Example:

```json
{
  "@context": "https://schema.org",
  "@type": "VacationRental",
  "name": "Apartment Luka",
  "description": "Modern & elegant 2-bedroom apartment...",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pula",
    "addressCountry": "HR"
  },
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "WiFi",
      "value": true
    }
  ]
}
```

## 🎯 SEO Best Practices Implemented

### 1. Performance Optimization

- Preconnect to external domains
- Optimized viewport settings
- Efficient meta tag management

### 2. Mobile Optimization

- Responsive viewport settings
- Mobile web app capabilities
- Touch-friendly interface considerations

### 3. Social Media Optimization

- Open Graph tags for Facebook/LinkedIn
- Twitter Card tags
- Proper image dimensions

### 4. Search Engine Optimization

- Structured data markup
- Canonical URLs
- Proper robots meta tags
- XML sitemap
- Robots.txt file

### 5. Local SEO

- Geographic meta tags
- Local business structured data
- Location-specific keywords

## 🔄 Dynamic Updates

The SEO composables support dynamic updates:

```javascript
const { updateTitle, updateDescription, updateImage } = useSEO();

// Update title dynamically
updateTitle("New Page Title");

// Update description dynamically
updateDescription("New page description");

// Update social media image
updateImage("https://example.com/new-image.jpg");
```

## 📈 Monitoring & Testing

### Tools to Test Your SEO:

1. **Google Search Console** - Monitor indexing and performance
2. **Google Rich Results Test** - Test structured data
3. **Facebook Sharing Debugger** - Test Open Graph tags
4. **Twitter Card Validator** - Test Twitter Card tags
5. **Lighthouse** - Performance and SEO audits

### Key Metrics to Monitor:

- Page load speed
- Mobile usability
- Core Web Vitals
- Search rankings
- Social media engagement

## 🚀 Next Steps

1. **Update Content**: Replace placeholder content with your actual apartment details
2. **Add Images**: Create and optimize Open Graph images (1200x630px recommended)
3. **Monitor Performance**: Set up Google Search Console and Analytics
4. **Local SEO**: Add more specific local keywords and content
5. **Reviews**: Implement review structured data when you have guest reviews

## 📞 Support

For questions about the SEO setup or VueUse Head implementation, refer to:

- [VueUse Head Documentation](https://vueuse.org/head/)
- [Schema.org Documentation](https://schema.org/)
- [Google SEO Guidelines](https://developers.google.com/search/docs)

---

**Note**: This SEO setup provides a solid foundation for search engine optimization. Regular monitoring and updates based on performance data will help maximize your apartment rental's online visibility.

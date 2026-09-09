import { EMAIL, INSTAGRAM, MAP_URL, PHONE_DISPLAY } from "@/lib/content";

export const SITE_URL = "https://duralumin-craft-studio.vercel.app/";
export const SITE_NAME = "Duralumin Met’hoxha";
export const SEO_TITLE = "Dritare & Dyer Alumini në Tiranë | Duralumin Met’hoxha";
export const SEO_DESCRIPTION =
  "Prodhim dhe montim profesional i dritareve, dyerve, vetratave dhe fasadave prej alumini në Tiranë. Kërko ofertë falas nga Duralumin Met’hoxha.";
export const SOCIAL_IMAGE_URL = `${SITE_URL}og.png`;
export const BRAND_MARK_URL = `${SITE_URL}favicon-512.png`;

export const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: "Duralumin Methoxha",
      inLanguage: ["sq", "en"],
    },
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": `${SITE_URL}#business`,
      name: SITE_NAME,
      alternateName: "Punime Duralumini • Ermal Met’hoxha",
      description: SEO_DESCRIPTION,
      url: SITE_URL,
      logo: BRAND_MARK_URL,
      image: SOCIAL_IMAGE_URL,
      telephone: PHONE_DISPLAY,
      email: EMAIL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rruga Teodor Keko 16",
        addressLocality: "Tiranë",
        addressCountry: "AL",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 41.334629,
        longitude: 19.777,
      },
      areaServed: {
        "@type": "City",
        name: "Tiranë",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:00",
          closes: "18:00",
        },
      ],
      sameAs: [INSTAGRAM, MAP_URL],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Punime duralumini",
        itemListElement: [
          "Dritare alumini",
          "Dyer alumini",
          "Vetrata",
          "Fasada alumini",
          "Punime PVC",
          "Grila dhe kangjella",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
          },
        })),
      },
    },
  ],
};

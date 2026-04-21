const BASE_URL = "https://www.armexsolutions.com";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

const seoConfig = {

  home: {
    title: "ARMEX SOLUTIONS - Premier Rebar Detailing Services | BIM Experts",
    description: "ARMEX SOLUTIONS provides accurate, code-compliant rebar detailing services globally. Advanced BIM workflows, 3D modeling, and RC shop drawings for streamlined construction.",
    canonical: `${BASE_URL}/`,
    robots: "index, follow",
    og: {
      type: "website",
      title: "ARMEX SOLUTIONS - Premier Rebar Detailing Services",
      description: "Accurate, constructible, and code-compliant rebar detailing services for global construction projects.",
      url: `${BASE_URL}/`,
      image: DEFAULT_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
      title: "ARMEX SOLUTIONS - Rebar Detailing Experts",
      description: "Precision rebar detailing with advanced BIM workflows. BS, ACI, Eurocode compliant.",
      image: DEFAULT_IMAGE,
    },
  },

  about: {
    title: "About ARMEX SOLUTIONS | Rebar Detailing Experts",
    description: "Learn about ARMEX SOLUTIONS — our mission, values, and the expert team behind globally trusted rebar detailing and BIM services.",
    canonical: `${BASE_URL}/about`,
    robots: "index, follow",
    og: {
      type: "website",
      title: "About ARMEX SOLUTIONS | Rebar Detailing Experts",
      description: "Meet the team behind ARMEX SOLUTIONS and learn about our mission in rebar detailing.",
      url: `${BASE_URL}/about`,
      image: DEFAULT_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
      title: "About ARMEX SOLUTIONS",
      description: "Meet the expert team behind globally trusted rebar detailing and BIM services.",
      image: DEFAULT_IMAGE,
    },
  },

  services: {
    title: "Rebar Detailing Services | ARMEX SOLUTIONS",
    description: "Explore ARMEX SOLUTIONS' full range of services — rebar detailing, BIM modeling, bar bending schedules, RC shop drawings, and more.",
    canonical: `${BASE_URL}/services`,
    robots: "index, follow",
    og: {
      type: "website",
      title: "Rebar Detailing Services | ARMEX SOLUTIONS",
      description: "Full range of rebar detailing and BIM services by ARMEX SOLUTIONS.",
      url: `${BASE_URL}/services`,
      image: DEFAULT_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
      title: "Rebar Detailing Services | ARMEX SOLUTIONS",
      description: "Full range of rebar detailing and BIM services.",
      image: DEFAULT_IMAGE,
    },
  },

  serviceDetails: {
    title: "Service Details | ARMEX SOLUTIONS",
    description: "Detailed breakdown of ARMEX SOLUTIONS' rebar detailing and BIM services — scope, standards, deliverables, and workflows explained.",
    canonical: `${BASE_URL}/services/details`,
    robots: "index, follow",
    og: {
      type: "website",
      title: "Service Details | ARMEX SOLUTIONS",
      description: "In-depth look at our rebar detailing service scope, standards, and deliverables.",
      url: `${BASE_URL}/services/details`,
      image: DEFAULT_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
      title: "Service Details | ARMEX SOLUTIONS",
      description: "In-depth look at our rebar detailing service scope and deliverables.",
      image: DEFAULT_IMAGE,
    },
  },

  contact: {
    title: "Contact ARMEX SOLUTIONS | Get a Quote",
    description: "Get in touch with ARMEX SOLUTIONS for rebar detailing inquiries, project quotes, and partnership opportunities. We respond within 24 hours.",
    canonical: `${BASE_URL}/contact`,
    robots: "index, follow, noarchive",
    og: {
      type: "website",
      title: "Contact ARMEX SOLUTIONS | Get a Quote",
      description: "Reach out for rebar detailing quotes and project inquiries.",
      url: `${BASE_URL}/contact`,
      image: DEFAULT_IMAGE,
    },
    twitter: {
      card: "summary",
      title: "Contact ARMEX SOLUTIONS",
      description: "Reach out for rebar detailing quotes and project inquiries.",
      image: DEFAULT_IMAGE,
    },
  },

  career: {
    title: "Careers at ARMEX SOLUTIONS | Join Our Team",
    description: "Join the ARMEX SOLUTIONS team. Explore open positions in rebar detailing, BIM modeling, and structural engineering. Build your career with us.",
    canonical: `${BASE_URL}/career`,
    robots: "index, follow",
    og: {
      type: "website",
      title: "Careers at ARMEX SOLUTIONS | Join Our Team",
      description: "Explore open positions and grow your career in rebar detailing and BIM.",
      url: `${BASE_URL}/career`,
      image: DEFAULT_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
      title: "Careers at ARMEX SOLUTIONS",
      description: "Explore open positions and grow your career in rebar detailing and BIM.",
      image: DEFAULT_IMAGE,
    },
  },

  privacyPolicy: {
    title: "Privacy Policy | ARMEX SOLUTIONS",
    description: "Read ARMEX SOLUTIONS' privacy policy to understand how we collect, use, and protect your personal information.",
    canonical: `${BASE_URL}/privacy-policy`,
    robots: "index, follow, noarchive",
    og: {
      type: "website",
      title: "Privacy Policy | ARMEX SOLUTIONS",
      description: "How ARMEX SOLUTIONS collects, uses, and protects your data.",
      url: `${BASE_URL}/privacy-policy`,
      image: DEFAULT_IMAGE,
    },
    twitter: {
      card: "summary",
      title: "Privacy Policy | ARMEX SOLUTIONS",
      description: "How ARMEX SOLUTIONS collects, uses, and protects your data.",
      image: DEFAULT_IMAGE,
    },
  },

  terms: {
    title: "Terms & Conditions | ARMEX SOLUTIONS",
    description: "Review the terms and conditions governing the use of ARMEX SOLUTIONS' website and services.",
    canonical: `${BASE_URL}/terms-and-conditions`,
    robots: "noindex, follow",
    og: {
      type: "website",
      title: "Terms & Conditions | ARMEX SOLUTIONS",
      description: "Terms governing the use of ARMEX SOLUTIONS' website and services.",
      url: `${BASE_URL}/terms-and-conditions`,
      image: DEFAULT_IMAGE,
    },
    twitter: {
      card: "summary",
      title: "Terms & Conditions | ARMEX SOLUTIONS",
      description: "Terms governing the use of ARMEX SOLUTIONS' website and services.",
      image: DEFAULT_IMAGE,
    },
  },

  sitemap: {
    title: "Sitemap | ARMEX SOLUTIONS",
    description: "Browse the complete sitemap of ARMEX SOLUTIONS to find all pages and services quickly.",
    canonical: `${BASE_URL}/sitemap`,
    robots: "noindex, follow",
    og: {
      type: "website",
      title: "Sitemap | ARMEX SOLUTIONS",
      description: "All pages and services at ARMEX SOLUTIONS.",
      url: `${BASE_URL}/sitemap`,
      image: DEFAULT_IMAGE,
    },
    twitter: {
      card: "summary",
      title: "Sitemap | ARMEX SOLUTIONS",
      description: "All pages and services at ARMEX SOLUTIONS.",
      image: DEFAULT_IMAGE,
    },
  },

};

export default seoConfig;
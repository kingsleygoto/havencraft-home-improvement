import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";

export const viewport: Viewport = {
  themeColor: "#173D35",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.havencrafthome.com"),
  title: {
    default: "HavenCraft Home Improvement | Thoughtful Renovations & Professional Installation",
    template: "%s | HavenCraft Home Improvement",
  },
  description:
    "Thoughtful home upgrades and factory-certified installation across the Greater Philadelphia and Delaware Valley region. Bathrooms, kitchens, windows, doors, and flooring.",
  keywords: [
    "home remodeling contractor",
    "home improvement company",
    "bathroom remodeling",
    "kitchen remodeling",
    "window replacement",
    "door installation",
    "flooring installation",
    "home renovation estimate",
  ],
  authors: [{ name: "HavenCraft Home Improvement" }],
  creator: "HavenCraft Home Improvement",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.havencrafthome.com",
    title: "HavenCraft Home Improvement | Thoughtful Renovations",
    description:
      "Thoughtful home upgrades, professional installation, and a smoother experience from the first call to final walkthrough.",
    siteName: "HavenCraft Home Improvement",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.havencrafthome.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.brand.name,
    legalName: siteConfig.brand.legalName,
    description: siteConfig.brand.supportingMessage,
    url: "https://www.havencrafthome.com",
    telephone: siteConfig.contact.phoneDisplay,
    email: siteConfig.contact.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.streetAddress,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.zipCode,
      addressCountry: siteConfig.contact.address.country,
    },
    areaServed: siteConfig.serviceAreas.primaryCities.map((city) => ({
      "@type": "City",
      name: city,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "15:00",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-white text-[#242824]">
        {children}
      </body>
    </html>
  );
}

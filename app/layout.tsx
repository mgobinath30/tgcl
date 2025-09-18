import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GLOBAL_THEME, themeGradient } from "@/lib/theme";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:
      "Tiruppur Gastrocare & Laparoscopic Centre - Advanced Gastroenterology Care",
    template: "%s | Tiruppur Gastrocare",
  },
  description:
    "Leading gastroenterology center in Tiruppur offering advanced digestive health care, endoscopy, and laparoscopic surgery. Expert doctors, state-of-the-art facilities.",
  keywords: [
    "gastroenterology",
    "endoscopy",
    "laparoscopy",
    "digestive health",
    "Tiruppur",
    "medical center",
    "gastroenterologist",
    "liver disease",
    "IBD treatment",
  ],
  authors: [{ name: "Tiruppur Gastrocare" }],
  creator: "Tiruppur Gastrocare",
  publisher: "Tiruppur Gastrocare",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tiruppurgastrocare.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://tiruppurgastrocare.com",
    title: "Tiruppur Gastrocare & Laparoscopic Centre",
    description:
      "Advanced gastroenterology care with expert doctors and state-of-the-art facilities in Tiruppur.",
    siteName: "Tiruppur Gastrocare",
    images: [
      {
        url: "/services.png",
        width: 1200,
        height: 630,
        alt: "Tiruppur Gastrocare & Laparoscopic Centre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiruppur Gastrocare & Laparoscopic Centre",
    description:
      "Advanced gastroenterology care with expert doctors and state-of-the-art facilities in Tiruppur.",
    images: ["/services.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          dangerouslySetInnerHTML={{
            __html: `if ('serviceWorker' in navigator) { window.addEventListener('load', () => { navigator.serviceWorker.register('/sw.js'); }); }`,
          }}
        />
        <meta name="theme-color" content="#2b3b51" />

        {/* Google Analytics Script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8E20GJCG71"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8E20GJCG71', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Tiruppur Gastrocare & Laparoscopic Centre",
              description:
                "Advanced gastroenterology care with expert doctors and state-of-the-art facilities",
              url: "https://tiruppurgastrocare.com",
              logo: "https://tiruppurgastrocare.com/logo.png",
              image: "https://tiruppurgastrocare.com/og-image.jpg",
              telephone: "+91-98765-43210",
              email: "info@tiruppurgastrocare.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Medical Center Drive",
                addressLocality: "Tiruppur",
                addressRegion: "Tamil Nadu",
                postalCode: "641601",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "11.12345678901234",
                longitude: "77.12345678901234",
              },
              openingHours: "Mo-Sa 08:00-20:00, Su 09:00-18:00",
              priceRange: "₹₹",
              medicalSpecialty: "Gastroenterology",
              availableService: [
                {
                  "@type": "MedicalProcedure",
                  name: "Endoscopy",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "Colonoscopy",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "Laparoscopic Surgery",
                },
              ],
              sameAs: [
                "https://www.facebook.com/tiruppurgastrocare",
                "https://www.instagram.com/tiruppurgastrocare",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className}`} data-theme={GLOBAL_THEME}>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}

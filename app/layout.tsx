import type { Metadata } from "next";
import { Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

// TODO: troque pelo domínio definitivo assim que o site estiver no ar.
const siteUrl = "https://www.fornariaegeneralbacon.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Fornaria Pizzaria & General Bacon — Patacho, AL",
  description:
    "Pizza no forno a lenha, smash burgers e picanha argentina na Fornaria Pizzaria & General Bacon, direto na Rota Ecológica dos Milagres, em Porto de Pedras/AL. Cardápio, avaliações e localização.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Fornaria Pizzaria & General Bacon — Patacho, AL",
    description:
      "Pizza no forno a lenha, smash burgers e picanha argentina na Rota Ecológica dos Milagres. Veja cardápio, avaliações e como chegar.",
    locale: "pt_BR",
    images: [{ url: "/images/hero-facade.jpg", width: 1600, height: 1614 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Fornaria Pizzaria & General Bacon",
  image: [`${siteUrl}/images/hero-facade.jpg`],
  servesCuisine: ["Pizza", "Hamburgueria", "Churrascaria", "Contemporânea"],
  priceRange: "R$40–R$140",
  telephone: "+5582991741699",
  address: {
    "@type": "PostalAddress",
    streetAddress: "AL-101",
    addressLocality: "Porto de Pedras",
    addressRegion: "AL",
    postalCode: "57945-000",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -9.1889386,
    longitude: -35.3138771,
  },
  sameAs: [
    "https://www.instagram.com/fornariaegeneralbaconpatacho/",
    "https://www.google.com/maps/place/Fornaria+Pizzaria+%26+General+Bacon/@-9.1887895,-35.3139382,19z/data=!4m6!3m5!1s0x701470038973acf:0xfceed5347215c7d2!8m2!3d-9.1889386!4d-35.3138771!16s%2Fg%2F11y2yhhd10",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "3.8",
    reviewCount: "144",
  },
  hasMenu: {
    "@type": "Menu",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Burguers Artesanais",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "General X",
            description:
              "Pão, burger 200g, queijo muçarela, presunto, ovo, alface, tomate, maionese e bacon",
            offers: { "@type": "Offer", price: "40.00", priceCurrency: "BRL" },
          },
          {
            "@type": "MenuItem",
            name: "Brie",
            description:
              "Pão, burger 200g, saboroso queijo brie, champignon refogado na manteiga trufada, maionese e geleia de pimenta",
            offers: { "@type": "Offer", price: "45.00", priceCurrency: "BRL" },
          },
          {
            "@type": "MenuItem",
            name: "Wagyu",
            description: "Pão, burger 200g, muçarela com salada",
            offers: { "@type": "Offer", price: "55.00", priceCurrency: "BRL" },
          },
        ],
      },
      {
        "@type": "MenuSection",
        name: "Smash Artesanais",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Smash Simples",
            description: "Um burguer 120g",
            offers: { "@type": "Offer", price: "30.00", priceCurrency: "BRL" },
          },
          {
            "@type": "MenuItem",
            name: "Smash Duplo",
            description: "Dois burguers 120g",
            offers: { "@type": "Offer", price: "35.00", priceCurrency: "BRL" },
          },
          {
            "@type": "MenuItem",
            name: "Smash Triplo",
            description: "Três burguers 120g",
            offers: { "@type": "Offer", price: "40.00", priceCurrency: "BRL" },
          },
        ],
      },
      {
        "@type": "MenuSection",
        name: "Para Compartilhar",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Picanha Argentina ou Uruguaia",
            description:
              "Para 2 ou 4 pessoas, acompanha arroz, feijão tropeiro, vinagrete, farofa e cebola marinada",
          },
          {
            "@type": "MenuItem",
            name: "Risoto de Frutos do Mar",
            description: "Um dos pratos mais pedidos da casa",
          },
        ],
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      data-theme="dark"
      className={`${fraunces.variable} ${manrope.variable} ${plexMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

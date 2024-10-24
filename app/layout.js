import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/provider";
import { GoogleTagManager } from "@next/third-parties/google";
import FooterWrapper from "@/components/FooterWrapper/FooterWrapper";
import NextTopLoader from "nextjs-toploader";
import { BASE_URL } from "@/constants/base-url";
import SwiperProvider from "@/providers/SwiperProvider";
import Head from 'next/head';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Buy affordable Vlogging, Cameras, Sports & Fitness Photography Kits Accessories - Emcronix",
  },
  description:
    "Buy for electronics, computers, appliances, Cameras ,Gaming Consoles, Vlogging, Photography Kits & Accessories. In-store pickup & free 2-day shipping on thousands of items.",
  openGraph: {
    title: "Buy affordable Vlogging, Cameras, Sports & Fitness Photography Kits Accessories - Emcronix",
    description:
      "Buy affordable Wallpaper, Flooring, Curtain, Blinds, Mattresses and more at online.✔55,000+ Choices ✔Free Shipping ✔No Cost EMI ✔Easy Returns",
    images: [
      {
        url: "/images/favicons/favicon.ico",
        width: 600,
        height: 600,
        alt: "emcronix India-Affordable Home Furnishing & Decor designs & ideas",
      },
    ],
  },
  applicationName: "emcronix",
  keywords: [
    "emcronix",
    "Flooring store",
    "Wallpaper store",
    "Custom Wallpaper",
    "Wooden Flooring",
    "Curtains",
    "Blinds",
    "Laminate & Vinyl Floors",
  ],
  authors: [{ name: "emcronix" }],
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-US": "/en-US",
    },
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en" className={poppins.className}>
      <head>
        <link rel="icon" href="/images/favicons/favicon.ico" type="any" />
      </head>
      <GoogleTagManager gtmId={gtmId} />
      <body>
        <Providers>
          <SwiperProvider>
            <NextTopLoader color="#000" showSpinner={false} zIndex={99999} />
            {children}
            <FooterWrapper />
          </SwiperProvider>
        </Providers>
      </body>
    </html>
  );
}

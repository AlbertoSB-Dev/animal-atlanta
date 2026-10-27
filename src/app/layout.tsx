import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://animalatlanta.com"),
  title: "Animal Atlanta | Your Source for Happy & Healthy Pets",
  description: "Animal Atlanta: Ethically bred exotic reptiles, parrots, arachnids, small mammals, live & frozen feeders, and expert care in Woodstock, Georgia.",
  keywords: ["exotic pets", "reptiles atlanta", "woodstock ga pet store", "ball pythons", "tarantulas", "bird grooming", "feeder insects", "animal atlanta"],
  openGraph: {
    title: "Animal Atlanta - Atlanta's Premier Exotic Pet Destination",
    description: "Your trusted exotic pet destination. 1910 Eagle Dr #1500, Woodstock, GA 30189. Call (770) 591-0007.",
    url: "https://animalatlanta.com",
    siteName: "Animal Atlanta",
    images: [
      {
        url: "/images/hero_python.jpg",
        width: 1200,
        height: 630,
        alt: "Animal Atlanta Exotic Pets",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#050a08] text-[#f2f7f4] antialiased selection:bg-[#00d37f] selection:text-[#04190f]">
        {children}
      </body>
    </html>
  );
}

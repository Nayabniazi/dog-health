import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veterinary Regenerative Medicine Leon | Advanced Stem Cell Therapy",
  description: "Restore your pet's mobility through Advanced Stem Cell Therapy & PRP without the risks of traditional surgery. Board-certified specialists in Leon.",
  keywords: ["Veterinary Stem Cells Leon", "Dog Arthritis Treatment", "Cat Regenerative Medicine", "Pet Mobility Leon", "Non-Surgical Vet"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Veterinary Regenerative Medicine Leon | Save Your Pet's Mobility",
    description: "It’s Not Just Medicine. It’s Their Chance to Run Again. Advanced Stem Cell & PRP Therapy.",
    url: 'https://veterinaryregenerationleon.com',
    siteName: 'Veterinary Regenerative Medicine Leon',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://veterinaryregenerationleon.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

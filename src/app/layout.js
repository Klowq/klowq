import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Klowq | Healthcare Without Boundaries",
  description:
    "Connect with board-certified medical professionals through our secure, anonymous platform. Experience comprehensive healthcare consultations without compromising your privacy or identity.",
  metadataBase: new URL("https://klowq.com"),

  openGraph: {
    title: "Klowq | Healthcare Without Boundaries",
    description:
      "Connect with board-certified medical professionals through our secure, anonymous platform. Experience comprehensive healthcare consultations without compromising your privacy or identity.",
    url: "https://klowq.com",
    siteName: "Klowq",
    images: [
      {
        url: "/og-image.png", // replace with your logo/banner
        width: 1200,
        height: 630,
        alt: "Klowq Healthcare",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@klowq",
    creator: "@klowq",
    title: "Klowq | Healthcare Without Boundaries",
    description:
      "Connect with board-certified medical professionals through our secure, anonymous platform. Experience comprehensive healthcare consultations without compromising your privacy or identity.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://klowq.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

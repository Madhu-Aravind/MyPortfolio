// src/app/layout.tsx
import type { Metadata } from "next";
import "../styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

export const metadata: Metadata = {
  title: "Mudavath Aravind — Embedded Systems Engineer",
  description: "Portfolio of Mudavath Aravind, Embedded Systems Engineer based in Hyderabad, India. Specializing in STM32, C, FreeRTOS, Linux, CAN Bus, Python automation, and firmware engineering.",
  keywords: [
    "Mudavath Aravind",
    "Aravind Mudavath",
    "Embedded Systems Engineer Hyderabad",
    "STM32 Developer India",
    "Firmware Engineer Hyderabad",
  ],
  authors: [{ name: "Mudavath Aravind", url: "https://my-portfolio-r7yz.vercel.app" }],
  creator: "Mudavath Aravind",
  metadataBase: new URL("https://my-portfolio-r7yz.vercel.app"),
  openGraph: {
    title: "Mudavath Aravind — Embedded Systems Engineer",
    description: "Portfolio of Mudavath Aravind, Embedded Systems Engineer based in Hyderabad, India.",
    url: "https://my-portfolio-r7yz.vercel.app",
    siteName: "Mudavath Aravind Portfolio",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="noise-bg min-h-screen flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

// src/app/layout.tsx
import type { Metadata } from "next";
import "../styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";


export const metadata: Metadata = {
  title: "M Aravind — Embedded Systems Engineer",
  description: "Portfolio of M Aravind, Embedded Systems Engineer from Hyderabad. M.Tech NIT Calicut. STM32, ARM Cortex-M4, C, RTOS, UART, SPI, I2C, Python, Tata Elxsi intern.",
  keywords: [
    "M Aravind", "Aravind Mudavath", "Mudavath Aravind",
    "Embedded Systems Engineer Hyderabad",
    "STM32 Developer India", "NIT Calicut Embedded",
    "ARM Cortex-M4 Firmware", "Tata Elxsi Intern",
    "Kernel Masters Hyderabad", "RTOS FreeRTOS Developer",
  ],
  authors: [{ name: "M Aravind", url: "https://my-portfolio-r7yz.vercel.app" }],
  creator: "M Aravind",
  metadataBase: new URL("https://my-portfolio-r7yz.vercel.app"),
  openGraph: {
    title: "M Aravind — Embedded Systems Engineer",
    description: "Portfolio of M Aravind, Embedded Systems Engineer from Hyderabad. M.Tech NIT Calicut.",
    url: "https://my-portfolio-r7yz.vercel.app",
    siteName: "M Aravind Portfolio",
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

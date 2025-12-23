import type React from "react"
import type { Metadata } from "next"
import { Geist, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { fontDisplay, fontBody } from "./fonts";


const _geist = Geist({ subsets: ["latin"] })
const _cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "vora - Newsletter",
  description: "Stay in the loop with vora - thoughtfully curated stories and inspiration",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ca">
      <body className={`${fontDisplay.variable} ${fontBody.variable}`}>
        {children}
      </body>
    </html>
  );
}

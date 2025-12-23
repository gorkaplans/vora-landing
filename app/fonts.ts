import { Archivo_Black, Space_Grotesk } from "next/font/google";

export const fontDisplay = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const fontBody = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
});


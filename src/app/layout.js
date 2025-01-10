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
  title: "SunLab Group LTD",
  description:
    "Sunlab, Malta, Zurrieq, Valletta, La Valletta, Chemical Analisys, Traffic, life science park, breeze roads, air quality, physico-chemical analysis of gas, chemical, cada snc, menfi, emissions into the atmosphere, chimneys, cada, cadaonline.it, cadanet",
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

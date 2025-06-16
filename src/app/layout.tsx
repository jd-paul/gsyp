import type { Metadata } from "next";
import { AR_One_Sans } from "next/font/google"
import "./globals.css";

const arOneSans = AR_One_Sans({
  subsets: ["latin"],
  variable: "--font-ar-one-sans",
  weight: ["400", "700"], // adjust based on what weights you want
});

export const metadata: Metadata = {
  title: "Global Society of Young Physicists",
  description: "A community for high school students interested in physics research",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${arOneSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

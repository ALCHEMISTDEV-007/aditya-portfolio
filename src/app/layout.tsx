import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya — Computer Science Engineer",
  description:
    "Aditya is a Computer Science Engineer building at the intersection of AI, cybersecurity, software and systems.",
  openGraph: {
    title: "Aditya — Computer Science Engineer",
    description: "Building thoughtful software across AI, security and systems.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

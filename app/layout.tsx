import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tharun Potharaju | Full-Stack Software Engineer",
  description:
    "Portfolio of Tharun Potharaju, a Full-Stack Software Engineer building production React and Node.js systems.",
  icons: {
    icon: "/men.png",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

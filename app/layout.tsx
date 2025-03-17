// app/layout.tsx or app/layout.js
import './globals.css';
import { ReactNode } from 'react';
import Head from 'next/head'; // Import next/head for managing head elements

export const metadata = {
  title: "Tharun Potharaju | Portfolio",
  description: "Portfolio of Tharun Potharaju, a Jr. Web Developer.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        {/* Add the favicon and other global meta tags */}
        <link rel="icon" href="/men.png" type="image/png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>{children}</body>
    </html>
  );
}

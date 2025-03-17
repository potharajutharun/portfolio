import './globals.css';

export const metadata = {
  title: "Tharun Potharaju | Portfolio",
  description: "Portfolio of Tharun Potharaju, a Jr. Web Developer.",
};

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
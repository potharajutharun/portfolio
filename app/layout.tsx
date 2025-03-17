import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: "Tharun Potharaju | Portfolio",
  description: "Portfolio of Tharun Potharaju, a Jr. Web Developer.",
};

// Explicitly typing the RootLayout component
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

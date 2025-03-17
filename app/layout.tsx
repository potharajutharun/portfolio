import './globals.css';

export const metadata = {
  title: "Tharun Potharaju | Portfolio",
  description: "Portfolio of Tharun Potharaju, a Jr. Web Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
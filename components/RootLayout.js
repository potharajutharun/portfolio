// app/layout.js (or RootLayout.js if you're using the `pages` folder)
import Navbar from './components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add meta tags, title, and other head elements here */}
        <title>Tharun Potharaju</title>
      </head>
      <body>
        {/* Place the Navbar inside the body tag */}
        <Navbar />
        <main>{children}</main> {/* The page content will go here */}
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SessionWrapper from "./components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GetMeChai - Fund your Projects with Chai",
  description: "This website is a crowd funded platform for creators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="This website is a crowd funded platform for creators." />
        <meta name="keywords" content="crowdfunding, projects, creators, funding, GetMeChai" />
        <meta name="author" content="Anuj Verma" />
        <meta property="og:title" content="GetMeChai - Fund your Projects with Chai" />
        <meta property="og:description" content="This website is a crowd funded platform for creators." />
        <meta property="og:image" content="/img/og-image.png" />
        <meta property="og:url" content="https://www.getmechai.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GetMeChai - Fund your Projects with Chai" />
        <meta name="twitter:description" content="This website is a crowd funded platform for creators." />
        <meta name="twitter:image" content="/img/twitter-image.png" />
        <link rel="icon" href="/img/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png" />
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        <SessionWrapper>
          <Navbar />
          <div className="min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
            {children}
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}

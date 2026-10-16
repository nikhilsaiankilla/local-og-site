import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

// TODO: set this to your real domain
const SITE_URL = "https://localog.nikhilsai.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "LocalOG: social share previews and SEO audit", template: "%s | LocalOG" },
  description:
    "Chrome extension that previews social share cards and runs an on-page SEO audit on localhost or any site. 100% local, zero tracking.",
  openGraph: {
    type: "website",
    siteName: "LocalOG",
    title: "LocalOG: social share previews and SEO audit",
    description: "Preview link cards and audit on-page SEO. 100% local, zero tracking.",
    url: "/",
  },
  twitter: { card: "summary", creator: "@itzznikhilsai" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>
          <nav>
            <Link href="/" className="brand">LocalOG</Link>
            <div className="links">
              <Link href="/privacy">Privacy</Link>
              <a href="mailto:hey@nikhilsai.in">Feedback</a>
            </div>
          </nav>
          {children}
        </main>
        <footer>
          <span>&copy; {new Date().getFullYear()} LocalOG</span>
          <Link href="/privacy">Privacy</Link>
          <a href="https://x.com/itzznikhilsai" target="_blank" rel="noopener noreferrer">@itzznikhilsai</a>
          <a href="mailto:hey@nikhilsai.in">hey@nikhilsai.in</a>
        </footer>
      </body>
    </html>
  );
}

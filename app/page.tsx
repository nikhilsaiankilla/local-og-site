import Link from "next/link";

// TODO: paste your Chrome Web Store URL after approval
const STORE_URL = "https://chromewebstore.google.com/";

export default function Home() {
  return (
    <>
      <h1>See your link preview before you ship.</h1>
      <p className="lead">
        LocalOG is a Chrome extension that shows how your page looks when shared, and checks its on-page SEO.
        Works on localhost, staging and live sites.
      </p>
      <p>
        <a className="btn" href={STORE_URL} target="_blank" rel="noopener noreferrer">Add to Chrome</a>
        <Link className="btn ghost" href="/privacy">Privacy policy</Link>
      </p>

      <h2>previews</h2>
      <ul>
        <li>Facebook, X, LinkedIn, WhatsApp, Telegram, Slack and Discord cards</li>
        <li>Google search result preview with title, URL and snippet</li>
        <li>Notes on image sizes and how each platform caches previews</li>
      </ul>

      <h2>seo audit</h2>
      <ul>
        <li>Score out of 100, with pass / warn / fail per check</li>
        <li>Indexing and crawling: robots meta, X-Robots-Tag, canonical, robots.txt, sitemap, HTTPS</li>
        <li>Title, description, Open Graph and Twitter tags, image checks</li>
        <li>Links, mobile tags, alt text and JSON-LD validation</li>
        <li>Guidance for each check, based on Google Search Central docs</li>
      </ul>

      <h2>fix faster</h2>
      <ul>
        <li><strong>Copy AI Fix Prompt</strong> turns every warning into a prompt for Cursor, Claude or ChatGPT</li>
        <li>Copy the full SEO report or all tags in one click</li>
      </ul>

      <h2>private by design</h2>
      <div className="box">
        <p>No account, no analytics, no tracking, no remote code. Everything runs in your browser and is gone when you close the popup.</p>
      </div>

      <h2>use it</h2>
      <p>
        Click the toolbar icon or press <code>Alt+O</code> on any page.
        Previews are close approximations, so do a final check with each platform&apos;s own debugger before launch.
      </p>

      <p className="meta">Built by <a href="https://x.com/itzznikhilsai" target="_blank" rel="noopener noreferrer">@itzznikhilsai</a></p>
    </>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "LocalOG collects no personal data. Everything runs locally in your browser.",
};

export default function Privacy() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="meta">Last updated: October 16, 2026</p>

      <div className="box">
        <p>
          <strong>Short version:</strong> LocalOG does not collect, store, sell or transmit your personal or browsing
          data. It has no servers, accounts, analytics or ads. Everything runs inside your browser.
        </p>
      </div>

      <h2>what it is</h2>
      <p>
        LocalOG is a browser extension for developers. It shows how the current page will look when shared and runs an
        on-page SEO checklist.
      </p>

      <h2>what it reads</h2>
      <ul>
        <li>
          <strong>The page you are viewing.</strong> Only when you click the icon or press its shortcut, it reads the
          active tab&apos;s title, meta and Open Graph tags, headings, links, images and structured data. This uses
          Chrome&apos;s <code>activeTab</code> permission, so it only touches the tab you are using at that moment.
        </li>
        <li>
          <strong>Requests to the site you are checking.</strong> Some checks ask that same website for its{" "}
          <code>/robots.txt</code>, its sitemap and its response headers. These go to the site you are already on, not
          to us.
        </li>
        <li>
          <strong>Preview images.</strong> The popup loads the image URLs the page declares (such as{" "}
          <code>og:image</code>) and its favicon. Your browser fetches these from the hosts that serve them, as it
          would when you visit the page.
        </li>
        <li>
          <strong>Where results live.</strong> In memory while the popup is open, discarded when it closes. Nothing is
          saved to disk, synced or sent anywhere.
        </li>
      </ul>

      <h2>what it does not do</h2>
      <ul>
        <li>Collect personal, health, financial, location or authentication data</li>
        <li>Track browsing history or run on pages you have not opened it on</li>
        <li>Use cookies, analytics, advertising or third-party tracking</li>
        <li>Load or run remote code. All code ships inside the extension package</li>
        <li>Sell or share data, because it has none to share</li>
      </ul>

      <h2>only when you click</h2>
      <ul>
        <li><strong>Copy buttons</strong> write text to your clipboard. Nothing is sent anywhere.</li>
        <li>
          <strong>Donate</strong> opens a payment page hosted by Dodo Payments in a new tab. Payment is handled there
          under Dodo&apos;s own terms and privacy policy. LocalOG never sees your payment details.
        </li>
        <li><strong>Feedback</strong> opens an email to the developer in your own mail app. Nothing is attached automatically.</li>
        <li><strong>Developer link</strong> and <strong>Open OG Image</strong> open in a new tab.</li>
      </ul>

      <h2>permissions</h2>
      <ul>
        <li><code>activeTab</code>: work on the tab you are using, only after you open the extension</li>
        <li><code>scripting</code>: run the extension&apos;s own packaged script in that tab to read page metadata</li>
      </ul>

      <h2>children</h2>
      <p>LocalOG is a developer tool and is not directed at children.</p>

      <h2>changes</h2>
      <p>If this policy changes, the new version will be posted here with an updated date.</p>

      <h2>contact</h2>
      <p><a href="mailto:hey@nikhilsai.in">hey@nikhilsai.in</a></p>
    </>
  );
}

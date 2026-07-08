/**
 * Style Hub — Injects shared navbar and footer into every page.
 * Reduces duplication across static HTML files.
 */
(function () {
  const NAV = `
    <header class="navbar">
      <div class="container">
        <a href="/home.html" class="brand" aria-label="Style Hub home">
          <img src="/assets/logo.svg" alt="" />
          <span>Style<em>Hub</em></span>
        </a>
        <nav aria-label="Primary">
          <ul class="nav-links">
            <li><a href="/home.html">Home</a></li>
            <li><a href="/gallery.html">Haircuts</a></li>
            <li><a href="/services.html">Services</a></li>
            <li><a href="/booking.html">Book</a></li>
            <li><a href="/favorites.html">Favorites</a></li>
            <li><a href="/about.html">About</a></li>
            <li><a href="/contact.html">Contact</a></li>
          </ul>
        </nav>
        <div class="nav-actions">
          <button class="icon-btn" data-theme-toggle aria-label="Toggle theme" aria-pressed="false">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
          </button>
          <a href="/booking.html" class="btn btn-primary btn-sm">Book Now</a>
          <button class="icon-btn nav-toggle" aria-label="Menu" aria-expanded="false">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
    </header>`;

  const FOOTER = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="brand" style="margin-bottom:1rem;">
              <img src="/assets/logo.svg" alt="" style="height:28px;" />
              <span data-site-name>Style Hub</span>
            </div>
            <p class="text-muted" style="font-size:.9rem;max-width:320px;" data-site-tagline>—</p>
          </div>
          <div><h5>Explore</h5><ul>
            <li><a href="/gallery.html">Haircuts</a></li>
            <li><a href="/services.html">Services</a></li>
            <li><a href="/booking.html">Book</a></li>
            <li><a href="/favorites.html">Favorites</a></li>
          </ul></div>
          <div><h5>Company</h5><ul>
            <li><a href="/about.html">About</a></li>
            <li><a href="/contact.html">Contact</a></li>
          </ul></div>
          <div><h5>Contact</h5><ul>
            <li><a href="#" data-site-phone>—</a></li>
            <li><a href="#" data-site-email>—</a></li>
            <li><span class="text-muted" data-site-address>—</span></li>
          </ul></div>
        </div>
        <div class="footer-bottom">
          <span>© <span data-year></span> <span data-site-name>Style Hub</span>. All rights reserved.</span>
          <div class="social">
            <a class="icon-btn" href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            <a class="icon-btn" href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a class="icon-btn" href="#" aria-label="TikTok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
    <button class="back-top" aria-label="Back to top">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 15l-6-6-6 6"/></svg>
    </button>`;

  // Inject before any script that depends on main.js reading nav elements.
  document.addEventListener("DOMContentLoaded", () => {
    const navMount = document.getElementById("nav-mount");
    if (navMount) navMount.outerHTML = NAV;
    const footMount = document.getElementById("footer-mount");
    if (footMount) footMount.outerHTML = FOOTER;
    // Re-run listeners that main.js attached (nav toggle etc.) — main.js runs
    // after this file, so DOM is ready by then. If main.js already ran, dispatch
    // a synthetic init so it wires up.
    document.dispatchEvent(new CustomEvent("sh:layout-ready"));
  });
})();

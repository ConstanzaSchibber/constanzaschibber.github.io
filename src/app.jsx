import { useState, useEffect } from 'react';
import Home from './home.jsx';
import Papers from './papers.jsx';
import { PROFILE } from './data.jsx';
import './styles.css';

const DIRECTIONS = {
  warm: {
    label: "Editorial",
    vars: {
      "--bg": "#f7f7f3", "--surface": "#ffffff",
      "--ink": "#272821", "--ink-soft": "#6d7066", "--line": "#e7e7df",
    },
    accent: "#7e9b7a", head: "serif",
  },
  cool: {
    label: "Modern",
    vars: {
      "--bg": "#f9f8fd", "--surface": "#ffffff",
      "--ink": "#221f2b", "--ink-soft": "#6b6779", "--line": "#e6e2f0",
    },
    accent: "#534c6a", head: "sans",
  },
};
const HEAD_FONTS = { serif: "'Spectral', Georgia, serif", sans: "'Hanken Grotesk', system-ui, sans-serif" };

function applyTheme(t) {
  const d = DIRECTIONS[t.direction] || DIRECTIONS.warm;
  const root = document.documentElement;
  Object.entries(d.vars).forEach(([k, v]) => root.style.setProperty(k, v));
  root.style.setProperty("--accent", t.accent);
  root.style.setProperty("--accent-2", t.accent2 || "#2f5141");
  root.style.setProperty("--font-head", HEAD_FONTS[t.headings] || HEAD_FONTS.serif);
  root.style.setProperty("--font-body", "'Hanken Grotesk', system-ui, sans-serif");
  root.style.setProperty("--font-mono", "'Space Mono', ui-monospace, monospace");
  root.style.setProperty("--base", t.textSize + "px");
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "direction": "cool",
  "accent": "#534c6a",
  "accent2": "#4a3f6b",
  "headings": "sans",
  "textSize": 17,
  "openToRoles": false
}/*EDITMODE-END*/;

function getScroller() { return document.querySelector(".app"); }

function useScrollSpy(ids) {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const sc = getScroller();
    if (!sc) return;
    const onScroll = () => {
      const probe = sc.scrollTop + 110;
      let cur = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= probe) cur = id;
      }
      if (sc.scrollTop + sc.clientHeight >= sc.scrollHeight - 4) cur = ids[ids.length - 1];
      setActive(cur);
    };
    onScroll();
    sc.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { sc.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, [ids.join()]);
  return active;
}

function scrollToId(id) {
  const sc = getScroller();
  if (!sc) return;
  if (id === "home") { sc.scrollTo({ top: 0, behavior: "smooth" }); return; }
  const el = document.getElementById(id);
  if (el) sc.scrollTo({ top: Math.max(0, el.offsetTop - 56), behavior: "smooth" });
}

function Header({ active, page = "home" }) {
  const isAcademic = page === "academic";
  const Scroll = ({ id, children }) => (
    <a href={"#" + id} className={active === id ? "on" : ""}
       onClick={(e) => { e.preventDefault(); scrollToId(id); }}>{children}</a>
  );
  const Link = ({ href, on, children }) => (
    <a href={href} className={on ? "on" : ""}>{children}</a>
  );
  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <button
          type="button"
          className="brand"
          title="Back to top"
          onClick={() => { isAcademic ? (location.href = "index.html") : scrollToId("home"); }}
        >
          <span className="brand-full">{PROFILE.brand}</span>
          <span className="brand-short">{PROFILE.brand.split(" ")[0]}</span><span className="dot">.</span>
        </button>
        <nav className="nav" aria-label="Site navigation">
          {isAcademic ? (
            <>
              <Link href="index.html">Home</Link>
              <Link href="index.html#work">Portfolio</Link>
              <Link href="academic.html" on={true}>Academic</Link>
            </>
          ) : (
            <>
              <Scroll id="home">Home</Scroll>
              <Scroll id="work">Portfolio</Scroll>
              <Link href="academic.html">Academic</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap ftr-in">
        <small>© {new Date().getFullYear()} {PROFILE.brand}</small>
        <small>Designed &amp; built by {PROFILE.brand}, with Claude</small>
      </div>
    </footer>
  );
}

export function App() {
  const active = useScrollSpy(["home", "work"]);

  useEffect(() => {
    const id = location.hash.replace(/^#\/?/, "");
    if (id && id !== "home") {
      const tmr = setTimeout(() => scrollToId(id), 120);
      return () => clearTimeout(tmr);
    }
  }, []);

  return (
    <div className="app">
      <Header active={active} page="home" />
      <main>
        <Home scrollTo={scrollToId} showBadge={TWEAK_DEFAULTS.openToRoles} />
      </main>
      <Footer />
    </div>
  );
}

export function AcademicPage() {
  return (
    <div className="app">
      <Header active="academic" page="academic" />
      <main>
        <Papers />
      </main>
      <Footer />
    </div>
  );
}

applyTheme(TWEAK_DEFAULTS);

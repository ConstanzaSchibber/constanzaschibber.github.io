import { PROFILE, PROJECT } from './data.jsx';
import { CATALOG_COLORS } from './catalog-colors.js';

const track = (e) => typeof gtag === 'function' && gtag('event', e);

function fpHueSort(colors) {
  const toHSL = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255,
      g = parseInt(hex.slice(3, 5), 16) / 255,
      b = parseInt(hex.slice(5, 7), 16) / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2;
    let h = 0, s = 0; const d = max - min;
    if (d) {
      s = d / (1 - Math.abs(2 * l - 1));
      if (max === r) h = ((g - b) / d) % 6;
      else if (max === g) h = (b - r) / d + 2;
      else h = (r - g) / d + 4;
      h = (h * 60 + 360) % 360;
    }
    return { hex, h, s, l };
  };
  return colors.map(toHSL).sort((a, b) => {
    const ga = a.s < 0.15, gb = b.s < 0.15;
    if (ga !== gb) return ga ? 1 : -1;
    if (ga && gb) return a.l - b.l;
    if (Math.abs(a.h - b.h) > 1) return a.h - b.h;
    return a.l - b.l;
  }).map((c) => c.hex);
}

function ColorField({ count = 132 }) {
  const all = fpHueSort(CATALOG_COLORS);
  const step = Math.max(1, Math.floor(all.length / count));
  const picks = all.filter((_, i) => i % step === 0).slice(0, count);
  return (
    <div className="cfield" aria-hidden="true">
      {picks.map((c, i) => <span key={i} style={{ background: c }}></span>)}
    </div>
  );
}

function Featured() {
  const P = PROJECT;
  return (
    <div className="feature">
      <div className="feature-viz">
        <span className="live-pill"><span className="live-dot"></span>Featured · Live</span>
        <ColorField count={132} />
        <div className="cfield-cap">
          <span>9,000+ products</span>
          <span>measured in CIELAB</span>
        </div>
      </div>
      <div className="feature-body">
        <span className="eyebrow">Featured project · {P.product}</span>
        <h3 className="feature-title">{P.title}</h3>
        <p className="feature-desc">
          Lip colors are sold by evocative names and filed under a dozen broad groups, so
          finding one shade means scrolling past hundreds. I built an end-to-end ML pipeline
          that reads the true color out of 9,000+ product images and makes the whole catalog
          searchable by shade.
        </p>
        <div className="feature-metrics">
          <div>
            <div className="feature-metric-n acc">1.56</div>
            <div className="feature-metric-l">median ΔE between predicted and true color; under 2 is an imperceptible difference</div>
          </div>
          <div>
            <div className="feature-metric-n">9,000+</div>
            <div className="feature-metric-l">products searchable by color</div>
          </div>
          <div>
            <div className="feature-metric-n">97%</div>
            <div className="feature-metric-l">image-type classifier accuracy</div>
          </div>
        </div>
        <div className="feature-cta">
          <a className="btn btn-primary" href={P.links.demo} target="_blank" rel="noreferrer" onClick={() => track('click_live_app')}>Try the live app <span className="arr">→</span></a>
          <a className="btn btn-ghost" href={P.links.about} target="_blank" rel="noreferrer" onClick={() => track('click_project_overview')}>Read the overview <span className="arr">↗</span></a>
          <a className="btn btn-ghost" href={P.links.repo} target="_blank" rel="noreferrer" onClick={() => track('click_github_repo')}>Technical deep-dive + code <span className="arr">↗</span></a>
        </div>
      </div>
    </div>
  );
}

export default function Home({ scrollTo, showBadge }) {
  const L = PROFILE.links;
  const revealEmail = () => {
    track('click_email');
    window.location.href = "mailto:" + L.emailUser + "@" + L.emailDomain;
  };
  return (
    <>
      <section className="section hero" id="home">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-text">
              {showBadge && (
                <div className="role-label">Open to research data science roles</div>
              )}
              <h1 className="hero-name">{PROFILE.name}</h1>
              <p className="hero-tag">
                <strong>Research Data Scientist</strong> building the measurement systems and experiments behind AI products. I turn analysis of user and model behavior into decisions about what to build, why it fails, how to improve it, and when to launch.
              </p>
              <p className="hero-bio">
                I've shaped launch decisions for LLM-powered products reaching 500M+ users,
                driven product strategy through rapid prototyping and benchmarking, and built
                human-in-the-loop evaluation infrastructure that surfaced critical failure modes
                and informed model improvements. I do this end to end and build the systems
                myself, from the data and metric pipelines to the LLM-as-a-judge graders and
                evaluation frameworks, not just the analysis on top.
              </p>
              <div className="hero-links">
                <button type="button" className="hlink hlink-primary" onClick={revealEmail}>Get in touch</button>
                <a className="hlink" href={L.linkedin} target="_blank" rel="noreferrer" onClick={() => track('click_linkedin')}>LinkedIn</a>
                <a className="hlink" href={L.github} target="_blank" rel="noreferrer" onClick={() => track('click_github')}>GitHub</a>
              </div>
            </div>

            <aside className="hero-aside">
              <div className="aside-block">
                <span className="aside-label">Core expertise</span>
                <ul className="aside-list">
                  {PROFILE.expertise.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
              <div className="aside-block">
                <span className="aside-label">Technical toolkit</span>
                <ul className="aside-list">
                  {PROFILE.toolkit.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div className="view section-anchor" id="work">
        <div className="feature-band">
          <div className="wrap">
            <span className="feature-eyebrow">Selected portfolio</span>
          </div>
        </div>
        <section className="section-sm">
          <div className="wrap">
            <Featured />
          </div>
        </section>

        <section className="section-sm">
          <div className="wrap">
            <div className="routes">
              <a className="route-tile" href="academic.html">
                <div>
                  <span className="eyebrow">Research</span>
                  <h3>Publications &amp; teaching</h3>
                  <p>Peer-reviewed papers in statistics and methodology, plus graduate courses I designed and taught.</p>
                </div>
                <span className="route-go">Academic <span className="arr">→</span></span>
              </a>
              <a className="route-tile" href={L.linkedin} target="_blank" rel="noreferrer" onClick={() => track('click_linkedin_contact')}>
                <div>
                  <span className="eyebrow">Contact</span>
                  <h3>Start a conversation</h3>
                  <p>Always up for a coffee chat about data science, measurement, LLM evals, or color science. Say hi on LinkedIn — add a note in the request so I know you're not a bot.</p>
                </div>
                <span className="route-go">Connect on LinkedIn <span className="arr">→</span></span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

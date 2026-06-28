import { PROFILE, PAPERS, TEACHING } from './data.jsx';

const track = (e) => typeof gtag === 'function' && gtag('event', e);

export default function Papers() {
  return (
    <div className="view section-anchor academic" id="academic">
      <div className="band-head band-head--page">
        <div className="wrap">
          <a className="back-link" href="index.html">← Back to portfolio</a>
          <span className="band-num">Background</span>
          <h1 className="band-title">Academic</h1>
          <p className="band-sub">
            Received my PhD from Washington University in Saint Louis, focused on
            quantitative methodology and statistics. I was a postdoc on Data Science and
            Methodology at the University of Virginia, and until 2021 I was an assistant
            professor (tenure track) on quantitative methodology at Michigan State University.
          </p>
          <p className="band-sub">
            My academic work applied the same tools I now use in industry — measurement,
            statistical modeling (including Bayesian statistics, hierarchical modeling,
            latent variable models), experimental design, and causal inference — to
            questions about human sentiment and behavior across and within countries in
            political science.
          </p>
        </div>
      </div>

      <section className="section-sm">
        <div className="wrap academic-grid">
          {/* research */}
          <div className="academic-col">
            <div className="acol-head">
              <span className="eyebrow">Selected research</span>
              <a className="acol-link" href={PROFILE.links.scholar} target="_blank" rel="noreferrer" onClick={() => track('click_google_scholar')}>
                Google Scholar <span className="arr">↗</span>
              </a>
            </div>
            <ul className="cpaper-list">
              {PAPERS.map((p) => (
                <li className="cpaper" key={p.title}>
                  <div className="cpaper-main">
                    <a className="cpaper-title" href={p.pdf} target="_blank" rel="noreferrer" download onClick={() => track('click_paper_pdf')}>{p.title}</a>
                    <div className="cpaper-meta"><em>{p.venue}</em> · {p.year}</div>
                    {p.methods ? (
                      <p className="cpaper-methods">
                        <span className="methods-tag">Data &amp; methods</span>
                        {p.methods}
                      </p>
                    ) : null}
                  </div>
                  <a className="cpaper-pdf" href={p.pdf} target="_blank" rel="noreferrer" download
                     aria-hidden="true" tabIndex="-1"
                     onClick={() => track('click_paper_pdf')}>PDF <span className="arr">↓</span></a>
                </li>
              ))}
            </ul>
          </div>

          {/* teaching */}
          <div className="academic-col">
            <div className="acol-head">
              <span className="eyebrow">Teaching</span>
            </div>
            <p className="acol-intro">{TEACHING.intro}</p>
            <div className="course-list">
              {TEACHING.courses.map((c) => (
                <a className="course course--sm" href={c.repo} target="_blank" rel="noreferrer" key={c.title} onClick={() => track('click_course_github')}>
                  <span className="course-title">{c.title}</span>
                  <span className="course-go">GitHub <span className="arr">↗</span></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

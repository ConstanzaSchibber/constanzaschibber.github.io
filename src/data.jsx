export const PROFILE = {
  name: "Constanza Schibber, PhD",
  brand: "Constanza Schibber",
  links: {
    // Spam-safe: email is assembled in JS on click, never written as plaintext.
    emailUser: "constanza.fs",
    emailDomain: "icloud.com",
    linkedin: "https://www.linkedin.com/in/cschibber/",
    github: "https://github.com/ConstanzaSchibber",
    scholar: "https://scholar.google.com/citations?user=_dzqvqMAAAAJ&hl=en",
  },
  expertise: [
    "Bayesian & frequentist statistical modeling",
    "Experimentation & causal inference",
    "Machine learning",
    "AI / LLM evaluation (human & automated)",
    "Survey science",
  ],
  toolkit: ["Python · R · SQL · Spark", "LLM APIs & evaluation frameworks", "Data & ML pipeline development"],
};

export const PROJECT = {
  product: "Lipstick Color Finder",
  title: "Color search & discovery for lip products",
  links: {
    demo: "https://lipstickbycolor.github.io",
    about: "https://lipstickbycolor.github.io/about.html",
    repo: "https://github.com/ConstanzaSchibber/lipstick_color_extraction",
  },
};

export const TEACHING = {
  intro: "Graduate courses I designed and taught at the University of Virginia (Postdoc in Data Science) and Michigan State University (Assistant Professor in Quantitative Methodology, tenure track). Material available on GitHub.",
  courses: [
    { title: "Mathematics for Social Science", repo: "https://github.com/ConstanzaSchibber/Math-For-SocialScience" },
    { title: "Hierarchical Modeling", repo: "https://github.com/ConstanzaSchibber/Multilevel-Modeling---PhD-Course" },
    { title: "Generalized Linear Modeling", repo: "https://github.com/ConstanzaSchibber/Generalized-Linear-Models" },
  ],
};

export const PAPERS = [
  {
    year: "2025",
    title: "Can legislative majorities shape budgets? A comparative analysis of presidential systems in Latin America",
    venue: "Legislative Studies Quarterly",
    methods: "Constructed novel outcome measure to assess policy change across countries; modeled success probabilities using a Bayesian hierarchical binomial model with varying intercepts and slopes across institutional groups; validated via cross-validation.",
    pdf: "papers/LSQ12469_Final.pdf",
  },
  {
    year: "2019",
    title: "Valence, elections, and legislative institutions",
    venue: "American Journal of Political Science",
    methods: "A formal game-theoretic model yields the hypotheses; tested on an original dataset scraped and organized from government websites, with ideology measured via a Bayesian item-response model and the theory evaluated through Bayesian hierarchical modeling and analysis.",
    pdf: "papers/ajps.12429.pdf",
  },
];

import { useState } from "react";
import "./App.css";
import profilePhoto from "./assets/vignesh_photo.jpeg";

/* ─── Inline SVG Icons ──────────────────────────────────────────── */
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
);
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0h2a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h2" /></svg>
);
const CertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
);
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
);
const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
);
const CogIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const ClipboardListIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
);
const ChevronUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
);
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
);
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
);

/* ─── Data ──────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const EXPERIENCE = [
  {
    company: "Gilbarco Veeder Root India (P) Ltd",
    location: "kovai",
    role: "Engineer – Software Engineer II",
    period: "Nov 2021 – Present",
    highlights: [
      "Software testing & validating for development projects",
      "Performing HW in the Loop (HIL) Testing",
      "Test script creation using Python and RobotFramework",
      "Executing Test Automation by integrating Python script in LabVIEW GUI",
      "Performing Tests using ECU Testing tool with correct project workspace from SVN",
      "Expertise in validating software enhancement to maximize product functionality",
      "Identify bugs, replicate reported customer bugs, verify bug fixes and new functionalities",
      "Execution of test cases for sanity, feature-based & regression testing",
      "Preparing Test plans and Test strategies for Functional & Regression testing",
      "Implementing Sprint planning, Sprint Review, Sprint DM & Retrospective",
    ],
  },
  {
    company: "Capgemini Engineering (Deputed to Robert Bosch)",
    location: "Coimbatore",
    role: "Engineer – Software QA Engineer",
    period: "Jun 2021 – Nov 2021",
    highlights: [
      "Performing Hardware in the Loop (HIL) Testing",
      "Performing Tests using ECU Test tool",
      "Analysing generated reports and updating in the Test Guide",
      "Completing PDC and sending delivery mail to the project team",
    ],
  },
  {
    company: "Gilbarco Veeder Root India (P) Ltd",
    location: "Coimbatore",
    role: "Engineer – Software QA Engineer",
    period: "Jul 2018 – Jun 2021",
    highlights: [
      "Automated manual test cases using Python and Robot framework – 70% efficiency improvement",
      "Constructed Test automation Framework for GEP project",
      "Creation of Test scenarios for specified features as per requirement use cases",
      "Performing Integration testing with real-world scenarios",
      "Carry out tracking of Defects, updating test scenarios and Test data in JIRA",
      "Develop Traceability matrix for Defect, Test Case, and Use case documents",
    ],
  },
  {
    company: "Vasantha Advanced Systems (P) Ltd",
    location: "Coimbatore",
    role: "Hardware Test Engineer – Quality",
    period: "Sep 2017 – Jun 2018",
    highlights: [
      "Supporting developers in examining logs and debug files to fix issues",
      "Reporting and tracking in project management tool",
      "Developing test summary reports for upper management for major releases",
    ],
  },
];

const SKILLS = {
  "Testing & QA": [
    { name: "Manual Testing", level: 95 },
    { name: "Test Automation", level: 90 },
    { name: "HIL Testing", level: 85 },
    { name: "Regression Testing", level: 95 },
    { name: "Integration Testing", level: 88 },
  ],
  "Automation Tools": [
    { name: "Python", level: 90 },
    { name: "Robot Framework", level: 85 },
    { name: "Selenium", level: 80 },
    { name: "LabVIEW", level: 75 },
    { name: "ECU Test", level: 85 },
  ],
  "Process & Standards": [
    { name: "Agile / Scrum", level: 92 },
    { name: "SDLC / STLC", level: 90 },
    { name: "Test Planning", level: 88 },
    { name: "PRTI / KAIZEN / 5S", level: 85 },
    { name: "Bug Life Cycle", level: 92 },
  ],
  "Tools & Platforms": [
    { name: "JIRA", level: 92 },
    { name: "Confluence", level: 85 },
    { name: "GitHub / SVN", level: 88 },
    { name: "INCA / Canoe", level: 80 },
    { name: "PyCharm", level: 85 },
  ],
};

const CERTIFICATIONS = [
  {
    title: "ISTQB Foundation Level (CTFL)",
    body: "Indian Testing Board (ITB)",
    certId: "ITB – CTFL: 125404",
  },
  {
    title: "ISTQB Advanced Level – Test Automation (CTAL-TAE)",
    body: "Indian Testing Board (ITB)",
    certId: "ITB – CTAL-TAE-1189",
  },
];

const ACHIEVEMENTS = [
  "Analyzed and resolved high-severity (S1) Pump restart issue within the given time",
  "Received Spot Award for addressing the customer issue (S1) quickly",
  "Created a Mis-match tool using Python to reduce analysis time",
  "Starz Award for solving the Morocco Pump Hang issue",
  "Starz Award for implementing 54% of test automation and delivered critical releases",
  "Won 1st Prize at INNOVATHON competition",
  "Internal certification on PRTI process",
  "Regression testing for Major Field Releases for Frontier with zero major defects from field",
];

const ABOUT_CARDS = [
  {
    title: "Testing & Validation",
    desc: "Deep expertise in manual & automated software testing, HIL testing, regression, integration, and sanity testing across embedded and web domains.",
    icon: <ShieldCheckIcon />,
  },
  {
    title: "Test Automation",
    desc: "Built automation frameworks using Python, Robot Framework & Selenium. Improved testing efficiency by 70% through strategic automation.",
    icon: <CogIcon />,
  },
  {
    title: "Process & Agile",
    desc: "Skilled in Agile/Scrum ceremonies, test planning, JIRA-based defect tracking, traceability matrices, and PRTI processes.",
    icon: <ClipboardListIcon />,
  },
];

/* ─── Reusable Components ───────────────────────────────────────── */
function SectionTitle({ icon, title }) {
  return (
    <div className="section-title">
      <div className="section-title-icon">{icon}</div>
      <h2>{title}</h2>
      <div className="section-title-bar" />
    </div>
  );
}

function ContactCard({ icon, label, value, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="contact-card card-hover">
      <div className="contact-card-icon">{icon}</div>
      <div>
        <p className="contact-card-label">{label}</p>
        <p className="contact-card-value">{value}</p>
      </div>
    </a>
  );
}

/* ─── Main App ──────────────────────────────────────────────────── */
function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="#hero" className="navbar-logo gradient-text">VA</a>
          <div className="nav-desktop">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </div>
          <button
            className="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        <div className={`nav-mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileMenuOpen(false)}>{l.label}</a>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <header id="hero" className="hero">
        <div className="hero-blob-1" />
        <div className="hero-blob-2" />
        <div className="hero-inner">
          <div className="hero-text animate-fade-in-up">
            <p className="hero-subtitle">Welcome to my portfolio</p>
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Vignesh A</span>
            </h1>
            <p className="hero-role">SQA Engineer II &bull; Test Automation Expert</p>
            <p className="hero-desc">
              8+ years of experience in software quality assurance, test automation
              with Python &amp; Robot Framework, and Agile process implementation.
              ISTQB CTFL &amp; CTAL-TAE certified professional passionate about
              delivering zero-defect products.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary"><MailIcon /> Get in Touch</a>
              <a href="#experience" className="btn-outline"><BriefcaseIcon /> View Experience</a>
            </div>
          </div>
          <div className="hero-photo animate-scale-in">
            <div className="photo-wrapper">
              <div className="photo-circle photo-glow">
                <img src={profilePhoto} alt="Vignesh A" />
              </div>
              <div className="photo-badge animate-float">
                <p>8+ Years</p>
                <p>Experience</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── ABOUT ── */}
      <section id="about" className="section section-white">
        <div className="section-inner">
          <SectionTitle icon={<BriefcaseIcon />} title="About Me" />
          <div className="about-grid">
            {ABOUT_CARDS.map((card) => (
              <div key={card.title} className="about-card card-hover">
                <div className="about-card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="section section-alt">
        <div className="section-inner">
          <SectionTitle icon={<BriefcaseIcon />} title="Professional Experience" />
          <div className="timeline">
            <div className="timeline-line" />
            {EXPERIENCE.map((exp, idx) => (
              <div
                key={idx}
                className="exp-card card-hover animate-slide-in-left"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="timeline-dot" style={{ top: 6 }} />
                <div className="exp-header">
                  <div>
                    <p className="exp-role">{exp.role}</p>
                    <p className="exp-company">
                      {exp.company} <span>&mdash; {exp.location}</span>
                    </p>
                  </div>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <ul className="exp-highlights">
                  {exp.highlights.map((h, i) => (
                    <li key={i}><span className="exp-dot" />{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="section section-white">
        <div className="section-inner">
          <SectionTitle icon={<CogIcon />} title="Technical Skills" />
          <div className="skills-grid">
            {Object.entries(SKILLS).map(([category, skills]) => (
              <div key={category} className="skill-category card-hover">
                <h3>{category}</h3>
                {skills.map((s) => (
                  <div key={s.name} className="skill-item">
                    <div className="skill-label">
                      <span>{s.name}</span>
                      <span>{s.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-bar-fill" style={{ width: `${s.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section id="certifications" className="section section-alt">
        <div className="section-inner">
          <SectionTitle icon={<CertIcon />} title="Certifications" />
          <div className="certs-grid">
            {CERTIFICATIONS.map((c, i) => (
              <div key={i} className="cert-card card-hover">
                <div className="cert-icon"><CertIcon /></div>
                <div className="cert-info">
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                  <span className="cert-id">{c.certId}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section id="achievements" className="section section-white">
        <div className="section-inner">
          <SectionTitle icon={<StarIcon />} title="Achievements" />
          <div className="achievements-grid">
            {ACHIEVEMENTS.map((a, i) => (
              <div key={i} className="achievement-card card-hover">
                <div className="achievement-icon"><StarIcon /></div>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="section contact-section">
        <div className="section-inner" style={{ textAlign: "center" }}>
          <SectionTitle icon={<MailIcon />} title="Get In Touch" />
          <p className="contact-desc">
            I'm always open to discussing quality engineering, test automation
            strategies, or new career opportunities. Feel free to reach out!
          </p>
          <div className="contact-cards">
            <ContactCard icon={<PhoneIcon />} label="Phone" value="8667309543" href="tel:+918667309543" />
            <ContactCard icon={<MailIcon />} label="Email" value="mailtovicky15@gmail.com" href="mailto:mailtovicky15@gmail.com" />
            <ContactCard icon={<LinkedInIcon />} label="LinkedIn" value="vignesha15" href="https://www.linkedin.com/in/vignesha15" />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <p>&copy; {new Date().getFullYear()} Vignesh A. All rights reserved.</p>
          <div className="footer-links">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>
        </div>
      </footer>

      {/* ── SCROLL TO TOP ── */}
      <a href="#hero" className="scroll-top" aria-label="Scroll to top">
        <ChevronUpIcon />
      </a>
    </div>
  );
}

export default App;

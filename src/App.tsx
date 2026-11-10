import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Code2,
  Cloud,
  Database,
  ExternalLink,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { projects, skills } from "./data";
import "./App.css";

const GITHUB_URL = ""; // Add your GitHub profile URL when ready.
const LINKEDIN_URL = "https://www.linkedin.com/in/roshini-gurram/";
const EMAIL = "roshinigoud2910@gmail.com";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [focusIndex, setFocusIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const focusLines = ["cloud-connected apps", "reliable backend systems", "thoughtful software"];

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionPreference.matches) return;
    const interval = window.setInterval(() => {
      setFocusIndex((current) => (current + 1) % focusLines.length);
    }, 2600);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".section, .contact-section, .project-row, .hero-copy");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach((target) => {
      target.classList.add("reveal-on-scroll");
      observer.observe(target);
    });
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="reading-progress" aria-hidden="true" style={{ width: `${scrollProgress}%` }} />
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <nav className="nav shell" aria-label="Main navigation">
          <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Roshini home">
            roshini<span>.dev</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-resume" href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume <ArrowUpRight size={14} />
            </a>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="hero shell" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> SOFTWARE ENGINEERING / PORTFOLIO</div>
            <h1 id="hero-title">
              Building software.
              <br />
              Exploring systems.
              <br />
              <span className="title-muted">Sharing what I learn.</span>
            </h1>
            <p className="hero-lede">
              I'm Roshini — a developer interested in thoughtful engineering,
              dependable applications, and the systems behind them. I enjoy building
              <span className="rotating-phrase" key={focusLines[focusIndex]}>{focusLines[focusIndex]}</span>
              <span className="phrase-period">.</span>
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore projects <ArrowDownRight size={17} />
              </a>
              {GITHUB_URL && <a className="text-link" href={GITHUB_URL} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub <ExternalLink size={12} />
              </a>}
            </div>
            <div className="hero-meta">
              <span><span className="availability-dot" /> Open to software engineering opportunities</span>
            </div>
            <div className="hero-tech-strip" aria-label="Areas of interest">
              <span><Code2 size={15} /> Backend development</span>
              <span><Cloud size={15} /> Cloud services</span>
              <span><Database size={15} /> Data & APIs</span>
            </div>
          </div>

          <a className="scroll-cue" href="#projects"><span /> Scroll to explore</a>
        </section>

        <div className="marquee-band" aria-label="Engineering interests">
          <div className="marquee-track">
            {Array.from({ length: 2 }).map((_, index) => (
              <span className="marquee-group" key={index} aria-hidden={index === 1}>
                <b>BUILD WITH PURPOSE</b><i /> <b>DESIGN FOR CLARITY</b><i /> <b>LEARN BY SHIPPING</b><i /> <b>MAKE SYSTEMS RELIABLE</b><i />
              </span>
            ))}
          </div>
        </div>

        <section className="section shell" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <div>
              <p className="section-index">01 / SELECTED WORK</p>
              <h2 id="projects-title">Projects with a purpose<span className="accent">.</span></h2>
              <p className="section-intro">
                A few projects to explore. Each case study should explain the problem,
                the implementation, and the engineering decisions behind the result.
              </p>
            </div>
            {GITHUB_URL && <a className="section-link" href={GITHUB_URL} target="_blank" rel="noreferrer">
              All repositories <ArrowUpRight size={15} />
            </a>}
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-row" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <div className="project-category">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                  <details className="case-study">
                    <summary>Read case study <ArrowDownRight size={14} /></summary>
                    <div className="case-study-content">
                      <h4>The problem</h4>
                      <p>{project.problem}</p>
                      <h4>Engineering approach</h4>
                      <p>{project.approach}</p>
    
                    </div>
                  </details>
                </div>
                <div className="project-actions">
                  <span className="project-status"><span /> Case study</span>
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer"
                    aria-label={`Open GitHub repository for ${project.title}`}>
                    <Github size={17} /> Source <ArrowUpRight size={14} />
                  </a>}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Live demo <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
          <p className="section-footnote">
            <span className="footnote-mark">↗</span>
            I’m building this portfolio around work I can explain clearly: the problem, the implementation, and the decisions behind it.
          </p>
        </section>

        <section className="section shell" id="about" aria-labelledby="about-title">
          <div className="about-grid">
            <div>
              <p className="section-index">02 / ABOUT</p>
              <h2 id="about-title">A little context<span className="accent">.</span></h2>
            </div>
            <div className="about-copy">
              <p className="about-lede">
                I’m Roshini, a software developer interested in backend engineering,
                cloud services, and the design choices that make applications dependable.
              </p>
              <p>
                I enjoy working through a problem from its data model and API boundaries
                to the infrastructure that supports it. My project work includes AWS Lambda,
                Amazon S3, and MongoDB, alongside continued practice with data structures
                and object-oriented design.
              </p>
              <p>
                I value clear code, deliberate trade-offs, and learning by building. Here,
                I’m documenting the projects and technical decisions that best represent
                how I approach software engineering.
              </p>
              {EMAIL && <a className="text-link about-contact" href={`mailto:${EMAIL}`}>
                Say hello <ArrowUpRight size={15} />
              </a>}
            </div>
          </div>
        </section>

        <section className="section shell" id="skills" aria-labelledby="skills-title">
          <div className="section-heading">
            <div>
              <p className="section-index">03 / TOOLKIT</p>
              <h2 id="skills-title">Tools & concepts<span className="accent">.</span></h2>
              <p className="section-intro">A starting list. Keep only the technologies and concepts you can confidently discuss.</p>
            </div>
            <Layers3 className="heading-icon" size={30} strokeWidth={1.2} />
          </div>
          <div className="skills-list">
            {skills.map((skill) => (
              <span className="skill-chip" key={skill}><Check size={13} /> {skill}</span>
            ))}
          </div>
        </section>

        <section className="section shell" id="experience" aria-labelledby="experience-title">
          <p className="section-index">04 / ENGINEERING APPROACH</p>
          <h2 id="experience-title">How I work through problems<span className="accent">.</span></h2>
          <div className="timeline-entry">
            <div className="timeline-marker" />
            <div>
              <h3>Understand → design → implement → verify</h3>
              <p className="timeline-meta">A practical approach to software development</p>
              <p className="timeline-description">
                Start by clarifying requirements and edge cases. Choose data structures and
                interfaces that fit the problem, keep components focused, and verify behavior
                with tests and careful debugging. Then review trade-offs and identify what could
                be improved next.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="shell contact-inner">
            <p className="section-index">06 / CONTACT</p>
            <h2 id="contact-title">Let's make something<br /><span>meaningful.</span></h2>
            <p>
              Interested in a project, a software engineering opportunity, or a good technical conversation?
              I'd be happy to connect.
            </p>
            <div className="contact-actions">
              {EMAIL && <a className="button button-primary" href={`mailto:${EMAIL}`}>
                <Mail size={16} /> Email me <ArrowUpRight size={15} />
              </a>}
              {LINKEDIN_URL && <a className="button button-quiet" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                <Linkedin size={16} /> LinkedIn
              </a>}
              {GITHUB_URL && <a className="button button-quiet" href={GITHUB_URL} target="_blank" rel="noreferrer">
                <Github size={16} /> GitHub
              </a>}
              {!EMAIL && !LINKEDIN_URL && !GITHUB_URL && <p className="contact-setup-note">GitHub is not connected yet. Add your profile URL when you are ready.</p>}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer shell">
        <a className="wordmark" href="#home">roshini<span>.dev</span></a>
        <p>Built with curiosity, React, and TypeScript.</p>
        <a className="back-top" href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;

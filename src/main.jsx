import React, {useState, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';

const skills = [
  {mark:'BE', title:'Languages & Backend', items:['C#','ASP.NET Core API','REST APIs','ASP.NET MVC','Sitecore']},
  {mark:'FE', title:'Frontend', items:['React.js','Angular','AngularJS','JavaScript','Material UI','jQuery']},
  {mark:'DB', title:'Data & Reporting', items:['Microsoft SQL Server','T-SQL','Stored Procedures','Exago Reporting']},
  {mark:'DX', title:'Engineering Practices', items:['Agile / Scrum','Unit Testing','Code Review','CI/CD','GitHub','TFS','SonarQube','Grafana','AI-assisted Development']}
];

const projects = [
  {num:'01', title:'Centralized REST API Integrator', type:'AMCS GROUP · ENTERPRISE API', desc:'Built and maintained a centralized REST API integrator used by internal teams and external clients, standardizing data exchange and API methods across systems.', tech:['C#','ASP.NET Core API','REST APIs','SQL Server'], accent:'violet'},
  {num:'02', title:'Seat Reservation Application', type:'MERCEDES-BENZ GROUP SERVICES PH', desc:'Developed the first application on the team’s newly introduced React, Material UI, ASP.NET Core API and SQL Server stack, from the ground up through deployment and ongoing support.', tech:['React.js','Material UI','ASP.NET Core API','SQL Server'], accent:'cyan'},
  {num:'03', title:'Policy Application', type:'MERCEDES-BENZ GROUP SERVICES PH', desc:'Integrated stored procedures into the API layer and implemented a dynamic Questionnaire Module and e-signature workflow with downloadable PDF confirmations.', tech:['React.js','C#','ASP.NET Core API','SQL Server'], accent:'amber'},
  {num:'04', title:'Pando Survey Application', type:'ALLIANCE SOFTWARE · REACT.JS', desc:'Developed reusable responsive UI components across multiple viewport breakpoints, supported unit testing and documentation, and maintained application stability through debugging and releases.', tech:['React.js','Responsive UI','Unit Testing','Documentation'], accent:'violet'}
];


const personalProjects = [
  {num:'01', title:'KimSamOPTCG', type:'PERSONAL BUSINESS · ACTIVE', status:'ACTIVE DEVELOPMENT', desc:'A personal One Piece TCG project focused on building a branded mystery-pack and collector experience, including product presentation, promotions and an online storefront concept.', tech:['React','E-Commerce','Inventory','Branding'], accent:'violet', projectUrl:'https://kimsamoptcgreac.vercel.app/', githubUrl:'https://github.com/kimsamapp/kimsamoptcgreac'},
  {num:'02', title:'KimSam OPTCG Binder', type:'PERSONAL PROJECT · TCG COLLECTION SYSTEM', status:'Active', desc:'A personal One Piece Trading Card Game collection management platform built to organize, track, and showcase a growing card collection in a digital binder experience.  The project focuses on creating a structured and user-friendly way to manage collectible cards while providing a dedicated interface for browsing and keeping track of a personal TCG collection.', tech:['React','Web Application','Collection Management', 'Firebase', 'Cloudinary'], accent:'violet', projectUrl:'https://kimsamoptcg-binder.vercel.app/login', githubUrl:'https://github.com/kimsamapp/kimsamoptcg-binder'},
  {num:'03', title:'Vaeloria TCG', type:'PRODUCT CONCEPT · IN DEVELOPMENT', status:'IN DEVELOPMENT', desc:'An original Trading Card Game concept exploring card design, visual identity, elemental systems, reusable card assets and the digital experience around the game.', tech:['TCG Design','UI / UX','React','Digital Assets'], accent:'cyan', projectUrl:'#', githubUrl:'#'},
  {num:'04', title:'Personal Inventory System', type:'FULL-STACK SIDE PROJECT · EXPERIMENTAL', status:'EXPERIMENTAL', desc:'A personal full-stack application used to explore production-style architecture, authentication, inventory workflows, APIs and database design outside of professional work.', tech:['C#','ASP.NET Core','React','SQL Server'], accent:'amber', projectUrl:'#', githubUrl:'#'},
];

function App(){
  const [menu,setMenu]=useState(false);
  const [showTop,setShowTop]=useState(false);
  const close=()=>setMenu(false);

  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const navHeight = 76;
    const targetY = Math.max(
      0,
      element.getBoundingClientRect().top + window.scrollY - navHeight
    );
    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = Math.min(900, Math.max(450, Math.abs(distance) * 0.45));
    const startTime = performance.now();

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animate = (now) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, startY + distance * eased);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  const scrollToSection = (event, id) => {
    event.preventDefault();
    close();
    smoothScrollTo(id);
  };

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    const handleInternalLinks = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;

      const id = link.getAttribute('href').slice(1);
      if (!id || !document.getElementById(id)) return;

      event.preventDefault();
      close();
      smoothScrollTo(id);
      window.history.replaceState(null, '', `#${id}`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleInternalLinks);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleInternalLinks);
    };
  }, []);

  const scrollToTop = () => smoothScrollTo('top');
  return <div className="site">
    <div className="pixel-grid" aria-hidden="true"></div>
    <header className="nav">
      <a className="brand" href="#top" onClick={(e)=>scrollToSection(e,'top')}><span className="brand-box">KJE</span><span>KIM JOSHUA ESPAÑOL</span></a>
      <button className="menu" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">{menu?'×':'☰'}</button>
      <nav className={menu?'open':''}>
        <a href="#about" onClick={(e)=>scrollToSection(e,'about')}>About</a><a href="#skills" onClick={(e)=>scrollToSection(e,'skills')}>Skills</a><a href="#projects" onClick={(e)=>scrollToSection(e,'projects')}>Projects</a><a href="#personal" onClick={(e)=>scrollToSection(e,'personal')}>Personal</a><a href="#experience" onClick={(e)=>scrollToSection(e,'experience')}>Experience</a>
        <a className="nav-cta" href="#contact" onClick={(e)=>scrollToSection(e,'contact')}>Contact ↘</a>
      </nav>
    </header>

    <main id="top">
      <section className="hero section">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"></span> AVAILABLE FOR OPPORTUNITIES</div>
          <h1>Software<br/><span>Developer.</span></h1>
          <p className="lead">I build reliable web and mobile applications across the stack — from <b>C# / ASP.NET Core</b> APIs and SQL Server databases to <b>React</b> interfaces and Flutter applications.</p>
          <div className="hero-actions"><a className="btn primary" href="#projects" onClick={(e)=>scrollToSection(e,'projects')}>View my work <span>→</span></a><a className="btn secondary" href="/resume.pdf" target="_blank" rel="noreferrer">View Resume <span>↗</span></a></div>
          <div className="quick-stats"><div><strong>6+</strong><span>YEARS EXPERIENCE</span></div><div><strong>.NET</strong><span>PRIMARY BACKEND</span></div><div><strong>FULL</strong><span>STACK DELIVERY</span></div></div>
        </div>
        <div className="hero-terminal">
          <div className="terminal-top"><span className="dots"><i></i><i></i><i></i></span><span>kim@developer: ~/portfolio</span><span>●</span></div>
          <div className="terminal-body"><p><em>01</em> <span className="pink">const</span> developer = {`{`}</p><p><em>02</em> &nbsp;name: <span className="green">"Kim Joshua"</span>,</p><p><em>03</em> &nbsp;role: <span className="green">"Software Developer"</span>,</p><p><em>04</em> &nbsp;backend: [<span className="green">"C#"</span>, <span className="green">"ASP.NET Core API"</span>],</p><p><em>05</em> &nbsp;frontend: [<span className="green">"React"</span>, <span className="green">"Vite"</span>],</p><p><em>06</em> &nbsp;database: <span className="green">"SQL Server"</span>,</p><p><em>07</em> &nbsp;mobile: <span className="green">"Flutter"</span>,</p><p><em>08</em> &nbsp;experience: <span className="green">"6+ years"</span></p><p><em>09</em> {`};`}<span className="cursor"></span></p></div>
        </div>
      </section>

      <section id="about" className="section about"><div className="section-label">01 / ABOUT</div><div className="about-grid"><div><h2>Engineering with<br/><span>purpose.</span></h2></div><div><p>I’m a software developer with 6+ years of experience building enterprise applications and business systems. My strongest area is backend development with C# and ASP.NET Core, while my full-stack experience allows me to take features from database design through API implementation and frontend delivery.</p><p>I care about maintainable architecture, secure APIs, clean database design and practical user experiences. I’m comfortable joining an existing codebase, solving production issues, or building a system from the ground up.</p></div></div></section>

      <section id="skills" className="section"><div className="section-head"><div><div className="section-label">02 / TOOLKIT</div><h2>Technical <span>skills.</span></h2></div><p>Technologies I use to turn requirements into working software.</p></div><div className="skills-grid">{skills.map(s=><article className="skill-card" key={s.title}><div className="skill-mark">{s.mark}</div><h3>{s.title}</h3><div className="chips">{s.items.map(x=><span key={x}>{x.trim()}</span>)}</div></article>)}</div></section>

      <section id="projects" className="section"><div className="section-head"><div><div className="section-label">03 / SELECTED WORK</div><h2>Things I’ve <span>built.</span></h2></div><p>Real-world application patterns across APIs, databases, interfaces and cloud services.</p></div><div className="projects">{projects.map(p=><article className={`project ${p.accent}`} key={p.num}><div className="project-num">{p.num}</div><div className="project-main"><div className="project-type">{p.type}</div><h3>{p.title}</h3><p>{p.desc}</p><div className="chips">{p.tech.map(x=><span key={x}>{x}</span>)}</div></div><div className="project-arrow">↗</div></article>)}</div></section>

      <section id="personal" className="section personal-projects"><div className="section-head"><div><div className="section-label">04 / PERSONAL LAB</div><h2>Things I build<br/><span>outside work.</span></h2></div><p>Independent projects, experiments, product ideas and side builds that let me explore technology beyond my professional work.</p></div><div className="personal-grid">{personalProjects.map(p=><article className={`personal-card ${p.accent}`} key={p.num}><div className="personal-top"><span className="personal-num">{p.num}</span><span className="personal-status">{p.status}</span></div><div className="personal-type">{p.type}</div><h3>{p.title}</h3><p>{p.desc}</p><div className="chips">{p.tech.map(x=><span key={x}>{x}</span>)}</div><div className="personal-footer">
  <span>PERSONAL PROJECT</span>
  <div className="personal-actions">
    {p.projectUrl !== '#' && (
      <a
        href={p.projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="personal-link primary"
      >
        VIEW PROJECT ↗
      </a>
    )}

    {p.githubUrl !== '#' && (
      <a
        href={p.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="personal-link"
      >
        GITHUB ↗
      </a>
    )}
  </div>
</div></article>)}</div></section>

      <section id="experience" className="section experience"><div className="section-label">05 / EXPERIENCE</div><div className="experience-row"><div><h2>6+ years of<br/><span>building software.</span></h2></div><div className="timeline"><div className="timeline-item"><div className="year">JAN 2024 — SEP 2026</div><div><h3>Developer · AMCS Group</h3><p>Enterprise application development with C#, ASP.NET Core API, Angular and Microsoft SQL Server. Built and maintained a centralized REST API integrator, supported Exago reporting, and worked with SonarQube, Grafana and TFS.</p></div></div><div className="timeline-item"><div className="year">OCT 2022 — DEC 2023</div><div><h3>Senior Specialist, Web Developer · Mercedes-Benz Group Services PH</h3><p>Introduced React.js, Material UI, C# ASP.NET Core API and SQL Server as a core application stack. Established the React component architecture and REST API structure, contributed to solution design, and delivered applications including Seat Reservation, Login/Logout & Overtime Request, and Policy Application.</p></div></div><div className="timeline-item"><div className="year">JAN 2021 — NOV 2022</div><div><h3>Technical Specialist II · Alliance Software Inc.</h3><p>Worked on Pando Survey, UNILAB and internal applications using React.js, Angular, C# ASP.NET Core API and SQL Server, with responsibilities spanning UI development, upgrades, debugging, testing and technical support.</p></div></div><div className="timeline-item"><div className="year">AUG 2018 — AUG 2020</div><div><h3>Associate Software Engineer · Accenture Inc.</h3><p>Developed Sitecore and ASP.NET MVC components, REST APIs and AngularJS / ASP.NET Core solutions, including reusable components and unit testing improvements within Scrum teams.</p></div></div></div></div></section>

      <section id="contact" className="section cta"><div className="cta-inner"><div className="section-label">06 / LET'S CONNECT</div><h2>Have a project<br/>in mind?</h2><p>I'm open to senior full-stack opportunities and projects where I can contribute across the application stack.</p><a className="btn primary" href="mailto:kim.joshua.espanol.work@gmail.com">Start a conversation ↗</a></div></section>
    </main>
    {showTop && <button className="back-to-top" onClick={scrollToTop} aria-label="Scroll to top">↑ TOP</button>}
    <footer><span>© 2026 KIM JOSHUA</span><span>BUILT WITH REACT + VITE</span><span><a href="https://github.com/kimsamapp" target="_blank" rel="noreferrer">GITHUB ↗</a> &nbsp; <a href="https://linkedin.com/in/kim-joshua-espanol-a63610197/" target="_blank" rel="noreferrer">LINKEDIN ↗</a></span></footer>
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);

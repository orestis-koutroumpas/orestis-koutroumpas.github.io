document.addEventListener("DOMContentLoaded", function() {

    document.documentElement.setAttribute('lang', 'en');
    document.head.innerHTML = `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Orestis Koutroumpas</title>
        <link rel="icon" href="icon.png" type="image/x-icon">
        <link rel="stylesheet" href="style.css">
    `;

    // ── HEADER ──────────────────────────────────────────────────────────────
    const header = document.createElement('header');
    header.innerHTML = `<h1>Orestis <span>Koutroumpas</span></h1>`;

    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const navItems = [
        { href: '#about',       text: 'About' },
        { href: '#education',   text: 'Education' },
        { href: '#experience',  text: 'Experience' },
        { href: '#projects',    text: 'Projects' },
        { href: '#skills',      text: 'Skills' },
        { href: '#volunteering',text: 'Volunteering' },
    ];

    navItems.forEach(item => {
        const li = document.createElement('li');
        const a  = document.createElement('a');
        a.setAttribute('href', item.href);
        a.textContent = item.text;
        li.appendChild(a);
        ul.appendChild(li);
    });
    nav.appendChild(ul);
    header.appendChild(nav);
    document.body.appendChild(header);

    // ── MAIN ────────────────────────────────────────────────────────────────
    const main = document.createElement('main');

    // ABOUT ──────────────────────────────────────────────────────────────────
    const aboutSection = document.createElement('section');
    aboutSection.setAttribute('id', 'about');
    aboutSection.innerHTML = `
      <h2>About Me</h2> 
      <div class="about-layout">
        <div class="about-photo-wrap">
          <img src="photo.jpg" alt="My Photo" class="about-photo">
        </div>

        <div class="about-bio">
          <p>
            Electrical and Computer Engineering graduate with hands-on industry experience in AI/ML 
            engineering and data science, including production-grade NLP and LLM systems at Accenture 
            and real estate AVM development at Homli. Strong foundations in machine learning, and 
            software engineering, complemented by a diploma thesis on biometric authentication using 
            eye-tracking data. Passionate about the intersection of quantum theory and artificial 
            intelligence, and eager to deepen expertise through advanced postgraduate research.
          </p>
        </div>
      </div>
    `;
    main.appendChild(aboutSection);

    // CONTACT ────────────────────────────────────────────────────────────────
    const contactSection = document.createElement('section');
    contactSection.setAttribute('id', 'contact');
    contactSection.innerHTML = `
      <h2>Contact Me</h2>
      <div class="contact-grid">
        <div class="contact-card">
          <p><span class="contact-label">Email</span><a href="mailto:o.koutroubas@gmail.com">o.koutroubas@gmail.com</a></p>
          <p><span class="contact-label">Phone</span>+30 6971964537</p>
          <p><span class="contact-label">GitHub</span><a href="https://github.com/orestis-koutroumpas" target="_blank">github.com/orestis-koutroumpas</a></p>
          <p><span class="contact-label">LinkedIn</span><a href="https://linkedin.com/in/orestis-koutroumpas-7270b9248" target="_blank">linkedin.com/in/orestis-koutroumpas</a></p>
        </div>
      </div>
    `;
    main.appendChild(contactSection);

    // EDUCATION ──────────────────────────────────────────────────────────────
    const educationSection = document.createElement('section');
    educationSection.setAttribute('id', 'education');
    educationSection.innerHTML = `
    <h2>Education</h2>
    <div class="education-grid">
      <div class="education-card">
        <h3>Diploma in Electrical &amp; Computer Engineering</h3>
        <h4>University of Patras — Patras, Greece</h4>
        <p>Sep 2020 – Feb 2026</p>

        <span class="grade">Grade: 8.19 / 10</span>

        <div class="coursework">
          <strong>Relevant Coursework:</strong>
          <ul>
            <li>Quantum Computing</li>
            <li>Quantum Electronics</li>
            <li>Artificial Intelligence</li>
            <li>Machine Learning</li>
            <li>Signal Processing</li>
            <li>Algorithms &amp; Data Structures</li>
            <li>Linear Algebra</li>
            <li>Probability &amp; Statistics</li>
            <li>Computer Networks</li>
          </ul>
        </div>
      </div>
    </div>
    `;
    main.appendChild(educationSection);

    // EXPERIENCE ─────────────────────────────────────────────────────────────
    const experienceSection = document.createElement('section');
    experienceSection.setAttribute('id', 'experience');
    experienceSection.innerHTML = `
    <h2>Experience</h2>
    <div class="experience-grid">

        <div class="experience-card">
          <h3>AI / ML Engineer</h3>
          <h4>Accenture — Athens, Greece</h4>
          <span class="date-tag">Dec 2025 – Present</span>
          <ul>
            <li>Developing an enterprise-grade Natural Language to SQL AI assistant for banking users on the Databricks platform, enabling non-technical stakeholders to query large-scale financial datasets in natural language.</li>
            <li>Collaborating with data engineers and business stakeholders to integrate the solution into production-grade analytics workflows, ensuring reliability and scalability.</li>
          </ul>
        </div>

        <div class="experience-card">
          <h3>Data Scientist Intern</h3>
          <h4>Homli — Athens, Greece</h4>
          <span class="date-tag">Jun 2025 – Aug 2025</span>
          <ul>
            <li>Expanded the company's Automated Valuation Model (AVM) to a new market through feature selection and model optimization.</li>
            <li>Reviewed company voice agents using LLM-based evaluation metrics and generated new synthetic voices with ElevenLabs.</li>
            <li>Built web scrapers for raw data collection, cleaned and processed it, and stored structured datasets in PostgreSQL.</li>
          </ul>
        </div>

        <div class="experience-card">
          <h3>Information Technology Intern</h3>
          <h4>Cooperative Bank of Chania — Chania, Greece</h4>
          <span class="date-tag">Jul 2023 – Aug 2023</span>
          <ul>
            <li>Delivered first-level technical support to end-users, resolving hardware and software issues.</li>
            <li>Diagnosed and addressed system vulnerabilities through regular updates and patches.</li>
            <li>Managed user accounts and permissions to ensure data security and compliance.</li>
            <li>IT infrastructure monitoring and setup (Microsoft 365, Teams, printers, networks, routers, switches, security tools).</li>
          </ul>
        </div>

    </div>
    `;
    main.appendChild(experienceSection);

    // PROJECTS ───────────────────────────────────────────────────────────────
    const projectsSection = document.createElement('section');
    projectsSection.setAttribute('id', 'projects');
    projectsSection.innerHTML = `
    <h2>Projects</h2>
    <div class="projects-grid">

      <div class="project-card">
        <h3><a href="https://github.com/orestis-koutroumpas/eye-tracking-authentication" target="_blank">Eye Tracking Authentication</a></h3>
        <p class="tech-tag">Python, scikit-learn · Apr 2025 – Dec 2025</p>
        <ul>
          <li><em>Diploma Project</em>: Developed a biometric authentication framework leveraging eye-tracking data as a continuous, passive secondary security layer to complement knowledge-based authentication schemes.</li>
          <li>Engineered feature extraction pipelines from raw gaze data and trained machine learning models, achieving a 1.9\% Equal Error Rate (EER) — a strong result in the biometric authentication literature — using only 12\% of the available training data, demonstrating high data efficiency.</li>
        </ul>
      </div>

      <div class="project-card">
        <h3><a href="https://github.com/orestis-koutroumpas/Classic-8-Ball-Pool" target="_blank">Classic 8-Ball Pool</a></h3>
        <p class="tech-tag">C++, OpenGL · Dec 2024 – Feb 2025</p>
        <ul>
          <li>Designed and implemented a 3D billiards game with realistic physics, dynamic lighting, and real-time shadow rendering.</li>
        </ul>
      </div>

      <div class="project-card">
        <h3><a href="https://www.figma.com/proto/9p84KSrzTdfuToZyJyjYlX/My-Scanner?node-id=165-7141" target="_blank">MyScanner</a></h3>
        <p class="tech-tag">Figma · Dec 2024 – Jan 2025</p>
        <ul>
          <li>Prototyped a mobile document scanning app focused on UX accessibility and minimal interface friction.</li>
          <li>Redesigned workflows from existing apps, improving efficiency by 40%.</li>
        </ul>
      </div>

      <div class="project-card">
        <h3><a href="https://github.com/orestis-koutroumpas/Gesture-Rock-Paper-Scissors" target="_blank">Gesture Rock Paper Scissors</a></h3>
        <p class="tech-tag">Python, OpenCV · Dec 2024 – Jan 2025</p>
        <ul>
          <li>Created a real-time game using hand gesture recognition, integrating haptic and visual feedback.</li>
        </ul>
      </div>

      <div class="project-card">
        <h3><a href="https://github.com/orestis-koutroumpas/Mnist-Inpainting" target="_blank">GANs for Inpainting &amp; Reconstruction</a></h3>
        <p class="tech-tag">Python, NumPy, Matplotlib · Dec 2024</p>
        <ul>
          <li>Used a trained GAN to reconstruct MNIST digit '8' from random noise vectors and partial input masks.</li>
          <li>Optimized latent input via gradient descent to improve reconstruction fidelity.</li>
        </ul>
      </div>

      <div class="project-card">
        <h3><a href="https://github.com/orestis-koutroumpas/Mnist-Classifier" target="_blank">MNIST Classifier</a></h3>
        <p class="tech-tag">Python, NumPy, Matplotlib · Nov 2024</p>
        <ul>
          <li>Neural network classifier distinguishing between digits 0 and 8. Achieved 99% accuracy.</li>
        </ul>
      </div>

      <div class="project-card">
        <h3><a href="https://github.com/orestis-koutroumpas/Sudoku-Solver" target="_blank">Sudoku Solver</a></h3>
        <p class="tech-tag">Python, PuLP · Sep 2024</p>
        <ul>
          <li>Engineered a solver using backtracking and linear programming for arbitrary grid sizes.</li>
        </ul>
      </div>

      <div class="project-card">
        <h3><a href="https://github.com/orestis-koutroumpas/Foodies" target="_blank">Foodies</a></h3>
        <p class="tech-tag">JavaScript, Node.js, Express.js, SQLite · Apr – Jun 2024</p>
        <ul>
          <li>Built a full-stack food ordering platform with delivery, cart, and order management using MVC architecture.</li>
        </ul>
      </div>

      <div class="project-card">
        <h3><a href="https://github.com/orestis-koutroumpas/Numerical-Solution-of-Schrodinger-Equation" target="_blank">Schrödinger Equation Solver</a></h3>
        <p class="tech-tag">Python, NumPy, Matplotlib · Jan 2024</p>
        <ul>
          <li>Implemented a numerical solver for the 1D time-independent Schrödinger equation using finite-difference methods.</li>
        </ul>
      </div>

      <div class="project-card">
        <h3><a href="https://github.com/orestis-koutroumpas/ZOO-DBMS" target="_blank">Zoo DBMS</a></h3>
        <p class="tech-tag">Python, SQLite, tkinter · Dec 2023 – Jan 2024</p>
        <ul>
          <li>GUI-based database management system for zoo operations.</li>
        </ul>
      </div>

    </div>
    `;
    main.appendChild(projectsSection);

    // SKILLS ─────────────────────────────────────────────────────────────────
    const skillsSection = document.createElement('section');
    skillsSection.setAttribute('id', 'skills');
    skillsSection.innerHTML = `
      <h2>Skills</h2>
      <div class="skills-grid">

        <div class="skill-card">
          <h3>Programming &amp; Technical</h3>
          <ul>
            <li><strong>Languages:</strong> Python, C/C++, Java, JavaScript, HTML/CSS, SQL (PostgreSQL, SQLite), NoSQL (MongoDB)</li>
            <li><strong>AI &amp ML:</strong> scikit-learn, PyTorch, TensorFlow, OpenCV, WandB, ElevenLabs, LLM Eval, Prompt Engineering</li>
            <li><strong>Data &amp; Cloud Platforms:</strong> Databricks, PostgreSQL, SQLite, ElevenLabs API</li>
            <li><strong>Software &amp; Dev Tools:</strong> Git, GitLab, Jira, VS Code, Visual Studio, Eclipse</li>
            <li><strong>Networking:</strong> CCNA-level knowledge, routing/switching, network architecture</li>
            <li><strong>Scientific &amp; Other Tools:</strong> MATLAB, Autodesk AutoCAD, Figma</li>
          </ul>
        </div>

        <div class="skill-card">
          <h3>Engineering &amp; Scientific</h3>
          <ul>
            <li>Advanced mathematics: calculus, linear algebra, probability, and statistics.</li>
            <li>Physics: electromagnetism and quantum electronics.</li>
            <li>Electrical circuits, microelectronics, power systems, and integrated electronics.</li>
            <li>Quantum computing principles and relevant algorithms.</li>
            <li>Computer science fundamentals: data structures, algorithms (DSA), and software engineering.</li>
          </ul>
        </div>

        <div class="skill-card">
          <h3>Languages</h3>
          <ul>
            <li><strong>Greek:</strong> Native</li>
            <li><strong>English:</strong> C2 - Michigan Certificate of Proficiency in English</li>
          </ul>
        </div>

      </div>
    `;
    main.appendChild(skillsSection);

    // VOLUNTEERING ───────────────────────────────────────────────────────────
    const volunteeringSection = document.createElement('section');
    volunteeringSection.setAttribute('id', 'volunteering');
    volunteeringSection.innerHTML = `
      <h2>Volunteering &amp; Extracurricular Activities</h2>
      <div class="volunteering-grid">

        <div class="volunteer-card">
          <h3>Athens NLP 2025 Summer School</h3>
          <h4>Participant · Onsite · Sep 2025</h4>
          <ul>
            <li>Selected participant in an summer school on Natural Language Processing and artificial intelligence.</li>
            <li>Explored advanced topics including deep learning for NLP, large language models, and recent research developments.</li>
            <li>Collaborated and networked with an international cohort of students and researchers.</li>
          </ul>
        </div>

        <div class="volunteer-card">
          <h3>Startup Universe 2024</h3>
          <h4>Volunteer · Virtual · Nov 2024</h4>
          <ul>
            <li>Identified and recruited field experts to mentor Greek tech startups.</li>
            <li>Maintained a structured database of recruited experts using Excel.</li>
          </ul>
        </div>

        <div class="volunteer-card">
          <h3>Startup Week Patras 2024</h3>
          <h4>Volunteer · Onsite · Oct 2024</h4>
          <ul>
            <li>Supported event logistics, including setup, troubleshooting, and participant assistance.</li>
            <li>Facilitated networking sessions between attendees, speakers, and mentors.</li>
          </ul>
        </div>

        <div class="volunteer-card">
          <h3>Soft Skills Academy 6 — Creativity</h3>
          <h4>Participant · Onsite · May 2022</h4>
          <ul>
            <li>Participated in collaborative activities enhancing creativity, problem-solving, and teamwork skills.</li>
          </ul>
        </div>

      </div>
    `;
    main.appendChild(volunteeringSection);

    document.body.appendChild(main);

    // ── FOOTER ───────────────────────────────────────────────────────────────
    const footer = document.createElement('footer');
    footer.innerHTML = '<p>&copy; 2026 Orestis Koutroumpas</p>';
    document.body.appendChild(footer);

    // ── ROUTER ───────────────────────────────────────────────────────────────
    function router() {
        const hash = window.location.hash || "#about";
        const sections = ['about', 'education', 'experience', 'projects', 'skills', 'volunteering', 'contact'];

        sections.forEach(id => {
            const section = document.getElementById(id);
            if (!section) return;
            const show = (hash === '#about' && (id === 'about' || id === 'contact'))
                      || ('#' + id === hash);
            section.style.display = show ? 'block' : 'none';
        });
    }

    router();
    window.addEventListener('hashchange', router);

});
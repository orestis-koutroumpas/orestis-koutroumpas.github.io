document.addEventListener("DOMContentLoaded", function() {

    document.documentElement.setAttribute('lang', 'en');
    document.head.innerHTML = `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Orestis Koutroumpas</title>
        <link rel="icon" href="img/icon.png" type="image/x-icon">
        <link rel="stylesheet" href="style.css">
    `;

    // ── HEADER ──────────────────────────────────────────────────────────────
    const header = document.createElement('header');
    header.innerHTML = `<h1>Orestis <span>Koutroumpas</span></h1>`;

    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const navItems = [
        { href: '#about',        text: 'About' },
        { href: '#education',    text: 'Education' },
        { href: '#experience',   text: 'Experience' },
        { href: '#projects',     text: 'Projects' },
        { href: '#skills',       text: 'Skills' },
        { href: '#volunteering', text: 'Volunteering' },
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

    // ── ABOUT ───────────────────────────────────────────────────────────────
    const aboutSection = document.createElement('section');
    aboutSection.setAttribute('id', 'about');
    aboutSection.innerHTML = `
      <h2>About Me</h2>
      <div class="about-layout">
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
        <div class="about-photo-wrap">
          <img src="img/photo.jpg" alt="Orestis Koutroumpas" class="about-photo">
        </div>
      </div>
    `;
    main.appendChild(aboutSection);

    // ── CONTACT ─────────────────────────────────────────────────────────────
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

    // ── EDUCATION ───────────────────────────────────────────────────────────
    // Logo on the left (like LinkedIn), title/school/meta on the right.
    // entry-meta row: location (left) — date badge (right).
    const educationEntries = [
      {
        logo:        'img/logos/upatras.jpg',
        logoAlt:     'University of Patras logo',
        logoFallback:'https://www.upatras.gr/wp-content/uploads/2019/05/upatras_logo.png',
        degree:      'Diploma in Electrical &amp; Computer Engineering',
        school:      'University of Patras',
        location:    'Patras, Greece',
        date:        'Sep 2020 – Feb 2026',
        grade:       '8.19 / 10',
        courses: [
          'Quantum Computing', 'Quantum Electronics', 'Artificial Intelligence',
          'Machine Learning', 'Signal Processing', 'Algorithms &amp; Data Structures',
          'Linear Algebra', 'Probability &amp; Statistics', 'Computer Networks',
        ],
      },
    ];

    const educationSection = document.createElement('section');
    educationSection.setAttribute('id', 'education');
    educationSection.innerHTML = '<h2>Education</h2>';

    const eduGrid = document.createElement('div');
    eduGrid.className = 'education-grid';

    educationEntries.forEach(e => {
      const card = document.createElement('div');
      card.className = 'education-card entry-card';
      card.innerHTML = `
        <div class="entry-logo-wrap">
          <img class="entry-logo" src="${e.logo}" alt="${e.logoAlt}"
               onerror="this.src='${e.logoFallback}'; this.onerror=null;">
        </div>
        <div class="entry-body">
          <h3>${e.degree}</h3>
          <h4>${e.school}</h4>
          <div class="entry-meta">
            <span class="entry-location">${e.location}</span>
            <span class="date-tag">${e.date}</span>
          </div>
          <span class="grade">Grade: ${e.grade}</span>
          <div class="coursework">
            <span class="coursework-label">Relevant Coursework</span>
            <ul class="coursework-pills">
              ${e.courses.map(c => `<li>${c}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
      eduGrid.appendChild(card);
    });

    educationSection.appendChild(eduGrid);
    main.appendChild(educationSection);

    // ── EXPERIENCE ──────────────────────────────────────────────────────────
    // Same LinkedIn-style layout: logo left, content right,
    // entry-meta row: location (left) — date badge (right).
    const experienceEntries = [
      {
        logo:        'img/logos/accenture.jfif',
        logoAlt:     'Accenture logo',
        logoFallback:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/320px-Accenture.svg.png',
        title:       'AI / ML Engineer',
        company:     'Accenture',
        location:    'Athens, Greece',
        date:        'Dec 2025 – Present',
        bullets: [
          'Developing an enterprise-grade Natural Language to SQL AI assistant for banking users on the Databricks platform, enabling non-technical stakeholders to query large-scale financial datasets in natural language.',
          'Collaborating with data engineers and business stakeholders to integrate the solution into production-grade analytics workflows, ensuring reliability and scalability.',
        ],
      },
      {
        logo:        'img/logos/homli.jfif',
        logoAlt:     'Homli logo',
        logoFallback:'https://media.licdn.com/dms/image/v2/D4D0BAQHb4_1YwtFVlA/company-logo_200_200/company-logo_200_200/0/1700384634579/homli_logo?e=2147483647&v=beta&t=rXcSc4HiEXW2HW4nREizCjqPvTzNs5w9bBjg44qGGio',
        title:       'Data Scientist Intern',
        company:     'Homli',
        location:    'Athens, Greece',
        date:        'Jun 2025 – Aug 2025',
        bullets: [
          'Expanded the company\'s Automated Valuation Model (AVM) to a new market through feature selection and model optimization.',
          'Reviewed company voice agents using LLM-based evaluation metrics and generated new synthetic voices with ElevenLabs.',
          'Built web scrapers for raw data collection, cleaned and processed it, and stored structured datasets in PostgreSQL.',
        ],
      },
      {
        logo:        'img/logos/chania.png',
        logoAlt:     'Cooperative Bank of Chania logo',
        logoFallback:'https://www.synetairistikibank.gr/wp-content/uploads/2021/10/logo.png',
        title:       'Information Technology Intern',
        company:     'Cooperative Bank of Chania',
        location:    'Chania, Greece',
        date:        'Jul 2023 – Aug 2023',
        bullets: [
          'Delivered first-level technical support to end-users, resolving hardware and software issues.',
          'Diagnosed and addressed system vulnerabilities through regular updates and patches.',
          'Managed user accounts and permissions to ensure data security and compliance.',
          'IT infrastructure monitoring and setup (Microsoft 365, Teams, printers, networks, routers, switches, security tools).',
        ],
      },
    ];

    const experienceSection = document.createElement('section');
    experienceSection.setAttribute('id', 'experience');
    experienceSection.innerHTML = '<h2>Experience</h2>';

    const expGrid = document.createElement('div');
    expGrid.className = 'experience-grid';

    experienceEntries.forEach(e => {
      const card = document.createElement('div');
      card.className = 'experience-card entry-card';
      card.innerHTML = `
        <div class="entry-logo-wrap">
          <img class="entry-logo" src="${e.logo}" alt="${e.logoAlt}"
               onerror="this.src='${e.logoFallback}'; this.onerror=null;">
        </div>
        <div class="entry-body">
          <h3>${e.title}</h3>
          <h4>${e.company}</h4>
          <div class="entry-meta">
            <span class="entry-location">${e.location}</span>
            <span class="date-tag">${e.date}</span>
          </div>
          <ul>${e.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
        </div>
      `;
      expGrid.appendChild(card);
    });

    experienceSection.appendChild(expGrid);
    main.appendChild(experienceSection);

    // ── PROJECTS ────────────────────────────────────────────────────────────
    const projects = [
      {
        title:  'Eye Tracking Authentication',
        href:   'https://github.com/orestis-koutroumpas/eye-tracking-authentication',
        tech:   'Python, scikit-learn · Apr 2025 – Dec 2025',
        img:    'img/projects/eye_tracking.jpg',
        imgAlt: 'Eye Tracking Authentication screenshot',
        imgFallback: 'https://picsum.photos/seed/eyetrack/280/192',
        bullets: [
          '<em>Diploma Project</em>: Developed a biometric authentication framework leveraging eye-tracking data as an additional security layer to knowledge-based authentication.',
          'Achieved a 1.9% Equal Error Rate (EER) using only 12% of the available training data, demonstrating high data efficiency with limited resources.',
        ],
      },
      {
        title:  'Classic 8-Ball Pool',
        href:   'https://github.com/orestis-koutroumpas/Classic-8-Ball-Pool',
        tech:   'C++, OpenGL · Dec 2024 – Feb 2025',
        img:    'img/projects/pool.jpg',
        imgAlt: '8-Ball Pool game screenshot',
        imgFallback: 'https://picsum.photos/seed/billiards/280/192',
        bullets: [
          'Designed and implemented a 3D billiards game with realistic physics, dynamic lighting, and real-time shadow rendering.',
        ],
      },
      {
        title:  'MyScanner',
        href:   'https://www.figma.com/proto/9p84KSrzTdfuToZyJyjYlX/My-Scanner?node-id=165-7141',
        tech:   'Figma · Dec 2024 – Jan 2025',
        img:    'img/projects/my_scanner.jpg',
        imgAlt: 'MyScanner Figma prototype',
        imgFallback: 'https://picsum.photos/seed/scanner/280/192',
        bullets: [
          'Prototyped a mobile document scanning app focused on UX accessibility and minimal interface friction.',
          'Redesigned workflows from existing apps, improving efficiency by 40%.',
        ],
      },
      {
        title:  'Gesture Rock Paper Scissors',
        href:   'https://github.com/orestis-koutroumpas/Gesture-Rock-Paper-Scissors',
        tech:   'Python, OpenCV · Dec 2024 – Jan 2025',
        img:    'img/projects/rps.jpg',
        imgAlt: 'Gesture Rock Paper Scissors screenshot',
        imgFallback: 'https://picsum.photos/seed/rps/280/192',
        bullets: [
          'Created a real-time game using hand gesture recognition, integrating haptic and visual feedback.',
        ],
      },
      {
        title:  'GANs for Inpainting & Reconstruction',
        href:   'https://github.com/orestis-koutroumpas/Mnist-Inpainting',
        tech:   'Python, NumPy, Matplotlib · Dec 2024',
        img:    'img/projects/gans.png',
        imgAlt: 'GAN inpainting result',
        imgFallback: 'https://picsum.photos/seed/gans/280/192',
        bullets: [
          'Used a trained GAN to reconstruct MNIST digit "8" from random noise vectors and partial input masks.',
          'Optimized latent input via gradient descent to improve reconstruction fidelity.',
        ],
      },
      {
        title:  'MNIST Classifier',
        href:   'https://github.com/orestis-koutroumpas/Mnist-Classifier',
        tech:   'Python, NumPy, Matplotlib · Nov 2024',
        img:    'img/projects/mnist.png',
        imgAlt: 'MNIST Classifier output',
        imgFallback: 'https://picsum.photos/seed/mnist/280/192',
        bullets: [
          'Neural network classifier distinguishing between digits 0 and 8. Achieved 99% accuracy.',
        ],
      },
      {
        title:  'Sudoku Solver',
        href:   'https://github.com/orestis-koutroumpas/Sudoku-Solver',
        tech:   'Python, PuLP · Sep 2024',
        img:    'img/projects/sudoku.jpg',
        imgAlt: 'Sudoku Solver screenshot',
        imgFallback: 'https://picsum.photos/seed/sudoku/280/192',
        bullets: [
          'Engineered a solver using backtracking and linear programming for arbitrary grid sizes.',
        ],
      },
      {
        title:  'Foodies',
        href:   'https://github.com/orestis-koutroumpas/Foodies',
        tech:   'JavaScript, Node.js, Express.js, SQLite · Apr – Jun 2024',
        img:    'img/projects/foodies.gif',
        imgAlt: 'Foodies platform screenshot',
        imgFallback: 'https://picsum.photos/seed/foodies/280/192',
        bullets: [
          'Built a full-stack food ordering platform with delivery, cart, and order management using MVC architecture.',
        ],
      },
      {
        title:  'Schrödinger Equation Solver',
        href:   'https://github.com/orestis-koutroumpas/Numerical-Solution-of-Schrodinger-Equation',
        tech:   'Python, NumPy, Matplotlib · Jan 2024',
        img:    'img/projects/schrodinger.png',
        imgAlt: 'Schrödinger solver plot',
        imgFallback: 'https://picsum.photos/seed/schrodinger/280/192',
        bullets: [
          'Implemented a numerical solver for the 1D time-independent Schrödinger equation using finite-difference methods.',
        ],
      },
      {
        title:  'Zoo DBMS',
        href:   'https://github.com/orestis-koutroumpas/ZOO-DBMS',
        tech:   'Python, SQLite, tkinter · Dec 2023 – Jan 2024',
        img:    'img/projects/zoo.gif',
        imgAlt: 'Zoo DBMS GUI screenshot',
        imgFallback: 'https://picsum.photos/seed/zoodbms/280/192',
        bullets: [
          'GUI-based database management system for zoo operations built with Python and SQLite.',
        ],
      },
    ];

    const projectsSection = document.createElement('section');
    projectsSection.setAttribute('id', 'projects');
    const projGrid = document.createElement('div');
    projGrid.className = 'projects-grid';

    projects.forEach(p => {
      const card = document.createElement('div');
      card.className = 'project-card';

      const imgWrap = document.createElement('div');
      imgWrap.className = 'project-img-wrap';
      const img = document.createElement('img');
      img.alt = p.imgAlt;
      img.src = p.img;
      img.onerror = function() { this.src = p.imgFallback; this.onerror = null; };
      imgWrap.appendChild(img);

      const content = document.createElement('div');
      content.className = 'project-content';
      content.innerHTML = `
        <h3><a href="${p.href}" target="_blank">${p.title}</a></h3>
        <span class="tech-tag">${p.tech}</span>
        <ul>${p.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      `;

      card.appendChild(imgWrap);
      card.appendChild(content);
      projGrid.appendChild(card);
    });

    projectsSection.innerHTML = '<h2>Projects</h2>';
    projectsSection.appendChild(projGrid);
    main.appendChild(projectsSection);

    // ── SKILLS ──────────────────────────────────────────────────────────────
    const skillsSection = document.createElement('section');
    skillsSection.setAttribute('id', 'skills');
    skillsSection.innerHTML = `
      <h2>Skills</h2>
      <div class="skills-grid">
        <div class="skill-card">
          <h3>Programming &amp; Technical</h3>
          <ul>
            <li><strong>Languages:</strong> Python, C/C++, Java, JavaScript, HTML/CSS, SQL (PostgreSQL, SQLite), NoSQL (MongoDB)</li>
            <li><strong>AI &amp; ML:</strong> scikit-learn, PyTorch, TensorFlow, OpenCV, WandB, ElevenLabs, LLM Eval, Prompt Engineering</li>
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
            <li><strong>English:</strong> C2 — Michigan Certificate of Proficiency in English</li>
          </ul>
        </div>
      </div>
    `;
    main.appendChild(skillsSection);

    // ── VOLUNTEERING ─────────────────────────────────────────────────────────
    const activities = [
      {
        title:       'Athens NLP 2025 Summer School',
        sub:         'Participant · Onsite · Sep 2025',
        img:         'img/volunteering/nlp-summer-school.jfif',
        imgAlt:      'Athens NLP Summer School',
        imgFallback: 'https://picsum.photos/seed/nlpschool/240/168',
        bullets: [
          'Selected participant in a summer school on Natural Language Processing and artificial intelligence.',
          'Explored advanced topics including deep learning for NLP, large language models, and recent research.',
          'Collaborated and networked with an international cohort of students and researchers.',
        ],
      },
      {
        title:       'Startup Universe 2024',
        sub:         'Volunteer · Virtual · Nov 2024',
        img:         'img/volunteering/startup-universe.jfif',
        imgAlt:      'Startup Universe 2024',
        imgFallback: 'https://picsum.photos/seed/startupuniverse/240/168',
        bullets: [
          'Identified and recruited field experts to mentor Greek tech startups.',
          'Maintained a structured database of recruited experts using Excel.',
        ],
      },
      {
        title:       'Startup Week Patras 2024',
        sub:         'Volunteer · Onsite · Oct 2024',
        img:         'img/volunteering/startup-week.jfif',
        imgAlt:      'Startup Week Patras 2024',
        imgFallback: 'https://picsum.photos/seed/startupweek/240/168',
        bullets: [
          'Supported event logistics, including setup, troubleshooting, and participant assistance.',
          'Facilitated networking sessions between attendees, speakers, and mentors.',
        ],
      },
      {
        title:       'Soft Skills Academy 6 — Creativity',
        sub:         'Participant · Onsite · May 2022',
        img:         'img/volunteering/soft-skills.jpg',
        imgAlt:      'Soft Skills Academy',
        imgFallback: 'https://picsum.photos/seed/softskills/240/168',
        bullets: [
          'Participated in collaborative activities enhancing creativity, problem-solving, and teamwork skills.',
        ],
      },
    ];

    const volunteeringSection = document.createElement('section');
    volunteeringSection.setAttribute('id', 'volunteering');
    const volGrid = document.createElement('div');
    volGrid.className = 'volunteering-grid';

    activities.forEach(a => {
      const card = document.createElement('div');
      card.className = 'volunteer-card';

      const imgWrap = document.createElement('div');
      imgWrap.className = 'volunteer-img-wrap';
      const img = document.createElement('img');
      img.alt = a.imgAlt;
      img.src = a.img;
      img.onerror = function() { this.src = a.imgFallback; this.onerror = null; };
      imgWrap.appendChild(img);

      const content = document.createElement('div');
      content.className = 'volunteer-content';
      content.innerHTML = `
        <h3>${a.title}</h3>
        <h4>${a.sub}</h4>
        <ul>${a.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      `;

      card.appendChild(imgWrap);
      card.appendChild(content);
      volGrid.appendChild(card);
    });

    volunteeringSection.innerHTML = '<h2>Volunteering &amp; Extracurricular Activities</h2>';
    volunteeringSection.appendChild(volGrid);
    main.appendChild(volunteeringSection);

    document.body.appendChild(main);

    // ── FOOTER ───────────────────────────────────────────────────────────────
    const footer = document.createElement('footer');
    footer.innerHTML = '<p>&copy; 2026 Orestis Koutroumpas</p>';
    document.body.appendChild(footer);

    // ── ROUTER ───────────────────────────────────────────────────────────────
    function router() {
        const hash = window.location.hash || '#about';
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
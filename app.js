document.addEventListener("DOMContentLoaded", function() {

    document.documentElement.setAttribute('lang', 'en');
    document.head.innerHTML = `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Orestis Koutroumpas</title>
        <link rel="icon" href="icon.png" type="image/x-icon">
        <link rel="stylesheet" href="style.css">
    `;

    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Orestis Koutroumpas';
    header.appendChild(h1);

    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const navItems = [
        { href: '#about', text: 'About Me' },
        { href: '#education', text: 'Education' },
        { href: '#experience', text: 'Experience' },
        { href: '#projects', text: 'Projects' },
        { href: '#skills', text: 'Skills' },
        { href: '#volunteering', text: 'Volunteering' },
    ];

    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', item.href);
        a.textContent = item.text;
        li.appendChild(a);
        ul.appendChild(li);
    });
    nav.appendChild(ul);
    header.appendChild(nav);
    document.body.appendChild(header);

    // Main container for all sections
    const main = document.createElement('main');

    // About Section
    const aboutSection = document.createElement('section');
    aboutSection.setAttribute('id', 'about');
    aboutSection.innerHTML = `
        <h2>About Me</h2>
        <p>I am an undergraduate student in Electrical and Computer Engineering, expected to graduate in February 2026. I possess a strong foundation in mathematics, physics, and engineering principles. I am passionate about advancing research and innovation, especially in artificial intelligence, computer networks, and software engineering. With skills in software development, data analysis, and computational problem-solving, I am keen to apply these technologies in practical, real-world scenarios. I am currently seeking a challenging academic and research experience to deepen my expertise and broaden my skill set in these dynamic and rapidly evolving fields.</p>
    `;
    main.appendChild(aboutSection);

    // Contact Section
    const contactSection = document.createElement('section');
    contactSection.setAttribute('id', 'contact');
    contactSection.innerHTML = `
      <h2>Contact</h2>
      <div class="contact-grid">
        <div class="contact-card">
          <p>Email: <a href="mailto:o.koutroubas@gmail.com">o.koutroubas@gmail.com</a></p>
          <p>Phone: +30 6971964537</p>
          <p>GitHub: <a href="https://github.com/orestis-koutroumpas">GitHub</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/orestis-koutroumpas-7270b9248">LinkedIn</a></p>
        </div>
      </div>
    `;
    main.appendChild(contactSection);


    // Education Section
    const educationSection = document.createElement('section');
    educationSection.setAttribute('id', 'education');
    educationSection.innerHTML = `
        <h2>Education</h2>
        <h4>Diploma in Electrical &amp; Computer Engineering</h4>
        <p></p>University of Patras, Patra, Greece<br>
        Sep 2020 – Feb 2026 (Expected)<br>
        Grade: 7.9 / 10</p>
    `;
    main.appendChild(educationSection);

    // Experience Section
    const experienceSection = document.createElement('section');
    experienceSection.setAttribute('id', 'experience');
    experienceSection.innerHTML = `
    <h2>Professional Experience</h2>
    <div class="experience-grid">

        <div class="experience-card">
        <h3>Data Scientist Intern</h3>
        <h4>Homli, Athens, Greece</h4>
        <p>Jun 2025 – Aug 2025</p>
        <ul>
            <li>Expanded the company’s Automated Valuation Model (AVM) to a new market through feature selection and model optimization.</li>
            <li>Reviewed company voice agents using LLM-based evaluation metrics and generated new synthetic voices with ElevenLabs.</li>
            <li>Built web scrapers for raw data collection, cleaned and processed it, and stored structured datasets in PostgreSQL.</li>
        </ul>
        </div>

        <div class="experience-card">
        <h3>Information Technology Intern</h3>
        <h4>Cooperative Bank of Chania, Chania, Greece</h4>
        <p>Jul 2023 – Aug 2023</p>
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

    // Projects Section
    const projectsSection = document.createElement('section');
    projectsSection.setAttribute('id', 'projects');
    projectsSection.innerHTML = `
    <h2>Projects</h2>
    <div class="projects-grid">
      <div class="project-card">
        <h3><a href="https://github.com/orestis-koutroumpas/Classic-8-Ball-Pool" target="_blank">Classic 8-Ball Pool</a></h3>
        <p>C++, OpenGL | Dec 2024 – Feb 2025</p>
        <ul>
          <li>Designed and implemented a 3D billiards game with realistic physics, dynamic lighting, and real-time shadow rendering.</li>
        </ul>
      </div>

      <div class="project-card">
        <h3><a href="https://www.figma.com/proto/9p84KSrzTdfuToZyJyjYlX/My-Scanner?node-id=165-7141&p=f&t=2jWoCvHcmG3MXPBM-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=165%3A7141" target="_blank">MyScanner</a></h3>
        <p><Figma | Dec 2024 – Jan 2025</p>
        <ul>
          <li>Prototyped a mobile document scanning app focused on UX accessibility and minimal interface friction.</li>
          <li>Redesigned workflows from existing apps, improving efficiency by 40%.</li>
        </ul>
      </div>

      <div class="project-card">
        <h3><a href="https://github.com/orestis-koutroumpas/Gesture-Rock-Paper-Scissors" target="_blank">Gesture Rock Paper Scissors</a></h3>
        <p>Python, OpenCV, MediaPipe | Dec 2024 – Jan 2025</p>
        <ul>
          <li>Created a real-time game using hand gesture recognition, integrating haptic and visual feedback.</li>
        </ul>
      </div>

      <div class="project-card">
        <h3><a href="https://github.com/orestis-koutroumpas/Mnist-Inpainting" target="_blank">GANs for Inpainting & Reconstruction</a></h3>
        <p>Python, NumPy, Matplotlib | Dec 2024</p>
        <ul>
          <li>Used a trained GAN to reconstruct MNIST digit '8' from random noise vectors and partial input masks.</li>
          <li>Optimized latent input via gradient descent to improve reconstruction fidelity.</li>
        </ul>
      </div>

      <div class="project-card">
        <h3><a href="https://github.com/orestis-koutroumpas/Mnist-Classifier" target="_blank">MNIST Classifier</a></h3>
        <p>Python, TensorFlow, NumPy | Nov 2024</p>
        <ul>
          <li>Neural network classifier for distinguishing between numbers 0 and 8 from the MNIST database.</li>
          <li>Achieved 99% accuracy.</li>
        </ul>
      </div>

      <div class="project-card">
        <h3><a href="https://github.com/orestis-koutroumpas/Sudoku-Solver" target="_blank">Sudoku Solver</a></h3>
        <p>Python, PuLP | Sep 2024</p>
        <ul>
          <li>Engineered a Sudoku solver using backtracking and linear programming techniques for arbitrary grid sizes.</li>
        </ul>
      </div>

      <div class="project-card">
        <h3><a href="https://github.com/orestis-koutroumpas/Foodies" target="_blank">Foodies</a></h3>
        <p>JavaScript, Node.js, Handlebars, CSS, SQLite | Apr 2024 – Jun 2024</p>
        <ul>
          <li>Built a full-stack food ordering platform simulating delivery, cart, and order management systems.</li>
          <li>Applied MVC architecture for modular design.</li>
        </ul>
      </div>

      <div class="project-card">
        <h3><a href="https://github.com/orestis-koutroumpas/Numerical-Solution-of-Schrodinger-Equation" target="_blank">Numerical Solution of Schrödinger Equation</a></h3>
        <p>Python, NumPy | Jan 2024</p>
        <ul>
          <li>Implemented a numerical solver for the 1D time-independent Schrödinger equation using finite-difference methods.</li>
        </ul>
      </div>

      <div class="project-card">
        <h3><a href="https://github.com/orestis-koutroumpas/ZOO-DBMS" target="_blank">Zoo DBMS</a></h3>
        <p>Python, SQLite | Dec 2023 – Jan 2024</p>
        <ul>
          <li>GUI-based database management system for zoo operations, built with Python and SQLite.</li>
        </ul>
      </div>

    </div>
    `;
    main.appendChild(projectsSection);

    // Skills Section
    const skillsSection = document.createElement('section');
    skillsSection.setAttribute('id', 'skills');
    skillsSection.innerHTML = `
      <h2>Skills & Competences</h2>
      <div class="skills-grid">

        <div class="skill-card">
          <h3>Programming & Technical</h3>
          <ul>
            <li><strong>Languages:</strong> Python, C/C++, Java, JavaScript, HTML/CSS, SQL (PostgreSQL, SQLite), NoSQL (MongoDB)</li>
            <li><strong>Frameworks & Libraries:</strong> NumPy, Pandas, Matplotlib, scikit-learn, PyTorch, TensorFlow, OpenCV, OpenGL</li>
            <li><strong>ML & Data Tools:</strong> WandB, ElevenLabs, data scraping (requests, gzip, pandas)</li>
            <li><strong>DevOps & Tools:</strong> Git, GitLab, Jira, VS Code, Visual Studio, Eclipse</li>
            <li><strong>Other:</strong> Figma, MATLAB, Autodesk AutoCAD</li>
            <li><strong>Networking:</strong> CCNA-level knowledge, routing/switching, network architecture</li>
          </ul>
        </div>

        <div class="skill-card">
          <h3>Engineering & Scientific Expertise</h3>
          <ul>
            <li>Advanced proficiency in mathematics (calculus, linear algebra, probability, and statistics) and physics (electromagnetism and quantum electronics).</li>
            <li>Solid foundation in electrical circuits, microelectronics, power systems, and integrated electronics.</li>
            <li>Comprehensive understanding of quantum computing principles and relevant algorithms.</li>
            <li>Strong knowledge of computer science fundamentals, including data structures, algorithms (DSA), and software engineering principles.</li>
          </ul>
        </div>

        <div class="skill-card">
          <h3>Languages</h3>
          <ul>
            <li>Greek: Native</li>
            <li>English: C2 Proficiency (Michigan Proficiency)</li>
          </ul>
        </div>

      </div>
    `;
    main.appendChild(skillsSection);

    // Volunteering Section
    const volunteeringSection = document.createElement('section');
    volunteeringSection.setAttribute('id', 'volunteering');
    volunteeringSection.innerHTML = `
      <h2>Volunteering & Extracurricular Activities</h2>
      <div class="volunteering-grid">

        <div class="volunteer-card">
          <h3>Startup Universe 2024</h3>
          <p>Virtual | Nov 2024</p>
          <ul>
            <li>Identified and recruited field experts to mentor Greek tech startups participating in the Startup Universe program.</li>
            <li>Maintained a structured database of recruited experts using Excel.</li>
          </ul>
        </div>

        <div class="volunteer-card">
          <h3>Startup Week Patras 2024</h3>
          <p>Patras, Greece | Oct 2024</p>
          <ul>
            <li>Supported event logistics, including setup, troubleshooting, and participant assistance.</li>
            <li>Facilitated networking sessions and communication between attendees, speakers, and mentors.</li>
          </ul>
        </div>

        <div class="volunteer-card">
            <h3>Soft Skills Academy 6 - Creativity</h3>
            <p>Patras, Greece | May 2022</p>
            <ul>
                <li>Participated in collaborative activities aimed at enhancing creativity, problem-solving, and teamwork skills by working in groups on practical exercises and challenges.</li>
            </ul>
        </div>

      </div>
    `;
    main.appendChild(volunteeringSection);

    // Append main to body
    document.body.appendChild(main);

    // Footer
    const footer = document.createElement('footer');
    footer.innerHTML = '<p>&copy; 2025 Orestis Koutroumpas</p>';
    document.body.appendChild(footer);

    function router() {
        const hash = window.location.hash || "#about";
        // Sections used in nav
        const sections = ['about', 'education', 'experience', 'projects', 'skills', 'volunteering', 'contact'];

        sections.forEach(id => {
            const section = document.getElementById(id);
            if ((hash === '#about' && (id === 'about' || id === 'contact')) || ('#' + id === hash)) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    // Run router on page load
    router();

    // Listen to hash change events
    window.addEventListener('hashchange', router);

});

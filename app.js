document.addEventListener("DOMContentLoaded", function() {

    // Create the main elements of the document
    document.documentElement.setAttribute('lang', 'en');
    document.head.innerHTML = `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Orestis Koutroumpas | Curriculum Vitae</title>
        <link rel="icon" href="icon.png" type="image/x-icon">
        <link rel="stylesheet" href="style.css">
    `;
    
    // Create header and navigation
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Orestis Koutroumpas';
    header.appendChild(h1);
    
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const navItems = [
        { href: '#about', text: 'About Me' },
        { href: '#education', text: 'Education' },
        { href: '#projects', text: 'Projects' },
        { href: '#experience', text: 'Experience' },
        { href: '#skills', text: 'Skills' },
        { href: '#volunteering', text: 'Volunteering' },
        { href: '#contact', text: 'Contact' }
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
    
    // About section
    const aboutSection = document.createElement('section');
    aboutSection.setAttribute('id', 'about');
    aboutSection.innerHTML = `
        <h2>About Me</h2>
        <p>I am an undergraduate student (expected graduation 2/2026) in Electrical and Computer Engineering with a strong foundation in mathematics, physics, and engineering principles. Passionate about contributing to cutting-edge research and innovation, particularly in fields like human-computer interaction (HCI), machine learning, and quantum computing. Skilled in software development, data analysis, and computational problem-solving, I am eager to explore practical applications of these advanced technologies. Currently seeking a challenging field of study experience that will further expand my knowledge and skill set in these dynamic areas. 
        </p> `
        ;
    document.body.appendChild(aboutSection);
    
    // Education section
    const educationSection = document.createElement('section');
    educationSection.setAttribute('id', 'education');
    educationSection.innerHTML = `
        <h2>Education</h2>
        <p><strong>Bachelor of Science in Electrical &amp Computer Engineering</strong> (September 2020 - Present)<br>
        University of Patras, Patra, Greece<br>
        Major: Computers (Software &amp Hardware)</p>
    `;
    document.body.appendChild(educationSection);
    
    // Projects section
    const projectsSection = document.createElement('section');
    projectsSection.setAttribute('id', 'projects');
    projectsSection.innerHTML = `
        <h2>Projects</h2>
        <h3>Foodies</h3>
        <p>Full-stack web application simulating the complete process of placing and managing delivery orders. Built with Handlebars, CSS, JavaScript, and Node.js. </p> 
        <br>
        <h3>Classic 8-ball pool </h3>
        <p>A 3D billiard game developed with C++ and OpenGL, featuring realistic physics simulation, dynamic lighting and shadow algorithms.</p>
        <br>
        <h3>Reinforcement Learning Optimal Policy</h3>
        <p>A numerical and data-driven approach for solving both the short-sighted and infinite future reward reinforcement learning problems.</p>
        <br>
        <h3>Generative Models for Image Inpainting & Image Reconstruction</h3>
        <p>A neural network-based approach for reconstructing  images from noisy and incomplete data, as well as for enhancing high-resolution images from low-resolution, noisy inputs using gradient descent techniques. Achieved high-fidelity image restoration with minimal input data, showcasing robust performance in both inpainting and super-resolution tasks.</p>
        <br>
        <h3>MNIST-Classifier</h3>
        <p>Neural network classifier for distinguishing between numbers 0 and 8 from the MNIST database using Python and TensorFlow. Achieved an accuracy of 99%.</p>
        <br>
        <h3>Numerical Solution of Schrödinger Equation</h3>
        <p>Computational program solving the one-dimensional time-independent Schrödinger equation using the finite-difference method, written in Python.</p>
        <br>
        <h3>Zoo DBMS</h3>
        <p>Graphical user interface-based database management system for zoo operations, including management of animals and staff, built with Python and SQLite.</p>
        <br>
        <h3>Gesture Rock Paper Scissors</h3>
        <p>Rock-paper-scissors game utilizing camera-based hand gesture recognition and providing real-time haptic and visual feedback, implemented in Python.</p>
        <br>
        <h3>Sudoku Solver</h3>
        <p>Program solving Sudoku puzzles of various sizes using linear programming principles and backtracking algorithms, developed in Python.</p>
        <br>
        <h3>MyScanner</h3>
        <p>Record scanning application, designed in Figma.</p>
    `;
    document.body.appendChild(projectsSection);
    
    // Experience section
    const experienceSection = document.createElement('section');
    experienceSection.setAttribute('id', 'experience');
    experienceSection.innerHTML = `
        <h2>Professional Experience</h2>
        <h3>IT Intern</h3>
        <h4>Cooperative Bank of Chania, Chania, Greece</h4>
        <p><em>July 2023 – August 2023</em></p>
        <ul>
            <li>Delivered first-level technical support to end-users, resolving hardware and software issues efficiently.</li>
            <li>Diagnosed and addressed system vulnerabilities through regular updates and patches.</li>
            <li>Managed user accounts and permissions to ensure data security and compliance with organizational policies.</li>
            <li>Enhanced productivity by maintaining and troubleshooting IT infrastructure.</li>
            <li>IT infrastructure monitoring and setup (Microsoft Office 365 , Teams, Printers, Network, security tools, routers, switches, software)</li>
        </ul>
    `;
    document.body.appendChild(experienceSection);
    
    // Skills section
    const skillsSection = document.createElement('section');
    skillsSection.setAttribute('id', 'skills');
    skillsSection.innerHTML = `
        <h2>Skills &amp Competences</h2>
        <h3>Engineering &amp Scientific Expertise</h3>
        <ul>
            <li>Strong foundation in mathematics (calculus, linear algebra, differential equations, probability, statistics) and physics (electromagnetism, quantum electronics).</li>
            <li>Possess advanced knowledge in electrical circuits, microelectronics, power systems, and integrated electronics.</li>
            <li>Proficient in problem-solving and analytical techniques for engineering challenges.</li>
            <li>Solid understanding of quantum computing concepts and algorithms.</li>
        </ul>
        <h3>Programming &amp Development</h3>
        <ul>
            <li?Languages: Python, JavaScript, C, C++, Java</li>
            <li>Web Development: HTML, CSS, JavaScript, Node.js, Express.js</li>
            <li>Version Control: Git, GitHub</li>
        </ul>
        <h3>Technical Expertise</h3>
        <ul>
            <li>Machine Learning: Strong understanding of algorithms, model building, and deployment</li>
            <li>Graphics Programming: C++ and OpenGL for advanced visualizations</li>
            <li>Database Systems: Proficient in SQL and NoSQL (MongoDB)</li>
            <li>Computer Networks: TCP/IP protocols, configuration, and network architecture</li>
            <li>Operating Systems: Windows, Unix/Linux</li>
            <li>Computer &amp Network Security: Knowledge of network security principles, threat mitigation, and secure communication protocols</li>
        </ul>
        <h3>Design &amp Engineering Tools</h3>
        <ul>
            <li>UX/UI Design: Wireframing, prototyping, user research, and evaluation techniques for creating user-centered solutions.</li>
            <li>Simulation &amp CAD: MATLAB, Autodesk AutoCAD</li>
        </ul>
        <h3>Languages</h3>
        <ul>
            <li>Greek: Native</li>
            <li>English: C2 Proficiency (Michigan Proficiency)</li>
        </ul>
    `;
    document.body.appendChild(skillsSection);
    
    // Volunteering section
    const volunteeringSection = document.createElement('section');
    volunteeringSection.setAttribute('id', 'volunteering');
    volunteeringSection.innerHTML = `
        <h2>Volunteering &amp Extracurricular Activities</h2>
        <h3><i>Startup Universe 2024</i> | Virtual | November 2024</h3>
        <ul>
            <li>Identified and recruited field experts to mentor Greek tech startups participating in the Startup Universe program.</li>
            <li>Maintained a structured database of recruited experts using Excel, ensuring accurate tracking and follow-up.</li>
        </ul>
        <h3><i>Startup Week Patras 2024</i> | Patras, Greece | October 2024</h3>
        <ul>
            <li>Supported event logistics, including setup, troubleshooting, and participant assistance.</li>
            <li>Facilitated networking sessions and communication between attendees, speakers, and mentors.</li>
        </ul>
        <h3><i>Soft Skills Academy 6</i> - Creativity | Patra | May 2022</h3>
    `;
    document.body.appendChild(volunteeringSection);
    
    // Contact section
    const contactSection = document.createElement('section');
    contactSection.setAttribute('id', 'contact');
    contactSection.innerHTML = `
        <h2>Contact</h2>
        <p>Email: <a href="mailto:o.koutroubas@gmail.com">o.koutroubas@gmail.com</a></p>
        <p>Phone: +30 6971964537</p>
        <p>GitHub: <a href="https://github.com/orestis-koutroumpas">GitHub</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/orestis-koutroumpas-7270b9248">LinkedIn</a></p>
    `;
    document.body.appendChild(contactSection);
    
    // Footer
    const footer = document.createElement('footer');
    footer.innerHTML = '<p>&copy; 2024 Orestis Koutroumpas</p>';
    document.body.appendChild(footer);

});

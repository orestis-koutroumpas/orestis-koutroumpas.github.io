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
    <p>Driven undergraduate student in Electrical and Computer Engineering with a strong foundation in mathematics, physics, and engineering principles. Passionate about contributing to cutting-edge research and innovation, particularly in fields like machine learning, human-computer interaction (HCI), and high-performance computing systems. Skilled in software development, data analysis, and computational problem-solving, with a keen interest in exploring practical applications of advanced technologies.</p>
`;
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
        <li>Strong foundation in mathematics (calculus, linear algebra, probability) and physics (electromagnetism, quantum physics).</li>
        <li>Proficient in problem-solving and analytical techniques for engineering challenges.</li>
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
        <li>Computer Networks: TCP/IP protocols and configuration</li>
        <li>Operating Systems: Windows, Unix/Linux</li>
    </ul>
    <h3>Design & Engineering Tools</h3>
    <ul>
        <li>UX/UI Design: Wireframing, prototyping, and design tools for user-centered solutions</li>
        <li>Simulation & CAD: MATLAB, Autodesk AutoCAD</li>
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

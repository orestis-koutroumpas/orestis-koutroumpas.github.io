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
    <p>As an undergraduate student in Electrical and Computer Engineering, I am seeking opportunities within my field of study, with a particular interest in machine learning and human-computer interaction (HCI). I am drawn to these areas because of their transformative potential in reshaping industries and redefining how humans interact with technology. Machine learning’s ability to drive intelligent systems, combined with human-computer interaction’s focus on optimizing user experience, offers exciting opportunities to innovate and push the boundaries of what’s possible in engineering. I am eager to explore their practical applications, leveraging my background in electrical and computer engineering principles and software development to create meaningful solutions to real-world challenges. Engaging in projects that integrate machine learning and HCI will allow me to expand my expertise and contribute to these rapidly evolving fields.</p>
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
    <h3>IT Department, Cooperative Bank of Chania, Chania, Greece</h3>
    <p><em>July 2023 – August 2023</em></p>
    <ul>
        <li>Provided first-level support to end-users digitally and in-person.</li>
        <li>Diagnosed and resolved hardware and software issues.</li>
        <li>Managed user accounts and permissions, ensuring data security and compliance.</li>
        <li>Conducted system updates and patches, minimizing system vulnerabilities.</li>
    </ul>
`;
document.body.appendChild(experienceSection);

// Skills section
const skillsSection = document.createElement('section');
skillsSection.setAttribute('id', 'skills');
skillsSection.innerHTML = `
    <h2>Skills &amp Competences</h2>
    <h3>Languages</h3>
    <ul>
        <li>Greek: Native</li>
        <li>English: C2 (Michigan Proficiency)</li>
    </ul>
    <h3>IT Skills</h3>
    <ul>
        <li>Database Systems: Advanced knowledge of SQL and NoSQL (MongoDB)</li>
        <li>Machine Learning: Strong command of machine learning concepts and techniques</li>
        <li>Computer Networks: Familiarity with computer networks (TCP/IP)</li>
        <li>Operating Systems: Proficient in Windows, Unix/Linux environments</li>
        <li>Programming Languages: Python, JavaScript, HTML, C, Java, C++</li>
        <li>Web Development: Strong foundation in HTML, CSS, JavaScript, Node.js, Express.js</li>
        <li>Version Control: Git, GitHub</li>
        <li>UX/UI Design: Knowledge of UX principles, wireframing, and design tools for creating user-centered designs</li>
        <li>Graphics Programming: Experience with C++ and OpenGL for graphics development</li>
        <li>Systems: MATLAB, Autodesk AutoCAD and other design and engineering software</li>
        <li>Productivity Tools: Microsoft Office Suite (Word, Excel, PowerPoint)</li>
    </ul>
`;
document.body.appendChild(skillsSection);

// Volunteering section
const volunteeringSection = document.createElement('section');
volunteeringSection.setAttribute('id', 'volunteering');
volunteeringSection.innerHTML = `
    <h2>Volunteering</h2>
    <p><i>Startup Week Patras 2024</i> | Patras, Greece | October 2024<br>
    <ul>
        <li>Assisted participants, speakers, and mentors with logistics and troubleshooting</li>
        <li>Supported event setup, organization, and networking sessions</li>
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

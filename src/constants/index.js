import certificate1 from "../assets/certificates/certificate1.png";
import certificate2 from "../assets/certificates/certificate2.png";
import certificate3 from "../assets/certificates/certificate3.png";
import certificate4 from "../assets/certificates/certificate4.png";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";
import project8 from "../assets/projects/project-8.png";
import project9 from "../assets/projects/project-9.png";
import project10 from "../assets/projects/project-10.png";
import featured1 from "../assets/featured/featured1.png";


export const HERO_CONTENT = `
Navigating the complexities of modern web development goes beyond technical prowess—it calls for vision, innovation, and a dedication to excellence. With a strategic approach to coding, I thrive on simplifying intricate challenges into seamless solutions. Let's team up to create a future where user-friendly design and smart technology integration push the boundaries of digital interaction.`;

export const ABOUT_TEXT = `
I'm a passionate full stack developer who loves building robust and scalable web applications. Over the past five years, I've gained a lot of experience in both front-end and back-end technologies.
On the front-end side, I'm highly skilled in HTML, CSS, JavaScript, React, Next.js, Redux, Vue, AJAX, jQuery, Bootstrap, Tailwind CSS, SCSS, LESS, & Responsive Web Design.
For the back-end side, I'm also xcelled in PHP, Laravel, CodeIgniter, Symfony, MongoDB, Express.js,
Experienced in Vercel, Heroku, Docker, AWS, Netlify, UX, WordPress, Phpmyadmin, Git, GitHub, Figma, data modeling & XAMPP.
I’ve also been enhancing my skills with MongoDB, Express.js, React.js and Node.js. 
`;

export const ABOUT_TEXT2 = `
Beyond the technical skills, I thrive in collaborative environments. I believe that great ideas come from teamwork and open communication. I'm always eager to learn and take on new challenges, whether it's diving into a new technology or tackling a complex problem.
In my free time, I like to stay updated with the latest industry trends and contribute to open-source projects. I find it rewarding to give back to the community and learn from other developers.
`;

export const CERTIFICATES = [
  {
    title: "Proficient in Advanced PHP",
    image: certificate1,
    description:
      "Awarded 'Proficient in Advanced PHP' certification with a perfect score of 10/10, following successful completion of 8 hours straight of intensive coding session. Skilled in PHP, OOP, ORM, CodeIgniter, AJAX, and passed the exam.",
    technologies: ["VILLAGE 88", "APRIL 2024"],
  },
  {
    title: "IT Specialist in Python",
    image: certificate2,
    description:
      "Attained 'Python Mastery' certification with a score of 80/100, after completing an intensive 2-hours of exam, showcasing expertise in advanced Python programming concepts including data structures, algorithms, and object-oriented principles.",
    technologies: ["CERTIPORT", "NOVEMBER 2023"],
  },
  {
    title: "IT Specialist in HTML & CSS",
    image: certificate3,
    description:
      "Obtained Certiport IT Specialist certification in HTML and CSS, showcasing mastery in front-end web development. Demonstrated expertise in HTML and CSS concepts through successful completion of the exam.",
    technologies: ["CERTIPORT", "DECEMBER 2023"], 
  },
  {
    title: "Creative Web Design II",
    image: certificate4,
    description:
      "I’ve attained expertise in crafting dynamic websites with HTML and CSS, having obtained skills in integrating images, tables, and multimedia to enhance user experience and interactivity.",
    technologies: ["TESDA", "JULY 2019"], 
  },
];

export const EXPERIENCES = [
  {
    year: "February 2024 - May 2024",
    role: "Full Stack Developer",
    company: "457 Avenue Inc. / Village 88",
    description: `During my training, I completed over 200+ assignments, two exams, and one capstone project. I demonstrated exceptional time management by delivering an e-commerce capstone project within a challenging seven-day timeframe. I developed proficiency in crafting personalized libraries and MVC frameworks independently, showcasing my adeptness in designing scalable solutions. Additionally, I made substantial contributions to team unity and code excellence by conducting thorough code assessments and offering valuable feedback, nurturing a culture of ongoing improvement.`,
    technologies: ["HTML","CSS","Javascript","PHP","SQL","CodeIgniter","Python", "TypeScript"]
  },
];

export const EDUCATION = [
  {
    year: "June 2020 - June 2024",
    role: "Bachelor of Science in Information Technology",
    company: "University of the East Manila",
    description: `Served as one of the lead programmer and project management for the Online Billing and Reservation System for Mula ng Apung Juan Resort Capstone Project`,
    technologies: []
  },
];

export const PROJECTS = [
  {
    title: "KobeMatrix Library Management System",
    image: project1,
    description:
      "Develop a comprehensive Library platform using HTML, CSS, and JavaScript for the front-end, incorporating Tailwind CSS for modern, responsive design. The back-end is powered by PHP with Laravel, ensuring robust functionality and security. Utilize Vite for a fast and efficient development workflow. The system supports secure transactions and efficient database management using SQL, providing a seamless and reliable experience for users.",
    technologies: ["HTML", "CSS", "Tailwind", "JavaScript", "PHP", "Laravel", "Vite", "MySQL"],
    github: 'https://github.com/KobeDime/library_project',
    youtube: 'https://youtu.be/_fan_Rjha5M'
  },
  {
    title: "Kobe Haven Hotel Management System",
    image: project2,
    description:
      "Developed a feature-rich Hotel Management System with a modern user interface utilizing HTML, CSS, and JavaScript. Enhanced the site with dynamic functionalities through AJAX and Bootstrap for responsive design. Managed backend processes using PHP and MySQL, ensuring efficient booking and payment management capabilities.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "AJAX", "MySQL"],
    github: 'https://github.com/KobeDime/hotel_project',
    youtube: 'https://youtu.be/Rut12gkcbuw'
  },
  {
    title: "Kobe Voyage Nexus Travel Management System",
    image: project3,
    description:
      "Craft a comprehensive Travel Management System with a responsive interface using HTML, CSS, Bootstrap and Javascript. Handle client-server communication with PHP, JQuery and MySQL.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "JQuery", "MySQL"],
    github: 'https://github.com/KobeDime/travel_project',
    youtube: 'https://youtu.be/Xg9uQgZGS1M'
  },
  {
    title: "KobEstate Real Estate Management System",
    image: project4,
    description:
      "Streamline property management with KobEstate. Designed with HTML, CSS, and Bootstrap for a modern look, and enhanced with JavaScript and jQuery for dynamic features. PHP and MySQL provide secure, efficient backend support. Ideal for managing listings and transactions with ease.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "JQuery", "PHP", "MySQL"],
    github: 'https://github.com/KobeDime/real_estate_project',
    youtube: 'https://youtu.be/_wECCvCYxhw'
  },
  {
    title: "Kobetrion Chat Application System",
    image: project5,
    description:
      "Developing an innovative chat application with a sleek interface using HTML and SCSS for styling. Incorporating dynamic interactions with JavaScript, and robust backend support with PHP and MySQL for efficient data management and real-time messaging capabilities.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: 'https://github.com/KobeDime/chatapp_project',
    youtube: 'https://youtu.be/hh3tcaiUAFQ'
  },
  {
    title: "Kobe Ellect Voting System",
    image: project6,
    description:
      "Kobe Ellect simplifies and secures elections with a sleek, responsive interface built using HTML, CSS, and Bootstrap. Enhanced with JavaScript for interactivity and powered by PHP and MySQL for robust backend management, this system ensures accurate and transparent voting for any scale of elections.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    github: 'https://github.com/KobeDime/voting_project',
    youtube: 'https://youtu.be/eRf2f7NtV6M'
  },
  {
    title: "Kobe Stay Hub Hostel Management System",
    image: project7,
    description:
      "Elevate hostel management with Kobe Stay Hub. Built with HTML, CSS, SCSS, and Bootstrap for a polished, responsive interface, and powered by JavaScript for dynamic functionality. Gulp streamlines the workflow, while PHP and MySQL handle secure data management. Perfect for efficient hostel operations and seamless guest experiences.",
    technologies: ["HTML", "CSS", "SCSS", "Bootstrap", "JavaScript", "Gulp", "PHP", "MySQL"],
    github: 'https://github.com/KobeDime/hostel_project',
    googleDrive: 'https://drive.google.com/file/d/13HkFn0ai8qNI3RwgGKJ6tasJEPPbM2hG/view?usp=sharing'
  },
  {
    title: "Kobe Pinoy Plates Online Delivery Management System",
    image: project8,
    description:
      "Revolutionize food delivery with Kobe Pinoy Plates. Featuring a sleek, responsive design with HTML, CSS, SCSS, and Bootstrap, this system offers a streamlined experience for managing orders. JavaScript adds interactivity, while PHP and MySQL ensure secure and efficient operations. Perfect for restaurants and delivery services aiming for reliability and ease.",
    technologies: ["HTML", "CSS", "SCSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    github: 'https://github.com/KobeDime/food_online_project',
    youtube: 'https://youtu.be/eFCEvRxsJ70'
  },
  {
    title: "Kobe Spend Wise Crud Expense System",
    image: project9,
    description:
      "Manage expenses effortlessly with Kobe Spend Wise. Featuring a clean interface with HTML, CSS, and JavaScript, this system offers robust functionality with PHP and MySQL for secure and efficient data handling. Perfect for tracking and organizing your financials with ease.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: 'https://github.com/KobeDime/crud_expense_project',
    youtube: 'https://youtu.be/W58oQVVdz-8'
  },
  {
    title: "Kobe Safari Zoo Management System",
    image: project10,
    description:
      "Engineered a robust zoo management system using a dynamic front-end crafted in HTML, CSS, SCSS and Javascript for efficient state management. Orchestrated backend operations with PHP and MySQL, streamlining booking and property management functionalities, and utilized XML for structured data handling and integration.",
    technologies: ["HTML", "CSS", "SCSS", "JavaScript", "PHP", "MySQL", "XML"],
    github: 'https://github.com/KobeDime/zoo_project',
    youtube: 'https://youtu.be/nNR2rYu5hRc'
  },
];

export const FEATURED = [
  {
    title: "Kobe Essence: Laravel-Powered E-commerce Management",
    image: featured1, 
    description:
      "Kobe Essence is a streamlined e-commerce management system built with Laravel, designed for efficient control of online stores. Leveraging technologies like HTML, CSS, Tailwind, JavaScript, PHP, jQuery, MySQL, and Vite, it offers robust features for inventory management, customer engagement, and secure payment processing. With customizable product listings and real-time analytics, Kobe Essence simplifies e-commerce operations, helping businesses focus on growth and customer satisfaction.",
    technologies: ["HTML", "CSS", "Tailwind", "JavaScript", "PHP", "Laravel", "AJAX", "MySQL", "Vite",],
    github: 'https://github.com/KobeDime/ecommerce_project',
    youtube: 'https://www.youtube.com/@ohitskobe'
  },
]

export const CONTACT = {
  whyme: "Why You Should Hire Me?",
  address: "555 Tandang Sora Ave, Quezon City, Philippines",
  phoneNo: "+63 967 921 7171",
  email: "kobe24.dime@gmail.com",
};


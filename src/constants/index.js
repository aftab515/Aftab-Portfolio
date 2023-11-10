import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Vice President",
    icon: web,
  },
  {
    title: "Director & IT Operations",
    icon: mobile,
  },
  {
    title: "Bootcamp Intern",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Vise President",
    company_name: "VU IT Club Campus Base",
    icon: starbucks,
    iconBg: "#383E56",
    date: "December 2019 - October 2021",
    points: [
      `IT Team Vice President: Mastermind IT operations, guiding 150 volunteers, and delivered semesterly IT performance reports, boosting efficiency by 76% and enhancing team productivity.`,
      `Strategic Tech Planner: Aligned IT objectives with organizational goals, leading a 120-member team to optimize infrastructure. Result: 68% increase in system reliability.`,
      `Innovative Solutions Architect: Directed a 130-member team to implement cutting-edge technologies, reducing project timelines by 40% and enhancing system performance.`,      
      `Cybersecurity Advocate: Led a team of 140 specialists to fortify digital defenses, achieving a 90% reduction in security incidents and ensuring data integrity and regulatory compliance.`
      ],
  },
  {
    title: "Director & IT Operations",
    company_name: "VU Campus Base Trainings & Workshops",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2020 - October 2021",
    points: [
      `Educational Empowerment: As IT Team Lead, I managed IT operations and organized impactful training & workshops, enhancing FYP success rates by 93% and boosting student's marketability.`,
      `Strategic Learning Initiatives: Spearheaded educational programs, elevating student success by 87% through targeted workshops and mentorship, enhancing skill acquisition and employability.`,
      `Innovative Curriculum Integration: Implemented cutting-edge teaching methodologies, resulting in a 75% improvement in student engagement and academic performance, preparing them for industry demands.`,
      `Career Development Advocate: Guided students through personalized career paths, achieving a 95% internship placement rate and fostering strong industry connections, ensuring students enter the job market with confidence.`,
    ],
  },
  {
    title: "Bootcamp Intern",
    company_name: "Gamica Cloud",
    icon: shopify,
    iconBg: "#383E56",
    date: "September 2020 - December 2020",
    points: [
      `Led an "IT Bootcamp Efficiency Analysis," saving 41% in resource use.`,
      `Evaluated 10 Bootcamp modules, boosting student engagement by 59%.`,
      `Spearheaded three Improvement Initiatives, increasing curriculum relevance by 64%, improving technical support efficiency by
      78%, and enhancing program delivery by 86%.`,
      `Presented the "IT Bootcamp Learning Enhancement Model," projecting an 89% boost in student success rates.`,
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Netixsol Pvt Ltd.",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "January 2021 - November 2022",
    points: [
    `Utilized web technologies, UI design principles, and coding proficiency in HTML, CSS, and JavaScript to create captivating and responsive UIs.`,
    `Collaborated seamlessly across teams, contributing to a 67% boost in project efficiency and consistently delivering top-notch frontends.`,
    `Crafted user-centric interfaces with a focus on cross-browser compatibility and integrated React-driven interactive features.`,
    `Optimized performance and collaborated effectively, resulting in an impressive 80% increase in user engagement and a significant 77% reduction in bug occurrences.`,
    `Maintained version control with Git, ensuring the delivery of modern and functional web applications.`,
  ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Aftab proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a frontend developer who truly cares about their clients' success like Aftab does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Aftab optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Hoo Bank UI/UX",
    description:
      "Hoo Bank is a cutting-edge UI/UX project designed for seamless financial management. With a clean and modern interface, it offers a visually appealing and user-friendly experience. The application employs advanced design principles, including a minimalist layout and thoughtful color scheme, setting it apart as a prime example of modern web development. Developers can gain valuable insights into web design and development practices by exploring this project.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/aftab515/Hoo-Modren-Bank-UI-",
  },
  {
    name: "Gerlcht Restaurant UI/UX",
    description:
      "Gericht_Restaurant is a cutting-edge web application that showcases modern web development. With a clean and intuitive interface, it provides users with an immersive dining experience. Featuring advanced design principles, such as a minimalist layout and thoughtful color scheme, the project is a prime example of contemporary web development. It includes efficient menu search functionality and personalized order options, making it an exceptional resource for developers exploring real-world applications.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/aftab515/Projects-For-Portfolio/tree/master/gericht_restaurant",
  },
  {
    name: "Metaverses",
    description:
      "The GPT-3 UI/UX project exemplifies modern web development using React components for efficiency. It showcases a well-structured file system, adhering to best practices for easy maintenance. The project focuses on fundamental CSS properties, employing the BEM model for consistency. Pleasant animations, gradients, and responsive design enhance the user experience. Overall, GPT-3 is a prime example of modern web development, making it valuable for improving web development skills.",
    tags: [
      {
        name: "Web-Vitals",
        color: "blue-text-gradient",
      },
      {
        name: "API Integration",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/aftab515/Projects-For-Portfolio/tree/master/gpt3_alpha",
  },
];

export { services, technologies, experiences, testimonials, projects };
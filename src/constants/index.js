import contact from "../assets/icons/contact.svg";
import css from "../assets/icons/css.svg";
import electric from "../assets/icons/electric.jpg";
import express from "../assets/icons/express.svg";
import git from "../assets/icons/git.svg";
import github from "../assets/icons/github.svg";
import html from "../assets/icons/html.svg";
import javascript from "../assets/icons/javascript.svg";
import linkedin from "../assets/icons/linkedin.svg";
import nextjs from "../assets/icons/nextjs.svg";
import nodejs from "../assets/icons/nodejs.svg";
import postgres from "../assets/icons/postgres.svg";
import python from "../assets/icons/python.svg";
import react from "../assets/icons/react.svg";
import redux from "../assets/icons/redux.svg";
import sf from "../assets/icons/sf.png";
import tailwindcss from "../assets/icons/tailwindcss.svg";
import typescript from "../assets/icons/typescript.svg";
import tza from "../assets/icons/tza.jpg";
import shoe from "../assets/icons/shoe.svg";
import youtube from "../assets/icons/youtube.svg";
import sanfran from "../assets/icons/sanfran.svg";
import snake from "../assets/icons/snake.png";
import java from "../assets/icons/java.png";


export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: postgres,
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    }
];

export const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Code for San Francisco",
        icon: sf,
        iconBg: "#accbe1",
        date: "October 2023 - Present",
        points: [
            "Volunteering to build full stack web application to help locals in SF find ways to support their local high schools.",
            "Developing a full stack web application using Typescript, React, Next.js, TailwindCSS, and PostgreSQL.",
            "Creating a REST API using PostgreSQL to store data from learning management systems.",
            "Collaborating with a cross-functional team of 10+ using Kanban, GitHub and pair programming.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Tow Zone Alerts",
        icon: tza,
        iconBg: "#fbc3bc",
        date: "December 2023 - Present",
        points: [
            "Volunteering to improve a full stack web application that prevents Boston residents from getting towed.",
            "Building upon current code base using Next.js, Typescript, React, Tailwind and Python/FastAPI for backend.",
            "Collaborating with front-end engineering team to create a more user-friendly website using Jira to distribute tasks",
            "Updating backend Python code and writing unit tests to ensure that database is scalable and secure.",
        ],
    },
    {
        title: "Front End Developer Intern",
        company_name: "Electric Potential",
        icon: electric,
        iconBg: "#b7e4c7",
        date: "January 2024 - Present",
        points: [
            "Leading the implementation of interactive and dynamic elements to enhance the overall interactivity and engagement of the user interface.",
            "Working closely with designers to ideate, suggest, and lead the integration of interactive components and motion design into static designs.",
            "Conducting thorough testing to ensure the functionality and performance of the developed solutions, addressing any issues and optimizing for an exceptional user experience.",
            "Collaborating with key stakeholders to understand business requirements and ensure that the developed solutions meet both user needs and organizational goals.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/emily020kim',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/emily-kim02/',
    }
];

export const projects = [
    {
        iconUrl: shoe,
        theme: 'btn-back-red',
        name: 'Krew',
        description: 'Developed a web application that lists and sells shoes along with an admin site to manage your store.',
        link: 'https://github.com/emily020kim/ecommerce-store',
    },
    {
        iconUrl: sanfran,
        theme: 'btn-back-green',
        name: 'Support SFUSD',
        description: 'Open-source project creating a website to help SF locals find ways to support local schools.',
        link: 'https://github.com/sfbrigade/support-sfusd',
    },
    {
        iconUrl: youtube,
        theme: 'btn-back-blue',
        name: 'WebTube',
        description: 'Created a clone web application of YouTube.',
        link: 'https://github.com/emily020kim/yt-clone',
    },
    {
        iconUrl: snake,
        theme: 'btn-back-red',
        name: 'Snake Game',
        description: 'Snake Game created with Java.',
        link: 'https://github.com/emily020kim/snakeGame',
    },
];
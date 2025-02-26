import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";
import netflixproject from "../assets/Netflixpic.png";
import hangmanGame from "../assets/hangman.png";
import project3 from "../assets/project3.jpeg";


export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#aboutMe" },
  { label: "Skills", href: "#skills" },
  { label: "Home", href: "#home" },
  // { label: "Experience", href: "#experience" },
  { label: "Get in Touch", href: "#contact" },
];

export const HERO_CONTENT = `I am a highly motivated developer with a strong focus on creating robust and scalable applications. With proficiency in front-end technologies like Javascript, Tailwind CSS, React, Git. I am eager to further enhance my skills while delivering innovative solutions that drive business growth and provide exceptional user experiences.`;

export const ABOUT_TEXT = `I am a passionate developer with a strong focus on creating efficient, scalable, and user-friendly web applications. Skilled in a range of technologies including React, Node.js and MongoDB, I am building a career driven by a passion for solving complex problems and delivering high-quality solutions. With a deep commitment to continuous learning and adapting to new challenges, I thrive in collaborative environments where innovation and precision are paramount. Outside of development, I actively engage with the tech community, exploring new technologies.`;

export const EXPERIENCES = [];

export const PROJECTS = [
  {
    id: 1,
    name: "E-commerce website",
    description: "",
    image: project1,
    githubLink: "https://github.com/Thesonofmann/e-commerce"
  },
  {
    id: 2,
    name: "Personal Portfolio",
    description: "A personal portfolio website built using React and Tailwind CSS to showcase my skills, experiences, projects and contact information",
    image: project2,
    githubLink: "https://github.com/Thesonofmann/portfolio"
  },
  {
    id: 3,
    name: "HANGMAN GAME(Word Puzzle)",
    description: "To run this game you must have java installed on your device.  Guess the word correctly and win, 5 wrong trials and it's game over. Goodluck!",
    image: hangmanGame,
    githubLink: "https://github.com/Thesonofmann/HANGMAN-GAME"
  },
  {
    id: 4,
    name: "100 days of Java",
    description: "A personal challenge to build my skills and knowledge about the java programming language everyday for 100 days. This repo contains a few java project like a calender, to do list and a hangman game to list a few",
    image: project3,
    githubLink: "https://github.com/Thesonofmann/100-days-of-java"
  },
  
  {
    id: 5,
    name: "NETFLIX CLONE APP",
    description: "A clone of the netflix app, responsive on all web and mobile devices(android and iOS)",
    image: netflixproject,
    githubLink: "https://github.com/Thesonofmann/netflix-clone"
  },
  // {
  //   id: 6,
  //   name: "MiniBlockchain",
  //   description: "A project where I implemented the decentralization of the blockchain using javascript",
  //   image: ,
  //   githubLink: "https://github.com/Thesonofmann/javascript-miniblockchain"
  // }
  


];

export const CONTACT = {
  email: "jerryashh@gmail.com",
  phoneNo: "+2348101460815",
  linkedin: "https://www.linkedin.com/in/ashogbon-jeremiah/",
  github: "https://github.com/Thesonofmann",
  instagram: "",
  X: ""

};


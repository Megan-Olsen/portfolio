import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Megan Olsen | Full Stack Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'My Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Megan Olsen',
  subtitle: `I'm a Full Stack Developer`,
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne: 'If I am not at the computer coding away, you could possibly find me at the game store, or the library, the bookstore, playing games, reading, sewing, cooking, or hiking. There is more, but in short, I like learning new things and keeping my life full.',
  paragraphTwo: "Growing up helping out on the family sheep ranch, I learned how to put in a full day's work and still find time doing the things I love. Most of my evenings are filled with reading, strategic board games, or cooking and baking for fun.",
  paragraphThree: 'Coding has given me a chance to do something I love for a living. Strategy and puzzles have always been a big part of my life, and taking that into my work is a fun experience. Creating things from scratch, fixing bugs, and learning new things is where my heart is. I am excited that coding fulfills my need for learning and my hope for a brighter future. My Technologies: JavaScript | HTML | CSS | SASS | Express | Node.js | React | Redux',
  resume: 'https://docs.google.com/document/d/1N10gBw2VPyrsi_OiE_raDieSDVyV0ourLVXtRoWnvrs/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Gloomhaven Codex',
    info: 'My very first personal project while in class at Devmountain. It is a scenario tracker for the boardgame Gloomhaven. It is currently a work in progress, but it will be updated as I work on it.',
    info2: 'If you would like to test it out: test2@test.com, pass2    and   test1@test.com, pass1  should work for logging in to test it out.',
    url: 'https://gloomhavencodex.com',
    repo: 'https://github.com/Megan-Olsen/personal-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'getaway.jpg',
    title: 'Get Away',
    info: 'Group Project while in Devmountain. Worked with 3 other developers to create a great project',
    info2: 'If you would like to reach out to any of my team from this project, their information is on the About Us page. ',
    url: 'https://getaway.dev',
    repo: 'https://github.com/GetAway-DM/GetAway', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Feel free to reach out!',
  btn: 'Email Me',
  email: 'megan.olsen.dev@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/megan-olsen-027ab8132/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Megan-Olsen',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

import portfolio from "../../assets/project-img/portfolio.png";
import cardgame from "../../assets/project-img/cardgame.png";
import citas from "../../assets/project-img/citas.png";

const dataprojects = [
  // {
  //   title: "GOT houses",
  //   desc: "",
  //   img: portfolio,
  //   repo: "",
  //   url: "",
  //   stack: ["ReactJS", "Redux", "CSS Modules", "React-Hooks", "React Router"],
  // },
  // {
  //   title: "Movies App",
  //   desc: "",
  //   img: portfolio,
  //   repo: "",
  //   url: "",
  //   stack: ["ReactJS", "Redux", "CSS Modules", "React-Hooks", "React Router"],
  // },
  {
    title: "Patient Manager",
    desc: "This web app was made using ReactJS, on it you can add appointments with date, hour, symptoms, etc. The appointments are saved in the local storage, so you can't lose them.",
    img: citas,
    repo: "https://github.com/kano96/patient-manager",
    url: "https://appointments-manager-96.netlify.app/",
    stack: ["ReactJS", "CSS Modules", "React-Hooks"],
  },
  {
    title: "My Portfolio",
    desc: "This portfolio was made using react, it shows my projects, skills, ways to contact me and a form to send me an e-mail. It's made using only functional components",
    img: portfolio,
    repo: "https://github.com/kano96/portfolio",
    url: "#top",
    stack: ["ReactJS", "Semantic UI", "CSS Modules"],
  },
  {
    title: "Memory Card Game",
    desc: "",
    img: cardgame,
    repo: "https://github.com/kano96/cardgame",
    url: "",
    stack: ["ReactJS", "React Hooks", "CSS Modules  "],
  },
  //   { title: "", desc: "", img: "", repo: "", url: "", stack: [] },
  //   { title: "", desc: "", img: "", repo: "", url: "", stack: [] },
];
export default dataprojects;

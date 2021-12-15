import portfolio from "../../assets/project-img/portfolio.png";
import cardgame from "../../assets/project-img/cardgame.png";
import citas from "../../assets/project-img/citas.png";
import recipes from "../../assets/project-img/recipes.png";
import weather from "../../assets/project-img/weatherapp.png";
import movies from "../../assets/project-img/movies.png";
import shop from "../../assets/project-img/shopping-cart.png";
const dataprojects = [
  // {
  //   title: "GOT houses",
  //   desc: "",
  //   img: portfolio,
  //   repo: "",
  //   url: "",
  //   stack: ["ReactJS", "Redux", "CSS Modules", "React-Hooks", "React Router"],
  // },
  //
  {
    title: "Food app",
    desc: "On this app I bring the info from Spoonacular API to my backend and I create a DB on PostgreSQL in order to store recipes created on the frontend. On the frontend you can filter and sort the recipes",
    img: recipes,
    repo: "https://github.com/kano96/foodapp",
    url: "",
    stack: [
      "ReactJS",
      "Redux",
      "NodeJS",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "Jest",
    ],
  },
  {
    title: "Weather app",
    desc: "On this app, I bring the info from openweather API. You can search a city and the app will show you the weather in that city. You can also select the city card in order to see more details",
    img: weather,
    repo: "https://github.com/kano96/weather-app",
    url: "https://weather-appkt.netlify.app/",
    stack: ["ReactJS", "CSS Modules", "React-Hooks"],
  },
  {
    title: "Shopping cart",
    desc: "This is a shopping cart where you can add/remove items and see the total amount of money you have to pay, it uses Material UI and Styled Components. ",
    img: shop,
    repo: "https://github.com/kano96/shopping-cart",
    url: "https://shopping-cart-react-appk.netlify.app/",
    stack: ["ReactJS", "TypeScript", "React-Hooks"],
  },
  {
    title: "Movies App",
    desc: "On this app, I bring info from iMDB API. You can search a film and it will show all the results that include your search. You can select the film card in order to see more details and add the movie to favorites",
    img: movies,
    repo: "https://github.com/kano96/moviesapp",
    url: "",
    stack: ["ReactJS", "Redux", "React-Hooks", "React Router"],
  },
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
    desc: "On this app I used React Hooks in order to save the current open cards in a state and to save the cards that matched in other state, so when the length of the cards array is equal to the length of the matched cards you win",
    img: cardgame,
    repo: "https://github.com/kano96/cardgame",
    url: "",
    stack: ["ReactJS", "React Hooks", "CSS Modules  "],
  },
  //   { title: "", desc: "", img: "", repo: "", url: "", stack: [] },
  //   { title: "", desc: "", img: "", repo: "", url: "", stack: [] },
];
export default dataprojects;

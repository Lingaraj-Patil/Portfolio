import { Project } from '../types';
import BankingImage from "../assets/Screenshot 2025-02-22 225615.png";
import ForHerImage from "../assets/Screenshot 2025-03-02 142811.png"
import WeatherImage from "../assets/weatherApp.png";
import TravelImage from "../assets/Screenshot 2025-03-02 144228.png"

export const projects: Project[] = [
  {
    title: "Banking Website",
    description: "This project is a full-stack banking website built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It includes features such as user authentication (login and signup), a money transfer system, and a dashboard displaying all users with a filter option.",
    image: BankingImage,
    technologies: ["React", "JavaScript", "Tailwind CSS", "Express.js","MongoDB"],
    githubUrl: "https://github.com/Lingaraj-Patil/Banking"
  },
  {
    title: "For Her",
    description: "A heartfelt journey through love's timeline, featuring letters to a future wife, romantic music pairings, and a playful compatibility quiz",
    image: ForHerImage,
    technologies: ["React", "Tailwind CSS", "TypeScript", "MongoDB","Express.js"],
    liveUrl: "https://for-her-2619.vercel.app/",
    githubUrl: "https://github.com/Lingaraj-Patil/For-Her"
  },
  {
    title: "Weather App",
    description: "A responsive weather application built with React and styled using Tailwind CSS. This app allows users to search for current weather information in any city by connecting to the OpenWeather API.",
    image: WeatherImage,
    technologies: ["React", "Tailwind CSS", "Axios"],
    githubUrl: "https://github.com/Lingaraj-Patil/Weather-App"
  },
  {
    title: "Travel Destination Planner",
    description: "An engaging web application that helps users explore and manage their favorite travel destinations, featuring an interactive search bar, destination cards, and a favorites toggle feature.",
    image: TravelImage,
    technologies: ["React", "Tailwind CSS", "Typescript"],
    githubUrl: "https://github.com/Lingaraj-Patil/Travel-destination-planner"
  },
];
// src/data/projects.js
// Asset imports:
import portfolioPageImage from '../assets/_PortfolioCapture.png';
import portfolioPageReadme from '../assets/_Portfolio_readme.md';

import notepadImage from '../assets/_NotePadCapture3.png';
import notepadReadme from '../assets/_notePad_readme.md';

import weatherAppImage from '../assets/WeatherAppCapture.png';
import weatherAppReadme from '../assets/weatherApp_readme.md';

import multiPageImage from '../assets/_MultiPageCapture.png';
import multiPageReadme from '../assets/_multiPage_readme.md';

import bootstrapeImage from '../assets/BootstrapCapture.png';
import bootstrapReadme from '../assets/Bootstrap_readme.md';

import toDoListImage from '../assets/ToDoListCapture.png';
import toDoListReadme from '../assets/ToDoList_readme.md';

import readMeFileGenyImage from '../assets/_ReadMeFileGenyCapture.png';
import readMeFileGenyReadme from '../assets/_ReadMeFileGeny_readme.md';

import blogPostImage from '../assets/_BlogPostCapture.png';
import blogPostReadme from '../assets/_BlogPost_readme.md';

export const projects = [
  {
    id: 1,
    title: "Portfolio Web Page",
    description: "The Portfolio Web Pase personal portfolio web page features semantic HTML and CSS styling to present a dynamic multi-page app that scales to the user's viewport.",
    image: portfolioPageImage, // Use the imported variables
    link: portfolioPageReadme, // Use the imported variables
    technologies: ["HTML", "CSS", "Markdown.md"],
    type: "Web Development"
  },
  {
    id: 2,
    title: "Note Pad App",
    description: "A simple full-stack application for managing daily reminders and notes. The Note Pad application allows the user to: create new notes, view existing notes, then edit or delete a Note.",
    image: notepadImage, // Use the imported variables
    link: notepadReadme,
    technologies: ["Node.js", "Express", "HTML/CSS/JS", "JSON"],
    type: "Full Stack Development"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Based on user provided location information, the weather app retrieves weather data data from an Open Weather Map server (as a JSON object), and displays it in a user friendly format",
    image: weatherAppImage,
    link: weatherAppReadme,
    technologies: ["JS", "HTML", "CSS", "REST API"],
    type: "Web Development"
  },
  {
    id: 4,
    title: "Multi-page Responsive Website",
    description: "The solution is made up of five web pages, features semantic HTML and CSS styling. Exploiting FlexBox, the web pages have been designed to scale to varying sizes of viewport.",
    image: multiPageImage,
    link: multiPageReadme,
    technologies: ["HTML", "CSS", "FlexBox", "Markdown.md"],
    type: "Frontend Development"
  },
  {
    id: 5,
    title: "Bootstrap Website",
    description: "The multi-page responsive website, refactored to exploit Bootstrap and JQuery widgets. The solution features Bootstrap's responsive grid system, components, and utility classes.",
    image:bootstrapeImage,
    link: bootstrapReadme,
    technologies: ["HTML", "CSS", "Bootstrap", "JQuery"], 
    type: "Frontend Development"
  },
  {
    id: 6,
    title: "Interactive To-Do List",
    description: "The solution features HTML, CSS and JavaScript. The JavaSscipt defines the clinet-side logic, accommodating manipulation of the Document Object Model, and event handling.",
    image: toDoListImage,
    link: toDoListReadme,
    technologies: ["HTML", "CSS", "JS", "Events", "DOM Manip"],
    type: "Frontend Development"
  },
  {
    id: 7,
    title: "Python ReadMe File Generator",
    description: "This powerfull command line application employs Python libraries (rich and InquirerPy), to process and present user data at the command line, and to create a ReadMe.md file.",
    image: readMeFileGenyImage,
    link: readMeFileGenyReadme,
    technologies: ["Python", "V Env.", "Py Libraries"],
    type: "Frontend Development"
  },
  {
    id: 8,
    title: "Blog Post Application",
    description: "A full-stack 'Tech Blog' application, using Node, Express, MySQL, Sequelize, and JWT authentication. The application provides a dynamic platform for creating, managing, and displaying blog posts.",
    image: blogPostImage,
    link: blogPostReadme,
    technologies: ["Node", "Express", "MySQL", "Sequelize", "JWT"],
    type: "Full Stack Development"
  },
];
# React Portfolio

## Introduction:

Herewith my submission for Week-9's challenge: a full-stack 'Tech Blog' application. The application is responsive, including navigation to multiple pages. It uses interactive components (i.e., filterable project list), to enhance the functionality.
The application was built using React, Node.js, and the Vite build tool. It employs third party libraries like React Router Dam and Lucide React.

---

## The Solution:

The solution comprises three pages, identified by URL and accessed by client-side routing. The user selects their desired page via navigation buttons, on the Navigation bar. All pages present the navigation bar and the footer.
The Home page presents: a brief introduction, and ‘About Me’ project card, two ‘featured’ project cards, and a navigation to ‘View All Projects.
The Projects page presents a means (filter buttons) to filter projects by technology, and a grid of eight project cards.
The Contact page presents an interactive contact form, in the style of a project card.

---

## Design Strategy:

The design of this application was largely dictated be the specification brief for the challenge. The design decisions (on form and function), left to the author, will be discussed here.


### Technologies and Libraries

The dynamic application was primarily built using React, using several key libraries to function:

#### React Router DOM:

This library handles the client-side routing. It allows the application to offer multiple pages (Home, Projects, and Contact) with unique URLs. When the user switches between pages, only new components are rendered. Thus, removing the need for a full page reload, providing a fast and smooth user experience.

#### Lucide React:

This is an icon library used to display the theme toggle icons (the sun and moon icons) in the Navbar.

#### Vite:

The Vite build tool offers a fast front-end development server that bundles our code for production.

### Application Structure

The application is organized into a logical and component-based structure, which is a best practice for React projects:

#### Components:

Reusable UI pieces are stored in the src/components directory. This includes the Navbar, Footer, ProjectCard, and AboutMeCard.

#### Pages:

The src/pages directory contains the main components for each route in our application (Home.jsx, Project.jsx, and Contact.jsx).

#### Data:

The src/data directory is used to store static data, such as project details (projects.js) and contact referral options (contactReferrals.js). The separation of data from UI code makes the application easier to manage and update.

#### Styling:

The app uses CSS variables defined in src/index.css for theming. This allows the application to switch between light and dark modes by simply toggling a class on the <html> element. The app also uses inline styling within the JSX for component-specific layouts.

### Programming Concepts

The code was designed with some fundamental React / JavaScript concepts in mind:

#### Functional Components and Hooks:

The entire application is built using functional components, employing useState and useEffect hooks to manage component state and side effects, such as the user's theme preference (light/dark).
####Conditional Rendering:
The application conditionally renders components or elements based on state or properties (props). For example, the "What other way?" field on the contact form only appears when the user selects "Other,". Also, a ProjectCard is only rendered for projects that match the active filter, when a technology filter is selected.

#### Props (properties):

Data is passed from parent components to child components using props, allowing for a high degree of reusability. For instance, the Home page passes project data as a prop to the ProjectCard component.

#### Array Methods:

The code attempts to make effective use of JavaScript array methods. For example:  .map() to render lists of items (e.g., projects, technologies, filter buttons),  and .filter() to dynamically narrow down the list of projects based on user input.

---

## Installation:

The installation strategy for a Node.js server involves using npm (Node Package Manager), as bundled with Node.js. The goal is to set up the project with all its external dependencies correctly installed and managed. First, we need to install Node, per the operating system in question. See the official Node.js website for details: https://nodejs.org/. 
To build our application, we also need to install the Vite build tool, and a number of external libraries (imported). The procedure is briefly outlined here: 

| Procedure                                                            | Command                     |
|:---------------------------------------------------------------------|:----------------------------|
| Verify Node installed and accessible from our project file.          |$: node -v                   |
| Create the React project in the current folder, using the Vite build tool.                  |$: npm create vite@latest . 
| Install dependencies (creating node_modules and package-lock.json).  |$: npm install               |
| Seed the database with test data                                     |$: npm run seed              |
| Run the application                                                  |$: npm run dev                 |
|                                                                      |                             |

Notes
Command ‘npm create vite@latest .’ Creates the React project in the current folder. The command ‘npm create vite@latest my-first-react-app’ creates a new project folder (my-first-react-app), and builds the React project there.
Command ‘npm create vite@latest .’ will create the package.json file. After the command runs, the user is prompted to select a framework and a language. After this selection, the user will be prompted to : ‘Run npm install’.
Command ‘npm install’ creates the node_modules directory, installs necessary dependencies and creates the package-lock.json file.

Based on our configuration files, the application frontend will now be accessible at http://localhost:5173/

---

## Deployment

### GitHub:

The source, dependency, and asset files have been pushed to my GitHub 'ReactPortfolio' repository for public access at: https://github.com/paulmayer-fullstacker/ReactPortfolio. Before pushing to gitHub, a .gitignore file was created to exclude (ignore) the node_modules dependency directory and the Vite build files.
The addition of this line in the .gitignore file 'node_modules/' causes git to ignore a node_modules directory, held within any subdirectory.
The addition of /dist, /build, and /out prevents Vite’s compiled and optimized version of the code (for production) from being pushed to version control. These files will be regenerated on deployment to onward environments.

### Render:

The project has also been deployed to the Render hosting site, for public access. The URL is https://ReactPortfolio-gauu.onrender.com/. It is recommended to use an incognito browser window to access the solution. The project has been hosted on a free tier of Render. So, after a few minutes of inactivity, the resources are shut down. Thus, on initial access, the service may take a few minutes to start.

### YouTube:

In lieu of the Render shortfall, a short video illustrating use of the Tech Blog application was uploaded to YouTube. The (unlisted) video can be viewed at: https://youtu.be/-A7fg039kEc

---

## To Conclude:

I hope that that this submission is adequate and appropriate, at this stage of the course.  

I believe that the project does fulfil the challenge requirements brief and serves a useful Professional Profile applicatioin.

---

<br/>

<hr style="height: 5px; background-color: black; border: none;">



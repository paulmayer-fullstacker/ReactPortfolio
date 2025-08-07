// src/pages/Home.jsx
import React from 'react';
import { projects } from '../data/projects'; // Import projects data
import { aboutMeData } from '../data/aboutMe'; // Import about me data
import { ProjectCard } from '../components/ProjectCard'; // Import ProjectCard
import { AboutMeCard } from '../components/AboutMeCard'; // Import AboutMeCard
import myCVPDF from '../assets/PaulMayer_CV_20250805.pdf';  // Import my CV PDF
import { Link } from 'react-router-dom'; // Link (like <a>), handles navigation without full page reload

export const Home = () => {
  // Filter for the specific featured projects: Weather Dashboard and Note Pad App to render on Home page
  const featuredProjects = projects.filter(project =>
    project.title === "Weather Dashboard" || project.title === "Note Pad App"
  );

  return (
    <div className="page-container">
      {/* Header Content */}
      <header style={{ textAlign: 'center', marginBottom: '40px', padding: '20px 0' }}>
        <h1 style={{ fontSize: '3em', color: 'var(--primary-colour)', marginBottom: '10px' }}>
          Paul Mayer
        </h1>
        <p style={{ fontSize: '1.2em', color: 'var(--text-colour)', maxWidth: '800px', margin: '0 auto' }}>
          An experienced Infrastructure and DevOps Engineer who has influenced business strategy
          and operational success through the development and deployment of efficient, cost-effective cloud solutions.
        </p>
        <p> Please take some time to view my portfolio!
        </p>
      </header>

      {/* About Me Card populated from aboutMeData and myCVPDF, imports as props */}
      <AboutMeCard
        title={aboutMeData.title}
        description={aboutMeData.description}
        qualifications={aboutMeData.qualifications}
        myCVLink={myCVPDF}
        // imageUrl={aboutMeData.imageUrl} // Place Image, when ready.
      />
      {/* Feature project section with cards selected my name */}
      <section style={{ marginBottom: '40px', marginTop: '40px' }}>
        <h2 style={{ textAlign: 'center', color: 'var(--primary-colour)', marginBottom: '20px' }}>Featured Projects</h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
        }}>
          {/* For each project object in the featuredProjects array, render a ProjectCard */}
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          {/* Create clickable Link component, that will navigate to the /projects route */}
          <Link to="/projects" style={{
            backgroundColor: 'var(--primary-colour)',
            color: 'white',
            padding: '12px 25px',
            borderRadius: 'var(--border-radius)',
            textDecoration: 'none',
            fontSize: '1.1em',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--secondary-colour)'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--primary-colour)'}
          >
            View All Projects
          </Link>
        </div>
      </section>
    </div>
  );
};
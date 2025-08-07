// src/components/ProjectCard.jsx
// Create reusable component for displaying individual projects, using a list, showing: project image, title, description, technologies, and a link.
import React from 'react';
// Define component, accepting single project prop object, containing all the project data
export const ProjectCard = ({ project }) => {
  return (
    // Card container
    <div style={{
      backgroundColor: 'var(--card-background)',
      border: '1px solid var(--card-border)',
      borderRadius: 'var(--border-radius)',
      boxShadow: 'var(--box-shadow-light)',
      padding: '20px',
      margin: '15px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      width: 'calc(33% - 30px)', /* For 2 columns on large desktop */
      minWidth: '280px', /* Minimum width for cards */
      flexGrow: 1,
      flexShrink: 1,
    }}
    // Interactive looking response to mouse-over
    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <img // Displays the project's image
        src={project.image}
        alt={project.title}
        style={{
          width: '100%',
          height: '180px',
          // objectFit: 'cover',
          objectFit: 'contain', // Image fits within bounds without being cropped
          borderRadius: 'var(--border-radius)',
          marginBottom: '15px',
        }}
      /> {/* Display project title and brief description */}
      <h3 style={{ color: 'var(--primary-colour)', marginBottom: '10px' }}>{project.title}</h3>
      <p style={{ marginBottom: '15px' }}>{project.description}</p>
      <div style={{ marginBottom: '15px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* For each technology string in the array, render a <span> element, styled as colored tag */}
        {project.technologies.map((tech, index) => (
          <span key={index} style={{
            backgroundColor: 'var(--secondary-colour)',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '5px',
            margin: '3px',
            fontSize: '0.8em',
          }}>
            {tech}
          </span>
        ))}
      </div>
      <a  // View project link rendered at bottom of card
        href={project.link}
        target="_blank"
        // Security attributes, ensure link opens in a new tab without posing security risks
        rel="noopener noreferrer"
        style={{
          backgroundColor: 'var(--primary-colour)',
          color: 'white',
          padding: '10px 20px',
          borderRadius: 'var(--border-radius)',
          textDecoration: 'none',
          marginTop: 'auto', /* Pushes button to bottom of card */
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--secondary-colour)'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--primary-colour)'}
      >
        View Project
      </a>
    </div>
  );
};
// src/pages/Project.jsx
import React, { useState } from 'react'; // Imports useState hook, which manages state in functional components.
import { projects } from '../data/projects'; // Import project data
import { ProjectCard } from '../components/ProjectCard'; // Import ProjectCard component

export const Project = () => {
  // Use useState hook to create a state variable (filter) and a function to update it (setFilter).
  // Initial filter value: 'All'. When setFilter function called, React will re-render component based on new filter value.
  const [filter, setFilter] = useState('All');

  // Get unique technologies for filter options by dynamically generating a list of filter buttons
  // Create array, based on Set (removing duplicates), based on array of all technologies cited in all projects
  const allTechnologies = [...new Set(projects.flatMap(p => p.technologies))];
  // Create final array of filter options, starting with 'All', then adding all the unique technologies.
  const filterOptions = ['All', ...allTechnologies];
  // Create a new array (filteredProjects), based on the current filter state. Filtering the projects array. A project is if filter is set to 'All', OR the project's technologies array includes the current filter value.
  const filteredProjects = projects.filter(project =>
    filter === 'All' || project.technologies.includes(filter)
  );

  return (
    <div className="page-container">
      <h1>My Projects</h1>
      <hr />
      {/* Filter Section */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        marginBottom: '10px',
        marginTop: '10px',
        justifyContent: 'center',
      }}>
        <div><p>Filter Projects by Technology:</p></div>
        <div>
          {/* Create a <button> for each technology */}
        {filterOptions.map(option => (
          <button
            key={option}
            // onClick: Cals the setFilter function with the button's option. Updating filter state and render component
            onClick={() => setFilter(option)}
            style={{
              padding: '10px 15px',
              borderRadius: '5px',  //'20px' is pill shaped,
              border: `1px solid ${filter === option ? 'var(--primary-colour)' : 'var(--card-border)'}`,
              margin: '2px',
              backgroundColor: filter === option ? 'var(--primary-colour)' : 'var(--card-background)',
              color: filter === option ? 'white' : 'var(--text-colour)',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--box-shadow-light)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            {option}
          </button>
        ))}
      </div>
      </div>
      <hr />
      {/* Render the Projects Grid, based on current filter to display project cards*/}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px', /* Gap between cards */
      }}>
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
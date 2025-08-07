// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // Link (like <a>), handles navigation without full page reload
import { ThemeToggleButton } from './ThemeToggleButton'; // Import THeme Toggle button
// Define function Navbar, and make it available for import by other files.
export const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: 'var(--primary-colour)',
      padding: '15px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      // 'space-between': Pushes the child elements to opposite ends of the container ("My Portfolio" on the left and navigation links/buttons to right).
      alignItems: 'center',
      boxShadow: 'var(--box-shadow-light)',
    }}>
      <Link to="/" style={{ color: 'white', fontSize: '1.5em', fontWeight: 'bold', textDecoration: 'none' }}>
        My Portfolio
      </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
        {/* Clicking link take user to the root URL (/), home page. */}
          Home
        </Link>
        <Link to="/projects" style={{ color: 'white', textDecoration: 'none' }}>
        {/* Clicking link take user to /projects URL */}
          Projects
        </Link>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>
          Contact
        </Link>
        {/* Renders theme toggle component. Placed to appear next to the navigation links on the far right of the navbar. */}
        <ThemeToggleButton />
      </div>
    </nav>
  );
};
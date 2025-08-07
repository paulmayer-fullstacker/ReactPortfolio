// src/components/Footer.jsx
import React from 'react';
// Create the footer bar
export const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--primary-colour)',
      color: 'white',
      textAlign: 'center',
      padding: '15px 20px',
      marginTop: 'auto', /* Pushes footer to the bottom */
      boxShadow: 'var(--box-shadow-light)',
    }}> {/* Polulate with Date, Name and Message */}
      <p>&copy; {new Date().getFullYear()} Paul Mayer. All rights reserved.</p>
    </footer>
  );
};
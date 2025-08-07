// src/pages/NotFound.jsx
import React from 'react';
// Display Not Found page for all undefined routes
export const NotFound = () => {
  return (
    <div className="page-container">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, we couldn't find the page that you're looking for.</p>
    </div>
  );
};
// src/components/ThemeToggleButton.jsx 

import React, { useState, useEffect } from 'react';  // Imports useState and useEffect hooks, essential for this component.
import { Sun, Moon } from 'lucide-react';  // Import icons from lucide-react icon library

export const ThemeToggleButton = () => {
  // Initialise state for whether the app is in dark mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage, if theme preference has been saved from a previous session
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });
  //  Hook that runs code in response to component changes
  useEffect(() => {
    const root = document.documentElement;
    // Modify DOM by adding or removing the 'dark' class in the <html> element (document.documentElement)
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      // Retain theme in local storage
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    //[isDarkMode] dependency array. Tells React to re-run the effect when the isDarkMode state changes
  }, [isDarkMode]);

  const toggleTheme = () => {
    // Update the state to the opposite of current state value
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <button
      onClick={toggleTheme} // Connect button click event to the toggleTheme function.
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'} // Provide text description for screen readers, improving accessibility
      style={{  // Style Theme button
        background: 'none',
        border: '1px solid var(--secondary-colour)',
        borderRadius: '50%',
        padding: '8px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // When coulour changes (light/dark), it happens smoothly over 0.3 seconds with an "ease" timing function. //
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
        color: 'var(--text-colour)',
        // ToggleTheme control overrides browser theme selection //
      }}
      onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.1)'}
      onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
    >
      {isDarkMode ? (
        // Style theme icon based on light/dark sun/moon
        <Sun size={24} style={{ color: 'var(--accent-colour)' }} />
      ) : (
        <Moon size={24} style={{ color: 'var(--secondary-colour)' }} />
      )}
    </button>
  );
};
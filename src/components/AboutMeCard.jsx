// src/components/AboutMeCard.jsx
// Create reusable component for displaying "About Me" card. Take data as props to dynamically display the title, description, qualifications, and a link to .pdf CV.
import React from 'react';
//  Define AboutMeCard functional component that accepts props using destructuring assignment ({ title, description, ... }), directly extracted from the object passed in.
export const AboutMeCard = ({ title, description, qualifications, myCVLink, imageUrl }) => {
  return ( //  Main container for the card
    <div style={{  // Style card
      backgroundColor: 'var(--card-background)',
      border: '1px solid var(--card-border)',
      borderRadius: 'var(--border-radius)',
      boxShadow: 'var(--box-shadow-light)',
      padding: '20px',
      margin: '15px auto 40px auto', // Add margin-bottom and auto for horizontal centering
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      maxWidth: '1111px', // Make AboutMe single card same width as two project cards
      width: 'calc(100% - 30px)', // Allow responsiveness while keeping some padding
    }}
    // Interactive looking response to mouse-over
    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      {/* Insert profile picture.
        Uncomment and add an imageUrl prop to show picture.
      */}
    {/*  {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: '150px', // Adjust size for a profile picture
            height: '150px', // Keep aspect ratio
            objectFit: 'cover',
            borderRadius: '50%', // Make it circular
            marginBottom: '15px',
            border: '3px solid var(--primary-colour)', // Add a border
          }}
        />
      )} */}
      {/* Display title of card, passed in via 'title' prop */}
      <h3 style={{ color: 'var(--primary-colour)', marginBottom: '10px', fontSize: '2.5em' }}>{title}</h3>
      <div style={{ marginBottom: '15px', fontSize: '1.2em', lineHeight: '1.6', textAlign: 'left', width: '100%' }}>
        {/* Split 'description' prop's text into an array of paragraphs based on newline chars. Iterate over the array to render each paragraph separately */}
        {description.split('\n').map((paragraph, index) => {
          // Check for bold text indicated by **text** and replace with <strong>
          const formattedParagraph = paragraph.split('**').map((part, i) => {
            if (i % 2 === 1) { // Odd parts are bolded
              return <strong key={i}>{part}</strong>;
            }
            return part;
          });

          // Handle list items
          if (paragraph.startsWith('<li>') || paragraph.startsWith('<ul>') || paragraph.startsWith('</ul>')) {
            // This is a basic approach. For more robust markdown rendering, a library would be better.
            return <div key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />;
          } else if (paragraph.startsWith('* ')) { // Simple bullet points
            const content = paragraph.substring(2);
            // Replace inner **text** for list items too
            const formattedContent = content.split('**').map((part, i) => {
              if (i % 2 === 1) {
                return <strong key={i}>{part}</strong>;
              }
              return part;
            });
            return <li key={index} style={{ marginLeft: '20px' }}>{formattedContent}</li>;
          }
           else if (paragraph.startsWith('**')) { // Sub-bullet points
            const content = paragraph.substring(2);
            // Replace inner **text** for list items too
            const formattedContent = content.split('**').map((part, i) => {
              if (i % 2 === 1) {
                return <strong key={i}>{part}</strong>;
              }
              return part;
            });
            return <li key={index} style={{ marginLeft: '40px', listStyleType: 'circle' }}>{formattedContent}</li>;
          }


          return <p key={index} style={{ marginBottom: '10px' }}>{formattedParagraph}</p>;
        })}
      </div>

      {/* Qualifications Section with conditional rendering*/}
      {qualifications && qualifications.length > 0 && (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '20px',
        }}>
          {/* Iterate through array of qualifications. Create a <span> for each qualification, styled like pill-shaped tag */}
          {qualifications.map((qual, index) => (
            <span key={index} style={{
              backgroundColor: 'var(--secondary-colour)',
              color: 'white',
              padding: '5px 10px',
              borderRadius: '5px',
              fontSize: '0.8em',
              whiteSpace: 'nowrap',
            }}>
              {qual}
            </span>
          ))}
        </div>
      )}

      {/* View CV Button conditionally rendered*/}
      {myCVLink && (
        <a
          href={myCVLink}
          target="_blank"
          // Security attributes, ensure link opens in a new tab without posing security risks
          rel="noopener noreferrer"
          style={{
            backgroundColor: 'var(--primary-colour)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: 'var(--border-radius)',
            textDecoration: 'none',
            transition: 'background-color 0.3s ease',
            marginTop: 'auto', // Pushes button to the bottom if the card has a fixed height
          }}
          // Interactive looking response to mouse-over
          onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--secondary-colour)'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--primary-colour)'}
        >
          View Curriculum Vitae
        </a>
      )}
    </div>
  );
};
// src/pages/Contact.jsx
// Create contact form and handle user input
import React, { useState } from 'react';
// List of referral options from the contactReferrals data file
import { contactReferrals } from '../data/contactReferrals';
// Create a single state variable (formData) to hold all the user's form input. An object with keys for each form field. Plus, function to update the state object (setFormData).
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    referral: '',
    otherReferral: '',
  });
  // Event handler function for all the form inputs
  const handleChange = (e) => {
    // Extracts name and value properties from the input field that triggered the change.
    const { name, value } = e.target;
    // Update formData state. First use spread operator (...formData) to create copy of the existing state. Then overwrite just the field that changed using [name]: value
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // Event: click "Send Message" button
  const handleSubmit = (e) => {
    // Stop default browser behaviour (submit and refresh page), which would loose state
    e.preventDefault();

    // Create a confirmation message string for user alert
    let confirmationMessage = `Thank you for your message, ${formData.name}!
    
    Here is the information you submitted:
    Name: ${formData.name}
    Email: ${formData.email}
    Message: ${formData.message}
    Heard from: ${formData.referral}`;

    // Add the "What other way?" information if 'Other' selected
    if (formData.referral === 'Other') {
      confirmationMessage += `
      What Other: ${formData.otherReferral}`;
    }

    // Display the alert message to the user
    alert(confirmationMessage);

    // Also log the data to the console
    console.log('Form submitted:', formData);
    // After logging, reset form fields by setting state back to its initial, empty values.
    setFormData({
      name: '',
      email: '',
      message: '',
      referral: '',
      otherReferral: '',
    });
  };

  const isOtherSelected = formData.referral === 'Other';

  return ( // The contact form
    <div className="page-container">
      <div style={{ textAlign: 'center', marginBottom: '40px', padding: '20px 0' }}>
        <h1 style={{ fontSize: '3em', color: 'var(--primary-colour)', marginBottom: '10px' }}>
          Get in Touch
        </h1>
        <p style={{ fontSize: '1.2em', color: 'var(--text-colour)', maxWidth: '800px', margin: '0 auto' }}>
          Please use the form below to contact me.
        </p>
      </div>

      <div className="contact-form-card">
        {/* Link the form's submission event to the handleSubmit function */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="referral">How did you hear about me?</label>
            <select
              id="referral"
              name="referral"
              value={formData.referral}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select an option</option>
              {contactReferrals.map((referral, index) => (
                <option key={index} value={referral}>{referral}</option>
              ))}
            </select>
          </div>
          {/* Conditional rendering block. (in paranthesese) only rendered if isOtherSelected is true */}
          {isOtherSelected && (
            <div className="form-group">
              <label htmlFor="otherReferral">What other way?</label>
              <input
                type="text"
                id="otherReferral"
                name="otherReferral"
                value={formData.otherReferral}
                onChange={handleChange}
                required
              />
            </div>
          )}
          {/* "Send Message" button, triggers onSubmit event when the button clicked */}
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
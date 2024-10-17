import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/Contact.css';

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <section className="contact-page">
      <div className="contact-left">
        
        <div className="contact-text">
          <h2>CONTACT US</h2> 

          <div className="contact-info">
            <img src="/src/assets/email.png" alt="Email Logo" className="small-logo-img" />
            <p>abhishek8579013@gmail.com</p>
          </div>
        <div className="contact-info">
            <img src="/src/assets/phone.png" alt="Phone Logo" className="small-logo-img" />
            <p>+91-6202000340</p>
          </div>
          </div>


        <div className="website-logos">
        <h1>FOLLOW US </h1>
          <div className="logo-container">
          
            <a href="https://www.linkedin.com/feed/" className="logo-link">
              <img src="/src/assets/lilogo.png" alt="Example 1" className="logo-img" />
            </a>
            <a href="https://www.instagram.com/im_abhishek_bhardwaj/" className="logo-link">
              <img src="/src/assets/instalogo.png" alt="Example 2" className="logo-img" />
            </a>
            <a href="https://github.com/abhishekgfg" className="logo-link">
              <img src="/src/assets/gitlogo.png" alt="Example 3" className="logo-img" />
            </a>
            <a href="https://www.example4.com" className="logo-link">
              <img src="/src/assets/twiter.png" alt="Example 4" className="logo-img" />
            </a>
            <a href="https://www.example5.com" className="logo-link">
              <img src="/src/assets/hac.png" alt="Example 5" className="logo-img" />
            </a>
          </div>
        </div>
      </div>

      <div className="contact-right">
        {!formSubmitted ? (
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Get in Touch</h2>
            <p>Please fill out the form below to get in touch with us:</p>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Phone Number:
              <input type="tel" name="phone" required />
            </label>
            <label>
              Description:
              <textarea name="description" rows="5" placeholder="Write your message here..." required></textarea>
            </label>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        ) : (
          <div className="form-submitted">
            <h2>Thank you for your submission!</h2>
            <button className="back-btn" onClick={handleBack}>Back to Home</button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;

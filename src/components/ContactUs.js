import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    // Simple regex for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    // Simple regex for phone number validation (e.g., (123) 456-7890)
    return /^\d{10}$/.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    // Validate phone number
    if (!validatePhone(formData.phone)) {
      setErrors((prev) => ({ ...prev, phone: 'Please enter a valid phone number.' }));
      hasError = true;
    } else {
      setErrors((prev) => ({ ...prev, phone: '' }));
    }

    // Validate email address
    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address.' }));
      hasError = true;
    } else {
      setErrors((prev) => ({ ...prev, email: '' }));
    }

    if (!hasError) {
      // Handle successful form submission here
      console.log('Form data:', formData);
      // e.g., send form data to an API
    }
  };

  return (
    <section id="contact-us">
      <div className='container contact-us'>
        <div className='contact-left'>
          <h2>Contact Us</h2>
          <p>At KV, we offer a team of seasoned professionals with extensive industry expertise, delivering customized solutions tailored to your business needs. We pride ourselves on proven results that drive growth and profitability, a client-centric approach that prioritizes your success, and comprehensive services ranging from strategic planning to marketing solutions, all conducted with the highest level of integrity and professionalism.</p>
        </div>
        <div className='contact-right'>
        {errors.phone && <span className="error">{errors.phone}</span>}<br/>
        {errors.email && <span className="error">{errors.email}</span>}<br/>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
              required
            /><br/>
            <input
              type='text'
              name='phone'
              placeholder='Phone'
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="\d{10}"
              title="Please enter a valid phone number (10 digits only)."
            /><br/>
            
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              required
            /><br/>
            
            <textarea
              name='message'
              placeholder='Message'
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea><br/>
            <input type='submit' className='btn-secondary' value='Submit'/>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;

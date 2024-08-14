import React, { useState } from 'react';
import pp from '../img/pp4.jpeg';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    company: "ABC Corp",
    position: "CEO",
    image: pp,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor gravida justo non auctor. Sed sit amet ante at dolor bibendum vestibulum.",
    fullTestimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor gravida justo non auctor. Sed sit amet ante at dolor bibendum vestibulum. Nullam eget lectus eu libero feugiat fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at lorem in nunc cursus lacinia."
  },
  {
    id: 2,
    name: "Jane Smith",
    company: "XYZ Inc",
    position: "Marketing Director",
    image: pp,
    quote: "Quisque eget condimentum magna. Nulla facilisi. Phasellus a bibendum diam. Sed at lorem in nunc cursus lacinia.",
    fullTestimonial: "Quisque eget condimentum magna. Nulla facilisi. Phasellus a bibendum diam. Sed at lorem in nunc cursus lacinia. Nullam eget lectus eu libero feugiat fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  // Add more testimonials as needed
];

const TestimonialCard = ({ testimonial }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="testimonial-card">
      <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
      <h3>{testimonial.name}</h3>
      <p>{testimonial.position} at {testimonial.company}</p>
      <p className="testimonial-quote">{expanded ? testimonial.fullTestimonial : testimonial.quote}</p>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

const TestimonialsPage = () => {
  return (
    <section  id='testimonials' className="testimonials-page container">
      <h1>What Our Clients Say</h1>
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsPage;
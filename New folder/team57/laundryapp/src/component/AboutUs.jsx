import React from 'react';
import './AboutUs.css'; 

const TeamMember = ({ name, role, bio }) => (
  <div className="team-member">
    <h3>{name}</h3>
    <p><strong>Role:</strong> {role}</p>
    <p>{bio}</p>
  </div>
);

const AboutUs = () => (
  <div className="about-us-container">
    <h1>About Us</h1>

    <section>
      <h2>Our Mission</h2>
      <p>At Laundry Web App, our mission is to our mission is to revolutionize the laundry experience by providing a seamless, convenient, and eco-friendly solution for individuals and businesses. We are dedicated to simplifying the laundry process, saving our users valuable time, and delivering unmatched service quality.

We aim to create a platform that exceeds customer expectations, offering a range of innovative features such as easy scheduling, transparent pricing, and timely delivery. Our commitment to environmental sustainability is reflected in our eco-conscious practices, from energy-efficient operations to the use of environmentally friendly detergents..</p>
    </section>
    
    <section>
      <h2>Who We Are</h2>
      <p>We are a dynamic team of CDAC students from Mumabi, United by our passion for IT industry, we came together to create something meaningful and impactful.</p>
    </section>

    <section>
      <h2>What Drives Us</h2>
      <p>Driven by curiosity and a shared commitment to excellence, we aim to [mention specific objectives or outcomes you want to achieve with your project]. Each team member brings a unique set of skills, ranging from [mention relevant skills, e.g., coding, design, research] to ensure the success of our project.</p>
    </section>

    <section>
      <h2>Our Journey</h2>
      <p>The journey of [Your Project Name] began with an idea – a spark that ignited our collective ambition. From brainstorming sessions to late-night coding marathons, we've poured our energy into every aspect of this project. We believe in [mention any guiding principles or values that drive your project].</p>
    </section>

    <section>
      <h2>Meet the Team</h2>
      <TeamMember name="Dayanand Pawale" role="Full Stack Developer" bio="dayapawale5@gmail.com" />
      <TeamMember name="Anisha Vanjari" role="Full Stack Developer" bio="anishavanjari1307@gmail.com" />
      <TeamMember name="Gangesh Bankar" role="Full Stack Developer" bio="ganeshbankar.2050@gmail.com" />
      <TeamMember name="Kiran Jadhav" role="Full Stack Developer" bio="kirandj1105@gmail.com" />
      
    </section>

    <section>
      <h2>How You Can Join Us</h2>
      <p>We are always open to collaboration and welcome new members who share our passion for [your project's theme]. If you're interested in joining our team, reach out to us at [contact email or social media handles].</p>
    </section>

    <p>Thank you for being part of our journey!</p>
  </div>
);

export default AboutUs;
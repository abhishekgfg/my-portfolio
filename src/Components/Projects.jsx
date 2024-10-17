import React from 'react';
import '/src/Projects.css';

function Projects() {
  const projectList = [
    {
      title: 'Employee Management System swing',
      description: 'management employee data,ex add, delete, update, print, mark attendence, search by unique id...',
      link: 'https://link-to-project1.com',
    },
    {
      title: 'bank management in java swing',
      description: ' Demonstrate the working of a ATM & Bank in which clients can withdraw, deposit ,check balance & search for transaction history and enquiry..',
      link: 'https://link-to-project2.com',
    },
    {
      title: 'Stopwatch',
      description: 'timmer running  in java swing  .',
      link: 'https://link-to-project3.com',
    },
    {
      title: 'restaurant management system ',
      description: 'we can add item according to customer and generate bill and print bill .',
      link: 'https://link-to-project4.com',
    },
    {
      title: 'folder locker ',
      description: 'we can lock a required folder .',
      link: 'https://link-to-project5.com',
    },
    {
      title: 'portfolio',
      description: 'my profile .',
      link: 'https://link-to-project6.com',
    },
  ];

  return (
    <section className="projects-section">
      <h1 className="projects-heading">My Projects</h1>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

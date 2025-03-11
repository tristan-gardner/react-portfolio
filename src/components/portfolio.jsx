// components/Portfolio.jsx
import React, { useRef } from 'react';
import { projectList } from './projects/projectList';

// const projects = [
//   {
//     id: 'project-1',
//     title: 'Project 1',
//     description: 'This is the first project.',
//     thumbnail: "https://res.cloudinary.com/dgnqdbhjg/image/upload/v1741390151/remus-rtg-arrows-bottom_xp8wbw.png",
//   },
//   {
//     id: 'project-2',
//     title: 'Project 2',
//     description: 'This is the second project.',
//     thumbnail: 'image3.jpg',
//   },
//   // Add more projects as needed
// ];

const Portfolio = ({ setOpenProject }) => {
  const projectsRef = useRef(null);

  const handleProjectClick = (projectId) => {
    setOpenProject(projectId); // Set the open project
    setTimeout(() => {
      if (projectsRef.current) {
        // Calculate the scroll position with an offset
        const offset = 100; // Adjust this value as needed
        const elementPosition = projectsRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        // Scroll to the position with the offset
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 100); // Small delay to ensure the DOM updates
  };

  return (
    <div id='work' className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="projects-grid">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => handleProjectClick(project.id)}
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="project-thumbnail"
              style={{width: '30%', height: 'auto'}}
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
      {/* Pass the ref to the Projects component */}
      <div ref={projectsRef}></div>
    </div>
  );
};

export default Portfolio;
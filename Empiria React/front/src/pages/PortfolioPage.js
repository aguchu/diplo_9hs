import React, { useState } from 'react';
import '../styles/PortfolioPage.css'; 

const PortfolioPage = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    { id: 1, image: '/IMG/galeria/chery.jpg', fichaTecnica: '/IMG/galeria/ficha_chery.png' },
    { id: 2, image: '/IMG/galeria/misiones.png', fichaTecnica: '/IMG/galeria/ficha_misiones.png' },
    { id: 3, image: '/IMG/galeria/psicologa.png', fichaTecnica: '/IMG/galeria/ficha_jesica.png' },
    // (otros proyectos)//
  ];

  const handleMouseEnter = (projectId) => {
    setHoveredProject(projectId);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <div className="portfolio-container">
      {projects.map((project) => (
        <div
          key={project.id}
          className={`portfolio-item ${hoveredProject === project.id ? 'hovered' : ''}`}
          onMouseEnter={() => handleMouseEnter(project.id)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={hoveredProject === project.id ? project.fichaTecnica : project.image} alt={`Project ${project.id}`} />
        </div>
      ))}
    </div>
  );
};

export default PortfolioPage;

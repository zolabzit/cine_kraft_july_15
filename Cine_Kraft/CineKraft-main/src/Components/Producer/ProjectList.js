import React from 'react';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects, onSelect }) => {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id} onClick={() => onSelect(project)}>
            <Link to={`/producer/projects/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;

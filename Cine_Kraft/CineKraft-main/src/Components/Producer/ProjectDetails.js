import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>Budget: {project.budget}</p>
      {/* Add more project details and actions here */}
    </div>
  );
};

export default ProjectDetails;

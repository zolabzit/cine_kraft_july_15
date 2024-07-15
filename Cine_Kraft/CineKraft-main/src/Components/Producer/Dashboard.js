import React, { useState, useEffect } from 'react';
import ProjectList from './ProjectList';
import ProjectForm from './ProjectForm';

const Dashboard = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Movie 1', budget: 100000 },
    { id: 2, name: 'Movie 2', budget: 200000 },
  ]);
  const [selectedProject, setSelectedProject] = useState(null);

  const loadProjects = () => {
    // Here we simulate loading projects. In real use case, this could be an API call.
    return projects;
  };

  useEffect(() => {
    setProjects(loadProjects());
  }, []);

  const handleSaveProject = (project) => {
    setProjects((prevProjects) => [
      ...prevProjects,
      { ...project, id: prevProjects.length + 1 },
    ]);
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <ProjectForm onSave={handleSaveProject} />
      <ProjectList projects={projects} onSelect={handleSelectProject} />
      {selectedProject && <div>Selected Project: {selectedProject.name}</div>}
    </div>
  );
};

export default Dashboard;

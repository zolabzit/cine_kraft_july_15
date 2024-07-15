import React, { useState } from 'react';

const ProjectForm = ({ onSave }) => {
  const [name, setName] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, budget });
    setName('');
    setBudget('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Project Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Budget</label>
        <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} required />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default ProjectForm;

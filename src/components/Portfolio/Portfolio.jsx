import React, { useState } from 'react';
import initialValues from '../../constants/initialValues';
import Toolbar from '../Toolbar/Toolbar';
import ProjectList from '../ProjectList/ProjectList';

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [projects, setProjects] = useState(initialValues);

  const handleOnSelectFilter = (event) => {
    const newSelectedFilter = event.target.textContent;
    setSelectedFilter(() => newSelectedFilter);

    if (newSelectedFilter !== 'All') {
      const filteredProjects = initialValues.filter(
        (el) => el.category === newSelectedFilter
      );
      setProjects(filteredProjects);
    } else {
      setProjects(initialValues);
    }
  };

  return (
    <div className='wrapper'>
      <div className='tool-bar'>
        <Toolbar
          filters={['All', 'Websites', 'Flayers', 'Business Cards']}
          selected={selectedFilter}
          onSelectFilter={(filter) => handleOnSelectFilter(filter)}
        />
      </div>
      <div className='portfolio'>
        {projects.map((el, index) => (
          <ProjectList key={index} image={el.img} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

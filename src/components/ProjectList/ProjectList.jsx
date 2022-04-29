import React from 'react';
import PropTypes from 'prop-types';

const ProjectList = (props) => {
  return <img className='list-image' src={props.image} alt=''></img>;
};

ProjectList.propTypes = {
  image: PropTypes.string,
};

export default ProjectList;

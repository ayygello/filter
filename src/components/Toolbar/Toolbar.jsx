import React from 'react';

const Toolbar = (props) => {
  return (
    <div>
      {props.filters.map((filter, index) => (
        <button key={index} onClick={props.onSelectFilter}>
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;

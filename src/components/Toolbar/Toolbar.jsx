import React from 'react';

const Toolbar = (props) => {
  const filters = props.filters.map((filter, index) =>
    filter === props.selected ? (
      <button className='selected-button' key={index}>
        {props.selected}
      </button>
    ) : (
      <button key={index} onClick={props.onSelectFilter}>
        {filter}
      </button>
    )
  );

  return <div className='button-wrapper'>{filters}</div>;
};

export default Toolbar;

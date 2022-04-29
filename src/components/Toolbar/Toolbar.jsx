import React from 'react';
import PropTypes from 'prop-types';

const Toolbar = (props) => {
  const buttons = props.filters.map((filter, index) =>
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

  return <div className='button-wrapper'>{buttons}</div>;
};

Toolbar.propTypes = {
  filters: PropTypes.array,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func,
};

export default Toolbar;

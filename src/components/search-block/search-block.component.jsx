import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateSearchValue } from '../../redux/search-value/search-value.actions';
import './search-block.styles.scss';

const Search = ({ history, dispatch }) => {
  function handleChange(e) {
    dispatch(updateSearchValue(e.target.value));
    // history.push('/');
  }

  return (
    <div className='search-block'>
      <input
        className='search-input'
        type='text'
        placeholder='Search'
        onChange={e => handleChange(e)}
      />
    </div>
  );
};

export default withRouter(connect()(Search));

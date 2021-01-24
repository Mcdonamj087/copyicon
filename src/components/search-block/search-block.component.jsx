import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateSearchValue } from '../../redux/search-value/search-value.actions';
import './search-block.styles.scss';

const Search = ({ history, dispatch, searchValue }) => {
  const input = useRef(null);

  console.log(input);

  function handleReset() {
    input.current.value = '';
    dispatch(updateSearchValue(''));
  }

  // Function to handle search input change
  function handleChange(e) {
    dispatch(updateSearchValue(e.target.value));
  }

  return (
    <div className='search-block'>
      <input
        className='search-input'
        type='text'
        placeholder='Search'
        onChange={e => handleChange(e)}
        ref={input}
      />
      {searchValue.length > 0 && (
        <button className='search-reset' onClick={() => handleReset()}>
          &#10005;
        </button>
      )}
    </div>
  );
};

const mapStateToProps = ({ searchValue }) => ({
  searchValue,
});

export default withRouter(connect(mapStateToProps)(Search));

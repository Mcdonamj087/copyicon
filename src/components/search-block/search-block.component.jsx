import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './search-block.styles.scss';

const Search = ({ history }) => {
  const [value, updateValue] = useState('');

  console.log(history);

  function handleChange(e) {
    updateValue(e.target.value);
    history.push('/');
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

export default withRouter(Search);

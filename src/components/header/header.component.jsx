import React from 'react';
import './header.styles.scss';
import Search from '../search-block/search-block.component';

const Header = () => {
  return (
    <header>
      <div className='copy-again'>Copy again:</div>
      <Search />
    </header>
  );
};

export default Header;

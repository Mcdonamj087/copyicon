import React from 'react';
import './header.styles.scss';
import CopyAgain from '../copy-again/copy-again.component';
import Search from '../search-block/search-block.component';

const Header = () => {
  return (
    <header>
      <CopyAgain />
      <Search />
    </header>
  );
};

export default Header;

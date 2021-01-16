import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './side-nav.styles.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CategoryTab from '../category-tab/category-tab.component';

const SideNav = ({ symbols }) => {
  return (
    <div className='side-nav'>
      <Link to='/'>
        <Logo className='logo' />
      </Link>

      <div className='category-nav'>
        <CategoryTab name='All' id='' />
        {symbols
          .filter(({ icons }) => icons.length)
          .map(({ id, category }, idx) => (
            <CategoryTab key={id} id={id} name={category} />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ symbols }) => ({
  symbols: symbols,
});

export default connect(mapStateToProps)(SideNav);

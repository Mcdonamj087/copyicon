import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './side-nav.styles.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CategoryTab from '../category-tab/category-tab.component';
import FormatSelector from '../format-selector/format-selector.component';

const SideNav = ({ symbols }) => {
  return (
    <div className='side-nav'>
      <div>
        <Link to='/' className='logo-link'>
          <Logo className='logo' />
        </Link>

        <div className='category-nav'>
          <CategoryTab name='All' id='' />
          {symbols.map(({ id, category }, idx) => (
            <CategoryTab key={id} id={id} name={category} />
          ))}
        </div>

        <div className='format-selector--wrapper'>
          <p className='heading'>Choose a flavor:</p>
          <FormatSelector format='Raw' />
          <FormatSelector format='HTML' />
          <FormatSelector format='CSS' />
          <FormatSelector format='Hex' />
          <FormatSelector format='ASCII' />
        </div>
      </div>

      <div className='signature'>♡ Matt</div>
    </div>
  );
};

const mapStateToProps = ({ symbols }) => ({
  symbols: symbols.filter(({ icons }) => icons.length),
});

export default connect(mapStateToProps)(SideNav);

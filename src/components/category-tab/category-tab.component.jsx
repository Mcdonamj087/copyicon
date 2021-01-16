import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './category-tab.styles.scss';
import { connect } from 'react-redux';

const CategoryTab = ({ id, name, activeCategory, onClick }) => {
  return (
    <Link
      to={`/${id}`}
      className={`category-tab ${activeCategory === id ? 'active' : ''}`}
      onClick={onClick}>
      {name}
    </Link>
  );
};

const mapStateToProps = ({ activeCategory }) => ({
  activeCategory,
});

export default connect(mapStateToProps)(withRouter(CategoryTab));

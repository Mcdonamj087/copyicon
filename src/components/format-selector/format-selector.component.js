import React from 'react';
import { connect } from 'react-redux';
import { updateActiveFormat } from '../../redux/active-format/active-format.actions';
import './format-selector.styles.scss';

const FormatSelector = ({ format, currentFormat, dispatch }) => {
  return (
    <button
      className={`nav-item selector ${
        format.toLowerCase() === currentFormat.toLowerCase() ? 'active' : ''
      }`}
      onClick={() => dispatch(updateActiveFormat(format))}>
      <div className='indicator' />
      <p>{format}</p>
    </button>
  );
};

const mapStateToProps = state => ({
  currentFormat: state.activeFormat,
});

export default connect(mapStateToProps)(FormatSelector);

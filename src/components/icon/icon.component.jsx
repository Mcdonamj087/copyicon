import React, { dangerouslySetInnerHtml } from 'react';
import './icon.styles.scss';

const Icon = props => {
  const decodeHtml = html => {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <button className='icon'>
      <div className='icon-symbol'>{decodeHtml(props.htmlCode)}</div>
      <div className='icon-flavor'>{props.format}</div>
    </button>
  );
};

export default Icon;

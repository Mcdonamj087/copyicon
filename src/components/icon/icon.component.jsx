import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './icon.styles.scss';

const Icon = props => {
  const decodeHtml = html => {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  const [isCopied, setCopied] = useState(false);

  function handleCopy() {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <CopyToClipboard text={props.format} onCopy={() => handleCopy()}>
      <button className={`icon ${isCopied ? 'copied' : ''}`}>
        <div className='icon-symbol'>
          {isCopied ? '👍' : decodeHtml(props.htmlCode)}
        </div>
        <div className='icon-flavor'>{isCopied ? 'copied!' : props.format}</div>
      </button>
    </CopyToClipboard>
  );
};

export default Icon;

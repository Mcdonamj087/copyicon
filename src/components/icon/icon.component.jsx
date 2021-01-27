import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Lottie from 'react-lottie';
import animationData from '../../assets/copyIconAnimation.json';
import { updateSavedIconsList } from '../../redux/saved-icons/saved-icons.actions';
import { connect } from 'react-redux';
import './icon.styles.scss';

const Icon = props => {
  const decodeHtml = html => {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  const [isCopied, setCopied] = useState(false);

  const lottieOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
  };

  function handleCopy(iconObject) {
    setCopied(true);
    props.dispatch(updateSavedIconsList(iconObject));
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <CopyToClipboard text={props.format} onCopy={() => handleCopy(props)}>
      <button className={`icon ${isCopied ? 'copied' : ''}`}>
        <div className='icon-symbol'>
          {isCopied ? (
            <Lottie options={lottieOptions} height={40} width={60} />
          ) : (
            decodeHtml(props.htmlCode)
          )}
        </div>

        <div className='icon-flavor'>{isCopied ? 'copied!' : props.format}</div>
      </button>
    </CopyToClipboard>
  );
};

export default connect()(Icon);

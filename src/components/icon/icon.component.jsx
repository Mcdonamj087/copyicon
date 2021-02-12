import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Lottie from 'react-lottie';
import animationData from '../../assets/copyIconAnimation.json';
import { updateSavedIconsList } from '../../redux/saved-icons/saved-icons.actions';
import { connect } from 'react-redux';
import './icon.styles.scss';

const Icon = React.memo(props => {
  const { activeFormat, dispatch, format, isSaveList, htmlCode } = props;

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

  useEffect(() => {
    console.log('component mounted');
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  });

  function handleCopy(iconObject) {
    setCopied(true);
    dispatch(updateSavedIconsList(iconObject));
  }

  return (
    <CopyToClipboard text={format} onCopy={() => handleCopy(props)}>
      <button
        className={`icon ${isCopied ? 'copied' : ''} ${
          activeFormat.toLowerCase() === 'raw' && !isSaveList
            ? 'format__raw'
            : ''
        }`}>
        <div className='icon-symbol'>
          {isCopied ? (
            <Lottie
              options={lottieOptions}
              height={isSaveList ? 25 : 40}
              width={60}
            />
          ) : (
            decodeHtml(htmlCode)
          )}
        </div>

        <div className='icon-flavor'>{isCopied ? 'copied!' : format}</div>
      </button>
    </CopyToClipboard>
  );
});

Icon.defaultProps = {
  isSaveList: false,
};

const mapStateToProps = ({ activeFormat }) => ({
  activeFormat,
});

export default connect(mapStateToProps)(Icon);

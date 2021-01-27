import React from 'react';
import { connect } from 'react-redux';
import Icon from '../icon/icon.component';

import './copy-again.styles.scss';

const CopyAgain = ({ savedIcons }) => {
  return (
    <div className='copy-again'>
      <span>Copy again:</span>
      <div className='copy-again-list'>
        {savedIcons.length > 0 &&
          savedIcons.map((icon, idx) => (
            <Icon
              key={idx}
              format={icon.format}
              htmlCode={icon.htmlCode}
              isSaveList={true}
            />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ savedIcons }) => ({
  savedIcons,
});

export default connect(mapStateToProps)(CopyAgain);

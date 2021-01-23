import React from 'react';
import './icon-browser.styles.scss';
import Icon from '../icon/icon.component';
import { connect } from 'react-redux';
import { updateActiveCategory } from '../../redux/active-category/active-category.actions';

const IconBrowser = ({ match, symbols, activeFormat, dispatch }) => {
  const category = match.params.category;
  //console.log(category);

  // Update the active category state using category param in url
  // If no category, set active category to null
  dispatch(updateActiveCategory(category || ''));

  // The master symbols object is pulled from redux state
  // The symbols which will display in the icon browser are determined by the category param
  const selectedSymbols = category
    ? symbols.filter(symbol => symbol.id === category)[0].icons
    : symbols.reduce(
        (accumulated, current) => accumulated.concat(current.icons),
        []
      );

  return (
    <div className='icon-browser-container'>
      {selectedSymbols.map(({ name, formats }, idx) => {
        const htmlFormat = formats.entity ? formats.entity : formats.html;
        console.log(htmlFormat);
        return (
          <Icon
            key={`${name}${idx}`}
            htmlCode={formats.html}
            format={
              activeFormat === 'html'
                ? htmlFormat
                : formats[activeFormat.toLowerCase()]
            }
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = ({ symbols, activeFormat }) => ({
  symbols,
  activeFormat,
});

export default connect(mapStateToProps)(IconBrowser);

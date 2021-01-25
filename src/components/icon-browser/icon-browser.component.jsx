import React from 'react';
import './icon-browser.styles.scss';
import Icon from '../icon/icon.component';
import { connect } from 'react-redux';
import { updateActiveCategory } from '../../redux/active-category/active-category.actions';
import { ReactComponent as Astronaut } from '../../assets/astronaut.svg';
import { ReactComponent as Starscape } from '../../assets/star-scape.svg';
import { ReactComponent as StarX } from '../../assets/star-x.svg';

const IconBrowser = ({
  match,
  symbols,
  activeFormat,
  searchValue,
  dispatch,
}) => {
  const category = match.params.category;

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

  const searchFilteredSymbols = selectedSymbols.filter(symbol => {
    const termsToSearch = Object.entries(symbol)
      .reduce((acc, curr) => {
        if (curr[0] === 'name') {
          return acc.concat(curr[1].split(' '));
        }
        if (curr[0] === 'keywords') {
          return acc.concat(curr[1]);
        }
        if (curr[0] === 'formats') {
          return acc.concat(Object.values(curr[1]));
        }
        return false;
      }, [])
      .map(term => term.toLowerCase());

    let matchesAny = false;
    termsToSearch.forEach(term => {
      if (term.includes(searchValue.toLowerCase())) {
        matchesAny = true;
      }
    });

    return matchesAny;
  });

  console.log(searchFilteredSymbols);

  return (
    <div className='icon-browser-container'>
      {
        // if: search returns results, map through icons and display them,
        // else: return a 'no matches found' message
        searchFilteredSymbols.length > 0 ? (
          searchFilteredSymbols.map(({ name, formats }, idx) => {
            // Gets the entity (if one exists), else keeps the html format
            const htmlFormat = formats.entity ? formats.entity : formats.html;
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
          })
        ) : (
          <div className='nada'>
            <Starscape className='starscape' />
            <Astronaut className='astronaut' />
            <p className='message'>No matches found...</p>
          </div>
        )
      }
    </div>
  );
};

const mapStateToProps = ({ symbols, activeFormat, searchValue }) => ({
  symbols,
  activeFormat,
  searchValue,
});

export default connect(mapStateToProps)(IconBrowser);

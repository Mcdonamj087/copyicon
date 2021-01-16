import './App.scss';
import SideNav from './components/side-nav/side-nav.component';
import IconBrowser from './components/icon-browser/icon-browser.component';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

const App = ({ activeCategory }) => {
  return (
    <div className='wrapper'>
      <Route path='/' component={SideNav} />
      <Route path='/:category?' component={IconBrowser} />
    </div>
  );
};

const mapStateToProps = ({ activeCategory }) => ({
  activeCategory: activeCategory,
});

export default connect(mapStateToProps)(App);

import './App.scss';
import SideNav from './components/side-nav/side-nav.component';
import Header from './components/header/header.component';
import IconBrowser from './components/icon-browser/icon-browser.component';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

const App = ({ activeCategory }) => {
  return (
    <div className='wrapper'>
      <Route path='/' component={SideNav} />
      <main className='main-canvas'>
        <Header />
        <Route path='/:category?' component={IconBrowser} />
      </main>
    </div>
  );
};

const mapStateToProps = ({ activeCategory }) => ({
  activeCategory: activeCategory,
});

export default connect(mapStateToProps)(App);

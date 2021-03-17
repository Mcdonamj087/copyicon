import './App.scss';
import SideNav from './components/side-nav/side-nav.component';
import Header from './components/header/header.component';
import IconBrowser from './components/icon-browser/icon-browser.component';
import { Route } from 'react-router-dom';

const App = () => {
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

export default App;

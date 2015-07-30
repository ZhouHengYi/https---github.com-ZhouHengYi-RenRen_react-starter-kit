/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './App.less';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import Header from '../Header';
import IndexPage from '../IndexPage';
import ContentPage from '../ContentPage';
import ContactPage from '../ContactPage';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';
import NotFoundPage from '../NotFoundPage';

import Footer from '../Footer';
import FreeGuide from '../FreeGuide';
import StudySolution from '../FreeGuide/StudySolution';
import OpenClass from '../OpenClass/OpenClass';
import Jp from '../FourCountryPage/JP';
import USA from '../FourCountryPage/USA';
import UK from '../FourCountryPage/UK';
import AUS from '../FourCountryPage/AUS';

const pages = { IndexPage,ContentPage, ContactPage, LoginPage, RegisterPage, NotFoundPage,FreeGuide,StudySolution,OpenClass,Jp,USA,UK,AUS };

@withContext
@withStyles(styles)
class App {

  static propTypes = {
    path: PropTypes.string.isRequired
  };

  componentDidMount() {
    window.addEventListener('popstate', this.handlePopState);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopState);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.path !== nextProps.path;
  }

  render() {
    let component;

    switch (this.props.path) {
        case '/':
            component = <IndexPage />;
            break;
        case '/about':
        case '/privacy':
            let page = AppStore.getPage(this.props.path);
            component = React.createElement(pages[page.component], page);
            break;
        case '/contact':
            component = <ContactPage />;
            break;
        case '/login':
            component = <LoginPage />;
            break;
        case '/register':
            component = <RegisterPage />;
            break;
        case '/FreeGuide':
            component = <FreeGuide />;
            break;
        case '/StudySolution_USA':
            component = <StudySolution />;
            break;
        case '/StudySolution_AUS':
            component = <StudySolution />;
            break;
        case '/StudySolution_JP':
            component = <StudySolution />;
            break;
        case '/StudySolution_UK':
            component = <StudySolution />;
            break;
        case '/OpenClass':
            component = <OpenClass />;
            break;
        case '/Jp':
            component = <Jp />;
            break;
        case '/USA':
            component = <USA />;
            break;
        case '/UK':
            component = <UK />;
            break;
        case '/AUS':
            component = <AUS />;
            break;
        default :
            component = <IndexPage />;
            break;
    }

    return component ? (
      <div>
        <Header />
        {component}
        <Footer />
      </div>
    ) : <NotFoundPage />;
  }

  handlePopState(event) {
    AppActions.navigateTo(window.location.pathname, {replace: !!event.state});
  }

}

export default App;

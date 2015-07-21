/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './App.less';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';

import Header from '../Header';
import IndexPage from '../IndexPage'
import NotFoundPage from '../NotFoundPage';

const pages = {  IndexPage,NotFoundPage};

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
    console.log(this.props.path);
    switch (this.props.path) {
      case '/':
        component = <IndexPage />;
        break;
      case 'default':
        component = <IndexPage />;
        break;
      default :
        component = <IndexPage />;
        break;
    }

    return component ? (
        <div>
          <Header />
          {component}
        </div>
    ) : <NotFoundPage />;
  }

  handlePopState(event) {
    AppActions.navigateTo(window.location.pathname, {replace: !!event.state});
  }

}

export default App;

/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './App.less';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';

import Header from '../Header';
import IndexPage from '../IndexPage';
import FreeToDealWithPage from '../FreeToDealWithPage';
import NotFoundPage from '../NotFoundPage';

const pages = {  IndexPage,NotFoundPage,FreeToDealWithPage};

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
      case '/FreeToDealWithPage':
        component = <FreeToDealWithPage />;
        break;
      default :
        component = <IndexPage />;
        break;
    }

    return component ? (
        <div>
          <Header />
          {component}
          <footer>
            <div className="QR">
              <ul id="QR">
                <li className="weibo">
                  <div className="qr-view">
                    <div className="qr-box"><img src="/WebResources/Default/images/qr/weibo.jpg" /></div>
                  </div>
                </li>
                <li className="weixin">
                  <div className="qr-view">
                    <div className="qr-box"><img src="/WebResources/Default/images/qr/weixin.jpg" /></div>
                  </div>
                </li>
                <li className="renren">
                </li>
              </ul>
              <div className="clear"></div>
              <hr />
            </div>
            <div className="clear"></div>
            <div className="menu">
              <ul className="first">
                <li><b>关于</b></li>
                <li><a href="#">关于我们</a></li>
                <li><a href="#">渠道合作</a></li>
                <li><a href="#">联系我们</a></li>
                <li><a href="#">荣誉报道</a></li>
              </ul>
              <ul className="second">
                <li><b>帮助</b></li>
                <li><a href="/register.aspx">用户注册</a></li>
                <li><a className="login-button">用户登录</a></li>
                <li><a className="forgotpass-button">找回密码</a></li>
                <li><a href="#">给我留言</a></li>
              </ul>
              <ul className="third">
                <li><b>社交</b></li>
                <li><a href="http://weibo.com/u/5395532052?from=myfollow_all">人人日本</a></li>
                <li><a href="http://weibo.com/u/5395532052?from=myfollow_all">人人美国</a></li>
                <li><a href="http://weibo.com/u/5395532052?from=myfollow_all">人人英国</a></li>
                <li><a href="http://weibo.com/u/5395532052?from=myfollow_all">人人澳洲</a></li>
              </ul>
            </div>
            <div className="clear"></div>
            <p>© Copyright 2015 www.rrliuxue.com</p>
          </footer>
        </div>
    ) : <NotFoundPage />;
  }

  handlePopState(event) {
    AppActions.navigateTo(window.location.pathname, {replace: !!event.state});
  }

}

export default App;

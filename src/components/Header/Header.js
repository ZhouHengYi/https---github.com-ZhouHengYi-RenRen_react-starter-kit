/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import classNames from 'classnames';
import styles from './Header.less';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';

@withStyles(styles)
class Header {

  render() {
    return (
        <div className={classNames(this.props.className, 'Header')} role="navigation">
          <header className="nav  sticky-header-pinned">
            <div className="nav-box">
              <div className="header-box">
                <div className="logo"><a href="/" onClick={Link.handleClick}><img src={require('./logo.png')} alt="人人留学" /></a></div>
                <div className="language">
                  <div className="line">
                    <a href="/USA" className="first" onClick={Link.handleClick}><img src={require('./USA.png')}/>美国</a>
                    <a href="/UK" onClick={Link.handleClick}><img src={require('./UK.png')} />英国</a>
                  </div>
                  <div>
                    <a href="/Jp" className="first" onClick={Link.handleClick}><img src={require('./JP.png')} />日本</a>
                    <a href="/AUS" onClick={Link.handleClick}><img src={require('./AUS.png')} />澳洲</a>
                  </div>
                </div>
                <div className="menu-box">
                  <ul className="menu" id="menu">
                    <li className=""><a className="home-menu" href="/" onClick={Link.handleClick}></a><div className="bg"></div></li>
                    <li><a className="free-menu" href="/FreeGuide" onClick={Link.handleClick}></a><div className="bg"></div></li>
                    <li><a className="open-class-menu" href="/OpenClass" onClick={Link.handleClick} ></a><div className="bg"></div></li>
                    <li><a className="news-menu" href="/advisory-library.aspx" onClick={Link.handleClick}></a><div className="bg"></div></li>
                    <li><a className="college-menu" href="/college.aspx" onClick={Link.handleClick}></a><div className="bg"></div></li>
                    <li className="disabled"><a className="tutor-menu" href="#" onClick={Link.handleClick}></a><div className="bg"></div></li>
                  </ul>
                </div>
                <div className="clear"></div>
              </div>
              <div className="clear"></div>
            </div>
          </header>
        </div>
    );
  }

}

export default Header;

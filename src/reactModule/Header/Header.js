/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import Link from '../../utils/Link';

class Header {

  render() {
    return (
    <header className="nav">
      <div className="nav-box">
        <div className="header-box">
          <div className="logo"><a href="/"><img src="{require('./logo.png')}" alt="人人留学" /></a></div>
          <div className="language">
            <div className="line">
              <a href="/USA.aspx" className="first"><img src="{require('./USA.png')}" />美国</a>
              <a href="/UK.aspx"><img src="{require('./UK.png')}" />英国</a>
            </div>
            <div>
              <a href="/JP.aspx" className="first"><img src="{require('./JP.png')}" />日本</a>
              <a href="/AUS.aspx"><img src="{require('./AUS.png')}" />澳洲</a>
            </div>
          </div>
          <div className="menu-box">
            <ul className="menu" id="menu">
              <li className=""><a className="home-menu" href="/"></a><div className="bg"></div></li>
              <li><a className="free-menu" href="/free-for-guide-page.aspx"></a><div className="bg"></div></li>
              <li><a className="open-className-menu" href="/open-className.aspx"></a><div className="bg"></div></li>
              <li><a className="news-menu" href="/advisory-library.aspx"></a><div className="bg"></div></li>
              <li><a className="college-menu" href="/college.aspx"></a><div className="bg"></div></li>
              <li className="disabled"><a className="tutor-menu" href="#"></a><div className="bg"></div></li>
            </ul>
          </div>
          <div className="clear"></div>
        </div>
        <div className="clear"></div>
      </div>
    </header>
    );
  }

}

export default Header;

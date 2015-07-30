/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Footer.less';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';
import $ from 'jquery';

@withViewport
@withStyles(styles)
class Footer {

  static propTypes = {
    viewport: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  };

  render() {
    // This is just an example how one can render CSS
    let { width, height } = this.props.viewport;
    this.renderCss(`.Footer-viewport:after {content:' ${width}x${height}';}`);

    return (
      <div>
        <footer>
          <div className="QR">
            <ul id="QR">
              <li className="weibo">
                <div className="qr-view">
                  <div className="qr-box"><img src="http://new.rrliuxue.com/WebResources/Default/images/qr/weibo.jpg" /></div>
                </div>
              </li>
              <li className="weixin">
                <div className="qr-view">
                  <div className="qr-box"><img src="http://new.rrliuxue.com/WebResources/Default/images/qr/weixin.jpg" /></div>
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
    );
  }
  componentDidMount() {
    $("#QR").find("li").hover(function () {
      $(this).addClass("hover");
      $(this).find(".qr-view").fadeIn();
    }, function () {
      $(this).find(".qr-view").hide();
      $(this).removeClass("hover");
    });
  }
}

export default Footer;

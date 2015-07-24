/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';

class Banner_Index {
  render() {
    return (
      <section className="banner">
        <div id="da-slider" className="slideshow da-slider">
          <div className="da-slide home-banner1 da-slide-current" data-bg="url(http://new.rrliuxue.com/WebResources/Default/images/banner/home/sky.png) no-repeat 25% top #49c4fa">
            <h2>
              <img src="http://new.rrliuxue.com/WebResources/Default/images/banner/home/plane.png" /></h2>
            <p>
              <img src="http://new.rrliuxue.com/WebResources/Default/images/banner/home/2015.png" alt="2015 带你留学" />
            </p>
            <div className="da-img">
              <img src="http://new.rrliuxue.com/WebResources/Default/images/banner/home/multiple-country.png" />
            </div>
          </div>
          <div className="da-slide home-banner2" data-bg="url(public/Default/images/banner/home/2/bg.jpg) no-repeat center top #2d2f3e">
            <div className="slide-img-box">
              <div className="slide-img-content">
                <div className="arrow">
                  <img src="http://new.rrliuxue.com/WebResources/Default/images/banner/home/2/arrow.png" />
                </div>
                <div className="text-content">
                  <div className="text1">
                    <img src="http://new.rrliuxue.com/WebResources/Default/images/banner/home/2/text1.png" />
                  </div>
                  <div className="text2">
                    <img src="http://new.rrliuxue.com/WebResources/Default/images/banner/home/2/text2.png" />
                  </div>
                  <div className="text3">
                    <img src="http://new.rrliuxue.com/WebResources/Default/images/banner/home/2/text3.png" />
                  </div>
                </div>
                <div className="clear"></div>
              </div>
            </div>
          </div>
          <div className="da-slide home-banner3" data-bg="url(public/Default/images/banner/home/3/bg.jpg) no-repeat center top #fcba1e">
            <div className="slide-img-box">
              <div className="slide-img-content">
                <div className="text1">
                  <img src="http://new.rrliuxue.com/WebResources/Default/images/banner/home/3/text1.png" />
                </div>
                <div className="text2">
                  <img src="http://new.rrliuxue.com/WebResources/Default/images/banner/home/3/text2.png" />
                </div>
                <div className="text3">
                  <img src="http://new.rrliuxue.com/WebResources/Default/images/banner/home/3/text3.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="slider-nav">
            <div className="da-dots"></div>
            <div className="da-arrows">
                    <span className="da-arrows-prev">
                        <img src="http://new.rrliuxue.com/WebResources/Default/images/banner-carousel-left.png" /></span>
                    <span className="da-arrows-next">
                        <img src="http://new.rrliuxue.com/WebResources/Default/images/banner-carousel-right.png" /></span>
            </div>
          </div>
        </div>
        <div className="plan-box">
          <form id="planForm" method="post" action="#" autocomplete="off">
            <h1>免费获取留学方案</h1>
            <ul className="country" id="planCountry">
              <li className="first" data-country="UK">
                <img src="http://new.rrliuxue.com/WebResources/Default/images/plan/plan-uk.png" /><div className="bg"></div>
                <div className="activeicon"></div>
              </li>
              <li className="second" data-country="USA">
                <img src="http://new.rrliuxue.com/WebResources/Default/images/plan/plan-usa.png" /><div className="bg"></div>
                <div className="activeicon"></div>
              </li>
              <li className="third" data-country="AUS">
                <img src="http://new.rrliuxue.com/WebResources/Default/images/plan/plan-aus.png" /><div className="bg"></div>
                <div className="activeicon"></div>
              </li>
              <li className="fourth active" data-country="JP">
                <img src="http://new.rrliuxue.com/WebResources/Default/images/plan/plan-jp.png" /><div className="bg"></div>
                <div className="activeicon"></div>
              </li>
            </ul>
            <div className="clear"></div>
            <ul className="other">
              <li>
                <select className="selectpicker show-menu-arrow form-control" id="date">
                  <option value="">计划出国时间</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                </select>
              </li>
              <li>
                <select className="selectpicker show-menu-arrow form-control" id="grade">
                  <option value="">目前就读年级</option>
                  <option value="一年级">一年级</option>
                  <option value="二年级">二年级</option>
                </select>
              </li>
              <li>
                <button className="btn-plan" type="submit">获取留学方案</button>
              </li>
            </ul>
            <div className="bottom">
              <p>人人留学为什么免费？ </p>
              <div className="message">
                已有<span>2036</span>位小伙伴加入人人留学, <a href="/register.aspx">我要加入</a>
              </div>
            </div>
          </form>
        </div>
      </section>

    );
  }
}

export default Banner_Index;

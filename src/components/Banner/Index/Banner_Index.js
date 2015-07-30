/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
var Select = require('rc-select');
var Option = Select.Option;

import styles from "./Select.less";
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';
import Slide from "./Slide/Slide.js";
import $ from 'jquery'

@withStyles(styles)
class Banner_Index {
  render() {
    return (
      <section className="banner">
        <Slide />
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
              <li id="selectO">
                <Select value="计划出国时间" style={{width:270,height:45}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChange}>
                  <Option value="计划出国时间" desc="计划出国时间">计划出国时间</Option>
                  <Option value="2015" desc="2015 ">2015</Option>
                  <Option value="2014" desc="2014">2014</Option>
                  <Option value="2013" desc="2013">2013</Option>
                </Select>
              </li>
              <li id="select1">
                <Select value="目前就读年级" style={{width:270,height:45}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChange}>
                  <Option value="目前就读年级" desc="目前就读年级">目前就读年级</Option>
                  <Option selected="selected" value="本科大四">本科大四</Option>
                  <Option value="本科大三">本科大三</Option>
                  <Option value="本科大二">本科大二</Option>
                  <Option value="本科大一">本科大一</Option>
                  <Option value="大专大三">大专大三</Option>
                  <Option value="大专大二">大专大二</Option>
                  <Option value="大专大一">大专大一</Option>
                  <Option value="高三">高三</Option>
                  <Option value="高二">高二</Option>
                  <Option value="高一">高一</Option>
                  <Option value="初三">初三</Option>
                  <Option value="初二">初二</Option>
                  <Option value="初一">初一</Option>
                  <Option value="硕士毕业已工作">硕士毕业已工作</Option>
                  <Option value="硕士在读">硕士在读</Option>
                  <Option value="本科毕业已工作">本科毕业已工作</Option>
                  <Option value="大专毕业三年以上">大专毕业三年以上</Option>
                  <Option value="大专毕业三年以下">大专毕业三年以下</Option>
                  <Option value="高三毕业已工作">高三毕业已工作</Option>
                </Select>
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
  //dom加载完调用
  componentDidMount(){
    $(document).ready(function(){
      $("#planCountry").find("li").click(function () {
        $(this).parent().find("li").removeClass("active");
        $(this).addClass("active");
      });
    })
  }
}

export default Banner_Index;

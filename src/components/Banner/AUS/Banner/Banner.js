/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Banner.less';
import withStyles from '../../../../decorators/withStyles';
import Link from '../../../../utils/Link';

import $ from 'jquery';
var CSlider = require('react-slick');
var Select = require('rc-select');
var Option = Select.Option;

@withStyles(styles)
class Banner {

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
        };
        return (
            <section className="banner">
                <div id="da-slider" className="slideshow da-slider">
                    <CSlider {...settings}>
                        <div className="da-slide aus-banner1" data-bg="url(WebResources/Default/images/banner/AUS/bg.jpg) no-repeat center top #000">
                            <h2>
                                <img src="http://new.rrliuxue.com/WebResources/Default/images/banner/AUS/text.png" /></h2>
                        </div>
                        <div className="da-slide aus-banner1" data-bg="url(WebResources/Default/images/banner/AUS/bg.jpg) no-repeat center top #000">
                            <h2>
                                <img src="http://new.rrliuxue.com/WebResources/Default/images/banner/AUS/text.png" /></h2>
                        </div>
                        <div className="da-slide aus-banner1" data-bg="url(WebResources/Default/images/banner/AUS/bg.jpg) no-repeat center top #000">
                            <h2>
                                <img src="http://new.rrliuxue.com/WebResources/Default/images/banner/AUS/text.png" /></h2>
                        </div>
                    </CSlider>
                    <div className="bgShadow"></div>
                </div>
                <div className="plan-box">
                    <form id="planForm" method="post" action="#" autocomplete="off">
                        <h1>免费获取澳洲留学方案</h1>
                        <input type="hidden" id="planCountry" data-country="AUS" />
                        <ul>
                            <li>
                                <Select value="计划出国时间" style={{width:270,height:45}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChange}>
                                    <Option value="计划出国时间" desc="计划出国时间">计划出国时间</Option>
                                    <Option value="2015" desc="2015 ">2015</Option>
                                    <Option value="2014" desc="2014">2014</Option>
                                    <Option value="2013" desc="2013">2013</Option>
                                </Select>
                            </li>
                            <li>
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
    componentDidMount() {
        $(".bgShadow").hide();
    }
}

export default Banner;
/**
 * Created by XiaoKangZheng on 2015/7/28.
 */

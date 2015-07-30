/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
import React, { PropTypes } from 'react';

import styles from './Bachelor.less';
import withStyles from '../../../../decorators/withStyles';
import Link from '../../../../utils/Link';

var CSlider = require('react-slick');
var Select = require('rc-select');
import $ from 'jquery';

@withStyles(styles)
class Bachelor {

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: false,
        };
        return (
            <div id="bachelor" className="study-abroad-box tab-content-box">
                <div className="review-box">
                    <div className="major">
                        <h4><a href="/advisory-library-detail.aspx">全国巡讲回顾</a></h4>
                        <div className="description">2015开年巨献，听牛津、剑桥、全奖录取导师，为大家带来最有价值的美国留学申请指导课程。</div>
                    </div>
                    <div className="hr"></div>
                </div>
                <div className="advertisement-box">
                    <a href="#">
                        <img src="http://new.rrliuxue.com/WebResources/Default/images/study-abroad/1.jpg" /></a>
                    <a href="/college-rank.aspx?country=USA&type=list">
                        <img src="http://new.rrliuxue.com/WebResources/Default/images/study-abroad/3.jpg" /></a>
                </div>
                <div className="third-box">
                    <div className="minor-tabs tabs-box">
                        <div className="tabs">
                            <div className="item" data-content="#enroll" data-value="录取捷报">录取捷报</div>
                            <div className="item" data-content="#apply" data-value="申请技巧">申请技巧</div>
                            <div className="clear"></div>
                        </div>
                        <div className="tab-content">
                            <div id="apply" className="skill-box tab-content-box"></div>
                            <div id="enroll" className="skill-box tab-content-box"></div>
                        </div>
                    </div>
                    <div className="hr"></div>
                    <div className="education-school">
                        <div className="school-container">
                            <CSlider {...settings}>
                                <div className="slide">
                                    <a href="/college-detail.aspx">
                                        <img src="http://new.rrliuxue.com/WebResources/Default/images/study-abroad/school1.png" /></a>
                                </div>
                                <div className="slide">
                                    <a href="/college-detail.aspx">
                                        <img src="http://new.rrliuxue.com/WebResources/Default/images/study-abroad/school2.png" /></a>
                                </div>
                                <div className="slide">
                                    <a href="/college-detail.aspx">
                                        <img src="http://new.rrliuxue.com/WebResources/Default/images/study-abroad/school1.png" /></a>
                                </div>
                                <div className="slide">
                                    <a href="/college-detail.aspx">
                                        <img src="http://new.rrliuxue.com/WebResources/Default/images/study-abroad/school2.png" /></a>
                                </div>
                                <div className="slide">
                                    <a href="/college-detail.aspx">
                                        <img src="http://new.rrliuxue.com/WebResources/Default/images/study-abroad/school1.png" /></a>
                                </div>
                                <div className="slide">
                                    <a href="/college-detail.aspx">
                                        <img src="http://new.rrliuxue.com/WebResources/Default/images/study-abroad/school2.png" /></a>
                                </div>
                                <div className="slide">
                                    <a href="/college-detail.aspx">
                                        <img src="http://new.rrliuxue.com/WebResources/Default/images/study-abroad/school1.png" /></a>
                                </div>
                                <div className="slide">
                                    <a href="/college-detail.aspx">
                                        <img src="http://new.rrliuxue.com/WebResources/Default/images/study-abroad/school2.png" /></a>
                                </div>
                                <div className="slide">
                                    <a href="/college-detail.aspx">
                                        <img src="http://new.rrliuxue.com/WebResources/Default/images/study-abroad/school1.png" /></a>
                                </div>
                                <div className="slide">
                                    <a href="/college-detail.aspx">
                                        <img src="http://new.rrliuxue.com/WebResources/Default/images/study-abroad/school2.png" /></a>
                                </div>
                                <div className="slide">
                                    <a href="/college-detail.aspx">
                                        <img src="http://new.rrliuxue.com/WebResources/Default/images/study-abroad/school1.png" /></a>
                                </div>
                                <div className="slide">
                                    <a href="/college-detail.aspx">
                                        <img src="http://new.rrliuxue.com/WebResources/Default/images/study-abroad/school2.png" /></a>
                                </div>
                            </CSlider>
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        );
    }

}

export default Bachelor;
/**
 * Created by XiaoKangZheng on 2015/7/28.
 */

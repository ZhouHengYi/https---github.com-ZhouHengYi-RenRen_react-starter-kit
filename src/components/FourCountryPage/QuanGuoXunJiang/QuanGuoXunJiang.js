/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './QuanGuoXunJiang.less';
import withStyles from '../../../decorators/withStyles';
import Link from '../../../utils/Link';

import $ from 'jquery';

@withStyles(styles)
class QuanGuoXunJiang {
    render() {
        return (
            <section className="country-education-study-abroad">
                <div className="major-tabs-box">
                    <div className="major-tabs">
                        <div className="item bachelor selected" data-content="#bachelor" data-value="本科留学">
                            <div className="title">本科留学</div>
                            <div className="more"><a href="/advisory-library.aspx?country=JP&tags=本科留学">查看全部 ></a></div>
                            <div className="clear"></div>
                        </div>
                        <div className="item master" data-content="#master" data-value="硕士留学">
                            <div className="title">硕士留学</div>
                            <div className="more"><a href="/advisory-library.aspx?country=JP&tags=硕士留学">查看全部 ></a></div>
                            <div className="clear"></div>
                        </div>
                        <div className="item high" data-content="#high" data-value="高中留学">
                            <div className="title">高中留学</div>
                            <div className="more"><a href="/advisory-library.aspx?country=JP&tags=高中留学">查看全部 ></a></div>
                            <div className="clear"></div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="major-tab-content">
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
                                    <img src="WebResources/Default/images/study-abroad/1.jpg" /></a>
                                <a href="/college-rank.aspx?country=JP&type=list">
                                    <img src="WebResources/Default/images/study-abroad/5.jpg" /></a>
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
                                        <div className="slide"><a href="/college-detail.aspx"><img src="WebResources/Default/images/study-abroad/school1.png" /></a></div>
                                        <div className="slide"><a href="/college-detail.aspx"><img src="WebResources/Default/images/study-abroad/school2.png" /></a></div>
                                        <div className="slide"><a href="/college-detail.aspx"><img src="WebResources/Default/images/study-abroad/school1.png" /></a></div>
                                        <div className="slide"><a href="/college-detail.aspx"><img src="WebResources/Default/images/study-abroad/school2.png" /></a></div>
                                        <div className="slide"><a href="/college-detail.aspx"><img src="WebResources/Default/images/study-abroad/school1.png" /></a></div>
                                        <div className="slide"><a href="/college-detail.aspx"><img src="WebResources/Default/images/study-abroad/school2.png" /></a></div>
                                        <div className="slide"><a href="/college-detail.aspx"><img src="WebResources/Default/images/study-abroad/school1.png" /></a></div>
                                        <div className="slide"><a href="/college-detail.aspx"><img src="WebResources/Default/images/study-abroad/school2.png" /></a></div>
                                        <div className="slide"><a href="/college-detail.aspx"><img src="WebResources/Default/images/study-abroad/school1.png" /></a></div>
                                        <div className="slide"><a href="/college-detail.aspx"><img src="WebResources/Default/images/study-abroad/school2.png" /></a></div>
                                        <div className="slide"><a href="/college-detail.aspx"><img src="WebResources/Default/images/study-abroad/school1.png" /></a></div>
                                        <div className="slide"><a href="/college-detail.aspx"><img src="WebResources/Default/images/study-abroad/school2.png" /></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

export default QuanGuoXunJiang;
/**
 * Created by XiaoKangZheng on 2015/7/28.
 */

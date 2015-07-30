/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './HotSchool.less';
import withStyles from '../../../decorators/withStyles';
import Link from '../../../utils/Link';

import $ from 'jquery';

@withStyles(styles)
class HotSchool {
    render() {
        return (
            <div className="country-school-list">
                <h2>热门学校</h2>
                <div className="hot-school-box">
                    <div className="school-detail">
                        <div className="school-pic">
                            <a href="/college-detail.aspx"><img src="http://new.rrliuxue.com/WebResources/Default/images//hot-school/hot-school-detail.png" /></a>
                        </div>
                        <div className="school-info">
                            <h3><a href="/college-detail.aspx">哈佛大学</a></h3>
                            <div className="location">美国</div>
                            <div className="description">哈佛大学（Harvard University），简称哈佛，坐落于美国马萨诸塞州剑桥市，是一所享誉世界的私立研究型大学，是著名的常春藤...</div>
                            <div className="action"><a href="/college-detail.aspx">详情</a></div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="school-list">
                        <div className="item">
                            <a href="/college-detail.aspx">
                                <img src="http://new.rrliuxue.com/WebResources/Default/images/hot-school/1.png" />
                                <div className="title-box">
                                    <div className="title">牛津大学</div>
                                    <div className="bg"></div>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/college-detail.aspx">
                                <img src="http://new.rrliuxue.com/WebResources/Default/images/hot-school/2.png" />
                                <div className="title-box">
                                    <div className="title">伊顿大学</div>
                                    <div className="bg"></div>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/college-detail.aspx">
                                <img src="http://new.rrliuxue.com/WebResources/Default/images/hot-school/3.png" />
                                <div className="title-box">
                                    <div className="title">曼彻斯特大学</div>
                                    <div className="bg"></div>
                                </div>
                            </a>
                        </div>
                        <div className="item more">
                            <a href="/college.aspx">
                                <div className="title-box">
                                    <div className="title">查看全部</div>
                                    <div className="bg"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        );
    }

}

export default HotSchool;
/**
 * Created by XiaoKangZheng on 2015/7/28.
 */

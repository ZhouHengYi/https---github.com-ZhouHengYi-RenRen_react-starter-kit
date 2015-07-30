/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
import React, { PropTypes } from 'react';
import styles from './OpenClass.less';
import withStyles from '../../../decorators/withStyles';
import Link from '../../../utils/Link';

import $ from 'jquery';

@withStyles(styles)
class OpenClass {
    render() {
        return (
            <section className="open-class">
                <div className="section-title">
                    <h1>公开课</h1>
                    <div className="clear"></div>
                </div>
                <div className="open-class-content">
                    <div className="content">
                        <div className="first-box">
                            <div className="search-class">
                                <div className="search-class-input" data-country="JP">
                                    <input type="text" placeholder="搜索课程" />
                                    <button type="button">&nbsp;</button>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            <div className="new-class">
                                <div className="class-info">
                                    <a href="/open-class-detail.aspx">
                                        <img src="http://new.rrliuxue.com/WebResources/Default/images/open-class/new-class.jpg" /></a>
                                </div>
                                <div className="class-desc">
                                    <div className="date">05月04日&nbsp;&nbsp;19:30分</div>
                                    <div className="detail"><a href="/open-class-detail.aspx">即将开课 ></a></div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            <div className="other-class">
                                <ul>
                                    <li>
                                        <img src="http://new.rrliuxue.com/WebResources/Default/images/open-class/other-class.png" />
                                        <div className="title-box">
                                            <div className="title">
                                                <h5><a href="/open-class-detail.aspx">飞机前的准备</a></h5>
                                                <div className="lecturer">主讲人：张某某</div>
                                                <div className="description">已预约<span className="number">1860</span>人<span className="date">4月19日</span>19：30</div>
                                            </div>
                                            <div className="title-bg"></div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="http://new.rrliuxue.com/WebResources/Default/images/open-class/other-class.png" />
                                        <div className="title-box">
                                            <div className="title">
                                                <h5><a href="/open-class-detail.aspx">飞机前的准备</a></h5>
                                                <div className="lecturer">主讲人：张某某</div>
                                                <div className="description">已预约<span className="number">1860</span>人<span className="date">4月19日</span>19：30</div>
                                            </div>
                                            <div className="title-bg"></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    componentDidMount() {
        $(document).ready(function() {
            $(".other-class").find("li").hover(function () {
                console.log(1);
                $(this).find(".title-bg").show();
                $(this).find("h5").animate({ top: "0", opacity: 1 }, 400).css({ flter: "Alpha(Opacity=100)" });
                $(this).find(".lecturer").animate({ opacity: 1 }, 400).css({ flter: "Alpha(Opacity=100)" });
                $(this).find(".description").animate({ top: "0", opacity: 1 }, 400).css({ flter: "Alpha(Opacity=100)" });
            }, function () {
                $(this).find("h5").stop();
                $(this).find(".lecturer").stop();
                $(this).find(".description").stop();
                $(this).find(".title-bg").hide();
                $(this).find("h5").css("top", "-15px").css("opacity", 0).css({ flter: "Alpha(Opacity=0)" });
                $(this).find(".lecturer").css("opacity", 0).css({ flter: "Alpha(Opacity=0)" });
                $(this).find(".description").css("top", "15px").css("opacity", 0).css({ flter: "Alpha(Opacity=0)" });


            });
        });
    }
}

export default OpenClass;
/**
 * Created by XiaoKangZheng on 2015/7/28.
 */

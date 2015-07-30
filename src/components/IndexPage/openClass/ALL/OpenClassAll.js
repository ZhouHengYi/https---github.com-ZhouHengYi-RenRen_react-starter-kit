/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import withStyles from '../../../../decorators/withStyles';

class OpenClassAll{
    render() {
        return (
            <div className="content" id="allClass">
                <div className="first-box">
                    <div className="search-class">
                        <div className="search-class-input">
                            <input type="text" placeholder="搜索课程"/>
                            <button type="button">&nbsp;</button>
                            <div className="clear"></div>
                        </div>
                    </div>
                    <div className="new-class">
                        <div className="class-info">
                            <a href="/open-class-detail.aspx">
                                <img
                                    src="http://new.rrliuxue.com/WebResources/Default/images/open-class/new-class.jpg"/></a>
                        </div>
                        <div className="class-desc">
                            <div className="date">05月04日&nbsp;&nbsp;19:30分</div>
                            <div className="detail"><a href="/open-class-detail.aspx">即将开课 ></a></div>
                            <div className="clear"></div>
                        </div>
                    </div>
                    <div className="student-evaluation">
                        <h1>学员评价</h1>

                        <div className="evaluation-list">
                            <div className="evaluation-item">
                                <div className="head-pic">
                                    <img
                                        src="http://new.rrliuxue.com/WebResources/Default/images/open-class/head-pic1.png"/>
                                </div>
                                <div className="evaluation-info">
                                    <div className="student-name">Cidy</div>
                                    <div className="class-name"><a href="#">气候模式及预测</a></div>
                                </div>
                                <div className="clear"></div>
                                <div className="evaluation-content">这里是评论内容这里是评论内容这里是评论内容</div>
                            </div>
                            <div className="evaluation-item">
                                <div className="head-pic">
                                    <img
                                        src="http://new.rrliuxue.com/WebResources/Default/images/open-class/head-pic2.png"/>
                                </div>
                                <div className="evaluation-info">
                                    <div className="student-name">我不帅</div>
                                    <div className="class-name"><a href="#">人类学</a></div>
                                </div>
                                <div className="clear"></div>
                                <div className="evaluation-content">这里是评论内容这里是评论内容这里是评论内容</div>
                            </div>
                        </div>
                        <div className="clear"></div>
                        <div className="more"><a href="#">更多评价 ></a></div>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="list-box">
                    <div className="class-list">
                        <div className="class-item">
                            <div className="class-pic">
                                <a href="/open-class-detail.aspx">
                                    <img
                                        src="http://new.rrliuxue.com/WebResources/Default/images/open-class/1.jpg"/></a>
                            </div>
                            <div className="class-desc">
                                <h1><a href="/open-class-detail.aspx">课程名称</a></h1>

                                <div className="speaker">主讲人：<span>某某某</span></div>
                                <div className="class-info">预约：<span className="population">1860</span>
                                    人&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span
                                        className="date">4月19日  19:30</span>
                                </div>
                                <div className="action">
                                    <a href="/open-class-detail.aspx">我要预约</a>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="class-item">
                            <div className="class-pic">
                                <a href="/open-class-detail.aspx">
                                    <img
                                        src="http://new.rrliuxue.com/WebResources/Default/images/open-class/1.jpg"/></a>
                            </div>
                            <div className="class-desc">
                                <h1><a href="/open-class-detail.aspx">课程名称</a></h1>

                                <div className="speaker">主讲人：<span>某某某</span></div>
                                <div className="class-info">预约：<span className="population">1860</span>
                                    人&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span
                                        className="date">4月19日  19:30</span>
                                </div>
                                <div className="action">
                                    <a href="/open-class-detail.aspx">我要预约</a>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="class-item">
                            <div className="class-pic">
                                <a href="/open-class-detail.aspx">
                                    <img
                                        src="http://new.rrliuxue.com/WebResources/Default/images/open-class/2.jpg"/></a>
                            </div>
                            <div className="class-desc">
                                <h1><a href="/open-class-detail.aspx">课程名称</a></h1>

                                <div className="speaker">主讲人：<span>某某某</span></div>
                                <div className="class-info">预约：<span className="population">1860</span>
                                    人&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span
                                        className="date">4月19日  19:30</span>
                                </div>
                                <div className="action">
                                    <a href="/open-class-detail.aspx">我要预约</a>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="class-item">
                            <div className="class-pic">
                                <a href="/open-class-detail.aspx">
                                    <img
                                        src="http://new.rrliuxue.com/WebResources/Default/images/open-class/2.jpg"/></a>
                            </div>
                            <div className="class-desc">
                                <h1><a href="/open-class-detail.aspx">课程名称</a></h1>

                                <div className="speaker">主讲人：<span>某某某</span></div>
                                <div className="class-info">预约：<span className="population">1860</span>
                                    人&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span
                                        className="date">4月19日  19:30</span>
                                </div>
                                <div className="action">
                                    <a href="/open-class-detail.aspx">我要预约</a>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="class-item">
                            <div className="class-pic">
                                <a href="/open-class-detail.aspx">
                                    <img
                                        src="http://new.rrliuxue.com/WebResources/Default/images/open-class/3.jpg"/></a>
                            </div>
                            <div className="class-desc">
                                <h1><a href="/open-class-detail.aspx">课程名称</a></h1>

                                <div className="speaker">主讲人：<span>某某某</span></div>
                                <div className="class-info">预约：<span className="population">1860</span>
                                    人&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span
                                        className="date">4月19日  19:30</span>
                                </div>
                                <div className="action">
                                    <a href="/open-class-detail.aspx">我要预约</a>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="class-item">
                            <div className="class-pic">
                                <a href="/open-class-detail.aspx">
                                    <img
                                        src="http://new.rrliuxue.com/WebResources/Default/images/open-class/3.jpg"/></a>
                            </div>
                            <div className="class-desc">
                                <h1><a href="/open-class-detail.aspx">课程名称</a></h1>

                                <div className="speaker">主讲人：<span>某某某</span></div>
                                <div className="class-info">预约：<span className="population">1860</span>
                                    人&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span
                                        className="date">4月19日  19:30</span>
                                </div>
                                <div className="action">
                                    <a href="/open-class-detail.aspx">我要预约</a>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                    <div className="more"><a href="/open-class.aspx">查看全部 ></a></div>
                </div>
            </div>
        );
    }
}

export default OpenClassAll;

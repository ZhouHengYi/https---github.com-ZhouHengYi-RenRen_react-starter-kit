/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './OpenClass.less';
import withStyles from '../../decorators/withStyles';
import $ from 'jquery'
import AppActions from '../../actions/AppActions';

@withStyles(styles)
class FreeGuide {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {
        let title = '公开课－人人留学';
        this.context.onSetTitle(title);
        return (
            <div>
                <section className="banner">
                    <div id="da-slider" className="slideshow da-slider">
                        <div className="da-slide open-class-banner1">
                            <div className="content">
                                <div className="title"><h2>Open class</h2></div>
                                <div className="title-desc"><img src={require('../WebResources/Default/Images/banner/open-class/title-desc.png')} /></div>
                                <div className="description">
                                    May all the love learning love diligent friends here, <br />
                                    no age limit,Education not limited to,<br />
                                    regardless of whether Curve Wrecker, <br />
                                    slag, are able to learn something, be happy!
                                </div>
                                <div className="arrow"></div>
                            </div>
                        </div>
                        <div className="slider-nav">
                            <div className="da-dots"></div>
                            <div className="da-arrows">
                                <span className="da-arrows-prev"><img src={require('../WebResources/Default/Images/banner-carousel-left.png')} /></span>
                                <span className="da-arrows-next"><img src={require('../WebResources/Default/Images/banner-carousel-right.png')} /></span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="open-class-box">
                    <h2>公开课</h2>
                    <div className="description">分享课程，传承智慧</div>
                    <div className="tabs-box">
                        <div className="tabs">
                            <div className="item selected" data-content="#all">全部</div>
                            <div className="item" data-content="#UK">英国</div>
                            <div className="item" data-content="#USA">美国</div>
                            <div className="item" data-content="#AUS">澳洲</div>
                            <div className="item full" data-content="#JP">日本</div>
                            <div className="clear"></div>
                        </div>
                        <div className="tab-content">
                            <div id="all" className="open-class-tab-content-box tab-content-box">
                                <div className="class-list-box">
                                    <div className="class-item">
                                        <div className="class-img"><a href="open-class-detail.aspx"><img src={require('../WebResources/Default/Images/open-class/class/class1.jpg')} /></a></div>
                                        <div className="class-description">
                                            <h4><a href="open-class-detail.aspx">剑桥大学公法讲座</a></h4>
                                            <div className="class-info">共 <span className="length">5</span> 节 ｜  1910人报名</div>
                                            <div className="date">时间：2015-05-15   19：00—20：00</div>
                                            <div className="other">
                                                <div className="speaker">
                                                    <div className="title">主讲人：</div>
                                                    <div className="speaker-img"><img src={require('../WebResources/Default/Images/open-class/speaker/1.png')} /></div>
                                                    <div className="clear"></div>
                                                </div>
                                                <div className="action"><a className="appointment button-line" href="open-class-detail.aspx">我要预约</a></div>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="class-item">
                                        <div className="class-img"><a href="open-class-detail.aspx"><img data-original="../WebResources/Default/Images/open-class/class/class2.jpg" /></a></div>
                                        <div className="class-description">
                                            <h4><a href="open-class-detail.aspx">飞行前的准备工作</a></h4>
                                            <div className="class-info">共 <span className="length">1</span> 节 ｜  2536人报名</div>
                                            <div className="date">时间：2015-05-15   19：00—20：00</div>
                                            <div className="other">
                                                <div className="speaker">
                                                    <div className="title">主讲人：</div>
                                                    <div className="speaker-img"><img src="../WebResources/Default/Images/open-class/speaker/2.png" /></div>
                                                    <div className="clear"></div>
                                                </div>
                                                <div className="action"><a className="appointment button-line" href="open-class-detail.aspx">我要预约</a></div>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="class-item">
                                        <div className="class-img"><a href="open-class-detail.aspx"><img data-original="../WebResources/Default/Images/open-class/class/class3.jpg" /></a></div>
                                        <div className="class-description">
                                            <h4><a href="open-class-detail.aspx">0-N1动力班</a></h4>
                                            <div className="class-info">共 <span className="length">3</span> 节 ｜  190人报名</div>
                                            <div className="date">时间：2015-05-15   19：00—20：00</div>
                                            <div className="other">
                                                <div className="speaker">
                                                    <div className="title">主讲人：</div>
                                                    <div className="speaker-img"><img src="../WebResources/Default/Images/open-class/speaker/2.png" /></div>
                                                    <div className="clear"></div>
                                                </div>
                                                <div className="action"><a className="appointment button-line" href="open-class-detail.aspx">我要预约</a></div>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="class-item">
                                        <div className="class-img"><a href="open-class-detail.aspx"><img data-original="../WebResources/Default/Images/open-class/class/class1.jpg" /></a></div>
                                        <div className="class-description">
                                            <h4><a href="open-class-detail.aspx">0-N1动力班</a></h4>
                                            <div className="class-info">共 <span className="length">5</span> 节 ｜  110人报名</div>
                                            <div className="date">时间：2015-05-15   19：00—20：00</div>
                                            <div className="other">
                                                <div className="speaker">
                                                    <div className="title">主讲人：</div>
                                                    <div className="speaker-img"><img src="../WebResources/Default/Images/open-class/speaker/2.png" /></div>
                                                    <div className="clear"></div>
                                                </div>
                                                <div className="action"><a className="appointment button-line" href="open-class-detail.aspx">我要预约</a></div>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="past-reviews-box">
                                    <div className="title">
                                        <h3>往期回顾</h3>
                                    </div>
                                    <div className="past-class-list-box">
                                        <div className="past-class-item">
                                            <div className="past-class-img"><a href="open-class-detail.aspx"><img src="../WebResources/Default/Images/open-class/class/class1.jpg" /></a></div>
                                            <div className="past-class-info">
                                                <h5><a href="open-class-detail.aspx">剑桥大学公法讲座</a></h5>
                                                已预约：1910人
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                        <div className="past-class-item">
                                            <div className="past-class-img"><a href="open-class-detail.aspx"><img src="../WebResources/Default/Images/open-class/class/class1.jpg" /></a></div>
                                            <div className="past-class-info">
                                                <h5><a href="open-class-detail.aspx">剑桥大学公法讲座</a></h5>
                                                已预约：1910人
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                        <div className="past-class-item">
                                            <div className="past-class-img"><a href="open-class-detail.aspx"><img src="../WebResources/Default/Images/open-class/class/class1.jpg" /></a></div>
                                            <div className="past-class-info">
                                                <h5><a href="open-class-detail.aspx">剑桥大学公法讲座</a></h5>
                                                已预约：1910人
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                        <div className="past-class-item">
                                            <div className="past-class-img"><a href="open-class-detail.aspx"><img src="../WebResources/Default/Images/open-class/class/class1.jpg" /></a></div>
                                            <div className="past-class-info">
                                                <h5><a href="open-class-detail.aspx">剑桥大学公法讲座</a></h5>
                                                已预约：1910人
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                        <div className="past-class-item">
                                            <div className="past-class-img"><a href="open-class-detail.aspx"><img src="../WebResources/Default/Images/open-class/class/class1.jpg" /></a></div>
                                            <div className="past-class-info">
                                                <h5><a href="open-class-detail.aspx">剑桥大学公法讲座</a></h5>
                                                已预约：1910人
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="open-class-flow">
                    <div className="content">
                        <div className="title"><h2>Open class</h2></div>
                        <div className="title-desc"><img src={require('../WebResources/Default/Images/open-class/flow-desc.png')} /></div>
                        <div className="description">
                            May all the love learning love diligent friends here,no age limit,Education not limited to,<br />
                            regardless of whether Curve Wrecker, slag, are able to learn something, be happy!
                        </div>
                        <ul className="flow">
                            <li>
                                <div className="wrap-text"><div className="text">报名</div></div>
                            </li>
                            <li>
                                <div className="wrap-text"><div className="text">确定学习目标</div></div>
                            </li>
                            <li>
                                <div className="wrap-text"><div className="text multiple">快学快用<br />讲/学/练/测/评</div></div>
                            </li>
                            <li>
                                <div className="wrap-text"><div className="text">成学习目标</div></div>
                            </li>
                            <li className="full">
                                <div className="wrap-text"><div className="text">毕业证书</div></div>
                            </li>
                            <li className="clear"></li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export default FreeGuide;

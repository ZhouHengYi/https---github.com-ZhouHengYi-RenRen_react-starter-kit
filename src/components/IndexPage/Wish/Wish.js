/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import XiangQuDeGuoJia from './XiangQuDeGuoJia'
import XiangDuDeDaXue from './XiangDuDeDaXue'
import XiangXueDeZhuanYe from './XiangXueDeZhuanYe'
class Wish {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {
        return (
            <section className="wish">
                <div className="content">
                    <XiangQuDeGuoJia />
                    <XiangDuDeDaXue />
                    <XiangXueDeZhuanYe />
                    <div className="clear"></div>
                </div>
                <div className="content full wish-school-container">
                    <div id="schoolContainer">
                        <div id="UKWish" className="school-container" data-country="UK">
                            <div className="box">
                                <div className="news">
                                    <div className="window-title">
                                        <div className="title">留学资讯</div>
                                        <div className="more"><a href="/advisory-library.aspx?country=UK">更多></a></div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="school-show">
                                    <ul className="bxslider">
                                        <li>
                                            <img src="http://new.rrliuxue.com/WebResources/Default/images/pages/index/school-carousel/UK/Cambridge.jpg" />
                                            <div className="caption">
                                                <p><span>剑桥大学</span>剑桥大学位于英格兰的剑桥镇，是英国也是全世界最顶尖的大学之一</p>
                                                <div className="bg"></div>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="http://new.rrliuxue.com/WebResources/Default/images/pages/index/school-carousel/UK/Oxford.jpg" />
                                            <div className="caption">
                                                <p><span>牛津大学</span>牛津大学在英国社会和高等教育系统中具有极其重要的地位，有着世界性的影响</p>
                                                <div className="bg"></div>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="http://new.rrliuxue.com/WebResources/Default/images/pages/index/school-carousel/UK/University-of-Birmingham.jpg" />
                                            <div className="caption">
                                                <p><span>伯明翰大学</span>伯明翰大学始建于1825年，现在是世界知名的顶尖学府之一。</p>
                                                <div className="bg"></div>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="http://new.rrliuxue.com/WebResources/Default/images/pages/index/school-carousel/UK/University-of-Edinburgh.jpg" />
                                            <div className="caption">
                                                <p><span>爱丁堡大学</span>爱丁堡大学创建于1583年，是大不列颠六所最古老、最大的大学之一</p>
                                                <div className="bg"></div>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="http://new.rrliuxue.com/WebResources/Default/images/pages/index/school-carousel/UK/University-of-Warwick.jpg" />
                                            <div className="caption">
                                                <p><span>华威大学</span>华威大学创建于1965年，在英国乃至全球都享有良好的学术声誉。</p>
                                                <div className="bg"></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="box full">
                                <div className="hot-school">
                                    <h1>热门院校</h1>
                                    <ul className="hot-box">
                                        <li><a href="/college-detail.aspx">杜伦大学</a></li>
                                        <li><a href="/college-detail.aspx">华威大学</a></li>
                                        <li><a href="/college-detail.aspx">爱丁堡大学</a></li>
                                        <li><a href="/college-detail.aspx">巴斯大学</a></li>
                                        <li><a href="/college-detail.aspx">曼彻斯特大学</a></li>
                                        <li className="more"><a href="/college.aspx?country=UK">更多</a></li>
                                    </ul>
                                    <div className="clear"></div>
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

export default Wish;

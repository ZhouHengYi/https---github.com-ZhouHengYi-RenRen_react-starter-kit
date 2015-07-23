/**
 * Created by henry on 15-7-22.
 */
/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
class NewActivity {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {
        return (
            <section className="new-activity">
                <h1>活动</h1>
                <div className="activity-box">
                    <div className="activity-slide">
                        <ul className="bxslider" id="activityCarousel">
                            <li>
                                <img src="/WebResources/Default/images/activity/lunbo1.jpg" />
                                <div className="activity-info">
                                    <p>
                                        <span className="name">人人留学雅思公益讲座</span>已报名
                                        <span className="number">291</span> 人
                                        <a href="#">报名</a>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <img src="/WebResources/Default/images/activity/lunbo2.jpg" />
                                <div className="activity-info">
                                    <p>
                                        <span className="name">人人留学雅思公益讲座</span>已报名
                                        <span className="number">292</span> 人
                                        <a href="#">报名</a>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <img src="/WebResources/Default/images/activity/lunbo1.jpg" />
                                <div className="activity-info">
                                    <p>
                                        <span className="name">人人留学雅思公益讲座</span>已报名
                                        <span className="number">293</span> 人
                                        <a href="#">报名</a>
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <div className="clear"></div>
                    </div>
                </div>
                <div className="list">
                    <div className="item">
                        <div className="item-pic">
                            <img data-original="/WebResources/Default/images/activity/1.png" />
                        </div>
                        <div className="description">
                            <h4>日本领事馆日本文化讲座</h4>
                            <div className="text">2015年1月30日（周五）在日本领事馆的多功能厅内举办了日本文化讲座“别具意匠之美——江户时代绘画的奥妙从狩野派到浮世绘”...</div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="item">
                        <div className="item-pic">
                            <img data-original="/WebResources/Default/images/activity/2.png" />
                        </div>
                        <div className="description">
                            <h4>2014中国最具公信力出国出国出国出国出国</h4>
                            <div className="text">此次活动颁布的奖项有：2014中国出国服务行业领军人物、2014年度最具品牌影响力出国服务机构、2014中国最具口碑影响力出国2014中国最具口碑影响力出国</div>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
                <div className="clear"></div>
            </section>
        );
    }

}

export default NewActivity;
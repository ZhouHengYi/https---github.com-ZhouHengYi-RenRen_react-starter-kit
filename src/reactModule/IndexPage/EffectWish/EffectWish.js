/**
 * Created by henry on 15-7-22.
 */
/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
class EffectWish {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {
        return (
            <section className="effect-wish">
                <h1>实现留学梦想的他们说</h1>
                <div className="content">
                    <ul>
                        <li>
                            <img src="http://new.rrliuxue.com/WebResources/Default/images/effect-wish/1.jpg" />
                            <div className="title-box">
                                <div className="title">人人留学的老师们都很热心、细心...</div>
                                <div className="title-bg"></div>
                            </div>
                            <div className="bg"></div>
                        </li>
                        <li>
                            <img src="http://new.rrliuxue.com/WebResources/Default/images/effect-wish/3.jpg" />
                            <div className="title-box">
                                <div className="title">非常感谢人人留学帮过我的老师们</div>
                                <div className="title-bg"></div>
                            </div>
                            <div className="bg"></div>
                        </li>
                        <li>
                            <img src="http://new.rrliuxue.com/WebResources/Default/images/effect-wish/2.jpg" />
                            <div className="title-box">
                                <div className="title">感谢人人留学一路相陪，让我在留..</div>
                                <div className="title-bg"></div>
                            </div>
                            <div className="bg"></div>
                        </li>
                        <li>
                            <img src="http://new.rrliuxue.com/WebResources/Default/images/effect-wish/1.jpg" />
                            <div className="title-box">
                                <div className="title">人人留学的老师们都很热心、细心...</div>
                                <div className="title-bg"></div>
                            </div>
                            <div className="bg"></div>
                        </li>
                        <li>
                            <img src="http://new.rrliuxue.com/WebResources/Default/images/effect-wish/3.jpg" />
                            <div className="title-box">
                                <div className="title">非常感谢人人留学帮过我的老师们</div>
                                <div className="title-bg"></div>
                            </div>
                            <div className="bg"></div>
                        </li>
                        <li>
                            <img src="http://new.rrliuxue.com/WebResources/Default/images/effect-wish/2.jpg" />
                            <div className="title-box">
                                <div className="title">感谢人人留学一路相陪，让我在留..</div>
                                <div className="title-bg"></div>
                            </div>
                            <div className="bg"></div>
                        </li>
                    </ul>
                    <div className="clear"></div>
                </div>
            </section>
        );
    }

}

export default EffectWish;

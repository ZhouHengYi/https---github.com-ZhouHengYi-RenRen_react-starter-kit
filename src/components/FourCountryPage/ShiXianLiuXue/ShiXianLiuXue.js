/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './ShiXianLiuXue.less';
import withStyles from '../../../decorators/withStyles';
import Link from '../../../utils/Link';

import $ from 'jquery';

@withStyles(styles)
class ShiXianLiuXue {

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
                    </ul>
                    <div className="clear"></div>
                </div>
            </section>
        );
    }
    componentDidMount() {
        $(document).ready(function(){
            $(".effect-wish").find("li").hover(function () {
                $(this).find(".bg").animate({ opacity: 0 }, 300).css({ flter: "Alpha(Opacity=0)" });
                $(this).find(".title-box").animate({ marginTop: "-40px" }, 300);

            }, function () {
                $(this).find(".bg").stop();
                $(this).find(".title-box").stop();
                $(this).find(".bg").animate({ opacity: 0.4 }, 300).css({ flter: "Alpha(Opacity=40)" });
                $(this).find(".title-box").animate({ marginTop: "0px" }, 300);
            });
        });
    }
}

export default ShiXianLiuXue;
/**
 * Created by XiaoKangZheng on 2015/7/28.
 */

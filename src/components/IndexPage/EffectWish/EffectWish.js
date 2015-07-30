/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './EffectWish.less';
import withStyles from '../../../decorators/withStyles';
var CSlider = require('react-slick');
import $ from 'jquery'

@withStyles(styles)

class EffectWish {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: false,
        };
        return (
            <section className="effect-wish">
                <h1>实现留学梦想的他们说</h1>
                <div className="content">
                    <CSlider {...settings}>
                        <div className="cSliderItem">
                            <img src="http://new.rrliuxue.com/WebResources/Default/images/effect-wish/1.jpg" />
                            <div className="title-box">
                                <div className="title">人人留学的老师们都很热心、细心...</div>
                                <div className="title-bg"></div>
                            </div>
                            <div className="bg"></div>
                        </div>
                        <div className="cSliderItem">
                            <img src="http://new.rrliuxue.com/WebResources/Default/images/effect-wish/3.jpg" />
                            <div className="title-box">
                                <div className="title">非常感谢人人留学帮过我的老师们</div>
                                <div className="title-bg"></div>
                            </div>
                            <div className="bg"></div>
                        </div>
                        <div className="cSliderItem">
                            <img src="http://new.rrliuxue.com/WebResources/Default/images/effect-wish/3.jpg" />
                            <div className="title-box">
                                <div className="title">非常感谢人人留学帮过我的老师们</div>
                                <div className="title-bg"></div>
                            </div>
                            <div className="bg"></div>
                        </div>
                        <div className="cSliderItem">
                            <img src="http://new.rrliuxue.com/WebResources/Default/images/effect-wish/1.jpg" />
                            <div className="title-box">
                                <div className="title">人人留学的老师们都很热心、细心1...</div>
                                <div className="title-bg"></div>
                            </div>
                            <div className="bg"></div>
                        </div>
                        <div className="cSliderItem">
                            <img src="http://new.rrliuxue.com/WebResources/Default/images/effect-wish/3.jpg" />
                            <div className="title-box">
                                <div className="title">非常感谢人人留学帮过我的老师们1</div>
                                <div className="title-bg"></div>
                            </div>
                            <div className="bg"></div>
                        </div>
                        <div className="cSliderItem">
                            <img src="http://new.rrliuxue.com/WebResources/Default/images/effect-wish/2.jpg" />
                            <div className="title-box">
                                <div className="title">非常感谢人人留学帮过我的老师们1</div>
                                <div className="title-bg"></div>
                            </div>
                            <div className="bg"></div>
                        </div>
                    </CSlider>
                    <div className="clear"></div>
                </div>
            </section>
        );
    }
    componentDidMount() {
        $(document).ready(function(){
            $(".effect-wish").find(".cSliderItem").hover(function () {
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

export default EffectWish;

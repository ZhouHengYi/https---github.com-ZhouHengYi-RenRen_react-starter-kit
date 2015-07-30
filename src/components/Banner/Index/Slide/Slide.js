/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';

import CSliderstyles from "./Slide.less";
import withViewport from '../../../../decorators/withViewport';
import withStyles from '../../../../decorators/withStyles';
var CSlider = require('react-slick');
import $ from 'jquery'
@withStyles(CSliderstyles)
class Slide {
    render() {
        var settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
        };
        return (
            <div className="div_banner">
            <CSlider {...settings}>
                    <div className="slide1">
                        <h2 name="banner1">
                            <img src="http://new.rrliuxue.com/WebResources/Default/images/banner/home/plane.png" /></h2>
                        <p name="banner1">
                            <img src="http://new.rrliuxue.com/WebResources/Default/images/banner/home/2015.png" alt="2015 带你留学" />
                        </p>
                        <div className="da-img" name="banner1">
                            <img src="http://new.rrliuxue.com/WebResources/Default/images/banner/home/multiple-country.png" />
                        </div>
                    </div>
                    <div className="slide2">
                        <div className="slide-img-box">
                            <div className="slide-img-content">
                                <div className="arrow">
                                    <img src="http://new.rrliuxue.com/WebResources/Default/images/banner/home/2/arrow.png" />
                                </div>
                                <div className="text-content">
                                    <div className="text1">
                                        <img src="http://new.rrliuxue.com/WebResources/Default/images/banner/home/2/text1.png" />
                                    </div>
                                    <div className="text2">
                                        <img src="http://new.rrliuxue.com/WebResources/Default/images/banner/home/2/text2.png" />
                                    </div>
                                    <div className="text3">
                                        <img src="http://new.rrliuxue.com/WebResources/Default/images/banner/home/2/text3.png" />
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                    <div className="slide3">
                        <div className="slide-img-box">
                            <div className="slide-img-content">
                                <div className="text1">
                                    <img src="http://new.rrliuxue.com/WebResources/Default/images/banner/home/3/text1.png" />
                                </div>
                                <div className="text2">
                                    <img src="http://new.rrliuxue.com/WebResources/Default/images/banner/home/3/text2.png" />
                                </div>
                                <div className="text3">
                                    <img src="http://new.rrliuxue.com/WebResources/Default/images/banner/home/3/text3.png" />
                                </div>
                            </div>
                        </div>
                    </div>
            </CSlider>
                <div className="bgShadow"></div>
            </div>
        );
    }
    componentDidMount() {
        $(".bgShadow").hide();
    }
}

export default Slide;

/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery';

class GaoDuanShenQing {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {
        return (
            <section className="tutor">
                <h1>高端申请专家团</h1>
                <div className="more"></div>
                    <div className="desc">
                        70位资深行业专家，涵盖社会、经济、金融、哲学、历史、艺术、互连网等领域。权威认证，指导升学、留学要点
                    </div>
                    <div className="tutor-list">
                        <ul id="tutorList">
                            <li>
                                <img src="http://new.rrliuxue.com/WebResources/Default/images/tutor/1.jpg" /><br />
                                <span>Sunny</span></li>
                            <li>
                                <img src="http://new.rrliuxue.com/WebResources/Default/images/tutor/2.jpg" /><br />
                                <span>King</span></li>
                            <li>
                                <img src="http://new.rrliuxue.com/WebResources/Default/images/tutor/3.jpg" /><br />
                                <span>张某某</span></li>
                            <li>
                                <img src="http://new.rrliuxue.com/WebResources/Default/images/tutor/4.jpg" /><br />
                                <span>李某某</span></li>
                            <li>
                                <img src="http://new.rrliuxue.com/WebResources/Default/images/tutor/5.jpg" /><br />
                                <span>Queen</span></li>
                            <li>
                                <img src="http://new.rrliuxue.com/WebResources/Default/images/tutor/6.jpg" /><br />
                                <span>赵某某</span></li>
                            <li className="active">
                                <img src="http://new.rrliuxue.com/WebResources/Default/images/tutor/7.jpg" /><br />
                                <span>陈某某</span></li>
                            <li>
                                <img src="http://new.rrliuxue.com/WebResources/Default/images/tutor/1.jpg" /><br />
                                <span>齐某某</span></li>
                            <li>
                                <img src="http://new.rrliuxue.com/WebResources/Default/images/tutor/2.jpg" /><br />
                                <span>尹某某</span></li>
                            <li>
                                <img src="http://new.rrliuxue.com/WebResources/Default/images/tutor/3.jpg" /><br />
                                <span>古某某</span></li>
                            <li>
                                <img src="http://new.rrliuxue.com/WebResources/Default/images/tutor/4.jpg" /><br />
                                <span>丁某某</span></li>
                            <li>
                                <img src="http://new.rrliuxue.com/WebResources/Default/images/tutor/5.jpg" /><br />
                                <span>杨某某</span></li>
                        </ul>
                        <div className="clear"></div>
                    </div>
                    <div className="tutor-detail">
                        <div className="tutor-name">陈某某</div>
                        <div className="tutor-info">
                            <div className="nickname">昵称：Yingying CHEN</div>
                            <div className="star dark four"></div>
                            <div className="speciality">专长：Electrical Engineering     Physics    Bioengineering，帮助过 <span className="number">200+</span>学弟学妹</div>
                        </div>
                    </div>
                    <div className="action">
                        <button className="button-normal" id="btnExpert">预约专家</button>
                    </div>
                </section>
        );
    }
    //dom加载完调用
    componentDidMount(){
        $(document).ready(function(){
            $("#tutorList").find("li").click(function () {
                $(this).parent().find("li").removeClass("active");
                $(this).addClass("active");
            });

        })
    }
}

export default GaoDuanShenQing;

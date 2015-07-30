/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './SchoolRank.less';
import withStyles from '../../../decorators/withStyles';
import Link from '../../../utils/Link';

import $ from 'jquery';

@withStyles(styles)
class SchoolSearch {

    render() {
        return (
            <section className="school-rank">
                <div className="rank-tabs-box">
                    <div className="rank-tabs">
                        <div className="item selected" data-content="#universitygraduate">
                            <div className="title">本科排名</div>
                            <div className="arrow"></div>
                        </div>
                        <div className="item" data-content="#postgraduate">
                            <div className="title">研究生院排名</div>
                            <div className="arrow"></div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="rank-tab-content">
                        <div id="universitygraduate" className="rank-content-box tab-content-box">
                            <div className="rank-school-category">
                                <h4>商科--会计学</h4>
                                <div className="more"><a href="/college-rank.aspx?country=USA&type=list">查看所有专业排名></a></div>
                                <div className="school-list">
                                    <div className="school-item">
                                        <a href="/college-detail.aspx">
                                            <div className="school-logo">
                                                <div className="logo">
                                                    <img src="http://new.rrliuxue.com/WebResources/Default/images/college/school1.png" />
                                                </div>
                                            </div>
                                        </a>
                                        <div className="school-name"><a href="/college-detail.aspx">得克萨斯大学-奥斯汀分校</a></div>
                                        <div className="school-name en"><a href="/college-detail.aspx">The University of Texas at Austin (UT)</a></div>
                                        <div className="school-tag"><span>公立</span><span>本科学院</span><span>商学院</span></div>
                                        <div className="action"><a href="/college-detail.aspx">查看详情</a></div>
                                    </div>
                                    <div className="school-item">
                                        <a href="/college-detail.aspx">
                                            <div className="school-logo">
                                                <div className="logo">
                                                    <img src="http://new.rrliuxue.com/WebResources/Default/images/college/school1.png" />
                                                </div>
                                            </div>
                                        </a>
                                        <div className="school-name"><a href="/college-detail.aspx">得克萨斯大学-奥斯汀分校</a></div>
                                        <div className="school-name en"><a href="/college-detail.aspx">The University of Texas at Austin (UT)</a></div>
                                        <div className="school-tag"><span>公立</span><span>本科学院</span><span>商学院</span></div>
                                        <div className="action"><a href="/college-detail.aspx">查看详情</a></div>
                                    </div>
                                    <div className="school-item">
                                        <a href="/college-detail.aspx">
                                            <div className="school-logo">
                                                <div className="logo">
                                                    <img src="http://new.rrliuxue.com/WebResources/Default/images/college/school1.png" />
                                                </div>
                                            </div>
                                        </a>
                                        <div className="school-name"><a href="/college-detail.aspx">得克萨斯大学-奥斯汀分校</a></div>
                                        <div className="school-name en"><a href="/college-detail.aspx">The University of Texas at Austin (UT)</a></div>
                                        <div className="school-tag"><span>公立</span><span>本科学院</span><span>商学院</span></div>
                                        <div className="action"><a href="/college-detail.aspx">查看详情</a></div>
                                    </div>
                                    <div className="school-item">
                                        <a href="/college-detail.aspx">
                                            <div className="school-logo">
                                                <div className="logo">
                                                    <img src="http://new.rrliuxue.com/WebResources/Default/images/college/school1.png" />
                                                </div>
                                            </div>
                                        </a>
                                        <div className="school-name"><a href="/college-detail.aspx">得克萨斯大学-奥斯汀分校</a></div>
                                        <div className="school-name en"><a href="/college-detail.aspx">The University of Texas at Austin (UT)</a></div>
                                        <div className="school-tag"><span>公立</span><span>本科学院</span><span>商学院</span></div>
                                        <div className="action"><a href="/college-detail.aspx">查看详情</a></div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            <div className="rank-school-category">
                                <h4>教育学--特殊教育学</h4>
                                <div className="more"><a href="/college-rank.aspx?country=USA&type=list">查看所有专业排名></a></div>
                                <div className="school-list">
                                    <div className="school-item">
                                        <a href="/college-detail.aspx">
                                            <div className="school-logo">
                                                <div className="logo">
                                                    <img src="http://new.rrliuxue.com/WebResources/Default/images/college/school2.png" />
                                                </div>
                                            </div>
                                        </a>
                                        <div className="school-name"><a href="/college-detail.aspx">范德堡大学</a></div>
                                        <div className="school-name en"><a href="/college-detail.aspx">Vanderbilt University</a></div>
                                        <div className="school-tag"><span>公立</span><span>本科学院</span><span>商学院</span></div>
                                        <div className="action"><a href="/college-detail.aspx">查看详情</a></div>
                                    </div>
                                    <div className="school-item">
                                        <a href="/college-detail.aspx">
                                            <div className="school-logo">
                                                <div className="logo">
                                                    <img src="http://new.rrliuxue.com/WebResources/Default/images/college/school2.png" />
                                                </div>
                                            </div>
                                        </a>
                                        <div className="school-name"><a href="/college-detail.aspx">范德堡大学</a></div>
                                        <div className="school-name en"><a href="/college-detail.aspx">Vanderbilt University</a></div>
                                        <div className="school-tag"><span>公立</span><span>本科学院</span><span>商学院</span></div>
                                        <div className="action"><a href="/college-detail.aspx">查看详情</a></div>
                                    </div>
                                    <div className="school-item">
                                        <a href="/college-detail.aspx">
                                            <div className="school-logo">
                                                <div className="logo">
                                                    <img src="http://new.rrliuxue.com/WebResources/Default/images/college/school2.png" />
                                                </div>
                                            </div>
                                        </a>
                                        <div className="school-name"><a href="/college-detail.aspx">范德堡大学</a></div>
                                        <div className="school-name en"><a href="/college-detail.aspx">Vanderbilt University</a></div>
                                        <div className="school-tag"><span>公立</span><span>本科学院</span><span>商学院</span></div>
                                        <div className="action"><a href="/college-detail.aspx">查看详情</a></div>
                                    </div>
                                    <div className="school-item">
                                        <a href="/college-detail.aspx">
                                            <div className="school-logo">
                                                <div className="logo">
                                                    <img src="http://new.rrliuxue.com/WebResources/Default/images/college/school2.png" />
                                                </div>
                                            </div>
                                        </a>
                                        <div className="school-name"><a href="/college-detail.aspx">范德堡大学</a></div>
                                        <div className="school-name en"><a href="/college-detail.aspx">Vanderbilt University</a></div>
                                        <div className="school-tag"><span>公立</span><span>本科学院</span><span>商学院</span></div>
                                        <div className="action"><a href="/college-detail.aspx">查看详情</a></div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            <div className="rank-school-category full">
                                <h4>工程学--化工</h4>
                                <div className="more"><a href="/college-rank.aspx?country=USA&type=list">查看所有专业排名></a></div>
                                <div className="school-list">
                                    <div className="school-item">
                                        <a href="/college-detail.aspx">
                                            <div className="school-logo">
                                                <div className="logo">
                                                    <img src="http://new.rrliuxue.com/WebResources/Default/images/college/school3.png" />
                                                </div>
                                            </div>
                                        </a>
                                        <div className="school-name"><a href="/college-detail.aspx">麻省理工学院</a></div>
                                        <div className="school-name en"><a href="/college-detail.aspx">Massachusetts Institute of Technology (MIT)</a></div>
                                        <div className="school-tag"><span>公立</span><span>本科学院</span><span>商学院</span></div>
                                        <div className="action"><a href="/college-detail.aspx">查看详情</a></div>
                                    </div>
                                    <div className="school-item">
                                        <a href="/college-detail.aspx">
                                            <div className="school-logo">
                                                <div className="logo">
                                                    <img src="http://new.rrliuxue.com/WebResources/Default/images/college/school3.png" />
                                                </div>
                                            </div>
                                        </a>
                                        <div className="school-name"><a href="/college-detail.aspx">麻省理工学院</a></div>
                                        <div className="school-name en"><a href="/college-detail.aspx">Massachusetts Institute of Technology (MIT)</a></div>
                                        <div className="school-tag"><span>公立</span><span>本科学院</span><span>商学院</span></div>
                                        <div className="action"><a href="/college-detail.aspx">查看详情</a></div>
                                    </div>
                                    <div className="school-item">
                                        <a href="/college-detail.aspx">
                                            <div className="school-logo">
                                                <div className="logo">
                                                    <img src="http://new.rrliuxue.com/WebResources/Default/images/college/school3.png" />
                                                </div>
                                            </div>
                                        </a>
                                        <div className="school-name"><a href="/college-detail.aspx">麻省理工学院</a></div>
                                        <div className="school-name en"><a href="/college-detail.aspx">Massachusetts Institute of Technology (MIT)</a></div>
                                        <div className="school-tag"><span>公立</span><span>本科学院</span><span>商学院</span></div>
                                        <div className="action"><a href="/college-detail.aspx">查看详情</a></div>
                                    </div>
                                    <div className="school-item">
                                        <a href="/college-detail.aspx">
                                            <div className="school-logo">
                                                <div className="logo">
                                                    <img src="http://new.rrliuxue.com/WebResources/Default/images/college/school3.png" />
                                                </div>
                                            </div>
                                        </a>
                                        <div className="school-name"><a href="/college-detail.aspx">麻省理工学院</a></div>
                                        <div className="school-name en"><a href="/college-detail.aspx">Massachusetts Institute of Technology (MIT)</a></div>
                                        <div className="school-tag"><span>公立</span><span>本科学院</span><span>商学院</span></div>
                                        <div className="action"><a href="/college-detail.aspx">查看详情</a></div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                        </div>
                        <div id="postgraduate" className="rank-content-box tab-content-box">
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    componentDidMount() {
        $(document).ready(function(){

            $(".rank-tab-content #university").show();

            $(".rank-tabs-box .rank-tabs .item").click(function(){

                $(".rank-tabs-box .rank-tabs .item").removeClass("selected");

                $(this).addClass("selected");

                var idName= $(this).attr("data-content");

                $(".rank-tab-content .rank-content-box").hide();

                $(idName).show();
            });
        });
    }
}

export default SchoolSearch;
/**
 * Created by XiaoKangZheng on 2015/7/28.
 */

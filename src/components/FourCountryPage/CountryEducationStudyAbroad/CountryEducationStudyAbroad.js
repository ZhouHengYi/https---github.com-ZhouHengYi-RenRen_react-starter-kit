/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
import React, { PropTypes } from 'react';
import styles from './CountryEducationStudyAbroad.less';
import withStyles from '../../../decorators/withStyles';
import Link from '../../../utils/Link';

import Bachelor from '../StudyAbroadBox/Bachelor/Bachelor.js';
import $ from 'jquery';

@withStyles(styles)
class CountryEducationStudyAbroad {
    render() {
        return (
            <section className="country-education-study-abroad">
                <div className="major-tabs-box">
                    <div className="major-tabs">
                        <div className="item bachelor selected" data-content="#bachelor" data-value="本科留学" onClick={this.handleGoBachelorClick}>
                            <div className="title">本科留学</div>
                            <div className="more"><a href="/advisory-library.aspx?country=USA&tags=本科留学">查看全部 ></a></div>
                            <div className="clear"></div>
                        </div>
                        <div className="item master" data-content="#master" data-value="硕士留学">
                            <div className="title">硕士留学</div>
                            <div className="more"><a href="/advisory-library.aspx?country=USA&tags=硕士留学">查看全部 ></a></div>
                            <div className="clear"></div>
                        </div>
                        <div className="item high" data-content="#high" data-value="高中留学">
                            <div className="title">高中留学</div>
                            <div className="more"><a href="/advisory-library.aspx?country=USA&tags=高中留学">查看全部 ></a></div>
                            <div className="clear"></div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="major-tab-content" id="major-tab-content"></div>
                </div>
            </section>
        );
    }
    componentDidMount() {
        $(document).ready(function(){

            React.render(<Bachelor />, document.getElementById('major-tab-content'));

            $(".major-tabs-box .major-tabs .item").click(function(){

                $(".major-tabs-box .major-tabs .item").removeClass("selected");

                $(this).addClass("selected");
            });
        });
    }

    handleGoBachelorClick(){
        React.render(<Bachelor />, document.getElementById('major-tab-content'));
    }
}

export default CountryEducationStudyAbroad;
/**
 * Created by XiaoKangZheng on 2015/7/28.
 */

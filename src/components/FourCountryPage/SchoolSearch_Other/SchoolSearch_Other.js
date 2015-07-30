/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from '../SchoolSearch/SchoolSearch.less';
import withStyles from '../../../decorators/withStyles';
import Link from '../../../utils/Link';

import HighSchool from '../SchoolSearch/HighSchool/HighSchool.js'
import University from '../SchoolSearch/University/University.js'

import $ from 'jquery';

@withStyles(styles)
class SchoolSearch_Other {

    render() {
        return (
            <div className="country-search-school">
                <h2>院校搜索</h2>
                <div className="country-search-school-box">
                    <form id="searchSchoolForm" method="post" action="#" autocomplete="off">
                        <input type="hidden" id="country" value="JP" />
                        <div className="search-tabs-box">
                            <div className="tabs">
                                <div className="item selected last" data-content="#high" onClick={this.handleGohighClick}>高中</div>
                                <div className="item last" data-content="#university" onClick={this.handleGouniversityClick}>大学</div>
                                <div className="clear"></div>
                            </div>
                            <div className="tab-content" id="search-tab-content1"></div>
                        </div>
                        <div className="action">
                            <button className="button-normal" type="submit">查询</button></div>
                    </form>
                </div>
            </div>
        );
    }
    componentDidMount() {
        $(document).ready(function(){

            React.render(<HighSchool />, document.getElementById('search-tab-content1'));

            $(".search-tabs-box .tabs .item").click(function(){

                $(".search-tabs-box .tabs .item").removeClass("selected");

                $(this).addClass("selected");
            });
        });
    }

    handleGohighClick(){
        React.render(<HighSchool />, document.getElementById('search-tab-content1'));
    }

    handleGouniversityClick(){
        React.render(<University />, document.getElementById('search-tab-content1'));
    }
}

export default SchoolSearch_Other;
/**
 * Created by XiaoKangZheng on 2015/7/28.
 */

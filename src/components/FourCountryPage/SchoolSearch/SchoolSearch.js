/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './SchoolSearch.less';
import withStyles from '../../../decorators/withStyles';
import Link from '../../../utils/Link';

import HighSchool from './HighSchool/HighSchool.js'
import University from './University/University.js'
import Postgraduate from './Postgraduate/Postgraduate.js'
import Language from './Language/Language.js'
import Specialized from './Specialized/Specialized.js'

import $ from 'jquery';

@withStyles(styles)
class SchoolSearch {

    render() {
        return (
            <div className="country-search-school">
                <h2>院校搜索</h2>
                <div className="country-search-school-box">
                    <form id="searchSchoolForm" method="post" action="#" autocomplete="off">
                        <input type="hidden" id="country" value="JP" />
                        <div className="search-tabs-box">
                            <div className="tabs">
                                <div className="item selected" data-content="#high" onClick={this.handleGohighClick}>高中</div>
                                <div className="item" data-content="#university" onClick={this.handleGouniversityClick}>大学</div>
                                <div className="item" data-content="#postgraduate" onClick={this.handleGopostgraduateClick}>研究生院</div>
                                <div className="item" data-content="#language" onClick={this.handleGolanguageClick}>语言学校</div>
                                <div className="item last" data-content="#specialized" onClick={this.handleGospecializedClick}>专门学校</div>
                                <div className="clear"></div>
                            </div>
                            <div id="search-tab-content" className="tab-content"></div>
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

            React.render(<HighSchool />, document.getElementById('search-tab-content'));

            $(".search-tabs-box .tabs .item").click(function(){

                $(".search-tabs-box .tabs .item").removeClass("selected");
                $(".search-tabs-box .tabs .item").removeClass("previtem");

                $(this).prev().addClass("previtem");

                $(this).addClass("selected");

            });
        });
    }
    handleGohighClick(){
        React.render(<HighSchool />, document.getElementById('search-tab-content'));
    }

    handleGouniversityClick(){
        React.render(<University />, document.getElementById('search-tab-content'));
    }

    handleGopostgraduateClick(){
        React.render(<Postgraduate />, document.getElementById('search-tab-content'));
    }

    handleGolanguageClick(){
        React.render(<Language />, document.getElementById('search-tab-content'));
    }

    handleGospecializedClick(){
        React.render(<Specialized />,document.getElementById('search-tab-content'));
    }
}

export default SchoolSearch;
/**
 * Created by XiaoKangZheng on 2015/7/28.
 */

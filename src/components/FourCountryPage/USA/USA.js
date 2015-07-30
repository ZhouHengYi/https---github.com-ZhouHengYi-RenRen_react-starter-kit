/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './USA.less';
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';
import Link from '../../../utils/Link';

import Banner from '../../Banner/USA/Banner/Banner.js';
import SchoolSearch from '../SchoolSearch_Other/SchoolSearch_Other.js';
import HotSchool from '../HotSchool/HotSchool.js';
import SchoolRank from '../SchoolRank/SchoolRank.js';
import CountryEducationStudyAbroad from '../CountryEducationStudyAbroad/CountryEducationStudyAbroad.js';
import OpenClass from '../openClass/OpenClass.js';
import Activity from '../../IndexPage/NewActivity/NewActivity.js';
import Flow from '../Flow/Flow.js';
import ShiXianLiuXue from '../ShiXianLiuXue/ShiXianLiuXue.js';
import CountryApplyFlow from '../CountryApplyFlow/CountryApplyFlow.js';


import $ from 'jquery';

@withStyles(styles)

class USA {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {
        let title = '美国－国家页面';
        this.context.onSetTitle(title);
        return (
            <div>
                <Banner />
                    <section className="country-hot-school">
                        <div className="content">
                            <SchoolSearch />
                            <div className="school-box-hr"></div>
                            <HotSchool />
                            <div className="clear"></div>
                        </div>
                    </section>
                <SchoolRank />
                <section className="plan">
                    <a href="/college-recommend.aspx"><img src="http://new.rrliuxue.com/WebResources/Default/images/plan-USA.jpg" /></a>
                    <div className="action">
                        <a  href="/college-recommend.aspx">我要方案</a>
                    </div>
                    <div className="clear"></div>
                </section>
                <CountryEducationStudyAbroad />
                <OpenClass />
                <CountryApplyFlow />
                <Activity />
                <ShiXianLiuXue />
                <Flow />
            </div>
        );
    }
    componentDidMount() {
        $(document).ready(function(){

        });
    }
}

export default USA;
/**
 * Created by XiaoKangZheng on 2015/7/28.
 */

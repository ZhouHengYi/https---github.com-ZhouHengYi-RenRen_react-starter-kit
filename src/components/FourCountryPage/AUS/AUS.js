/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './AUS.less';
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';
import Link from '../../../utils/Link';

import Banner from '../../Banner/AUS/Banner/Banner.js';
import SchoolSearch from '../SchoolSearch_Other/SchoolSearch_Other.js';
import HotSchool from '../HotSchool/HotSchool.js';
import CountryEducationStudyAbroad from '../CountryEducationStudyAbroad/CountryEducationStudyAbroad.js';
import OpenClass from '../openClass/OpenClass.js';
import Activity from '../../IndexPage/NewActivity/NewActivity.js';
import Flow from '../Flow/Flow.js';
import ShiXianLiuXue from '../ShiXianLiuXue/ShiXianLiuXue.js';


import $ from 'jquery';

@withStyles(styles)

class AUS {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {
        let title = '澳洲－国家页面';
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
                <CountryEducationStudyAbroad />
                <OpenClass />
                <Activity />
                <ShiXianLiuXue />
                <Flow />
            </div>
        );
    }

}

export default AUS;
/**
 * Created by XiaoKangZheng on 2015/7/28.
 */

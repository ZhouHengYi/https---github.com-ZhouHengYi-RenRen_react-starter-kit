/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
import React, { PropTypes } from 'react';
import styles from './Flow.less';
import withStyles from '../../../decorators/withStyles';
import Link from '../../../utils/Link';

import $ from 'jquery';

@withStyles(styles)
class Flow {
    render() {
        return (
            <section className="flow">
                <div className="flow-box">
                    <div className="one">
                        <div className="one-line"></div>
                        <div className="easy"></div>
                        <div className="two-line"></div>
                        <div className="free"></div>
                        <div className="clear"></div>
                    </div>
                    <div className="two">
                        <div className="caring"></div>
                    </div>
                    <div className="three">
                        <div className="one-line"></div>
                        <div className="efficient"></div>
                        <div className="two-line"></div>
                        <div className="overall"></div>
                        <div className="clear"></div>
                    </div>
                </div>
            </section>
        );
    }

}

export default Flow;
/**
 * Created by XiaoKangZheng on 2015/7/28.
 */

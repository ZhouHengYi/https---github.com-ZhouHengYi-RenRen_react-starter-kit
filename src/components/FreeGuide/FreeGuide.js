/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './FreeGuide.less';
import withStyles from '../../decorators/withStyles';
import $ from 'jquery'

@withStyles(styles)
class FreeGuide {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {
        let title = '免费办理－人人留学';
        this.context.onSetTitle(title);
        return (
            <div>
                <section className="freePage">
                    <div className="content">
                        <img src={require('./circle.png')} className="circle" />
                            <form id="planForm" method="post" action="#" autocomplete="off">
                                <div className="itemDv" id="planCountry">
                                    <div className="item uk active" data-country="UK">
                                        <i></i>
                                        <div className="font">英国</div>
                                    </div>
                                    <div className="item usa mLeft" data-country="USA">
                                        <i></i>
                                        <div className="font">美国</div>
                                    </div>
                                    <div className="item au mTop" data-country="AUS">
                                        <i></i>
                                        <div className="font">澳洲</div>
                                    </div>
                                    <div className="item jp mTop mLeft" data-country="JP">
                                        <i></i>
                                        <div className="font">日本</div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <button href="/StudySolution">我要申请</button>
                            </form>
                        </div>
                    </section>
            </div>
        );
    }

    handleGoClick() {
        console.log($);
        this.context.router.transitionTo(`/${this.getInputValue()}`);
    }

}

export default FreeGuide;

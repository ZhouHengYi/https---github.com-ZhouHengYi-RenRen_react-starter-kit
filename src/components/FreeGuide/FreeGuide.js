/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './FreeGuide.less';
import withStyles from '../../decorators/withStyles';
import $ from 'jquery'
import AppActions from '../../actions/AppActions';

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
                                <div className="itemDv" id="planCountry">
                                    <div className="item uk active" data-country="UK" onClick={this.handleGoUKClick}>
                                        <i></i>
                                        <div className="font">英国</div>
                                    </div>
                                    <div className="item usa mLeft" data-country="USA" onClick={this.handleGoUSAClick}>
                                        <i></i>
                                        <div className="font">美国</div>
                                    </div>
                                    <div className="item au mTop" data-country="AUS" onClick={this.handleGoAUSClick}>
                                        <i></i>
                                        <div className="font">澳洲</div>
                                    </div>
                                    <div className="item jp mTop mLeft" data-country="JP" onClick={this.handleGoJPClick}>
                                        <i></i>
                                        <div className="font">日本</div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <button onClick={this.handleGoRequest}>我要申请</button>
                        </div>
                    </section>
            </div>
        );
    }
    handleGoUKClick(){
        $("[data-country]").removeClass("active");
        $("[data-country='UK']").addClass("active");
    }

    handleGoUSAClick(){
        $("[data-country]").removeClass("active");
        $("[data-country='USA']").addClass("active");
    }

    handleGoAUSClick(){
        $("[data-country]").removeClass("active");
        $("[data-country='AUS']").addClass("active");
    }

    handleGoJPClick(){
        $("[data-country]").removeClass("active");
        $("[data-country='JP']").addClass("active");
    }

    handleGoRequest(){
        var country = $(".active").attr("data-country");
        AppActions.navigateTo("/StudySolution_" + country);
    }
}

export default FreeGuide;

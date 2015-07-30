/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';

import styles from './OpenClass.less';
import withStyles from '../../../decorators/withStyles';
import $ from 'jquery'
import ControlUK from './UK/OpenClassUK.js'
import ControlALL from './ALL/OpenClassAll.js'

@withStyles(styles)
class OpenClass{

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {
        return (
            <section className="open-class">
                <div className="section-title">
                    <h1>公开课</h1>
                    <ul className="filter">
                        <li data-content="#allClass"><a onClick={this.handleGoOpenClassAllClick}>全部</a></li>
                        <li data-content="#UKClass" onClick={this.handleGoOpenClassUKClick}>英国</li>
                        <li data-content="#USAClass">美国</li>
                        <li data-content="#AUSClass">澳洲</li>
                        <li data-content="#JPClass">日本</li>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="open-class-content" id="openClassContent"></div>
            </section>
        );
    }
    //dom加载完调用
    componentDidMount(){
        $(document).ready(function(){
            React.render(<ControlALL />, document.getElementById('openClassContent'));
        })
    }
    handleGoOpenClassAllClick(){
        React.render(<ControlALL />, document.getElementById('openClassContent'));
    }

    handleGoOpenClassUKClick(){
        React.render(<ControlUK />, document.getElementById('openClassContent'));
    }
}

export default OpenClass;

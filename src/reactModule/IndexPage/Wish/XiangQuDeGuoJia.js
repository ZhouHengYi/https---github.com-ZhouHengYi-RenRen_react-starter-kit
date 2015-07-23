/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
class XiangQuDeGuoJia {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className="box">
                <div className="wish-country">
                    <h1>想去的国家</h1>
                    <ul id="wishCountry">
                        <li className="active" data-country="UK">
                            <img src="http://new.rrliuxue.com/WebResources/Default/images/wish/UK.png" /><br />
                            英国<div className="bg"></div>
                            <div className="activeicon"></div>
                        </li>
                        <li data-country="USA">
                            <img src="http://new.rrliuxue.com/WebResources/Default/images/wish/USA.png" /><br />
                            美国<div className="bg"></div>
                            <div className="activeicon"></div>
                        </li>
                        <li data-country="AUS">
                            <img src="http://new.rrliuxue.com/WebResources/Default/images/wish/AUS.png" /><br />
                            澳洲<div className="bg"></div>
                            <div className="activeicon"></div>
                        </li>
                        <li data-country="JP">
                            <img src="http://new.rrliuxue.com/WebResources/Default/images/wish/JP.png" /><br />
                            日本<div className="bg"></div>
                            <div className="activeicon"></div>
                        </li>
                    </ul>
                    <div className="clear"></div>
                </div>
            </div>
        );
    }

}

export default XiangQuDeGuoJia;

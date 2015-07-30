/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
var Select = require('rc-select');
var Option = Select.Option;


import $ from 'jquery';
class HighSchool {
    render() {
        return (
            <div id="high" className="search-box tab-content-box">
                <dl>
                    <dd>
                        <Select value="按地区" style={{height:45}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChange}>
                            <Option value="按地区" desc="按地区">按地区</Option>
                            <Option value="英格兰" desc="英格兰 ">英格兰</Option>
                            <Option value="威尔士" desc="威尔士">威尔士</Option>
                            <Option value="苏格兰" desc="苏格兰">苏格兰</Option>
                            <Option value="北爱尔兰" desc="北爱尔兰">北爱尔兰</Option>
                        </Select>
                    </dd>
                    <dd>
                        <input type="text" className="school-name" placeholder="按名称"  name="name" />
                    </dd>
                    <dd>
                        <Select value="按类型" style={{height:45}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChange}>
                            <Option value="按类型" desc="按类型">按类型</Option>
                        </Select>
                    </dd>
                </dl>
            </div>
        );
    }

}

export default HighSchool;
/**
 * Created by XiaoKangZheng on 2015/7/28.
 */

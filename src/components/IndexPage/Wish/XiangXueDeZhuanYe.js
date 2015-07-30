/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
var Select = require('rc-select');
var Option = Select.Option;
import styles from "./Select.less";
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';

@withStyles(styles)
class XiangDuDeZhuanYe {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className="box full">
                <div className="wish-speciality">
                    <h1>想学的专业</h1>
                    <dl>
                        <dt>学历</dt>
                        <dd>
                            <Select value="高中" style={{width:200,height:45}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChange}>
                                <Option value="高中" desc="高中" selected="selected">高中</Option>
                                <Option value="大专" desc="大专 ">大专</Option>
                                <Option value="本科" desc="本科">本科</Option>
                            </Select>
                        </dd>
                        <dd className="clear"></dd>
                    </dl>
                    <dl>
                        <dt>分类</dt>
                        <dd>
                            <Select value="专业分类" style={{width:200,height:45}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChange}>
                                <Option value="专业分类" desc="专业分类" selected="selected">专业分类</Option>
                                <Option value="分类" desc="分类 ">分类</Option>
                            </Select>
                        </dd>
                        <dd className="clear"></dd>
                    </dl>
                    <dl>
                        <dt>关键字</dt>
                        <dd>
                            <input type="text" className="keyword" /></dd>
                        <dd className="clear"></dd>
                    </dl>
                    <dl>
                        <dt>&nbsp;</dt>
                        <dd>
                            <button className="btn-search button-normal">查询</button></dd>
                    </dl>
                </div>
            </div>
        );
    }
}

export default XiangDuDeZhuanYe;

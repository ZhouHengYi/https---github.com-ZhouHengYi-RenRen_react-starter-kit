/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
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
                            <select className="selectpicker show-menu-arrow form-control">
                                <option>高中</option>
                                <option>大专</option>
                                <option>本科</option>
                            </select>
                        </dd>
                        <dd className="clear"></dd>
                    </dl>
                    <dl>
                        <dt>分类</dt>
                        <dd>
                            <select className="selectpicker show-menu-arrow form-control">
                                <option>专业分类</option>
                                <option>分类</option>
                            </select>
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

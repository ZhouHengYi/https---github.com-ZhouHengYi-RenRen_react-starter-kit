/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
class XiangDuDeDaXue {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className="box">
                <div className="wish-school">
                    <h1>想读的大学</h1>
                    <div className="search-result" id="tagsList">
                        <a href="/college-detail.aspx" title="南安普顿大学">南安普顿大学</a>
                        <a href="/college-detail.aspx" title="杜伦大学">杜伦大学</a>
                        <a href="/college-detail.aspx" title="伯明翰大学">伯明翰大学</a>
                        <a href="/college-detail.aspx" title="南安普顿大学">南安普顿大学</a>
                        <a href="/college-detail.aspx" title="杜伦大学">杜伦大学</a>
                        <a href="/college-detail.aspx" title="利兹大学">利兹大学</a>
                        <a href="/college-detail.aspx" title="伯明翰大学">伯明翰大学</a>
                        <a href="/college-detail.aspx" title="南安普顿大学">南安普顿大学</a>
                        <a href="/college-detail.aspx" title="杜伦大学">杜伦大学</a>
                        <a href="/college-detail.aspx" title="南安普顿大学">南安普顿大学</a>
                        <a href="/college-detail.aspx" title="杜伦大学">杜伦大学</a>
                        <a href="/college-detail.aspx" title="伯明翰大学">伯明翰大学</a>
                        <a href="/college-detail.aspx" title="南安普顿大学">南安普顿大学</a>
                        <a href="/college-detail.aspx" title="杜伦大学">杜伦大学</a>
                        <a href="/college-detail.aspx" title="利兹大学">利兹大学</a>
                        <a href="/college-detail.aspx" title="伯明翰大学">伯明翰大学</a>
                        <a href="/college-detail.aspx" title="南安普顿大学">南安普顿大学</a>
                        <a href="/college-detail.aspx" title="杜伦大学">杜伦大学</a>
                    </div>
                    <div className="search-school">
                        <input type="text" placeholder="搜索感兴趣的学校" />
                        <button>&nbsp;</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default XiangDuDeDaXue;

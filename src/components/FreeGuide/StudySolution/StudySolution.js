/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './StudySolution.less';
import withStyles from '../../../decorators/withStyles';
import $ from 'jquery'

@withStyles(styles)
class LoginPage {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {
        let title = '免费办理－人人留学';
        this.context.onSetTitle(title);
        return (
            <div>
                <section className="study-abroad-box">
                    <div className="sectionStep1">
                        <div className="stepDv">
                            <ul className="stepUl">
                                <li className="item itema current"><i className="icon"></i>填写留学计划</li>
                                <li className="item itemb "><i className="icon"></i>确定留学方案</li>
                                <li className="item itemc"><i className="icon"></i>定制选校方案</li>
                                <div className="clear"></div>
                            </ul>
                            <div className="stepProgress">
                                <div className="yellow-dv"></div>
                            </div>
                        </div>
                        <div className="showDvPart">
                            <div className="contentDv" id="stepContentBoxA">
                                <div className="title">1.确认并完善你的留学计划，获取最适合你的留学方案</div>
                            </div>
                            <div className="contentDv" id="stepContentBoxA">
                                <div className="title">1.确认并完善你的留学计划，获取最适合你的留学方案</div>
                                <div className="wantToGo">
                                    <div>
                                        想去的国家：
                                        <input type="radio" name="city" id="usa" value="美国" checked="checked" className="icheck" />
                                        <label for="usa">美国</label>
                                        <input type="radio" name="city" id="uk" value="英国" className="icheck" />
                                        <label for="uk">英国</label>
                                        <input type="radio" name="city" id="jp" value="日本" className="icheck" />
                                        <label for="jp">日本</label>
                                        <input type="radio" name="city" id="aus" value="澳洲" className="icheck" />
                                        <label for="aus">澳洲</label>
                                    </div>
                                </div>
                                <div className="planeGoTo">
                                    <div className="selectDv">
                                        <div className="left lin40">计划出国时间：</div>
                                        <div className="boSelect">
                                            <select className="selectpicker show-menu-arrow form-control">
                                                <option value="">请选择</option>
                                                <option value="2020">2020</option>
                                                <option value="2019">2019</option>
                                                <option value="2018">2018</option>
                                                <option value="2017">2017</option>
                                                <option value="2016">2016</option>
                                            </select>
                                        </div>
                                        <div className="left lin40">&nbsp;&nbsp;年</div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="selectDv marginDv">
                                        <div className="left lin40">目前就读年级：</div>
                                        <div className="boSelect">
                                            <select className="selectpicker show-menu-arrow form-control">
                                                <option value="">请选择当前年级</option>
                                                <option value="初中">初中</option>
                                                <option value="高中">高中</option>
                                                <option value="大一">大一</option>
                                                <option value="大二">大二</option>
                                                <option value="大三">大三</option>
                                                <option value="大四">大四</option>
                                                <option value="其他">其他</option>
                                            </select>
                                        </div>
                                        <div className="left lin40">&nbsp;&nbsp;年</div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <div className="buttonDv">
                                    <button className="button-normal">获取留学方案</button>
                                </div>
                            </div>
                            <div className="contentDv" id="stepContentBoxB">
                                <div className="title">2.根据你的需求及条件，以下留学方案可供选择（可多选）</div>
                                <div className="solutionDv">
                                    <ul className="ulSolution">
                                        <li>
                                            <label for="soualtionA">
                                                <div className="title">
                                                    <input type="checkbox" className="icheck" id="soualtionA" name="checkSoualtion" value="soualtionA" checked="checked" />
                                                    语言+本科
                                                </div>
                                                <div className="adDv">
                                                    <span className="advantageColor">优点：</span>托福或雅思成绩不高或没有语言成绩也可以去美国，属于专升本
                                                </div>
                                                <div className="adDv">
                                                    <span className="advantageColor">缺点：</span>选校范围受到限制，转学分有不确定性
                                                </div>
                                            </label>
                                        </li>
                                        <li className="full">
                                            <label for="soualtionB">
                                                <div className="title">
                                                    <input type="checkbox" className="icheck" id="soualtionB" name="checkSoualtion" value="soualtionB" />
                                                    语言+三年级编入
                                                </div>
                                                <div className="adDv">
                                                    <span className="advantageColor">优点：</span>托福或雅思成绩不高或没有语言成绩也可以去美国，属于专升本
                                                </div>
                                                <div className="adDv">
                                                    <span className="advantageColor">缺点：</span>选校范围受到限制，转学分有不确定性
                                                </div>
                                            </label>
                                        </li>
                                        <li>
                                            <label for="soualtionC">
                                                <div className="title">
                                                    <input type="checkbox" className="icheck" id="soualtionC" name="checkSoualtion" value="soualtionC" />
                                                    动漫专门学校
                                                </div>
                                                <div className="adDv">
                                                    <span className="advantageColor">优点：</span>日语2级，在国内面试直接录取，没有日语成绩，有条件录取，先去附属的日语学校就读日语
                                                </div>
                                                <div className="adDv">
                                                    <span className="advantageColor">缺点：</span>学费较贵（一年9-10万人民币）
                                                </div>
                                            </label>
                                        </li>
                                        <div className="clear"></div>
                                    </ul>
                                    <div className="clear"></div>
                                </div>
                                <div className="buttonDv">
                                    <button className="button-normal">下一步，选择学校</button>
                                </div>
                            </div>
                        </div>
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

export default LoginPage;

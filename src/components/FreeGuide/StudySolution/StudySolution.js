/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';

var Select = require('rc-select');
var Option = Select.Option;

import SelectStyles from "./Select.less";

import styles from './StudySolution.less';
import withStyles from '../../../decorators/withStyles';
import $ from 'jquery'


@withStyles(SelectStyles)
@withStyles(styles)
class LoginPage {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    componentDidMount() {
        $("#stepContentBoxA").show();
    }

    componentWillUnmount() {
        console.log(2);
    }

    Step1(){
        $(".stepUl li").removeClass("current");
        $(".stepUl li").eq(0).addClass("current");
        $(".stepProgress div").eq(0).attr("class","yellow-dv");
        $(".contentDv").hide();
        $("#stepContentBoxA").show();
    }

    Step2(){
        $(".stepUl li").removeClass("current");
        $(".stepUl li").eq(1).addClass("current");
        $(".stepProgress div").eq(0).attr("class","yellow-dv step2Width");
        $(".contentDv").hide();
        $("#stepContentBoxB").show();
    }

    Step3(){
        $(".stepUl li").removeClass("current");
        $(".stepUl li").eq(2).addClass("current");
        $(".stepProgress div").eq(0).attr("class","yellow-dv step3Width");
        $(".contentDv").hide();
        $("#educationBox").show();
    }

    render() {
        let title = '免费办理－人人留学';
        this.context.onSetTitle(title);
        return (
            <div>
                <section className="study-abroad-box">
                    <div className="sectionStep1">
                        <div className="stepDv">
                            <ul className="stepUl">
                                <li className="item itema current" onClick={this.Step1}><i className="icon"></i>填写留学计划</li>
                                <li className="item itemb" onClick={this.Step2}><i className="icon"></i>确定留学方案</li>
                                <li className="item itemc" onClick={this.Step3}><i className="icon"></i>定制选校方案</li>
                                <div className="clear"></div>
                            </ul>
                            <div className="stepProgress">
                                <div className="yellow-dv"></div>
                            </div>
                        </div>
                        <div className="contentDv" id="stepContentBoxA">
                            <div className="title">1.确认并完善你的留学计划，获取最适合你的留学方案</div>
                            <div className="wantToGo">
                                <div>
                                    想去的国家：
                                    <label for="aus">澳洲</label>
                                </div>
                            </div>
                            <div className="planeGoTo">
                                <div className="selectDv">
                                    <div className="left lin40">计划出国时间：</div>
                                    <div className="boSelect">
                                        <Select value="请选择" style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChange}>
                                            <Option value="请选择" desc="请选择">请选择</Option>
                                            <Option value="2015" desc="2015 ">2015</Option>
                                            <Option value="2014" desc="2014">2014</Option>
                                            <Option value="2013" desc="2013">2013</Option>
                                        </Select>
                                    </div>
                                    <div className="left lin40">&nbsp;&nbsp;</div>
                                    <div className="clear"></div>
                                </div>
                                <div className="selectD">
                                    <div className="left lin40">目前就读年级：</div>
                                    <div className="boSelect">
                                        <Select value="请选择" style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChange}>
                                            <Option value="请选择" desc="请选择">请选择</Option>
                                            <Option value="初中" desc="初中 ">初中</Option>
                                            <Option value="高中" desc="高中">高中</Option>
                                            <Option value="大一" desc="大一">大一</Option>
                                            <Option value="大二" desc="大二">大二</Option>
                                            <Option value="大三" desc="大三">大三</Option>
                                            <Option value="大四" desc="大四">大四</Option>
                                            <Option value="其他" desc="其他">其他</Option>
                                        </Select>
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
                        <div className="contentDv" id="educationBox">
                            <div className="title">3.请准确填写你的个人信息，我们会为你推荐最适合的方案</div>
                            <div className="ws-education1">
                                <div className="education-box">
                                    <div className="content">
                                        <dl>
                                            <dd>
                                                <input type="text" id="name" placeholder="真实姓名" />
                                            </dd>
                                            <dd>
                                                <div className="sex">
                                                    <input type="radio" id="male" name="sex" value="male" className="icheck" checked="checked" />
                                                    <label for="male">男</label>
                                                </div>
                                                <div className="sex">
                                                    <input type="radio" id="female" name="sex" value="female" className="icheck" />
                                                    <label for="female">女</label>
                                                </div>
                                                <div className="clear"></div>
                                            </dd>
                                        </dl>
                                        <dl>
                                            <dd>
                                                <Select id="IMType" value="请选择" style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChange}>
                                                    <Option value="请选择" desc="请选择">请选择</Option>
                                                    <Option value="QQ" desc="QQ ">QQ</Option>
                                                    <Option value="微信" desc="微信">微信</Option>
                                                </Select>
                                            </dd>
                                            <dd>
                                                <input type="text" id="IMNO" placeholder="请输入号码" />
                                            </dd>
                                            <dd>
                                                <input type="text" id="phone" placeholder="电话" />
                                            </dd>
                                        </dl>
                                        <dl>
                                            <dd>
                                                <input type="text" id="SchoolName" placeholder="就读学校" />
                                            </dd>
                                            <dd>
                                                <Select id="JapaneseLeaveType" value="请选择" style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChange}>
                                                    <Option value="请选择" desc="请选择">请选择</Option>
                                                    <Option value="日语成绩" desc="日语成绩 ">日语成绩</Option>
                                                    <Option value="JLPT" desc="JLPT">JLPT</Option>
                                                    <Option value="J-TEST" desc="J-TEST">J-TEST</Option>
                                                    <Option value="BJT" desc="BJT">BJT</Option>
                                                    <Option value="NAT" desc="NAT">NAT</Option>
                                                    <Option value="无" desc="无">无</Option>
                                                    <Option value="艺术" desc="艺术">艺术</Option>
                                                </Select>
                                            </dd>
                                        </dl>
                                        <dl>
                                            <dd>
                                                <Select id="Leave" value="级别" style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChange}>
                                                    <Option value="级别" desc="级别">级别</Option>
                                                    <Option value="N1" desc="N1 ">N1</Option>
                                                    <Option value="N2" desc="N2">N2</Option>
                                                    <Option value="N3" desc="N3">N3</Option>
                                                    <Option value="N4" desc="N4">N4</Option>
                                                    <Option value="N5" desc="N5">N5</Option>
                                                </Select>
                                            </dd>
                                            <dd>
                                                <input type="text" id="JapaneseScore" placeholder="成绩" />
                                            </dd>
                                        </dl>

                                    </div>
                                    <div className="bottom-bg"></div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="buttonDv">
                                <button className="button-normal">完成确定选校方案</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

}

export default LoginPage;

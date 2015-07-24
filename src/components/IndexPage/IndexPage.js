/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from "./IndexPage.less";
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';

import Banner_Index from '../Banner/Index/Banner_Index';
import Wish from './Wish/Wish.js';
import OpenClass from './OpenClass/OpenClass.js';
import GaoDuanShenQing from './GaoDuanShenQing/GaoDuanShenQing.js';
import NewActivity from './NewActivity/NewActivity.js';
import EffectWish from './EffectWish/EffectWish.js';

@withStyles(styles)
class IndexPage {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'RenRenLiuXue';
    this.context.onSetTitle(title);
    return (
      <div className="IndexPage">
        <Banner_Index />
        <Wish />
        <OpenClass />
        <GaoDuanShenQing />
        <section className="plan">
          <a href="/college-recommend.aspx">
            <img data-original="http://new.rrliuxue.com/WebResources/Default/images/plan.jpg" src="http://new.rrliuxue.com/WebResources/Default/images/plan.jpg"/></a>
          <div className="action">
            <a href="/college-recommend.aspx">我要方案</a>
          </div>
          <div className="clear"></div>
        </section>
        <NewActivity />
        <EffectWish />
        <section className="flow">
          <div className="flow-box">
            <div className="one">
              <div className="one-line"></div>
              <div className="easy"></div>
              <div className="two-line"></div>
              <div className="free"></div>
              <div className="clear"></div>
            </div>
            <div className="two">
              <div className="caring"></div>
            </div>
            <div className="three">
              <div className="one-line"></div>
              <div className="efficient"></div>
              <div className="two-line"></div>
              <div className="overall"></div>
              <div className="clear"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }

}

export default IndexPage;

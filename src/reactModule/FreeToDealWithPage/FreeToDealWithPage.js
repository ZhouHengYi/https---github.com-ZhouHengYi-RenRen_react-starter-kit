/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './FreeToDealWithPage.less';

@withStyles(styles)
class FreeToDealWithPage {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
    onPageNotFound: PropTypes.func.isRequired
  };

  render() {
    let title = '123';
    this.context.onSetTitle(title);
    this.context.onPageNotFound();
    return (
        <section className="freePage">
          <div className="content">

          </div>
        </section>
    );
  }

}

export default FreeToDealWithPage;

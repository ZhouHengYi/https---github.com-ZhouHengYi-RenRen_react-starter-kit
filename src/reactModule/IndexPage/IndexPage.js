/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './IndexPage.less';

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
        <div className="IndexPage-container">
          <h1>{title}</h1>
          <p>...</p>
        </div>
      </div>
    );
  }

}

export default IndexPage;

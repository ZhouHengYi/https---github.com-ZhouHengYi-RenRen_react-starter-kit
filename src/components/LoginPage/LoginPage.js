/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import $ from 'jquery'

class LoginPage {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'LogIn';
    this.context.onSetTitle(title);
    return (
      <div className="LoginPage">
        <div className="LoginPage-container">
          <h1>{title}</h1>
          <div>
            <button onClick={this.handleGoClick}>Go!</button>
          </div>
        </div>
      </div>
    );
  }

  handleGoClick() {
    console.log($);
    $("body").append("<p>1212</p>");
    this.context.router.transitionTo(`/${this.getInputValue()}`);
  }

}

export default LoginPage;

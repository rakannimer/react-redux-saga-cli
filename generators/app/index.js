'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      `Welcome to the  ${chalk.red(`react-redux-saga-cli`)}  generator!
      The following commands are supported :
      yo react-redux-saga-cli:feature
      yo react-redux-saga-cli:saga
      yo react-redux-saga-cli:reducer
      yo react-redux-saga-cli:container
      yo react-redux-saga-cli:component
      yo react-redux-saga-cli:middleware
      yo react-redux-saga-cli:reducer
      yo react-redux-saga-cli:store
      `
    ));
  }
});

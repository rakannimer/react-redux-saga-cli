'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var state = require('../initialState');


module.exports = yeoman.Base.extend({
  end : function () {
    this.composeWith('react-redux-saga-cli:middlewareIndex');
    this.composeWith('react-redux-saga-cli:store');
  },
  prompting: function () {
    console.log(yosay('Creating Middleware'));
    var prompts = [
      {
        type: 'input',
        name: 'MIDDLEWARE_NAME',
        message: 'Middleware name?',
        default: "DEFAULT_MIDDLEWARE_NAME"
      }
    ];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('middleware.template.js'),
      this.destinationPath(state.MIDDLEWARES_PATH+this.props.MIDDLEWARE_NAME+'.js'),
      this.props
    );
  }
});

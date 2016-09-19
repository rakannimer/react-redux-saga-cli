'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var state = require('../initialState');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay(
      'Welcome to the best ' + chalk.red('react-redux-saga-cli') + ' generator!'
    ));

    var prompts = [{
        type: 'input',
        name: 'ACTION_NAME',
        message: 'What would you like to call the action ?',
        default: "DEFAULT_ACTION_NAME"
      },
      {
        type: 'input',
        name: 'SAGA_NAME',
        message: 'What would you like to call the saga ?',
        default: "DEFAULT_SAGA_NAME"
      }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      // this.props = props;
      this.props = Object.assign({}, props, {
        STORE_PATH: state.STORE_PATH
      });

    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('saga.template.js'),
      this.destinationPath(state.SAGAS_PATH+this.props.SAGA_NAME+'Saga.js'),
      this.props
    );
  }
});

'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var state = require('../initialState');


module.exports = yeoman.Base.extend({
  prompting: function () {

    var prompts = [
      {
        type: 'input',
        name: 'COMPONENT_NAME',
        message: 'Which component would you like to wrap ?',
        default: "DEFAULT_COMPONENT_NAME"
      }
    ];

    return this.prompt(prompts).then(function (props) {

      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('component.template.js'),
      this.destinationPath(state.CONTAINERS_PATH+this.props.COMPONENT_NAME+'Container.js'),
      this.props
    );
  }
});

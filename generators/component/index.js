'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var state = require('../initialState');
var fs = require('fs');
var path = require('path');

module.exports = yeoman.Base.extend({

  prompting: function () {
    console.log(yosay('Creating Component'));
    var prompts = [
      {
        type: 'input',
        name: 'COMPONENT_NAME',
        message: 'Component name?',
        default: "DEFAULT_COMPONENT_NAME"
      }
    ];
    if (!this.options.isNested){
      return this.prompt(prompts).then(function (props) {
        this.props = props;
      }.bind(this));
    }
    else {
        this.props = this.options.props;
    }
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('component.template.js'),
      this.destinationPath(state.COMPONENTS_PATH+this.props.COMPONENT_NAME+'.js'),
      this.props
    );
  },
  end : function () {
    this.composeWith('react-redux-saga-cli:componentIndex');
  },
});

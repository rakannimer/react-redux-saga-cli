'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var state = require('../initialState');


// In my-generator/generators/app/index.js
module.exports = require('yeoman-generator').Base.extend({
  prompting: function(){
      this.props = {prop:'a'};
      var prompts = [
        {
          type: 'input',
          name: 'FEATURE_NAME',
          message: 'Feature name?',
          default: "DEFAULT_FEATURE_NAME"
        },
        {
          type: 'input',
          name: 'ACTION_NAMES',
          message: 'Which actions would you like to support (space-delimited) ?',
          default: "DEFAULT_ACTIONS_NAME"
        }
      ];

      return this.prompt(prompts).then(function (props) {
        var feature = {
          COMPONENT_NAME: props.FEATURE_NAME,
          ACTION_NAMES: props.ACTION_NAMES.split(' '),
          SAGA_NAME: props.FEATURE_NAME,
          REDUCER_NAME: props.FEATURE_NAME,
          actions: props.ACTION_NAMES.split(' ')
        }
        this.props = feature;
      }.bind(this));
  },
  writing : function () {
    console.log(yosay("Let's create files for a feature"));
    this.composeWith('react-redux-saga-cli:component', {options:{isNested: true, props: this.props}});
    this.composeWith('react-redux-saga-cli:container', {options:{isNested: true, props: this.props}});
    this.composeWith('react-redux-saga-cli:reducer', {options:{isNested: true, props: this.props}});
    this.composeWith('react-redux-saga-cli:saga',  {options:{isNested: true, props: this.props}});
    this.composeWith('react-redux-saga-cli:store',  {options:{isNested: true, props: this.props}});
  }
});

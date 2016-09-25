'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var state = require('../initialState');
var actionNameCreator = require("../../helpers/actionNameCreator");

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
          type: 'list',
          name: 'FEATURE_TYPE',
          message: 'Does your feature affect state in anyway ?',
          choices: ["dumb", "smart"],
          default: "smart"
        },
        {
          type: 'input',
          name: 'ACTION_NAMES',
          message: 'Which actions would you like to support (space-delimited) ?',
          default: "DEFAULT_ACTIONS_NAME"
        }
      ];

      return this.prompt(prompts).then(function (props) {
        if (props.FEATURE_TYPE === "dumb"){
          var feature = {
            COMPONENT_NAME: props.FEATURE_NAME,
            FEATURE_TYPE:props.FEATURE_TYPE
          }
          this.props = feature;
          return;
        }
        var newActions = props.ACTION_NAMES.split(' ');
        var updatedActions = actionNameCreator.addActions(newActions);
        var feature = {
          COMPONENT_NAME: props.FEATURE_NAME,
          ACTION_NAMES: props.ACTION_NAMES.split(' '),
          SAGA_NAME: props.FEATURE_NAME,
          REDUCER_NAME: props.FEATURE_NAME,
          FEATURE_TYPE:props.FEATURE_TYPE,
          actions: Object.keys(updatedActions)
        }
        this.props = feature;
      }.bind(this));
  },
  writing : function () {
    this.log("Let's create files for the feature");

    this.composeWith('react-redux-saga-cli:component', {options:{isNested: true, props: this.props}});
    if (this.props.FEATURE_TYPE === "smart"){
      this.composeWith('react-redux-saga-cli:container', {options:{isNested: true, props: this.props}});
      this.composeWith('react-redux-saga-cli:reducer', {options:{isNested: true, props: this.props}});
      this.composeWith('react-redux-saga-cli:saga',  {options:{isNested: true, props: this.props}});
      this.composeWith('react-redux-saga-cli:store',  {options:{isNested: true, props: this.props}});
    }


  }
});

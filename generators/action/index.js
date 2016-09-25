'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var state = require('../initialState');
var actionNameCreator = require("../../helpers/actionNameCreator");

module.exports = yeoman.Base.extend({
  prompting: function () {
    if (!this.options.isNested){
        actionNameCreator.logActions();
    }
    this.log(
      "Creating Action Names Constants"
    );
    var prompts = [
      {
        type: 'input',
        name: 'ACTION_NAMES',
        message: 'Which actions would you like to add (space-delimited) ?',
        default: "DEFAULT_ACTIONS_NAME"
      }
    ];
    if (!this.options.isNested){
      return this.prompt(prompts).then(function (props) {
        var newActions = props.ACTION_NAMES.split(' ');
        var updatedActions = actionNameCreator.addActions(newActions);

        this.config.set({actionNames: updatedActions});
        this.props = Object.assign({}, props, {
          actions : Object.keys(updatedActions)
        });
      }.bind(this));
    }
    else {
      this.props = this.options.props;
      var newActions = this.props.ACTION_NAMES.split(' ');
      var updatedActions = actionNameCreator.addActions(newActions);
      this.config.set({actionNames: updatedActions});
    }
  },
  writing: function() {

    var updatedActionNames = this.config.get("actionNames");
    actionNameCreator.writeActions(this, updatedActionNames);
    this.props.actions = Object.keys(updatedActionNames);
    this.fs.copyTpl(
      this.templatePath('action.template.js'),
      this.destinationPath(state.ACTION_NAMES_PATH+'index.js'),
      this.props
    );
  }
});

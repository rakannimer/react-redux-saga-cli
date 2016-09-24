'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var state = require('../initialState');


module.exports = yeoman.Base.extend({
  end : function () {
    this.composeWith('react-redux-saga-cli:reducerIndex');
  },
  prompting: function () {
    this.log(yosay("Creating Reducer"));
    var prompts = [
      {
        type: 'input',
        name: 'REDUCER_NAME',
        message: 'What would you like to call your reducer ?',
        default: "DEFAULT_REDUCER_NAME"
      },
      {
        type: 'input',
        name: 'ACTION_NAMES',
        message: 'Which actions would you like to support (space-delimited) ?',
        default: "DEFAULT_ACTIONS_NAME"
      }
    ];

    if (!this.options.isNested){
      return this.prompt(prompts).then(function (props) {
        let actions = props.ACTION_NAMES.split(' ');
        this.props = Object.assign({}, props, {
          actions
        });
      }.bind(this));
    }
    else {
        this.props = this.options.props;
    }

  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('reducer.template.js'),
      this.destinationPath(state.REDUCERS_PATH+this.props.REDUCER_NAME+'.js'),
      this.props
    );
  }
});

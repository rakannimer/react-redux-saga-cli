'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var state = require('../initialState');


module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    // this.log(yosay(
    //   'Welcome to the striking ' + chalk.red('generator-react-redux-saga-cli') + ' generator!'
    // ));

    var prompts = [
      {
        type: 'input',
        name: 'REDUCER_NAME',
        message: 'Would you like to call your reducer ?',
        default: "DEFAULT_REDUCER_NAME"
      },
      {
        type: 'input',
        name: 'ACTION_NAMES',
        message: 'Which actions would you like to support (space-delimited) ?',
        default: "DEFAULT_ACTIONS_NAME"
      }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      let actions = props.ACTION_NAMES.split(' ');

      this.props = Object.assign({}, props, {
        actions
      });
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('reducer.template.js'),
      this.destinationPath(state.REDUCERS_PATH+this.props.REDUCER_NAME+'.js'),
      this.props
    );
  }
});

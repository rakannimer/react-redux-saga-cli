'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var state = require('../initialState');

module.exports = yeoman.Base.extend({
  end : function () {
    this.composeWith('react-redux-saga-cli:sagaIndex');
    this.composeWith('react-redux-saga-cli:store');
  },
  prompting: function () {
    this.log(yosay("Creating Saga"));

    var prompts = [{
        type: 'input',
        name: 'ACTION_NAMES',
        message: 'What would you like to call the actions (space-separated) ?',
        default: "DEFAULT_ACTION_NAMES"
      },
      {
        type: 'input',
        name: 'SAGA_NAME',
        message: 'What would you like to call the saga ?',
        default: "DEFAULT_SAGA_NAME"
      }
    ];
    if (!this.options.isNested){
      return this.prompt(prompts).then(function (props) {
        let actions = props.ACTION_NAMES.split(' ');
        this.props = Object.assign({}, props, {
          STORE_PATH: state.STORE_PATH,
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
      this.templatePath('saga.template.js'),
      this.destinationPath(state.SAGAS_PATH+this.props.SAGA_NAME+'.js'),
      this.props
    );
  }
});

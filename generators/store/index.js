'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var state = require('../initialState');
var fs = require('fs');
var path = require('path');

module.exports = yeoman.Base.extend({
  prompting: function () {

  },

  writing: function () {
    var reducersPath = path.join(process.cwd(),'reducers');

    try {
        var reducers = fs.readdirSync(reducersPath);
    }
    catch(err){
      var reducers = [];
    }
    var sagasPath = path.join(process.cwd(),'sagas');

    try {
      var sagas = fs.readdirSync(sagasPath);
    }
    catch(err){
      var sagas = [];
    }
    var middlewaresPath = path.join(process.cwd(),'middlewares');

    try {
        var middlewares = fs.readdirSync(middlewaresPath);
    }
    catch(err){
      var middlewares = [];
    }

    this.fs.copyTpl(
      this.templatePath('store.template.js'),
      this.destinationPath(state.STORE_PATH+'index.js'),
      {reducers, sagas, middlewares}
    );
  }
});

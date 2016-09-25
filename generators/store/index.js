'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var state = require('../initialState');
var fs = require('fs');
var path = require('path');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay("Creating Store"));
  },

  writing: function () {
    var reducersPath = path.join(process.cwd(),'reducers');

    var sagasPath = path.join(process.cwd(),'sagas');

    try {
      var sagas = fs.readdirSync(sagasPath);
      var indexFileIndex = sagas.indexOf('index.js');
      if (indexFileIndex > -1){
        sagas.splice(indexFileIndex, 1);
      }
      var indexFileIndex = sagas.indexOf('.DS_Store');
      if (indexFileIndex > -1){
        sagas.splice(indexFileIndex, 1);
      }
    }
    catch(err){
      var sagas = [];
    }
    var middlewaresPath = path.join(process.cwd(),'middlewares');

    try {
        var middlewares = fs.readdirSync(middlewaresPath);
        var indexFileIndex = middlewares.indexOf('index.js');
        if (indexFileIndex > -1){
          middlewares.splice(indexFileIndex, 1);
        }
        var indexFileIndex = middlewares.indexOf('.DS_Store');
        if (indexFileIndex > -1){
          middlewares.splice(indexFileIndex, 1);
        }
    }
    catch(err){
      var middlewares = [];
    }

    this.fs.copyTpl(
      this.templatePath('store.template.js'),
      this.destinationPath(state.STORE_PATH+'index.js'),
      {reducersPath, sagas, middlewares}
    );
  }
});

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
    var reducersPath = path.join(state.REDUCERS_PATH);

    var sagasPath = path.join(state.SAGAS_PATH);

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
      console.log("HERE: " +sagas[0]);
    }
    catch(err){
      console.log("ERROR ", err);
      var sagas = [];
    }
    var middlewaresPath = path.join(state.MIDDLEWARES_PATH);

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

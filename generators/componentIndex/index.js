'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var state = require('../initialState');
var fs = require('fs');
var path = require('path');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay('Creating components index.js'));
  },

  writing: function () {
    var components;
    try {
      components = fs.readdirSync(state.COMPONENTS_PATH);
      var indexFileIndex = components.indexOf('index.js');
      if (indexFileIndex > -1){
        components.splice(indexFileIndex, 1);
      }

    }
    catch(err){
      console.log("ERROR while reading from directory ", err);
      components = [];
    }
    this.fs.copyTpl(
      this.templatePath('index.template.js'),
      this.destinationPath(state.COMPONENTS_PATH+'index.js'),
      {components}
    );
  }
});

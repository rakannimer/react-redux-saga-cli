'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var state = require('../initialState');
var fs = require('fs');
var path = require('path');
var reactDocs = require('react-docgen');

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
      var indexFileIndex = components.indexOf('.DS_Store');
      if (indexFileIndex > -1){
        components.splice(indexFileIndex, 1);
      }

    }
    catch(err){
      console.log("ERROR while reading from directory ", err);
      components = [];
    }
    // components.map((component) => {
    //   this.fs.copyTpl(
    //     this.templatePath('index.template.js'),
    //     this.destinationPath(state.TESTS_PATH+component.split('.')[0]+'.test.js'),
    //     {components: [component]}
    //   );
    // });

    this.fs.copyTpl(
      this.templatePath('index.template.js'),
      this.destinationPath(state.TESTS_PATH+'index.test.js'),
      {components}
    );
  }
});

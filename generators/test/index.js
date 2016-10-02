'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var state = require('../initialState');
var fs = require('fs');
var path = require('path');
var reactDocs = require('react-docgen');

let foundProps = {};
const extractProps = (filePath) => {
  const fileString = fs.readFileSync(filePath, 'utf8');
  let matchedProps = fileString.match(/props(.[a-zA-Z]+)([^(\(|}| |\[|;|,)])+/g);
  if (matchedProps === null){
    return [];
  }
  matchedProps = matchedProps.map((prop) => {
    let newProp = prop;
    let parsedProp = newProp.split('.');
    parsedProp.shift();
    parsedProp.join('.');
    return parsedProp.join('.');
  });
  return matchedProps.filter(function(item, pos, self) {
    return self.indexOf(item) === pos;
  })
}

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay('Creating components index.js'));
    var prompts = [
      {
        type: 'input',
        name: 'COMPONENT_NAME',
        message: 'Component name?',
        default: "DEFAULT_COMPONENT_NAME"
      }
    ];
    if (!this.options.isNested){
      return this.prompt(prompts).then(function (props) {
        this.props = props;
      }.bind(this));
    }
    else {
        this.props = this.options.props;
    }
  },

  writing: function () {
    let propsArray = extractProps(state.COMPONENTS_PATH+this.props.COMPONENT_NAME+'.js');
    this.fs.copyTpl(
      this.templatePath('index.template.js'),
      // this.destinationPath(state.TESTS_PATH+components[1].split('.')[0]+'TESTING.test.js'),
      this.destinationPath(state.TESTS_PATH+this.props.COMPONENT_NAME+'.test.js'),
      // {components: [components[1]], props: [propsArray[1]]}
      { components: [this.props.COMPONENT_NAME+'.js'], props: [propsArray] }
    );

  }
});

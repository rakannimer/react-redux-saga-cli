// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
<% for (var i = 0; i < components.length; i++) { %>import <%= components[i].split('.')[0] %> from '../components/<%=components[i].split('.')[0]%>';
<% } %>

jest.mock('react-dom');
jest.mock('material-ui/styles/MuiThemeProvider');
<% for (var i = 0; i < components.length; i++) { %>
describe('<%= components[i].split('.')[0]%> test', () => {
  it('<%= components[i].split('.')[0]%> should match snapshot', () => {
    const component = renderer.create(<<%= components[i].split('.')[0]%>
<%= props[i].map((prop) => "      "+prop.split(".")[0]+"={"+prop.split(".").filter((leaf, i)=> i > 0).join(".")+"}").join("\n") %>
    />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});<% } %>

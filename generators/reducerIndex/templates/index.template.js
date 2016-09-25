// Auto-generated do not edit
<% for (var i = 0; i < components.length; i++) { %> import <%= components[i].split('.')[0] %> from './<%=components[i]%>'
<% } %>

import { combineReducers } from 'redux'

export default combineReducers(
  <% for (var i = 0; i < components.length; i++) { %> <%= components[i].split('.')[0] %>:<%= components[i].split('.')[0] %>,
  <% } %>

)
export {
  <% for (var i = 0; i < components.length; i++) { %> <%= components[i].split('.')[0] %>,
  <% } %>
}

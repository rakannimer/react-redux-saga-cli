// Auto-generated do not edit
<% for (var i = 0; i < components.length; i++) { %> import {<%= components[i].split('.')[0] %>Saga, <%= components[i].split('.')[0] %>Actions } from './<%=components[i]%>'
<% } %>


export {
  <% for (var i = 0; i < components.length; i++) { %> <%= components[i].split('.')[0] %>Saga, <%= components[i].split('.')[0] %>Actions,
  <% } %>
}

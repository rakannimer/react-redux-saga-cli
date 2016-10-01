// Auto-generated do not edit
import { combineReducers } from 'redux';

<% for (var i = 0; i < components.length; i++) { %>import <%= components[i].split('.')[0] %> from './<%=components[i].split('.')[0]%>';
<% } %>

export default combineReducers({
<% for (var i = 0; i < components.length; i++) { %>  <%= components[i].split('.')[0] %>,
<% } %>});

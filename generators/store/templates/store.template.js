/* Generated file do not edit */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import watch from 'redux-watch'
import createSagaMiddleware from 'redux-saga'

<% for (var i = 0; i < reducers.length; i++) { %>
import <%= reducers[i].split(".")[0] %> from '../reducers/<%=reducers[i]%>' <% } %>
<% for (var i = 0; i < sagas.length; i++) { %>
import <%= sagas[i].split(".")[0] %> from '../sagas/<%=sagas[i]%>' <% } %>
<% for (var i = 0; i < middlewares.length; i++) { %>
import <%= middlewares[i].split(".")[0] %> from '../middlewares/<%=middlewares[i]%>'.js <% } %>

const sagaMiddleware = createSagaMiddleware()

let store = createStore(appReducers,
  compose(
    applyMiddleware(thunk,
      <% for (var i = 0; i < middlewares.length; i++) { %>
        <%= middlewares[i] %>, <% } %>
      sagaMiddleware,
      record.middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

<% for (var i = 0; i < sagas.length; i++) { %>
sagaMiddleware.run(<%=sagas[i]%>)
<% } %>
export {store};

import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import {store} from '../store';


const <%= SAGA_NAME %>Actions = {
  <% for (var i=0; i<actions.length; i++) { %>
  <%= actions[i] %> : "<%= actions[i] %>",<% } %>
}

function* <%= SAGA_NAME %>(action) {
   let currentState = store.getState();
  <% for (var i=0; i<actions.length; i++) {%>
   try {
     let input = action;
     yield put({type: "<%= actions[i] %>_REQUESTED", user: {}});
     yield call( Math.random , note );
     yield put({type: "<%= actions[i] %>_SUCCESS", note: note} );
   } catch (e) {
      yield put({type: "<%= actions[i] %>_FAILED", message: e.message});
   } <% } %>

}

/*
  Starts <%= SAGA_NAME %> on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* <%= SAGA_NAME %>Saga() {
  <% for (var i=0; i<actions.length; i++) { %>
  yield* takeEvery("<%= actions[i] %>", <%= SAGA_NAME %>); <% } %>
}

export default {<%= SAGA_NAME %>Saga,  <%= SAGA_NAME %>Actions};

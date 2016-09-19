import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import {store} from '../store';


const <%= SAGA_NAME %>Actions = {
  <%= ACTION_NAME %> : "<%= ACTION_NAME %>"
}

function* <%= SAGA_NAME %>(action) {
   try {
     let currentState = store.getState();
     let input = action;
     yield put({type: "<%= ACTION_NAME %>_REQUESTED", user: {}});
     yield call( Math.random , note );
     yield put({type: "<%= ACTION_NAME %>_SUCCESS", note: note} );
   } catch (e) {
      yield put({type: "<%= ACTION_NAME %>_FAILED", message: e.message});
   }
}

/*
  Starts <%= SAGA_NAME %> on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* <%= SAGA_NAME %>Saga() {
  yield* takeEvery("<%= ACTION_NAME %>", <%= SAGA_NAME %>);
}

export default {<%= SAGA_NAME %>Saga,  <%= SAGA_NAME %>Actions};

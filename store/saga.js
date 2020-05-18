/* eslint-disable no-unused-vars */
import { all, call, put, takeEvery } from "redux-saga/effects";

function apiCall(string) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Resolved");
    }, 2000);
  });
}

function* doStuff() {
  yield call(apiCall);

  yield put({
    type: "CONFIRM",
    payload: {
      confirmed: true
    }
  });
}

export default function* rootSaga() {
  yield all([takeEvery("DO_STUFF", doStuff)]);
}

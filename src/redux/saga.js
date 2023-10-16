// Define Redux Sagas (sagas/newsSaga.js)

// sagas/newsSaga.js

import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { fetchNewsData } from "./variable-slice";
import { fetchNewsapi } from "../axios";

function* fetchNewsSaga() {
  try {
    const response = yield call(fetchNewsapi);
    // () =>
    //   axios.get(
    //     "https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=9b64bcfe576047ba8e5bb7fd24c9e526"
    //   )
    yield put(fetchNewsData(response.articles));
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export default function* watchNews() {
  yield takeEvery("FETCH_NEWS", fetchNewsSaga);
}

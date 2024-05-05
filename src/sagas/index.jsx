import {
  delay,
  all,
  call,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { fetchedSearchMovies, searchMovies } from "../redux/search";
import { API_KEY } from "../config";
import TheMovieDbApi from "../lib/api";
import { fetchedGenres, getGenres } from "../redux/genres";
import { getPopularMovies, fetchedPopularMovies } from "../redux/movies";

const api = new TheMovieDbApi(API_KEY);

function* fetchGenres() {
  yield put(fetchedGenres(yield call(api.getGenres)));
}

function* fetchSearchMovies(action) {
  yield delay(500);

  yield put(fetchedSearchMovies(yield call(api.searchMovies, action.payload)));
}

function* fetchPopularMovies(action) {
  yield put(
    fetchedPopularMovies(yield call(api.getPopularMovies, action.payload))
  );
}

export default function* watcherSaga() {
  yield all([
    yield takeEvery(getPopularMovies.type, fetchPopularMovies),
    yield takeEvery(getGenres.type, fetchGenres),
    yield takeLatest(searchMovies.type, fetchSearchMovies),
  ]);
}

import { takeLatest, put, call } from "redux-saga/effects";
import * as actions from "./../actions/postAction";
import * as api from "./../../api/api";

function* getPosts() {
  try {
    const res = yield call(api.getPosts);
    if (res.data.length) {
      yield put(actions.getPosts.getPostsSuccess(res.data));
    }
  } catch (error) {
    yield put(actions.getPosts.getPostsFailure(error));
  }
}

function* createPost(data) {
  try {
    const res = yield call(api.createPost(data));
    if (res) {
      yield put(actions.createPost.createPostSuccess(res.data));
    }
  } catch (error) {
    yield put(actions.createPost.createPostFailure(error));
  }
}

function* mySagas() {
  yield takeLatest(actions.getPosts.getPostsRequest, getPosts);
  yield takeLatest(actions.createPost.createPostRequest, createPost);
}

export default mySagas;

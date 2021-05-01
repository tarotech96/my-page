import { takeLatest, put, call } from "redux-saga/effects";
import { getPosts, createPost } from "redux/actions/postAction.js";
import * as api from "api/api.js";
import { login } from "redux/actions/userAction";

function* getAllPosts() {
  try {
    const res = yield call(api.getPosts);
    if (res.data.length) {
      yield put(getPosts.getPostsSuccess(res.data));
    }
  } catch (error) {
    yield put(getPosts.getPostsFailure(error));
  }
}

function* createNewPost(action) {
  try {
    const res = yield call(api.createPost, action.payload);
    if (res) {
      yield put(createPost.createPostSuccess(res.data));
    }
  } catch (error) {
    yield put(createPost.createPostFailure(error));
  }
}

function* loginAction(action) {
  try {
    const res = yield call(api.login, action.payload);
    if (res) {
      yield put(login.loginSuccess(res.data));
    }
  } catch (error) {
    yield put(login.loginFailure(error));
  }
}

function* mySagas() {
  yield takeLatest(getPosts.getPostsRequest, getAllPosts);
  yield takeLatest(createPost.createPostRequest, createNewPost);
  yield takeLatest(login.loginRequest, loginAction);
}

export default mySagas;

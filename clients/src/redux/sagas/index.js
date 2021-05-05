import { takeLatest, put, call } from 'redux-saga/effects'
import * as api from 'api/api.js'
import { loginAction, updateProfileAction } from 'redux/actions/userAction'

function* loginSaga(action) {
  try {
    const res = yield call(api.login, action.payload)
    if (res) {
      yield put(loginAction.loginSuccess(res.data))
    }
  } catch (error) {
    yield put(loginAction.loginFailure(error))
  }
}

function* updateProfileSaga(action) {
  try {
    const res = yield call(api.updateProfile, action.payload)
    if (res) {
      yield put(updateProfileAction.updateProfileSuccess(res.data))
    }
  } catch (error) {
    yield put(updateProfileAction.updateProfileFailure(error))
  }
}

function* mySagas() {
  yield takeLatest(loginAction.loginRequest, loginSaga)
  yield takeLatest(updateProfileAction.updateProfileRequest, updateProfileSaga)
}

export default mySagas

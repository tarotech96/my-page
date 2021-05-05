import { initialState } from 'redux/states/user'
import { loginAction, updateProfileAction } from 'redux/actions/userAction'
import { getType } from 'constants/utilities'
import { LOGOUT, CLEAR_ERROR } from 'constants/actionType'

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case getType(loginAction.loginSuccess):
      return {
        ...state,
        isLogin: true,
        userInfo: action.payload
      }
    case getType(loginAction.loginFailure):
      return {
        ...state,
        error: action.payload
      }
    case LOGOUT:
      sessionStorage.clear()
      return {
        ...state,
        isLogin: false,
        userInfo: {},
        isSuccess: false
      }
    case CLEAR_ERROR:
      return {
        ...state,
        error: {}
      }
    case getType(updateProfileAction.updateProfileSuccess):
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          ...action.payload
        },
        error: {}
      }
    case getType(updateProfileAction.updateProfileFailure):
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default userReducers

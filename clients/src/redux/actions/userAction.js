import { createAction, createActions } from 'redux-actions'
import { LOGOUT, CLEAR_ERROR } from 'constants/actionType'

export const loginAction = createActions({
  loginRequest: (payload) => payload,
  loginSuccess: (payload) => payload,
  loginFailure: (error) => error
})

export const updateProfileAction = createActions({
  updateProfileRequest: (payload) => payload,
  updateProfileSuccess: (payload) => payload,
  updateProfileFailure: (error) => error
})

export const logout = createAction(LOGOUT)
export const clearError = createAction(CLEAR_ERROR)

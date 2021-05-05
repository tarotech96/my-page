import { combineReducers } from 'redux'
import userReducers from './userReducer.js'
import modalReducers from './modalReducer.js'

const appReducers = combineReducers({
  userReducers,
  modalReducers
})

export default appReducers

import { combineReducers } from 'redux'
import { getAllPosts, createNewPost } from './postReducer.js'

const appReducers = combineReducers({
  getAllPosts,
  createNewPost,
})

export default appReducers;
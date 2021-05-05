import instance from 'constants/baseUrl'
import {
  GET_LIST_POST,
  CREATE_POST,
  UPDATE_POST,
  GET_POST_BY_ID,
  LOGIN,
  REGISTER,
  UPDATE_PROFILE
} from 'constants/api_path'

export const getPosts = () => instance.get(GET_LIST_POST)
export const createPost = (payload) => instance.post(CREATE_POST, payload)
export const updatePost = (payload) => instance.post(UPDATE_POST, payload)
export const getPostById = (postId) => instance.post(GET_POST_BY_ID, { postId })
export const login = (payload) => instance.post(LOGIN, payload)
export const register = (payload) => instance.post(REGISTER, payload)
export const updateProfile = (payload) => instance.post(UPDATE_PROFILE, payload)

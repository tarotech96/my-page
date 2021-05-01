import instance from "../constants/baseUrl";
import {
  GET_LIST_POST,
  CREATE_POST,
  UPDATE_POST,
  LOGIN,
  REGISTER,
} from "constants/api_path";

export const getPosts = () => instance.get(GET_LIST_POST);
export const createPost = (payload) => instance.post(CREATE_POST, payload);
export const updatePost = (payload) => instance.post(UPDATE_POST, payload);
export const login = (payload) => instance.post(LOGIN, payload);
export const register = (payload) => instance.post(REGISTER, payload);

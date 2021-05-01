import { createAction, createActions } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const getPosts = createActions({
  getPostsRequest: undefined,
  getPostsSuccess: (payload) => payload,
  getPostsFailure: (error) => error,
});

export const createPost = createActions({
  createPostRequest: (payload) => payload,
  createPostSuccess: (payload) => payload,
  createPostFailure: (error) => error,
});

export const openModal = createAction('OPEN_MODAL');
export const closeModal = createAction('CLOSE_MODAL');

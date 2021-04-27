import { initialState } from "../states/post";
import { getType, getPosts, createPost } from "../actions/postAction";

const getAllPosts = (state = initialState.posts, action) => {
  switch (action.type) {
    case getType(getPosts.getPostsRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getPosts.getPostsSuccess):
      return {
        ...state,
        isLoading: true,
        data: action.payload,
      };
    case getType(getPosts.getPostsFailure):
      return {
        ...state,
        isLoading: false,
        data: [],
      };
    default:
      return state;
  }
};

const createNewPost = (state = initialState.post, action) => {
  switch (action.type) {
    case getType(createPost.createPostRequest):
      return {
        ...state,
        isSuccess: false,
      };
    case getType(createPost.createPostSuccess):
      return {
        ...state,
        isSuccess: true,
        data: action.payload,
      };
    case getType(createPost.createPostFailure):
      return {
        ...state,
        isSuccess: false,
      };
    default:
      return state;
  }
};

export { getAllPosts, createNewPost };

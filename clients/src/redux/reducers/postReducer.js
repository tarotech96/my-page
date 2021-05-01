import { initialState } from "../states/post";
import { getType, getPosts, createPost } from "../actions/postAction";

const postReducers = (state = initialState, action) => {
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
    case getType(createPost.createPostSuccess):
      return {
        ...state,
        isSucceeded: true,
      };
    default:
      return state;
  }
};

export default postReducers;

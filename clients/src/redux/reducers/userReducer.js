import { initialState } from "redux/states/user";
import { getType } from "redux/actions/postAction";
import * as userAction from "redux/actions/userAction.js";

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case getType(userAction.login.loginSuccess):
      return {
        ...state,
        isLogin: true,
        userInfo: action.payload,
      };

    default:
      return state;
  }
};

export default userReducers;

import { createActions } from "redux-actions";

export const login = createActions({
  loginRequest: (payload) => payload,
  loginSuccess: (payload) => payload,
  loginFailure: (error) => error,
});

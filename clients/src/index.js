import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/css/main.css"
import App from "./App.jsx";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import mySagas from "./redux/sagas";
import appReducers from "./redux/reducers"

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  appReducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/css/main.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistReducer, persistStore } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import mySagas from "./redux/sagas";
import appReducers from "./redux/reducers";
import { PersistGate } from "redux-persist/integration/react";

// create a redux middleware and connect the saga to redux store
const sagaMiddleware = createSagaMiddleware();
//config redux persist to save data
const persistConfig = {
  key: "data",
  storage: storageSession,
  stateReconciler: autoMergeLevel2,
};

const initialState = {};

//combining reducer
const pReducer = persistReducer(persistConfig, appReducers);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store
const store = createStore(
  pReducer,
  initialState,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

// create a persistor for a given store
const persistor = persistStore(store);
sagaMiddleware.run(mySagas);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

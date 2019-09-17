import { createStore, applyMiddleware } from "redux";
import {  composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/rootReducer";
import thunk from 'redux-thunk'

export const configureStore = () => {
// I created the store which takes first param as the reducer and second store enhancer
  const middlewares = [thunk]

  const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares))

  const store = createStore(rootReducer, composedEnhancer)

  return store;
}
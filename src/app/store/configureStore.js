import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";

export const configureStore = () => {
// I created the store which takes first param as the reducer and second store enhancer
  const store = createStore(rootReducer)

  return store;
}
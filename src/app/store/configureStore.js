import { createStore } from "redux";
import testReducer from "../../features/testarea/testReducer";

export const configureStore = () => {
               // I created the store which takes first param as the reducer and second store enhancer
  const store = createStore(testReducer)

  return store;
}
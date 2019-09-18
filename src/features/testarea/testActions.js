import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";
import { asyncActionStarts, asyncActionFinish } from "../async/async.actions";
import { ASYNC_ACTION_STARTS } from "../async/async.constants";

export const incrementCounter = () => {
  return{
    type: INCREMENT_COUNTER
  }
}
export const decrementCounter = () => {
  return{
    type: DECREMENT_COUNTER
  }
}

const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const incrementAsync = (name) => {
  return async dispatch => {
    dispatch({type: ASYNC_ACTION_STARTS, payload: name})
    await delay(3000)
    dispatch(incrementCounter())
    dispatch(asyncActionFinish())
  }
}

export const decrementAsync = (name) => {
  return async dispatch => {
    dispatch({type: ASYNC_ACTION_STARTS, payload: name})
    await delay(3000)
    dispatch({type: DECREMENT_COUNTER})
    dispatch(asyncActionFinish())
  }
}
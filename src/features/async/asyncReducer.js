import { createReducer } from "../../app/common/util/reducerUtils"
import { ASYNC_ACTION_STARTS, ASYNC_ACTION_FINISH, ASYNC_ACTION_ERROR } from "./async.constants"

const initialState = {
  loading: false
}

const asyncActionStarted = ( state ) => {
  return {
    ...state,
    loading: true
  }
}

const asyncActionFinish = ( state ) => {
  return {
    ...state,
    loading: false
  }
}

const asyncActionError = ( state ) => {
  return {
    ...state,
    loading: false
  }
}

export default createReducer(initialState, {
  [ASYNC_ACTION_STARTS]: asyncActionStarted,
  [ASYNC_ACTION_FINISH]: asyncActionFinish,
  [ASYNC_ACTION_ERROR]: asyncActionError
})
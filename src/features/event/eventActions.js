import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, FETCH_EVENTS } from "./eventConstant";
import { asyncActionStarts, asyncActionFinish, asyncActionError } from '../async/async.actions'
import { fetchSampleData } from "../../app/data/mockApi";

// asta e actions creator care va returna event 
export const createEvent = (event) => {
  return {
    type: CREATE_EVENT,
    payload: {
      event
    }
  }

}
export const updateEvent = (event) => {
  return {
    type: UPDATE_EVENT,
    payload: {
      event
    }
  }
}

export const deleteEvent = (eventId) => {
  return {
    type: DELETE_EVENT,
    payload: {
      eventId
    }
  }
}
export const loadEvents = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStarts())
      const events = await fetchSampleData()
      dispatch({type: FETCH_EVENTS, payload: { events }})
      dispatch(asyncActionFinish())
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError())
    }
  }
}


import { createReducer } from "../../app/common/util/reducerUtils";

const initialState = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-23",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "/assets/images/5.png",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "/assets/images/images.jpg"
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "/assets/images/test1.png"
      }
    ]
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "/assets/images/5.png",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "/assets/images/images.jpg"
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "/assets/images/test1.png"
      }
    ]
  }
];

const createEvent = (state, payload) => {
  return [ ...state, payload.event ] 
}

const updateEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.event.id), payload.event
  ]
} 

const deleteEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.eventId)
  ]
}

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent
})
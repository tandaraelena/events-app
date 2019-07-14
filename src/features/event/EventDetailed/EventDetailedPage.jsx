import React from "react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedSideBar from "./EventDetailedSideBar";
import { Grid } from 'semantic-ui-react'

const event = {
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
}

console.log(event.attendees)

const EventDetailedPage = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event}/>  
        <EventDetailedInfo event={event}/>
        <EventDetailedChat/>
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSideBar attendees={event.attendees}/>
      </Grid.Column>
    </Grid>
  );
};

export default EventDetailedPage;

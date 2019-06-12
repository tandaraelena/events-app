import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";

const eventsDashboard = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27T11:00:00+00:00",
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
    date: "2018-03-28T14:00:00+00:00",
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

class EventDashboard extends Component {
  state = {
    events: eventsDashboard,
    isOpen: false
  };

  handlerFormOpen = () => {
    this.setState({
      isOpen: true
    });
  };

  handlerCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={this.state.events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handlerFormOpen}
            positive
            content="Create Event"
          />
          {this.state.isOpen && (
            <EventForm handlerCancel={this.handlerCancel} />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;

import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import { connect } from 'react-redux';
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from "cuid";
import { createEvent, deleteEvent, updateEvent } from '../eventActions'

const mapState = (state) => ({
  events: state.events
})

const actions = {
  createEvent, 
  deleteEvent, 
  updateEvent
}

class EventDashboard extends Component {
  state = {
    selectedEvent: null,
    isOpen: false
  };

  handlerFormOpen = () => {
    this.setState({
      isOpen: true
    });
  };

  // handlerCancel = () => {
  //   this.setState({
  //     isOpen: false
  //   });
  // };

  handleCreateFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    });
  };

  handleFormCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/images/test1.png";
    this.props.createEvent(newEvent);
    this.setState(({ events }) => ({
      isOpen: false
    }));
  };

  handleSelectEvent = event => {
    this.setState({
      selectedEvent: event,
      isOpen: true
    });
  };

  handleUpdateEvent = updatedEvent => {
    this.props.updateEvent(updatedEvent);
    this.setState(({ events }) => ({
      isOpen: false,
      selectedEvent: null
    }));
  };

  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };

  render() {
    const { isOpen, selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            selectEvent={this.handleSelectEvent}
            deleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleCreateFormOpen}
            positive
            content="Create Event"
          />
          {isOpen && (
            <EventForm
              key={selectedEvent ? selectedEvent.id : 0}
              updateEvent={this.handleUpdateEvent}
              selectedEvent={selectedEvent}
              createEvent={this.handleCreateEvent}
              cancelForm={this.handleFormCancel}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(EventDashboard);

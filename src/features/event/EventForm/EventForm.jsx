import React, { Component } from "react";
import { connect } from 'react-redux' 
import { Segment, Form, Button } from "semantic-ui-react";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id; // check the react dev tool, search for EventForm and see the props

  let event ={ 
      title: "",
      date: "",
      city: "",
      venue: "",
      hostedBy: ""
  }
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0]
  }
  return {
    event
  }

}

class EventForm extends Component {
  state = {...this.props.event}

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        ...this.props.selectedEvent
      });
    }
  }

  handleFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.id) {
      this.props.updateEvent(this.state);
    } else {
      this.props.createEvent(this.state);
    }
    console.log(this);
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { title, date, city, venue, hostedBy } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit} autoComplete="off">
          <Form.Field>
            <label>Event Title</label>
            <input
              name="title"
              onChange={this.handleInputChange}
              value={title}
              placeholder="Event Title"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name="date"
              type="date"
              onChange={this.handleInputChange}
              value={date}
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              onChange={this.handleInputChange}
              value={city}
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name="venue"
              onChange={this.handleInputChange}
              value={venue}
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              onChange={this.handleInputChange}
              value={hostedBy}
              placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={this.props.history.goBack} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}
export default connect(mapState)(EventForm);

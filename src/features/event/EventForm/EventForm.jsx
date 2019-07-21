import React, { Component } from "react";
import { connect } from 'react-redux' 
import { reduxForm, Field } from 'redux-form'
import { Segment, Form, Button, Header, Grid } from "semantic-ui-react";
import { createEvent, updateEvent } from '../eventActions'
import cuid from "cuid";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";

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

const actions = {
  createEvent,
  updateEvent
}

const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
];

class EventForm extends Component {
handleFormSubmit = evt => {
  evt.preventDefault();
  if (this.state.id) {
    this.props.updateEvent(this.state);
    this.props.history.push(`/events/${this.state.id}`)
  } else {
    const newEvent = {
      ...this.state,
      id: cuid(),
      hostPhotoURL: "/assets/images/test1.png"
    }
    this.props.createEvent(newEvent);
    this.props.history.push(`/events`)
  }
};

  render() {
    return (
      <Grid.Column width={10}>
        <Segment>
          <Header sub color='teal' content='Event Details'/>
          <Form onSubmit={this.handleFormSubmit} autoComplete="off">
            <Field 
              name='title'
              component={TextInput}
              placeholder='Give the event a name'/>
            <Field
              name='category'
              component={SelectInput}
              options={category}
              placeholder='What is your event about?'/>
            <Field
              name='description'
              component={TextArea}
              rows={3}
              placeholder='Tell us about your event'/>
            <Header sub color='teal' content='Event Location Details'/>
            <Field
              name='city'
              component={TextInput}
              placeholder='Event City'/>
            <Field
              name='venue'
              component={TextInput}
              placeholder='Event Venue'/>
            <Field
              name='date'
              component={TextInput}
              placeholder='Event Date'/>
            <Button positive type="submit">
              Submit
            </Button>
            <Button onClick={this.props.history.goBack} type="button">
              Cancel
            </Button>
          </Form>
        </Segment>
      </Grid.Column>
    );
  }
}
export default connect(mapState, actions)(reduxForm({ form: 'eventForm' })(EventForm));

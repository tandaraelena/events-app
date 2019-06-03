import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import EventDashboard from "../../features/event/eventDashboard/EventDashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Events</h1>
        <EventDashboard />
      </div>
    );
  }
}

export default App;

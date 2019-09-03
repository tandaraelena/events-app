import React, { Component } from 'react';
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./testActions";
import { Button } from "semantic-ui-react";
import TestPlaceInput from './TestPlaceInput'
import SimpleMap from './SimpleMap';

const mapStateToProps = ( state ) => ({
  data: state.test.data
})

const actions = {
  incrementCounter,
  decrementCounter
}

class TestComponent extends Component {
  render() {
    const { incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <h1>Test Component</h1>
        <h3>The answer is: {this.props.data}</h3>
        <Button onClick={incrementCounter} positive content="Increment"/>
        <Button onClick={decrementCounter} negative content="Decrement"/>
        <br/>
        <TestPlaceInput />
        <SimpleMap/>
      </div>
    )
  }
}
export default connect(mapStateToProps, actions)(TestComponent)
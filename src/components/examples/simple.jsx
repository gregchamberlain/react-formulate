import React, { Component, PropTypes } from 'react';
import * as InputTypes from 'react-formulate';

export default type => options => class Example extends Component {
  constructor(props) {
    super(props);
    this.input = InputTypes[type](options);
    this.state = {
      value: this.input.defaultValue
    };
  }

  handleChange = value => {
    this.setState({value});
  }

  render() {
    return (
      <this.input value={this.state.value} onChange={this.handleChange} />
    );
  }
};

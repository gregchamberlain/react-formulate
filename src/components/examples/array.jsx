import React, { Component, PropTypes } from 'react';
import { array, string} from 'react-formulate';

const Input = array(string(), {label: 'Strings'});

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ['string 1']
    };
  }

  handleChange = value => {
    this.setState({value});
  }

  render() {
    return (
      <Input value={this.state.value} onChange={this.handleChange} />
    );
  }
};

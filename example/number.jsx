import React, { Component } from 'react';
import { number } from '../src';

const Input = number({label: 'Number', min: 0, max: 5, step: 0.1});

export default class Number extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0.00
    };
  }

  update = value => {
    this.setState({value});
  }

  render() {
    return (
      <Input onChange={this.update} value={this.state.value} />
    );
  }
}

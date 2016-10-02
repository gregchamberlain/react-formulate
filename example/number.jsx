import React, { Component } from 'react';
import { number } from '../src';

const Input = number({label: 'Number'});

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
      <input type="number" />
    );
  }
}

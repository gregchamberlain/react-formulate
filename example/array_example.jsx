import React, { Component, PropTypes } from 'react';
import { array, number } from '../src';

const Input = array(number())({label: 'numbers'});

export default class ArrayExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [1, 2, 3]
    };
  }
  handleChange = value => {
    this.setState({value});
  }
  render() {
    return (
      <div>
        <Input value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}

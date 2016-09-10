import React, { Component } from 'react';
import fromObject from './from_object.js';
import { merge } from 'lodash';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = merge({}, props.from);
    this.inputs = fromObject(this.state)();
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }

  handleChange = val => {
    this.setState(val);
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <this.inputs value={this.state} onChange={this.handleChange}/>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default Form;

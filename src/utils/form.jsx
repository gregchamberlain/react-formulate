import React, { Component } from 'react';
import fromObject from './from_object.js';
import { merge, isEqual } from 'lodash';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = merge({}, props.from);
    this.inputs = fromObject(this.state);
  }

  componentWillReceiveProps(props) {
    if (!isEqual(props.from, this.props.from)) {
      const data = merge({}, props.from);
      this.inputs = fromObject(data);
      this.setState(data);
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
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

Form.defaultProps = {
  from: {},
  onSubmit: value => console.log(value)
};

export default Form;

import React, { Component, PropTypes } from 'react';
import InputTypes from '../src';

const Form = InputTypes.object({label: 'Product'})({
  name: InputTypes.string({label: 'Name'}),
  description: InputTypes.text({label: 'Description'}),
  tags: InputTypes.array({label: 'Tags'})(InputTypes.string())
})


export default class ComponentName extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      tags: []
    }
  }

  handleChange = val => {
    this.setState(val)
  }

  render() {
    return (
      <div>
        <h1>Form</h1>
        <Form onChange={this.handleChange} value={this.state} />
        <hr />
        <div><pre>{JSON.stringify(this.state, null, 2)}</pre></div>
      </div>
    );
  }
}

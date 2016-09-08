import React, { Component, PropTypes } from 'react';
import { object, string, text, color, array} from '../src';

const Form = object({label: 'Product'})({
  name: string({label: 'Name'}),
  description: text({label: 'Description'}),
  color: color({label: 'Color'}),
  variants: array({label: 'Variants'})(
    object({label: 'Varient'})({
      name: string({label: 'Name'}),
      options: array({label: 'Options'})(
        string()
      )
    })
  )
})


export default class ComponentName extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      color: {r: 0, g: 0, b: 0, a: 1},
      variants: []
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

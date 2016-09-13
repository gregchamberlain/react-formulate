import React, { Component, PropTypes } from 'react';
import Form, { object, string, text, color, array, boolean, fromObject } from '../src';


const obj = {
  firstName: 'Greg',
  lastName: 'Chamberlain',
  cool: true,
  skills: ["Coding", "Sports", "Other"],
  age: 22,
  password: 'asdasasdasdads',
  longText: 'asdasdkjadshkljasdhalskdjahsdlkajsdhalkdsjhasdlkjhgsddljhalskdjhdflkjsadh',
  contact: {
    phone: {
      mobile: '(715) 307-7746',
      home: '(715) 479 4943'
    },
    emails: ['gregchamberlain94@gmail.com']
  }
};

// const Form = fromObject(obj)();
// const Form = object({label: 'Product'})({
//   name: string({label: 'Name'}),
//   description: text({label: 'Description'}),
//   color: color({label: 'Color'}),
//   pretty: boolean(),
//   variants: array({label: 'Variants'})(
//     object()({
//       name: string({label: 'Name'}),
//       options: array({label: 'Options'})(
//         string()
//       )
//     })
//   )
// });


export default class ComponentName extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: obj
    };
    // this.state = {
    //   name: '',
    //   description: '',
    //   color: {r: 0, g: 0, b: 0, a: 1},
    //   pretty: false,
    //   variants: []
    // };
  }

  handleChange = val => {
    // this.setState({value: val});
  }

  render() {
    return (
      <div>
        <h1>Form</h1>
        {/* <Form onChange={this.handleChange} value={this.state} /> */}
        <Form from={this.state.value}/>
        <hr />
        <div><pre>{JSON.stringify(this.state, null, 2)}</pre></div>
      </div>
    );
  }
}

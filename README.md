# react-formulate [![npm version](https://badge.fury.io/js/react-formulate.svg)](https://badge.fury.io/js/react-formulate)
Easily create forms for even the most complex data.

## Gettings Started
Creating a form from preexisting data is as easy as passing the data into the `from` prop of the `Form` component. If you don't have preexisting data just create an object with the default values that should populate the form.
```js
import React, { Component } from 'react';
import Form from 'react-formulate';

// Preexisting data

const data = {
  firstName: 'John',
  lastName: 'Doe',
  ...
}

// From scratch

const data = {
  firstName: '',
  lastName: '',
  ...
}

class MyComponent extends Component {

  handleSubmit = newData => {
    console.log(newData);
  }

  render() {
    return (
      <div>
        ...
        <Form from={data} onSubmit={this.handleSubmit} />
      </div>
    )
  }
}
```
### Complex Data
`react-formulate`s `Form` will create forms for even the most complex data structures. i.e. the data in the example above could be something like this.

```js
const data = {
  firstName: 'John',
  lastName: 'Doe',
  age: 23,
  contact: {
    phone: {
      home: '(444) 444-4444',
      mobile: '(555) 555-5555'
    },
    emails: [
      'john@doe.com',
      'johndoe@mail.com'
    ]
  }
}
```

### TODO List
- [ ] Custom Labels
- [ ] InputType Overrides
- [ ] Input Validators

Created with ♥ by [Greg Chamberlain](https://github.com/gregchamberlain)

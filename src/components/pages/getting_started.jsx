import React from 'react';
import Code from '../ui/code';
import Example from '../ui/example';
import BasicExample from '../../examples/basic.example';
const str = `const data = {
  firstName: "John",
  lastName: "Doe",
  age: 32
}`;

const GettingStarted = ({  }) => (
  <div className="fill getting-started">
    <div className="header">
        <h1>react-formulate</h1>
        <p>The easiest way to create forms in React</p>
        <code>npm install --save react-formulate</code>
    </div>
    <div className="content">
      <h1>Getting Started</h1>
      <p>Creating a form from preexisting data is as easy as passing the data into the <b>from</b> prop of the <b>Form</b> component. If you don't have preexisting data just create an object with the default values that should populate the form.</p>
      <Code value={BasicExample} readOnly/>
      <Example data={str} />
    </div>
  </div>
);

export default GettingStarted;

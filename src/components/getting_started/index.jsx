import React from 'react';
import Example from '../ui/example.jsx';
const str = `{
  "firstName": "John",
  "lastName": "Doe",
  "age": 22
}`;

const GettingStarted = ({  }) => (
  <div className="fill getting-started">
    <div className="header">
        <h1>react-formulate</h1>
        <p>The easiest way to create forms in React</p>
        <code>npm install --save react-formulate</code>
    </div>
    <div className="content">
      <Example data={str} />
    </div>
  </div>
);

export default GettingStarted;

import React from 'react';
import Code from '../ui/code';
import Example from '../ui/example';
import BasicExample from '../../examples/basic.example';
import DefinitionExample from '../../examples/definition.example';
import { Link } from 'react-router';
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
      <p><c>react-formulate's</c> goal is to make it easier to create forms and controlled inputs in React. It includes a component to dynamically generate complete <c>Forms</c> from objects, as well as utilites to create controlled inputs for anything from a primative data type (string, number, boolean) to a complex, nested data structure of these data types (i.e. an object that holds values for multiple data types even including other objects and arrays).</p>
      <h2>Forms</h2>
      <p>A custom <c>Form</c> component is the default export of <c>react-formulate</c>, and will dynamically generate a form based on an object. Simply pass the object you wish to create a form for to the <c>from</c> prop of the <c>Form</c> component. The <c>Form</c> component also has an <c>onSubmit</c> prop, which takes a callback function to be invoked when the form has been submitted. This callback will receive a new object with the values from the form.</p>
      <Code value={BasicExample} readOnly/>
      <p>Default labels for each input are generated based on the object keys.</p>
      <Example data={str} output={true} />
      <h2>Controlled Inputs</h2>
      <p>You may also wish to manually define the strucuture of your form. This gives you more control over what <Link to="input-types">InputType</Link> is used for each value. <c>react-formulate</c> has many additional exports that include these <Link to="input-types">InputTypes</Link>. All <Link to="input-types">InputTypes</Link> must be inoked as a function, optionally passing in an options object as an argument (see example below).</p>
      <Code value={DefinitionExample} readOnly/>
    </div>
  </div>
);

export default GettingStarted;

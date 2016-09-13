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
      <p>This project is actively under development. More features will be added in the near future (See <a href="https://www.github.com/gregchamberlain/react-formulate" target="_blank">github</a> README for a TODO list of future features.)! Suggestions and contributions are happily accepted!</p>
      <h1>Getting Started</h1>
      <p><c>react-formulate's</c> goal is to make it easier to create forms and controlled inputs in React. It includes a component to dynamically generate complete <c>Forms</c> from objects, as well as utilites to create controlled inputs for anything from a primative data type (string, number, boolean) to a complex, nested data structure of these data types (i.e. an object that holds values for multiple data types even including other objects and arrays).</p>
      <h2>Forms</h2>
      <p>A custom <c>Form</c> component is the default export of <c>react-formulate</c>, and will dynamically generate a form based on an object. Simply pass the object you wish to create a form for to the <c>from</c> prop of the <c>Form</c> component. The <c>Form</c> component also has an <c>onSubmit</c> prop, which takes a callback function to be invoked when the form has been submitted. This callback will receive a new object with the values from the form.</p>
      <Code value={BasicExample} readOnly/>
      <p>Default labels for each input are generated based on the object keys.</p>
      <Example data={str} output={true} readOnly={false}/>
      <h2>Controlled Inputs</h2>
      <p><c>react-formulate</c> also includes utilities for building easier controlled inputs, that can handle complex data strucutres.  Additional exports from the package include multiple <Link to="input-types">InputTypes</Link> that allow for declarative construction of these controlled inputs. Each of these <Link to="input-types">InputTypes</Link> has a prop for value and onChange, which can be used just like the props on a normal React input. However the onChange prop will, by default, return the current value of the input instead of the event the input emmits. See the <Link to="input-types">InputTypes</Link> page for more information.</p>
      <Code value={DefinitionExample} readOnly/>
    </div>
  </div>
);

export default GettingStarted;

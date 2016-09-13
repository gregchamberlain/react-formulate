import React from 'react';
import * as InputTypes from 'react-formulate';

const StringInput = InputTypes.string({label: 'String'});
const NumberInput = InputTypes.number({label: 'Number'});
const BooleanInput = InputTypes.boolean({label: 'Boolean'});
const ArrayInput = InputTypes.array(InputTypes.string())({label: 'Strings'});
const SelectInput = InputTypes.select({label: 'Select'})('One', 'Two', 'Three');
const ColorInput = InputTypes.color({label: 'Color'});

const InputTypesPage = ({   }) => (
  <div className="content">
    <h1>InputTypes</h1>
    <h2>string</h2>
      <c>{"import { string } from 'react-formulate'"}</c><br />
      <StringInput />
      <h4>Usage</h4>
      <c>
        {"const StringInput = string({label: 'String Label'})"}<br />
        {"<StringInput value={value} onChange={this.handleChange}/>"}
      </c>
    <h2>number</h2>
      <c>{"import { number } from 'react-formulate'"}</c><br />
      <NumberInput />
    <h2>boolean</h2>
      <c>{"import { boolean } from 'react-formulate'"}</c><br />
      <BooleanInput />
    <h2>array</h2>
      <c>{"import { array } from 'react-formulate'"}</c><br />
    <h2>object</h2>
      <c>{"import { object } from 'react-formulate'"}</c>
    <h2>select</h2>
      <c>{"import { select } from 'react-formulate'"}</c><br />
      <SelectInput />
  </div>
);

export default InputTypesPage;

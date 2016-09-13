import React from 'react';
import * as InputTypes from 'react-formulate';
import StringExample from '../../examples/string.example';
import NumberExample from '../../examples/number.example';
import BooleanExample from '../../examples/boolean.example';
import ArrayExample from '../../examples/array.example';

import SimpleExample from '../examples/simple';
import ComplexExample from '../examples/object_example';
import Code from '../ui/code';

const StringInput = SimpleExample('string')({label: 'String'});
const NumberInput = SimpleExample('number')({label: 'Number'});
const BooleanInput = SimpleExample('boolean')({label: 'Boolean'});
const ArrayInput = ComplexExample('array')(SimpleExample('string')({}))({label: 'Strings'});
const SelectInput = ComplexExample('select')(['One', 'Two', 'Three'])({label: 'Select'});
const ColorInput = InputTypes.color({label: 'Color'});

const InputTypesPage = ({   }) => (
  <div className="content">
    <h1>InputTypes</h1>
    <p>The examples in the documentation expect that you know how react controlled inputs work. The examples just show how each input would be setup and used in a jsx tag.</p>

    <h1>string</h1>
    <pre className="syntaxbox">
      <code>string([<var>options</var>])</code>
    </pre>
    <h3>Example</h3>
    <Code value={StringExample} readOnly/>
    <h3>Result</h3>
    <StringInput />

    <hr/>

    <h1>number</h1>
    <pre className="syntaxbox">
      <code>number([<var>options</var>])</code>
    </pre>
    <h3>Example</h3>
    <Code value={NumberExample} readOnly/>
    <h3>Result</h3>
    <NumberInput />

    <hr/>

    <h1>boolean</h1>
    <pre className="syntaxbox">
      <code>boolean([<var>options</var>])</code>
    </pre>
    <Code value={BooleanExample} readOnly/>
    <h3>Result</h3>
    <BooleanInput />

    <hr />

    <h1>array</h1>
    <p>The array InputType is invoked first passing in the inputType for the items in the array, then invoked again to pass the options object</p>
    <pre className="syntaxbox">
      <code>array(<var>inputType</var>)([<var>options</var>])</code>
    </pre>
    <Code value={ArrayExample} readOnly/>
    <h3>Result</h3>
    <ArrayInput />

    <hr/>

    <h1>object</h1>
      <pre className="syntaxbox">
        <code>object(<var>object</var>)([<var>options</var>])</code>
      </pre>
      <c>{"import { object } from 'react-formulate'"}</c>
  </div>
);

export default InputTypesPage;

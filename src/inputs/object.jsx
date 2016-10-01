import React from 'react';
import { merge } from 'lodash';
import { fromDefault } from '../utils/defaults.js';

const object = (inputTypes, opts = {}) => {
  opts = fromDefault(opts);
  const InputWrapper = ({value, onChange, children, style}) => (
    <ObjectInput onChange={onChange} value={value} inputTypes={inputTypes} opts={opts} style={style}>
      {children}
    </ObjectInput>
  );
  const defaultValue = {};
  Object.keys(inputTypes).forEach(key => {
    defaultValue[key] = inputTypes[key].defaultValue;
  });
  InputWrapper.defaultValue = defaultValue;
  return InputWrapper;
};

const ObjectInput  = ({ value = {}, onChange, inputTypes, opts, children, style = {} }) => (
  <label style={merge(style.label, opts.style.label)}>
    {opts.label}
    {children}
    {Object.keys(inputTypes).map(key => {
      let Input = inputTypes[key];
      return (
          <Input
            key={`input${key}`}
            value={value[key]}
            style={merge(opts.style, style)}
            onChange={val => onChange(Object.assign({}, value, {[key]: val}))}/>
      );
    })}
  </label>
);

export default object;

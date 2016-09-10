import React from 'react';

const object = inputTypes => (opts = {}) => {
  const InputWrapper = ({value, onChange, children}) => (
    <ObjectInput onChange={onChange} value={value} inputTypes={inputTypes} opts={opts}>
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

const ObjectInput  = ({ value = {}, onChange, inputTypes, opts, children }) => (
  <label>
    {opts.label}
    {children}
    {Object.keys(inputTypes).map(key => {
      let Input = inputTypes[key];
      return (
          <Input
            key={`input${key}`}
            value={value[key]}
            onChange={val => onChange(Object.assign({}, value, {[key]: val}))}/>
      );
    })}
  </label>
);

export default object;

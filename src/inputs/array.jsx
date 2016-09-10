import React, { Component } from 'react';
import { merge } from 'lodash';

const array = inputType => (opts = {}) => {
  const InputWrapper = ({value, onChange, children}) => (
    <ArrayInput value={value} onChange={onChange} InputType={inputType} opts={opts}>
      {children}
    </ArrayInput>
  );
  InputWrapper.defaultValue = [];
  return InputWrapper;
};

const ArrayInput = ({ value = [], onChange, InputType, opts, children }) => (
  <label>
    {opts.label}
    <ul>
      {value.map((item, idx) => (
        <li key={`item-${idx}`}>
          <InputType
            value={item}
            onChange={val => onChange(changeItem(value, idx, val))}>
            <span onClick={() => onChange(removeItem(value, idx))}>&times;</span>
          </InputType>
        </li>
      ))}
      <li onClick={() => onChange(value.concat(InputType.defaultValue))}>
        Add{` ${opts.label}`}
      </li>
    </ul>
    {children}
  </label>
);

const changeItem = (arr, idx, val) => {
  const newArr = merge([], arr);
  newArr[idx] = val;
  return newArr;
};

const removeItem = (arr, idx) => {
  const newArr = merge([], arr);
  newArr.splice(idx, 1);
  return newArr;
};

export default array;
